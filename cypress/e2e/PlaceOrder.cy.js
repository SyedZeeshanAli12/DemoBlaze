import {Cart} from "../POM/Cart"
import { Purchase } from "../POM/Purchase"

const cart = new Cart()
const purchase = new Purchase()

describe('Place Order Test', () => {
    beforeEach(()=>{
      cy.login('zeeshan ali', 'shan532029')
    })
    it('Place order', () => {
        cy.loginSession;
          cy.wait(2000)
        cart.OpenProductDetail()
          cy.wait(2000)
        cart.AddtoCart()  
          cy.wait(2000)
        cart.ViewCart()
          cy.wait(2000)
        cart.PlaceOrder()
          cy.wait(2000)        
    })

    it('Purchase product',()=>{
      cy.loginSession;
      purchase.NameforOrder('zeeshan')
        cy.wait(2000)
      purchase.CountryforOrder('pakistan')
        cy.wait(2000)
      purchase.CityforOrder('lahore')
        cy.wait(2000)
      purchase.CreditCardNo('4215-0000-7656-0909')
        cy.wait(2000)
      purchase.Month('april')
        cy.wait(2000)
      purchase.Year('2023')
        cy.wait(2000)
      purchase.Purchaseproduct()
      cy.wait(2000)
      purchase.Confirm()
    })
})
