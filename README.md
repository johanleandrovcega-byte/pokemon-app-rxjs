
# Pokémon App - Consumo de PokéAPI con Angular y RxJS

## Descripción

Aplicación desarrollada en Angular 19 que consume la PokéAPI utilizando HttpClient y operadores RxJS para mostrar un listado de Pokémon con información detallada.

## Tecnologías utilizadas

- Angular 19
- TypeScript
- RxJS
- HttpClient
- SCSS
- PokéAPI

## Características implementadas

### Requisitos obligatorios

- Consumo de API REST con HttpClient.
- Uso de interfaces TypeScript sin `any`.
- Implementación de `switchMap`, `forkJoin` y `map`.
- Suscripción en `ngOnInit()`.
- Manejo de estados de carga y error.
- Visualización mediante `*ngFor`.
- Tarjetas con imagen y múltiples propiedades del Pokémon.

### Funcionalidades opcionales

- Paginación utilizando el parámetro `offset` de la PokéAPI.
- Diseño personalizado y responsivo con SCSS.

## Instalación

Clonar el repositorio:

```bash
git clone https://github.com/johanleandrovcega-byte/pokemon-app-rxjs.git
```

Ingresar al proyecto:

```bash
cd pokemon-app-rxjs
```

Instalar dependencias:

```bash
npm install
```

Ejecutar la aplicación:

```bash
ng serve
```

Abrir en el navegador:

```text
http://localhost:4200
```

## Autor

Johan Leandro Vega Morales
