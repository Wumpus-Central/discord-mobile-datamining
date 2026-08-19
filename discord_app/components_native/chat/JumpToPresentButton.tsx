// === Module 11434: JumpToPresentButton ===

// Module 11434 (JumpToPresentButton)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import map from "map" /* 4097 */;
import { View } from "get ActivityIndicator" /* 17 */;
import updateChatInputContainerHeight from "updateChatInputContainerHeight" /* 8682 */;
import { useChatInputContainerHeight as closure_5 } from "updateChatInputContainerHeight" /* 8682 */;
import _handleConnectionOpen from "_handleConnectionOpen" /* 4495 */;
import reinjectEphemerals from "reinjectEphemerals" /* 4994 */;
import { jsx } from "jsxProd" /* 21 */;
import "createCacheKey";
import obj132 from "obj132" /* 500 */;

require = fn;
noopAll;
const createCacheKey = { borderRadius: ThemesDefault.radii.round, position: "absolute", right: ThemesDefault.modules.mobile.JUMP_TO_PRESENT_RIGHT_SPACING };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { bottom: "100%", marginBottom: ThemesDefault.modules.mobile.JUMP_TO_PRESENT_BOTTOM_SPACING, pointerEvents: "box-none" };
let closure_9 = createCacheKey.createStyles(createCacheKey);
let closure_10 = obj132.isIOS() ? (() => null) : ((arg0) => {
  const obj = { bottom: null };
  const token = obj.useToken(ThemesDefault.modules.mobile.JUMP_TO_PRESENT_BOTTOM_SPACING);
  obj[0] = callback2(arg0) + token;
  return obj;
});
const result = obj132.fileFinishedImporting("components_native/chat/JumpToPresentButton.tsx");

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
        tmp5 = showJumpToPresentButtonChannelId.get(screenIndex) === channelId;
      }
      tmp = tmp5;
    }
    return tmp;
  });
  obj1 = channelId(8667);
  const isVoicePanelMounted = obj1.useIsVoicePanelMounted(channelId);
  let tmp5 = screenIndex(1367)("JumpToPresentButton");
  const isVoicePanelOpen = channelId(8667).useIsVoicePanelOpen(channelId);
  const obj3 = channelId(8667);
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
      tmp3(11435);
      tmp3Result = tmp3(11436);
      obj[1] = tmp3Result;
      obj[2] = onJumpToPresent;
      let tmp13Result = <tmp3Result accessibilityLabel={null} icon={null} onPress={null} />;
    } else {
      obj1 = { accessibilityLabel: null, onPress: null, icon: null, variant: "primary-overlay" };
      obj1[0] = stringResult;
      obj1[1] = onJumpToPresent;
      obj1[2] = tmp3(11436);
      tmp13Result = jsx(tmp6(8035).IconButton, { accessibilityLabel: null, onPress: null, icon: null, variant: "primary-overlay" });
    }
  } else {
    obj[1] = jsx(tmp6(11437).MemoedVoicePanelDismissChatButton, {});
    return <tmp14 {...obj} />;
  }
  const obj4 = channelId(589);
};