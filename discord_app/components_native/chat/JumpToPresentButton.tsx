// discord_app/components_native/chat/JumpToPresentButton.tsx
import noopAll from "../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import map from "../../design/tokens/native/useToken.tsx";
import { View } from "../../../_runtime/00017_get_ActivityIndicator.js";
import updateChatInputContainerHeight from "../../modules/chat_input/native/useChatBottomManagerUIStore.tsx";
import closure_6 from "../../modules/chat_input/native/useChatBottomManagerUIStore.tsx";
import closure_7 from "../../modules/gateway/GatewayConnectionStore.tsx";
import closure_8 from "../../stores/MessageStore.tsx";
import { jsx } from "../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../design/components/Styles/native/createStyles.tsx";
import set from "../../utils/PlatformUtils.tsx";

require = arg1;
noopAll;
({ useChatInputContainerHeight: c4, useSmallSuggestionBarHeight: c5 } = updateChatInputContainerHeight);
createCacheKey = { container: null, containerIOS: null };
createCacheKey = {
  borderRadius: ThemesDefault.radii.round,
  position: "absolute",
  right: ThemesDefault.modules.mobile.JUMP_TO_PRESENT_RIGHT_SPACING,
};
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { bottom: "100%", pointerEvents: "box-none" };
let closure_10 = createCacheKey.createStyles(createCacheKey);
let closure_11 = set.isIOS()
  ? (arg0) => {
      const obj = { marginBottom: null };
      const token = map.useToken(ThemesDefault.modules.mobile.JUMP_TO_PRESENT_BOTTOM_SPACING);
      obj[0] = token + callback2(arg0);
      return obj;
    }
  : (arg0) => {
      let obj = map;
      obj = { bottom: null };
      const token = obj.useToken(ThemesDefault.modules.mobile.JUMP_TO_PRESENT_BOTTOM_SPACING);
      const sum = callback(arg0) + token;
      obj[0] = sum + callback2(arg0);
      return obj;
    };
const result = set.fileFinishedImporting("components_native/chat/JumpToPresentButton.tsx");

export default function JumpToPresentButton(channelId) {
  channelId = channelId.channelId;
  const screenIndex = channelId.screenIndex;
  dependencyMap = undefined;
  let tmp = callback4();
  const tmp2 = callback5(screenIndex);
  let obj = channelId(504);
  const items = [closure_7];
  dependencyMap = obj.useStateFromStores(items, () => connected.isConnected(), []);
  let tmp5 = callback3((showingAutoComplete) => {
    let tmp = closure_2;
    if (tmp) {
      showingAutoComplete = showingAutoComplete.showingAutoComplete;
      const value = showingAutoComplete.get(screenIndex);
      let tmp5 = !value;
      if (!value) {
        const showJumpToPresentButtonChannelId = showingAutoComplete.showJumpToPresentButtonChannelId;
        tmp5 = showJumpToPresentButtonChannelId.get(tmp3) === channelId;
      }
      tmp = tmp5;
      tmp3 = screenIndex;
    }
    return tmp;
  });
  const isVoicePanelMounted = channelId(9681).useIsVoicePanelMounted(channelId);
  const obj2 = channelId(9681);
  const isVoicePanelOpen = channelId(9681).useIsVoicePanelOpen(channelId);
  const obj3 = channelId(9681);
  const items1 = [closure_8];
  const stateFromStores = channelId(504).useStateFromStores(
    items1,
    () => null != closure_1_8.getMessages(channelId).jumpReturnTargetId,
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
  obj = { style: items3, children: null };
  items3 = [tmp.container, tmp10];
  if (tmp5) {
    obj = { accessibilityLabel: null, icon: null, onPress: null };
    obj[0] = stringResult;
    obj[1] = screenIndex(12269);
    obj[2] = channelId.onJumpToPresent;
    let tmp12Result = tmp12(screenIndex(12268), obj);
    const tmp16 = screenIndex(12268);
  } else {
    tmp12Result = tmp12(tmp3(12270).MemoedVoicePanelDismissChatButton, {});
  }
  obj[1] = tmp12Result;
  return <View style={items3}>{null}</View>;
}
