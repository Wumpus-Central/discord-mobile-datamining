// === Module 18200: VoicePanelDockSlot ===

// Module 18200 (VoicePanelDockSlot)
import _mod1654 from "module_1654" /* 1654 */;
import useBaseAppContainerDimensionsDefault from "useBaseAppContainerDimensions" /* 5224 */;
import spring_spring from "spring/spring" /* 5644 */;
import useStateFromSharedValueDefault from "useStateFromSharedValue" /* 8620 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11789 */;
import MainTabsNavigatorPanelContextDefault from "MainTabsNavigatorPanelContext" /* 11815 */;
import VoicePanelSheetMorph from "VoicePanelSheetMorph" /* 11820 */;
import VoicePanelDockGlow from "VoicePanelDockGlow" /* 18201 */;
import useVoicePanelDockMicLiveDefault from "useVoicePanelDockMicLive" /* 18258 */;
import noop from "module_19" /* 19 */;
import QuestDockStore from "QuestDockStore" /* 16685 */;

const _modDef1654 = _mod1654;

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
    items = [closure_13, getSlotDockShouldMount, dockMinimizeProgress, dockTouched2, wrapperOffset];
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
    const items2 = [closure_14, sharedValue];
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
    const animatedReaction = _mod1654.useAnimatedReaction(VoicePanelDockSlotTsx2, VoicePanelDockSlotTsx3);
    const tmp26 = tmp(8620)(sharedValue);
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
    const tmp4Result = _mod1654;
    const items7 = [closure_15, isDockInLayout];
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
    const animatedStyle = _mod1654.useAnimatedStyle(VoicePanelDockSlotTsx4);
    _mod1654;
    const items9 = [closure_16, dockTouched];
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
      const items11 = [React5(VoicePanelDockGlow.VoicePanelDockGlow, obj4), , ];
      const obj5 = { style: null, pointerEvents: "box-none", onLayout: null, children: null };
      const items12 = [StyleSheet.absoluteFill, animatedStyle];
      obj5.style = items12;
      obj5.onLayout = callback;
      obj5.children = React5(tmp(18203), { isInSlot: true });
      items11[1] = React5(tmp(1654).View, obj5);
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
      obj6.children = React5(VoicePanelDockGlow.VoicePanelDockBottomLine, obj7);
      items11[2] = React5(tmp(1654).View, obj6);
      obj3.children = items11;
      tmp40 = refs(React6, obj3);
    }
    return tmp40;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
  obj2 = _mod1654;
}
function VoicePanelDockSlotContent(width) {
  ({ dockState, isQuestBarExpanded } = width);
  const dockSlotWidth = dockState.dockSlotWidth;
  const isDockInLayout = dockState.isDockInLayout;
  c3 = undefined;
  c4 = undefined;
  ({ channelId, dockEntryProgress, dockHeight, dockTouched, sheetExitProgress, safeArea, wrapperDimensions } = dockState);
  const sharedValue = _mod1654.useSharedValue(0);
  c1 = sharedValue;
  const sharedValue1 = _mod1654.useSharedValue(0);
  c2 = sharedValue1;
  items = [closure_18, safeArea];
  c0 = undefined;
  [tmp5, tmp6] = items;
  class VoicePanelDockSlotTsx6 {
    constructor() {
      obj = {};
      merged = Object.assign(closure_0.get());
      obj.left = 0;
      obj.right = 0;
      return obj;
    }
  }
  const items1 = [tmp6];
  VoicePanelDockSlotTsx6.__closure = items1;
  VoicePanelDockSlotTsx6.__workletHash = 8625682694130;
  VoicePanelDockSlotTsx6.__initData = tmp5;
  const derivedValue = _mod1654.useDerivedValue(VoicePanelDockSlotTsx6);
  c3 = derivedValue;
  const items2 = [closure_19, wrapperDimensions, sharedValue];
  c0 = undefined;
  c1 = undefined;
  [tmp8, tmp9, tmp10] = items2;
  class VoicePanelDockSlotTsx7 {
    constructor() {
      obj = {};
      merged = Object.assign(closure_0.get());
      obj.drawerX = 0;
      obj.drawerWidth = closure_1.get();
      return obj;
    }
  }
  const items3 = [tmp9, tmp10];
  VoicePanelDockSlotTsx7.__closure = items3;
  VoicePanelDockSlotTsx7.__workletHash = 16889293167603;
  VoicePanelDockSlotTsx7.__initData = tmp8;
  const derivedValue1 = _mod1654.useDerivedValue(VoicePanelDockSlotTsx7);
  c4 = derivedValue1;
  const items4 = [dockState, derivedValue1, sharedValue1, derivedValue, sharedValue];
  const memo = noop.useMemo(() => {
    const obj = {};
    const merged = Object.assign(c0);
    obj.safeArea = safeArea;
    obj.wrapperDimensions = wrapperDimensions;
    obj.dockRestLeft = _undefined3;
    obj.dockRestWidth = _undefined2;
    obj.dockSheetLeft = _undefined3;
    obj.dockSheetWidth = _undefined2;
    return obj;
  }, items4);
  const items5 = [dockSlotWidth, sharedValue];
  const tmpResult = _mod1654;
  const callback = noop.useCallback((nativeEvent) => {
    const layout = nativeEvent.nativeEvent.layout;
    const result = _undefined2.set(layout.width);
    const result1 = _undefined.set(layout.width);
  }, items5);
  const tmp14 = useVoicePanelDockMicLiveDefault(channelId);
  const items6 = [closure_20, spring_spring.withSpring, isQuestBarExpanded, VoicePanelSheetMorph.DOCK_SPACE_SPRING_CONFIG];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp16, tmp17, tmp18, tmp19] = items6;
  class VoicePanelDockSlotTsx8 {
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
  VoicePanelDockSlotTsx8.__closure = items7;
  VoicePanelDockSlotTsx8.__workletHash = 6150077601919;
  VoicePanelDockSlotTsx8.__initData = tmp16;
  const derivedValue2 = _mod1654.useDerivedValue(VoicePanelDockSlotTsx8);
  const tmp21 = useStateFromSharedValueDefault(isDockInLayout) && !isQuestBarExpanded;
  const tmpResult3 = _mod1654;
  const items8 = [closure_21, dockHeight, sheetExitProgress, derivedValue2, dockEntryProgress, isQuestBarExpanded, isDockInLayout, dockTouched];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  [tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29] = items8;
  class VoicePanelDockSlotTsx9 {
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
  VoicePanelDockSlotTsx9.__closure = items9;
  VoicePanelDockSlotTsx9.__workletHash = 11615013865776;
  VoicePanelDockSlotTsx9.__initData = tmp22;
  const animatedStyle = _mod1654.useAnimatedStyle(VoicePanelDockSlotTsx9);
  const obj4 = { value: memo, children: null };
  const obj5 = { style: null, onLayout: callback, accessibilityElementsHidden: !tmp21, importantForAccessibility: null, children: null };
  const items10 = [slot.slot, { width: width.width }, animatedStyle];
  obj5.style = items10;
  let str = "no-hide-descendants";
  if (tmp21) {
    str = "auto";
  }
  obj5.importantForAccessibility = str;
  obj5.children = React5(VoicePanelDockSlotDock, { micLive: tmp14 });
  obj4.children = React5(_modDef1654.View, obj5);
  return React5(VoicePanelStateContextDefault.Provider, obj4);
}
get_ActivityIndicator = fn(17);
const StyleSheet = get_ActivityIndicator.StyleSheet;
const View = get_ActivityIndicator.View;
const useVoicePanelDockState = fn(13419).useVoicePanelDockState;
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9, jsxs: closure_10 } = jsxProd);
const slot = StyleSheet.create({ slot: { position: "absolute", left: 0, bottom: 0 } });
let items = [{ code: "(function getSlotDockShouldMount_VoicePanelDockSlotTsx1(progress,isTouched,{gestureActive:gestureActive}){let[SLOT_DOCK_MOUNT_PROGRESS,SHEET_MORPH_PHYSICS]=this.__closure;if(isTouched||progress>=SLOT_DOCK_MOUNT_PROGRESS)return true;if(!gestureActive&&progress<=SHEET_MORPH_PHYSICS.restDisplacementThreshold)return false;return null;})" }, 0.5, fn(11820).SHEET_MORPH_PHYSICS];
let closure_129_0;
let closure_129_1;
[tmp4, tmp5, tmp6] = items;
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
let items1 = [tmp5, tmp6];
getSlotDockShouldMount.__closure = items1;
getSlotDockShouldMount.__workletHash = 1131182004926;
getSlotDockShouldMount.__initData = tmp4;
let closure_13 = { code: "(function VoicePanelDockSlotTsx2(){let[getSlotDockShouldMount,dockMinimizeProgress,dockTouched,wrapperOffset]=this.__closure;return getSlotDockShouldMount(dockMinimizeProgress.get(),dockTouched.get(),wrapperOffset.get());})" };
let closure_14 = { code: "(function VoicePanelDockSlotTsx3(next){let[shouldMount]=this.__closure;if(next!=null&&next!==shouldMount.get()){shouldMount.set(next);}})" };
let closure_15 = { code: "(function VoicePanelDockSlotTsx4(){let[isDockInLayout]=this.__closure;return{opacity:isDockInLayout.get()?1:0};})" };
let closure_16 = { code: "(function VoicePanelDockSlotTsx5(){let[dockTouched]=this.__closure;return{opacity:dockTouched.get()?0:1};})" };
let closure_18 = { code: "(function VoicePanelDockSlotTsx6(){let[safeArea]=this.__closure;return{...safeArea.get(),left:0,right:0};})" };
let closure_19 = { code: "(function VoicePanelDockSlotTsx7(){let[wrapperDimensions,slotWidth]=this.__closure;return{...wrapperDimensions.get(),drawerX:0,drawerWidth:slotWidth.get()};})" };
let closure_20 = { code: "(function VoicePanelDockSlotTsx8(){let[withSpring,isQuestBarExpanded,DOCK_SPACE_SPRING_CONFIG]=this.__closure;return withSpring(isQuestBarExpanded?1:0,DOCK_SPACE_SPRING_CONFIG);})" };
let closure_21 = { code: "(function VoicePanelDockSlotTsx9(){let[dockHeight,sheetExitProgress,questBarHideProgress,dockEntryProgress,isQuestBarExpanded,isDockInLayout,dockTouched]=this.__closure;const height=dockHeight.get();const isLeaving=sheetExitProgress.get()>0;return{height:height,opacity:1-questBarHideProgress.get(),transform:[{translateY:(1-dockEntryProgress.get()+sheetExitProgress.get())*height}],pointerEvents:!isLeaving&&!isQuestBarExpanded&&(isDockInLayout.get()||dockTouched.get())?'box-none':'none'};})" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDockSlot.tsx");

export default noop.memo(function VoicePanelDockSlot(placement) {
  placement = placement.placement;
  const isMobileRTCV2Enabled = placement(12970).useIsMobileRTCV2Enabled("VoicePanelDockSlot");
  const tmp2 = useVoicePanelDockState();
  const obj = placement(12970);
  const drawerWidth = placement(11992).useDrawerWidth({ whileSliding: "wider" });
  let width = useBaseAppContainerDimensionsDefault().width;
  placement(504);
  [][0] = placement;
  let tmp7Result2 = null;
  if (isMobileRTCV2Enabled) {
    const obj3 = { style: StyleSheet.absoluteFill, pointerEvents: "box-none", collapsable: false, children: null };
    let tmp7Result = null;
    if (null != tmp2) {
      tmp7Result = null;
      if (noop.useContext(MainTabsNavigatorPanelContextDefault).isNavigatorPanelsBesideChannelList === "channel-list" === placement) {
        const obj4 = { dockState: tmp2, width: null, isQuestBarExpanded: null };
        if (tmp11) {
          width = drawerWidth;
        }
        obj4.width = width;
        obj4.isQuestBarExpanded = tmp5;
        tmp7Result = closure_8(VoicePanelDockSlotContent, obj4, tmp2.channelId);
      }
    }
    obj3.children = tmp7Result;
    tmp7Result2 = closure_8(View, obj3);
  }
  return tmp7Result2;
});