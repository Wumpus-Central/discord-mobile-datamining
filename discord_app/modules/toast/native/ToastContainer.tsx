// discord_app/modules/toast/native/ToastContainer.tsx
import native from "../../../design/void/native.tsx";
import native2 from "../../../../discord_common/js/packages/design/native.tsx";
import AccessibilityAnnouncer2 from "../../../../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import spring from "../../../design/animation/reanimated/spring/spring.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import ToastStore from "ToastStore.tsx";

require = fn;
function AnimatedToast(toast) {
  toast = toast.toast;
  const merged = Object.assign(toast, Object.assign({ key: 0 }));
  const state = toast.state;
  const cleanUp = toast.cleanUp;
  let top;
  OPACITY_SPRING_PHYSICS = undefined;
  let str;
  let sharedValue1;
  let youBarTotalHeight;
  const tmp2 = top();
  const sharedValue = merged(cleanUp[6]).useSharedValue(0);
  const size = state(cleanUp[7])();
  const width = size.width;
  const height = size.height;
  let obj = merged(cleanUp[6]);
  const mobileQuestDockHeight = merged(cleanUp[8]).useMobileQuestDockHeight();
  top = state(cleanUp[9])().top;
  const obj2 = merged(cleanUp[8]);
  items = [width];
  const stateFromStores = merged(cleanUp[10]).useStateFromStores(items, () => {
    let flag = AccessibilityStore.useReducedMotion;
    if (!flag) {
      flag = merged.disableAnimations;
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  });
  const content = merged.content;
  let obj3 = merged(cleanUp[10]);
  let tmp10 = null != content;
  const isScreenReaderEnabled = merged(cleanUp[11]).useIsScreenReaderEnabled();
  if (tmp10) {
    tmp10 = typeof content === "string";
  }
  OPACITY_SPRING_PHYSICS = tmp10;
  const position = merged.position;
  str = "top";
  if (undefined !== position) {
    str = position;
  }
  obj4 = merged(cleanUp[11]);
  sharedValue1 = merged(cleanUp[6]).useSharedValue(stateFromStores ? tmp11.END : tmp11.START);
  const tmp3Result = merged(cleanUp[6]);
  youBarTotalHeight = merged(cleanUp[12]).useYouBarTotalHeight(8);
  const tmp3Result3 = merged(cleanUp[12]);
  let fn = function p() {
    if ("top" === str) {
      let sum = top + 8;
    } else {
      sum = height - sharedValue.get() - mobileQuestDockHeight - 8 - youBarTotalHeight;
    }
    let num3 = -30;
    value = sharedValue1.get();
    if ("top" !== str) {
      const diff = height - mobileQuestDockHeight;
      num3 = diff - sharedValue.get() - youBarTotalHeight;
    }
    items = [num3, sum];
    const interpolateResult = ReanimatedRexport.interpolate(value, items, items);
    if (stateFromStores) {
      value2 = sharedValue1.get();
    } else {
      value2 = spring.withSpring(sharedValue1.get(), closure_10);
      const tmp8Result = spring;
    }
    const obj3 = { opacity: value2, transform: null, maxWidth: null };
    let withSpringResult = interpolateResult;
    if (!stateFromStores) {
      const tmp8Result2 = spring;
      const fn = function t(arg0) {
        let tmp = arg0;
        if (arg0) {
          tmp = state === merged(cleanUp[14]).TransitionStates.YEETED;
        }
        if (tmp) {
          merged(cleanUp[6]).runOnJS(closure_1_2)();
          const obj = merged(cleanUp[6]);
        }
      };
      obj4 = { state, TransitionStates: native2.TransitionStates, runOnJS: ReanimatedRexport.runOnJS, cleanUp };
      fn.__closure = obj4;
      fn.__workletHash = 633151838569;
      fn.__initData = __initData;
      withSpringResult = tmp8Result2.withSpring(interpolateResult, closure_11, "respect-motion-settings", fn);
    }
    const items1 = [{ translateY: withSpringResult }];
    obj3.transform = items1;
    obj3.maxWidth = width - 32;
    return obj3;
  };
  const tmp3Result4 = merged(cleanUp[6]);
  fn.__closure = {
    position: str,
    safeAreaTop: top,
    CONTAINER_DISTANCE_VERTICAL: 8,
    screenHeight: height,
    toastHeight: sharedValue,
    bottomTabsHeight: mobileQuestDockHeight,
    youBarHeight: youBarTotalHeight,
    interpolate: merged(cleanUp[6]).interpolate,
    animationState: sharedValue1,
    ANIMATION_STATE_INPUT: content,
    CONTAINER_TOP_POSITION_START: -30,
    isReducedMotion: stateFromStores,
    withSpring: merged(cleanUp[13]).withSpring,
    OPACITY_SPRING_PHYSICS,
    TOAST_SPRING_PHYSICS: str,
    state,
    TransitionStates: merged(cleanUp[14]).TransitionStates,
    runOnJS: merged(cleanUp[6]).runOnJS,
    cleanUp,
    screenWidth: width,
    CONTAINER_DISTANCE_SIDES: 16,
  };
  fn.__workletHash = 3455640999355;
  fn.__initData = sharedValue1;
  let items1 = [state, sharedValue1, stateFromStores, cleanUp];
  const animatedStyle = tmp3Result4.useAnimatedStyle(fn);
  const effect = sharedValue.useEffect(() => {
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
  const effect1 = sharedValue.useEffect(() => {
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
    obj6.children = mobileQuestDockHeight(tmp6(tmp4[16]), obj7, toast.key);
    let tmp17 = mobileQuestDockHeight(tmp6(tmp4[6]).View, obj6);
    const tmp6Result = tmp6(tmp4[16]);
  } else {
    tmp17 = null;
  }
  return tmp17;
}
function renderItem(key, toast, state, cleanUp) {
  return <AnimatedToast key={key} toast={toast} state={state} cleanUp={cleanUp} />;
}
function getItemKey(key) {
  return key.key;
}
function wrapChildren(children) {
  return jsx(native.NonExpandingOverlayView, { children });
}
const jsx = fn(21).jsx;
const createStyles = fn(4756);
let obj = {
  container: {
    position: "absolute",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "center",
    shadowColor: fn(5653).TOAST_CONTAINER_SHADOW_COLOR,
  },
};
let closure_7 = createStyles.createStyles(obj);
let obj4 = { START: 0, [0]: "START", END: 1, [1]: "END" };
let items = [,];
({ START: arr[0], END: arr[1] } = obj4);
let OPACITY_SPRING_PHYSICS = { mass: 0.1, damping: 10, stiffness: 100, overshootClamping: true };
let closure_11 = { mass: 0.35, damping: 15, stiffness: 350, restDisplacementThreshold: 0.1, restSpeedThreshold: 0.1 };
let closure_12 = {
  code: "function ToastContainerTsx1(){const{position,safeAreaTop,CONTAINER_DISTANCE_VERTICAL,screenHeight,toastHeight,bottomTabsHeight,youBarHeight,interpolate,animationState,ANIMATION_STATE_INPUT,CONTAINER_TOP_POSITION_START,isReducedMotion,withSpring,OPACITY_SPRING_PHYSICS,TOAST_SPRING_PHYSICS,state,TransitionStates,runOnJS,cleanUp,screenWidth,CONTAINER_DISTANCE_SIDES}=this.__closure;const verticalPositionEnd=position==='top'?safeAreaTop+CONTAINER_DISTANCE_VERTICAL:screenHeight-toastHeight.get()-bottomTabsHeight-CONTAINER_DISTANCE_VERTICAL-youBarHeight;const translateY=interpolate(animationState.get(),ANIMATION_STATE_INPUT,[position==='top'?CONTAINER_TOP_POSITION_START:screenHeight-bottomTabsHeight-toastHeight.get()-youBarHeight,verticalPositionEnd]);return{opacity:!isReducedMotion?withSpring(animationState.get(),OPACITY_SPRING_PHYSICS):animationState.get(),transform:[{translateY:!isReducedMotion?withSpring(translateY,TOAST_SPRING_PHYSICS,'respect-motion-settings',function(finished){if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}):translateY}],maxWidth:screenWidth-CONTAINER_DISTANCE_SIDES*2};}",
};
let closure_13 = {
  code: "function ToastContainerTsx2(finished){const{state,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}",
};
let obj3 = {
  position: "absolute",
  alignSelf: "center",
  flexDirection: "row",
  justifyContent: "center",
  shadowColor: fn(5653).TOAST_CONTAINER_SHADOW_COLOR,
};
let size = fn(2);
let result = size.fileFinishedImporting("modules/toast/native/ToastContainer.tsx");

export default noop.memo(() => {
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
      const timeout = setTimeout(() => closure_1_1(closure_1_2[18]).close(), num);
      return () => clearTimeout(closure_0);
    }
  }, items1);
  return jsx(stateFromStoresArray(4466).TransitionGroup, {
    items: stateFromStoresArray,
    renderItem,
    getItemKey,
    wrapChildren,
  });
});
