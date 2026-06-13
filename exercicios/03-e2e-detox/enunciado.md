# Atividade 3 — E2E com Detox: 3 Flows no App de Filmes (15 pts)

**Disciplina:** Testes de Aplicações Mobile
**Entrega:** até **28/06/2026**
**Modalidade:** individual
**Tempo estimado:** ~2-3 horas

---

## Por que essa atividade

Aula 4 cobriu **E2E gray-box com Detox** — o app rodando de verdade no simulador, fluxo ponta a ponta. Aqui você escreve 3 flows E2E sobre o mesmo app de filmes que você testou com Jest/RNTL na Atividade 2, agora com o app inteiro rodando.

---

## Pré-requisito (setup ~20min)

```bash
# 1. Fork do repo público no GitHub (o mesmo da Atividade 2)
# 2. Clone o SEU fork
git clone https://github.com/SEU-USUARIO/puc-iec-testes-aplicacoes-mobile.git
cd puc-iec-testes-aplicacoes-mobile/exercicios/03-e2e-detox/exercicio

npm install

# Instalar Detox CLI (global, uma vez)
npm install -g detox-cli

# Buildar o app (iOS — requer Mac + Xcode)
detox build --configuration ios.sim.debug

# Ou Android (requer Android Studio + emulador configurado)
detox build --configuration android.emu.debug
```

> **Requer simulador iOS ou emulador Android com app buildado.** Diferente da Atividade 2 que só usava Node.

---

## O exercício

O exercício em `exercicios/03-e2e-detox/exercicio/` é o **mesmo app da Atividade 2** com Detox já configurado (`.detoxrc.js`, `e2e/jest.config.js`, `testID` nos componentes principais).

`testID`s disponíveis no app:

| Elemento | testID |
|---|---|
| Tela Home | `home-screen` |
| Lista de filmes | `movies-list` |
| Card de filme (por id) | `movie-card-{id}` |
| Título do card | `movie-card-title-{id}` |
| Botão favoritar (no card) | `movie-card-favorite-{id}` |
| Ícone do coração | `movie-card-heart-{id}` → `🤍` ou `❤️` |
| Tela de detalhe | `detail-screen` |
| Título na tela de detalhe | `detail-title` |
| Nota na tela de detalhe | `detail-rating` |

---

## Tarefa

Escreva os 3 flows abaixo em `e2e/`. Os arquivos do scaffold estão em `e2e/flows/` com `it.todo` marcando o que falta.

### Flow 1 — Listagem de filmes (`homeList.test.ts`) — 3 pts

Confirme que:
- A tela `home-screen` fica visível após o app iniciar
- A lista `movies-list` fica visível
- Pelo menos um card (`movie-card-*`) aparece na tela

### Flow 2 — Detalhe do filme (`movieDetail.test.ts`) — 3 pts

1. App inicia na home
2. Tap no primeiro card visível
3. Tela `detail-screen` fica visível
4. `detail-title` exibe o título (não vazio)
5. `detail-rating` exibe nota no formato `⭐ X.X`

### Flow 3 — Favoritar (`favoriteFlow.test.ts`) — 4 pts

1. App inicia na home e lista aparece
2. O ícone `movie-card-heart-{id}` de um filme mostra `🤍` (não favoritado)
3. Toca em `movie-card-favorite-{id}` desse filme
4. O ícone muda para `❤️` (favoritado)
5. Navega pro detalhe do filme e volta
6. O ícone ainda está `❤️` (state persistiu)

### Robot Pattern — 3 pts

Crie pelo menos **1 Robot** com no mínimo 3 métodos, usado em um ou mais dos seus flows.

```typescript
// Exemplo de estrutura esperada em e2e/robots/HomeRobot.ts
export class HomeRobot {
  async waitForHomeScreen() { /* ... */ return this; }
  async tapFirstMovie()     { /* ... */ return this; }
  async expectDetailVisible() { /* ... */ }
}
```

### Eliminatório

`detox test --configuration ios.sim.debug` (ou `android.emu.debug`) roda **verde** — 2 pts

---

## Critérios de avaliação

| # | Critério | Pontos |
|---|---|---|
| 1 | Flow 1: listagem aparece na home | 3 |
| 2 | Flow 2: tap → detalhe com título e nota | 3 |
| 3 | Flow 3: favoritar → aparece na aba | 4 |
| 4 | Robot Pattern com ≥ 3 métodos | 3 |
| **Elim** | `detox test` roda verde (iOS sim OU Android emu) | 2 |
| **Bônus** | CI: GitHub Actions roda `detox test` com emulador | +2 |

---

## Entrega

PR no **seu fork** do repo público com:
1. Arquivos de teste em `e2e/flows/`
2. Robot(s) em `e2e/robots/`
3. Link do PR colado no Canvas (campo de entrega da Atividade 3)

> **Eliminatório:** se `detox test` não rodar verde, os 15pts não são computados.
