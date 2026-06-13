import { by, device, element, expect, waitFor } from 'detox';

describe('Home — listagem de filmes', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  // ── Flow 1a ─────────────────────────────────────────────────────────────
  it('exibe a tela home após iniciar o app', async () => {
    // TODO: aguardar que o elemento com testID 'home-screen' fique visível
    // Dica: waitFor(element(by.id('home-screen'))).toBeVisible().withTimeout(5000)
    it.todo('implementar');
  });

  // ── Flow 1b ─────────────────────────────────────────────────────────────
  it('exibe a lista de filmes', async () => {
    await waitFor(element(by.id('home-screen'))).toBeVisible().withTimeout(5000);

    // TODO: verificar que movies-list fica visível
    it.todo('implementar');
  });

  // ── Flow 1c ─────────────────────────────────────────────────────────────
  it('lista tem ao menos um card de filme', async () => {
    await waitFor(element(by.id('home-screen'))).toBeVisible().withTimeout(5000);
    await waitFor(element(by.id('movies-list'))).toBeVisible().withTimeout(5000);

    // TODO: verificar que existe pelo menos um elemento com id que começa com 'movie-card-'
    // Dica: by.id('movies-list') tem children — verifique o primeiro item visível
    // Alternativa simples: scroll um pouco e verificar que algum card aparece
    it.todo('implementar');
  });
});
