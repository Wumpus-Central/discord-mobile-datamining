// discord_app/modules/messages/native/burst_reactions/BurstReactionAnimationPreview.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import MessageReactionsTypes from "../../MessageReactionsTypes.tsx";
import BurstReactionAnimationDefault from "BurstReactionAnimation.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let channelId;
      let emoji;
      let messageId;
      let reactionType;
      const obj = react2;
      const cResult = obj.c(4);
      ({ channelId, emoji, messageId, reactionType } = arg0);
      let tmp3 = null;
      if (reactionType === MessageReactionsTypes.ReactionTypes.BURST) {
        if (cResult[0] === channelId) {
          if (cResult[1] === emoji) {
            let tmp4;
            if (cResult[2] === messageId) {
              tmp4 = cResult[3];
            }
            tmp3 = tmp4;
          }
        }
        const tmp7 = jsx(BurstReactionAnimationDefault, { isFullscreen: true, channelId, messageId, emoji });
        cResult[0] = channelId;
        cResult[1] = emoji;
        cResult[2] = messageId;
        cResult[3] = tmp7;
        tmp4 = tmp7;
      }
      return tmp3;
    }
  : (arg0) => {
      let channelId;
      let emoji;
      let messageId;
      let reactionType;
      ({ channelId, emoji, messageId, reactionType } = arg0);
      let tmp2 = null;
      if (reactionType === MessageReactionsTypes.ReactionTypes.BURST) {
        tmp2 = jsx(BurstReactionAnimationDefault, { isFullscreen: true, channelId, messageId, emoji });
      }
      return tmp2;
    };
const result = size.fileFinishedImporting("modules/messages/native/burst_reactions/BurstReactionAnimationPreview.tsx");

export default tmp3;
