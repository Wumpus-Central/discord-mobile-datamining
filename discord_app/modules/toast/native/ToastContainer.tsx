// === Module 17140: ToastContainer ===

// Module 17140 (ToastContainer)
import Fragment from "Fragment" /* 21 */;
import native from "native" /* 1188 */;
import native2 from "native" /* 4589 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4590 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import spring from "spring" /* 5597 */;
import LegacyTokens from "LegacyTokens" /* 5620 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;
import ToastStore from "ToastStore" /* 15666 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, constants, diff, diff1, interpolateResult, num2, num3, obj1, obj5, sum, tmp13, tmp14, tmp20, tmp21, tmp25, tmp26, tmp27, tmp28, tmp29, tmp3, tmp30, tmp31, tmp7, tmp8Result, tmp8Result1, value, value1, withSpringResult;

let obj2;
function renderItem(key, toast, state, cleanUp) {
  return <closure_19 key={key} toast={toast} state={state} cleanUp={cleanUp} />;
}
function getItemKey(key) {
  return key.key;
}
function wrapChildren(children) {
  return jsx(native.NonExpandingOverlayView, { children });
}
let closure_3 = ["key"];
const jsx = Fragment.jsx;
let obj = { container: obj2 };
obj2 = { position: "absolute", alignSelf: "center", flexDirection: "row", justifyContent: "center", shadowColor: LegacyTokens.TOAST_CONTAINER_SHADOW_COLOR };
let closure_9 = createStyles.createStyles(obj);
let obj3 = { START: 0, [0]: "START", END: 1, [1]: "END" };
let items = [, ];
({ START: arr[0], END: arr[1] } = obj3);
let c12 = -30;
let closure_13 = { mass: 0.1, damping: 10, stiffness: 100, overshootClamping: true };
const TOAST_SPRING_PHYSICS = { mass: 0.35, damping: 15, stiffness: 350, restDisplacementThreshold: 0.1, restSpeedThreshold: 0.1 };
const __initData = { code: "function ToastContainerTsx1(){const{position,safeAreaTop,CONTAINER_DISTANCE_VERTICAL,screenHeight,toastHeight,bottomTabsHeight,youBarHeight,interpolate,animationState,ANIMATION_STATE_INPUT,CONTAINER_TOP_POSITION_START,isReducedMotion,withSpring,OPACITY_SPRING_PHYSICS,TOAST_SPRING_PHYSICS,state,TransitionStates,runOnJS,cleanUp,screenWidth,CONTAINER_DISTANCE_SIDES}=this.__closure;const verticalPositionEnd=position===\"top\"?safeAreaTop+CONTAINER_DISTANCE_VERTICAL:screenHeight-toastHeight.get()-bottomTabsHeight-CONTAINER_DISTANCE_VERTICAL-youBarHeight;const translateY=interpolate(animationState.get(),ANIMATION_STATE_INPUT,[position===\"top\"?CONTAINER_TOP_POSITION_START:screenHeight-bottomTabsHeight-toastHeight.get()-youBarHeight,verticalPositionEnd]);return{opacity:!isReducedMotion?withSpring(animationState.get(),OPACITY_SPRING_PHYSICS):animationState.get(),transform:[{translateY:!isReducedMotion?withSpring(translateY,TOAST_SPRING_PHYSICS,\"respect-motion-settings\",function(finished){if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}):translateY}],maxWidth:screenWidth-CONTAINER_DISTANCE_SIDES*2};}" };
const __initData2 = { code: "function ToastContainerTsx2(finished){const{state,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}" };
const __initData3 = { code: "function ToastContainerTsx3(){const{position,safeAreaTop,CONTAINER_DISTANCE_VERTICAL,screenHeight,toastHeight,bottomTabsHeight,youBarHeight,interpolate,animationState,ANIMATION_STATE_INPUT,CONTAINER_TOP_POSITION_START,isReducedMotion,withSpring,OPACITY_SPRING_PHYSICS,TOAST_SPRING_PHYSICS,state,TransitionStates,runOnJS,cleanUp,screenWidth,CONTAINER_DISTANCE_SIDES}=this.__closure;const verticalPositionEnd=position==='top'?safeAreaTop+CONTAINER_DISTANCE_VERTICAL:screenHeight-toastHeight.get()-bottomTabsHeight-CONTAINER_DISTANCE_VERTICAL-youBarHeight;const translateY=interpolate(animationState.get(),ANIMATION_STATE_INPUT,[position==='top'?CONTAINER_TOP_POSITION_START:screenHeight-bottomTabsHeight-toastHeight.get()-youBarHeight,verticalPositionEnd]);return{opacity:!isReducedMotion?withSpring(animationState.get(),OPACITY_SPRING_PHYSICS):animationState.get(),transform:[{translateY:!isReducedMotion?withSpring(translateY,TOAST_SPRING_PHYSICS,'respect-motion-settings',function(finished){if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}):translateY}],maxWidth:screenWidth-CONTAINER_DISTANCE_SIDES*2};}" };
const __initData4 = { code: "function ToastContainerTsx4(finished){const{state,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? ((cleanUp) => {
  let closure_10;
  let content;
  let disableAnimations;
  let sharedValue;
  let state;
  let tmp12;
  let toast;
  let width;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(28);
  ({ toast, state } = cleanUp);
  cleanUp = cleanUp.cleanUp;
  if (cResult[0] !== toast) {
    const tmp8 = width(toast, sharedValue);
    _require = tmp8;
    cResult[0] = toast;
    cResult[1] = tmp8;
    cResult[2] = toast.key;
  } else {
    _require = cResult[1];
  }
  content();
  const tmpResult = tmp(cleanUp[9]);
  sharedValue = tmpResult.useSharedValue(0);
  size = state(tmp2[10])();
  width = size.width;
  const height = size.height;
  const tmpResult7 = tmp(cleanUp[11]);
  const mobileQuestDockHeight = tmpResult7.useMobileQuestDockHeight();
  const top = state(tmp2[12])().top;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    items = [mobileQuestDockHeight];
    cResult[3] = items;
    tmp12 = items;
  } else {
    tmp12 = cResult[3];
  }
  if (cResult[4] !== tmp4.disableAnimations) {
    class P {
      constructor() {
        flag = closure_6.useReducedMotion;
        if (!flag) {
          tmp = closure_0;
          flag = closure_0.disableAnimations;
        }
        if (flag == null) {
          flag = false;
        }
        return flag;
      }
    }
    cResult[4] = tmp4.disableAnimations;
    cResult[5] = P;
  } else {
    class P {
      constructor() {
        flag = closure_6.useReducedMotion;
        if (!flag) {
          tmp = closure_0;
          flag = closure_0.disableAnimations;
        }
        if (flag == null) {
          flag = false;
        }
        return flag;
      }
    }
  }
  const tmpResult8 = tmp(cleanUp[13]);
  const stateFromStores = tmpResult8.useStateFromStores(tmp12, P);
  content = tmp4.content;
  const tmpResult9 = tmp(cleanUp[14]);
  const isScreenReaderEnabled = tmpResult9.useIsScreenReaderEnabled();
  if (null != content) {
    class P {
      constructor() {
        flag = closure_6.useReducedMotion;
        if (!flag) {
          tmp = closure_0;
          flag = closure_0.disableAnimations;
        }
        if (flag == null) {
          flag = false;
        }
        return flag;
      }
    }
  }
  constants = tmp17;
  const str = "top";
  if (undefined !== tmp4.position) {
    class P {
      constructor() {
        flag = closure_6.useReducedMotion;
        if (!flag) {
          tmp = closure_0;
          flag = closure_0.disableAnimations;
        }
        if (flag == null) {
          flag = false;
        }
        return flag;
      }
    }
  }
  const tmpResult10 = tmp(cleanUp[9]);
  const sharedValue1 = tmpResult10.useSharedValue(stateFromStores ? tmp18.END : tmp18.START);
  const tmpResult11 = tmp(cleanUp[15]);
  const youBarTotalHeight = tmpResult11.useYouBarTotalHeight(8);
  const tmpResult12 = tmp(cleanUp[9]);
  class U {
    constructor() {
      tmp = "top" === position;
      if (tmp) {
        tmp7 = top;
        num2 = 8;
        sum = top + 8;
      } else {
        tmp2 = height;
        tmp3 = closure_3;
        tmp4 = closure_6;
        num = 8;
        tmp5 = closure_13;
        sum = height - closure_3.get() - closure_6 - 8 - closure_13;
      }
      tmp8 = closure_0;
      tmp9 = closure_2;
      tmp10 = closure_0(closure_2[9]);
      obj = closure_12;
      interpolate = tmp10.interpolate;
      value = closure_12.get();
      tmp12 = closure_11;
      if (tmp) {
        diff1 = c12;
      } else {
        tmp13 = height;
        tmp14 = closure_6;
        tmp16 = closure_3;
        diff = height - closure_6;
        tmp17 = closure_13;
        diff1 = diff - closure_3.get() - closure_13;
      }
      items = [, ];
      items[0] = diff1;
      items[1] = sum;
      interpolateResult = interpolate(value, tmp12, items);
      tmp20 = closure_8;
      if (tmp20) {
        value1 = obj.get();
      } else {
        tmp8Result = tmp8(tmp9[16]);
        tmp21 = closure_13;
        value1 = tmp8Result.withSpring(obj.get(), closure_13);
      }
      obj1 = { opacity: value1, transform: null, maxWidth: null };
      withSpringResult = interpolateResult;
      if (!tmp20) {
        tmp8Result1 = tmp8(tmp9[16]);
        tmp25 = closure_14;
        fn = function t() { /* body not rendered: F148035 */ };
        obj5 = { state: null, TransitionStates: null, runOnJS: null, cleanUp: null };
        tmp26 = state;
        obj5.state = state;
        withSpring = tmp8Result1.withSpring;
        obj5.TransitionStates = tmp8(tmp9[17]).TransitionStates;
        obj5.runOnJS = tmp8(tmp9[9]).runOnJS;
        tmp27 = cleanUp;
        obj5.cleanUp = cleanUp;
        fn.__closure = obj5;
        num3 = 633151838569;
        fn.__workletHash = 633151838569;
        tmp28 = closure_16;
        fn.__initData = closure_16;
        str = "respect-motion-settings";
        tmp29 = tmp8Result1;
        tmp30 = interpolateResult;
        tmp31 = fn;
        withSpringResult = withSpring(interpolateResult, closure_14, "respect-motion-settings", fn);
      }
      items1 = [];
      items1[0] = { translateY: withSpringResult };
      obj1.transform = items1;
      obj1.maxWidth = width - 32;
      return obj1;
    }
  }
  let obj2 = { position: str, safeAreaTop: top, CONTAINER_DISTANCE_VERTICAL: 8, screenHeight: height, toastHeight: sharedValue, bottomTabsHeight: mobileQuestDockHeight, youBarHeight: youBarTotalHeight, interpolate: tmp(tmp2[9]).interpolate, animationState: sharedValue1, ANIMATION_STATE_INPUT: str, CONTAINER_TOP_POSITION_START: sharedValue1, isReducedMotion: stateFromStores, withSpring: tmp(tmp2[16]).withSpring, OPACITY_SPRING_PHYSICS: youBarTotalHeight, TOAST_SPRING_PHYSICS, state, TransitionStates: tmp(tmp2[17]).TransitionStates, runOnJS: tmp(tmp2[9]).runOnJS, cleanUp, screenWidth: width, CONTAINER_DISTANCE_SIDES: 16 };
  U.__closure = obj2;
  U.__workletHash = 16987845704059;
  U.__initData = __initData;
  const animatedStyle = tmpResult12.useAnimatedStyle(U);
  if (cResult[6] === sharedValue1) {
    class P {
      constructor() {
        flag = closure_6.useReducedMotion;
        if (!flag) {
          tmp = closure_0;
          flag = closure_0.disableAnimations;
        }
        if (flag == null) {
          flag = false;
        }
        return flag;
      }
    }
  }
  class J {
    constructor() {
      if (state === closure_0(closure_2[17]).TransitionStates.YEETED) {
        tmp4 = closure_12;
        tmp5 = closure_10;
        result = closure_12.set(closure_10.START);
        tmp7 = closure_8;
        if (tmp7) {
          tmp8 = cleanUp;
          tmp9 = cleanUp();
        }
      } else {
        tmp = closure_12;
        tmp2 = closure_10;
        result1 = closure_12.set(closure_10.END);
      }
      return;
    }
  }
  let items1 = [state, sharedValue1, stateFromStores, cleanUp];
  cResult[6] = sharedValue1;
  cResult[7] = cleanUp;
  cResult[8] = stateFromStores;
  cResult[9] = state;
  cResult[10] = J;
  cResult[11] = items1;
}) : ((toast) => {
  let items3;
  let obj7;
  let tmp17;
  let tmp6Result;
  toast = toast.toast;
  const key = toast.key;
  const merged = Object.assign(toast, Object.assign({ key: 0 }));
  const state = toast.state;
  const cleanUp = toast.cleanUp;
  let content;
  let closure_10;
  let str;
  let sharedValue1;
  let youBarTotalHeight;
  const tmp2 = content();
  let obj = merged(cleanUp[9]);
  const sharedValue = obj.useSharedValue(0);
  size = state(cleanUp[10])();
  const width = size.width;
  const height = size.height;
  let obj2 = merged(cleanUp[11]);
  const mobileQuestDockHeight = obj2.useMobileQuestDockHeight();
  const top = state(cleanUp[12])().top;
  let obj3 = merged(cleanUp[13]);
  items = [mobileQuestDockHeight];
  const stateFromStores = obj3.useStateFromStores(items, () => {
    let flag = AccessibilityStore.useReducedMotion || merged.disableAnimations;
    if (flag == null) {
      flag = false;
    }
    return flag;
  });
  content = merged.content;
  let tmp10 = null != content;
  const obj4 = merged(cleanUp[14]);
  const isScreenReaderEnabled = obj4.useIsScreenReaderEnabled();
  if (tmp10) {
    tmp10 = typeof content === "string";
  }
  closure_10 = tmp10;
  const position = merged.position;
  str = "top";
  if (undefined !== position) {
    str = position;
  }
  const tmp3Result = merged(cleanUp[9]);
  sharedValue1 = tmp3Result.useSharedValue(stateFromStores ? tmp11.END : tmp11.START);
  const tmp3Result3 = merged(cleanUp[15]);
  youBarTotalHeight = tmp3Result3.useYouBarTotalHeight(8);
  const tmp3Result4 = merged(cleanUp[9]);
  class E {
    constructor() {
      tmp = "top" === position;
      if (tmp) {
        tmp7 = top;
        num2 = 8;
        sum = top + 8;
      } else {
        tmp2 = height;
        tmp3 = closure_3;
        tmp4 = closure_6;
        num = 8;
        tmp5 = closure_13;
        sum = height - closure_3.get() - closure_6 - 8 - closure_13;
      }
      tmp8 = closure_0;
      tmp9 = closure_2;
      tmp10 = closure_0(closure_2[9]);
      obj = closure_12;
      interpolate = tmp10.interpolate;
      value = closure_12.get();
      tmp12 = closure_11;
      if (tmp) {
        diff1 = c12;
      } else {
        tmp13 = height;
        tmp14 = closure_6;
        tmp16 = closure_3;
        diff = height - closure_6;
        tmp17 = closure_13;
        diff1 = diff - closure_3.get() - closure_13;
      }
      items = [, ];
      items[0] = diff1;
      items[1] = sum;
      interpolateResult = interpolate(value, tmp12, items);
      tmp20 = closure_8;
      if (tmp20) {
        value1 = obj.get();
      } else {
        tmp8Result = tmp8(tmp9[16]);
        tmp21 = closure_13;
        value1 = tmp8Result.withSpring(obj.get(), closure_13);
      }
      obj1 = { opacity: value1, transform: null, maxWidth: null };
      withSpringResult = interpolateResult;
      if (!tmp20) {
        tmp8Result1 = tmp8(tmp9[16]);
        tmp25 = closure_14;
        fn = function t(arg0) {
          const tmp = arg0 && state === merged(cleanUp[17]).TransitionStates.YEETED;
          if (tmp) {
            const obj = merged(cleanUp[9]);
            obj.runOnJS(closure_1_2)();
          }
        };
        obj5 = { state: null, TransitionStates: null, runOnJS: null, cleanUp: null };
        tmp26 = state;
        obj5.state = state;
        withSpring = tmp8Result1.withSpring;
        obj5.TransitionStates = tmp8(tmp9[17]).TransitionStates;
        obj5.runOnJS = tmp8(tmp9[9]).runOnJS;
        tmp27 = cleanUp;
        obj5.cleanUp = cleanUp;
        fn.__closure = obj5;
        num3 = 6906278948847;
        fn.__workletHash = 6906278948847;
        tmp28 = closure_18;
        fn.__initData = closure_18;
        str = "respect-motion-settings";
        tmp29 = tmp8Result1;
        tmp30 = interpolateResult;
        tmp31 = fn;
        withSpringResult = withSpring(interpolateResult, closure_14, "respect-motion-settings", fn);
      }
      items1 = [];
      items1[0] = { translateY: withSpringResult };
      obj1.transform = items1;
      obj1.maxWidth = width - 32;
      return obj1;
    }
  }
  E.__closure = { position: str, safeAreaTop: top, CONTAINER_DISTANCE_VERTICAL: 8, screenHeight: height, toastHeight: sharedValue, bottomTabsHeight: mobileQuestDockHeight, youBarHeight: youBarTotalHeight, interpolate: merged(cleanUp[9]).interpolate, animationState: sharedValue1, ANIMATION_STATE_INPUT: str, CONTAINER_TOP_POSITION_START: sharedValue1, isReducedMotion: stateFromStores, withSpring: merged(cleanUp[16]).withSpring, OPACITY_SPRING_PHYSICS: youBarTotalHeight, TOAST_SPRING_PHYSICS, state, TransitionStates: merged(cleanUp[17]).TransitionStates, runOnJS: merged(cleanUp[9]).runOnJS, cleanUp, screenWidth: width, CONTAINER_DISTANCE_SIDES: 16 };
  E.__workletHash = 9658504056121;
  E.__initData = __initData3;
  let items1 = [state, sharedValue1, stateFromStores, cleanUp];
  ({ position: str, safeAreaTop: top, CONTAINER_DISTANCE_VERTICAL: 8, screenHeight: height, toastHeight: sharedValue, bottomTabsHeight: mobileQuestDockHeight, youBarHeight: youBarTotalHeight, interpolate: merged(cleanUp[9]).interpolate, animationState: sharedValue1, ANIMATION_STATE_INPUT: str, CONTAINER_TOP_POSITION_START: sharedValue1, isReducedMotion: stateFromStores, withSpring: merged(cleanUp[16]).withSpring, OPACITY_SPRING_PHYSICS: youBarTotalHeight, TOAST_SPRING_PHYSICS, state, TransitionStates: merged(cleanUp[17]).TransitionStates, runOnJS: merged(cleanUp[9]).runOnJS, cleanUp, screenWidth: width, CONTAINER_DISTANCE_SIDES: 16 });
  const animatedStyle = tmp3Result4.useAnimatedStyle(E);
  const effect = height.useEffect(() => {
    if (state === native2.TransitionStates.YEETED) {
      const result = sharedValue1.set(obj3.START);
      if (stateFromStores) {
        cleanUp();
      }
    } else {
      const result1 = sharedValue1.set(obj3.END);
    }
  }, items1);
  const items2 = [tmp10, content];
  const effect1 = height.useEffect(() => {
    if (closure_10) {
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      AccessibilityAnnouncer.announce(content);
    }
  }, items2);
  if (!tmp10) {
    const obj6 = {
      pointerEvents: "none",
      style: items3,
      onLayout(nativeEvent) {
          const result = sharedValue.set(nativeEvent.nativeEvent.layout.height);
        },
      children: stateFromStores(tmp6Result, obj7, key)
    };
    items3 = [tmp2.container, animatedStyle];
    const View = tmp6(tmp4[9]).View;
    obj7 = {};
    tmp6Result = state(cleanUp[19]);
    const merged1 = Object.assign(merged);
    tmp17 = stateFromStores(View, obj6);
  } else {
    tmp17 = null;
  }
  return tmp17;
});
const memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let stateFromStoresArray;
  let tmp11;
  let tmp4;
  let tmp5;
  let tmp8;
  let tmp9;
  const tmp = stateFromStoresArray;
  let obj = stateFromStoresArray(576);
  const cResult = obj.c(7);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    items = [ToastStore];
    const fn = function n() {
      content = content.getContent();
      if (null == content) {
        items = [];
      } else {
        items = [content];
      }
      return items;
    };
    let num = 0;
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = tmp(504);
  stateFromStoresArray = tmpResult.useStateFromStoresArray(tmp4, tmp5);
  if (cResult[2] !== stateFromStoresArray) {
    const fn2 = function u() {
      if (0 !== stateFromStoresArray.length) {
        let num = tmp[0].toastDurationMs;
        const _setTimeout = setTimeout;
        if (num == null) {
          num = 2000;
        }
        let closure_0 = _setTimeout(() => {
          const obj = closure_1_1(closure_1_2[21]);
          return obj.close();
        }, num);
        return () => clearTimeout(closure_0);
      }
    };
    const items1 = [stateFromStoresArray];
    cResult[2] = stateFromStoresArray;
    cResult[3] = fn2;
    cResult[4] = items1;
    tmp9 = items1;
    tmp8 = fn2;
  } else {
    tmp8 = cResult[3];
    tmp9 = cResult[4];
  }
  const effect = react.useEffect(tmp8, tmp9);
  if (cResult[5] !== stateFromStoresArray) {
    const tmp16 = jsx(tmp(4589).TransitionGroup, { items: stateFromStoresArray, renderItem, getItemKey, wrapChildren });
    cResult[5] = stateFromStoresArray;
    cResult[6] = tmp16;
    tmp11 = tmp16;
  } else {
    tmp11 = cResult[6];
  }
  return tmp11;
}) : (() => {
  let stateFromStoresArray;
  let obj = stateFromStoresArray(504);
  items = [ToastStore];
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    content = content.getContent();
    if (null == content) {
      items = [];
    } else {
      items = [content];
    }
    return items;
  });
  const items1 = [stateFromStoresArray];
  const effect = react.useEffect(() => {
    if (0 !== stateFromStoresArray.length) {
      let num = tmp[0].toastDurationMs;
      const _setTimeout = setTimeout;
      if (num == null) {
        num = 2000;
      }
      let closure_0 = _setTimeout(() => {
        const obj = closure_1_1(closure_1_2[21]);
        return obj.close();
      }, num);
      return () => clearTimeout(closure_0);
    }
  }, items1);
  return jsx(stateFromStoresArray(4589).TransitionGroup, { items: stateFromStoresArray, renderItem, getItemKey, wrapChildren });
}));
let size = size_mod;
let result = size.fileFinishedImporting("modules/toast/native/ToastContainer.tsx");

export default memoResult;