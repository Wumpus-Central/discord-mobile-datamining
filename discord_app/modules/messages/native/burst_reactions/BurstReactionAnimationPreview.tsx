// discord_app/modules/messages/native/burst_reactions/BurstReactionAnimationPreview.tsx
import c from "../../../../../_runtime/00576_c.js";
import MessageReactionsTypes from "../../MessageReactionsTypes.tsx";
import BurstReactionAnimationDefault from "BurstReactionAnimation.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/burst_reactions/BurstReactionAnimationPreview.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let tmp = dependencyMap;
      const cResult = c.c(4);
      ({ channelId, emoji, messageId, reactionType } = arg0);
      if (reactionType !== MessageReactionsTypes.ReactionTypes.BURST) {
        return null;
      } else {
        if (cResult[0] === channelId) {
          if (cResult[1] === emoji) {
          }
        }
        const obj2 = { isFullscreen: true, channelId, messageId, emoji };
        tmp = jsx(BurstReactionAnimationDefault, { isFullscreen: true, channelId, messageId, emoji });
        cResult[0] = channelId;
        cResult[1] = emoji;
        cResult[2] = messageId;
        cResult[3] = tmp;
      }
    }
  : (arg0) => {
      ({ channelId, emoji, messageId, reactionType } = arg0);
      let tmp2 = null;
      if (reactionType === MessageReactionsTypes.ReactionTypes.BURST) {
        const obj = { isFullscreen: true, channelId, messageId, emoji };
        tmp2 = jsx(BurstReactionAnimationDefault, { isFullscreen: true, channelId, messageId, emoji });
      }
      return tmp2;
    };
