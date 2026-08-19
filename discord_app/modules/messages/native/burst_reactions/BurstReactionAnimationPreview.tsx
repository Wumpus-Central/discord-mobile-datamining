// discord_app/modules/messages/native/burst_reactions/BurstReactionAnimationPreview.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ReactionTypes from "../../MessageReactionsTypes.tsx";
import BurstReactionAnimationDefault from "BurstReactionAnimation.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

require = fn;
noopAll;
const result = require("obj132").fileFinishedImporting("modules/messages/native/burst_reactions/BurstReactionAnimationPreview.tsx");

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