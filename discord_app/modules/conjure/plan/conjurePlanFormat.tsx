// === Module 16942: conjurePlanFormat ===

// Module 16942 (conjurePlanFormat)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/plan/conjurePlanFormat.tsx");

export const formatConjurePlanRequirementName = function formatConjurePlanRequirementName(str) {
  const parts = str.split("_");
  const mapped = parts.map((arr) => {
    let sum = arr;
    if (0 !== arr.length) {
      sum = arr[0] + arr.slice(1).toLowerCase();
      const str = arr.slice(1);
    }
    return sum;
  });
  return mapped.join(" ");
};
export const conjurePlanCommandPrefix = function conjurePlanCommandPrefix(kind) {
  let str = "\u21EA /";
  if ("launch" !== kind.kind) {
    str = "\u21EA /";
    if (4 !== kind.type) {
      if (2 === kind.type) {
        let str2 = "";
      } else {
        str2 = "/";
      }
      str = str2;
    }
  }
  return str;
};