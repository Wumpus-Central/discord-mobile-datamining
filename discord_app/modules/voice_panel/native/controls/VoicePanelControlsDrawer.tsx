// === Module 19598: VoicePanelControlsDrawer ===

// Module 19598 (VoicePanelControlsDrawer)
import nativeDefault from "native" /* 575 */;
import _modDef1652 from "module_1652" /* 1652 */;
import Suspender from "Suspender" /* 6124 */;
import useRefValueDefault from "useRefValue" /* 7100 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11409 */;
import VoicePanelChatViewDefault from "VoicePanelChatView" /* 14044 */;
import VoicePanelVoiceControlsDefault from "VoicePanelVoiceControls" /* 19599 */;
import VoicePanelControlsAppLauncherDefault from "VoicePanelControlsAppLauncher" /* 19610 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
function renderChat(shown) {
  const obj = { collapsable: false, style: absoluteFill.absoluteFill, children: React6(VoicePanelChatViewDefault, { shown }) };
  return React6(timestampProducer, obj);
}
get_ActivityIndicator = fn(17);
({ StyleSheet: hasOwnProperty, View: closure_6 } = get_ActivityIndicator);
const VoicePanelConstants = fn(11410);
({ MODE_CHANGE_PHYSICS: metroImportDefault, VoicePanelModes: closure_8 } = VoicePanelConstants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
const createStyles = fn(5141);
let obj = { drawer: { flex: 1, zIndex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER } };
let closure_11 = createStyles.createStyles(obj);
const memoResult = noop.memo(function LazyContentFreezer(shown) {
  shown = shown.shown;
  const renderContent = shown.renderContent;
  let ref;
  [tmp2, tmp3] = noop.useState(!shown);
  c2 = tmp3;
  let tmp4 = shown;
  if (shown) {
    tmp4 = tmp2;
  }
  if (tmp4) {
    tmp3(false);
  }
  ref = noop.useRef(shown);
  const effect = noop.useEffect(() => {
    let current = ref.current;
    if (!current) {
      current = shown;
    }
    ref.current = current;
  });
  items = [shown];
  const effect1 = noop.useEffect(() => {
    if (!shown) {
      _undefined(true);
    }
  }, items);
  const items1 = [renderContent, shown];
  const memo = noop.useMemo(() => renderContent(shown), items1);
  if (useRefValueDefault(ref)) {
    const obj2 = { freeze: tmp2, children: memo };
    let tmp11 = React6(Suspender.Freeze, obj2);
  } else {
    tmp11 = null;
  }
  return tmp11;
});
let closure_14 = { code: "(function VoicePanelControlsDrawerTsx1(){let[getControlsDrawerOpenWidth,windowDimensions,safeArea,withSpring,wrapperSpecs,TRANSITIONAL_HEIGHT,MODE_CHANGE_PHYSICS]=this.__closure;return{width:getControlsDrawerOpenWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right),opacity:withSpring(wrapperSpecs.get().height>=TRANSITIONAL_HEIGHT?1:0,MODE_CHANGE_PHYSICS)};})" };
let closure_15 = { code: "(function VoicePanelControlsDrawerTsx2(){let[wrapperSpecs,mode]=this.__closure;return[wrapperSpecs.get().drawerMode,mode.get()];})" };
let closure_16 = { code: "(function VoicePanelControlsDrawerTsx3(props,previous){let[cheapWorkletArrayShallowEqual,VoicePanelModes,scheduleOnRN,setFreeze]=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const[isDrawer,mode]=props;if(previous!=null&&isDrawer===previous[0]&&mode===previous[1]){return;}if(mode!==VoicePanelModes.PANEL||!isDrawer){scheduleOnRN(setFreeze,true);}else{scheduleOnRN(setFreeze,false);}})" };
let obj3 = { flex: 1, zIndex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelControlsDrawer.tsx");

export default noop.memo(function VoicePanelControlsDrawer(openTab) {
  ({ tab, sharedTab, wrapperSpecs, gestureSpecs } = openTab);
  _require = gestureSpecs;
  openTab = openTab.openTab;
  importDefault = openTab;
  const context = noop.useContext(VoicePanelStateContextDefault);
  const mode = context.mode;
  ({ channelId, windowDimensions, safeArea } = context);
  let tmp4 = closure_11();
  [tmp6, tmp7] = noop.useState(null == tab);
  const tmp5 = _slicedToArray(noop.useState(null == tab), 2);
  if (tmp8) {
    tmp7(false);
  }
  tmp8 = tab !== sharedTab.get() && tmp6;
  items = [closure_14, require("VoicePanelControlsUtils").getControlsDrawerOpenWidth, windowDimensions, safeArea, require("spring/spring").withSpring, wrapperSpecs, 200, closure_7];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  c5 = undefined;
  c6 = undefined;
  [tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18] = items;
  class VoicePanelControlsDrawerTsx1 {
    constructor() {
      obj = { width: closure_0(closure_1.get().width, closure_2.get().left, closure_2.get().right), opacity: null };
      tmp = closure_3;
      num = 0;
      if (closure_4.get().height >= closure_5) {
        num = 1;
      }
      obj.opacity = tmp(num, closure_6);
      return obj;
    }
  }
  const items1 = [tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18];
  VoicePanelControlsDrawerTsx1.__closure = items1;
  VoicePanelControlsDrawerTsx1.__workletHash = 12678028952961;
  VoicePanelControlsDrawerTsx1.__initData = tmp11;
  const animatedStyle = require("module_1652").useAnimatedStyle(VoicePanelControlsDrawerTsx1);
  const obj2 = require("module_1652");
  const items2 = [closure_15, wrapperSpecs, mode];
  _require = undefined;
  importDefault = undefined;
  [tmp20, tmp21, tmp22] = items2;
  class VoicePanelControlsDrawerTsx2 {
    constructor() {
      items = [, ];
      items[0] = closure_0.get().drawerMode;
      items[1] = closure_1.get();
      return items;
    }
  }
  const items3 = [tmp21, tmp22];
  VoicePanelControlsDrawerTsx2.__closure = items3;
  VoicePanelControlsDrawerTsx2.__workletHash = 7594507638980;
  VoicePanelControlsDrawerTsx2.__initData = tmp20;
  const items4 = [closure_16, require("cheapWorkletShallowEqual").cheapWorkletArrayShallowEqual, closure_8, require("module_1705").scheduleOnRN, tmp7];
  closure_129_0 = undefined;
  closure_129_1 = undefined;
  closure_129_2 = undefined;
  closure_129_3 = undefined;
  [tmp23, tmp24, tmp25, tmp26, tmp27] = items4;
  class VoicePanelControlsDrawerTsx3 {
    constructor(arg0, arg1) {
      tmp2 = arg1;
      tmp = closure_0;
      if (!tmp(openTab, tmp2)) {
        tmp3 = closure_3;
        num = 2;
        tmp4 = closure_3(openTab, 2);
        [tmp5, tmp6] = tmp4;
        tmp7 = null != arg1 && tmp5 === arg1[0] && tmp6 === arg1[1];
        if (!tmp7) {
          tmp8 = closure_1;
          if (tmp6 === closure_1.PANEL) {
            if (tmp5) {
              tmp12 = closure_2;
              tmp13 = closure_3;
              flag2 = false;
              tmp14 = closure_2(closure_3, false);
            }
          }
          tmp9 = closure_2;
          tmp10 = closure_3;
          flag = true;
          tmp11 = closure_2(closure_3, true);
        }
      }
      return;
    }
  }
  const items5 = [tmp24, tmp25, tmp26, tmp27];
  VoicePanelControlsDrawerTsx3.__closure = items5;
  VoicePanelControlsDrawerTsx3.__workletHash = 8293489565998;
  VoicePanelControlsDrawerTsx3.__initData = tmp23;
  const animatedReaction = require("module_1652").useAnimatedReaction(VoicePanelControlsDrawerTsx2, VoicePanelControlsDrawerTsx3);
  const items6 = [openTab];
  const items7 = [gestureSpecs];
  const callback = obj.useCallback((isVisible) => React6(VoicePanelVoiceControlsDefault, { isVisible, openTab }), items6);
  const callback1 = obj.useCallback(() => React6(VoicePanelControlsAppLauncherDefault, { gestureSpecs }), items7);
  const obj3 = { style: null, children: null };
  const items8 = [tmp4.drawer, animatedStyle];
  obj3.style = items8;
  const tmp10Result = require("module_1652");
  let tmp32 = null;
  if (tmp10Result2.isJankScreenReportingEnabled()) {
    const obj4 = { channelId, tab, wrapperSpecs, mode };
    tmp32 = closure_9(tmp(19595), obj4);
  }
  const items9 = [tmp32, , , ];
  let tmp36 = !tmp6;
  if (!tmp6) {
    tmp36 = "chat" === tab;
  }
  items9[1] = closure_9(closure_12, { shown: tmp36, renderContent: renderChat });
  let tmp37 = !tmp6;
  if (!tmp6) {
    tmp37 = "settings" === tab;
  }
  items9[2] = closure_9(closure_12, { shown: tmp37, renderContent: callback });
  let tmp38 = !tmp6;
  if (!tmp6) {
    tmp38 = "app_launcher" === tab;
  }
  items9[3] = closure_9(closure_12, { shown: tmp38, renderContent: callback1 });
  obj3.children = items9;
  return closure_10(_modDef1652.View, obj3);
});
export const LazyContentFreezer = memoResult;