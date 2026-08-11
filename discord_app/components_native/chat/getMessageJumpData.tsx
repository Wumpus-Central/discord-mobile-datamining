// discord_app/components_native/chat/getMessageJumpData.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import subscribeToKeyboardUIStore from "subscribeToKeyboardUIStore";
import mergeGuildAvatar from "mergeGuildAvatar";
import { GuildThemeSourcePreference } from "../../flow/Client.tsx";
import { set } from "../../utils/PlatformUtils.tsx";
import { DISCORD_EPOCH } from "../../utils/SnowflakeUtils.tsx";

const require = arg1;
const result = require("subscribeToKeyboardUIStore").fileFinishedImporting("components_native/chat/getMessageJumpData.tsx");

export default function getMessageJumpData(messages, isAtBottom, messages2) {
  let channelId;
  let focusTargetId;
  let jumpSequenceId;
  let jumpTargetId;
  let jumpTargetId2;
  let jumpType;
  messages = messages.messages;
  const lastResult = messages.last();
  messages2 = messages2.messages;
  const lastResult1 = messages2.last();
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
                let obj = DISCORD_EPOCH;
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
  const tmp4 = require;
  const tmp4Result = set;
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
  let require;
  let tmp4;
  let num = 0;
  if (obj2.isAndroid()) {
    num = tmp(1894).getSystemKeyboardHeight();
    const tmpResult = tmp(1894);
  }
  const obj = React;
  obj2 = set;
  tmp = require;
  [tmp4, require] = callback(React.useState(num), 2);
  const effect = obj.useEffect(() => outer1_5((keyboardHeight) => {
    if (obj.isAndroid()) {
      callback(keyboardHeight.keyboardHeight);
    }
  }), []);
  return tmp4;
};