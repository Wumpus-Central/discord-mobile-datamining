// === Module 11923: VoicePanelChatView ===

// Module 11923 (VoicePanelChatView)
import c from "c" /* 576 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1121 */;
import util from "util" /* 1126 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4811 */;
import _modDef4997 from "module_4997" /* 4997 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5105 */;
import ReanimatedNativeViewDefault from "ReanimatedNativeView" /* 6760 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 7008 */;
import ThemedGradientDefault from "ThemedGradient" /* 10196 */;
import ChatFloatingNavButtonDefault from "ChatFloatingNavButton" /* 11921 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11925 */;
import noop from "module_19" /* 19 */;

require = fn;
const Platform = fn(17).Platform;
const CONTROLS_DRAWER_HEADER_SIZE = fn(11924).CONTROLS_DRAWER_HEADER_SIZE;
const Constants = fn(1085);
({ ComponentActions: closure_4, ME: hasOwnProperty } = Constants);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5091);
let closure_8 = createStyles.createStyles({ container: { flex: 1, overflow: "hidden", paddingTop: CONTROLS_DRAWER_HEADER_SIZE }, gradientWrapper: { position: "absolute", top: CONTROLS_DRAWER_HEADER_SIZE, left: 0 }, titleBlur: { opacity: 0 } });
fn(558);
const __initData = { code: "function VoicePanelChatViewTsx1(){const{windowDimensions}=this.__closure;return{width:windowDimensions.get().width,height:windowDimensions.get().height};}" };
const __initData2 = { code: "function VoicePanelChatViewTsx2(){const{windowDimensions}=this.__closure;return{width:windowDimensions.get().width,height:windowDimensions.get().height};}" };
let ReactCompilerGating = fn(558);
let closure_11 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function GradientHack() {
  const cResult = c.c(6);
  const windowDimensions = noop.useContext(VoicePanelStateContextDefault).windowDimensions;
  const tmp4 = closure_8();
  const fn = function n() {
    const size = { width: windowDimensions.get().width, height: windowDimensions.get().height };
    return size;
  };
  fn.__closure = { windowDimensions };
  fn.__workletHash = 16775846409623;
  fn.__initData = __initData;
  const animatedStyle = ReanimatedRexport.useAnimatedStyle(fn);
  if (cResult[0] === animatedStyle) {
    if (cResult[1] === tmp4.gradientWrapper) {
      let tmp6 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp10 = timestampProducer(ThemedGradientDefault, { absolute: true });
      cResult[3] = tmp10;
      let tmp8 = tmp10;
    } else {
      tmp8 = cResult[3];
    }
    if (cResult[4] !== tmp6) {
      const obj3 = { style: tmp6, children: tmp8 };
      const tmp13 = timestampProducer(ReanimatedNativeViewDefault, obj3);
      cResult[4] = tmp6;
      cResult[5] = tmp13;
      let tmp11 = tmp13;
    } else {
      tmp11 = cResult[5];
    }
    return tmp11;
  }
  const items = [tmp4.gradientWrapper, animatedStyle];
  cResult[0] = animatedStyle;
  cResult[1] = tmp4.gradientWrapper;
  cResult[2] = items;
  tmp6 = items;
}) : (function GradientHack() {
  const windowDimensions = noop.useContext(VoicePanelStateContextDefault).windowDimensions;
  const tmp = closure_8();
  const fn = function n() {
    const size = { width: windowDimensions.get().width, height: windowDimensions.get().height };
    return size;
  };
  fn.__closure = { windowDimensions };
  fn.__workletHash = 8873787995284;
  fn.__initData = __initData2;
  const animatedStyle = ReanimatedRexport.useAnimatedStyle(fn);
  const obj2 = { style: null, children: null };
  const items = [tmp.gradientWrapper, animatedStyle];
  obj2.style = items;
  obj2.children = timestampProducer(ThemedGradientDefault, { absolute: true });
  return timestampProducer(ReanimatedNativeViewDefault, obj2);
}));
ReactCompilerGating = fn(558);
const memoResult = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function VoicePanelDismissChatButton() {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch.dispatch(constants.VOICE_PANEL_TIV_CLOSE);
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { accessibilityLabel: null, icon: null, onPress: null };
    const intl = util.intl;
    obj2.accessibilityLabel = intl.string(util.t["5MstTl"]);
    obj2.icon = _modDef4997;
    obj2.onPress = first;
    const tmp9 = timestampProducer(ChatFloatingNavButtonDefault, obj2);
    cResult[1] = tmp9;
    let tmp5 = tmp9;
  } else {
    tmp5 = cResult[1];
  }
  return tmp5;
}) : (function VoicePanelDismissChatButton() {
  const callback = noop.useCallback(() => {
    const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
    ComponentDispatch.dispatch(constants.VOICE_PANEL_TIV_CLOSE);
  }, []);
  const obj = { accessibilityLabel: null, icon: null, onPress: null };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t["5MstTl"]);
  obj.icon = _modDef4997;
  obj.onPress = callback;
  return timestampProducer(ChatFloatingNavButtonDefault, obj);
}));
let obj = { container: { flex: 1, overflow: "hidden", paddingTop: CONTROLS_DRAWER_HEADER_SIZE }, gradientWrapper: { position: "absolute", top: CONTROLS_DRAWER_HEADER_SIZE, left: 0 }, titleBlur: { opacity: 0 } };
let size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelChatView.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function VoicePanelChatView(shown) {
  const cResult = shown(guildId[8]).c(34);
  shown = shown.shown;
  closure_8();
  const ref = channelId.useRef(null);
  const context = channelId.useContext(ref(guildId[13]));
  guildId = context.guildId;
  channelId = context.channelId;
  const obj = shown(guildId[8]);
  const obj2 = channelId;
  let tmp = shown;
  const tmp2 = guildId;
  const gradientTop = shown(guildId[17]).useGradientTop();
  const width = ref(guildId[18])().width;
  const rect = ref(guildId[19])();
  if (cResult[0] === rect.left) {
    if (cResult[1] === rect.right) {
      if (cResult[4] === channelId) {
        if (cResult[5] === guildId) {
          let tmp10 = cResult[6];
          let tmp11 = cResult[7];
        }
        const effect = obj2.useEffect(tmp10, tmp11);
        class D {
          constructor() {
            obj = closure_1(closure_2[21]);
            tmp = guildId;
            if (guildId == null) {
              tmp = ME;
            }
            preloadResult = obj.preload(tmp, channelId);
            return () => {
              ref(guildId[6]).updateChatOpen(channelId, false);
            };
          }
        }
        const fn = function x() {
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
        };
        const items = [channelId, shown];
        cResult[8] = channelId;
        cResult[9] = shown;
        cResult[10] = fn;
        cResult[11] = items;
      }
      class D {
        constructor() {
          obj = closure_1(closure_2[21]);
          tmp = guildId;
          if (guildId == null) {
            tmp = ME;
          }
          preloadResult = obj.preload(tmp, channelId);
          return () => {
            ref(guildId[6]).updateChatOpen(channelId, false);
          };
        }
      }
      const items1 = [guildId, channelId];
      cResult[4] = channelId;
      cResult[5] = guildId;
      cResult[6] = D;
      cResult[7] = items1;
      tmp11 = items1;
      tmp10 = D;
    }
  }
  const obj3 = shown(guildId[17]);
  const controlsDrawerOpenWidth = tmp(tmp2[20]).getControlsDrawerOpenWidth(width, rect.left, rect.right);
  cResult[0] = rect.left;
  cResult[1] = rect.right;
  cResult[2] = width;
  cResult[3] = controlsDrawerOpenWidth;
}) : (function VoicePanelChatView(shown) {
  shown = shown.shown;
  let guildId;
  let channelId;
  let tmp = closure_8();
  const ref = channelId.useRef(null);
  const context = channelId.useContext(ref(guildId[13]));
  guildId = context.guildId;
  channelId = context.channelId;
  const gradientTop = shown(guildId[17]).useGradientTop();
  const rect = ref(guildId[19])();
  const obj = shown(guildId[17]);
  const items = [guildId, channelId];
  const controlsDrawerOpenWidth = shown(guildId[20]).getControlsDrawerOpenWidth(ref(guildId[18])().width, rect.left, rect.right);
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
    const ComponentDispatch = shown(guildId[9]).ComponentDispatch;
    ComponentDispatch.dispatch(constants.VOICE_PANEL_TIV_CLOSE);
  }, []);
  const obj2 = shown(guildId[20]);
  const obj3 = { value: controlsDrawerOpenWidth, children: null };
  const obj4 = { gradient: ref(guildId[22])(), children: null };
  const obj5 = { nativeID: "voice-panel-chat-view", accessibilityViewIsModal: shown, onAccessibilityEscape: callback, style: null, children: null };
  const items2 = [tmp.container, gradientTop];
  obj5.style = items2;
  const items3 = [closure_6(closure_11, {}), , ];
  const obj6 = { title: null, disablePill: true, blurStyle: null };
  const tmp9 = ref(guildId[22])();
  const intl = shown(guildId[11]).intl;
  obj6.title = intl.string(shown(guildId[11]).t["/VQax8"]);
  obj6.blurStyle = tmp.titleBlur;
  items3[1] = closure_6(ref(guildId[23]), obj6);
  const tmp12 = ref(guildId[23]);
  if (guildId == null) {
    guildId = closure_5;
  }
  items3[2] = closure_6(ref(guildId[24]), { disableGradient: true, alwaysRespectKeyboard: false, setNoExtractUI: false, guildId, channelId, chatInputRef: ref, screenIndex: "voice-panel" });
  obj5.children = items3;
  obj4.children = closure_7(shown(guildId[25]).AccessibilityView, obj5);
  obj3.children = closure_6(shown(guildId[26]).ThemeContextProvider, obj4);
  return closure_6(ref(guildId[27]).Provider, obj3);
}));
export const MemoedVoicePanelDismissChatButton = memoResult;