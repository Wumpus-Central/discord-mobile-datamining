import importAllResult from "set";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import ToastStore from "ToastStore";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
function AnimatedToast(toast) {
  toast = toast.toast;
  const merged = Object.assign(toast, Object.create(null));
  const state = toast.state;
  const cleanUp = toast.cleanUp;
  let sharedValue;
  let width;
  let height;
  let mobileQuestDockHeight;
  let top;
  let stateFromStores;
  let content;
  let c10;
  let str;
  let sharedValue1;
  let youBarTotalHeight;
  let obj = merged(cleanUp[6]);
  sharedValue = obj.useSharedValue(0);
  const size = state(cleanUp[7])();
  width = size.width;
  height = size.height;
  let obj1 = merged(cleanUp[8]);
  mobileQuestDockHeight = obj1.useMobileQuestDockHeight();
  top = state(cleanUp[9])().top;
  const tmp2 = top();
  let items = [width];
  stateFromStores = merged(cleanUp[10]).useStateFromStores(items, () => {
    let flag = width.useReducedMotion;
    if (!flag) {
      flag = merged.disableAnimations;
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  });
  content = merged.content;
  const obj3 = merged(cleanUp[10]);
  let tmp10 = null != content;
  const isScreenReaderEnabled = merged(cleanUp[11]).useIsScreenReaderEnabled();
  if (tmp10) {
    tmp10 = typeof content === "y";
  }
  c10 = tmp10;
  const position = merged.position;
  str = "top";
  if (undefined !== position) {
    str = position;
  }
  let tmp3Result = tmp3(tmp4[6]);
  sharedValue1 = tmp3Result.useSharedValue(stateFromStores ? tmp11.END : tmp11.START);
  tmp3Result = tmp3(tmp4[12]);
  youBarTotalHeight = tmp3Result.useYouBarTotalHeight(8);
  const obj4 = merged(cleanUp[11]);
  let fn = function p() {
    if ("top" === str) {
      let sum = top + 8;
    } else {
      sum = height - sharedValue.get() - mobileQuestDockHeight - 8 - youBarTotalHeight;
    }
    let obj = merged(cleanUp[6]);
    let num3 = -30;
    let value = sharedValue1.get();
    if ("top" !== str) {
      const diff = height - mobileQuestDockHeight;
      num3 = diff - sharedValue.get() - youBarTotalHeight;
    }
    const items = [num3, sum];
    const interpolateResult = obj.interpolate(value, content, items);
    if (stateFromStores) {
      value = obj2.get();
    } else {
      let tmp8Result = tmp8(tmp9[13]);
      value = tmp8Result.withSpring(obj2.get(), c10);
    }
    obj = { opacity: value, transform: null, maxWidth: null };
    let withSpringResult = interpolateResult;
    if (!stateFromStores) {
      tmp8Result = tmp8(tmp9[13]);
      const fn = function t(arg0) {
        let tmp = arg0;
        if (arg0) {
          tmp = closure_1 === outer1_0(outer1_2[14]).TransitionStates.YEETED;
        }
        if (tmp) {
          outer1_0(outer1_2[6]).runOnJS(closure_2)();
          const obj = outer1_0(outer1_2[6]);
        }
      };
      obj = { state: null, TransitionStates: null, runOnJS: null, cleanUp: null };
      obj[0] = state;
      obj[1] = tmp8(tmp9[14]).TransitionStates;
      obj[2] = tmp8(tmp9[6]).runOnJS;
      obj[3] = cleanUp;
      fn.__closure = obj;
      fn.__workletHash = 633151838569;
      fn.__initData = youBarTotalHeight;
      withSpringResult = tmp8Result.withSpring(interpolateResult, str, "respect-motion-settings", fn);
    }
    const items1 = [{ translateY: withSpringResult }];
    obj[1] = items1;
    obj[2] = width - 32;
    return obj;
  };
  obj = { position: str, safeAreaTop: top, CONTAINER_DISTANCE_VERTICAL: 8, screenHeight: height, toastHeight: sharedValue, bottomTabsHeight: mobileQuestDockHeight, youBarHeight: youBarTotalHeight, interpolate: tmp3(tmp4[6]).interpolate, animationState: sharedValue1, ANIMATION_STATE_INPUT: content, CONTAINER_TOP_POSITION_START: -30, isReducedMotion: stateFromStores, withSpring: tmp3(tmp4[13]).withSpring, OPACITY_SPRING_PHYSICS: c10, TOAST_SPRING_PHYSICS: str, state, TransitionStates: tmp3(tmp4[14]).TransitionStates, runOnJS: tmp3(tmp4[6]).runOnJS, cleanUp, screenWidth: width, CONTAINER_DISTANCE_SIDES: 16 };
  fn.__closure = obj;
  fn.__workletHash = 3455640999355;
  fn.__initData = sharedValue1;
  let items1 = [state, sharedValue1, stateFromStores, cleanUp];
  const animatedStyle = merged(cleanUp[6]).useAnimatedStyle(fn);
  const effect = sharedValue.useEffect(() => {
    if (state === merged(cleanUp[14]).TransitionStates.YEETED) {
      const result = sharedValue1.set(stateFromStores.START);
      if (stateFromStores) {
        cleanUp();
      }
    } else {
      const result1 = sharedValue1.set(stateFromStores.END);
    }
  }, items1);
  const items2 = [tmp10, content];
  const effect1 = sharedValue.useEffect(() => {
    if (c10) {
      const AccessibilityAnnouncer = merged(cleanUp[15]).AccessibilityAnnouncer;
      AccessibilityAnnouncer.announce(content);
    }
  }, items2);
  if (!tmp10) {
    obj = { pointerEvents: "none", style: null, onLayout: null, children: null };
    const items3 = [tmp2.container, animatedStyle];
    obj[1] = items3;
    obj[2] = function onLayout(nativeEvent) {
      const result = sharedValue.set(nativeEvent.nativeEvent.layout.height);
    };
    obj1 = {};
    const merged1 = Object.assign(merged);
    obj[3] = mobileQuestDockHeight(tmp6(tmp4[16]), obj1, toast.key);
    let tmp17 = mobileQuestDockHeight(tmp6(tmp4[6]).View, obj);
    const tmp6Result = tmp6(tmp4[16]);
  } else {
    tmp17 = null;
  }
  return tmp17;
}
function renderItem(arg0, toast, state, cleanUp) {
  return <AnimatedToast key={arg0} toast={arg1} state={arg2} cleanUp={arg3} />;
}
function getItemKey(key) {
  return key.key;
}
function wrapChildren(children) {
  return jsx(require(1297) /* Button */.NonExpandingOverlayView, { children });
}
let c3 = importAllResult;
let obj = { container: null };
obj = { position: "absolute", alignSelf: "center", flexDirection: "row", justifyContent: "center", shadowColor: require("result").TOAST_CONTAINER_SHADOW_COLOR };
obj[0] = obj;
let closure_7 = createCacheKey.createStyles(obj);
createCacheKey = { START: 0, [0]: "START", END: 1, [1]: "END" };
let items = [, ];
({ START: arr[0], END: arr[1] } = createCacheKey);
let closure_10 = { mass: 0.1, damping: 10, stiffness: 100, overshootClamping: true };
let closure_11 = { mass: 0.35, damping: 15, stiffness: 350, restDisplacementThreshold: 0.1, restSpeedThreshold: 0.1 };
let closure_12 = { code: "function ToastContainerTsx1(){const{position,safeAreaTop,CONTAINER_DISTANCE_VERTICAL,screenHeight,toastHeight,bottomTabsHeight,youBarHeight,interpolate,animationState,ANIMATION_STATE_INPUT,CONTAINER_TOP_POSITION_START,isReducedMotion,withSpring,OPACITY_SPRING_PHYSICS,TOAST_SPRING_PHYSICS,state,TransitionStates,runOnJS,cleanUp,screenWidth,CONTAINER_DISTANCE_SIDES}=this.__closure;const verticalPositionEnd=position==='top'?safeAreaTop+CONTAINER_DISTANCE_VERTICAL:screenHeight-toastHeight.get()-bottomTabsHeight-CONTAINER_DISTANCE_VERTICAL-youBarHeight;const translateY=interpolate(animationState.get(),ANIMATION_STATE_INPUT,[position==='top'?CONTAINER_TOP_POSITION_START:screenHeight-bottomTabsHeight-toastHeight.get()-youBarHeight,verticalPositionEnd]);return{opacity:!isReducedMotion?withSpring(animationState.get(),OPACITY_SPRING_PHYSICS):animationState.get(),transform:[{translateY:!isReducedMotion?withSpring(translateY,TOAST_SPRING_PHYSICS,'respect-motion-settings',function(finished){if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}):translateY}],maxWidth:screenWidth-CONTAINER_DISTANCE_SIDES*2};}" };
let closure_13 = { code: "function ToastContainerTsx2(finished){const{state,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}" };
const memoResult = importAllResult.memo(() => {
  let obj = stateFromStoresArray(589);
  let items = [ToastStore];
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    content = content.getContent();
    if (null == content) {
      let items = [];
    } else {
      items = [content];
    }
    return items;
  });
  const items1 = [stateFromStoresArray];
  const effect = importAllResult.useEffect(() => {
    if (0 !== stateFromStoresArray.length) {
      let num = tmp[0].toastDurationMs;
      if (num == null) {
        num = 2000;
      }
      stateFromStoresArray = setTimeout(() => callback(table[18]).close(), num);
      return () => clearTimeout(closure_0);
    }
  }, items1);
  obj = { items: stateFromStoresArray, renderItem, getItemKey, wrapChildren };
  return jsx(stateFromStoresArray(4600).TransitionGroup, { items: stateFromStoresArray, renderItem, getItemKey, wrapChildren });
});
let result = require("ToastStore").fileFinishedImporting("modules/toast/native/ToastContainer.tsx");

export default memoResult;