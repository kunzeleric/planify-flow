import { beforeAll, describe, expect, it } from "vitest"

let response: Response

describe("API v1 STATUS ROUTE TEST", () => {
  beforeAll(async () => {
    response = await fetch("http://localhost:3000/api/v1/status", {
      method: "GET",
    })
  })

  it("should return status code 200", async () => {
    expect(response.status).toBe(200)
  })

  it("should returned database as a dependency", async () => {
    const body = await response.json()

    expect(body.dependencies).toHaveProperty("database")
  })
})
