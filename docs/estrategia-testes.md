# 🧪 Documento de Estratégia de Testes — PsyConnect

## 📌 Descrição do Projeto
O PsyConnect é um aplicativo focado em apoio emocional, permitindo ao usuário registrar seu estado emocional, manter um diário pessoal e acessar conteúdos de apoio, sem substituir acompanhamento profissional.

---

# 🎯 Funcionalidade 1: Check-in Emocional

## 📌 Regras de Negócio
- O usuário deve selecionar um estado emocional antes de salvar
- O registro deve conter data e hora
- Apenas um check-in pode ser salvo por vez (último sobrescreve o anterior)
- Os dados devem ser armazenados localmente

## 🧪 Casos de Teste

### ✅ Caso 1 — Salvar check-in corretamente
- Tipo: E2E
- Entrada: Usuário seleciona "😊 Bem" e clica em salvar
- Resultado esperado: Check-in salvo com sucesso e mensagem exibida

---

### ❌ Caso 2 — Tentar salvar sem selecionar emoção
- Tipo: Unitário
- Entrada: Usuário não seleciona nenhuma opção e tenta salvar
- Resultado esperado: O sistema impede o salvamento ou não executa ação

---

# 🎯 Funcionalidade 2: Diário Emocional

## 📌 Regras de Negócio
- O usuário pode escrever textos livremente
- O conteúdo deve ser salvo localmente
- O texto não pode ser vazio
- Deve ser possível recuperar o último registro

## 🧪 Casos de Teste

### ✅ Caso 3 — Salvar texto no diário
- Tipo: Integração
- Entrada: Usuário escreve um texto e salva
- Resultado esperado: Texto salvo corretamente no armazenamento

---

### ❌ Caso 4 — Salvar diário vazio
- Tipo: Unitário
- Entrada: Usuário tenta salvar sem escrever nada
- Resultado esperado: Sistema bloqueia ou ignora salvamento

---

# 🎯 Funcionalidade 3: Interface Inicial (Home)

## 📌 Regras de Negócio
- A tela deve carregar corretamente
- A logo deve estar visível
- As animações devem funcionar sem travar
- O layout deve ser responsivo (mobile e web)

## 🧪 Casos de Teste

### ✅ Caso 5 — Renderização da tela inicial
- Tipo: E2E
- Entrada: Abrir o aplicativo
- Resultado esperado: Tela carrega com logo, animações e layout correto

---

### ❌ Caso 6 — Falha no carregamento da logo
- Tipo: Integração
- Entrada: Caminho da imagem incorreto
- Resultado esperado: Sistema não quebra e trata erro visualmente

---

# 🧾 Classificação dos Testes

| Caso | Tipo |
|------|------|
| Caso 1 | E2E |
| Caso 2 | Unitário |
| Caso 3 | Integração |
| Caso 4 | Unitário |
| Caso 5 | E2E |
| Caso 6 | Integração |

---

# ✅ Conclusão

A estratégia de testes cobre os principais fluxos do sistema, garantindo:
- Validação de entradas
- Persistência de dados
- Funcionamento da interface
- Estabilidade do aplicativo

O projeto foi estruturado para facilitar testes unitários, de integração e ponta a ponta.