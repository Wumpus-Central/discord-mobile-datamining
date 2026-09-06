// === Module 11525: getMessageJumpData ===

// Module 11525 (getMessageJumpData)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import Client from "Client" /* 4491 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import subscribeToKeyboardUIStore from "subscribeToKeyboardUIStore" /* 1479 */;
import UserStore from "UserStore" /* 1371 */;

const useSystemKeyboardHeight = tmp(1877);
require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("components_native/chat/getMessageJumpData.tsx");

export default function getMessageJumpData(messages, isAtBottom, messages2) {
  messages = messages.messages;
  const lastResult = messages.last();
  messages2 = messages2.messages;
  const lastResult1 = messages2.last();
  const currentUser = UserStore.getCurrentUser();
  const ANIMATED = Client.JumpType.ANIMATED;
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
      const firstResult = messages.first();
      if (channelId !== jumpTargetId) {
        ({ jumpTargetId: jumpTargetId2, jumpType } = messages);
      }
      jumpTargetId2 = firstResult.id;
    }
  }
  if (!isAtBottom.isAtBottom) {
    if (isAtBottom.hasPreviousMessages) {
      if (!messages2.loadingMore) {
        if (null != lastResult) {
          if (null != currentUser) {
            if (lastResult.author.id === currentUser.id) {
              if (null != lastResult1) {
                let obj = SnowflakeUtilsDefault;
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
          obj = { scrollToMessageId: id, jumpTargetId: tmp13, jumpType: tmp12, jumpSequenceId, minimizeScrolling: flag, focusTargetId: null, shouldInitialScroll: null };
          let tmp18 = null;
          if (tmp8) {
            tmp18 = focusTargetId;
          }
          obj.focusTargetId = tmp18;
          obj.shouldInitialScroll = tmp6;
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
  const tmp4Result = PlatformUtils;
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
};
export const useMessageJumpAndroidKeyboardHeight = function useMessageJumpAndroidKeyboardHeight() {
  let num = 0;
  if (obj2.isAndroid()) {
    num = useSystemKeyboardHeight.getSystemKeyboardHeight();
    const tmpResult = useSystemKeyboardHeight;
  }
  const obj = noop;
  obj2 = PlatformUtils;
  [tmp4, require] = _slicedToArray(noop.useState(num), 2);
  const effect = obj.useEffect(() => subscribeToKeyboardUIStore((keyboardHeight) => {
    if (obj.isAndroid()) {
      closure_1_0(keyboardHeight.keyboardHeight);
    }
  }), []);
  return tmp4;
};