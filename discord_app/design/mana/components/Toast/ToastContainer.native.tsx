// discord_app/design/mana/components/Toast/ToastContainer.native.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import TransitionGroup_TransitionGroup from "../../../../../discord_common/js/packages/design/components/TransitionGroup/TransitionGroup.tsx";
import ReanimatedRexport from "../../../../modules/reanimated/ReanimatedRexport.tsx";
import timing from "../../../animation/reanimated/timing/timing.tsx";
import OverlayViewDefault from "../../../void/OverlayView/native/OverlayView.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function AnimatedToast(position) {
  position = position.position;
  const state = position.state;
  const cleanUp = position.cleanUp;
  let first1;
  ({ entry, enterDelayMs } = position);
  let tmp = closure_12();
  const sharedValue = position(cleanUp[5]).useSharedValue(0);
  obj2 = position(cleanUp[5]);
  const sharedValue1 = obj2.useSharedValue(first1.HIDDEN);
  obj = position(cleanUp[5]);
  const tmp2 = position;
  const tmp3 = cleanUp;
  const sharedValue2 = position(cleanUp[5]).useSharedValue(false);
  const tmp7 = sharedValue(sharedValue1.useState(false), 2);
  const first = tmp7[0];
  jsx = tmp7[1];
  first1 = sharedValue(sharedValue1.useState(enterDelayMs), 1)[0];
  const obj3 = position(cleanUp[5]);
  let fn = function f() {
    if ("top" === position) {
      value = -sharedValue.get();
    } else {
      value = sharedValue.get();
    }
    if (sharedValue2.get()) {
      let num2 = 0;
      if (sharedValue1.get() === obj.VISIBLE) {
        num2 = first1;
      }
      items = [value, 0];
      const interpolateResult = ReanimatedRexport.interpolate(sharedValue1.get(), items, items);
      obj2 = { opacity: null, transform: null };
      const obj6 = ReanimatedRexport;
      obj2.opacity = obj6.withDelay(num2, timing.withTiming(sharedValue1.get(), obj2));
      const obj5 = { translateY: null };
      const obj10 = timing;
      const fn = function n(arg0) {
        let tmp = true === arg0;
        if (tmp) {
          tmp = state === position(cleanUp[8]).TransitionStates.YEETED;
        }
        if (tmp) {
          position(cleanUp[5]).runOnJS(closure_1_2)();
          obj = position(cleanUp[5]);
        }
      };
      const obj8 = {
        state,
        TransitionStates: TransitionGroup_TransitionGroup.TransitionStates,
        runOnJS: ReanimatedRexport.runOnJS,
        cleanUp,
      };
      fn.__closure = obj8;
      fn.__workletHash = 3860990525987;
      fn.__initData = __initData;
      obj5.translateY = ReanimatedRexport.withDelay(
        num2,
        obj10.withTiming(interpolateResult, obj2, "respect-motion-settings", fn),
      );
      const items1 = [obj5];
      obj2.transform = items1;
      return obj2;
    } else {
      obj = { opacity: 0, transform: null };
      const obj11 = { translateY: value };
      const items2 = [obj11];
      obj.transform = items2;
      return obj;
    }
  };
  let obj4 = position(cleanUp[5]);
  fn.__closure = {
    position,
    toastHeight: sharedValue,
    hasEntered: sharedValue2,
    animationState: sharedValue1,
    AnimationState: first1,
    enterDelayMs: first1,
    interpolate: position(cleanUp[5]).interpolate,
    ANIMATION_STATE_INPUT: items,
    withDelay: position(cleanUp[5]).withDelay,
    withTiming: position(cleanUp[7]).withTiming,
    TIMING: obj2,
    state,
    TransitionStates: position(cleanUp[8]).TransitionStates,
    runOnJS: position(cleanUp[5]).runOnJS,
    cleanUp,
  };
  fn.__workletHash = 12110637972000;
  fn.__initData = __initData;
  items = [sharedValue1, cleanUp, sharedValue2, first, state];
  const animatedStyle = obj4.useAnimatedStyle(fn);
  const effect = sharedValue1.useEffect(() => {
    if (state === TransitionGroup_TransitionGroup.TransitionStates.YEETED) {
      if (sharedValue2.get()) {
        const result = sharedValue1.set(obj.HIDDEN);
      } else {
        cleanUp();
      }
      return tmp10;
    } else if (first) {
      const result1 = sharedValue2.set(true);
      const result2 = sharedValue1.set(obj.VISIBLE);
    }
  }, items);
  let items1 = [sharedValue];
  const callback = sharedValue1.useCallback((nativeEvent) => {
    const height = nativeEvent.nativeEvent.layout.height;
    const result = sharedValue.set(height);
    if (height > 0) {
      closure_7(true);
    }
  }, items1);
  let obj6 = { onLayout: callback, style: null, children: null };
  let items2 = [tmp.toast, "top" === position ? tmp.toastTop : tmp.toastBottom, animatedStyle];
  obj6.style = items2;
  const merged = Object.assign(entry.toast);
  obj6.children = jsx(tmp2(tmp3[9]).Toast, {});
  return jsx(state(cleanUp[5]).View, obj6);
}
function getItemKey(key) {
  return String(key.key);
}
get_ActivityIndicator = fn(17);
const StyleSheet = get_ActivityIndicator.StyleSheet;
const View = get_ActivityIndicator.View;
let jsx = fn(21).jsx;
let obj = { HIDDEN: 0, [0]: "HIDDEN", VISIBLE: 1, [1]: "VISIBLE" };
let items = [,];
({ HIDDEN: arr[0], VISIBLE: arr[1] } = obj);
let obj2 = { duration: null, easing: null };
const ANIMATION_DURATION_MS = nativeDefault.modules.toast.ANIMATION_DURATION_MS;
obj2.duration = ANIMATION_DURATION_MS.resolve({});
obj2.easing = fn(4596).Easing.linear;
const QUEUE_ENTER_DELAY_MS = nativeDefault.modules.toast.QUEUE_ENTER_DELAY_MS;
let closure_11 = QUEUE_ENTER_DELAY_MS.resolve({});
const createStyles = fn(4866);
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
const __initData = {
  code: "function ToastContainerNativeTsx1(){const{position,toastHeight,hasEntered,animationState,AnimationState,enterDelayMs,interpolate,ANIMATION_STATE_INPUT,withDelay,withTiming,TIMING,state,TransitionStates,runOnJS,cleanUp}=this.__closure;const offscreenTranslateY=position==='top'?-toastHeight.get():toastHeight.get();if(!hasEntered.get()){return{opacity:0,transform:[{translateY:offscreenTranslateY}]};}const isEntering=animationState.get()===AnimationState.VISIBLE;const delayMs=isEntering?enterDelayMs:0;const translateY=interpolate(animationState.get(),ANIMATION_STATE_INPUT,[offscreenTranslateY,0]);return{opacity:withDelay(delayMs,withTiming(animationState.get(),TIMING)),transform:[{translateY:withDelay(delayMs,withTiming(translateY,TIMING,'respect-motion-settings',function(finished){if(finished===true&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}))}]};}",
};
let closure_14 = {
  code: "function ToastContainerNativeTsx2(finished){const{state,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished===true&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}",
};
const size = fn(2);
let result = size.fileFinishedImporting("design/mana/components/Toast/ToastContainer.native.tsx");

export const ToastContainer = function ToastContainer(surface) {
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
  const toastContainer = flag(entry[10]).useToastContainer(str);
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
  obj = flag(entry[10]);
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
    return (
      <AnimatedToast key={key} entry={entry} position={position} state={state} enterDelayMs={null} cleanUp={null} />
    );
  }, items2);
  const callback1 = obj2.useCallback((children) => {
    obj = {
      accessibilityElementsHidden: true,
      importantForAccessibility: "no-hide-descendants",
      pointerEvents: "none",
      style: null,
      children: <View style={closure_1.bounds}>{children}</View>,
    };
    items = [container.container, memo];
    obj.style = items;
    const tmp2 = (
      <View
        accessibilityElementsHidden
        importantForAccessibility="no-hide-descendants"
        pointerEvents="none"
        style={null}
      >
        <View style={closure_1.bounds}>{children}</View>
      </View>
    );
    let tmpResult = tmp2;
    if (flag) {
      const obj3 = { pointerEvents: "box-none", style: StyleSheet.absoluteFill, children: tmp2 };
      tmpResult = jsx(OverlayViewDefault, {
        pointerEvents: "box-none",
        style: StyleSheet.absoluteFill,
        children: tmp2,
      });
    }
    return tmpResult;
  }, items3);
  return first(tmp2(tmp3[8]).TransitionGroup, {
    items: memo1,
    renderItem: callback,
    getItemKey,
    wrapChildren: callback1,
  });
};
