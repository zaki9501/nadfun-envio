import assert from "assert";
import { 
  TestHelpers,
  BondingCurveRouter_LiquidityAdded
} from "generated";
const { MockDb, BondingCurveRouter } = TestHelpers;

describe("BondingCurveRouter contract LiquidityAdded event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for BondingCurveRouter contract LiquidityAdded event
  const event = BondingCurveRouter.LiquidityAdded.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("BondingCurveRouter_LiquidityAdded is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await BondingCurveRouter.LiquidityAdded.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualBondingCurveRouterLiquidityAdded = mockDbUpdated.entities.BondingCurveRouter_LiquidityAdded.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedBondingCurveRouterLiquidityAdded: BondingCurveRouter_LiquidityAdded = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      token: event.params.token,
      user: event.params.user,
      amount: event.params.amount,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualBondingCurveRouterLiquidityAdded, expectedBondingCurveRouterLiquidityAdded, "Actual BondingCurveRouterLiquidityAdded should be the same as the expectedBondingCurveRouterLiquidityAdded");
  });
});
