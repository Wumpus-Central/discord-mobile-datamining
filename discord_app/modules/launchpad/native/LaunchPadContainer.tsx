// === Module 19340: LaunchPadContainer ===

// Module 19340 (LaunchPadContainer)
import _mod1652 from "module_1652" /* 1652 */;
import HomeDrawerExperiment from "HomeDrawerExperiment" /* 5328 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5428 */;
import spring_spring from "spring/spring" /* 5771 */;
import useLaunchPadTypeDefault from "useLaunchPadType" /* 11726 */;
import useWindowDimensionsSharedValueDefault from "useWindowDimensionsSharedValue" /* 13033 */;
import LaunchPadGestureRefContextDefault from "LaunchPadGestureRefContext" /* 18313 */;
import useLaunchPadStateDefault from "useLaunchPadState" /* 19341 */;
import useLaunchPadGestureDefault from "useLaunchPadGesture" /* 19343 */;
import LaunchPadWrapperDefault from "LaunchPadWrapper" /* 19344 */;
import noop from "module_19" /* 19 */;

const _modDef1652 = _mod1652;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, StyleSheet } = get_ActivityIndicator);
const LaunchPadConstants = fn(11725);
({ LAUNCH_PAD_SPRING_CONFIG: closure_4, LaunchPadTypes: hasOwnProperty } = LaunchPadConstants);
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const createStyles = fn(5141);
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
let closure_9 = { code: "(function LaunchPadContainerTsx1(){let[windowDimensions]=this.__closure;return windowDimensions.get().height;})" };
let closure_10 = { code: "(function LaunchPadContainerTsx2(height,lastHeight){let[updaters]=this.__closure;if(lastHeight==null)return;if(lastHeight<=height)return;updaters.onWindowHeightChange();})" };
let closure_11 = { code: "(function LaunchPadContainerTsx3(){let[interpolate,launchPadSharedState,withSpring,windowDimensions,LAUNCH_PAD_SPRING_CONFIG]=this.__closure;return{borderRadius:interpolate(launchPadSharedState.get(),[0,1],[0,16]),transform:[{scale:withSpring(interpolate(launchPadSharedState.get(),[0,1],[1,(windowDimensions.get().width-16*3)/windowDimensions.get().width]),LAUNCH_PAD_SPRING_CONFIG,'animate-always')},{translateY:withSpring(interpolate(launchPadSharedState.get(),[0,1],[0,-4]),LAUNCH_PAD_SPRING_CONFIG,'animate-always')}]};})" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/launchpad/native/LaunchPadContainer.tsx");

export default function LaunchPadContainer(children) {
  const tmp = closure_8();
  const tmp4 = useLaunchPadTypeDefault();
  ({ launchPadSharedState, launchPadPullTabState, launchPadShown, gestureState, updaters } = useLaunchPadStateDefault());
  const tmp5 = useLaunchPadStateDefault();
  ({ gesture, gestureRef } = useLaunchPadGestureDefault({ launchPadType: tmp4, launchPadSharedState, launchPadPullTabState, launchPadShown, gestureState, updaters }));
  const tmp7 = useWindowDimensionsSharedValueDefault();
  const tmp6 = useLaunchPadGestureDefault({ launchPadType: tmp4, launchPadSharedState, launchPadPullTabState, launchPadShown, gestureState, updaters });
  items = [closure_9, tmp7];
  c0 = undefined;
  [tmp9, tmp10] = items;
  class LaunchPadContainerTsx1 {
    constructor() {
      return closure_0.get().height;
    }
  }
  let items1 = [tmp10];
  LaunchPadContainerTsx1.__closure = items1;
  LaunchPadContainerTsx1.__workletHash = 5429128433055;
  LaunchPadContainerTsx1.__initData = tmp9;
  const items2 = [closure_10, updaters];
  c0 = undefined;
  [tmp11, tmp12] = items2;
  class LaunchPadContainerTsx2 {
    constructor(arg0, arg1) {
      if (null != arg1) {
        tmp = children;
        if (arg1 > children) {
          tmp2 = closure_0;
          onWindowHeightChangeResult = closure_0.onWindowHeightChange();
        }
      }
      return;
    }
  }
  const items3 = [tmp12];
  LaunchPadContainerTsx2.__closure = items3;
  LaunchPadContainerTsx2.__workletHash = 8587684116006;
  LaunchPadContainerTsx2.__initData = tmp11;
  const animatedReaction = _mod1652.useAnimatedReaction(LaunchPadContainerTsx1, LaunchPadContainerTsx2);
  const items4 = [closure_11, _mod1652.interpolate, launchPadSharedState, spring_spring.withSpring, tmp7, React4];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  [tmp14, tmp15, tmp16, tmp17, tmp18, tmp19] = items4;
  class LaunchPadContainerTsx3 {
    constructor() {
      obj = { borderRadius: closure_0(closure_1.get(), [0, 1], [0, 16]), transform: null };
      obj1 = { scale: null };
      value = closure_1.get();
      diff = closure_3.get().width - 48;
      items = [1];
      items[1] = diff / closure_3.get().width;
      obj1.scale = closure_2(closure_0(value, [0, 1], items), closure_4, "animate-always");
      items1 = [, ];
      items1[0] = obj1;
      obj4 = { translateY: closure_2(closure_0(closure_1.get(), [0, 1], [0, -4]), closure_4, "animate-always") };
      items1[1] = obj4;
      obj.transform = items1;
      return obj;
    }
  }
  const items5 = [tmp15, tmp16, tmp17, tmp18, tmp19];
  LaunchPadContainerTsx3.__closure = items5;
  LaunchPadContainerTsx3.__workletHash = 13015105508497;
  LaunchPadContainerTsx3.__initData = tmp14;
  const animatedStyle = _mod1652.useAnimatedStyle(LaunchPadContainerTsx3);
  const MobileHomeDrawerExperiment = HomeDrawerExperiment.MobileHomeDrawerExperiment;
  let obj2 = { value: gestureRef, children: null };
  const obj3 = { gesture, children: null };
  const obj4 = { style: tmp.wrapper, children: null };
  const obj5 = { style: null, children: children.children };
  const items6 = [tmp.container, animatedStyle];
  obj5.style = items6;
  const items7 = [timestampProducer(_modDef1652.View, obj5), ];
  if (tmp4 !== constants.DISABLED) {
    const obj6 = { launchPadType: tmp4, gestureState, launchPadShown, launchPadSharedState, launchPadPullTabState, updaters };
    const tmp21Result = timestampProducer(LaunchPadWrapperDefault, obj6);
  }
  items7[1] = tmp21Result;
  obj4.children = items7;
  obj3.children = metroImportDefault(React3, obj4);
  obj2.children = timestampProducer(LegacyBaseButton.GestureDetector, obj3);
  return timestampProducer(LaunchPadGestureRefContextDefault.Provider, obj2);
};