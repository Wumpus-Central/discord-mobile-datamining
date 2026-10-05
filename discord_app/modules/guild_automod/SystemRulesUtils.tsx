// discord_app/modules/guild_automod/SystemRulesUtils.tsx
import size from "../../../_runtime/metro/00002__.js";

const set = new Set(["1030554520465440818"]);
const result = size.fileFinishedImporting("modules/guild_automod/SystemRulesUtils.tsx");

export const isDefaultRuleId = function isDefaultRuleId(id) {
  const hasItem = null != id && set.has(id);
  return hasItem;
};
