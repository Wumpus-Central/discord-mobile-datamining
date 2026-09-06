// === Module 12617: MathUtils ===

// Module 12617 (MathUtils)
import size from "module_2" /* 2 */;

function roundIfClose(endImportTime, arg1) {
  const diff = endImportTime - Math.floor(endImportTime);
  if (diff >= 1 - arg1) {
    const _Math2 = Math;
    let rounded = Math.ceil(endImportTime);
  } else {
    rounded = endImportTime;
    if (diff <= arg1) {
      const _Math = Math;
      rounded = Math.floor(endImportTime);
    }
  }
  return rounded;
}
roundIfClose.__closure = {};
roundIfClose.__workletHash = 15933993422996;
roundIfClose.__initData = { code: "function roundIfClose_MathUtilsTsx1(num,precision){const decimalPart=num-Math.floor(num);if(decimalPart>=1-precision){return Math.ceil(num);}if(decimalPart<=precision){return Math.floor(num);}return num;}" };
const result = size.fileFinishedImporting("../discord_common/js/shared/utils/MathUtils.tsx");

export { roundIfClose };