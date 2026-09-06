// _runtime/metro/06645__.js
const fn = function n(item, value) {
  let result = item;
  if (typeof item === "string") {
    const _Number = Number;
    result = (Number(item.split("%")[0]) * value) / 100;
  }
  return Math.max(0, value - result);
};
fn.__closure = {};
fn.__workletHash = 14612470006791;
fn.__initData = {
  code: "function pnpm_normalizeSnapPointTs1(snapPoint,containerHeight){let normalizedSnapPoint=snapPoint;if(typeof normalizedSnapPoint==='string'){normalizedSnapPoint=Number(normalizedSnapPoint.split('%')[0])*containerHeight/100;}return Math.max(0,containerHeight-normalizedSnapPoint);}",
};

export const normalizeSnapPoint = fn;
