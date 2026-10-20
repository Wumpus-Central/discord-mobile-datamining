// === Module 12304: conjurePlanFormat ===

// Module 12304 (conjurePlanFormat)
import Server from "Server" /* 2000 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/plan/conjurePlanFormat.tsx");

export const formatConjurePlanRequirementLabel = function formatConjurePlanRequirementLabel(str) {
  const parts = str.split("_");
  str = parts.join(" ");
  const formatted = str.toLowerCase();
  let sum = formatted;
  if (0 !== formatted.length) {
    const formatted1 = formatted[0].toUpperCase();
    sum = formatted1 + formatted.slice(1);
  }
  return sum;
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