// discord_app/modules/toast/native/ToastContainer.tsx
import native from "../../../design/void/native.tsx";
import native2 from "../../../../discord_common/js/packages/design/native.tsx";
import AccessibilityAnnouncer2 from "../../../../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import spring from "../../../design/animation/reanimated/spring/spring.tsx";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import ToastStore from "ToastStore.tsx";

require = fn;
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
const jsx = fn(21).jsx;
const createStyles = fn(4896);
let obj = { container: { position: "absolute", alignSelf: "center", flexDirection: "row", justifyContent: "center", shadowColor: fn(5627).TOAST_CONTAINER_SHADOW_COLOR } };
let closure_9 = createStyles.createStyles(obj);
let obj4 = { START: 0, [0]: "START", END: 1, [1]: "END" };
let items = [, ];
({ START: arr[0], END: arr[1] } = obj4);
let c12 = -30;
let closure_13 = { mass: 0.1, damping: 10, stiffness: 100, overshootClamping: true };
const TOAST_SPRING_PHYSICS = { mass: 0.35, damping: 15, stiffness: 350, restDisplacementThreshold: 0.1, restSpeedThreshold: 0.1 };
const __initData = { code: "function ToastContainerTsx1(){const{position,safeAreaTop,CONTAINER_DISTANCE_VERTICAL,screenHeight,toastHeight,bottomTabsHeight,youBarHeight,interpolate,animationState,ANIMATION_STATE_INPUT,CONTAINER_TOP_POSITION_START,isReducedMotion,withSpring,OPACITY_SPRING_PHYSICS,TOAST_SPRING_PHYSICS,state,TransitionStates,runOnJS,cleanUp,screenWidth,CONTAINER_DISTANCE_SIDES}=this.__closure;const verticalPositionEnd=position===\"top\"?safeAreaTop+CONTAINER_DISTANCE_VERTICAL:screenHeight-toastHeight.get()-bottomTabsHeight-CONTAINER_DISTANCE_VERTICAL-youBarHeight;const translateY=interpolate(animationState.get(),ANIMATION_STATE_INPUT,[position===\"top\"?CONTAINER_TOP_POSITION_START:screenHeight-bottomTabsHeight-toastHeight.get()-youBarHeight,verticalPositionEnd]);return{opacity:!isReducedMotion?withSpring(animationState.get(),OPACITY_SPRING_PHYSICS):animationState.get(),transform:[{translateY:!isReducedMotion?withSpring(translateY,TOAST_SPRING_PHYSICS,\"respect-motion-settings\",function(finished){if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}):translateY}],maxWidth:screenWidth-CONTAINER_DISTANCE_SIDES*2};}" };
const __initData2 = { code: "function ToastContainerTsx2(finished){const{state,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}" };
const __initData3 = { code: "function ToastContainerTsx3(){const{position,safeAreaTop,CONTAINER_DISTANCE_VERTICAL,screenHeight,toastHeight,bottomTabsHeight,youBarHeight,interpolate,animationState,ANIMATION_STATE_INPUT,CONTAINER_TOP_POSITION_START,isReducedMotion,withSpring,OPACITY_SPRING_PHYSICS,TOAST_SPRING_PHYSICS,state,TransitionStates,runOnJS,cleanUp,screenWidth,CONTAINER_DISTANCE_SIDES}=this.__closure;const verticalPositionEnd=position==='top'?safeAreaTop+CONTAINER_DISTANCE_VERTICAL:screenHeight-toastHeight.get()-bottomTabsHeight-CONTAINER_DISTANCE_VERTICAL-youBarHeight;const translateY=interpolate(animationState.get(),ANIMATION_STATE_INPUT,[position==='top'?CONTAINER_TOP_POSITION_START:screenHeight-bottomTabsHeight-toastHeight.get()-youBarHeight,verticalPositionEnd]);return{opacity:!isReducedMotion?withSpring(animationState.get(),OPACITY_SPRING_PHYSICS):animationState.get(),transform:[{translateY:!isReducedMotion?withSpring(translateY,TOAST_SPRING_PHYSICS,'respect-motion-settings',function(finished){if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}):translateY}],maxWidth:screenWidth-CONTAINER_DISTANCE_SIDES*2};}" };
const __initData4 = { code: "function ToastContainerTsx4(finished){const{state,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}" };
let ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? ((cleanUp) => {
  const cResult = require("c").c(28);
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
  let obj = require("c");
  sharedValue = require("ReanimatedRexport").useSharedValue(0);
  const size = state(tmp2[10])();
  width = size.width;
  const height = size.height;
  const tmpResult = require("ReanimatedRexport");
  const mobileQuestDockHeight = require("QuestHooks").useMobileQuestDockHeight();
  const top = state(tmp2[12])().top;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    items = [mobileQuestDockHeight];
    cResult[3] = items;
    let tmp12 = items;
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
  const tmpResult7 = require("QuestHooks");
  const stateFromStores = require("initialize").useStateFromStores(tmp12, P);
  content = tmp4.content;
  const tmpResult8 = require("initialize");
  const isScreenReaderEnabled = require("useIsScreenReaderEnabled").useIsScreenReaderEnabled();
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
  obj4 = null != content;
  const tmpResult9 = require("useIsScreenReaderEnabled");
  const sharedValue1 = require("ReanimatedRexport").useSharedValue(stateFromStores ? tmp18.END : tmp18.START);
  const tmpResult10 = require("ReanimatedRexport");
  const youBarTotalHeight = require("useYouBarTotalHeight").useYouBarTotalHeight(8);
  const tmpResult11 = require("useYouBarTotalHeight");
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
      obj = closure_0(closure_2[9]);
      obj2 = closure_12;
      value = closure_12.get();
      tmp11 = closure_11;
      if (tmp) {
        diff1 = c12;
      } else {
        tmp12 = height;
        tmp13 = closure_6;
        tmp15 = closure_3;
        diff = height - closure_6;
        tmp16 = closure_13;
        diff1 = diff - closure_3.get() - closure_13;
      }
      items = [, ];
      items[0] = diff1;
      items[1] = sum;
      interpolateResult = obj.interpolate(value, tmp11, items);
      tmp19 = closure_8;
      if (closure_8) {
        value1 = obj2.get();
      } else {
        tmp8Result = tmp8(tmp9[16]);
        tmp20 = closure_13;
        value1 = tmp8Result.withSpring(obj2.get(), closure_13);
      }
      obj1 = { opacity: value1, transform: null, maxWidth: null };
      withSpringResult = interpolateResult;
      if (!tmp19) {
        tmp8Result1 = tmp8(tmp9[16]);
        tmp23 = closure_14;
        fn = function t() { ... };
        obj7 = { state: null, TransitionStates: null, runOnJS: null, cleanUp: null };
        tmp24 = state;
        obj7.state = state;
        obj7.TransitionStates = tmp8(tmp9[17]).TransitionStates;
        obj7.runOnJS = tmp8(tmp9[9]).runOnJS;
        tmp25 = cleanUp;
        obj7.cleanUp = cleanUp;
        fn.__closure = obj7;
        num3 = 633151838569;
        fn.__workletHash = 633151838569;
        tmp26 = closure_16;
        fn.__initData = closure_16;
        str = "respect-motion-settings";
        tmp27 = tmp8Result1;
        tmp28 = interpolateResult;
        tmp29 = fn;
        withSpringResult = tmp8Result1.withSpring(interpolateResult, closure_14, "respect-motion-settings", fn);
      }
      items1 = [];
      items1[0] = { translateY: withSpringResult };
      obj1.transform = items1;
      obj1.maxWidth = width - 32;
      return obj1;
    }
  }
  const tmpResult12 = require("ReanimatedRexport");
  U.__closure = { position: "top", safeAreaTop: top, CONTAINER_DISTANCE_VERTICAL: 8, screenHeight: height, toastHeight: sharedValue, bottomTabsHeight: mobileQuestDockHeight, youBarHeight: youBarTotalHeight, interpolate: require("ReanimatedRexport").interpolate, animationState: sharedValue1, ANIMATION_STATE_INPUT: "top", CONTAINER_TOP_POSITION_START: sharedValue1, isReducedMotion: stateFromStores, withSpring: require("spring").withSpring, OPACITY_SPRING_PHYSICS: youBarTotalHeight, TOAST_SPRING_PHYSICS, state, TransitionStates: require("native").TransitionStates, runOnJS: require("ReanimatedRexport").runOnJS, cleanUp, screenWidth: width, CONTAINER_DISTANCE_SIDES: 16 };
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
        if (closure_8) {
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
  const obj2 = { position: "top", safeAreaTop: top, CONTAINER_DISTANCE_VERTICAL: 8, screenHeight: height, toastHeight: sharedValue, bottomTabsHeight: mobileQuestDockHeight, youBarHeight: youBarTotalHeight, interpolate: require("ReanimatedRexport").interpolate, animationState: sharedValue1, ANIMATION_STATE_INPUT: "top", CONTAINER_TOP_POSITION_START: sharedValue1, isReducedMotion: stateFromStores, withSpring: require("spring").withSpring, OPACITY_SPRING_PHYSICS: youBarTotalHeight, TOAST_SPRING_PHYSICS, state, TransitionStates: require("native").TransitionStates, runOnJS: require("ReanimatedRexport").runOnJS, cleanUp, screenWidth: width, CONTAINER_DISTANCE_SIDES: 16 };
}) : ((toast) => {
  toast = toast.toast;
  const merged = Object.assign(toast, Object.assign({ key: 0 }));
  state = toast.state;
  const cleanUp = toast.cleanUp;
  let content;
  closure_10 = undefined;
  let str;
  let sharedValue1;
  let youBarTotalHeight;
  const tmp2 = content();
  const sharedValue = merged(cleanUp[9]).useSharedValue(0);
  const size = state(cleanUp[10])();
  const width = size.width;
  const height = size.height;
  let obj = merged(cleanUp[9]);
  const mobileQuestDockHeight = merged(cleanUp[11]).useMobileQuestDockHeight();
  const top = state(cleanUp[12])().top;
  const obj2 = merged(cleanUp[11]);
  items = [mobileQuestDockHeight];
  const stateFromStores = merged(cleanUp[13]).useStateFromStores(items, () => {
    let flag = AccessibilityStore.useReducedMotion;
    if (!flag) {
      flag = merged.disableAnimations;
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  });
  content = merged.content;
  let obj3 = merged(cleanUp[13]);
  let tmp10 = null != content;
  const isScreenReaderEnabled = merged(cleanUp[14]).useIsScreenReaderEnabled();
  if (tmp10) {
    tmp10 = typeof content === "string";
  }
  closure_10 = tmp10;
  const position = merged.position;
  str = "top";
  if (undefined !== position) {
    str = position;
  }
  obj4 = merged(cleanUp[14]);
  sharedValue1 = merged(cleanUp[9]).useSharedValue(stateFromStores ? tmp11.END : tmp11.START);
  const tmp3Result = merged(cleanUp[9]);
  youBarTotalHeight = merged(cleanUp[15]).useYouBarTotalHeight(8);
  const tmp3Result3 = merged(cleanUp[15]);
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
      obj = closure_0(closure_2[9]);
      obj2 = closure_12;
      value = closure_12.get();
      tmp11 = closure_11;
      if (tmp) {
        diff1 = c12;
      } else {
        tmp12 = height;
        tmp13 = closure_6;
        tmp15 = closure_3;
        diff = height - closure_6;
        tmp16 = closure_13;
        diff1 = diff - closure_3.get() - closure_13;
      }
      items = [, ];
      items[0] = diff1;
      items[1] = sum;
      interpolateResult = obj.interpolate(value, tmp11, items);
      tmp19 = closure_8;
      if (closure_8) {
        value1 = obj2.get();
      } else {
        tmp8Result = tmp8(tmp9[16]);
        tmp20 = closure_13;
        value1 = tmp8Result.withSpring(obj2.get(), closure_13);
      }
      obj1 = { opacity: value1, transform: null, maxWidth: null };
      withSpringResult = interpolateResult;
      if (!tmp19) {
        tmp8Result1 = tmp8(tmp9[16]);
        tmp23 = closure_14;
        fn = function t(arg0) {
          let tmp = arg0;
          if (arg0) {
            tmp = state === merged(cleanUp[17]).TransitionStates.YEETED;
          }
          if (tmp) {
            merged(cleanUp[9]).runOnJS(closure_1_2)();
            const obj = merged(cleanUp[9]);
          }
        };
        obj7 = { state: null, TransitionStates: null, runOnJS: null, cleanUp: null };
        tmp24 = state;
        obj7.state = state;
        obj7.TransitionStates = tmp8(tmp9[17]).TransitionStates;
        obj7.runOnJS = tmp8(tmp9[9]).runOnJS;
        tmp25 = cleanUp;
        obj7.cleanUp = cleanUp;
        fn.__closure = obj7;
        num3 = 6906278948847;
        fn.__workletHash = 6906278948847;
        tmp26 = closure_18;
        fn.__initData = closure_18;
        str = "respect-motion-settings";
        tmp27 = tmp8Result1;
        tmp28 = interpolateResult;
        tmp29 = fn;
        withSpringResult = tmp8Result1.withSpring(interpolateResult, closure_14, "respect-motion-settings", fn);
      }
      items1 = [];
      items1[0] = { translateY: withSpringResult };
      obj1.transform = items1;
      obj1.maxWidth = width - 32;
      return obj1;
    }
  }
  const tmp3Result4 = merged(cleanUp[9]);
  E.__closure = { position: str, safeAreaTop: top, CONTAINER_DISTANCE_VERTICAL: 8, screenHeight: height, toastHeight: sharedValue, bottomTabsHeight: mobileQuestDockHeight, youBarHeight: youBarTotalHeight, interpolate: merged(cleanUp[9]).interpolate, animationState: sharedValue1, ANIMATION_STATE_INPUT: str, CONTAINER_TOP_POSITION_START: sharedValue1, isReducedMotion: stateFromStores, withSpring: merged(cleanUp[16]).withSpring, OPACITY_SPRING_PHYSICS: youBarTotalHeight, TOAST_SPRING_PHYSICS, state, TransitionStates: merged(cleanUp[17]).TransitionStates, runOnJS: merged(cleanUp[9]).runOnJS, cleanUp, screenWidth: width, CONTAINER_DISTANCE_SIDES: 16 };
  E.__workletHash = 9658504056121;
  E.__initData = __initData3;
  let items1 = [state, sharedValue1, stateFromStores, cleanUp];
  const animatedStyle = tmp3Result4.useAnimatedStyle(E);
  const effect = height.useEffect(() => {
    if (state === native2.TransitionStates.YEETED) {
      const result = sharedValue1.set(obj4.START);
      if (stateFromStores) {
        cleanUp();
      }
    } else {
      const result1 = sharedValue1.set(obj4.END);
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
    const obj6 = { pointerEvents: "none", style: null, onLayout: null, children: null };
    const items3 = [tmp2.container, animatedStyle];
    obj6.style = items3;
    obj6.onLayout = function onLayout(nativeEvent) {
      const result = sharedValue.set(nativeEvent.nativeEvent.layout.height);
    };
    const obj7 = {};
    const merged1 = Object.assign(merged);
    obj6.children = stateFromStores(tmp6(tmp4[19]), obj7, toast.key);
    let tmp17 = stateFromStores(tmp6(tmp4[9]).View, obj6);
    const tmp6Result = tmp6(tmp4[19]);
  } else {
    tmp17 = null;
  }
  return tmp17;
});
ReactCompilerGating = fn(558);
let obj3 = { position: "absolute", alignSelf: "center", flexDirection: "row", justifyContent: "center", shadowColor: fn(5627).TOAST_CONTAINER_SHADOW_COLOR };
let size = fn(2);
let result = size.fileFinishedImporting("modules/toast/native/ToastContainer.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = stateFromStoresArray(576).c(7);
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
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const obj = stateFromStoresArray(576);
  stateFromStoresArray = stateFromStoresArray(504).useStateFromStoresArray(tmp4, tmp5);
  if (cResult[2] !== stateFromStoresArray) {
    const fn2 = function u() {
      if (0 !== stateFromStoresArray.length) {
        let num = tmp[0].toastDurationMs;
        if (num == null) {
          num = 2000;
        }
        const timeout = setTimeout(() => closure_1_1(closure_1_2[21]).close(), num);
        return () => clearTimeout(closure_0);
      }
    };
    const items1 = [stateFromStoresArray];
    cResult[2] = stateFromStoresArray;
    cResult[3] = fn2;
    cResult[4] = items1;
    let tmp9 = items1;
    let tmp8 = fn2;
  } else {
    tmp8 = cResult[3];
    tmp9 = cResult[4];
  }
  const effect = noop.useEffect(tmp8, tmp9);
  if (cResult[5] !== stateFromStoresArray) {
    const obj2 = { items: stateFromStoresArray, renderItem, getItemKey, wrapChildren };
    const tmp16 = jsx(tmp(4595).TransitionGroup, { items: stateFromStoresArray, renderItem, getItemKey, wrapChildren });
    cResult[5] = stateFromStoresArray;
    cResult[6] = tmp16;
    let tmp11 = tmp16;
  } else {
    tmp11 = cResult[6];
  }
  return tmp11;
}) : (() => {
  items = [ToastStore];
  stateFromStoresArray = stateFromStoresArray(504).useStateFromStoresArray(items, () => {
    content = content.getContent();
    if (null == content) {
      items = [];
    } else {
      items = [content];
    }
    return items;
  });
  const items1 = [stateFromStoresArray];
  const effect = noop.useEffect(() => {
    if (0 !== stateFromStoresArray.length) {
      let num = tmp[0].toastDurationMs;
      if (num == null) {
        num = 2000;
      }
      const timeout = setTimeout(() => closure_1_1(closure_1_2[21]).close(), num);
      return () => clearTimeout(closure_0);
    }
  }, items1);
  return jsx(stateFromStoresArray(4595).TransitionGroup, { items: stateFromStoresArray, renderItem, getItemKey, wrapChildren });
}));