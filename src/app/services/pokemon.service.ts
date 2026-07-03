import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {
  Observable,
  forkJoin,
  map,
  switchMap
} from 'rxjs';

import {
  Pokemon,
  PokemonListResponse
} from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(
    private http: HttpClient
  ) { }

  getPokemons(offset: number): Observable<Pokemon[]> {

    return this.http
      .get<PokemonListResponse>(
        `${this.apiUrl}?limit=20&offset=${offset}`
      )
      .pipe(

        switchMap(response => {

          const requests = response.results.map(
            pokemon => this.http.get<Pokemon>(pokemon.url)
          );

          return forkJoin(requests);

        }),

        map(pokemons =>
          pokemons.sort((a, b) => a.id - b.id)
        )

      );
  }
}