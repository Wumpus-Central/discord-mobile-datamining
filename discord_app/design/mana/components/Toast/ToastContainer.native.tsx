// === Module 14283: Toast/ToastContainer ===

// Module 14283 (Toast/ToastContainer)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import TransitionGroup_TransitionGroup from "TransitionGroup/TransitionGroup" /* 4606 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import timing from "timing" /* 4897 */;
import OverlayViewDefault from "OverlayView" /* 5721 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault, num3, obj1, obj10, obj11, obj9, tmp13, tmp17, tmp19, tmp4;

let ANIMATION_DURATION_MS;
let obj4;
function getItemKey(key) {
  return String(key.key);
}
const StyleSheet = react_native.StyleSheet;
let View = react_native.View;
let jsx = Fragment.jsx;
let obj = { HIDDEN: 0, [0]: "HIDDEN", VISIBLE: 1, [1]: "VISIBLE" };
let items = [, ];
({ HIDDEN: arr[0], VISIBLE: arr[1] } = obj);
let obj2 = { duration: ANIMATION_DURATION_MS.resolve({}), easing: ReanimatedRexport.Easing.linear };
ANIMATION_DURATION_MS = nativeDefault.modules.toast.ANIMATION_DURATION_MS;
const QUEUE_ENTER_DELAY_MS = nativeDefault.modules.toast.QUEUE_ENTER_DELAY_MS;
let closure_11 = QUEUE_ENTER_DELAY_MS.resolve({});
let createStyles = createStyles_mod;
let obj3 = { container: obj4, bounds: { flex: 1, alignItems: "center" }, toast: { position: "absolute", alignSelf: "center", maxWidth: "100%" }, toastTop: { top: 0 }, toastBottom: { bottom: 0 } };
obj4 = { paddingHorizontal: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
let merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_12 = createStyles(obj3);
const __initData = { code: "function ToastContainerNativeTsx1(){const{position,toastHeight,hasEntered,animationState,AnimationState,enterDelayMs,interpolate,ANIMATION_STATE_INPUT,withDelay,withTiming,TIMING,state,TransitionStates,runOnJS,cleanUp}=this.__closure;const offscreenTranslateY=position===\"top\"?-toastHeight.get():toastHeight.get();if(!hasEntered.get()){return{opacity:0,transform:[{translateY:offscreenTranslateY}]};}const isEntering=animationState.get()===AnimationState.VISIBLE;const delayMs=isEntering?enterDelayMs:0;const translateY=interpolate(animationState.get(),ANIMATION_STATE_INPUT,[offscreenTranslateY,0]);return{opacity:withDelay(delayMs,withTiming(animationState.get(),TIMING)),transform:[{translateY:withDelay(delayMs,withTiming(translateY,TIMING,\"respect-motion-settings\",function(finished){if(finished===true&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}))}]};}" };
let closure_14 = { code: "function ToastContainerNativeTsx2(finished){const{state,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished===true&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}" };
const __initData2 = { code: "function ToastContainerNativeTsx3(){const{position,toastHeight,hasEntered,animationState,AnimationState,enterDelayMs,interpolate,ANIMATION_STATE_INPUT,withDelay,withTiming,TIMING,state,TransitionStates,runOnJS,cleanUp}=this.__closure;const offscreenTranslateY=position==='top'?-toastHeight.get():toastHeight.get();if(!hasEntered.get()){return{opacity:0,transform:[{translateY:offscreenTranslateY}]};}const isEntering=animationState.get()===AnimationState.VISIBLE;const delayMs=isEntering?enterDelayMs:0;const translateY=interpolate(animationState.get(),ANIMATION_STATE_INPUT,[offscreenTranslateY,0]);return{opacity:withDelay(delayMs,withTiming(animationState.get(),TIMING)),transform:[{translateY:withDelay(delayMs,withTiming(translateY,TIMING,'respect-motion-settings',function(finished){if(finished===true&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}))}]};}" };
const __initData3 = { code: "function ToastContainerNativeTsx4(finished){const{state,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished===true&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? ((position) => {
  let cleanUp;
  let closure_7;
  let enterDelayMs;
  let entry;
  let first1;
  let obj = position(cleanUp[8]);
  const cResult = obj.c(19);
  position = position.position;
  const state = position.state;
  cleanUp = position.cleanUp;
  ({ entry, enterDelayMs } = position);
  const tmp2 = closure_12();
  obj2 = position(cleanUp[5]);
  const sharedValue = obj2.useSharedValue(0);
  const obj3 = position(cleanUp[5]);
  const sharedValue1 = obj3.useSharedValue(first1.HIDDEN);
  let obj4 = position(cleanUp[5]);
  const sharedValue2 = obj4.useSharedValue(false);
  let obj5 = sharedValue1;
  const tmp6 = sharedValue(sharedValue1.useState(false), 2);
  const first = tmp6[0];
  jsx = tmp6[1];
  first1 = sharedValue(sharedValue1.useState(enterDelayMs), 1)[0];
  let obj6 = position(cleanUp[5]);
  let fn = function o() {
    let fn;
    let items1;
    let items2;
    let obj;
    let obj6;
    let value;
    let withDelay;
    let withDelay2;
    let withTiming;
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
      const obj4 = ReanimatedRexport;
      const interpolateResult = obj4.interpolate(sharedValue1.get(), items, items);
      obj2 = { opacity: withDelay(num2, obj6.withTiming(sharedValue1.get(), obj2)), transform: items1 };
      withDelay = ReanimatedRexport.withDelay;
      ReanimatedRexport;
      obj6 = timing;
      const obj5 = { translateY: withDelay2(num2, withTiming(interpolateResult, obj2, "respect-motion-settings", fn)) };
      withDelay2 = ReanimatedRexport.withDelay;
      ReanimatedRexport;
      fn = function n(arg0) {
        const tmp = true === arg0 && state === position(cleanUp[10]).TransitionStates.YEETED;
        if (tmp) {
          const obj = position(cleanUp[5]);
          obj.runOnJS(closure_1_2)();
        }
      };
      const tmp12 = timing;
      withTiming = tmp12.withTiming;
      fn.__closure = { state, TransitionStates: TransitionGroup_TransitionGroup.TransitionStates, runOnJS: ReanimatedRexport.runOnJS, cleanUp };
      fn.__workletHash = 3860990525987;
      fn.__initData = __initData;
      items1 = [obj5];
      const obj7 = { state, TransitionStates: TransitionGroup_TransitionGroup.TransitionStates, runOnJS: ReanimatedRexport.runOnJS, cleanUp };
      return obj2;
    } else {
      obj = { opacity: 0, transform: items2 };
      items2 = [{ translateY: value }];
      return obj;
    }
  };
  let obj7 = { position, toastHeight: sharedValue, hasEntered: sharedValue2, animationState: sharedValue1, AnimationState: first1, enterDelayMs: first1, interpolate: position(cleanUp[5]).interpolate, ANIMATION_STATE_INPUT: items, withDelay: position(cleanUp[5]).withDelay, withTiming: position(cleanUp[9]).withTiming, TIMING: obj2, state, TransitionStates: position(cleanUp[10]).TransitionStates, runOnJS: position(cleanUp[5]).runOnJS, cleanUp };
  fn.__closure = obj7;
  fn.__workletHash = 1482851075296;
  fn.__initData = __initData;
  const animatedStyle = obj6.useAnimatedStyle(fn);
  if (cResult[0] === sharedValue1) {
    if (cResult[1] === cleanUp) {
      if (cResult[2] === sharedValue2) {
        if (cResult[3] === first) {
          let tmp10;
          let tmp11;
          if (cResult[4] === state) {
            tmp10 = cResult[5];
            tmp11 = cResult[6];
          }
          const effect = obj5.useEffect(tmp10, tmp11);
          if (cResult[7] !== sharedValue) {
            class I {
              constructor(nativeEvent) {
                const height = nativeEvent.nativeEvent.layout.height;
                const result = sharedValue.set(height);
                if (height > 0) {
                  closure_7(true);
                }
              }
            }
            cResult[7] = sharedValue;
            let num2 = 8;
            cResult[8] = I;
          } else {
            class I {
              constructor(nativeEvent) {
                const height = nativeEvent.nativeEvent.layout.height;
                const result = sharedValue.set(height);
                if (height > 0) {
                  closure_7(true);
                }
              }
            }
          }
          const tmp14 = "top" === position ? tmp2.toastTop : tmp2.toastBottom;
          if (cResult[9] === animatedStyle) {
            class I {
              constructor(nativeEvent) {
                const height = nativeEvent.nativeEvent.layout.height;
                const result = sharedValue.set(height);
                if (height > 0) {
                  closure_7(true);
                }
              }
            }
          }
          items = [tmp2.toast, tmp14, animatedStyle];
          cResult[9] = animatedStyle;
          cResult[10] = tmp2.toast;
          cResult[11] = tmp14;
          cResult[12] = items;
        }
      }
    }
  }
  const fn2 = function l() {
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
  };
  let items1 = [sharedValue1, cleanUp, sharedValue2, first, state];
  cResult[0] = sharedValue1;
  cResult[1] = cleanUp;
  cResult[2] = sharedValue2;
  cResult[3] = first;
  cResult[4] = state;
  cResult[5] = fn2;
  cResult[6] = items1;
  tmp11 = items1;
  tmp10 = fn2;
}) : ((position) => {
  let Toast;
  let closure_7;
  let enterDelayMs;
  let entry;
  let items2;
  let obj7;
  position = position.position;
  const state = position.state;
  const cleanUp = position.cleanUp;
  let first1;
  ({ entry, enterDelayMs } = position);
  let tmp = closure_12();
  let obj = position(cleanUp[5]);
  const sharedValue = obj.useSharedValue(0);
  obj2 = position(cleanUp[5]);
  const sharedValue1 = obj2.useSharedValue(first1.HIDDEN);
  const obj3 = position(cleanUp[5]);
  const sharedValue2 = obj3.useSharedValue(false);
  const tmp7 = sharedValue(sharedValue1.useState(false), 2);
  const first = tmp7[0];
  jsx = tmp7[1];
  first1 = sharedValue(sharedValue1.useState(enterDelayMs), 1)[0];
  let obj4 = position(cleanUp[5]);
  const tmp2 = position;
  const tmp3 = cleanUp;
  class E {
    constructor() {
      if ("top" === position) {
        tmp3 = closure_3;
        value = -closure_3.get();
      } else {
        tmp = closure_3;
        value = closure_3.get();
      }
      if (closure_5.get()) {
        obj3 = closure_4;
        tmp4 = closure_8;
        num = 0;
        num2 = 0;
        if (closure_4.get() === closure_8.VISIBLE) {
          num2 = closure_8;
        }
        tmp5 = closure_0;
        tmp6 = closure_2;
        obj4 = closure_0(closure_2[5]);
        tmp7 = closure_9;
        items = [, ];
        items[0] = value;
        items[1] = 0;
        interpolateResult = obj4.interpolate(obj3.get(), closure_9, items);
        obj1 = { opacity: null, transform: null };
        tmp9 = closure_0(closure_2[5]);
        withDelay = tmp9.withDelay;
        obj6 = closure_0(closure_2[9]);
        tmp10 = closure_10;
        obj1.opacity = withDelay(num2, obj6.withTiming(obj3.get(), closure_10));
        obj9 = { translateY: null };
        tmp11 = closure_0(closure_2[5]);
        withDelay2 = tmp11.withDelay;
        tmp12 = closure_0(closure_2[9]);
        fn = function n(arg0) {
          const tmp = true === arg0 && state === position(cleanUp[10]).TransitionStates.YEETED;
          if (tmp) {
            const obj = position(cleanUp[5]);
            obj.runOnJS(closure_1_2)();
          }
        };
        obj10 = { state: null, TransitionStates: null, runOnJS: null, cleanUp: null };
        tmp13 = state;
        obj10.state = state;
        withTiming = tmp12.withTiming;
        obj10.TransitionStates = closure_0(closure_2[10]).TransitionStates;
        obj10.runOnJS = closure_0(closure_2[5]).runOnJS;
        tmp14 = cleanUp;
        obj10.cleanUp = cleanUp;
        fn.__closure = obj10;
        num3 = 14586725938085;
        fn.__workletHash = 14586725938085;
        tmp15 = closure_16;
        fn.__initData = closure_16;
        str = "respect-motion-settings";
        tmp16 = tmp12;
        tmp17 = interpolateResult;
        tmp18 = closure_10;
        tmp19 = fn;
        obj9.translateY = withDelay2(num2, withTiming(interpolateResult, closure_10, "respect-motion-settings", fn));
        items1 = [];
        items1[0] = obj9;
        obj1.transform = items1;
        return obj1;
      } else {
        obj = { opacity: 0, transform: null };
        obj11 = { translateY: null };
        obj11.translateY = value;
        items2 = [];
        items2[0] = obj11;
        obj.transform = items2;
        return obj;
      }
    }
  }
  let obj5 = { position, toastHeight: sharedValue, hasEntered: sharedValue2, animationState: sharedValue1, AnimationState: first1, enterDelayMs: first1, interpolate: position(cleanUp[5]).interpolate, ANIMATION_STATE_INPUT: items, withDelay: position(cleanUp[5]).withDelay, withTiming: position(cleanUp[9]).withTiming, TIMING: obj2, state, TransitionStates: position(cleanUp[10]).TransitionStates, runOnJS: position(cleanUp[5]).runOnJS, cleanUp };
  E.__closure = obj5;
  E.__workletHash = 5149993699490;
  E.__initData = __initData2;
  items = [sharedValue1, cleanUp, sharedValue2, first, state];
  const animatedStyle = obj4.useAnimatedStyle(E);
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
  let obj6 = { onLayout: callback, style: items2, children: jsx(Toast, obj7) };
  items2 = [tmp.toast, "top" === position ? tmp.toastTop : tmp.toastBottom, animatedStyle];
  View = state(cleanUp[5]).View;
  obj7 = {};
  Toast = tmp2(tmp3[11]).Toast;
  const merged = Object.assign(entry.toast);
  return jsx(View, obj6);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let container;
  let entry;
  let first;
  let obj4;
  let offset;
  let overlay;
  let position;
  let surface;
  let tmp14;
  let tmp15;
  const obj = require("react");
  const cResult = obj.c(18);
  ({ surface, overlay, offset } = arg0);
  let str = "app";
  if (undefined !== surface) {
    str = surface;
  }
  _require = tmp4;
  const tmp5 = closure_12();
  importDefault = tmp5;
  let tmpResult = tmp(position[12]);
  const toastContainer = tmpResult.useToastContainer(str);
  ({ entry, position } = toastContainer);
  let num;
  if (offset != null) {
    num = offset.top;
  }
  if (num == null) {
    num = 0;
  }
  let num2;
  if (offset != null) {
    num2 = offset.bottom;
  }
  if (num2 == null) {
    num2 = 0;
  }
  if (cResult[0] === num2) {
    if (cResult[1] === num) {
      let tmp7;
      let tmp10;
      if (cResult[2] === position) {
        tmp7 = cResult[3];
      }
      let closure_3 = tmp7;
      if (cResult[4] !== entry) {
        let items1;
        if (null != entry) {
          items = [entry];
          items1 = items;
        } else {
          items1 = [];
        }
        cResult[4] = entry;
        cResult[5] = items1;
        tmp10 = items1;
      } else {
        tmp10 = cResult[5];
      }
      [tmp14, tmp15] = closure_3(first.useState(null), 2);
      closure_3(first.useState(null), 2);
      const tmp16 = closure_3(first.useState(null), 2);
      first = tmp16[0];
      let key;
      const tmp18 = tmp16[1];
      if (entry != null) {
        key = entry.key;
      }
      if (key == null) {
        key = null;
      }
      if (key !== tmp14) {
        let tmp20 = null;
        if (null != key) {
          tmp20 = null;
          if (null != tmp14) {
            tmp20 = key;
          }
        }
        tmp18(tmp20);
        tmp15(key);
      }
      if (cResult[6] === first) {
        let tmp23;
        if (cResult[7] === position) {
          tmp23 = cResult[8];
        }
        if (cResult[9] === tmp7) {
          if (cResult[10] === (undefined !== overlay && overlay)) {
            if (cResult[11] === tmp5.bounds) {
              let tmp24;
              if (cResult[12] === tmp5.container) {
                tmp24 = cResult[13];
              }
              if (cResult[14] === tmp10) {
                if (cResult[15] === tmp23) {
                  let tmp25;
                  if (cResult[16] === tmp24) {
                    tmp25 = cResult[17];
                  }
                  return tmp25;
                }
              }
              class G {
                constructor(children) {
                  items = [container.container, closure_3];
                  const tmp2 = <View accessibilityElementsHidden importantForAccessibility="no-hide-descendants" pointerEvents="none" style={items}>{null}</View>;
                  let tmpResult = tmp2;
                  if (closure_0) {
                    tmpResult = jsx(OverlayViewDefault, { pointerEvents: "box-none", style: StyleSheet.absoluteFill, children: tmp2 });
                  }
                  return tmpResult;
                }
              }
              const tmp27 = jsx(require("TransitionGroup/TransitionGroup").TransitionGroup, { items: tmp10, renderItem: tmp23, getItemKey, wrapChildren: tmp24 });
              cResult[14] = tmp10;
              cResult[15] = tmp23;
              cResult[16] = tmp24;
              cResult[17] = tmp27;
              tmp25 = tmp27;
            }
          }
        }
        class G {
          constructor(children) {
            items = [container.container, closure_3];
            const tmp2 = <View accessibilityElementsHidden importantForAccessibility="no-hide-descendants" pointerEvents="none" style={items}>{null}</View>;
            let tmpResult = tmp2;
            if (closure_0) {
              tmpResult = jsx(OverlayViewDefault, { pointerEvents: "box-none", style: StyleSheet.absoluteFill, children: tmp2 });
            }
            return tmpResult;
          }
        }
        cResult[9] = tmp7;
        cResult[10] = undefined !== overlay && overlay;
        cResult[11] = tmp5.bounds;
        cResult[12] = tmp5.container;
        cResult[13] = G;
        tmp24 = G;
      }
      const fn = function b(id, entry, state, cleanUp) {
        let num = 0;
        if (entry.key === first) {
          num = closure_11;
        }
        return <closure_17 key={id} entry={entry} position={position} state={state} enterDelayMs={num} cleanUp={cleanUp} />;
      };
      cResult[6] = first;
      cResult[7] = position;
      cResult[8] = fn;
      tmp23 = fn;
    }
  }
  if ("top" === position) {
    const obj3 = { paddingTop: null };
    class G {
      constructor(children) {
        items = [container.container, closure_3];
        const tmp2 = <View accessibilityElementsHidden importantForAccessibility="no-hide-descendants" pointerEvents="none" style={items}>{null}</View>;
        let tmpResult = tmp2;
        if (closure_0) {
          tmpResult = jsx(OverlayViewDefault, { pointerEvents: "box-none", style: StyleSheet.absoluteFill, children: tmp2 });
        }
        return tmpResult;
      }
    }
    obj4 = obj3;
  } else {
    obj4 = { paddingBottom: null };
    class G {
      constructor(children) {
        items = [container.container, closure_3];
        const tmp2 = <View accessibilityElementsHidden importantForAccessibility="no-hide-descendants" pointerEvents="none" style={items}>{null}</View>;
        let tmpResult = tmp2;
        if (closure_0) {
          tmpResult = jsx(OverlayViewDefault, { pointerEvents: "box-none", style: StyleSheet.absoluteFill, children: tmp2 });
        }
        return tmpResult;
      }
    }
  }
  cResult[0] = num2;
  cResult[1] = num;
  cResult[2] = position;
  cResult[3] = obj4;
  tmp7 = obj4;
}) : ((surface) => {
  let tmp8;
  let tmp9;
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
  let tmp2 = flag;
  let obj = flag(entry[12]);
  const toastContainer = obj.useToastContainer(str);
  const tmp3 = entry;
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
  obj2 = num;
  items = [num2, num, position];
  memo = num.useMemo(() => {
    let obj;
    if ("top" === position) {
      obj = { paddingTop: nativeDefault.space.PX_8 + num };
      obj2 = { paddingTop: nativeDefault.space.PX_8 + num };
    } else {
      obj = { paddingBottom: nativeDefault.space.PX_8 + num2 };
    }
    return obj;
  }, items);
  let items1 = [entry];
  const memo1 = num.useMemo(() => {
    let items1;
    if (null != entry) {
      items = [tmp];
      items1 = items;
    } else {
      items1 = [];
    }
    return items1;
  }, items1);
  [tmp8, tmp9] = position(num.useState(null), 2);
  position(num.useState(null), 2);
  const tmp10 = position(num.useState(null), 2);
  first = tmp10[0];
  let key;
  const tmp12 = tmp10[1];
  if (entry != null) {
    key = entry.key;
  }
  if (key == null) {
    key = null;
  }
  if (key !== tmp8) {
    let tmp14 = null;
    if (null != key) {
      tmp14 = null;
      if (null != tmp8) {
        tmp14 = key;
      }
    }
    tmp12(tmp14);
    tmp9(key);
  }
  const items2 = [first, position];
  const items3 = [memo, flag, tmp];
  const callback = obj2.useCallback((id, entry, state, cleanUp) => {
    num = 0;
    if (entry.key === first) {
      num = closure_11;
    }
    return <closure_17 key={id} entry={entry} position={position} state={state} enterDelayMs={num} cleanUp={cleanUp} />;
  }, items2);
  const callback1 = obj2.useCallback((children) => {
    items = [container.container, memo];
    const tmp2 = <View accessibilityElementsHidden importantForAccessibility="no-hide-descendants" pointerEvents="none" style={items}>{null}</View>;
    let tmpResult = tmp2;
    if (flag) {
      tmpResult = jsx(OverlayViewDefault, { pointerEvents: "box-none", style: StyleSheet.absoluteFill, children: tmp2 });
    }
    return tmpResult;
  }, items3);
  const obj3 = { items: memo1, renderItem: callback, getItemKey, wrapChildren: callback1 };
  return first(tmp2(tmp3[10]).TransitionGroup, obj3);
});
let result = size.fileFinishedImporting("design/mana/components/Toast/ToastContainer.native.tsx");

export const ToastContainer = tmp5;