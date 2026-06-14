// __tests__/integration/01-useFavorites.test.ts
//
// 🔵 PRÁTICA — hands-on do Bloco 2 (aquecimento · NÃO conta nota)
//    Fazemos juntos em aula pra pegar o jeito do renderHook.
// `renderHook` roda um hook no ambiente React SEM renderizar tela.
// Aqui o hook é `useFavorites` (fina camada sobre o store de favoritos).
//
// Setup já pronto abaixo. Complete os it.todo:
//   const { result } = renderHook(() => useFavorites());
//   act(() => { result.current.toggle(42); });     // muta estado → dentro de act()
//   expect(result.current.isFavorite(42)).toBe(true);

import { renderHook, act } from '@testing-library/react-native';
import { useFavorites } from '@/hooks/useFavorites';
import { useFavoritesStore } from '@/store/favoritesStore';

// Store é singleton — zere entre testes pra não vazar estado.
beforeEach(() => useFavoritesStore.setState({ ids: [] }));

describe('useFavorites (renderHook)', () => {
  it.todo('1. começa sem favoritos (count === 0)');

  it.todo('2. toggle adiciona e depois remove — count volta a 0');

  it.todo('3. isFavorite reflete o estado após add(id)');
});
