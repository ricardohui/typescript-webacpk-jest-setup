import sum from "../src/index";
import { API } from "../src/API";

jest.mock("../src/API", () => {
  return {
    API: jest.fn().mockImplementation(() => {
      return {
        callAPI: () => {
          return {
            completed: true,
            id: 4,
            title: "barbie ken allen",
            userId: 2,
          };
        },
      };
    }),
  };
});

const api = new API();

describe("sum module", () => {
  beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    // api.mockClear();
  });

  // test('end to end testing', async() => {
  //   await expect(sum(1, 2)).resolves.toEqual({
  //     "completed": false,
  //     "id": 3,
  //      "title": "fugiat veniam minus",
  //      "userId": 1,
  //   })
  // });

  test("unit test", async () => {
    await expect(sum(1, 2)).resolves.toEqual({
      completed: true,
      id: 4,
      title: "barbie ken allen",
      userId: 2,
    });
  });
});
