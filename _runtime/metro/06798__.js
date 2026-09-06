// _runtime/metro/06798__.js
const fn = function n(sum1, initialPosition, value) {
  return Math.min(Math.max(initialPosition, sum1), value);
};
fn.__closure = {};
fn.__workletHash = 4405247003092;
fn.__initData = {
  code: "function pnpm_clampTs1(value,lowerBound,upperBound){return Math.min(Math.max(lowerBound,value),upperBound);}",
};

export const clamp = fn;
