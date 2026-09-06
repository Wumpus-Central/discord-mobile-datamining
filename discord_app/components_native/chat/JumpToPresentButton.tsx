// discord_app/components_native/chat/JumpToPresentButton.tsx
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import useToken from "../../design/tokens/native/useToken.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import useChatBottomManagerUIStore from "../../modules/chat_input/native/useChatBottomManagerUIStore.tsx";
import GatewayConnectionStore from "../../modules/gateway/GatewayConnectionStore.tsx";
import MessageStore from "../../stores/MessageStore.tsx";

require = fn;
const View = fn(17).View;
let useChatBottomManagerUIStore = fn(9485);
({ useChatInputContainerHeight: closure_4, useSmallSuggestionBarHeight: hasOwnProperty } = useChatBottomManagerUIStore);
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { container: null, containerIOS: null };
createStyles = {
  borderRadius: nativeDefault.radii.round,
  position: "absolute",
  right: nativeDefault.modules.mobile.JUMP_TO_PRESENT_RIGHT_SPACING,
};
createStyles.container = createStyles;
createStyles.containerIOS = { bottom: "100%", pointerEvents: "box-none" };
let closure_10 = createStyles.createStyles(createStyles);
const PlatformUtils = fn(1115);
let closure_11 = PlatformUtils.isIOS()
  ? (View) => {
      const obj = { marginBottom: null };
      const token = useToken.useToken(nativeDefault.modules.mobile.JUMP_TO_PRESENT_BOTTOM_SPACING);
      obj.marginBottom = token + hasOwnProperty(View);
      return obj;
    }
  : (View) => {
      const obj = { bottom: null };
      const token = obj.useToken(nativeDefault.modules.mobile.JUMP_TO_PRESENT_BOTTOM_SPACING);
      const sum = React4(View) + token;
      obj.bottom = sum + hasOwnProperty(View);
      return obj;
    };
const size = fn(2);
const result = size.fileFinishedImporting("components_native/chat/JumpToPresentButton.tsx");

export default function JumpToPresentButton(channelId) {
  channelId = channelId.channelId;
  const screenIndex = channelId.screenIndex;
  let tmp = closure_10();
  const tmp2 = closure_11(screenIndex);
  let obj = channelId(504);
  const items = [GatewayConnectionStore];
  dependencyMap = obj.useStateFromStores(items, () => connected.isConnected(), []);
  let tmp5 = useChatBottomManagerUIStore((showingAutoComplete) => {
    let tmp = closure_2;
    if (tmp) {
      showingAutoComplete = showingAutoComplete.showingAutoComplete;
      value = showingAutoComplete.get(screenIndex);
      let tmp5 = !value;
      if (!value) {
        const showJumpToPresentButtonChannelId = showingAutoComplete.showJumpToPresentButtonChannelId;
        tmp5 = showJumpToPresentButtonChannelId.get(screenIndex) === channelId;
      }
      tmp = tmp5;
    }
    return tmp;
  });
  const isVoicePanelMounted = channelId(9681).useIsVoicePanelMounted(channelId);
  const obj2 = channelId(9681);
  const isVoicePanelOpen = channelId(9681).useIsVoicePanelOpen(channelId);
  const obj3 = channelId(9681);
  const items1 = [MessageStore];
  const stateFromStores = channelId(504).useStateFromStores(
    items1,
    () => null != MessageStore.getMessages(channelId).jumpReturnTargetId,
  );
  if (!tmp5) {
    return null;
  }
  const obj4 = channelId(504);
  let tmp10 = tmp2;
  if (tmp3Result.isIOS()) {
    const items2 = [tmp.containerIOS, tmp2];
    tmp10 = items2;
  }
  const intl = tmp3(1114).intl;
  const string = intl.string;
  const t = tmp3(1114).t;
  if (stateFromStores) {
    let stringResult = string(t.dpjpOp);
  } else {
    stringResult = string(t.gpoQsB);
  }
  obj = { style: null, children: null };
  const items3 = [tmp.container, tmp10];
  obj.style = items3;
  if (tmp5) {
    obj = { accessibilityLabel: stringResult, icon: screenIndex(12269), onPress: channelId.onJumpToPresent };
    let tmp12Result = jsx(screenIndex(12268), {
      accessibilityLabel: stringResult,
      icon: screenIndex(12269),
      onPress: channelId.onJumpToPresent,
    });
    const tmp16 = screenIndex(12268);
  } else {
    tmp12Result = jsx(tmp3(12270).MemoedVoicePanelDismissChatButton, {});
  }
  obj.children = tmp12Result;
  return <View style={null}>{null}</View>;
}
