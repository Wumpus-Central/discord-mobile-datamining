// discord_app/modules/conjure/chat/conjureAgentReaction.tsx
import util from "../../../intl/index.native.tsx";
import _modDef3827 from "../intl/ConjureUntranslated.messages.js";
import UnicodeEmojisDefault from "../../emojis/UnicodeEmojis.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let result = size.fileFinishedImporting("modules/conjure/chat/conjureAgentReaction.tsx");

export const getConjureAgentReactionLabel = function getConjureAgentReactionLabel(agentReaction) {
  if (null != agentReaction) {
    if ("" !== agentReaction) {
      const result = UnicodeEmojisDefault.convertSurrogateToName(agentReaction, false);
      let formatToPlainStringResult = null;
      if ("" !== result) {
        const intl = util.intl;
        const obj2 = { emojiName: result };
        formatToPlainStringResult = intl.formatToPlainString(_modDef3827.lxXLho, obj2);
      }
      return formatToPlainStringResult;
    }
  }
  return null;
};
