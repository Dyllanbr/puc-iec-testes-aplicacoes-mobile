import { by, element, waitFor } from 'detox';

/**
 * Robot pattern — encapsula COMO interagir com a Home screen.
 * O teste expressa O QUÊ, o robot sabe o como.
 *
 * Implemente os métodos abaixo (substitua cada `throw` pela implementação real).
 */
export class HomeRobot {
  // Aguarda a home screen ficar visível
  async waitForHomeScreen(): Promise<this> {
    // TODO: waitFor home-screen visível com timeout 5000ms
    throw new Error('Não implementado');
  }

  // Aguarda a lista de filmes carregar
  async waitForMoviesList(): Promise<this> {
    // TODO: waitFor movies-list visível com timeout 8000ms
    throw new Error('Não implementado');
  }

  // Toca no card do filme pelo id
  async tapMovieCard(movieId: number): Promise<this> {
    // TODO: tap em movie-card-{movieId}
    throw new Error('Não implementado');
  }

  // Toca no botão de favoritar pelo id do filme
  async tapFavoriteButton(movieId: number): Promise<this> {
    // TODO: tap em movie-card-favorite-{movieId}
    throw new Error('Não implementado');
  }

  // Verifica que o coração do filme está como 🤍 (não favoritado)
  async expectHeartEmpty(movieId: number): Promise<this> {
    // TODO: expect movie-card-heart-{movieId} toHaveText '🤍'
    throw new Error('Não implementado');
  }

  // Verifica que o coração do filme está como ❤️ (favoritado)
  async expectHeartFilled(movieId: number): Promise<this> {
    // TODO: expect movie-card-heart-{movieId} toHaveText '❤️'
    throw new Error('Não implementado');
  }
}

// Exemplo de uso no teste:
//
// const home = new HomeRobot();
// await home
//   .waitForHomeScreen()
//   .then(r => r.waitForMoviesList())
//   .then(r => r.tapFavoriteButton(42))
//   .then(r => r.expectHeartFilled(42));
