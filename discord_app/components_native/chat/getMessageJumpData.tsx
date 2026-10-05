// discord_app/components_native/chat/getMessageJumpData.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import PlatformUtils from "../../utils/PlatformUtils.tsx";
import useSystemKeyboardHeight from "../../modules/keyboard/native/useSystemKeyboardHeight.native.tsx";
import flow_Client from "../../flow/Client.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../_runtime/00019_react.js";
import subscribeToKeyboardUIStore from "../../modules/keyboard/native/subscribeToKeyboardUIStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import ReactCompilerGating from "../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let closure_0;
      let first;
      let first1;
      let tmp7;
      let tmp8;
      let obj = require("react");
      const cResult = obj.c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let num2 = 0;
        const tmpResult = require("PlatformUtils");
        if (tmpResult.isAndroid()) {
          const tmpResult2 = require("useSystemKeyboardHeight");
          num2 = tmpResult2.getSystemKeyboardHeight();
        }
        cResult[0] = num2;
        first = num2;
      } else {
        first = cResult[0];
      }
      [first1, _require] = react.useState(first);
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function l() {
          return subscribeToKeyboardUIStore((keyboardHeight) => {
            const obj = closure_0(dependencyMap[6]);
            if (obj.isAndroid()) {
              closure_1_0(keyboardHeight.keyboardHeight);
            }
          });
        };
        const items = [];
        cResult[1] = fn;
        cResult[2] = items;
        tmp8 = items;
        tmp7 = fn;
      } else {
        tmp7 = cResult[1];
        tmp8 = cResult[2];
      }
      const effect = react.useEffect(tmp7, tmp8);
      return first1;
    }
  : () => {
      let require;
      let tmp4;
      const useState = react.useState;
      let num = 0;
      const obj2 = PlatformUtils;
      if (obj2.isAndroid()) {
        const tmpResult = useSystemKeyboardHeight;
        num = tmpResult.getSystemKeyboardHeight();
      }
      [tmp4, require] = _slicedToArray(useState(num), 2);
      const tmp3 = _slicedToArray(useState(num), 2);
      const effect = react.useEffect(
        () =>
          subscribeToKeyboardUIStore((keyboardHeight) => {
            const obj = require("PlatformUtils");
            if (obj.isAndroid()) {
              closure_1_0(keyboardHeight.keyboardHeight);
            }
          }),
        [],
      );
      return tmp4;
    };
const result = size.fileFinishedImporting("components_native/chat/getMessageJumpData.tsx");

export default function getMessageJumpData(messages, isAtBottom, messages2) {
  let channelId;
  let flag;
  let focusTargetId;
  let id;
  let jumpSequenceId;
  let jumpTargetId;
  let jumpType;
  let tmp12;
  let tmp15;
  messages = messages.messages;
  const lastResult = messages.last();
  messages2 = messages2.messages;
  const lastResult1 = messages2.last();
  const currentUser = UserStore.getCurrentUser();
  const ANIMATED = flow_Client.JumpType.ANIMATED;
  let tmp7 = tmp6;
  ({ jumpSequenceId, focusTargetId } = messages);
  if (messages.initialScrollSequenceId === messages2.initialScrollSequenceId) {
    tmp7 = messages2.jumpSequenceId !== messages.jumpSequenceId;
  }
  const tmp8 =
    messages.initialScrollSequenceId !== messages2.initialScrollSequenceId ||
    messages2.focusSequenceId !== messages.focusSequenceId;
  if (null != messages.jumpTargetId) {
    if (tmp7) {
      ({ channelId, jumpTargetId } = messages);
      const firstResult = messages.first();
      if (channelId === jumpTargetId) {
        let jumpTargetId2;
        if (null != firstResult) {
          jumpTargetId2 = firstResult.id;
        }
        jumpType = messages.jumpType;
        flag = false;
        tmp12 = jumpTargetId2;
        id = jumpTargetId2;
      }
      jumpTargetId2 = messages.jumpTargetId;
    }
    const obj2 = {
      scrollToMessageId: id,
      jumpTargetId: tmp12,
      jumpType,
      jumpSequenceId,
      minimizeScrolling: flag,
      focusTargetId: tmp15,
      shouldInitialScroll: messages.initialScrollSequenceId !== messages2.initialScrollSequenceId,
    };
    tmp15 = null;
    if (tmp8) {
      tmp15 = focusTargetId;
    }
    return obj2;
  }
  if (!isAtBottom.isAtBottom) {
    if (isAtBottom.hasPreviousMessages) {
      if (!messages2.loadingMore) {
        if (null != lastResult) {
          if (null != currentUser) {
            if (lastResult.author.id === currentUser.id) {
              if (null != lastResult1) {
                SnowflakeUtilsDefault;
              }
              id = lastResult.id;
              flag = false;
              jumpType = ANIMATED;
              tmp12 = null;
            } else {
              const interaction = lastResult.interaction;
              let id1;
              if (interaction != null) {
                id1 = interaction.user.id;
              }
            }
          }
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
          jumpType = ANIMATED;
          tmp12 = null;
        }
      }
    }
  }
  flag = false;
  jumpType = ANIMATED;
  tmp12 = null;
  id = null;
  const tmp4Result = PlatformUtils;
  const tmp13 =
    tmp4Result.isAndroid() &&
    messages2.androidKeyboardHeight < messages.androidKeyboardHeight &&
    null != messages.replyingMessageId;
  if (tmp13) {
    id = messages.replyingMessageId;
    flag = true;
    jumpType = ANIMATED;
    tmp12 = null;
  }
}
export const useMessageJumpAndroidKeyboardHeight = tmp2;
