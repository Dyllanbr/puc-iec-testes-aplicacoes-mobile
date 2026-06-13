import { by, device, element, expect, waitFor } from 'detox';

describe('Movie Detail — tap num card abre detalhe', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
    await waitFor(element(by.id('movies-list'))).toBeVisible().withTimeout(8000);
  });

  // ── Flow 2a ─────────────────────────────────────────────────────────────
  it('abre tela de detalhe ao tocar num card', async () => {
    // TODO: tap no primeiro card visível da lista
    // Dica: element(by.id('movies-list')).getChildElement(1, ...) ou
    //       element(by.id('movie-card-<id>')).tap() — mas qual id?
    //       Uma estratégia: tap no primeiro elemento com index 0 dentro da lista
    it.todo('implementar');

    // TODO: verificar que detail-screen ficou visível
    // await waitFor(element(by.id('detail-screen'))).toBeVisible().withTimeout(5000);
  });

  // ── Flow 2b ─────────────────────────────────────────────────────────────
  it('tela de detalhe exibe título não-vazio', async () => {
    // TODO: navegar pra detalhe (igual ao flow 2a)

    // TODO: verificar que detail-title existe e não está vazio
    // Dica: await expect(element(by.id('detail-title'))).toBeVisible()
    //       NÃO dá pra checar texto exato sem saber o id do filme —
    //       verificar que o elemento existe é suficiente aqui
    it.todo('implementar');
  });

  // ── Flow 2c ─────────────────────────────────────────────────────────────
  it('tela de detalhe exibe nota no formato ⭐ X.X', async () => {
    // TODO: navegar pra detalhe
    // TODO: verificar detail-rating — ele deve ter texto que começa com '⭐'
    // Dica: await expect(element(by.id('detail-rating'))).toHaveText(
    //         expect.stringContaining('⭐')
    //       ) — ou use matcher da Detox
    it.todo('implementar');
  });
});
