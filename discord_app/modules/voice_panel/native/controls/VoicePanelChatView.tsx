// discord_app/modules/voice_panel/native/controls/VoicePanelChatView.tsx
import util from "../../../../intl/index.native.tsx";
import _mod1652 from "../../../../../_runtime/metro/01652__.js";
import ChannelRTCActionCreatorsDefault from "../../../../actions/ChannelRTCActionCreators.tsx";
import ChannelActionCreatorsDefault from "../../../../actions/ChannelActionCreators.tsx";
import ThemedGradientDefault from "../../../client_themes/native/ThemedGradient.tsx";
import _modDef10899 from "../../../../../_runtime/metro/10899__.js";
import VoicePanelStateContextDefault from "../VoicePanelStateContext.tsx";
import ChatFloatingNavButtonDefault from "../../../chat_input/native/ChatFloatingNavButton.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const _modDef1652 = _mod1652;

require = fn;
const Platform = fn(17).Platform;
const CONTROLS_DRAWER_HEADER_SIZE = fn(11358).CONTROLS_DRAWER_HEADER_SIZE;
const Constants = fn(1072);
({ ComponentActions: closure_4, ME: hasOwnProperty } = Constants);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5141);
let closure_8 = createStyles.createStyles({
  container: { flex: 1, overflow: "hidden", paddingTop: CONTROLS_DRAWER_HEADER_SIZE },
  gradientWrapper: { position: "absolute", top: CONTROLS_DRAWER_HEADER_SIZE, left: 0 },
  titleBlur: { opacity: 0 },
});
let closure_9 = {
  code: "(function VoicePanelChatViewTsx1(){let[windowDimensions]=this.__closure;return{width:windowDimensions.get().width,height:windowDimensions.get().height};})",
};
let closure_10 = noop.memo(function GradientHack() {
  const tmp3 = closure_8();
  items = [closure_9, noop.useContext(VoicePanelStateContextDefault).windowDimensions];
  c0 = undefined;
  [tmp4, tmp5] = items;
  class VoicePanelChatViewTsx1 {
    constructor() {
      size = { width: closure_0.get().width, height: closure_0.get().height };
      return size;
    }
  }
  const items1 = [tmp5];
  VoicePanelChatViewTsx1.__closure = items1;
  VoicePanelChatViewTsx1.__workletHash = 6734453041358;
  VoicePanelChatViewTsx1.__initData = tmp4;
  const animatedStyle = _mod1652.useAnimatedStyle(VoicePanelChatViewTsx1);
  const obj2 = { style: null, children: timestampProducer(ThemedGradientDefault, { absolute: true }) };
  const items2 = [tmp3.gradientWrapper, animatedStyle];
  obj2.style = items2;
  return timestampProducer(_modDef1652.View, obj2);
});
const memoResult = noop.memo(function VoicePanelDismissChatButton() {
  const callback = noop.useCallback(() => {
    const ComponentDispatch = require("ComponentDispatchUtils").ComponentDispatch;
    ComponentDispatch.dispatch(constants.VOICE_PANEL_TIV_CLOSE);
  }, []);
  const obj = { accessibilityLabel: null, icon: null, onPress: null };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t["5MstTl"]);
  obj.icon = _modDef10899;
  obj.onPress = callback;
  return timestampProducer(ChatFloatingNavButtonDefault, obj);
});
let obj = {
  container: { flex: 1, overflow: "hidden", paddingTop: CONTROLS_DRAWER_HEADER_SIZE },
  gradientWrapper: { position: "absolute", top: CONTROLS_DRAWER_HEADER_SIZE, left: 0 },
  titleBlur: { opacity: 0 },
};
let size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelChatView.tsx");

export default noop.memo(function VoicePanelChatView(shown) {
  shown = shown.shown;
  let guildId;
  let channelId;
  let tmp = closure_8();
  const ref = channelId.useRef(null);
  const context = channelId.useContext(ref(guildId[11]));
  guildId = context.guildId;
  channelId = context.channelId;
  const gradientTop = shown(guildId[14]).useGradientTop();
  const rect = ref(guildId[16])();
  const obj = shown(guildId[14]);
  items = [guildId, channelId];
  const controlsDrawerOpenWidth = shown(guildId[17]).getControlsDrawerOpenWidth(
    ref(guildId[15])().width,
    rect.left,
    rect.right,
  );
  const effect = channelId.useEffect(() => {
    let tmp = guildId;
    if (guildId == null) {
      tmp = hasOwnProperty;
    }
    ChannelActionCreatorsDefault.preload(tmp, channelId);
    return () => {
      ref(guildId[6]).updateChatOpen(channelId, false);
    };
  }, items);
  const items1 = [channelId, shown];
  const effect1 = channelId.useEffect(() => {
    ChannelRTCActionCreatorsDefault.updateChatOpen(channelId, shown);
    const current = ref.current;
    if (shown) {
      if (current != null) {
        const result = current.chatInputTrackerRegister();
      }
    } else {
      if (current != null) {
        const result1 = current.chatInputTrackerUnregister();
      }
      const current2 = tmp2.current;
      if (current2 != null) {
        current2.blur();
      }
    }
  }, items1);
  const callback = channelId.useCallback(() => {
    const ComponentDispatch = shown(guildId[7]).ComponentDispatch;
    ComponentDispatch.dispatch(constants.VOICE_PANEL_TIV_CLOSE);
  }, []);
  const obj2 = shown(guildId[17]);
  const obj3 = { value: controlsDrawerOpenWidth, children: null };
  const obj4 = { gradient: ref(guildId[19])(), children: null };
  const obj5 = {
    nativeID: "voice-panel-chat-view",
    accessibilityViewIsModal: shown,
    onAccessibilityEscape: callback,
    style: null,
    children: null,
  };
  const items2 = [tmp.container, gradientTop];
  obj5.style = items2;
  const items3 = [closure_6(closure_10, {}), ,];
  const obj6 = { title: null, disablePill: true, blurStyle: null };
  const tmp9 = ref(guildId[19])();
  const intl = shown(guildId[9]).intl;
  obj6.title = intl.string(shown(guildId[9]).t["/VQax8"]);
  obj6.blurStyle = tmp.titleBlur;
  items3[1] = closure_6(ref(guildId[23]), obj6);
  const tmp12 = ref(guildId[23]);
  if (guildId == null) {
    guildId = closure_5;
  }
  items3[2] = closure_6(ref(guildId[24]), {
    disableGradient: true,
    alwaysRespectKeyboard: false,
    setNoExtractUI: false,
    guildId,
    channelId,
    chatInputRef: ref,
    screenIndex: "voice-panel",
  });
  obj5.children = items3;
  obj4.children = closure_7(shown(guildId[22]).AccessibilityView, obj5);
  obj3.children = closure_6(shown(guildId[21]).ThemeContextProvider, obj4);
  return closure_6(ref(guildId[20]).Provider, obj3);
});
export const MemoedVoicePanelDismissChatButton = memoResult;
