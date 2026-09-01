// discord_app/modules/chat_input/native/action_buttons/ChatInputActionButtonGiftOrThread.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import FadeTransitionItemDefault from "ChatInputActionButtonTransitionItem.tsx";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { ChatInputActionType } from "../ChatInputConstants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";
import { map } from "../../../../design/tokens/native/useToken.tsx";

const require = arg1;
function renderChatInputActionButtonGiftAndThread(arg0, styleButton, state, cleanup) {
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
    obj[3] = onPress(11804).ThreadPlusIcon;
    obj[4] = function onPress(arg0) {
      return onPress(arg0, closure_1_5.THREAD);
    };
    obj[5] = styleButton;
    let tmpResult = tmp(tmp2(11806), obj);
    const tmp2Result = tmp2(11806);
  } else {
    obj = { accessible: null, channel: null, onPress: null, style: null, styleButton: null };
    obj[0] = accessible;
    obj[1] = channel;
    obj[2] = onPress;
    obj[3] = styleButtonWrapper;
    obj[4] = styleButton;
    tmpResult = tmp(tmp2(11815), obj);
  }
  obj[2] = tmpResult;
  return jsx(FadeTransitionItemDefault, { cleanup, state, children: null }, arg0);
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
  let obj = map;
  const token = obj.useToken(ThemesDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
  let items = [arg0];
  const obj2 = map;
  obj = { style: callback(token, require("../../../../design/tokens/native/useToken.tsx").useToken(ThemesDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN)).container, children: null };
  const memo = importAllResult.useMemo(() => {
    const items = [closure_0];
    return items;
  }, items);
  obj = { items: memo, renderItem: renderChatInputActionButtonGiftAndThread, getItemKey: getChatInputActionButtonGiftAndThreadKey };
  obj[1] = jsx(require("../../../../../discord_common/js/packages/design/native.tsx").TransitionGroup, { items: memo, renderItem: renderChatInputActionButtonGiftAndThread, getItemKey: getChatInputActionButtonGiftAndThreadKey });
  return <View items={memo} renderItem={renderChatInputActionButtonGiftAndThread} getItemKey={getChatInputActionButtonGiftAndThreadKey} />;
});
const result = require("set").fileFinishedImporting("modules/chat_input/native/action_buttons/ChatInputActionButtonGiftOrThread.tsx");

export default memoResult;