// discord_app/modules/chat_input/native/action_buttons/ChatInputActionButtonGiftOrThread.tsx
import importAllResult from "noop";
import { View } from "get ActivityIndicator";
import { ChatInputActionType } from "TextAreaCta";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import { Themes } from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { wrapChildrenDefault } from "../../../../design/components/TransitionGroup/TransitionGroup.tsx";
import { map } from "../../../../design/tokens/native/useToken.tsx";
import { FadeTransitionItem } from "ChatInputActionButtonTransitionItem.tsx";

const require = arg1;
function renderChatInputActionButtonGiftAndThread(arg0, styleButton, state, cleanup) {
  let accessible;
  let canStartThreads;
  let channel;
  let onPress;
  let shouldShowThread;
  let styleButtonWrapper;
  ({ accessible, onPress } = styleButton);
  styleButton = styleButton.styleButton;
  ({ canStartThreads, channel, shouldShowThread, styleButtonWrapper } = styleButton);
  let obj = { cleanup, state, children: null };
  if (shouldShowThread) {
    obj = { accessible: null, accessibilityLabel: null, disabled: null, IconComponent: null, onPress: null, style: null };
    obj[0] = accessible;
    const intl = onPress(1236).intl;
    obj[1] = intl.string(onPress(1236).t["4WNcpu"]);
    obj[2] = !canStartThreads;
    obj[3] = onPress(11681).ThreadPlusIcon;
    obj[4] = function onPress(arg0) {
      return onPress(arg0, outer1_5.THREAD);
    };
    obj[5] = styleButton;
    let tmpResult = tmp(tmp2(11685), obj);
    const tmp2Result = tmp2(11685);
  } else {
    obj = { accessible: null, channel: null, onPress: null, style: null, styleButton: null };
    obj[0] = accessible;
    obj[1] = channel;
    obj[2] = onPress;
    obj[3] = styleButtonWrapper;
    obj[4] = styleButton;
    tmpResult = tmp(tmp2(11694), obj);
  }
  obj[2] = tmpResult;
  return jsx(FadeTransitionItem, { cleanup, state, children: null }, arg0);
}
function getChatInputActionButtonGiftAndThreadKey(shouldShowThread) {
  let str = "gift";
  if (shouldShowThread.shouldShowThread) {
    str = "thread";
  }
  return str;
}
let c3 = importAllResult;
let closure_7 = createCacheKey.createStyles((height) => {
  const container = { width: height + 2 * arg1, height };
  return { container };
});
const memoResult = importAllResult.memo(function ChatInputActionButtonGiftOrThread(arg0) {
  const _require = arg0;
  let obj = _map;
  const token = obj.useToken(Themes.modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
  let items = [arg0];
  const obj2 = _map;
  obj = { style: callback(token, _map.useToken(Themes.modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN)).container, children: null };
  const memo = importAllResult.useMemo(() => {
    const items = [closure_0];
    return items;
  }, items);
  obj = { items: memo, renderItem: renderChatInputActionButtonGiftAndThread, getItemKey: getChatInputActionButtonGiftAndThreadKey };
  obj[1] = jsx(_wrapChildrenDefault.TransitionGroup, { items: memo, renderItem: renderChatInputActionButtonGiftAndThread, getItemKey: getChatInputActionButtonGiftAndThreadKey });
  return <View items={memo} renderItem={renderChatInputActionButtonGiftAndThread} getItemKey={getChatInputActionButtonGiftAndThreadKey} />;
});
const result = require("TextAreaCta").fileFinishedImporting("modules/chat_input/native/action_buttons/ChatInputActionButtonGiftOrThread.tsx");

export default memoResult;