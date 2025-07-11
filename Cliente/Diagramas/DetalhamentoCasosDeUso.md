
---

## 📘 Tabela de Casos de Uso

| Código | Caso de Uso                                  | Atores envolvidos         |
|--------|-----------------------------------------------|---------------------------|
| UC01   | Cadastrar e autenticar usuário               | Usuário                   |
| UC02   | Consultar indicadores fundamentalistas       | Usuário, API Financeira   |
| UC03   | Calcular preço teto (Graham, BasIn)          | Usuário, Sistema          |
| UC04   | Adicionar/remover ativo à carteira           | Usuário                   |
| UC05   | Visualizar carteira de investimentos         | Usuário                   |
| UC06   | Configurar e receber alertas                 | Usuário, Sistema          |
| UC07   | Prever valorização com IA                    | Usuário, Sistema de IA    |
| UC08   | Analisar relatórios (RI)                     | Sistema de IA             |
| UC09   | Visualizar projeções gráficas                | Usuário, Sistema de IA    |
| UC10   | Exportar carteira em PDF ou Excel            | Usuário                   |
| UC11   | Editar perfil de investimento                | Usuário                   |

---

## 📄 Detalhamento dos Casos de Uso

---

### UC01 – Cadastrar e autenticar usuário

- **Atores:** Usuário
- **Descrição:** Permite criar conta, realizar login e autenticação em dois fatores.
- **Pré-condição:** Nenhuma
- **Pós-condição:** Usuário autenticado no sistema.
- **Fluxo Principal:**
  1. Acessa tela de cadastro.
  2. Preenche nome, e-mail, senha.
  3. Recebe e-mail de validação.
  4. Realiza login com 2FA (se habilitado).

---

### UC02 – Consultar indicadores fundamentalistas

- **Atores:** Usuário, API Financeira
- **Descrição:** Permite visualizar os principais indicadores da ação pesquisada.
- **Pré-condição:** Estar logado.
- **Pós-condição:** Indicadores exibidos ao usuário.
- **Fluxo Principal:**
  1. Usuário busca ação por ticker.
  2. Sistema consulta API e retorna dados.
  3. Exibe cotação, P/L, ROE, P/VPA, DY, etc.

---

### UC03 – Calcular preço teto (Graham, BasIn)

- **Atores:** Usuário, Sistema
- **Descrição:** Calcula automaticamente o preço justo com base nos métodos de Graham e BasIn.
- **Fluxo Principal:**
  1. Usuário acessa a aba de indicadores.
  2. Sistema calcula e exibe:
     - Preço teto por Graham
     - Preço teto por BasIn
     - Sinalização: subvalorizado, sobrevalorizado, justo.

---

### UC04 – Adicionar/remover ativo à carteira

- **Atores:** Usuário
- **Descrição:** Usuário adiciona ou remove ativos da carteira virtual.
- **Fluxo Principal:**
  1. Seleciona um ativo.
  2. Clica em "Adicionar à carteira".
  3. Informa quantidade, valor e data.
  4. Sistema atualiza dados da carteira.
- **Fluxo Alternativo:**
  - Clicar em “Remover da carteira”.

---

### UC05 – Visualizar carteira de investimentos

- **Atores:** Usuário
- **Descrição:** Exibe a carteira com informações consolidadas.
- **Fluxo Principal:**
  1. Usuário acessa a aba “Minha carteira”.
  2. Sistema exibe:
     - Lista de ativos
     - Rentabilidade por ativo
     - Rentabilidade total
     - Gráficos de distribuição
     - Comparação com benchmarks

---

### UC06 – Configurar e receber alertas

- **Atores:** Usuário, Sistema
- **Descrição:** Permite configurar alertas com base em condições definidas.
- **Fluxo Principal:**
  1. Usuário acessa “Meus alertas”.
  2. Define regra (ex: preço abaixo do teto).
  3. Sistema monitora e envia notificação.

---

### UC07 – Prever valorização com IA

- **Atores:** Usuário, Sistema de IA
- **Descrição:** IA prevê o comportamento futuro do ativo.
- **Fluxo Principal:**
  1. Usuário acessa a aba “Previsão”.
  2. Sistema carrega dados históricos e RI.
  3. IA analisa e retorna:
     - Gráfico com projeção
     - Porcentagem de valorização provável
     - Justificativas fundamentadas

---

### UC08 – Analisar relatórios de resultados (RI)

- **Atores:** Sistema de IA
- **Descrição:** Faz leitura e análise semântica dos relatórios.
- **Fluxo Principal:**
  1. Sistema acessa ou recebe RI.
  2. Executa análise de sentimento e palavras-chave.
  3. Envia dados para o mecanismo de previsão.

---

### UC09 – Visualizar projeções gráficas

- **Atores:** Usuário, Sistema de IA
- **Descrição:** Exibe os gráficos com as previsões geradas pela IA.
- **Fluxo Principal:**
  1. Usuário visualiza resultados do UC07.
  2. Sistema renderiza gráficos interativos.

---

### UC10 – Exportar carteira em PDF ou Excel

- **Atores:** Usuário
- **Descrição:** Permite exportar carteira completa para análise externa.
- **Fluxo Principal:**
  1. Acessa carteira.
  2. Clica em “Exportar”.
  3. Escolhe formato.
  4. Download é iniciado.

---

### UC11 – Editar perfil de investimento

- **Atores:** Usuário
- **Descrição:** Altera preferências e perfil de risco.
- **Fluxo Principal:**
  1. Acessa “Meu perfil”.
  2. Atualiza dados como:
     - Perfil de risco
     - Setores favoritos
     - Estratégias preferidas

---
