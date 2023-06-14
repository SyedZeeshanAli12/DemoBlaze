import {Cart} from "../POM/Cart"


const cart = new Cart()

describe('Delete Product Test', () => {
    beforeEach(()=>{
      cy.login('zeeshan ali', 'shan532029')
    })
    it('Delete product from Cart', () => {
          cy.loginSession;
          cy.wait(2000)
          cart.ViewCart()
          cy.wait(2000)
          cart.DeleteProductfromCart()
        })
})
