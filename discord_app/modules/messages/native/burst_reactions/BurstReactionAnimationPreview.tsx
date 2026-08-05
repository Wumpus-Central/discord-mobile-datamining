// discord_app/modules/messages/native/burst_reactions/BurstReactionAnimationPreview.tsx
import "noop";
import { jsx } from "jsxProd";
import { ReactionTypes } from "../../MessageReactionsTypes.tsx";
import { BurstReactionAnimation } from "BurstReactionAnimation.tsx";

const require = arg1;
const result = require("ReactionTypes").fileFinishedImporting("modules/messages/native/burst_reactions/BurstReactionAnimationPreview.tsx");

export default function BurstReactionAnimationPreview(arg0) {
  let channelId;
  let emoji;
  let messageId;
  let reactionType;
  ({ channelId, emoji, messageId, reactionType } = arg0);
  let tmp2 = null;
  if (reactionType === ReactionTypes.ReactionTypes.BURST) {
    const obj = { isFullscreen: true, channelId: null, messageId: null, emoji: null };
    obj[1] = channelId;
    obj[2] = messageId;
    obj[3] = emoji;
    tmp2 = jsx(BurstReactionAnimation, { isFullscreen: true, channelId: null, messageId: null, emoji: null });
  }
  return tmp2;
};