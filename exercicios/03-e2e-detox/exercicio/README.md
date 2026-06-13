# Exercício 03: E2E com Detox

Este exercício é derivado do exercício 02 (`02-setup-suite-unitaria/exercicio`) com:

- **App completo:** FlatList + MovieCard com favoritos funcionando (TODOs 3 e 6 resolvidos)
- **testIDs** adicionados em todos os elementos-chave para os testes Detox
- **Detox configurado:** `.detoxrc.js`, `e2e/jest.config.js`, scaffolds de flows e robot

---

## Como montar o projeto completo

O exercício aqui contém **apenas os arquivos modificados/adicionados**. O restante do projeto (package.json, App.tsx, assets, store, queries, etc.) vem do exercício 02.

```bash
# 1. Copiar a base do exercício 02
cp -r ../02-setup-suite-unitaria/exercicio/* .

# 2. Instalar Detox
npm install --save-dev detox jest-circus

# 3. Instalar o CLI global (uma vez por máquina)
npm install -g detox-cli

# 4. iOS: instalar pods
cd ios && pod install && cd ..

# 5. Buildar o app (iOS)
detox build --configuration ios.sim.debug

# 6. Rodar os testes (todos vão falhar — é o esperado, são todos it.todo)
detox test --configuration ios.sim.debug
```

---

## testIDs disponíveis no app

| Elemento | testID |
|---|---|
| Tela Home (View) | `home-screen` |
| FlatList de filmes | `movies-list` |
| Card do filme | `movie-card-{id}` |
| Título do card | `movie-card-title-{id}` |
| Botão favoritar | `movie-card-favorite-{id}` |
| Ícone do coração | `movie-card-heart-{id}` → `🤍` ou `❤️` |
| Tela de detalhe | `detail-screen` |
| Título no detalhe | `detail-title` |
| Nota no detalhe | `detail-rating` |

---

## Estrutura dos testes

```
e2e/
  flows/
    homeList.test.ts       ← Flow 1: home + lista aparecem
    movieDetail.test.ts    ← Flow 2: tap → detalhe com título e nota
    favoriteFlow.test.ts   ← Flow 3: favoritar → coração muda
  robots/
    HomeRobot.ts           ← Scaffold do Robot Pattern (implementar)
```

---

## Rodando

```bash
# iOS Simulator
detox test --configuration ios.sim.debug

# Android Emulator
detox test --configuration android.emu.debug

# Arquivo específico
detox test --configuration ios.sim.debug e2e/flows/homeList.test.ts

# Com gravação de vídeo (ótimo para debug de flake)
detox test --configuration ios.sim.debug --record-videos all
```
