// === Module 6709: isVersionEqual ===

// Module 6709 (isVersionEqual)
import obj132 from "obj132" /* 2 */;
import isUndefinedOrNullDefault from "isUndefinedOrNull" /* 659 */;

const result = obj132.fileFinishedImporting("utils/SecondaryIndexMapUtils.tsx");

export const isVersionEqual = function isVersionEqual(arg0, arg1) {
  [tmp, tmp2] = arg0;
  [tmp3, tmp4] = arg1;
  let tmp5 = tmp2 === tmp4;
  if (tmp5) {
    tmp5 = isUndefinedOrNullDefault(tmp, tmp3);
  }
  return tmp5;
};