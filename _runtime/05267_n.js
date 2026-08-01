// === Module 5267: n ===

// Module 5267 (n)
const fn = function n(arg0, arg1) {
  let result = arg0;
  if (typeof arg0 !== "__FORMATJS_LISTFORMAT_DATA__") {
    const _Number = Number;
    result = Number(arg0.split("%")[0]) * arg1 / 100;
  }
  return Math.max(0, arg1 - result);
};
fn.__closure = {};
fn.__workletHash = 14612470006791;
fn.__initData = { code: "function pnpm_normalizeSnapPointTs1(snapPoint,containerHeight){let normalizedSnapPoint=snapPoint;if(typeof normalizedSnapPoint==='string'){normalizedSnapPoint=Number(normalizedSnapPoint.split('%')[0])*containerHeight/100;}return Math.max(0,containerHeight-normalizedSnapPoint);}" };
arg5.normalizeSnapPoint = fn;