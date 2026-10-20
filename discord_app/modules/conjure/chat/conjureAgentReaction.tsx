// === Module 11006: conjureAgentReaction ===

// Module 11006 (conjureAgentReaction)
import util from "util" /* 1128 */;
import _modDef3820 from "module_3820" /* 3820 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4894 */;
import size from "module_2" /* 2 */;

const re3 = /^\d{17,20}$/;
const re4 = /^\w{2,32}$/;
const result = size.fileFinishedImporting("modules/conjure/chat/conjureAgentReaction.tsx");

export const agentReactionFromStep = function agentReactionFromStep(setting) {
  let animated = setting;
  ({ emoji, emoji_id } = setting);
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
};
export const sameAgentReaction = function sameAgentReaction(agentReaction, reaction) {
  return null != agentReaction && agentReaction.emoji === reaction.emoji && agentReaction.emojiId === reaction.emojiId && agentReaction.animated === reaction.animated;
};
export const getConjureAgentReactionLabel = function getConjureAgentReactionLabel(reaction) {
  if (null != reaction.emojiId) {
    const _HermesInternal = HermesInternal;
    let emojiName = ":" + reaction.emoji + ":";
  } else {
    emojiName = UnicodeEmojisDefault.convertSurrogateToName(reaction.emoji, false);
  }
  const intl = util.intl;
  return intl.formatToPlainString(_modDef3820.lxXLho, { emojiName });
};