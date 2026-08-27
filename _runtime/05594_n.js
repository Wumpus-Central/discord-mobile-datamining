// _runtime/05594_n.js
const fn = function n(str) {
  let result = str;
  if (typeof str === "string") {
    const _Number = Number;
    result = Number(str.split("%")[0]) * arg1 / 100;
  }
  return Math.max(0, arg1 - result);
};
fn.__closure = {};
fn.__workletHash = 14612470006791;
fn.__initData = { code: "function pnpm_normalizeSnapPointTs1(snapPoint,containerHeight){let normalizedSnapPoint=snapPoint;if(typeof normalizedSnapPoint==='string'){normalizedSnapPoint=Number(normalizedSnapPoint.split('%')[0])*containerHeight/100;}return Math.max(0,containerHeight-normalizedSnapPoint);}" };
arg5.normalizeSnapPoint = fn;