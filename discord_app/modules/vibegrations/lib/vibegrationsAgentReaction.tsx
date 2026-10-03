// === Module 16697: vibegrationsAgentReaction ===

// Module 16697 (vibegrationsAgentReaction)
import util from "util" /* 1126 */;
import _modDef3723 from "module_3723" /* 3723 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4523 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/vibegrations/lib/vibegrationsAgentReaction.tsx");

export const getVibegrationsAgentReactionLabel = function getVibegrationsAgentReactionLabel(agentReaction) {
  if (null != agentReaction) {
    if ("" !== agentReaction) {
      const result = UnicodeEmojisDefault.convertSurrogateToName(agentReaction, false);
      let formatToPlainStringResult = null;
      if ("" !== result) {
        const intl = util.intl;
        const obj2 = { emojiName: result };
        formatToPlainStringResult = intl.formatToPlainString(_modDef3723.DrSoFn, obj2);
      }
      return formatToPlainStringResult;
    }
  }
  return null;
};