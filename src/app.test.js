const supertest = require("supertest");
const app = require("./app");


const request = supertest(app);

describe("True", () => {
    it("Should", async()=>{
        const res = await request.get("/");
        expect(res.status).toBe(200);
        expect(res.text).toBe("Hello world");
    });
})