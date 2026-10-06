// === Module 7464: BurstReactionAnimationPreview ===

// Module 7464 (BurstReactionAnimationPreview)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import MessageReactionsTypes from "MessageReactionsTypes" /* 7272 */;
import BurstReactionAnimationDefault from "BurstReactionAnimation" /* 7465 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
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
}) : ((arg0) => {
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
});
const result = size.fileFinishedImporting("modules/messages/native/burst_reactions/BurstReactionAnimationPreview.tsx");

export default tmp3;