// discord_app/components_native/chat/JumpToPresentButton.tsx
import noopAll from "../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import map from "../../design/tokens/native/useToken.tsx";
import { View } from "../../../_runtime/00017_get_ActivityIndicator.js";
import closure_4 from "../../modules/chat_input/native/useChatBottomManagerUIStore.tsx";
import { useChatInputContainerHeight as closure_5 } from "../../modules/chat_input/native/useChatBottomManagerUIStore.tsx";
import closure_6 from "../../modules/gateway/GatewayConnectionStore.tsx";
import closure_7 from "../../stores/MessageStore.tsx";
import { jsx } from "../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../design/components/Styles/native/createStyles.tsx";
import set from "../../utils/PlatformUtils.tsx";

require = arg1;
noopAll;
createCacheKey = { container: null, containerIOS: null };
createCacheKey = {
  borderRadius: ThemesDefault.radii.round,
  position: "absolute",
  right: ThemesDefault.modules.mobile.JUMP_TO_PRESENT_RIGHT_SPACING,
};
createCacheKey[0] = createCacheKey;
createCacheKey[1] = {
  bottom: "100%",
  marginBottom: ThemesDefault.modules.mobile.JUMP_TO_PRESENT_BOTTOM_SPACING,
  pointerEvents: "box-none",
};
let closure_9 = createCacheKey.createStyles(createCacheKey);
let closure_10 = set.isIOS()
  ? () => null
  : (arg0) => {
      let obj = map;
      obj = { bottom: null };
      const token = obj.useToken(ThemesDefault.modules.mobile.JUMP_TO_PRESENT_BOTTOM_SPACING);
      obj[0] = callback2(arg0) + token;
      return obj;
    };
const result = set.fileFinishedImporting("components_native/chat/JumpToPresentButton.tsx");

export default function JumpToPresentButton(channelId) {
  channelId = channelId.channelId;
  const screenIndex = channelId.screenIndex;
  dependencyMap = undefined;
  let tmp = callback3();
  const tmp2 = callback4(screenIndex);
  let obj = channelId(586);
  const items = [closure_6];
  dependencyMap = obj.useStateFromStores(items, () => connected.isConnected(), []);
  let tmp5 = callback((showingAutoComplete) => {
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
  const isVoicePanelMounted = channelId(9664).useIsVoicePanelMounted(channelId);
  const obj2 = channelId(9664);
  const isVoicePanelOpen = channelId(9664).useIsVoicePanelOpen(channelId);
  const obj3 = channelId(9664);
  const items1 = [closure_7];
  const stateFromStores = channelId(586).useStateFromStores(
    items1,
    () => null != closure_1_7.getMessages(channelId).jumpReturnTargetId,
  );
  if (!tmp5) {
    return null;
  }
  let containerIOS = tmp2;
  if (tmp2 == null) {
    containerIOS = tmp.containerIOS;
  }
  const intl = tmp3(1233).intl;
  const string = intl.string;
  const t = tmp3(1233).t;
  if (stateFromStores) {
    let stringResult = string(t.dpjpOp);
  } else {
    stringResult = string(t.gpoQsB);
  }
  obj = { style: items2, children: null };
  items2 = [tmp.container, containerIOS];
  if (tmp5) {
    obj = { accessibilityLabel: null, icon: null, onPress: null };
    obj[0] = stringResult;
    obj[1] = screenIndex(12059);
    obj[2] = channelId.onJumpToPresent;
    let tmp11Result = tmp11(screenIndex(12058), obj);
    const tmp15 = screenIndex(12058);
  } else {
    tmp11Result = tmp11(tmp3(12060).MemoedVoicePanelDismissChatButton, {});
  }
  obj[1] = tmp11Result;
  return <View style={items2}>{null}</View>;
}
