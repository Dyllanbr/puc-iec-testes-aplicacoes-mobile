import { by, device, element, expect, waitFor } from 'detox';

// Convenção de testID no app: movie-card-favorite-{id} e movie-card-heart-{id}
// O ícone do coração: 🤍 = não favoritado | ❤️ = favoritado

describe('Favoritar — heart toggle persiste', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
    await waitFor(element(by.id('movies-list'))).toBeVisible().withTimeout(8000);
  });

  // ── Flow 3a ─────────────────────────────────────────────────────────────
  it('coração começa como não-favoritado (🤍)', async () => {
    // TODO: pegar o primeiro movie-card-heart-* visível
    // TODO: verificar que o texto é '🤍'
    // Dica: await expect(element(by.id('movie-card-heart-<id>'))).toHaveText('🤍')
    // Problema: o id do filme não é conhecido. Uma estratégia:
    //   - usar by.text('🤍') que encontra o primeiro coração vazio
    //   - ou scrollar e inspecionar via Detox Studio
    it.todo('implementar');
  });

  // ── Flow 3b ─────────────────────────────────────────────────────────────
  it('tap no botão de favorito muda ícone para ❤️', async () => {
    // TODO 1: tap no primeiro botão movie-card-favorite-* visível
    // Dica: element(by.id('movie-card-favorite-<id>')).tap()

    // TODO 2: verificar que o ícone do coração mudou para ❤️
    // Dica: await expect(element(by.id('movie-card-heart-<id>'))).toHaveText('❤️')
    it.todo('implementar');
  });

  // ── Flow 3c ─────────────────────────────────────────────────────────────
  it('favorito persiste após navegar pra detalhe e voltar', async () => {
    // TODO 1: favoritar um filme (tap no heart)
    // TODO 2: navegar pro detalhe desse filme
    // TODO 3: voltar pra home (pressionar voltar ou tap no back button)
    // TODO 4: verificar que o ícone ainda é ❤️
    it.todo('implementar');
  });
});
