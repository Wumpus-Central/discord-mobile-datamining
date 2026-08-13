// discord_app/modules/launchpad/native/LaunchPadContainer.tsx
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import LAUNCH_PAD_SPRING_CONFIG from "LAUNCH_PAD_SPRING_CONFIG";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let StyleSheet;
let c3;
let c4;
let c5;
let closure_6;
let error;
const require = arg1;
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
createCacheKey = createCacheKey.createStyles(createCacheKey);
let closure_9 = { code: "function LaunchPadContainerTsx1(){const{windowDimensions}=this.__closure;return windowDimensions.get().height;}" };
let closure_10 = { code: "function LaunchPadContainerTsx2(height,lastHeight){const{updaters}=this.__closure;if(lastHeight==null)return;if(lastHeight<=height)return;updaters.onWindowHeightChange();}" };
let closure_11 = { code: "function LaunchPadContainerTsx3(){const{interpolate,launchPadSharedState,withSpring,windowDimensions,LAUNCH_PAD_SPRING_CONFIG}=this.__closure;return{borderRadius:interpolate(launchPadSharedState.get(),[0,1],[0,16]),transform:[{scale:withSpring(interpolate(launchPadSharedState.get(),[0,1],[1,(windowDimensions.get().width-16*3)/windowDimensions.get().width]),LAUNCH_PAD_SPRING_CONFIG,'animate-always')},{translateY:withSpring(interpolate(launchPadSharedState.get(),[0,1],[0,-4]),LAUNCH_PAD_SPRING_CONFIG,'animate-always')}]};}" };
const result = require("LAUNCH_PAD_SPRING_CONFIG").fileFinishedImporting("modules/launchpad/native/LaunchPadContainer.tsx");

export default function LaunchPadContainer(children) {
  let gesture;
  let gestureRef;
  let gestureState;
  let launchPadPullTabState;
  let launchPadShown;
  let updaters;
  let launchPadSharedState;
  updaters = undefined;
  let dependencyMap;
  const tmp = createCacheKey();
  const tmp4 = updaters(10404)();
  const tmp5 = updaters(16111)();
  launchPadSharedState = tmp5.launchPadSharedState;
  ({ launchPadPullTabState, launchPadShown, gestureState, updaters } = tmp5);
  ({ gesture, gestureRef } = updaters(16113)({ launchPadType: tmp4, launchPadSharedState, launchPadPullTabState, launchPadShown, gestureState, updaters }));
  const tmp7 = updaters(11426)();
  dependencyMap = tmp7;
  let obj = launchPadSharedState(4083);
  const fn = function o() {
    return _undefined.get().height;
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
  let obj1 = launchPadSharedState(4083);
  const fn3 = function v() {
    let obj = { borderRadius: null, transform: null };
    obj[0] = launchPadSharedState(_undefined[9]).interpolate(launchPadSharedState.get(), [0, 1], [0, 16]);
    obj = { scale: null };
    const obj2 = launchPadSharedState(_undefined[9]);
    const obj4 = launchPadSharedState(_undefined[10]);
    const value = launchPadSharedState.get();
    const diff = _undefined.get().width - 48;
    const items = [1, diff / _undefined.get().width];
    obj[0] = obj4.withSpring(launchPadSharedState(_undefined[9]).interpolate(value, [0, 1], items), outer1_4, "animate-always");
    const items1 = [obj, ];
    obj = { translateY: null };
    const obj5 = launchPadSharedState(_undefined[9]);
    const obj7 = launchPadSharedState(_undefined[10]);
    obj[0] = obj7.withSpring(launchPadSharedState(_undefined[9]).interpolate(launchPadSharedState.get(), [0, 1], [0, -4]), outer1_4, "animate-always");
    items1[1] = obj;
    obj[1] = items1;
    return obj;
  };
  obj = { interpolate: launchPadSharedState(4083).interpolate, launchPadSharedState, withSpring: launchPadSharedState(4754).withSpring, windowDimensions: tmp7, LAUNCH_PAD_SPRING_CONFIG: closure_4 };
  fn3.__closure = obj;
  fn3.__workletHash = 13886247172712;
  fn3.__initData = closure_11;
  const animatedStyle = obj1.useAnimatedStyle(fn3);
  const MobileHomeDrawerExperiment = launchPadSharedState(4203).MobileHomeDrawerExperiment;
  obj = { value: gestureRef, children: null };
  obj1 = { gesture, children: null };
  let obj2 = { style: tmp.wrapper, children: null };
  let items = [tmp.container, animatedStyle];
  let items1 = [callback(updaters(4083).View, { style: items, children: children.children }), ];
  if (tmp4 !== constants.DISABLED) {
    const obj3 = { launchPadType: null, gestureState: null, launchPadShown: null, launchPadSharedState: null, launchPadPullTabState: null, updaters: null };
    obj3[0] = tmp4;
    obj3[1] = gestureState;
    obj3[2] = launchPadShown;
    obj3[3] = launchPadSharedState;
    obj3[4] = launchPadPullTabState;
    obj3[5] = updaters;
    const tmp10Result = tmp10(updaters(16114), obj3);
  }
  items1[1] = tmp10Result;
  obj2[1] = items1;
  obj1[1] = closure_7(closure_3, obj2);
  obj[1] = callback(launchPadSharedState(5467).GestureDetector, obj1);
  return callback(updaters(15211).Provider, obj);
};