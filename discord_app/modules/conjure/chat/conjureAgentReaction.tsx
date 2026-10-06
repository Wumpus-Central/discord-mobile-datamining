// === Module 16729: conjureAgentReaction ===

// Module 16729 (conjureAgentReaction)
import intl2 from "intl" /* 1126 */;
import _modDef3753 from "module_3753" /* 3753 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4529 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/conjure/chat/conjureAgentReaction.tsx");

export const getConjureAgentReactionLabel = function getConjureAgentReactionLabel(agentReaction) {
  if (null != agentReaction) {
    if ("" !== agentReaction) {
      const obj = UnicodeEmojisDefault;
      const result = obj.convertSurrogateToName(agentReaction, false);
      let formatToPlainStringResult = null;
      if ("" !== result) {
        const intl = intl2.intl;
        const obj2 = { emojiName: result };
        formatToPlainStringResult = intl.formatToPlainString(_modDef3753.lxXLho, obj2);
      }
      return formatToPlainStringResult;
    }
  }
  return null;
};