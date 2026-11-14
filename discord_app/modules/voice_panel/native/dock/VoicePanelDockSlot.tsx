// === Module 19177: VoicePanelDockSlot ===

// Module 19177 (VoicePanelDockSlot)
import _mod1655 from "module_1655" /* 1655 */;
import _mod1708 from "module_1708" /* 1708 */;
import useBaseAppContainerDimensionsDefault from "useBaseAppContainerDimensions" /* 5497 */;
import useStateFromSharedValueDefault from "useStateFromSharedValue" /* 11253 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11984 */;
import MainTabsNavigatorPanelContextDefault from "MainTabsNavigatorPanelContext" /* 12011 */;
import VoicePanelDockGlow from "VoicePanelDockGlow" /* 19178 */;
import useVoicePanelDockMicLiveDefault from "useVoicePanelDockMicLive" /* 19232 */;
import noop from "module_19" /* 19 */;
import QuestDockStore from "QuestDockStore" /* 17696 */;

const _modDef1655 = _mod1655;

require = fn;
function VoicePanelDockSlotDock(micLive) {
  micLive = micLive.micLive;
  importDefault = undefined;
  const context = noop.useContext(VoicePanelStateContextDefault);
  const isDockSlotEmpty = context.isDockSlotEmpty;
  c0 = isDockSlotEmpty;
  ({ dockMinimizeProgress, dockTouched: dockTouched2, wrapperOffset } = context);
  ({ dockTouched, isDockInLayout } = context);
  value = dockMinimizeProgress.get();
  let value2 = dockTouched2.get();
  if (typeof getSlotDockShouldMount === "function") {
    const gestureActive = wrapperOffset.get().gestureActive;
    if (!value2) {
      value2 = value >= c0;
    }
    let flag = value2;
    if (!flag) {
      let tmp9 = !gestureActive;
      if (!gestureActive) {
        tmp9 = value <= importDefault.restDisplacementThreshold;
      }
      let tmp11 = !tmp9;
      if (!tmp9) {
        tmp11 = null;
      }
      flag = tmp11;
    }
    if (flag == null) {
      flag = true;
    }
    const sharedValue = obj2.useSharedValue(flag);
    items = [closure_12, getSlotDockShouldMount, dockMinimizeProgress, dockTouched2, wrapperOffset];
    c0 = undefined;
    importDefault = undefined;
    c2 = undefined;
    c3 = undefined;
    [tmp16, tmp17, tmp18, tmp19, tmp20] = items;
    class VoicePanelDockSlotTsx2 {
      constructor() {
        value = closure_1.get();
        value1 = closure_2.get();
        return closure_0(value, value1, closure_3.get());
      }
    }
    const items1 = [tmp17, tmp18, tmp19, tmp20];
    VoicePanelDockSlotTsx2.__closure = items1;
    VoicePanelDockSlotTsx2.__workletHash = 10243184957928;
    VoicePanelDockSlotTsx2.__initData = tmp16;
    const items2 = [closure_13, sharedValue];
    c0 = undefined;
    [tmp23, tmp24] = items2;
    class VoicePanelDockSlotTsx3 {
      constructor(arg0) {
        tmp = null != micLive;
        if (tmp) {
          tmp2 = closure_0;
          tmp = micLive !== closure_0.get();
        }
        if (tmp) {
          tmp3 = closure_0;
          result = closure_0.set(micLive);
        }
        return;
      }
    }
    const items3 = [tmp24];
    VoicePanelDockSlotTsx3.__closure = items3;
    VoicePanelDockSlotTsx3.__workletHash = 4300785804393;
    VoicePanelDockSlotTsx3.__initData = tmp23;
    const animatedReaction = _mod1655.useAnimatedReaction(VoicePanelDockSlotTsx2, VoicePanelDockSlotTsx3);
    const tmp26 = tmp(11253)(sharedValue);
    importDefault = tmp26;
    const items4 = [isDockSlotEmpty, tmp26];
    const effect = noop.useEffect(() => {
      if (!closure_1) {
        const result = _undefined.set(true);
      }
    }, items4);
    const items5 = [isDockSlotEmpty];
    const effect1 = noop.useEffect(() => () => _undefined.set(false), items5);
    const items6 = [isDockSlotEmpty];
    const callback = noop.useCallback(() => _undefined.set(false), items6);
    const tmp4Result = _mod1655;
    const items7 = [closure_14, isDockInLayout];
    c0 = undefined;
    [tmp32, tmp33] = items7;
    class VoicePanelDockSlotTsx4 {
      constructor() {
        opacity = 0;
        if (closure_0.get()) {
          opacity = 1;
        }
        return { opacity };
      }
    }
    const items8 = [tmp33];
    VoicePanelDockSlotTsx4.__closure = items8;
    VoicePanelDockSlotTsx4.__workletHash = 3748852719938;
    VoicePanelDockSlotTsx4.__initData = tmp32;
    const animatedStyle = _mod1655.useAnimatedStyle(VoicePanelDockSlotTsx4);
    _mod1655;
    const items9 = [closure_15, dockTouched];
    c0 = undefined;
    [tmp38, tmp39] = items9;
    class VoicePanelDockSlotTsx5 {
      constructor() {
        opacity = 1;
        if (closure_0.get()) {
          opacity = 0;
        }
        return { opacity };
      }
    }
    const items10 = [tmp39];
    VoicePanelDockSlotTsx5.__closure = items10;
    VoicePanelDockSlotTsx5.__workletHash = 265274343811;
    VoicePanelDockSlotTsx5.__initData = tmp38;
    let tmp40 = null;
    if (tmp26) {
      const obj3 = { children: null };
      const obj4 = { micLive };
      const items11 = [metroImportDefault(VoicePanelDockGlow.VoicePanelDockGlow, obj4), , ];
      const obj5 = { style: null, pointerEvents: "box-none", onLayout: null, children: null };
      const items12 = [StyleSheet.absoluteFill, animatedStyle];
      obj5.style = items12;
      obj5.onLayout = callback;
      obj5.children = metroImportDefault(tmp(19180), { isInSlot: true });
      items11[1] = metroImportDefault(tmp(1655).View, obj5);
      const obj6 = { style: null, pointerEvents: "none", children: null };
      const items13 = [StyleSheet.absoluteFill, ];
      class VoicePanelDockSlotTsx2 {
        constructor() {
          value = closure_1.get();
          value1 = closure_2.get();
          return closure_0(value, value1, closure_3.get());
        }
      }
      obj6.style = items13;
      const obj7 = { micLive };
      obj6.children = metroImportDefault(VoicePanelDockGlow.VoicePanelDockBottomLine, obj7);
      items11[2] = metroImportDefault(tmp(1655).View, obj6);
      obj3.children = items11;
      tmp40 = React6(React5, obj3);
    }
    return tmp40;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
  obj2 = _mod1655;
}
function VoicePanelDockSlotContent(width) {
  ({ dockState, isQuestBarExpanded } = width);
  const dockRestWidth = dockState.dockRestWidth;
  ({ isDockInLayout, wrapperDimensions } = dockState);
  _require = dockState;
  dependencyMap = undefined;
  noop = undefined;
  ({ channelId, dockEntryProgress, dockHeight, dockTouched, sheetExitProgress, safeArea, wrapperDimensions: wrapperDimensions2 } = dockState);
  const sharedValue = require("module_1655").useSharedValue(0);
  importDefault = sharedValue;
  let obj = require("module_1655");
  items = [closure_17, safeArea];
  _require = undefined;
  [tmp4, tmp5] = items;
  class VoicePanelDockSlotTsx6 {
    constructor() {
      obj = {};
      merged = Object.assign(closure_0.get());
      obj.left = 0;
      obj.right = 0;
      return obj;
    }
  }
  let items1 = [tmp5];
  VoicePanelDockSlotTsx6.__closure = items1;
  VoicePanelDockSlotTsx6.__workletHash = 8625682694130;
  VoicePanelDockSlotTsx6.__initData = tmp4;
  const derivedValue = require("module_1655").useDerivedValue(VoicePanelDockSlotTsx6);
  dependencyMap = derivedValue;
  let obj2 = require("module_1655");
  const items2 = [closure_18, wrapperDimensions2, sharedValue];
  _require = undefined;
  importDefault = undefined;
  [tmp7, tmp8, tmp9] = items2;
  class VoicePanelDockSlotTsx7 {
    constructor() {
      obj = {};
      merged = Object.assign(closure_0.get());
      obj.drawerX = 0;
      obj.drawerWidth = closure_1.get();
      return obj;
    }
  }
  const items3 = [tmp8, tmp9];
  VoicePanelDockSlotTsx7.__closure = items3;
  VoicePanelDockSlotTsx7.__workletHash = 16889293167603;
  VoicePanelDockSlotTsx7.__initData = tmp7;
  const derivedValue1 = require("module_1655").useDerivedValue(VoicePanelDockSlotTsx7);
  noop = derivedValue1;
  const items4 = [dockState, derivedValue1, derivedValue, sharedValue];
  const memo = noop.useMemo(() => {
    const obj = {};
    const merged = Object.assign(c0);
    obj.safeArea = safeArea;
    obj.wrapperDimensions = wrapperDimensions;
    obj.dockRestWidth = _undefined2;
    obj.dockSheetWidth = _undefined2;
    return obj;
  }, items4);
  const tmpResult = require("module_1655");
  const tmp13 = useVoicePanelDockMicLiveDefault(channelId);
  const animatedRef = require("module_1655").useAnimatedRef();
  noop = animatedRef;
  const items5 = [dockRestWidth, animatedRef, sharedValue, wrapperDimensions];
  const callback = noop.useCallback((nativeEvent) => {
    let result = safeArea.set(nativeEvent.nativeEvent.layout.width);
    items = [closure_19, _mod1655.measure, c3, c0, c1];
    c0 = undefined;
    c1 = undefined;
    safeArea = undefined;
    c3 = undefined;
    [tmp2, tmp3, tmp4, tmp5, tmp6] = items;
    class VoicePanelDockSlotTsx8 {
      constructor() {
        tmp = closure_0(closure_1);
        if (null != tmp) {
          tmp2 = closure_2;
          tmp3 = globalThis;
          _Math = Math;
          tmp5 = closure_3;
          sum = tmp.pageX + tmp.width;
          result = closure_2.set(Math.min(sum, closure_3.get().drawerWidth));
        }
        return;
      }
    }
    const items1 = [tmp3, tmp4, tmp5, tmp6];
    VoicePanelDockSlotTsx8.__closure = items1;
    VoicePanelDockSlotTsx8.__workletHash = 2127528815394;
    VoicePanelDockSlotTsx8.__initData = tmp2;
    _mod1708.scheduleOnUI(VoicePanelDockSlotTsx8);
  }, items5);
  const tmpResult4 = require("module_1655");
  const items6 = [closure_20, require("spring/spring").withSpring, isQuestBarExpanded, require("VoicePanelSheetMorph").DOCK_SPACE_SPRING_CONFIG];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp16, tmp17, tmp18, tmp19] = items6;
  class VoicePanelDockSlotTsx9 {
    constructor() {
      num = 0;
      tmp = closure_0;
      if (closure_1) {
        num = 1;
      }
      return tmp(num, closure_2);
    }
  }
  const items7 = [tmp17, tmp18, tmp19];
  VoicePanelDockSlotTsx9.__closure = items7;
  VoicePanelDockSlotTsx9.__workletHash = 6885308251294;
  VoicePanelDockSlotTsx9.__initData = tmp16;
  const derivedValue2 = require("module_1655").useDerivedValue(VoicePanelDockSlotTsx9);
  const tmp21 = useStateFromSharedValueDefault(isDockInLayout) && !isQuestBarExpanded;
  const tmpResult5 = require("module_1655");
  const items8 = [closure_21, dockHeight, sheetExitProgress, derivedValue2, dockEntryProgress, isQuestBarExpanded, isDockInLayout, dockTouched];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  [tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29] = items8;
  class VoicePanelDockSlotTsx10 {
    constructor() {
      value = closure_0.get();
      obj = { height: value, opacity: null, transform: null, pointerEvents: null };
      tmp2 = closure_1.get() > 0;
      obj.opacity = 1 - closure_2.get();
      obj1 = { translateY: null };
      diff = 1 - closure_3.get();
      obj1.translateY = (diff + closure_1.get()) * value;
      items = [];
      items[0] = obj1;
      obj.transform = items;
      if (!tmp2) {
        tmp4 = closure_4;
        if (!closure_4) {
          tmp5 = closure_5;
          str = "box-none";
          str2 = "box-none";
          if (!closure_5.get()) {
            tmp6 = closure_6;
            str2 = "box-none";
          }
        }
        obj.pointerEvents = str2;
        return obj;
      }
      str2 = "none";
      return;
    }
  }
  const items9 = [tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29];
  VoicePanelDockSlotTsx10.__closure = items9;
  VoicePanelDockSlotTsx10.__workletHash = 12274507649960;
  VoicePanelDockSlotTsx10.__initData = tmp22;
  const animatedStyle = require("module_1655").useAnimatedStyle(VoicePanelDockSlotTsx10);
  const obj3 = { value: memo, children: null };
  const obj4 = { ref: animatedRef, style: null, onLayout: callback, accessibilityElementsHidden: !tmp21, importantForAccessibility: null, children: null };
  const items10 = [slot.slot, { width: width.width }, animatedStyle];
  obj4.style = items10;
  let str = "no-hide-descendants";
  if (tmp21) {
    str = "auto";
  }
  obj4.importantForAccessibility = str;
  obj4.children = closure_7(VoicePanelDockSlotDock, { micLive: tmp13 });
  obj3.children = closure_7(_modDef1655.View, obj4);
  return closure_7(VoicePanelStateContextDefault.Provider, obj3);
}
const StyleSheet = fn(17).StyleSheet;
const useVoicePanelDockState = fn(14855).useVoicePanelDockState;
const jsxProd = fn(21);
({ jsx: metroImportDefault, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const slot = StyleSheet.create({ slot: { position: "absolute", left: 0, bottom: 0 } });
let items = [{ code: "(function getSlotDockShouldMount_VoicePanelDockSlotTsx1(progress,isTouched,{gestureActive:gestureActive}){let[SLOT_DOCK_MOUNT_PROGRESS,SHEET_MORPH_PHYSICS]=this.__closure;if(isTouched||progress>=SLOT_DOCK_MOUNT_PROGRESS)return true;if(!gestureActive&&progress<=SHEET_MORPH_PHYSICS.restDisplacementThreshold)return false;return null;})" }, 0.5, fn(12017).SHEET_MORPH_PHYSICS];
let closure_129_0;
let closure_129_1;
[tmp3, tmp4, tmp5] = items;
function getSlotDockShouldMount(arg0, arg1, gestureActive) {
  let tmp = arg1;
  gestureActive = gestureActive.gestureActive;
  if (!arg1) {
    tmp = arg0 >= require;
  }
  let tmp3 = tmp;
  if (!tmp3) {
    let tmp4 = !gestureActive;
    if (!gestureActive) {
      tmp4 = arg0 <= importDefault.restDisplacementThreshold;
    }
    let tmp6 = !tmp4;
    if (!tmp4) {
      tmp6 = null;
    }
    tmp3 = tmp6;
  }
  return tmp3;
}
let items1 = [tmp4, tmp5];
getSlotDockShouldMount.__closure = items1;
getSlotDockShouldMount.__workletHash = 1131182004926;
getSlotDockShouldMount.__initData = tmp3;
let closure_12 = { code: "(function VoicePanelDockSlotTsx2(){let[getSlotDockShouldMount,dockMinimizeProgress,dockTouched,wrapperOffset]=this.__closure;return getSlotDockShouldMount(dockMinimizeProgress.get(),dockTouched.get(),wrapperOffset.get());})" };
let closure_13 = { code: "(function VoicePanelDockSlotTsx3(next){let[shouldMount]=this.__closure;if(next!=null&&next!==shouldMount.get()){shouldMount.set(next);}})" };
let closure_14 = { code: "(function VoicePanelDockSlotTsx4(){let[isDockInLayout]=this.__closure;return{opacity:isDockInLayout.get()?1:0};})" };
let closure_15 = { code: "(function VoicePanelDockSlotTsx5(){let[dockTouched]=this.__closure;return{opacity:dockTouched.get()?0:1};})" };
let closure_17 = { code: "(function VoicePanelDockSlotTsx6(){let[safeArea]=this.__closure;return{...safeArea.get(),left:0,right:0};})" };
let closure_18 = { code: "(function VoicePanelDockSlotTsx7(){let[wrapperDimensions,slotWidth]=this.__closure;return{...wrapperDimensions.get(),drawerX:0,drawerWidth:slotWidth.get()};})" };
let closure_19 = { code: "(function VoicePanelDockSlotTsx8(){let[measure,slotRef,dockRestWidth,wrapperDimensions]=this.__closure;const frame=measure(slotRef);if(frame==null)return;dockRestWidth.set(Math.min(frame.pageX+frame.width,wrapperDimensions.get().drawerWidth));})" };
let closure_20 = { code: "(function VoicePanelDockSlotTsx9(){let[withSpring,isQuestBarExpanded,DOCK_SPACE_SPRING_CONFIG]=this.__closure;return withSpring(isQuestBarExpanded?1:0,DOCK_SPACE_SPRING_CONFIG);})" };
let closure_21 = { code: "(function VoicePanelDockSlotTsx10(){let[dockHeight,sheetExitProgress,questBarHideProgress,dockEntryProgress,isQuestBarExpanded,isDockInLayout,dockTouched]=this.__closure;const height=dockHeight.get();const isLeaving=sheetExitProgress.get()>0;return{height:height,opacity:1-questBarHideProgress.get(),transform:[{translateY:(1-dockEntryProgress.get()+sheetExitProgress.get())*height}],pointerEvents:!isLeaving&&!isQuestBarExpanded&&(isDockInLayout.get()||dockTouched.get())?'box-none':'none'};})" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDockSlot.tsx");

export default noop.memo(function VoicePanelDockSlot(placement) {
  placement = placement.placement;
  const isMobileRTCV2Enabled = placement(14573).useIsMobileRTCV2Enabled("VoicePanelDockSlot");
  const tmp4 = useVoicePanelDockState();
  const obj = placement(14573);
  const tmp = placement;
  const drawerWidth = placement(12423).useDrawerWidth({ whileSliding: "wider" });
  let width = useBaseAppContainerDimensionsDefault().width;
  const isNavigatorPanelsBesideChannelList = noop.useContext(MainTabsNavigatorPanelContextDefault).isNavigatorPanelsBesideChannelList;
  tmp(504);
  [][0] = placement;
  let tmp11Result = null;
  if (isMobileRTCV2Enabled) {
    tmp11Result = null;
    if (null != tmp4) {
      tmp11Result = null;
      if (tmp6 === "channel-list" === placement) {
        const obj3 = { dockState: tmp4, width: null, isQuestBarExpanded: null };
        if (tmp10) {
          width = drawerWidth;
        }
        obj3.width = width;
        obj3.isQuestBarExpanded = tmp8;
        tmp11Result = closure_7(VoicePanelDockSlotContent, obj3, tmp4.channelId);
      }
    }
  }
  return tmp11Result;
});