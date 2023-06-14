export class Contact{
    
    OpenContactPage(){
        cy.get(':nth-child(2) > .nav-link')
        .click()
    }
    EnterEmail(email){
        cy.get('#recipient-email')
        .type(email)
    }
    EnterName(name){
        cy.get('#recipient-name')
        .type(name)
    }
    EnterMessage(message){
        cy.get('#message-text')
        .type(message)
    }
    SendMessage(){
        cy.get('#exampleModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
        .click()
    }
}