// _runtime/05752_clamp.js
const items = [
  {
    code: "(function pnpm_clampTs1(value,lowerBound,upperBound){return Math.min(Math.max(lowerBound,value),upperBound);})",
  },
];
[tmp2] = items;
function pnpm_clampTs1(arg0, arg1, arg2) {
  return Math.min(Math.max(arg1, arg0), arg2);
}
pnpm_clampTs1.__workletHash = 9277862090901;
pnpm_clampTs1.__initData = tmp2;

export const clamp = pnpm_clampTs1;
