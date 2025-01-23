describe('PicPay Tests', () => {
  beforeEach(() => {
    // Visita a página do Google
    cy.visit('https://www.google.com')
    cy.title().should('include', 'Google')
    
    

    // Navega para o site da Amazom
    cy.viewport(1920, 1080)
        cy.origin('https://meus-emprestimos.picpay.com/', () => {
        cy.visit('https://meus-emprestimos.picpay.com/')      
        cy.contains('Gerencie seus contratos').should('be.visible')
        cy.screenshot('Gerencie seus contratos');
    })
  })


//
  it('Validar o clicar na central de ajuda', () => {
    cy.origin('https://meus-emprestimos.picpay.com/', () => {
      cy.wait(6000)
      cy.contains('Central de Ajuda.', { timeout: 10000 }).should('be.visible').click()
      
     
    })
  })
 
    it('Navegar da página de empréstimos para a central de atendimento', () => {
      // Visitar a página inicial de empréstimos
      cy.visit('https://meus-emprestimos.picpay.com/')
  
      // Usar cy.origin para lidar com a navegação entre domínios
      cy.origin('https://meus-emprestimos.picpay.com', () => {
        // Esperar que a página carregue completamente
        cy.get('body').should('be.visible')
  
        // Procurar e clicar no link para a Central de Ajuda
        cy.contains('a', 'Central de Ajuda', { timeout: 10000 })
          .should('be.visible')
          .click()
         
      })
    })
    it('deve clicar no botão "Aceitar todos os cookies"', () => {
      // Visitar a página inicial
      cy.visit('https://picpay.com/canais-de-atendimento')
  
      // Usar cy.origin para lidar com a mudança de origem
      cy.origin('https://picpay.com', () => {
        // Clicar no botão "Aceitar todos os cookies"
        cy.get('#onetrust-accept-btn-handler')
          .should('be.visible')
          .click()
          cy.contains('Abrir conta').click()
          cy.get('input[name="cpf"]').type('10203040506070')
          cy.get('input[name="name"]').type('João da Silva')
          cy.get('input[name="email"]').type('teste@teste.com')
          cy.get('input[name="phone"]').type('11 7070-5489')
          cy.get('input[placeholder="Data de nascimento*"]').type('01/01/1990')
          cy.get('#terms').click();
          cy.contains('Enviar').click()

          cy.get('#terms').should('be.visible')
        

      })
  
    })

  

})