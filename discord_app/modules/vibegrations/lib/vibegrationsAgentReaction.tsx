// discord_app/modules/vibegrations/lib/vibegrationsAgentReaction.tsx
import util from "../../../intl/index.native.tsx";
import _modDef3723 from "../intl/VibegrationsUntranslated.messages.js";
import UnicodeEmojisDefault from "../../emojis/UnicodeEmojis.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
