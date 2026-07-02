# Trabalho Final em Grupo (60 pts)

**Disciplina:** Testes de Aplicações Mobile
**Entrega:** até **15/07/2026, 23:59**
**Modalidade:** grupo (3 a 4 alunos, auto-organizados em sala na Aula 1)
**Apresentação:** aula final (data confirmada em aula — ver anúncio no Canvas)

---

## O que é

Cada grupo escolhe **um tema** entre os disponíveis abaixo e desenvolve um **artefato técnico completo**
cobrindo esse tema — a peça que fecha a disciplina, aplicando a pirâmide de testes (unit → integração
→ E2E) e as ferramentas que vimos ao longo do curso num projeto de escopo maior e livre.

> **Atualização pós-aula (02/07/2026, à noite):** revisamos a lista revelada em aula hoje contra
> evidência real de mercado (blogs de engenharia, postmortems, docs oficiais dos últimos 3 anos) e
> against o que a disciplina de fato ensinou hands-on. Resultado: **tema 2 mudou** (Espresso/XCUITest
> nunca foi praticado em aula — nem tem ponte real com a árvore de componentes RN — trocamos por algo
> que usa o que vocês já dominam) e **2 temas novos entraram** (11 e 12), pra cobrir perfis de QA que
> não são "automation engineer puro". Se seu grupo já tinha decidido tema 2, fala com o prof — não
> tem problema nenhum trocar.

## Temas disponíveis

Organizados por **trilha de skill** — escolha pelo que seu grupo curte, não só pelo que parece "mais IA".

### 🤖 Automação & Arquitetura de Teste

| # | Tema | Stack sugerida | Por que é real |
|---|------|----------------|-----------------|
| 1 | **Automação Mobile End-to-End** | Maestro + Cloud Devices (Firebase Test Lab/BrowserStack) | Núcleo do curso (Atividade 4) — aqui é aprofundar: mais flows, matriz de dispositivos, execução em cloud farm de verdade |
| 2 | **Arquitetura de Suíte de Teste** *(era Native UI Testing)* | Robot Pattern ou Screenplay Pattern sobre Maestro + RNTL | Robot Pattern (Jake Wharton, [jakewharton.com/testing-robots](https://jakewharton.com/testing-robots/)) e Screenplay Pattern ([serenity-js.org](https://serenity-js.org/handbook/design/screenplay-pattern/)) são padrões vivos de organização de suíte — aplicáveis em cima do Maestro/RNTL que vocês já sabem, sem depender de ferramenta nunca vista |
| 9 | **Mobile API Contract Testing** | Pact + Jest (consumer-driven contracts) | Pact com Jest é ecossistema ativo em apps React/RN que consomem API própria ([reflectoring.io/pact-react-consumer](https://reflectoring.io/pact-react-consumer/)) — útil se o grupo integrar com o backend do CineHub/capstone |

### 🧠 IA aplicada a testes mobile

| # | Tema | Stack sugerida | Por que é real |
|---|------|----------------|-----------------|
| 5 | **Visual AI em Mobile** | Applitools Eyes ou Percy + baseline strategy | Conteúdo da Aula 6 — aqui é ir a fundo: baseline cross-device, gerenciar falsos positivos |
| 6 | **Test Generation com LLM** | Claude API + Maestro | Conteúdo da Aula 6 (prompt engineering, few-shot) — aprofundar com avaliação sistemática da taxa de acerto do LLM |
| 7 | **AI Agent para Exploratory Mobile** | AppAgent ou DroidBot + LLM | Base acadêmica real: Zhang et al. 2023 *AppAgent* (arXiv:2312.13771), demo ao vivo na Aula 6 — aqui é rodar em app maior e catalogar achados |

### ⚡ Performance & Segurança

| # | Tema | Stack sugerida | Por que é real |
|---|------|----------------|-----------------|
| 3 | **Performance Mobile Testing** | Macrobenchmark (Android Jetpack) + baseline/regressão | Aprofunda o lab de 02/07 — mede cold start/jank; ref. oficial [Android Developers — app startup](https://developer.android.com/topic/performance/appstartup/best-practices) |
| 4 | **Mobile Security Testing** | OWASP MASVS + MobSF + achados reais de manifest | Aprofunda o lab de 02/07 (achado real `allowBackup`) — caso real de impacto: SDK EngageLab expôs "millions of Android wallets" por misconfig similar ([Microsoft Security Blog, abr/2026](https://www.microsoft.com/en-us/security/blog/2026/04/09/intent-redirection-vulnerability-third-party-sdk-android/)) |

### 🏗️ Qualidade & Pipeline

| # | Tema | Stack sugerida | Por que é real |
|---|------|----------------|-----------------|
| 8 | **CI/CD Pipeline Mobile** | GitHub Actions + Fastlane + Firebase Test Lab | Conteúdo da Aula 6. **Nível avançado (opcional, +profundidade):** flaky test quarantine ([prática documentada desde o Google Testing Blog](https://testing.googleblog.com/2016/05/); ~1.5% flake rate afeta ~16% dos testes) + DORA Change Failure Rate tracking |
| 11 | **Mutation Testing (novo)** | Stryker (StrykerJS) sobre uma lib de domínio do app, com gate de CI | StrykerJS documenta suporte a Jest/React ([stryker-mutator.io/docs/stryker-js/guides/react](https://stryker-mutator.io/docs/stryker-js/guides/react/)), break-threshold vira gate real no pipeline. Escopo: módulo de domínio testável em Jest puro (não o app RN inteiro — Metro/Babel são ponto de atrito não resolvido pelo StrykerJS) |

### 🔍 Manual, Exploratório & Acessibilidade

| # | Tema | Stack sugerida | Por que é real |
|---|------|----------------|-----------------|
| 10 | **Accessibility Testing Mobile** | Android Accessibility Scanner + Xcode Accessibility Inspector + auditoria manual WCAG | Conecta direto com o que vimos em aula (accessibilityRole/Label no Maestro/RNTL, 02/07) — bom tema pra quem curte pensar em usuário real, não só código |
| 12 | **Testes Manuais Estruturados → Regressão Automatizada (novo)** | Charters + Session-Based Test Management (Bach) **+** conversão dos bugs achados em testes automatizados (RNTL/Maestro) no CI | Pra quem curte testar manualmente e não quer o projeto inteiro em código: **Parte A** — sessões com charter, timebox, session report (mesma técnica da Aula 2); **Parte B avaliável em CI** — cada bug real achado na Parte A vira 1 teste de regressão automatizado. SBTM segue documentado como prática viva ([yrkan.com/blog/test-charter-writing](https://yrkan.com/blog/test-charter-writing/)) |

> Pode ser sobre o app da disciplina (CineFav/TMDB) ou outro app open source — combine com o professor se for usar outro.

### Temas que avaliamos e **não entraram** (e por quê)

- **Gerenciamento de equipes de QA / test management (TestRail, Xray):** tema de processo/ferramenta,
  não gera repo+CI verde (exigência da rubrica) — não aproveita as skills técnicas do curso. Se o
  grupo tiver interesse, pode virar **1 seção extra no relatório** de qualquer tema acima, não tema
  isolado.
- **Native UI Testing puro (Espresso/XCUITest):** curso nunca praticou hands-on (só Maestro foi
  ensinado como E2E) e frameworks nativos não têm visibilidade real da árvore de componentes RN —
  gap grande demais pra 2 semanas. Virou o tema 2 revisado (Arquitetura de Suíte), que usa o que
  vocês já sabem.

## Como compor a nota (60 pts)

| Critério | Peso | Pontos |
|----------|------|--------|
| Apresentação oral estruturada (10min + 5min Q&A) | 20% | 12 |
| Artefato técnico (repo GitHub funcional, executável) | 35% | 21 |
| Relatório analítico (1pg, conciso, foco em insights) | 20% | 12 |
| Domínio conceitual demonstrado em Q&A | 15% | 9 |
| Originalidade e profundidade | 10% | 6 |

### Critérios de qualidade do artefato técnico

- **Reprodutibilidade:** README com passos exatos pra rodar em máquina limpa.
- **CI verde:** GitHub Actions ou similar com badge no README.
- **Cobertura adequada ao tema:** ≥ 5 testes/flows, sem testes triviais. (Tema 12: ≥ 5 bugs
  documentados na Parte A + convertidos em teste automatizado na Parte B.)
- **Documentação inline:** comentários nos lugares certos (não em todo lugar).
- **Citações:** referências acadêmicas ou de engenharia real no relatório (mínimo 3) — vale usar as
  fontes listadas na coluna "Por que é real" acima como ponto de partida.

## Regras

- **Grupo de 3 a 4.** Todos os integrantes devem demonstrar domínio do projeto no Q&A — falta de
  domínio individual gera desconto de nota **individual** (não do grupo todo).
- **Originalidade:** ≥ 60% de código autoral (não é fork direto de um projeto pronto).
- **Ética em IA:** uso de IA é incentivado, mas declare no README qual ferramenta usou e em que medida.
  Cópia sem entendimento detectada na apresentação = zero.

## Entrega

1. Repo GitHub **público** do grupo (pode ser fork ou repo novo — linkar no Canvas).
2. Relatório 1 página (PDF ou Markdown) no repo.
3. Apresentação ao vivo na aula final: 10min + 5min Q&A.

Dúvidas: Teams da turma ou jackson.96@gmail.com.
