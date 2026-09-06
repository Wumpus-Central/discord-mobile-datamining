// discord_app/modules/chat_input/native/action_buttons/ChatInputActionButtonGiftOrThread.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useToken from "../../../../design/tokens/native/useToken.tsx";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import ChatInputActionButtonDefault from "ChatInputActionButton.tsx";
import ChatInputActionButtonTransitionItemDefault from "ChatInputActionButtonTransitionItem.tsx";
import ChatInputActionButtonGiftDefault from "ChatInputActionButtonGift.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function renderChatInputActionButtonGiftAndThread(key, styleButton, state, cleanup) {
  ({ accessible, onPress } = styleButton);
  styleButton = styleButton.styleButton;
  ({ canStartThreads, channel, shouldShowThread, styleButtonWrapper } = styleButton);
  let obj = { cleanup, state, children: null };
  if (shouldShowThread) {
    obj = { accessible, accessibilityLabel: null, disabled: null, IconComponent: null, onPress: null, style: null };
    const intl = onPress(1114).intl;
    obj.accessibilityLabel = intl.string(onPress(1114).t["4WNcpu"]);
    obj.disabled = !canStartThreads;
    obj.IconComponent = onPress(12237).ThreadPlusIcon;
    obj.onPress = function onPress(arg0) {
      return onPress(arg0, ChatInputActionType.THREAD);
    };
    obj.style = styleButton;
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
    obj = { accessible, channel, onPress, style: styleButtonWrapper, styleButton };
    tmpResult = jsx(ChatInputActionButtonGiftDefault, {
      accessible,
      channel,
      onPress,
      style: styleButtonWrapper,
      styleButton,
    });
  }
  obj.children = tmpResult;
  return jsx(ChatInputActionButtonTransitionItemDefault, { cleanup, state, children: null }, key);
}
function getChatInputActionButtonGiftAndThreadKey(shouldShowThread) {
  let str = "gift";
  if (shouldShowThread.shouldShowThread) {
    str = "thread";
  }
  return str;
}
const View = fn(17).View;
const ChatInputActionType = fn(11962).ChatInputActionType;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_7 = createStyles.createStyles((height, arg1) => {
  const obj = { container: null };
  const size = { width: height + 2 * arg1, height };
  obj.container = size;
  return obj;
});
let size = fn(2);
const result = size.fileFinishedImporting(
  "modules/chat_input/native/action_buttons/ChatInputActionButtonGiftOrThread.tsx",
);

export default noop.memo(function ChatInputActionButtonGiftOrThread(arg0) {
  closure_0 = arg0;
  let obj = useToken;
  const token = obj.useToken(nativeDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
  let items = [arg0];
  obj = {
    style: closure_7(token, useToken.useToken(nativeDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN)).container,
    children: null,
  };
  const memo = noop.useMemo(() => {
    const items = [closure_0];
    return items;
  }, items);
  obj = {
    items: memo,
    renderItem: renderChatInputActionButtonGiftAndThread,
    getItemKey: getChatInputActionButtonGiftAndThreadKey,
  };
  obj.children = jsx(native.TransitionGroup, {
    items: memo,
    renderItem: renderChatInputActionButtonGiftAndThread,
    getItemKey: getChatInputActionButtonGiftAndThreadKey,
  });
  return (
    <View
      items={memo}
      renderItem={renderChatInputActionButtonGiftAndThread}
      getItemKey={getChatInputActionButtonGiftAndThreadKey}
    />
  );
});
