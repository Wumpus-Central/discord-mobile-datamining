// === Module 16112: ToastContainer ===

// Module 16112 (ToastContainer)
import nativeDefault from "native" /* 575 */;
import _modDef1652 from "module_1652" /* 1652 */;
import TransitionGroup_TransitionGroup from "TransitionGroup/TransitionGroup" /* 5212 */;
import OverlayViewDefault from "OverlayView" /* 6100 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function AnimatedToast(cleanUp) {
  ({ position, state } = cleanUp);
  _require = state;
  cleanUp = cleanUp.cleanUp;
  ({ entry, enterDelayMs } = cleanUp);
  let tmp = c12();
  const sharedValue = require("module_1652").useSharedValue(0);
  obj = require("module_1652");
  const tmp2 = _require;
  const sharedValue1 = require("module_1652").useSharedValue(c8.HIDDEN);
  _slicedToArray = sharedValue1;
  obj2 = require("module_1652");
  const sharedValue2 = require("module_1652").useSharedValue(false);
  noop = sharedValue2;
  [first, c6] = noop.useState(false);
  const obj3 = require("module_1652");
  items = [c14, position, sharedValue, sharedValue2, sharedValue1, c8, _slicedToArray(noop.useState(enterDelayMs), 1)[0], require("module_1652").interpolate, c9, require("module_1652").withDelay, require("timing/timing").withTiming, c10, c13, state, require("TransitionGroup/TransitionGroup").TransitionStates, require("module_1705").scheduleOnRN, cleanUp];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  c5 = undefined;
  c6 = undefined;
  jsx = undefined;
  c8 = undefined;
  c9 = undefined;
  c10 = undefined;
  c11 = undefined;
  c12 = undefined;
  c13 = undefined;
  c14 = undefined;
  c15 = undefined;
  [tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25] = items;
  class ToastContainerNativeTsx2 {
    constructor() {
      if ("top" === closure_0) {
        tmp3 = closure_1;
        value = -closure_1.get();
      } else {
        tmp = closure_1;
        value = closure_1.get();
      }
      if (closure_2.get()) {
        obj3 = closure_3;
        tmp4 = closure_4;
        num = 0;
        num2 = 0;
        if (closure_3.get() === closure_4.VISIBLE) {
          num2 = closure_5;
        }
        tmp5 = closure_6;
        tmp6 = closure_7;
        items = [, ];
        items[0] = value;
        items[1] = 0;
        tmp7 = closure_6(obj3.get(), closure_7, items);
        obj1 = { opacity: null, transform: null };
        tmp8 = closure_8;
        tmp9 = closure_9;
        tmp10 = closure_10;
        obj1.opacity = closure_8(num2, closure_9(obj3.get(), closure_10));
        tmp11 = closure_11;
        items1 = [, , , , ];
        items1[0] = closure_11;
        tmp12 = closure_12;
        items1[1] = closure_12;
        tmp13 = closure_13;
        items1[2] = closure_13;
        tmp14 = closure_14;
        items1[3] = closure_14;
        tmp15 = closure_15;
        items1[4] = closure_15;
        closure_0 = undefined;
        closure_1 = undefined;
        closure_2 = undefined;
        closure_3 = undefined;
        tmp16 = items1;
        [tmp17, tmp18, tmp19, tmp20, tmp21] = items1;
        obj6 = { translateY: null };
        class ToastContainerNativeTsx1 {
          constructor(arg0) {
            tmp = true === cleanUp;
            if (tmp) {
              tmp2 = closure_0;
              tmp3 = closure_1;
              tmp = closure_0 === closure_1.YEETED;
            }
            if (tmp) {
              tmp4 = closure_2;
              tmp5 = closure_3;
              tmp6 = closure_2(closure_3);
            }
            return;
          }
        }
        items2 = [, , , ];
        items2[0] = tmp18;
        items2[1] = tmp19;
        items2[2] = tmp20;
        items2[3] = tmp21;
        ToastContainerNativeTsx1.__closure = items2;
        num3 = 3943080115640;
        ToastContainerNativeTsx1.__workletHash = 3943080115640;
        ToastContainerNativeTsx1.__initData = tmp17;
        str = "respect-motion-settings";
        tmp22 = tmp7;
        tmp23 = tmp10;
        tmp24 = ToastContainerNativeTsx1;
        obj6.translateY = tmp8(num2, tmp9(tmp7, tmp10, "respect-motion-settings", ToastContainerNativeTsx1));
        items3 = [];
        items3[0] = obj6;
        obj1.transform = items3;
        return obj1;
      } else {
        obj = { opacity: 0, transform: null };
        obj7 = { translateY: null };
        obj7.translateY = value;
        items4 = [];
        items4[0] = obj7;
        obj.transform = items4;
        return obj;
      }
    }
  }
  let items1 = [tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25];
  ToastContainerNativeTsx2.__closure = items1;
  ToastContainerNativeTsx2.__workletHash = 2210438006804;
  ToastContainerNativeTsx2.__initData = tmp9;
  let items2 = [sharedValue1, cleanUp, sharedValue2, first, state];
  const animatedStyle = require("module_1652").useAnimatedStyle(ToastContainerNativeTsx2);
  const effect = obj4.useEffect(() => {
    if (c0 === TransitionGroup_TransitionGroup.TransitionStates.YEETED) {
      if (_undefined4.get()) {
        const result = _undefined3.set(obj.HIDDEN);
      } else {
        _undefined();
      }
      return tmp10;
    } else if (c5) {
      const result1 = _undefined4.set(true);
      const result2 = _undefined3.set(obj.VISIBLE);
    }
  }, items2);
  let items3 = [sharedValue];
  const callback = obj4.useCallback((nativeEvent) => {
    const height = nativeEvent.nativeEvent.layout.height;
    const result = _undefined2.set(height);
    if (height > 0) {
      _undefined5(true);
    }
  }, items3);
  const obj6 = { onLayout: callback, style: null, children: null };
  let items4 = [tmp.toast, "top" === position ? tmp.toastTop : tmp.toastBottom, animatedStyle];
  obj6.style = items4;
  const merged = Object.assign(entry.toast);
  obj6.children = jsx(tmp2(16108).Toast, {});
  return jsx(_modDef1652.View, obj6);
}
function getItemKey(key) {
  return String(key.key);
}
get_ActivityIndicator = fn(17);
const StyleSheet = get_ActivityIndicator.StyleSheet;
const View = get_ActivityIndicator.View;
let jsx = fn(21).jsx;
let obj = { HIDDEN: 0, [0]: "HIDDEN", VISIBLE: 1, [1]: "VISIBLE" };
let items = [, ];
({ HIDDEN: arr[0], VISIBLE: arr[1] } = obj);
let obj2 = { duration: null, easing: null };
const ANIMATION_DURATION_MS = nativeDefault.modules.toast.ANIMATION_DURATION_MS;
obj2.duration = ANIMATION_DURATION_MS.resolve({});
obj2.easing = fn(1652).Easing.linear;
const QUEUE_ENTER_DELAY_MS = nativeDefault.modules.toast.QUEUE_ENTER_DELAY_MS;
let closure_11 = QUEUE_ENTER_DELAY_MS.resolve({});
const createStyles = fn(5141);
let obj4 = { container: null, bounds: null, toast: null, toastTop: null, toastBottom: null };
let obj5 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj5.paddingHorizontal = nativeDefault.space.PX_8;
obj4.container = obj5;
obj4.bounds = { flex: 1, alignItems: "center" };
obj4.toast = { position: "absolute", alignSelf: "center", maxWidth: "100%" };
obj4.toastTop = { top: 0 };
obj4.toastBottom = { bottom: 0 };
let closure_12 = createStyles.createStyles(obj4);
let closure_13 = { code: "(function ToastContainerNativeTsx1(finished){let[state,TransitionStates,scheduleOnRN,cleanUp]=this.__closure;if(finished===true&&state===TransitionStates.YEETED){scheduleOnRN(cleanUp);}})" };
let closure_14 = { code: "(function ToastContainerNativeTsx2(){let[position,toastHeight,hasEntered,animationState,AnimationState,enterDelayMs,interpolate,ANIMATION_STATE_INPUT,withDelay,withTiming,TIMING,_worklet_3943080115640_init_data,state,TransitionStates,scheduleOnRN,cleanUp]=this.__closure;const offscreenTranslateY=position==='top'?-toastHeight.get():toastHeight.get();if(!hasEntered.get()){return{opacity:0,transform:[{translateY:offscreenTranslateY}]};}const isEntering=animationState.get()===AnimationState.VISIBLE;const delayMs=isEntering?enterDelayMs:0;const translateY=interpolate(animationState.get(),ANIMATION_STATE_INPUT,[offscreenTranslateY,0]);return{opacity:withDelay(delayMs,withTiming(animationState.get(),TIMING)),transform:[{translateY:withDelay(delayMs,withTiming(translateY,TIMING,'respect-motion-settings',function ToastContainerNativeTsx1Factory([_worklet_3943080115640_init_data,state,TransitionStates,scheduleOnRN,cleanUp]){const ToastContainerNativeTsx1=function(finished){if(finished===true&&state===TransitionStates.YEETED){scheduleOnRN(cleanUp);}};ToastContainerNativeTsx1.__closure=[state,TransitionStates,scheduleOnRN,cleanUp];ToastContainerNativeTsx1.__workletHash=3943080115640;ToastContainerNativeTsx1.__initData=_worklet_3943080115640_init_data;return ToastContainerNativeTsx1;}([_worklet_3943080115640_init_data,state,TransitionStates,scheduleOnRN,cleanUp])))}]};})" };
const size = fn(2);
let result = size.fileFinishedImporting("design/mana/components/Toast/ToastContainer.native.tsx");

export function ToastContainer(surface) {
  let str = surface.surface;
  if (str === undefined) {
    str = "app";
  }
  let flag = surface.overlay;
  if (flag === undefined) {
    flag = false;
  }
  const offset = surface.offset;
  let entry;
  let num2;
  let memo;
  let first;
  const tmp = closure_12();
  const container = tmp;
  const toastContainer = flag(entry[11]).useToastContainer(str);
  entry = toastContainer.entry;
  const position = toastContainer.position;
  let num;
  if (offset != null) {
    num = offset.top;
  }
  if (num == null) {
    num = 0;
  }
  num2 = undefined;
  if (offset != null) {
    num2 = offset.bottom;
  }
  if (num2 == null) {
    num2 = 0;
  }
  items = [num2, num, position];
  memo = num.useMemo(() => {
    if ("top" === position) {
      obj2 = { paddingTop: nativeDefault.space.PX_8 + num };
      obj = obj2;
    } else {
      obj = { paddingBottom: nativeDefault.space.PX_8 + num2 };
    }
    return obj;
  }, items);
  let items1 = [entry];
  const memo1 = num.useMemo(() => {
    if (null != entry) {
      items = [tmp];
      let items1 = items;
    } else {
      items1 = [];
    }
    return items1;
  }, items1);
  obj = flag(entry[11]);
  let tmp2 = flag;
  const tmp3 = entry;
  [tmp8, tmp9] = position(num.useState(null), 2);
  const tmp10 = position(num.useState(null), 2);
  first = tmp10[0];
  let key;
  if (entry != null) {
    key = entry.key;
  }
  if (key == null) {
    key = null;
  }
  if (key !== tmp8) {
    let tmp13 = null;
    if (null != key) {
      tmp13 = null;
      if (null != tmp8) {
        tmp13 = key;
      }
    }
    tmp10[1](tmp13);
    tmp9(key);
  }
  const items2 = [first, position];
  const items3 = [memo, flag, tmp];
  const callback = obj2.useCallback((key, entry, state, cleanUp) => {
    obj = { entry, position, state, enterDelayMs: null, cleanUp: null };
    num = 0;
    if (entry.key === first) {
      num = closure_11;
    }
    obj.enterDelayMs = num;
    obj.cleanUp = cleanUp;
    return <AnimatedToast key={key} entry={entry} position={position} state={state} enterDelayMs={null} cleanUp={null} />;
  }, items2);
  const callback1 = obj2.useCallback((children) => {
    obj = { accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", pointerEvents: "none", style: null, children: <View style={closure_1.bounds}>{children}</View> };
    items = [container.container, memo];
    obj.style = items;
    const tmp2 = <View accessibilityElementsHidden importantForAccessibility="no-hide-descendants" pointerEvents="none" style={null}><View style={closure_1.bounds}>{children}</View></View>;
    let tmpResult = tmp2;
    if (flag) {
      const obj3 = { pointerEvents: "box-none", style: StyleSheet.absoluteFill, children: tmp2 };
      tmpResult = jsx(OverlayViewDefault, { pointerEvents: "box-none", style: StyleSheet.absoluteFill, children: tmp2 });
    }
    return tmpResult;
  }, items3);
  return first(tmp2(tmp3[8]).TransitionGroup, { items: memo1, renderItem: callback, getItemKey, wrapChildren: callback1 });
}