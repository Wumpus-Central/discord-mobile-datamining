// discord_app/components_native/chat/getMessageJumpData.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import PlatformUtils from "../../utils/PlatformUtils.tsx";
import useSystemKeyboardHeight from "../../modules/keyboard/native/useSystemKeyboardHeight.native.tsx";
import Client from "../../flow/Client.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";
import subscribeToKeyboardUIStore from "../../modules/keyboard/native/subscribeToKeyboardUIStore.tsx";
import UserStore from "../../stores/UserStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("components_native/chat/getMessageJumpData.tsx");

export default function getMessageJumpData(messages, isAtBottom, messages2) {
  messages = messages.messages;
  const lastResult = messages.last();
  messages2 = messages2.messages;
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
          obj = {
            scrollToMessageId: id,
            jumpTargetId: tmp13,
            jumpType: tmp12,
            jumpSequenceId,
            minimizeScrolling: flag,
            focusTargetId: null,
            shouldInitialScroll: null,
          };
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
  lastResult1 = messages2.last();
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
  tmp14 =
    PlatformUtils.isAndroid() &&
    messages2.androidKeyboardHeight < messages.androidKeyboardHeight &&
    null != messages.replyingMessageId;
}
export const useMessageJumpAndroidKeyboardHeight = function useMessageJumpAndroidKeyboardHeight() {
  let num = 0;
  if (obj2.isAndroid()) {
    num = useSystemKeyboardHeight.getSystemKeyboardHeight();
    const tmpResult = useSystemKeyboardHeight;
  }
  obj2 = PlatformUtils;
  [tmp4, require] = _slicedToArray(noop.useState(num), 2);
  const effect = noop.useEffect(
    () =>
      subscribeToKeyboardUIStore((keyboardHeight) => {
        if (obj.isAndroid()) {
          closure_1_0(keyboardHeight.keyboardHeight);
        }
        obj = PlatformUtils;
      }),
    [],
  );
  return tmp4;
};
