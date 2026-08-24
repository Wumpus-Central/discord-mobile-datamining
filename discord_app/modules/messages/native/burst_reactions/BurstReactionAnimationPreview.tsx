// === Module 7610: BurstReactionAnimationPreview ===

// Module 7610 (BurstReactionAnimationPreview)
import noopAll from "noop" /* 19 */;
import ReactionTypes from "ReactionTypes" /* 7548 */;
import BurstReactionAnimationDefault from "BurstReactionAnimation" /* 7611 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/messages/native/burst_reactions/BurstReactionAnimationPreview.tsx");

export default function BurstReactionAnimationPreview(arg0) {
  ({ channelId, emoji, messageId, reactionType } = arg0);
  let tmp2 = null;
  if (reactionType === ReactionTypes.ReactionTypes.BURST) {
    const obj = { isFullscreen: true, channelId: null, messageId: null, emoji: null };
    obj[1] = channelId;
    obj[2] = messageId;
    obj[3] = emoji;
    tmp2 = jsx(BurstReactionAnimationDefault, { isFullscreen: true, channelId: null, messageId: null, emoji: null });
  }
  return tmp2;
};