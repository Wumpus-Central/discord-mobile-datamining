// discord_common/js/shared/utils/MathUtils.tsx
function roundIfClose(result, arg1) {
  const diff = result - Math.floor(result);
  if (diff >= 1 - arg1) {
    const _Math2 = Math;
    let rounded = Math.ceil(result);
  } else {
    rounded = result;
    if (diff <= arg1) {
      const _Math = Math;
      rounded = Math.floor(result);
    }
  }
  return rounded;
}
roundIfClose.__closure = {};
roundIfClose.__workletHash = 15933993422996;
roundIfClose.__initData = { code: "function roundIfClose_MathUtilsTsx1(num,precision){const decimalPart=num-Math.floor(num);if(decimalPart>=1-precision){return Math.ceil(num);}if(decimalPart<=precision){return Math.floor(num);}return num;}" };
const result = require("set").fileFinishedImporting("../discord_common/js/shared/utils/MathUtils.tsx");

export { roundIfClose };