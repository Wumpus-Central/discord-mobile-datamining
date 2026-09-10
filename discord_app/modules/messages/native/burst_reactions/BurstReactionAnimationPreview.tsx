// === Module 7876: BurstReactionAnimationPreview ===

// Module 7876 (BurstReactionAnimationPreview)
import MessageReactionsTypes from "MessageReactionsTypes" /* 7814 */;
import BurstReactionAnimationDefault from "BurstReactionAnimation" /* 7877 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/burst_reactions/BurstReactionAnimationPreview.tsx");

export default function BurstReactionAnimationPreview(arg0) {
  ({ channelId, emoji, messageId, reactionType } = arg0);
  let tmp2 = null;
  if (reactionType === MessageReactionsTypes.ReactionTypes.BURST) {
    const obj = { isFullscreen: true, channelId, messageId, emoji };
    tmp2 = jsx(BurstReactionAnimationDefault, { isFullscreen: true, channelId, messageId, emoji });
  }
  return tmp2;
};