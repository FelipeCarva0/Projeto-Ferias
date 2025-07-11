# Requisitos de Sistema – Plataforma de Gerenciamento de Investimentos

---

## 1. Requisitos Funcionais

### 1.1. Cadastro e Autenticação
- 1.1.1. Permitir cadastro de usuários com e-mail e senha.
- 1.1.2. Suportar autenticação em dois fatores (2FA).
- 1.1.3. Permitir configuração inicial do perfil de investimento.

### 1.2. Consulta de Ativos e Indicadores Fundamentalistas
- 1.2.1. Permitir busca de ações por ticker (ex: PETR4).
- 1.2.2. Exibir indicadores:
  - Cotação atual
  - Preço teto por Graham
  - Preço teto por BasIn (Bazin)
  - P/VPA, P/L, ROE, ROIC, Dividend Yield
  - Histórico de lucros e dividendos
- 1.2.3. Informar se o ativo está subvalorizado, sobrevalorizado ou em preço justo.
- 1.2.4. Permitir adicionar o ativo à carteira ou lista de interesse.

### 1.3. Previsão de Valorização com IA
- 1.3.1. Permitir upload e leitura de Relatórios de Resultados (RI).
- 1.3.2. Analisar sentimento dos RIs.
- 1.3.3. Executar análise técnica (médias móveis, MACD, IFR).
- 1.3.4. Usar modelos preditivos (LSTM, Prophet).
- 1.3.5. Exibir:
  - Gráfico com projeção
  - Probabilidades de valorização em 6, 12 e 24 meses
  - Justificativa textual baseada nos dados

### 1.4. Gestão de Carteira
- 1.4.1. Permitir criação de múltiplas carteiras.
- 1.4.2. Exibir por carteira:
  - Lista de ativos
  - Valor investido
  - Rentabilidade total e por ativo
  - Comparação com benchmarks (Ibovespa, CDI)
  - Distribuição por setor
  - Indicadores médios consolidados
- 1.4.3. Gerar alertas de rebalanceamento.
- 1.4.4. Permitir exportar carteira (PDF, Excel).

### 1.5. Alertas e Notificações
- 1.5.1. Permitir alertas configuráveis:
  - Cotação atinge alvo
  - Mudança em fundamentos
  - Novo RI publicado
- 1.5.2. Enviar notificações por e-mail, push ou in-app.

---

## 2. Requisitos Não Funcionais

### 2.1. Desempenho e Escalabilidade
- 2.1.1. Suportar múltiplos usuários simultâneos.
- 2.1.2. Garantir resposta rápida (até 3 segundos por ação crítica).

### 2.2. Segurança
- 2.2.1. Criptografar dados sensíveis dos usuários.
- 2.2.2. Utilizar autenticação e tokens (JWT).
- 2.2.3. Registrar logs de ações sensíveis.

### 2.3. Disponibilidade
- 2.3.1. Garantir disponibilidade 24/7 com até 1% de downtime mensal.

---

## 3. Requisitos de Integração

### 3.1. APIs Externas
- 3.1.1. Integrar com APIs para:
  - Cotações em tempo real
  - Indicadores fundamentalistas
  - Dados históricos
- 3.1.2. Suportar integração com corretoras (XP, NuInvest).

### 3.2. Modelos de IA
- 3.2.1. Permitir atualização periódica dos modelos.
- 3.2.2. Integrar modelos ao backend para previsões em tempo real.

---

## 4. Requisitos de Usabilidade

### 4.1. Interface
- 4.1.1. Interface intuitiva e responsiva (desktop, tablet, celular).
- 4.1.2. Gráficos interativos para dados e projeções.

### 4.2. Acessibilidade
- 4.2.1. Seguir padrões WCAG 2.1 para acessibilidade.

---

## 5. Requisitos de Manutenção e Evolução

### 5.1. Modularidade
- 5.1.1. Utilizar arquitetura modular (MVC ou microserviços).

### 5.2. Logs e Auditoria
- 5.2.1. Registrar logs de eventos e ações dos usuários.
- 5.2.2. Armazenar previsões e justificativas da IA para fins de auditoria.

---
