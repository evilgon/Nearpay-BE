const { StatusCodes } = require("http-status-codes")
const request = require("supertest")
const app = require("../app")

//testing data
const client_api = "sk_test_51JDgqnAy4XrcilI7pIAfdd5HKFiFrx9XeSD4knsAxMGFot4O5kx4fVuX3ie4zRTvWfZTktBgaUScD7IZmxPPhoZR00JrFpMVef"
const login_id = "demo@demo.com"
const first_name = "Hone"
const last_name = "Doe"
const mobile = "123456789"
const email = "demo@demo.com"
const user_id = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjYyNDU2NjQ2LCJleHAiOjE2NjI1NDMwNDZ9.R74MQXW1uVnSGsMbvnVJIqZt2bHGHyxfRoHXdIpwKa0"
const user_full_name = "Raken"
const card_number = "4242424242424242"
const expiry_date = "8/2023"
const cvv = "314"


describe("POST /registration", function () {
  test("register a user", function (done) {
    request(app)
      .post("/api/operpay/test/v1.2/registration")
      .send({ email, client_api, login_id, first_name, last_name, mobile })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect((res) => {
        expect(res.body.data.data.user_id).toBe("userID")
        expect(res.body.data.data.password).toHaveProperty("id")
        expect(res.body.data.data.login_id).toBe("loginID")
        expect(res.body.data.data.current_account_balance).toBe("CurrentBalance")
        expect(res.body.data.data.current_reward_balance).toBe("RewardBalance")
      })
      .expect(StatusCodes.CREATED)
      .end(function (err, res) {
        if (err) return done(err)
        done()
      })
  })
})

// describe("GET /check_login_id", function () {
//   test("log in a user", function (done) {
//     request(app)
//       .get("/api/operpay/test/v1.2/check_login_id?")
//       .send({ email, password })
//       .set("Accept", "application/json")
//       .expect("Content-Type", /json/)
//       .expect((res) => {
//         expect(res.body.data.type).toBe("user")
//         expect(res.body.data).toHaveProperty("id")
//         expect(res.body.data.attributes.email).toBe(email)
//         expect(res.body.data.attributes.role).toBe("Guest")
//       })
//       .expect(StatusCodes.OK)
//       .end(function (err, res) {
//         if (err) return done(err)
//         done()
//       })
//   })
// })
