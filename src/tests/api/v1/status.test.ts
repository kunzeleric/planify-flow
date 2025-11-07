import { expect, test } from "vitest"

test("should return status code 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status", {
    method: "GET",
  })

  expect(response.status).toBe(200)
})
