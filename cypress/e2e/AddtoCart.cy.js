import {Cart} from "../POM/Cart"


const cart = new Cart()


describe('Add to Cart Testing', () => {
    beforeEach(()=>{
      cy.login('zeeshan ali', 'shan532029')
    })
    it('Add to Cart and view cart', () => {
        cy.loginSession;
        cy.wait(2000)
        cart.OpenProductDetail()
        cy.wait(2000)
        cart.AddtoCart()  
        cy.wait(2000)
        cart.ViewCart()
      })
      
})