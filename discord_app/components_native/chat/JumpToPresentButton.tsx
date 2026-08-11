// discord_app/components_native/chat/JumpToPresentButton.tsx
import "noop";
import { View } from "memoResult1";
import updateChatInputContainerHeight from "updateChatInputContainerHeight";
import { useChatInputContainerHeight as closure_5 } from "updateChatInputContainerHeight";
import _handleConnectionOpen from "_handleConnectionOpen";
import reinjectEphemerals from "reinjectEphemerals";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import set from "set";
import set from "updateChatInputContainerHeight";
import { Themes } from "../../../discord_common/js/packages/tokens/native.tsx";
import { map } from "../../design/tokens/native/useToken.tsx";

const require = arg1;
createCacheKey = { container: null, containerIOS: null };
createCacheKey = { borderRadius: require("Themes").radii.round, position: "absolute", right: require("Themes").modules.mobile.JUMP_TO_PRESENT_RIGHT_SPACING };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { bottom: "100%", marginBottom: require("Themes").modules.mobile.JUMP_TO_PRESENT_BOTTOM_SPACING, pointerEvents: "box-none" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let closure_10 = set.isIOS() ? (() => null) : ((arg0) => {
  let obj = map;
  obj = { bottom: null };
  const token = obj.useToken(Themes.modules.mobile.JUMP_TO_PRESENT_BOTTOM_SPACING);
  obj[0] = callback2(arg0) + token;
  return obj;
});
const result = set.fileFinishedImporting("components_native/chat/JumpToPresentButton.tsx");

export default function JumpToPresentButton(channelId) {
  channelId = channelId.channelId;
  const screenIndex = channelId.screenIndex;
  const onJumpToPresent = channelId.onJumpToPresent;
  let dependencyMap;
  let tmp = createCacheKey();
  const tmp2 = callback3(screenIndex);
  let tmp3Result = dependencyMap;
  let obj = channelId(589);
  const items = [_handleConnectionOpen];
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
  let obj1 = channelId(10774);
  const isVoicePanelMounted = obj1.useIsVoicePanelMounted(channelId);
  let tmp5 = screenIndex(1367)("JumpToPresentButton");
  const isVoicePanelOpen = channelId(10774).useIsVoicePanelOpen(channelId);
  const obj3 = channelId(10774);
  const items1 = [reinjectEphemerals];
  const stateFromStores = channelId(589).useStateFromStores(items1, () => null != outer1_7.getMessages(channelId).jumpReturnTargetId);
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
      tmp3Result = tmp3(11644);
      tmp3Result = tmp3(11645);
      obj[1] = tmp3Result;
      obj[2] = onJumpToPresent;
      let tmp13Result = tmp13(tmp3Result, obj);
    } else {
      obj1 = { accessibilityLabel: null, onPress: null, icon: null, variant: "primary-overlay" };
      obj1[0] = stringResult;
      obj1[1] = onJumpToPresent;
      obj1[2] = tmp3(11645);
      tmp13Result = tmp13(tmp6(7753).IconButton, obj1);
    }
  } else {
    obj[1] = tmp13(tmp6(11646).MemoedVoicePanelDismissChatButton, {});
    return tmp13(tmp14, obj);
  }
};