// === Module 17510: LaunchPadContainer ===

// Module 17510 (LaunchPadContainer)
import ReanimatedRexport from "ReanimatedRexport" /* 4559 */;
import spring from "spring" /* 5270 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, StyleSheet } = get_ActivityIndicator);
const LaunchPadConstants = fn(11801);
({ LAUNCH_PAD_SPRING_CONFIG: closure_4, LaunchPadTypes: hasOwnProperty } = LaunchPadConstants);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4827);
let obj2 = { wrapper: null, container: null };
let obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.backgroundColor = "transparent";
obj2.wrapper = obj3;
let obj4 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj4.overflow = "hidden";
obj2.container = obj4;
let closure_8 = createStyles.createStyles(obj2);
const __initData = { code: "function LaunchPadContainerTsx1(){const{windowDimensions}=this.__closure;return windowDimensions.get().height;}" };
const __initData2 = { code: "function LaunchPadContainerTsx2(height,lastHeight){const{updaters}=this.__closure;if(lastHeight==null)return;if(lastHeight<=height)return;updaters.onWindowHeightChange();}" };
const __initData3 = { code: "function LaunchPadContainerTsx3(){const{interpolate,launchPadSharedState,withSpring,windowDimensions,LAUNCH_PAD_SPRING_CONFIG}=this.__closure;return{borderRadius:interpolate(launchPadSharedState.get(),[0,1],[0,16]),transform:[{scale:withSpring(interpolate(launchPadSharedState.get(),[0,1],[1,(windowDimensions.get().width-16*3)/windowDimensions.get().width]),LAUNCH_PAD_SPRING_CONFIG,'animate-always')},{translateY:withSpring(interpolate(launchPadSharedState.get(),[0,1],[0,-4]),LAUNCH_PAD_SPRING_CONFIG,'animate-always')}]};}" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/launchpad/native/LaunchPadContainer.tsx");

export default function LaunchPadContainer(children) {
  updaters = undefined;
  const tmp = closure_8();
  const tmp4 = updaters(11802)();
  const tmp5 = updaters(17511)();
  const launchPadSharedState = tmp5.launchPadSharedState;
  ({ launchPadPullTabState, launchPadShown, gestureState, updaters } = tmp5);
  ({ gesture, gestureRef } = updaters(17513)({ launchPadType: tmp4, launchPadSharedState, launchPadPullTabState, launchPadShown, gestureState, updaters }));
  const tmp7 = updaters(12366)();
  dependencyMap = tmp7;
  const tmp2 = updaters;
  const tmp6 = updaters(17513)({ launchPadType: tmp4, launchPadSharedState, launchPadPullTabState, launchPadShown, gestureState, updaters });
  const fn = function o() {
    return closure_2.get().height;
  };
  fn.__closure = { windowDimensions: tmp7 };
  fn.__workletHash = 9985296176902;
  fn.__initData = __initData;
  const fn2 = function l(arg0, arg1) {
    if (null != arg1) {
      if (arg1 > arg0) {
        updaters.onWindowHeightChange();
      }
    }
  };
  fn2.__closure = { updaters };
  fn2.__workletHash = 418963589215;
  fn2.__initData = __initData2;
  const animatedReaction = launchPadSharedState(4559).useAnimatedReaction(fn, fn2);
  let obj = launchPadSharedState(4559);
  const fn3 = function v() {
    const obj = { borderRadius: ReanimatedRexport.interpolate(launchPadSharedState.get(), [0, 1], [0, 16]), transform: null };
    const obj3 = { scale: null };
    const obj4 = spring;
    value = launchPadSharedState.get();
    const diff = closure_2.get().width - 48;
    const items = [1, diff / closure_2.get().width];
    obj3.scale = obj4.withSpring(ReanimatedRexport.interpolate(value, [0, 1], items), LAUNCH_PAD_SPRING_CONFIG, "animate-always");
    const items1 = [obj3, ];
    const obj6 = { translateY: null };
    const obj7 = spring;
    obj6.translateY = obj7.withSpring(ReanimatedRexport.interpolate(launchPadSharedState.get(), [0, 1], [0, -4]), LAUNCH_PAD_SPRING_CONFIG, "animate-always");
    items1[1] = obj6;
    obj.transform = items1;
    return obj;
  };
  let obj2 = launchPadSharedState(4559);
  fn3.__closure = { interpolate: launchPadSharedState(4559).interpolate, launchPadSharedState, withSpring: launchPadSharedState(5270).withSpring, windowDimensions: tmp7, LAUNCH_PAD_SPRING_CONFIG };
  fn3.__workletHash = 13886247172712;
  fn3.__initData = __initData3;
  const animatedStyle = obj2.useAnimatedStyle(fn3);
  const MobileHomeDrawerExperiment = launchPadSharedState(4690).MobileHomeDrawerExperiment;
  let obj4 = { value: gestureRef, children: null };
  let obj5 = { gesture, children: null };
  let obj6 = { style: tmp.wrapper, children: null };
  let obj7 = { style: null, children: children.children };
  let items = [tmp.container, animatedStyle];
  obj7.style = items;
  let items1 = [closure_6(updaters(4559).View, obj7), ];
  if (tmp4 !== constants.DISABLED) {
    const obj8 = { launchPadType: tmp4, gestureState, launchPadShown, launchPadSharedState, launchPadPullTabState, updaters };
    const tmp10Result = closure_6(tmp2(17514), obj8);
  }
  items1[1] = tmp10Result;
  obj6.children = items1;
  obj5.children = closure_7(closure_3, obj6);
  obj4.children = closure_6(launchPadSharedState(6983).GestureDetector, obj5);
  return closure_6(updaters(16403).Provider, obj4);
};