import importAllResult from "useSafeAreaInsets";
import { Platform } from "useGradientBottom";
import { CONTROLS_DRAWER_HEADER_SIZE } from "VoicePanelControlsModes";
import ME from "ME";
import jsxProd from "module_4203";
import createCacheKey from "createCacheKey";

let c4;
let c5;
let closure_6;
let error;
const require = arg1;
let c3 = importAllResult;
({ ComponentActions: c4, ME: c5 } = ME);
({ jsx: closure_6, jsxs: error } = jsxProd);
let closure_8 = createCacheKey.createStyles({ container: { flex: 1, overflow: "hidden", paddingTop: CONTROLS_DRAWER_HEADER_SIZE }, gradientWrapper: { position: "absolute", top: CONTROLS_DRAWER_HEADER_SIZE, left: 0 }, titleBlur: { opacity: 0 } });
let closure_9 = { code: "function VoicePanelChatViewTsx1(){const{windowDimensions}=this.__closure;return{width:windowDimensions.get().width,height:windowDimensions.get().height};}" };
let closure_10 = importAllResult.memo(() => {
  const windowDimensions = importAllResult.useContext(importDefault(10050)).windowDimensions;
  let obj = windowDimensions(4054);
  const fn = function n() {
    return { width: windowDimensions.get().width, height: windowDimensions.get().height };
  };
  fn.__closure = { windowDimensions };
  fn.__workletHash = 16775846409623;
  fn.__initData = closure_9;
  const animatedStyle = obj.useAnimatedStyle(fn);
  obj = { style: items, children: null };
  items = [callback2().gradientWrapper, animatedStyle];
  const tmp = callback2();
  obj[1] = callback(importDefault(4723), { absolute: true });
  return callback(importDefault(7684), obj);
});
const memoResult = importAllResult.memo(function VoicePanelDismissChatButton() {
  const callback = importAllResult.useCallback(() => {
    const ComponentDispatch = callback(table[8]).ComponentDispatch;
    ComponentDispatch.dispatch(constants.VOICE_PANEL_TIV_CLOSE);
  }, []);
  if (tmp3) {
    let obj = { accessibilityLabel: null, icon: null, onPress: null };
    const intl2 = require(1236) /* getSystemLocale */.intl;
    obj[0] = intl2.string(require(1236) /* getSystemLocale */.t["5MstTl"]);
    obj[1] = tmp(4148);
    obj[2] = callback;
    let tmp5Result = tmp5(tmp(11444), obj);
    const tmpResult = tmp(11444);
  } else {
    obj = { accessibilityLabel: null, icon: null, onPress: null, variant: "primary-overlay" };
    const intl = require(1236) /* getSystemLocale */.intl;
    obj[0] = intl.string(require(1236) /* getSystemLocale */.t["5MstTl"]);
    obj[1] = tmp(4148);
    obj[2] = callback;
    tmp5Result = tmp5(require(6685) /* IconButton */.IconButton, obj);
  }
  return tmp5Result;
});
const memoResult1 = importAllResult.memo(function VoicePanelChatView(shown) {
  shown = shown.shown;
  let ref;
  let guildId;
  let channelId;
  let tmp = callback2();
  ref = channelId.useRef(null);
  const context = channelId.useContext(ref(guildId[13]));
  guildId = context.guildId;
  channelId = context.channelId;
  let obj = shown(guildId[17]);
  const gradientTop = obj.useGradientTop();
  const rect = ref(guildId[19])();
  let obj1 = shown(guildId[20]);
  const items = [guildId, channelId];
  const controlsDrawerOpenWidth = obj1.getControlsDrawerOpenWidth(ref(guildId[18])().width, rect.left, rect.right);
  const effect = channelId.useEffect(() => {
    let tmp = guildId;
    if (guildId == null) {
      tmp = outer1_5;
    }
    ref(guildId[21]).preload(tmp, channelId);
    return () => {
      outer1_1(outer1_2[6]).updateChatOpen(closure_3, false);
    };
  }, items);
  const items1 = [channelId, shown];
  const effect1 = channelId.useEffect(() => {
    ref(guildId[6]).updateChatOpen(channelId, shown);
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
    const ComponentDispatch = shown(guildId[8]).ComponentDispatch;
    ComponentDispatch.dispatch(constants.VOICE_PANEL_TIV_CLOSE);
  }, []);
  obj = { value: controlsDrawerOpenWidth, children: null };
  obj = { gradient: ref(guildId[22])(), children: null };
  obj1 = { nativeID: "voice-panel-chat-view", accessibilityViewIsModal: shown, onAccessibilityEscape: callback, style: items2, children: null };
  items2 = [tmp.container, gradientTop];
  const items3 = [callback(closure_10, {}), , ];
  const obj2 = { title: null, disablePill: true, blurStyle: null };
  const tmp11 = closure_7;
  const tmp9 = ref(guildId[22])();
  const intl = shown(guildId[10]).intl;
  obj2[0] = intl.string(shown(guildId[10]).t["/VQax8"]);
  obj2[2] = tmp.titleBlur;
  items3[1] = callback(ref(guildId[26]), obj2);
  const tmp12 = ref(guildId[26]);
  if (guildId == null) {
    guildId = closure_5;
  }
  items3[2] = callback(ref(guildId[27]), { disableGradient: true, alwaysRespectKeyboard: false, setNoExtractUI: false, guildId, channelId, chatInputRef: ref, screenIndex: "voice-panel" });
  obj1[4] = items3;
  obj[1] = tmp11(shown(guildId[25]).AccessibilityView, obj1);
  obj[1] = callback(shown(guildId[24]).ThemeContextProvider, obj);
  return callback(ref(guildId[23]).Provider, obj);
});
let result = require("VoicePanelControlsModes").fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelChatView.tsx");

export default memoResult1;
export const MemoedVoicePanelDismissChatButton = memoResult;