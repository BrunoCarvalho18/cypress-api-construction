describe("Search a book", () => {
  let id = 1;

  it("search a book - GET", () => {
    cy.request("GET", `/posts/${id}`).as("response");
    cy.get("@response").then((res) => {
      console.log("response", res);
      expect(res.status).to.be.equal(200);
    });
  });

  it("create a book - POST", () => {
    cy.request("POST", "/posts", {
      userId: 1,
      id: 1,
      title: "teste",
      body: "teste",
    }).as("response");
    cy.get("@response").then((res) => {
      console.log("response", res);
      expect(res.status).to.be.equal(201);
    });
  });
});
