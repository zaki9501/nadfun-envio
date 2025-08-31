/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  BondingCurveRouter,
  BondingCurveRouter_LiquidityAdded,
  BondingCurveRouter_LiquidityRemoved,
  BondingCurveRouter_Swap,
} from "generated";

BondingCurveRouter.LiquidityAdded.handler(async ({ event, context }) => {
  const entity: BondingCurveRouter_LiquidityAdded = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    token: event.params.token,
    user: event.params.user,
    amount: event.params.amount,
  };

  context.BondingCurveRouter_LiquidityAdded.set(entity);
});

BondingCurveRouter.LiquidityRemoved.handler(async ({ event, context }) => {
  const entity: BondingCurveRouter_LiquidityRemoved = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    token: event.params.token,
    user: event.params.user,
    amount: event.params.amount,
  };

  context.BondingCurveRouter_LiquidityRemoved.set(entity);
});

BondingCurveRouter.Swap.handler(async ({ event, context }) => {
  const entity: BondingCurveRouter_Swap = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    token: event.params.token,
    user: event.params.user,
    amountIn: event.params.amountIn,
    amountOut: event.params.amountOut,
    isBuy: event.params.isBuy,
  };

  context.BondingCurveRouter_Swap.set(entity);
});
