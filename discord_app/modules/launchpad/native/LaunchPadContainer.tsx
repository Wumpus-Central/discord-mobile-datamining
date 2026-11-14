// discord_app/modules/launchpad/native/LaunchPadContainer.tsx
import _mod1655 from "../../../../_runtime/metro/01655__.js";
import HomeDrawerExperiment from "../../home_drawer/native/HomeDrawerExperiment.tsx";
import LegacyBaseButton from "../../../../_runtime/05598_LegacyBaseButton.js";
import spring_spring from "../../../design/animation/reanimated/spring/spring.tsx";
import useStateFromSharedValueDefault from "../../reanimated/native/useStateFromSharedValue.tsx";
import useLaunchPadTypeDefault from "useLaunchPadType.tsx";
import useWindowDimensionsSharedValueDefault from "../../screen/useWindowDimensionsSharedValue.native.tsx";
import LaunchPadGestureRefContextDefault from "LaunchPadGestureRefContext.tsx";
import useLaunchPadStateDefault from "useLaunchPadState.native.tsx";
import useLaunchPadGestureDefault from "useLaunchPadGesture.tsx";
import LaunchPadWrapperDefault from "LaunchPadWrapper.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const _modDef1655 = _mod1655;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, StyleSheet } = get_ActivityIndicator);
const LaunchPadConstants = fn(12402);
({ LAUNCH_PAD_SPRING_CONFIG: closure_4, LaunchPadTypes: hasOwnProperty } = LaunchPadConstants);
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const createStyles = fn(5306);
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
let closure_9 = {
  code: "(function LaunchPadContainerTsx1(){let[windowDimensions]=this.__closure;return windowDimensions.get().height;})",
};
let closure_10 = {
  code: "(function LaunchPadContainerTsx2(height,lastHeight){let[updaters]=this.__closure;if(lastHeight==null)return;if(lastHeight<=height)return;updaters.onWindowHeightChange();})",
};
let closure_11 = {
  code: "(function LaunchPadContainerTsx3(){let[interpolate,launchPadSharedState,withSpring,windowDimensions,LAUNCH_PAD_SPRING_CONFIG]=this.__closure;return{borderRadius:interpolate(launchPadSharedState.get(),[0,1],[0,16]),transform:[{scale:withSpring(interpolate(launchPadSharedState.get(),[0,1],[1,(windowDimensions.get().width-16*3)/windowDimensions.get().width]),LAUNCH_PAD_SPRING_CONFIG,'animate-always')},{translateY:withSpring(interpolate(launchPadSharedState.get(),[0,1],[0,-4]),LAUNCH_PAD_SPRING_CONFIG,'animate-always')}]};})",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/launchpad/native/LaunchPadContainer.tsx");

export default function LaunchPadContainer(children) {
  const tmp = closure_8();
  const tmp4 = useLaunchPadTypeDefault();
  ({ launchPadSharedState, launchPadPullTabState, launchPadShown, gestureState, updaters } =
    useLaunchPadStateDefault());
  const tmp6 = useStateFromSharedValueDefault(launchPadShown);
  const tmp5 = useLaunchPadStateDefault();
  ({ gesture, gestureRef } = useLaunchPadGestureDefault({
    launchPadType: tmp4,
    launchPadSharedState,
    launchPadPullTabState,
    launchPadShown,
    gestureState,
    updaters,
  }));
  const tmp8 = useWindowDimensionsSharedValueDefault();
  const tmp7 = useLaunchPadGestureDefault({
    launchPadType: tmp4,
    launchPadSharedState,
    launchPadPullTabState,
    launchPadShown,
    gestureState,
    updaters,
  });
  items = [closure_9, tmp8];
  c0 = undefined;
  [tmp10, tmp11] = items;
  class LaunchPadContainerTsx1 {
    constructor() {
      return closure_0.get().height;
    }
  }
  let items1 = [tmp11];
  LaunchPadContainerTsx1.__closure = items1;
  LaunchPadContainerTsx1.__workletHash = 5429128433055;
  LaunchPadContainerTsx1.__initData = tmp10;
  const items2 = [closure_10, updaters];
  c0 = undefined;
  [tmp12, tmp13] = items2;
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
  const items3 = [tmp13];
  LaunchPadContainerTsx2.__closure = items3;
  LaunchPadContainerTsx2.__workletHash = 8587684116006;
  LaunchPadContainerTsx2.__initData = tmp12;
  const animatedReaction = _mod1655.useAnimatedReaction(LaunchPadContainerTsx1, LaunchPadContainerTsx2);
  const items4 = [closure_11, _mod1655.interpolate, launchPadSharedState, spring_spring.withSpring, tmp8, React4];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  [tmp15, tmp16, tmp17, tmp18, tmp19, tmp20] = items4;
  class LaunchPadContainerTsx3 {
    constructor() {
      obj = { borderRadius: closure_0(closure_1.get(), [0, 1], [0, 16]), transform: null };
      obj1 = { scale: null };
      value = closure_1.get();
      diff = closure_3.get().width - 48;
      items = [1];
      items[1] = diff / closure_3.get().width;
      obj1.scale = closure_2(closure_0(value, [0, 1], items), closure_4, "animate-always");
      items1 = [,];
      items1[0] = obj1;
      obj4 = { translateY: closure_2(closure_0(closure_1.get(), [0, 1], [0, -4]), closure_4, "animate-always") };
      items1[1] = obj4;
      obj.transform = items1;
      return obj;
    }
  }
  const items5 = [tmp16, tmp17, tmp18, tmp19, tmp20];
  LaunchPadContainerTsx3.__closure = items5;
  LaunchPadContainerTsx3.__workletHash = 13015105508497;
  LaunchPadContainerTsx3.__initData = tmp15;
  const animatedStyle = _mod1655.useAnimatedStyle(LaunchPadContainerTsx3);
  const MobileHomeDrawerExperiment = HomeDrawerExperiment.MobileHomeDrawerExperiment;
  let obj2 = { value: gestureRef, children: null };
  const obj3 = { gesture, children: null };
  const obj4 = { style: tmp.wrapper, children: null };
  const obj5 = {
    style: null,
    pointerEvents: null,
    accessibilityElementsHidden: null,
    importantForAccessibility: null,
    children: null,
  };
  const items6 = [tmp.container, animatedStyle];
  obj5.style = items6;
  let str = "auto";
  let str2 = "auto";
  if (tmp6) {
    str2 = "none";
  }
  obj5.pointerEvents = str2;
  obj5.accessibilityElementsHidden = tmp6;
  if (tmp6) {
    str = "no-hide-descendants";
  }
  obj5.importantForAccessibility = str;
  obj5.children = children.children;
  const items7 = [timestampProducer(_modDef1655.View, obj5)];
  if (tmp4 !== constants.DISABLED) {
    const obj6 = {
      launchPadType: tmp4,
      gestureState,
      launchPadShown,
      launchPadSharedState,
      launchPadPullTabState,
      updaters,
    };
    const tmp22Result = timestampProducer(LaunchPadWrapperDefault, obj6);
  }
  items7[1] = tmp22Result;
  obj4.children = items7;
  obj3.children = metroImportDefault(React3, obj4);
  obj2.children = timestampProducer(LegacyBaseButton.GestureDetector, obj3);
  return timestampProducer(LaunchPadGestureRefContextDefault.Provider, obj2);
}
