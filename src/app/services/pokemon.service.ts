import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, forkJoin, switchMap, map , catchError, throwError } from 'rxjs';

import {
  Pokemon,
  PokemonListResponse
} from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private apiUrl =
    'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0';

  constructor(
    private http: HttpClient
  ) { }

  getPokemons(): Observable<Pokemon[]> {

  return this.http
    .get<PokemonListResponse>(this.apiUrl)
    .pipe(

      switchMap(response => {

        const requests = response.results.map(
          pokemon => this.http.get<Pokemon>(pokemon.url)
        );

        return forkJoin(requests);

      }),

      map(pokemons =>
        pokemons.sort((a, b) => a.id - b.id)
      ),

      catchError(error => {

        console.error('Error al obtener los Pokémon:', error);

        return throwError(() => error);

      })

    );
}
}