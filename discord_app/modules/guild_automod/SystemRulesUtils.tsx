// discord_app/modules/guild_automod/SystemRulesUtils.tsx
import obj132 from "../../../_runtime/00002_obj132.js";

const set = new Set(["1030554520465440818"]);
const result = obj132.fileFinishedImporting("modules/guild_automod/SystemRulesUtils.tsx");

export const isDefaultRuleId = function isDefaultRuleId(id) {
  let hasItem = null != id;
  if (hasItem) {
    hasItem = set.has(id);
  }
  return hasItem;
};