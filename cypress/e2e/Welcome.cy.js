import SignUp from "../POM/SignUp"
import WelcomePage from "../POM/WelcomePage"

const signup = new SignUp()
const welcomepage = new WelcomePage()

// describe('Sign up page test', () => {
//     beforeEach(()=>{
//         signup.navigate('https://www.demoblaze.com/index.html')
//     })
//     it('SignupForm', () => {
//        signup.SignUp()
//        cy.wait(2000)
//        signup.Username('zeeshan ali')
//        signup.Password('shan532029')
//        signup.Submit()
//   })
// })



  it('Welcome Page', () => {
    cy.loginSession;
    cy.wait(1000)
    welcomepage.movecarouselforward()
    cy.wait(2000)
    welcomepage.movecarouselbackward()
    cy.wait(2000)
    welcomepage.carouselindicator()
    cy.wait(2000)
    welcomepage.NextPage()
    cy.wait(2000)
    welcomepage.PreviousPage()
    cy.wait(2000)
    welcomepage.PhoneCategory()
    cy.wait(2000)
    welcomepage.LaptopCategory()
    cy.wait(2000)
    welcomepage.PCcategory()
    cy.wait(2000)
})
