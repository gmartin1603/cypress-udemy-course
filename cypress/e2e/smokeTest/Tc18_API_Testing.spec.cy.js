/// <reference types="Cypress" />

describe("API Testing", function () {
  it("GET API Testing", function () {
    cy.request("GET", "https://reqres.in/api/users?page=2").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.data[0].first_name).to.eq("Michael");
      expect(response.body.data[0].last_name).to.eq("Lawson");
      expect(response.body.data[0].avatar).to.eq(
        "https://reqres.in/img/faces/7-image.jpg"
      );
    });
  });

  it("POST API Testing", function () {
    cy.request("POST", "https://reqres.in/api/users", {
      name: "morpheus",
      job: "leader",
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.name).to.eq("morpheus");
      expect(response.body.job).to.eq("leader");
      // expect(response.body.id).to.eq("793");
      // expect(response.body.createdAt).to.eq("2021-07-08T07:26:06.932Z");
    });
  });

  it("PUT API Testing", function () {
    cy.request("PUT", "https://reqres.in/api/users/2", {
      name: "morpheus",
      job: "zion resident",
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.name).to.eq("morpheus");
      expect(response.body.job).to.eq("zion resident");
      // expect(response.body.updatedAt).to.eq("2021-07-08T07:26:06.932Z");
    });
  });

  it("DELETE API Testing", function () {
    cy.request("DELETE", "https://reqres.in/api/users/2").then((response) => {
      expect(response.status).to.eq(204);
    });
  });
});