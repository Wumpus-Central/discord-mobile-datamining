// === Module 12156: conjurePlanFormat ===

// Module 12156 (conjurePlanFormat)
import Server from "Server" /* 1998 */;
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
export const conjurePlanCommandPrefix = function conjurePlanCommandPrefix(type) {
  let str = "\u21EA /";
  if (type.type !== Server.ApplicationCommandType.PRIMARY_ENTRY_POINT) {
    if (type.type === Server.ApplicationCommandType.USER) {
      let str2 = "";
    } else {
      str2 = "/";
    }
    str = str2;
  }
  return str;
};