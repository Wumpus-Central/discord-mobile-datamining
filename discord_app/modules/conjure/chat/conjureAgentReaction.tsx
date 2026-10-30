// discord_app/modules/conjure/chat/conjureAgentReaction.tsx
import util from "../../../intl/index.native.tsx";
import _modDef3865 from "../intl/ConjureUntranslated.messages.js";
import UnicodeEmojisDefault from "../../emojis/UnicodeEmojis.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const re3 = /^\d{17,20}$/;
const re4 = /^\w{2,32}$/;
const result = size.fileFinishedImporting("modules/conjure/chat/conjureAgentReaction.tsx");

export function agentReactionFromStep(message_id) {
  let animated = message_id;
  ({ emoji, emoji_id } = message_id);
  let tmp = null;
  if (null != emoji) {
    tmp = null;
    if ("" !== emoji) {
      if (null != emoji_id) {
        if (re3.test(emoji_id)) {
          if (re4.test(emoji)) {
            const obj2 = { emoji, emojiId: emoji_id, animated: null };
            animated = animated.animated;
            obj2.animated = true === animated;
          }
        }
      } else {
        if ("" !== obj.convertSurrogateToName(emoji, false)) {
          const obj3 = { emoji };
        }
        obj = UnicodeEmojisDefault;
      }
    }
  }
  return tmp;
}
export function sameAgentReaction(agentReaction, reaction) {
  return (
    null != agentReaction &&
    agentReaction.emoji === reaction.emoji &&
    agentReaction.emojiId === reaction.emojiId &&
    agentReaction.animated === reaction.animated
  );
}
export function getConjureAgentReactionLabel(reaction) {
  if (null != reaction.emojiId) {
    const _HermesInternal = HermesInternal;
    let emojiName = ":" + reaction.emoji + ":";
  } else {
    emojiName = UnicodeEmojisDefault.convertSurrogateToName(reaction.emoji, false);
  }
  const intl = util.intl;
  return intl.formatToPlainString(_modDef3865.lxXLho, { emojiName });
}
