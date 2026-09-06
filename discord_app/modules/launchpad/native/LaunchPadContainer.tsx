// discord_app/modules/launchpad/native/LaunchPadContainer.tsx
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import spring from "../../../design/animation/reanimated/spring/spring.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, StyleSheet } = get_ActivityIndicator);
const LaunchPadConstants = fn(11464);
({ LAUNCH_PAD_SPRING_CONFIG: closure_4, LaunchPadTypes: hasOwnProperty } = LaunchPadConstants);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let createStyles = { wrapper: null, container: null };
createStyles = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
createStyles.backgroundColor = "transparent";
createStyles.wrapper = createStyles;
let obj1 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj1.overflow = "hidden";
createStyles.container = obj1;
let closure_8 = createStyles.createStyles(createStyles);
const __initData = {
  code: "function LaunchPadContainerTsx1(){const{windowDimensions}=this.__closure;return windowDimensions.get().height;}",
};
const __initData2 = {
  code: "function LaunchPadContainerTsx2(height,lastHeight){const{updaters}=this.__closure;if(lastHeight==null)return;if(lastHeight<=height)return;updaters.onWindowHeightChange();}",
};
const __initData3 = {
  code: "function LaunchPadContainerTsx3(){const{interpolate,launchPadSharedState,withSpring,windowDimensions,LAUNCH_PAD_SPRING_CONFIG}=this.__closure;return{borderRadius:interpolate(launchPadSharedState.get(),[0,1],[0,16]),transform:[{scale:withSpring(interpolate(launchPadSharedState.get(),[0,1],[1,(windowDimensions.get().width-16*3)/windowDimensions.get().width]),LAUNCH_PAD_SPRING_CONFIG,'animate-always')},{translateY:withSpring(interpolate(launchPadSharedState.get(),[0,1],[0,-4]),LAUNCH_PAD_SPRING_CONFIG,'animate-always')}]};}",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/launchpad/native/LaunchPadContainer.tsx");

export default function LaunchPadContainer(children) {
  updaters = undefined;
  const tmp = closure_8();
  const tmp4 = updaters(11465)();
  const tmp5 = updaters(16961)();
  const launchPadSharedState = tmp5.launchPadSharedState;
  ({ launchPadPullTabState, launchPadShown, gestureState, updaters } = tmp5);
  ({ gesture, gestureRef } = updaters(16963)({
    launchPadType: tmp4,
    launchPadSharedState,
    launchPadPullTabState,
    launchPadShown,
    gestureState,
    updaters,
  }));
  const tmp7 = updaters(12033)();
  dependencyMap = tmp7;
  let obj = launchPadSharedState(4296);
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
  const animatedReaction = obj.useAnimatedReaction(fn, fn2);
  let obj1 = launchPadSharedState(4296);
  const fn3 = function v() {
    let obj = {
      borderRadius: ReanimatedRexport.interpolate(launchPadSharedState.get(), [0, 1], [0, 16]),
      transform: null,
    };
    obj = { scale: null };
    const obj4 = spring;
    value = launchPadSharedState.get();
    const diff = closure_2.get().width - 48;
    const items = [1, diff / closure_2.get().width];
    obj.scale = obj4.withSpring(
      ReanimatedRexport.interpolate(value, [0, 1], items),
      LAUNCH_PAD_SPRING_CONFIG,
      "animate-always",
    );
    const items1 = [obj];
    obj = { translateY: null };
    const obj7 = spring;
    obj.translateY = obj7.withSpring(
      ReanimatedRexport.interpolate(launchPadSharedState.get(), [0, 1], [0, -4]),
      LAUNCH_PAD_SPRING_CONFIG,
      "animate-always",
    );
    items1[1] = obj;
    obj.transform = items1;
    return obj;
  };
  obj = {
    interpolate: launchPadSharedState(4296).interpolate,
    launchPadSharedState,
    withSpring: launchPadSharedState(4974).withSpring,
    windowDimensions: tmp7,
    LAUNCH_PAD_SPRING_CONFIG,
  };
  fn3.__closure = obj;
  fn3.__workletHash = 13886247172712;
  fn3.__initData = __initData3;
  const animatedStyle = obj1.useAnimatedStyle(fn3);
  const MobileHomeDrawerExperiment = launchPadSharedState(4423).MobileHomeDrawerExperiment;
  obj = { value: gestureRef, children: null };
  obj1 = { gesture, children: null };
  let obj2 = { style: tmp.wrapper, children: null };
  const obj3 = { style: null, children: children.children };
  let items = [tmp.container, animatedStyle];
  obj3.style = items;
  let items1 = [closure_6(updaters(4296).View, obj3)];
  if (tmp4 !== constants.DISABLED) {
    let obj4 = {
      launchPadType: tmp4,
      gestureState,
      launchPadShown,
      launchPadSharedState,
      launchPadPullTabState,
      updaters,
    };
    const tmp10Result = tmp10(updaters(16964), obj4);
  }
  items1[1] = tmp10Result;
  obj2.children = items1;
  obj1.children = closure_7(closure_3, obj2);
  obj.children = closure_6(launchPadSharedState(6655).GestureDetector, obj1);
  return closure_6(updaters(16008).Provider, obj);
}
