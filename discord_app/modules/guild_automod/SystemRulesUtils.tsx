// === Module 17722: SystemRulesUtils ===

// Module 17722 (SystemRulesUtils)
import size from "module_2" /* 2 */;

const set = new Set(["1030554520465440818"]);
const result = size.fileFinishedImporting("modules/guild_automod/SystemRulesUtils.tsx");

export const isDefaultRuleId = function isDefaultRuleId(id) {
  const hasItem = null != id && set.has(id);
  return hasItem;
};