// === Module 11875: ChatInputActionButtonGiftOrThread ===

// Module 11875 (ChatInputActionButtonGiftOrThread)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useToken from "useToken" /* 4580 */;
import native from "native" /* 4589 */;
import ChatInputConstants from "ChatInputConstants" /* 11576 */;
import ChatInputActionButtonDefault from "ChatInputActionButton" /* 11868 */;
import ChatInputActionButtonTransitionItemDefault from "ChatInputActionButtonTransitionItem" /* 11876 */;
import ChatInputActionButtonGiftDefault from "ChatInputActionButtonGift" /* 11878 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

function renderChatInputActionButtonGiftAndThread(id, styleButton, state, cleanup) {
  let accessible;
  let canStartThreads;
  let channel;
  let onPress;
  let shouldShowThread;
  let styleButtonWrapper;
  let tmpResult;
  ({ accessible, onPress } = styleButton);
  styleButton = styleButton.styleButton;
  ({ canStartThreads, channel, shouldShowThread, styleButtonWrapper } = styleButton);
  ChatInputActionButtonTransitionItemDefault;
  if (shouldShowThread) {
    ChatInputActionButtonDefault;
    const intl = onPress(1126).intl;
    tmpResult = <tmp2Result accessible={accessible} accessibilityLabel={intl.string(onPress(1126).t["4WNcpu"])} disabled={!canStartThreads} IconComponent={onPress(11866).ThreadPlusIcon} onPress={function onPress(arg0) {
      return onPress(arg0, ChatInputActionType.THREAD);
    }} style={styleButton} />;
  } else {
    tmpResult = jsx(ChatInputActionButtonGiftDefault, { accessible, channel, onPress, style: styleButtonWrapper, styleButton });
  }
  return <tmp4 key={id} cleanup={cleanup} state={state}>{tmpResult}</tmp4>;
}
function getChatInputActionButtonGiftAndThreadKey(shouldShowThread) {
  let str = "gift";
  if (shouldShowThread.shouldShowThread) {
    str = "thread";
  }
  return str;
}
const View = react_native.View;
const ChatInputActionType = ChatInputConstants.ChatInputActionType;
const jsx = Fragment.jsx;
let closure_7 = createStyles.createStyles((height, arg1) => {
  const obj = { container: size };
  size = { width: height + 2 * arg1, height };
  return obj;
});
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let tmp6;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(7);
  const obj2 = useToken;
  const token = obj2.useToken(nativeDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
  const obj3 = useToken;
  const tmp5 = closure_7(token, obj3.useToken(nativeDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN));
  if (cResult[0] !== arg0) {
    const items = [arg0];
    cResult[0] = arg0;
    cResult[1] = items;
    tmp6 = items;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] !== tmp6) {
    const tmp11 = jsx(native.TransitionGroup, { items: tmp6, renderItem: renderChatInputActionButtonGiftAndThread, getItemKey: getChatInputActionButtonGiftAndThreadKey });
    cResult[2] = tmp6;
    cResult[3] = tmp11;
    tmp7 = tmp11;
  } else {
    tmp7 = cResult[3];
  }
  if (cResult[4] === tmp5.container) {
    let tmp12;
    if (cResult[5] === tmp7) {
      tmp12 = cResult[6];
    }
    return tmp12;
  }
  const tmp13 = <View style={tmp5.container}>{tmp7}</View>;
  cResult[4] = tmp5.container;
  cResult[5] = tmp7;
  cResult[6] = tmp13;
  tmp12 = tmp13;
}) : ((arg0) => {
  let closure_0 = arg0;
  const obj = useToken;
  const token = obj.useToken(nativeDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
  let items = [arg0];
  const obj2 = useToken;
  const memo = react.useMemo(() => {
    const items = [closure_0];
    return items;
  }, items);
  return <View style={closure_7(token, obj2.useToken(nativeDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN)).container}>{null}</View>;
}));
let size = size_mod;
const result = size.fileFinishedImporting("modules/chat_input/native/action_buttons/ChatInputActionButtonGiftOrThread.tsx");

export default memoResult;