// discord_app/modules/launchpad/native/LaunchPadContainer.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import LAUNCH_PAD_SPRING_CONFIG from "LaunchPadConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
noopAll;
({ View: c3, StyleSheet } = get_ActivityIndicator);
({ LAUNCH_PAD_SPRING_CONFIG: c4, LaunchPadTypes: c5 } = LAUNCH_PAD_SPRING_CONFIG);
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { wrapper: null, container: null };
createCacheKey = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
createCacheKey.backgroundColor = "transparent";
createCacheKey[0] = createCacheKey;
let obj1 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj1.overflow = "hidden";
createCacheKey[1] = obj1;
let closure_8 = createCacheKey.createStyles(createCacheKey);
let closure_9 = { code: "function LaunchPadContainerTsx1(){const{windowDimensions}=this.__closure;return windowDimensions.get().height;}" };
let closure_10 = { code: "function LaunchPadContainerTsx2(height,lastHeight){const{updaters}=this.__closure;if(lastHeight==null)return;if(lastHeight<=height)return;updaters.onWindowHeightChange();}" };
let closure_11 = { code: "function LaunchPadContainerTsx3(){const{interpolate,launchPadSharedState,withSpring,windowDimensions,LAUNCH_PAD_SPRING_CONFIG}=this.__closure;return{borderRadius:interpolate(launchPadSharedState.get(),[0,1],[0,16]),transform:[{scale:withSpring(interpolate(launchPadSharedState.get(),[0,1],[1,(windowDimensions.get().width-16*3)/windowDimensions.get().width]),LAUNCH_PAD_SPRING_CONFIG,'animate-always')},{translateY:withSpring(interpolate(launchPadSharedState.get(),[0,1],[0,-4]),LAUNCH_PAD_SPRING_CONFIG,'animate-always')}]};}" };
const result = require("set").fileFinishedImporting("modules/launchpad/native/LaunchPadContainer.tsx");

export default function LaunchPadContainer(children) {
  let launchPadSharedState;
  updaters = undefined;
  dependencyMap = undefined;
  const tmp = callback2();
  const tmp4 = updaters(10513)();
  const tmp5 = updaters(16308)();
  launchPadSharedState = tmp5.launchPadSharedState;
  ({ launchPadPullTabState, launchPadShown, gestureState, updaters } = tmp5);
  ({ gesture, gestureRef } = updaters(16310)({ launchPadType: tmp4, launchPadSharedState, launchPadPullTabState, launchPadShown, gestureState, updaters }));
  const tmp7 = updaters(11554)();
  dependencyMap = tmp7;
  let obj = launchPadSharedState(4120);
  const fn = function o() {
    return store.get().height;
  };
  fn.__closure = { windowDimensions: tmp7 };
  fn.__workletHash = 9985296176902;
  fn.__initData = closure_9;
  const fn2 = function l(arg0, arg1) {
    if (null != arg1) {
      if (arg1 > arg0) {
        updaters.onWindowHeightChange();
      }
    }
  };
  fn2.__closure = { updaters };
  fn2.__workletHash = 418963589215;
  fn2.__initData = closure_10;
  const animatedReaction = obj.useAnimatedReaction(fn, fn2);
  obj1 = launchPadSharedState(4120);
  const fn3 = function v() {
    let obj = { borderRadius: launchPadSharedState(store[9]).interpolate(launchPadSharedState.get(), [0, 1], [0, 16]), transform: null };
    obj = { scale: null };
    const obj2 = launchPadSharedState(store[9]);
    const obj4 = launchPadSharedState(store[10]);
    const value = launchPadSharedState.get();
    const diff = store.get().width - 48;
    const items = [1, diff / store.get().width];
    obj[0] = obj4.withSpring(launchPadSharedState(store[9]).interpolate(value, [0, 1], items), closure_1_4, "animate-always");
    const items1 = [obj, ];
    obj = { translateY: null };
    const obj5 = launchPadSharedState(store[9]);
    const obj7 = launchPadSharedState(store[10]);
    obj[0] = obj7.withSpring(launchPadSharedState(store[9]).interpolate(launchPadSharedState.get(), [0, 1], [0, -4]), closure_1_4, "animate-always");
    items1[1] = obj;
    obj[1] = items1;
    return obj;
  };
  obj = { interpolate: launchPadSharedState(4120).interpolate, launchPadSharedState, withSpring: launchPadSharedState(4814).withSpring, windowDimensions: tmp7, LAUNCH_PAD_SPRING_CONFIG: closure_4 };
  fn3.__closure = obj;
  fn3.__workletHash = 13886247172712;
  fn3.__initData = closure_11;
  const animatedStyle = obj1.useAnimatedStyle(fn3);
  const MobileHomeDrawerExperiment = launchPadSharedState(4240).MobileHomeDrawerExperiment;
  obj = { value: gestureRef, children: null };
  obj1 = { gesture, children: null };
  let obj2 = { style: tmp.wrapper, children: null };
  let items = [tmp.container, animatedStyle];
  let items1 = [callback(updaters(4120).View, { style: items, children: children.children }), ];
  if (tmp4 !== constants.DISABLED) {
    const obj3 = { launchPadType: null, gestureState: null, launchPadShown: null, launchPadSharedState: null, launchPadPullTabState: null, updaters: null };
    obj3[0] = tmp4;
    obj3[1] = gestureState;
    obj3[2] = launchPadShown;
    obj3[3] = launchPadSharedState;
    obj3[4] = launchPadPullTabState;
    obj3[5] = updaters;
    const tmp10Result = tmp10(updaters(16311), obj3);
  }
  items1[1] = tmp10Result;
  obj2[1] = items1;
  obj1[1] = closure_7(closure_3, obj2);
  obj[1] = callback(launchPadSharedState(5533).GestureDetector, obj1);
  return callback(updaters(15368).Provider, obj);
};