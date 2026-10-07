// === Module 14283: Toast/ToastContainer ===

// Module 14283 (Toast/ToastContainer)
import nativeDefault from "native" /* 587 */;
import TransitionGroup_TransitionGroup from "TransitionGroup/TransitionGroup" /* 4606 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import timing from "timing" /* 4897 */;
import OverlayViewDefault from "OverlayView" /* 5721 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
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
obj2.easing = fn(4618).Easing.linear;
const QUEUE_ENTER_DELAY_MS = nativeDefault.modules.toast.QUEUE_ENTER_DELAY_MS;
let closure_11 = QUEUE_ENTER_DELAY_MS.resolve({});
const createStyles = fn(4896);
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
const __initData = { code: "function ToastContainerNativeTsx1(){const{position,toastHeight,hasEntered,animationState,AnimationState,enterDelayMs,interpolate,ANIMATION_STATE_INPUT,withDelay,withTiming,TIMING,state,TransitionStates,runOnJS,cleanUp}=this.__closure;const offscreenTranslateY=position===\"top\"?-toastHeight.get():toastHeight.get();if(!hasEntered.get()){return{opacity:0,transform:[{translateY:offscreenTranslateY}]};}const isEntering=animationState.get()===AnimationState.VISIBLE;const delayMs=isEntering?enterDelayMs:0;const translateY=interpolate(animationState.get(),ANIMATION_STATE_INPUT,[offscreenTranslateY,0]);return{opacity:withDelay(delayMs,withTiming(animationState.get(),TIMING)),transform:[{translateY:withDelay(delayMs,withTiming(translateY,TIMING,\"respect-motion-settings\",function(finished){if(finished===true&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}))}]};}" };
let closure_14 = { code: "function ToastContainerNativeTsx2(finished){const{state,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished===true&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}" };
const __initData2 = { code: "function ToastContainerNativeTsx3(){const{position,toastHeight,hasEntered,animationState,AnimationState,enterDelayMs,interpolate,ANIMATION_STATE_INPUT,withDelay,withTiming,TIMING,state,TransitionStates,runOnJS,cleanUp}=this.__closure;const offscreenTranslateY=position==='top'?-toastHeight.get():toastHeight.get();if(!hasEntered.get()){return{opacity:0,transform:[{translateY:offscreenTranslateY}]};}const isEntering=animationState.get()===AnimationState.VISIBLE;const delayMs=isEntering?enterDelayMs:0;const translateY=interpolate(animationState.get(),ANIMATION_STATE_INPUT,[offscreenTranslateY,0]);return{opacity:withDelay(delayMs,withTiming(animationState.get(),TIMING)),transform:[{translateY:withDelay(delayMs,withTiming(translateY,TIMING,'respect-motion-settings',function(finished){if(finished===true&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}))}]};}" };
const __initData3 = { code: "function ToastContainerNativeTsx4(finished){const{state,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished===true&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}" };
let ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? ((position) => {
  const cResult = position(cleanUp[8]).c(19);
  position = position.position;
  state = position.state;
  cleanUp = position.cleanUp;
  ({ entry, enterDelayMs } = position);
  const tmp2 = closure_12();
  obj2 = position(cleanUp[5]);
  const sharedValue = obj2.useSharedValue(0);
  obj = position(cleanUp[8]);
  const sharedValue1 = position(cleanUp[5]).useSharedValue(first1.HIDDEN);
  const obj3 = position(cleanUp[5]);
  const sharedValue2 = position(cleanUp[5]).useSharedValue(false);
  const tmp6 = sharedValue(sharedValue1.useState(false), 2);
  const first = tmp6[0];
  jsx = tmp6[1];
  first1 = sharedValue(sharedValue1.useState(enterDelayMs), 1)[0];
  let obj4 = position(cleanUp[5]);
  let obj5 = sharedValue1;
  let fn = function o() {
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
          tmp = state === position(cleanUp[10]).TransitionStates.YEETED;
        }
        if (tmp) {
          position(cleanUp[5]).runOnJS(closure_1_2)();
          obj = position(cleanUp[5]);
        }
      };
      const obj8 = { state, TransitionStates: TransitionGroup_TransitionGroup.TransitionStates, runOnJS: ReanimatedRexport.runOnJS, cleanUp };
      fn.__closure = obj8;
      fn.__workletHash = 3860990525987;
      fn.__initData = __initData;
      obj5.translateY = ReanimatedRexport.withDelay(num2, obj10.withTiming(interpolateResult, obj2, "respect-motion-settings", fn));
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
  let obj6 = position(cleanUp[5]);
  fn.__closure = { position, toastHeight: sharedValue, hasEntered: sharedValue2, animationState: sharedValue1, AnimationState: first1, enterDelayMs: first1, interpolate: position(cleanUp[5]).interpolate, ANIMATION_STATE_INPUT: items, withDelay: position(cleanUp[5]).withDelay, withTiming: position(cleanUp[9]).withTiming, TIMING: obj2, state, TransitionStates: position(cleanUp[10]).TransitionStates, runOnJS: position(cleanUp[5]).runOnJS, cleanUp };
  fn.__workletHash = 1482851075296;
  fn.__initData = __initData;
  const animatedStyle = obj6.useAnimatedStyle(fn);
  if (cResult[0] === sharedValue1) {
    if (cResult[1] === cleanUp) {
      if (cResult[2] === sharedValue2) {
        if (cResult[3] === first) {
          if (cResult[4] === state) {
            let tmp10 = cResult[5];
            let tmp11 = cResult[6];
          }
          const effect = obj5.useEffect(tmp10, tmp11);
          if (cResult[7] !== sharedValue) {
            class I {
              constructor(arg0) {
                height = position.nativeEvent.layout.height;
                result = closure_3.set(height);
                if (height > 0) {
                  tmp2 = closure_7;
                  flag = true;
                  tmp3 = closure_7(true);
                }
                return;
              }
            }
            cResult[7] = sharedValue;
            cResult[8] = I;
          } else {
            class I {
              constructor(arg0) {
                height = position.nativeEvent.layout.height;
                result = closure_3.set(height);
                if (height > 0) {
                  tmp2 = closure_7;
                  flag = true;
                  tmp3 = closure_7(true);
                }
                return;
              }
            }
          }
          const tmp14 = "top" === position ? tmp2.toastTop : tmp2.toastBottom;
          if (cResult[9] === animatedStyle) {
            class I {
              constructor(arg0) {
                height = position.nativeEvent.layout.height;
                result = closure_3.set(height);
                if (height > 0) {
                  tmp2 = closure_7;
                  flag = true;
                  tmp3 = closure_7(true);
                }
                return;
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
  let obj7 = { position, toastHeight: sharedValue, hasEntered: sharedValue2, animationState: sharedValue1, AnimationState: first1, enterDelayMs: first1, interpolate: position(cleanUp[5]).interpolate, ANIMATION_STATE_INPUT: items, withDelay: position(cleanUp[5]).withDelay, withTiming: position(cleanUp[9]).withTiming, TIMING: obj2, state, TransitionStates: position(cleanUp[10]).TransitionStates, runOnJS: position(cleanUp[5]).runOnJS, cleanUp };
}) : ((position) => {
  position = position.position;
  state = position.state;
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
        obj6 = closure_0(closure_2[5]);
        obj7 = closure_0(closure_2[9]);
        tmp9 = closure_10;
        obj1.opacity = obj6.withDelay(num2, obj7.withTiming(obj3.get(), closure_10));
        obj12 = { translateY: null };
        obj9 = closure_0(closure_2[5]);
        obj10 = closure_0(closure_2[9]);
        fn = function n(arg0) {
          let tmp = true === arg0;
          if (tmp) {
            tmp = state === position(cleanUp[10]).TransitionStates.YEETED;
          }
          if (tmp) {
            position(cleanUp[5]).runOnJS(closure_1_2)();
            obj = position(cleanUp[5]);
          }
        };
        obj13 = { state: null, TransitionStates: null, runOnJS: null, cleanUp: null };
        tmp10 = state;
        obj13.state = state;
        obj13.TransitionStates = closure_0(closure_2[10]).TransitionStates;
        obj13.runOnJS = closure_0(closure_2[5]).runOnJS;
        tmp11 = cleanUp;
        obj13.cleanUp = cleanUp;
        fn.__closure = obj13;
        num3 = 14586725938085;
        fn.__workletHash = 14586725938085;
        tmp12 = closure_16;
        fn.__initData = closure_16;
        str = "respect-motion-settings";
        tmp13 = obj10;
        tmp14 = interpolateResult;
        tmp15 = closure_10;
        tmp16 = fn;
        obj12.translateY = obj9.withDelay(num2, obj10.withTiming(interpolateResult, closure_10, "respect-motion-settings", fn));
        items1 = [];
        items1[0] = obj12;
        obj1.transform = items1;
        return obj1;
      } else {
        obj = { opacity: 0, transform: null };
        obj14 = { translateY: null };
        obj14.translateY = value;
        items2 = [];
        items2[0] = obj14;
        obj.transform = items2;
        return obj;
      }
    }
  }
  let obj4 = position(cleanUp[5]);
  E.__closure = { position, toastHeight: sharedValue, hasEntered: sharedValue2, animationState: sharedValue1, AnimationState: first1, enterDelayMs: first1, interpolate: position(cleanUp[5]).interpolate, ANIMATION_STATE_INPUT: items, withDelay: position(cleanUp[5]).withDelay, withTiming: position(cleanUp[9]).withTiming, TIMING: obj2, state, TransitionStates: position(cleanUp[10]).TransitionStates, runOnJS: position(cleanUp[5]).runOnJS, cleanUp };
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
  let obj6 = { onLayout: callback, style: null, children: null };
  let items2 = [tmp.toast, "top" === position ? tmp.toastTop : tmp.toastBottom, animatedStyle];
  obj6.style = items2;
  const merged = Object.assign(entry.toast);
  obj6.children = jsx(tmp2(tmp3[11]).Toast, {});
  return jsx(state(cleanUp[5]).View, obj6);
});
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("design/mana/components/Toast/ToastContainer.native.tsx");

export const ToastContainer = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = require("c").c(18);
  ({ surface, overlay, offset } = arg0);
  let str = "app";
  if (undefined !== surface) {
    str = surface;
  }
  _require = tmp4;
  const tmp5 = closure_12();
  importDefault = tmp5;
  obj = require("c");
  const toastContainer = require("DEFAULT_TOAST_POSITION").useToastContainer(str);
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
      if (cResult[2] === position) {
        closure_3 = tmp7;
        if (cResult[4] !== entry) {
          if (null != entry) {
            items = [entry];
            let items1 = items;
          } else {
            items1 = [];
          }
          cResult[4] = entry;
          cResult[5] = items1;
        } else {
          [tmp15, tmp16] = closure_3(first.useState(null), 2);
          const tmp17 = closure_3(first.useState(null), 2);
          first = tmp17[0];
          let key;
          if (entry != null) {
            key = entry.key;
          }
          if (key == null) {
            key = null;
          }
          if (key !== tmp15) {
            let tmp20 = null;
            if (null != key) {
              tmp20 = null;
              if (null != tmp15) {
                tmp20 = key;
              }
            }
            tmp17[1](tmp20);
            tmp16(key);
          }
          if (cResult[6] === first) {
            if (cResult[7] === position) {
              let tmp23 = cResult[8];
            }
            if (cResult[9] === tmp7) {
              if (cResult[10] === tmp4) {
                if (cResult[11] === tmp5.bounds) {
                  if (cResult[12] === tmp5.container) {
                    let tmp24 = cResult[13];
                  }
                  if (cResult[14] === tmp10) {
                    if (cResult[15] === tmp23) {
                      if (cResult[16] === tmp24) {
                        let tmp25 = cResult[17];
                      }
                      return tmp25;
                    }
                  }
                  class G {
                    constructor(arg0) {
                      obj = { accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", pointerEvents: "none", style: null, children: null };
                      items = [, ];
                      items[0] = closure_1.container;
                      items[1] = closure_3;
                      obj.style = items;
                      obj1 = { style: closure_1.bounds, children: arg0 };
                      tmp = jsx;
                      obj.children = jsx(View, obj1);
                      tmp2 = jsx(View, obj);
                      tmpResult = tmp2;
                      if (overlay) {
                        tmp4 = closure_1;
                        tmp5 = closure_2;
                        obj4 = { pointerEvents: "box-none", style: null, children: null };
                        tmp6 = StyleSheet;
                        obj4.style = StyleSheet.absoluteFill;
                        obj4.children = tmp2;
                        tmpResult = tmp(closure_1(closure_2[13]), obj4);
                      }
                      return tmpResult;
                    }
                  }
                  obj2 = { items: tmp10, renderItem: tmp23, getItemKey, wrapChildren: tmp24 };
                  const tmp27 = jsx(tmp(position[10]).TransitionGroup, { items: tmp10, renderItem: tmp23, getItemKey, wrapChildren: tmp24 });
                  cResult[14] = tmp10;
                  cResult[15] = tmp23;
                  cResult[16] = tmp24;
                  cResult[17] = tmp27;
                  tmp25 = tmp27;
                }
              }
            }
            class G {
              constructor(arg0) {
                obj = { accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", pointerEvents: "none", style: null, children: null };
                items = [, ];
                items[0] = closure_1.container;
                items[1] = closure_3;
                obj.style = items;
                obj1 = { style: closure_1.bounds, children: arg0 };
                tmp = jsx;
                obj.children = jsx(View, obj1);
                tmp2 = jsx(View, obj);
                tmpResult = tmp2;
                if (overlay) {
                  tmp4 = closure_1;
                  tmp5 = closure_2;
                  obj4 = { pointerEvents: "box-none", style: null, children: null };
                  tmp6 = StyleSheet;
                  obj4.style = StyleSheet.absoluteFill;
                  obj4.children = tmp2;
                  tmpResult = tmp(closure_1(closure_2[13]), obj4);
                }
                return tmpResult;
              }
            }
            cResult[9] = tmp7;
            cResult[10] = tmp4;
            cResult[11] = tmp5.bounds;
            cResult[12] = tmp5.container;
            cResult[13] = G;
            tmp24 = G;
          }
          const fn = function b(id, entry, state, cleanUp) {
            obj = { entry, position, state, enterDelayMs: null, cleanUp: null };
            let num = 0;
            if (entry.key === first) {
              num = closure_11;
            }
            obj.enterDelayMs = num;
            obj.cleanUp = cleanUp;
            return <closure_17 key={id} entry={entry} position={position} state={state} enterDelayMs={null} cleanUp={null} />;
          };
          cResult[6] = first;
          cResult[7] = position;
          cResult[8] = fn;
          tmp23 = fn;
          const tmp14 = closure_3(first.useState(null), 2);
        }
      }
    }
  }
  if ("top" === position) {
    class G {
      constructor(arg0) {
        obj = { accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", pointerEvents: "none", style: null, children: null };
        items = [, ];
        items[0] = closure_1.container;
        items[1] = closure_3;
        obj.style = items;
        obj1 = { style: closure_1.bounds, children: arg0 };
        tmp = jsx;
        obj.children = jsx(View, obj1);
        tmp2 = jsx(View, obj);
        tmpResult = tmp2;
        if (overlay) {
          tmp4 = closure_1;
          tmp5 = closure_2;
          obj4 = { pointerEvents: "box-none", style: null, children: null };
          tmp6 = StyleSheet;
          obj4.style = StyleSheet.absoluteFill;
          obj4.children = tmp2;
          tmpResult = tmp(closure_1(closure_2[13]), obj4);
        }
        return tmpResult;
      }
    }
    let obj4 = { paddingTop: null };
    let obj3 = { paddingTop: null };
  } else {
    obj4 = { paddingBottom: null };
    class G {
      constructor(arg0) {
        obj = { accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", pointerEvents: "none", style: null, children: null };
        items = [, ];
        items[0] = closure_1.container;
        items[1] = closure_3;
        obj.style = items;
        obj1 = { style: closure_1.bounds, children: arg0 };
        tmp = jsx;
        obj.children = jsx(View, obj1);
        tmp2 = jsx(View, obj);
        tmpResult = tmp2;
        if (overlay) {
          tmp4 = closure_1;
          tmp5 = closure_2;
          obj4 = { pointerEvents: "box-none", style: null, children: null };
          tmp6 = StyleSheet;
          obj4.style = StyleSheet.absoluteFill;
          obj4.children = tmp2;
          tmpResult = tmp(closure_1(closure_2[13]), obj4);
        }
        return tmpResult;
      }
    }
  }
  cResult[0] = num2;
  cResult[1] = num;
  cResult[2] = position;
  cResult[3] = obj4;
  let tmpResult = require("DEFAULT_TOAST_POSITION");
}) : ((surface) => {
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
  const toastContainer = flag(entry[12]).useToastContainer(str);
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
  obj = flag(entry[12]);
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
  const callback = obj2.useCallback((id, entry, state, cleanUp) => {
    obj = { entry, position, state, enterDelayMs: null, cleanUp: null };
    num = 0;
    if (entry.key === first) {
      num = closure_11;
    }
    obj.enterDelayMs = num;
    obj.cleanUp = cleanUp;
    return <closure_17 key={id} entry={entry} position={position} state={state} enterDelayMs={null} cleanUp={null} />;
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
  return first(tmp2(tmp3[10]).TransitionGroup, { items: memo1, renderItem: callback, getItemKey, wrapChildren: callback1 });
});