// _runtime/05440_normalizeSnapPoint.js
const items = [
  {
    code: "(function pnpm_normalizeSnapPointTs1(snapPoint,containerHeight){let normalizedSnapPoint=snapPoint;if(typeof normalizedSnapPoint==='string'){normalizedSnapPoint=Number(normalizedSnapPoint.split('%')[0])*containerHeight/100;}return Math.max(0,containerHeight-normalizedSnapPoint);})",
  },
];
[tmp2] = items;
function pnpm_normalizeSnapPointTs1(str, c17) {
  let result = str;
  if (typeof str === "string") {
    const _Number = Number;
    result = (Number(str.split("%")[0]) * c17) / 100;
  }
  return Math.max(0, c17 - result);
}
pnpm_normalizeSnapPointTs1.__workletHash = 5790948994918;
pnpm_normalizeSnapPointTs1.__initData = tmp2;

export const normalizeSnapPoint = pnpm_normalizeSnapPointTs1;
