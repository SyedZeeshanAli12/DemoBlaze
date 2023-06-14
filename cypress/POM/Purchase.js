export class Purchase{

    NameforOrder(name){
        cy.get('#name')
        .type(name)
    }

    CountryforOrder(country){
        cy.get('#country')
        .type(country)
    }

    CityforOrder(city){
        cy.get('#city')
        .type(city)
    }

    CreditCardNo(creditcard){
        cy.get('#card')
        .type(creditcard)
    }

    Month(month){
        cy.get('#month')
        .type(month)
    }

    Year(year){
        cy.get('#year')
        .type(year)
    }

    Purchaseproduct(){
        cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
        .click()
    }
    Confirm(){
        cy.get('.confirm')
        .click()
    }
}