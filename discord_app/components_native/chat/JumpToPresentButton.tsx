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
createCacheKey = { borderRadius: ThemesDefault.radii.round, position: "absolute", right: ThemesDefault.modules.mobile.JUMP_TO_PRESENT_RIGHT_SPACING };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { bottom: "100%", marginBottom: ThemesDefault.modules.mobile.JUMP_TO_PRESENT_BOTTOM_SPACING, pointerEvents: "box-none" };
let closure_9 = createCacheKey.createStyles(createCacheKey);
let closure_10 = set.isIOS() ? (() => null) : ((arg0) => {
  let obj = map;
  obj = { bottom: null };
  const token = obj.useToken(ThemesDefault.modules.mobile.JUMP_TO_PRESENT_BOTTOM_SPACING);
  obj[0] = callback2(arg0) + token;
  return obj;
});
const result = set.fileFinishedImporting("components_native/chat/JumpToPresentButton.tsx");

export default function JumpToPresentButton(channelId) {
  channelId = channelId.channelId;
  const screenIndex = channelId.screenIndex;
  const onJumpToPresent = channelId.onJumpToPresent;
  dependencyMap = undefined;
  let tmp = callback3();
  const tmp2 = callback4(screenIndex);
  let tmp3Result = dependencyMap;
  let obj = channelId(589);
  const items = [closure_6];
  dependencyMap = obj.useStateFromStores(items, () => connected.isConnected(), []);
  const tmp7 = callback((showingAutoComplete) => {
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
  obj1 = channelId(10856);
  const isVoicePanelMounted = obj1.useIsVoicePanelMounted(channelId);
  let tmp5 = screenIndex(1367)("JumpToPresentButton");
  const isVoicePanelOpen = channelId(10856).useIsVoicePanelOpen(channelId);
  const obj3 = channelId(10856);
  const items1 = [closure_7];
  const stateFromStores = channelId(589).useStateFromStores(items1, () => null != closure_1_7.getMessages(channelId).jumpReturnTargetId);
  if (!tmp7) {
    return null;
  }
  let containerIOS = tmp2;
  if (tmp2 == null) {
    containerIOS = tmp.containerIOS;
  }
  const intl = tmp6(1236).intl;
  const string = intl.string;
  const t = tmp6(1236).t;
  if (stateFromStores) {
    let stringResult = string(t.dpjpOp);
  } else {
    stringResult = string(t.gpoQsB);
  }
  obj = { style: items2, children: null };
  items2 = [tmp.container, containerIOS];
  if (tmp7) {
    if (tmp5) {
      obj = { accessibilityLabel: null, icon: null, onPress: null };
      obj[0] = stringResult;
      tmp3Result = tmp3(11836);
      tmp3Result = tmp3(11837);
      obj[1] = tmp3Result;
      obj[2] = onJumpToPresent;
      let tmp13Result = tmp13(tmp3Result, obj);
    } else {
      obj1 = { accessibilityLabel: null, onPress: null, icon: null, variant: "primary-overlay" };
      obj1[0] = stringResult;
      obj1[1] = onJumpToPresent;
      obj1[2] = tmp3(11837);
      tmp13Result = tmp13(tmp6(7896).IconButton, obj1);
    }
  } else {
    obj[1] = tmp13(tmp6(11838).MemoedVoicePanelDismissChatButton, {});
    return tmp13(tmp14, obj);
  }
};