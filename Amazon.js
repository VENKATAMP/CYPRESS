<reference types="cypress" />
descrive("Amazon test suite",()=>{
    it("Amazaon shoes purchase",()=>{
        cy.visit('https://www.amazon.in/')
        cy.get('#twotabsearchtextbox').type("shoes")
        cy.get('nav-search-submit-button').click()
        cy.get("//*[contains(@class,'s-include-content-margin')]").each(($ele, index, $list)=> {
            if($ele.find("//span[contains(text(),'Best')]").text()=="Best Seller" ){
               $ele(index).find("//div//a[contains(@class,'a-link-normal')]]").invoke('removeAttr','target').click()
                cy.contains("Add to Cart").click()

            }
           
        })
    })
})
