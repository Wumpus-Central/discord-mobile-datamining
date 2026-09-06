// === Module 12270: VoicePanelChatView ===

// Module 12270 (VoicePanelChatView)
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1109 */;
import util from "util" /* 1114 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import _modDef4514 from "module_4514" /* 4514 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4573 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 4761 */;
import ThemedGradientDefault from "ThemedGradient" /* 5125 */;
import ReanimatedNativeViewDefault from "ReanimatedNativeView" /* 7073 */;
import ChatFloatingNavButtonDefault from "ChatFloatingNavButton" /* 12268 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 12272 */;
import noop from "module_19" /* 19 */;

require = fn;
const Platform = fn(17).Platform;
const CONTROLS_DRAWER_HEADER_SIZE = fn(12271).CONTROLS_DRAWER_HEADER_SIZE;
const Constants = fn(1074);
({ ComponentActions: closure_4, ME: hasOwnProperty } = Constants);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4560);
let closure_8 = createStyles.createStyles({ container: { flex: 1, overflow: "hidden", paddingTop: CONTROLS_DRAWER_HEADER_SIZE }, gradientWrapper: { position: "absolute", top: CONTROLS_DRAWER_HEADER_SIZE, left: 0 }, titleBlur: { opacity: 0 } });
const __initData = { code: "function VoicePanelChatViewTsx1(){const{windowDimensions}=this.__closure;return{width:windowDimensions.get().width,height:windowDimensions.get().height};}" };
let closure_10 = noop.memo(() => {
  const windowDimensions = noop.useContext(VoicePanelStateContextDefault).windowDimensions;
  let obj = ReanimatedRexport;
  const fn = function n() {
    const size = { width: windowDimensions.get().width, height: windowDimensions.get().height };
    return size;
  };
  fn.__closure = { windowDimensions };
  fn.__workletHash = 16775846409623;
  fn.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(fn);
  obj = { style: null, children: null };
  const items = [closure_8().gradientWrapper, animatedStyle];
  obj.style = items;
  const tmp = closure_8();
  obj.children = timestampProducer(ThemedGradientDefault, { absolute: true });
  return timestampProducer(ReanimatedNativeViewDefault, obj);
});
const memoResult = noop.memo(function VoicePanelDismissChatButton() {
  const callback = noop.useCallback(() => {
    const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
    ComponentDispatch.dispatch(constants.VOICE_PANEL_TIV_CLOSE);
  }, []);
  const obj = { accessibilityLabel: null, icon: null, onPress: null };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t["5MstTl"]);
  obj.icon = _modDef4514;
  obj.onPress = callback;
  return timestampProducer(ChatFloatingNavButtonDefault, obj);
});
let obj = { container: { flex: 1, overflow: "hidden", paddingTop: CONTROLS_DRAWER_HEADER_SIZE }, gradientWrapper: { position: "absolute", top: CONTROLS_DRAWER_HEADER_SIZE, left: 0 }, titleBlur: { opacity: 0 } };
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
  let obj = shown(guildId[15]);
  const gradientTop = obj.useGradientTop();
  const rect = ref(guildId[17])();
  let obj1 = shown(guildId[18]);
  const items = [guildId, channelId];
  const controlsDrawerOpenWidth = obj1.getControlsDrawerOpenWidth(ref(guildId[16])().width, rect.left, rect.right);
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
  obj = { value: controlsDrawerOpenWidth, children: null };
  obj = { gradient: ref(guildId[20])(), children: null };
  obj1 = { nativeID: "voice-panel-chat-view", accessibilityViewIsModal: shown, onAccessibilityEscape: callback, style: null, children: null };
  const items2 = [tmp.container, gradientTop];
  obj1.style = items2;
  const items3 = [closure_6(closure_10, {}), , ];
  const obj2 = { title: null, disablePill: true, blurStyle: null };
  const tmp9 = ref(guildId[20])();
  const intl = shown(guildId[9]).intl;
  obj2.title = intl.string(shown(guildId[9]).t["/VQax8"]);
  obj2.blurStyle = tmp.titleBlur;
  items3[1] = closure_6(ref(guildId[24]), obj2);
  const tmp12 = ref(guildId[24]);
  if (guildId == null) {
    guildId = closure_5;
  }
  items3[2] = closure_6(ref(guildId[25]), { disableGradient: true, alwaysRespectKeyboard: false, setNoExtractUI: false, guildId, channelId, chatInputRef: ref, screenIndex: "voice-panel" });
  obj1.children = items3;
  obj.children = closure_7(shown(guildId[23]).AccessibilityView, obj1);
  obj.children = closure_6(shown(guildId[22]).ThemeContextProvider, obj);
  return closure_6(ref(guildId[21]).Provider, obj);
});
export const MemoedVoicePanelDismissChatButton = memoResult;