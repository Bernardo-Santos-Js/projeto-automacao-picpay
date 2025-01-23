Utilizando Cypress pela primeira vez - Passo a Passo
1. Instalação
Requisitos : Tenha o Node.js e **nnpm instalado.
Instalar o Cypress :
npm init -y
npm install cypress --save-dev

Abra o Cypress :
npx cypress open

2. Estrutura de Diretórios
Após a instalação, o Cypress cria:
cypress/
├── fixtures/    # Dados de teste
├── integration/ # Testes E2E
├── support/     # Arquivos de suporte e comandos

3. Escrevendo o primeiro teste
Crie um arquivo em cypress/integration/e escreva um teste simples:

describe('Meu primeiro teste', () => {
  it('Verifica o título da página', () => {
    cy.visit('https://example.com');
    cy.title().should('include', 'Example Domain');
  });
});

4. Rodando os Testes
npx cypress open
npx cypress run







