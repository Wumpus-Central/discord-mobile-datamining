// === Module 16729: conjureAgentReaction ===

// Module 16729 (conjureAgentReaction)
import util from "util" /* 1126 */;
import _modDef3753 from "module_3753" /* 3753 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4529 */;
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
        formatToPlainStringResult = intl.formatToPlainString(_modDef3753.lxXLho, obj2);
      }
      return formatToPlainStringResult;
    }
  }
  return null;
};