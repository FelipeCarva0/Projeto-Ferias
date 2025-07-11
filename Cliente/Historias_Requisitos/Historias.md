# História de Usuário – Sistema de Gerenciamento de Investimentos

## Título: Analisar ações, prever valorizações e montar carteira personalizada

**Objetivo:** Criar um sistema completo para análise fundamentalista, previsão de ativos com IA e acompanhamento de carteira de investimentos.

---

## 1. Cadastro e Login

- O usuário acessa o sistema e realiza o cadastro.
- Login com autenticação em dois fatores.
- Configuração inicial do perfil com interesses de investimento (ex: setores favoritos, perfil de risco).

---

## 2. Calculadora de Indicadores Fundamentalistas

- O usuário pesquisa um ativo (ex: PETR4).
- O sistema exibe os seguintes dados:
  - Cotação atual
  - Preço teto baseado em Graham
  - Preço teto baseado em BasIn (Bazin)
  - P/VPA, P/L, ROE, ROIC, Dividend Yield
  - Histórico de lucros e dividendos
- O sistema interpreta os dados, sinalizando:
  - “Ativo subvalorizado”
  - “Ativo sobrevalorizado”
  - “Preço justo”
- Possibilidade de adicionar o ativo à carteira de interesse.

---

## 3. Calculadora de Previsão com IA

- O usuário seleciona um ativo e acessa a aba “Previsão”.
- Funcionalidades:
  - Upload automático e leitura dos últimos Relatórios de Resultados (RI)
  - Análise de sentimento dos relatórios
  - Indicadores técnicos: médias móveis, MACD, IFR
  - Previsão com modelos como LSTM ou Prophet
- Resultados:
  - Gráfico com projeção futura da cotação
  - Probabilidades de valorização em 6, 12 e 24 meses
  - Justificativa textual com base nos dados
- Possibilidade de salvar previsões e configurar alertas.

---

## 4. Montagem e Acompanhamento da Carteira

- O usuário pode criar uma ou mais carteiras com os ativos de interesse.
- Informações exibidas:
  - Valor total investido
  - Rentabilidade por ativo e total
  - Comparação com benchmark (Ibovespa, CDI)
  - Distribuição por setor e tipo de ativo
  - Indicadores consolidados: P/L, DY, ROE médios
- Alertas de rebalanceamento ou movimentações relevantes
- Exportação da carteira em PDF ou Excel

---

## 5. Alertas e Notificações

- O usuário configura alertas personalizados:
  - Preço abaixo do preço-teto
  - Mudança em indicadores
  - Publicação de novos relatórios (RI)
- Notificações por e-mail, push ou in-app.

---

## Funcionalidades Recomendadas (Extras)

1. Dashboard com panorama do mercado
2. Simulador de aposentadoria com projeção de aportes
3. Scanner de ações com filtros fundamentalistas
4. Integração com corretoras (XP, NuInvest)
5. Backtesting de estratégias de carteira
6. Análise de riscos: Sharpe, Beta, Volatilidade, Correlação
7. Comunidade para troca de ideias e recomendações
8. Notas pessoais por ativo monitorado

---

## Resumo

Sistema completo para tomada de decisão fundamentada em investimentos, unindo análise fundamentalista, previsão com IA e acompanhamento de carteira em um único ambiente.
