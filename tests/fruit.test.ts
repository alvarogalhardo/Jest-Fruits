import app from "index";
import supertest from "supertest";

describe("Testando rotas de fruta", () => {
  it("Testando post de frutas", async () => {
    const body = {
      name: "Apple",
      price: 2000,
    };
    const result = await supertest(app).post("/fruits").send(body);
    expect(result.statusCode).toBe(201);
  });

  it("Testando get de todas as frutas", async () => {
    const data = await supertest(app).get("/fruits");
    expect(data.statusCode).toEqual(200);
    expect(data.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          name: expect.any(String),
          price: expect.any(Number),
        }),
      ])
    );
  });

  it("Testando get de uma única fruta", async () => {
    const data = await supertest(app).get("/fruits/1");
    expect(data.body).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        name: expect.any(String),
        price: expect.any(Number),
      })
    );
  });
});
