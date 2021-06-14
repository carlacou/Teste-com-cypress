///<reference types="cypress" />

beforeEach(() => {
    cy.visit('https://github.com/join?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home')
})

describe('Cadastro', () => {

    it('Username', () => {
        cy.get('#user_login').type('teste09-ctr').should('have.value', 'teste09-ctr')
    })

    it('Email', () => {
        cy.get('#user_email').type('teste09@email.com.br').should('have.value', 'teste09@email.com.br')
    })

    it('Password', () => {
        cy.get('#user_password').type('teste123456')
    })

    
    describe('CheckBox', () => {
        it('descrição', () => {
        cy.get('#all_emails').click()

        })
    })

})