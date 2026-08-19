// === Module 10716: getMessageJumpData ===

// Module 10716 (getMessageJumpData)
import DISCORD_EPOCHDefault from "DISCORD_EPOCH" /* 11 */;
import obj132 from "obj132" /* 500 */;
import useSystemKeyboardHeight from "useSystemKeyboardHeight" /* 1895 */;
import GuildThemeSourcePreference from "GuildThemeSourcePreference" /* 4306 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import subscribeToKeyboardUIStore from "subscribeToKeyboardUIStore" /* 1496 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;

require = fn;
const result = require("obj132").fileFinishedImporting("components_native/chat/getMessageJumpData.tsx");

export default function getMessageJumpData(messages, isAtBottom, messages2) {
  messages = messages.messages;
  const lastResult = messages.last();
  messages2 = messages2.messages;
  currentUser = currentUser.getCurrentUser();
  const ANIMATED = GuildThemeSourcePreference.JumpType.ANIMATED;
  let tmp7 = tmp6;
  ({ jumpSequenceId, focusTargetId } = messages);
  if (messages.initialScrollSequenceId === messages2.initialScrollSequenceId) {
    tmp7 = messages2.jumpSequenceId !== messages.jumpSequenceId;
  }
  let tmp8 = tmp6;
  if (messages.initialScrollSequenceId === messages2.initialScrollSequenceId) {
    tmp8 = messages2.focusSequenceId !== messages.focusSequenceId;
  }
  if (null != messages.jumpTargetId) {
    if (tmp7) {
      ({ channelId, jumpTargetId } = messages);
      if (channelId !== jumpTargetId) {
        ({ jumpTargetId: jumpTargetId2, jumpType } = messages);
      }
      jumpTargetId2 = messages.first().id;
      const firstResult = messages.first();
    }
  }
  if (!isAtBottom.isAtBottom) {
    if (isAtBottom.hasPreviousMessages) {
      if (!messages2.loadingMore) {
        if (null != lastResult) {
          if (null != currentUser) {
            if (lastResult.author.id === currentUser.id) {
              if (null != lastResult1) {
                let obj = DISCORD_EPOCHDefault;
              }
              let id = lastResult.id;
              let flag = false;
              let tmp12 = ANIMATED;
              let tmp13 = null;
            } else {
              const interaction = lastResult.interaction;
              let id1;
              if (interaction != null) {
                id1 = interaction.user.id;
              }
            }
          }
          obj = { scrollToMessageId: null, jumpTargetId: null, jumpType: null, jumpSequenceId: null, minimizeScrolling: null, focusTargetId: null, shouldInitialScroll: null };
          obj[0] = id;
          obj[1] = tmp13;
          obj[2] = tmp12;
          obj[3] = jumpSequenceId;
          obj[4] = flag;
          let tmp18 = null;
          if (tmp8) {
            tmp18 = focusTargetId;
          }
          obj[5] = tmp18;
          obj[6] = tmp6;
          return obj;
        }
      }
    }
  }
  if (!messages.loadingMore) {
    if (messages.jumpedToPresent) {
      if (tmp7) {
        if (null != lastResult) {
          id = lastResult.id;
          flag = false;
          tmp12 = ANIMATED;
          tmp13 = null;
        }
      }
    }
  }
  lastResult1 = messages2.last();
  const tmp4Result = obj132;
  flag = false;
  tmp12 = ANIMATED;
  tmp13 = null;
  id = null;
  if (tmp14) {
    id = messages.replyingMessageId;
    flag = true;
    tmp12 = ANIMATED;
    tmp13 = null;
  }
  tmp14 = obj132.isAndroid() && messages2.androidKeyboardHeight < messages.androidKeyboardHeight && null != messages.replyingMessageId;
};
export const useMessageJumpAndroidKeyboardHeight = function useMessageJumpAndroidKeyboardHeight() {
  let num = 0;
  if (obj2.isAndroid()) {
    num = useSystemKeyboardHeight.getSystemKeyboardHeight();
    const tmpResult = useSystemKeyboardHeight;
  }
  obj2 = obj132;
  [tmp4, require] = callback(React.useState(num), 2);
  const effect = React.useEffect(() => closure_1_5((keyboardHeight) => {
    if (obj.isAndroid()) {
      callback(keyboardHeight.keyboardHeight);
    }
    obj = closure_1_0(closure_1_2[4]);
  }), []);
  return tmp4;
};