// === Module 17515: useLaunchPadAnimatedStyles ===

// Module 17515 (useLaunchPadAnimatedStyles)
import ReanimatedRexport from "ReanimatedRexport" /* 4559 */;
import spring from "spring" /* 5270 */;
import LaunchPadConstants from "LaunchPadConstants" /* 11801 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import createStyles from "createStyles" /* 4827 */;
import size from "module_2" /* 2 */;

let LAUNCH_PAD_SPRING_CONFIG = LaunchPadConstants.LAUNCH_PAD_SPRING_CONFIG;
let IS_ANDROID = PlatformUtils.isAndroid();
let closure_5 = createStyles.createStyles({ launchPad: { position: "absolute", top: 0, left: 0, width: "100%", zIndex: 1 }, launchPadCover: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "#000" } });
const __initData = { code: "function useLaunchPadAnimatedStylesNativeTsx1(){const{withSpring,interpolate,launchPadSharedState,windowDimensions,LAUNCH_PAD_SPRING_CONFIG,gestureState,launchPadShown,IS_ANDROID,height}=this.__closure;return{transform:[{translateX:withSpring(interpolate(launchPadSharedState.get(),[0,1],[windowDimensions.get().width-16,0]),LAUNCH_PAD_SPRING_CONFIG,'animate-always',function(finished){'worklet';if(!finished||gestureState.get().active)return;if(launchPadSharedState.get()===1||launchPadSharedState.get()===0){launchPadShown.set(launchPadSharedState.get()===1);}})}],bottom:IS_ANDROID?0:height.get()};}" };
let closure_7 = { code: "function useLaunchPadAnimatedStylesNativeTsx2(finished){const{gestureState,launchPadSharedState,launchPadShown}=this.__closure;if(!finished||gestureState.get().active)return;if(launchPadSharedState.get()===1||launchPadSharedState.get()===0){launchPadShown.set(launchPadSharedState.get()===1);}}" };
const __initData2 = { code: "function useLaunchPadAnimatedStylesNativeTsx3(){const{withSpring,interpolate,launchPadSharedState,LAUNCH_PAD_SPRING_CONFIG}=this.__closure;return{opacity:withSpring(interpolate(launchPadSharedState.get(),[0,1],[0,0.6]),LAUNCH_PAD_SPRING_CONFIG,'animate-always')};}" };
let result = size.fileFinishedImporting("modules/launchpad/native/useLaunchPadAnimatedStyles.native.tsx");

export default function useLaunchpadAnimatedStyles(launchPadSharedState) {
  launchPadSharedState = launchPadSharedState.launchPadSharedState;
  const gestureState = launchPadSharedState.gestureState;
  const launchPadShown = launchPadSharedState.launchPadShown;
  let tmp = closure_5();
  const tmp2 = gestureState(launchPadShown[3])();
  LAUNCH_PAD_SPRING_CONFIG = tmp2;
  let tmp3 = gestureState(launchPadShown[4])();
  IS_ANDROID = tmp3;
  let fn = function _() {
    const obj = { transform: null, bottom: null };
    const obj2 = { translateX: null };
    const obj3 = spring;
    value = launchPadSharedState.get();
    const items = [closure_4.get().width - 16, ];
    let num = 0;
    items[1] = 0;
    const fn = function h(arg0) {
      let tmp = arg0;
      if (arg0) {
        tmp = !gestureState.get().active;
      }
      if (tmp) {
        let tmp3 = 1 !== launchPadSharedState.get();
        if (tmp3) {
          tmp3 = 0 !== launchPadSharedState.get();
        }
        if (!tmp3) {
          const result = launchPadShown.set(1 === launchPadSharedState.get());
        }
      }
    };
    fn.__closure = { gestureState, launchPadSharedState, launchPadShown };
    fn.__workletHash = 7028378249389;
    fn.__initData = __initData;
    obj2.translateX = obj3.withSpring(ReanimatedRexport.interpolate(value, [0, 1], items), LAUNCH_PAD_SPRING_CONFIG, "animate-always", fn);
    const items1 = [obj2];
    obj.transform = items1;
    if (!closure_4) {
      num = closure_3.get();
    }
    obj.bottom = num;
    return obj;
  };
  let obj = launchPadSharedState(launchPadShown[6]);
  fn.__closure = { withSpring: launchPadSharedState(launchPadShown[7]).withSpring, interpolate: launchPadSharedState(launchPadShown[6]).interpolate, launchPadSharedState, windowDimensions: tmp3, LAUNCH_PAD_SPRING_CONFIG, gestureState, launchPadShown, IS_ANDROID, height: tmp2 };
  fn.__workletHash = 1628632614770;
  fn.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(fn);
  let obj2 = { withSpring: launchPadSharedState(launchPadShown[7]).withSpring, interpolate: launchPadSharedState(launchPadShown[6]).interpolate, launchPadSharedState, windowDimensions: tmp3, LAUNCH_PAD_SPRING_CONFIG, gestureState, launchPadShown, IS_ANDROID, height: tmp2 };
  class P {
    constructor() {
      obj = { opacity: null };
      obj2 = closure_0(closure_2[7]);
      obj3 = closure_0(closure_2[6]);
      obj.opacity = obj2.withSpring(obj3.interpolate(launchPadSharedState.get(), [0, 1], [0, 0.6]), LAUNCH_PAD_SPRING_CONFIG, "animate-always");
      return obj;
    }
  }
  let obj3 = launchPadSharedState(launchPadShown[6]);
  P.__closure = { withSpring: launchPadSharedState(launchPadShown[7]).withSpring, interpolate: launchPadSharedState(launchPadShown[6]).interpolate, launchPadSharedState, LAUNCH_PAD_SPRING_CONFIG };
  P.__workletHash = 6964438968188;
  P.__initData = __initData2;
  const obj5 = { launchPadCoverStyles: null, launchPadStyles: null };
  let items = [tmp.launchPadCover, obj3.useAnimatedStyle(P)];
  obj5.launchPadCoverStyles = items;
  let items1 = [tmp.launchPad, animatedStyle, { paddingTop: gestureState(launchPadShown[5])().top }];
  obj5.launchPadStyles = items1;
  return obj5;
};