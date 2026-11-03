// === Module 19227: useLaunchPadAnimatedStyles ===

// Module 19227 (useLaunchPadAnimatedStyles)
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import _mod1652 from "module_1652" /* 1652 */;
import spring_spring from "spring/spring" /* 5757 */;
import LaunchPadConstants from "LaunchPadConstants" /* 11673 */;
import useAnimatedKeyboardHeightDefault from "useAnimatedKeyboardHeight" /* 12211 */;
import useWindowDimensionsSharedValueDefault from "useWindowDimensionsSharedValue" /* 12950 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import createStyles from "createStyles" /* 5141 */;
import size from "module_2" /* 2 */;

const LAUNCH_PAD_SPRING_CONFIG = LaunchPadConstants.LAUNCH_PAD_SPRING_CONFIG;
let closure_4 = PlatformUtils.isAndroid();
let closure_5 = createStyles.createStyles({ launchPad: { position: "absolute", top: 0, left: 0, width: "100%", zIndex: 1 }, launchPadCover: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "#000" } });
let closure_6 = { code: "(function useLaunchPadAnimatedStylesNativeTsx1(finished){let[gestureState,launchPadSharedState,launchPadShown]=this.__closure;if(!finished||gestureState.get().active)return;if(launchPadSharedState.get()===1||launchPadSharedState.get()===0){launchPadShown.set(launchPadSharedState.get()===1);}})" };
let closure_7 = { code: "(function useLaunchPadAnimatedStylesNativeTsx2(){let[withSpring,interpolate,launchPadSharedState,windowDimensions,LAUNCH_PAD_SPRING_CONFIG,_worklet_6239738479703_init_data,gestureState,launchPadShown,IS_ANDROID,height]=this.__closure;return{transform:[{translateX:withSpring(interpolate(launchPadSharedState.get(),[0,1],[windowDimensions.get().width-16,0]),LAUNCH_PAD_SPRING_CONFIG,'animate-always',function useLaunchPadAnimatedStylesNativeTsx1Factory([_worklet_6239738479703_init_data,gestureState,launchPadSharedState,launchPadShown]){const useLaunchPadAnimatedStylesNativeTsx1=function(finished){if(!finished||gestureState.get().active)return;if(launchPadSharedState.get()===1||launchPadSharedState.get()===0){launchPadShown.set(launchPadSharedState.get()===1);}};useLaunchPadAnimatedStylesNativeTsx1.__closure=[gestureState,launchPadSharedState,launchPadShown];useLaunchPadAnimatedStylesNativeTsx1.__workletHash=6239738479703;useLaunchPadAnimatedStylesNativeTsx1.__initData=_worklet_6239738479703_init_data;return useLaunchPadAnimatedStylesNativeTsx1;}([_worklet_6239738479703_init_data,gestureState,launchPadSharedState,launchPadShown]))}],bottom:IS_ANDROID?0:height.get()};})" };
let closure_8 = { code: "(function useLaunchPadAnimatedStylesNativeTsx3(){let[withSpring,interpolate,launchPadSharedState,LAUNCH_PAD_SPRING_CONFIG]=this.__closure;return{opacity:withSpring(interpolate(launchPadSharedState.get(),[0,1],[0,0.6]),LAUNCH_PAD_SPRING_CONFIG,'animate-always')};})" };
let result = size.fileFinishedImporting("modules/launchpad/native/useLaunchPadAnimatedStyles.native.tsx");

export default function useLaunchpadAnimatedStyles(launchPadSharedState) {
  launchPadSharedState = launchPadSharedState.launchPadSharedState;
  ({ gestureState, launchPadShown } = launchPadSharedState);
  let tmp = closure_5();
  let tmp3 = useAnimatedKeyboardHeightDefault();
  const tmp4 = useWindowDimensionsSharedValueDefault();
  items = [closure_7, spring_spring.withSpring, _mod1652.interpolate, launchPadSharedState, tmp4, LAUNCH_PAD_SPRING_CONFIG, closure_6, gestureState, launchPadShown, closure_4, tmp3];
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17] = items;
  function useLaunchPadAnimatedStylesNativeTsx2() {
    value = _undefined3.get();
    items = [_undefined4.get().width - 16, 0];
    const items1 = [c5, c6, _undefined3, c7];
    _undefined = undefined;
    _undefined2 = undefined;
    _undefined3 = undefined;
    [tmp5, tmp6, tmp7, tmp8] = items1;
    const obj = { transform: null, bottom: null };
    const obj2 = { translateX: null };
    function useLaunchPadAnimatedStylesNativeTsx1(arg0) {
      let tmp = arg0;
      if (arg0) {
        tmp = !_undefined.get().active;
      }
      if (tmp) {
        let tmp3 = 1 !== _undefined2.get();
        if (tmp3) {
          tmp3 = 0 !== _undefined2.get();
        }
        if (!tmp3) {
          const result = _undefined3.set(1 === _undefined2.get());
        }
      }
    }
    const items2 = [tmp6, tmp7, tmp8];
    useLaunchPadAnimatedStylesNativeTsx1.__closure = items2;
    useLaunchPadAnimatedStylesNativeTsx1.__workletHash = 6239738479703;
    useLaunchPadAnimatedStylesNativeTsx1.__initData = tmp5;
    obj2.translateX = _undefined(_undefined2(value, [0, 1], items), c4, "animate-always", useLaunchPadAnimatedStylesNativeTsx1);
    const items3 = [obj2];
    obj.transform = items3;
    let num = 0;
    if (!c8) {
      num = _undefined5.get();
    }
    obj.bottom = num;
    return obj;
  }
  let items1 = [tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17];
  useLaunchPadAnimatedStylesNativeTsx2.__closure = items1;
  useLaunchPadAnimatedStylesNativeTsx2.__workletHash = 1394437830917;
  useLaunchPadAnimatedStylesNativeTsx2.__initData = tmp7;
  const animatedStyle = _mod1652.useAnimatedStyle(useLaunchPadAnimatedStylesNativeTsx2);
  let items2 = [closure_8, spring_spring.withSpring, _mod1652.interpolate, launchPadSharedState, LAUNCH_PAD_SPRING_CONFIG];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  [tmp19, tmp20, tmp21, tmp22, tmp23] = items2;
  function useLaunchPadAnimatedStylesNativeTsx3() {
    return { opacity: _undefined(_undefined2(_undefined3.get(), [0, 1], [0, 0.6]), c3, "animate-always") };
  }
  let items3 = [tmp20, tmp21, tmp22, tmp23];
  useLaunchPadAnimatedStylesNativeTsx3.__closure = items3;
  useLaunchPadAnimatedStylesNativeTsx3.__workletHash = 7887737074117;
  useLaunchPadAnimatedStylesNativeTsx3.__initData = tmp19;
  let obj2 = { launchPadCoverStyles: null, launchPadStyles: null };
  const items4 = [tmp.launchPadCover, _mod1652.useAnimatedStyle(useLaunchPadAnimatedStylesNativeTsx3)];
  obj2.launchPadCoverStyles = items4;
  const items5 = [tmp.launchPad, animatedStyle, { paddingTop: useSafeAreaInsetsDefault().top }];
  obj2.launchPadStyles = items5;
  return obj2;
};