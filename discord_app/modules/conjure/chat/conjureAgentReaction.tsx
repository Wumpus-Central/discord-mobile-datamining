// === Module 16708: conjureAgentReaction ===

// Module 16708 (conjureAgentReaction)
import util from "util" /* 1126 */;
import _modDef3723 from "module_3723" /* 3723 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4523 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/conjure/chat/conjureAgentReaction.tsx");

export const getConjureAgentReactionLabel = function getConjureAgentReactionLabel(agentReaction) {
  if (null != agentReaction) {
    if ("" !== agentReaction) {
      const result = UnicodeEmojisDefault.convertSurrogateToName(agentReaction, false);
      let formatToPlainStringResult = null;
      if ("" !== result) {
        const intl = util.intl;
        const obj2 = { emojiName: result };
        formatToPlainStringResult = intl.formatToPlainString(_modDef3723.lxXLho, obj2);
      }
      return formatToPlainStringResult;
    }
  }
  return null;
};