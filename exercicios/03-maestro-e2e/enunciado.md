# Atividade 3 — Suíte Maestro E2E (10 pts)

**Disciplina:** Testes de Aplicações Mobile
**Entrega:** até **28/06/2026**
**Modalidade:** individual
**Tempo estimado:** ~2h (flows 01–03 feitos em aula; 04–05 em casa)

---

## Contexto

Na Aula 4 você viu Maestro ao vivo. `01-launch.yaml` é o modelo resolvido. `02` e `03` você criou sozinho no Maestro Studio durante a aula. Esta entrega é finalizar os flows `04` e `05` e subir tudo via PR.

---

## Pré-requisitos (setup antes da entrega)

👉 **Guia completo de setup:** [COMECE-AQUI.md](https://github.com/jacksonsmith/puc-iec-testes-aplicacoes-mobile/blob/main/exercicios/03-maestro-e2e/COMECE-AQUI.md) — passo a passo por SO (macOS/Windows/Linux) + troubleshooting.

**Resumo (3 passos):**

1. **App** — baixar APK pronto e instalar (sem build):
   ```bash
   # https://github.com/jacksonsmith/puc-iec-testes-aplicacoes-mobile/releases
   adb install TestesQAMobile.apk
   ```
2. **Maestro CLI** — `curl -Ls https://get.maestro.mobile.dev | bash` (Windows: `iwr get.maestro.mobile.dev/windows | iex`)
3. **Verificar** — na raiz do repo:
   ```bash
   bash setup-maestro-check.sh        # macOS/Linux
   # powershell -ExecutionPolicy Bypass -File setup-maestro-check.ps1   # Windows
   ```

Tudo verde ✅ → pronto pra entrega.

---

## O app-alvo: TestesQAMobile

| Tela | testIDs disponíveis |
|---|---|
| Home | `home-category-functional`, `home-category-performance` |
| Formulário | `userform-name-input`, `userform-email-input`, `userform-submit-button` |
| Calculadora | `calculator-digit-7`, `calculator-operator-plus`, `calculator-equals`, `calculator-display` |
| Todo list | `todolist-add-button`, `todolist-item-${id}`, `todolist-item-delete-${id}` |
| Onboarding | `onboarding-next-button`, `onboarding-skip-button`, `onboarding-finish-button` |

Use `tapOn: id: "testID"` — mais estável que `tapOn: "texto"`.

---

## Critérios de avaliação

| Flow | Tela | Pts |
|---|---|---|
| `flows/01-launch.yaml` | Home aparece com categorias | 2 |
| `flows/02-userform.yaml` | Preencher formulário + submeter | 2 |
| `flows/03-calculator.yaml` | `7 + 3 =` → verificar `10` na tela | 2 |
| `flows/04-todolist.yaml` | Adicionar item + verificar que aparece | 2 |
| `flows/05-onboarding.yaml` | Completar onboarding até tela final | 2 |
| **Bônus** | `_fragments/` com fragmento + `runFlow:` em algum flow | +1 |

**Total: 10 pts** (+ 1 bônus)

Cada flow vale **2 pts**: 1pt por existir com `appId:` correto + 1pt por estar completo (sem `# TODO` + tem `assertVisible`).

`01-launch.yaml` já vem resolvido no starter — use como modelo para os outros.

---

## Rodando local

**Setup rápido com emulator automático:**
```bash
cd exercicios/03-maestro-e2e

# Inicia emulator + roda todos os flows
chmod +x ../../maestro-local.sh
../../maestro-local.sh

# Ou especificar AVD
../../maestro-local.sh "Pixel_6_API_35" test flows/
```

**Ou manual (se já tem emulator rodando):**
```bash
cd exercicios/03-maestro-e2e/pratica

# Um flow
maestro test flows/04-todolist.yaml

# Todos
maestro test flows/

# Visual editor (Maestro Studio — browser em localhost:9999)
maestro studio
```

**Troubleshooting:**
- Emulator lento? Rodar sem snapshot: `emulator -avd XXX -no-snapshot-load -no-audio`
- Device não conecta? `adb kill-server && adb start-server`
- Maestro hierarchy vazio? Restart emulator

---

## Entrega

PR no **seu fork** com os 5 flows em `exercicios/03-maestro-e2e/pratica/flows/`.

O bot comenta a nota no PR a cada commit — você sabe a nota antes do prazo.
Após aprovação do bot, cole o link do PR no Canvas (campo de entrega da Atividade 3).
