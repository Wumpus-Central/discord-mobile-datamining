// discord_app/modules/chat_input/native/action_buttons/ChatInputActionButtonGiftOrThread.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useToken from "../../../../design/tokens/native/useToken.tsx";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import ChatInputActionButtonDefault from "ChatInputActionButton.tsx";
import ChatInputActionButtonTransitionItemDefault from "ChatInputActionButtonTransitionItem.tsx";
import ChatInputActionButtonGiftDefault from "ChatInputActionButtonGift.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function renderChatInputActionButtonGiftAndThread(id, styleButton, state, cleanup) {
  ({ accessible, onPress } = styleButton);
  styleButton = styleButton.styleButton;
  ({ canStartThreads, channel, shouldShowThread, styleButtonWrapper } = styleButton);
  const obj = { cleanup, state, children: null };
  if (shouldShowThread) {
    const obj2 = {
      accessible,
      accessibilityLabel: null,
      disabled: null,
      IconComponent: null,
      onPress: null,
      style: null,
    };
    const intl = onPress(1126).intl;
    obj2.accessibilityLabel = intl.string(onPress(1126).t["4WNcpu"]);
    obj2.disabled = !canStartThreads;
    obj2.IconComponent = onPress(11866).ThreadPlusIcon;
    obj2.onPress = function onPress(arg0) {
      return onPress(arg0, ChatInputActionType.THREAD);
    };
    obj2.style = styleButton;
    let tmpResult = jsx(ChatInputActionButtonDefault, {
      accessible,
      accessibilityLabel: null,
      disabled: null,
      IconComponent: null,
      onPress: null,
      style: null,
    });
    const tmp2Result = ChatInputActionButtonDefault;
  } else {
    const obj3 = { accessible, channel, onPress, style: styleButtonWrapper, styleButton };
    tmpResult = jsx(ChatInputActionButtonGiftDefault, {
      accessible,
      channel,
      onPress,
      style: styleButtonWrapper,
      styleButton,
    });
  }
  obj.children = tmpResult;
  return jsx(ChatInputActionButtonTransitionItemDefault, { cleanup, state, children: null }, id);
}
function getChatInputActionButtonGiftAndThreadKey(shouldShowThread) {
  let str = "gift";
  if (shouldShowThread.shouldShowThread) {
    str = "thread";
  }
  return str;
}
const View = fn(17).View;
const ChatInputActionType = fn(11576).ChatInputActionType;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let closure_7 = createStyles.createStyles((height, arg1) => {
  const obj = { container: null };
  const size = { width: height + 2 * arg1, height };
  obj.container = size;
  return obj;
});
const ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting(
  "modules/chat_input/native/action_buttons/ChatInputActionButtonGiftOrThread.tsx",
);

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        const cResult = c.c(7);
        const token = useToken.useToken(nativeDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
        const tmp5 = closure_7(token, useToken.useToken(nativeDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN));
        if (cResult[0] !== arg0) {
          const items = [arg0];
          cResult[0] = arg0;
          cResult[1] = items;
          let tmp6 = items;
        } else {
          tmp6 = cResult[1];
        }
        if (cResult[2] !== tmp6) {
          const obj4 = {
            items: tmp6,
            renderItem: renderChatInputActionButtonGiftAndThread,
            getItemKey: getChatInputActionButtonGiftAndThreadKey,
          };
          const tmp11 = jsx(native.TransitionGroup, {
            items: tmp6,
            renderItem: renderChatInputActionButtonGiftAndThread,
            getItemKey: getChatInputActionButtonGiftAndThreadKey,
          });
          cResult[2] = tmp6;
          cResult[3] = tmp11;
          let tmp7 = tmp11;
        } else {
          tmp7 = cResult[3];
        }
        if (cResult[4] === tmp5.container) {
          if (cResult[5] === tmp7) {
            let tmp12 = cResult[6];
          }
          return tmp12;
        }
        const tmp13 = <View style={tmp5.container}>{tmp7}</View>;
        cResult[4] = tmp5.container;
        cResult[5] = tmp7;
        cResult[6] = tmp13;
        tmp12 = tmp13;
        const obj5 = { style: tmp5.container, children: tmp7 };
      }
    : (arg0) => {
        closure_0 = arg0;
        const token = useToken.useToken(nativeDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
        let items = [arg0];
        const obj3 = {
          style: closure_7(token, useToken.useToken(nativeDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN))
            .container,
          children: null,
        };
        const memo = noop.useMemo(() => {
          const items = [closure_0];
          return items;
        }, items);
        obj3.children = jsx(native.TransitionGroup, {
          items: memo,
          renderItem: renderChatInputActionButtonGiftAndThread,
          getItemKey: getChatInputActionButtonGiftAndThreadKey,
        });
        return (
          <View
            style={
              closure_7(token, useToken.useToken(nativeDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN))
                .container
            }
          >
            {null}
          </View>
        );
      },
);
