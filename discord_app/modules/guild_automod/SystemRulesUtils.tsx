// === Module 16763: set ===

// Module 16763 (set)
import obj132 from "obj132" /* 2 */;

const set = new Set(["1030554520465440818"]);
const result = obj132.fileFinishedImporting("modules/guild_automod/SystemRulesUtils.tsx");

export const isDefaultRuleId = function isDefaultRuleId(id) {
  let hasItem = null != id;
  if (hasItem) {
    hasItem = set.has(id);
  }
  return hasItem;
};