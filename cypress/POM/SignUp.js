class SignUp{
    navigate(url){
        cy.visit(url)
    }
    SignUp(){
        cy.get('#signin2')
        .click()
    }
    CloseSignUp(){
        cy.get('#signInModal > .modal-dialog > .modal-content > .modal-header > .close > span')
        .click()
    }
    Username(username){
        cy.get('#sign-username')
        .type(username)
        return this
    }
    Password(password){
        cy.get('#sign-password')
        .type(password)
        return this
    }
    Submit(){
        cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
        .click()
    }
}
export default SignUp