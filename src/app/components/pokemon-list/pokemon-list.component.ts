import { Component, OnInit } from '@angular/core';

import { Pokemon } from '../../models/pokemon.model';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  standalone: false,
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss'
})
export class PokemonListComponent implements OnInit {

  pokemons: Pokemon[] = [];

  loading = false;

  error = '';

  constructor(
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {

    this.loading = true;

    this.pokemonService
      .getPokemons()
      .subscribe({

        next: data => {
          this.pokemons = data;
          this.loading = false;
        },

        error: () => {
          this.error = 'No fue posible cargar los Pokémon.';
          this.loading = false;
        }

      });
  }
}