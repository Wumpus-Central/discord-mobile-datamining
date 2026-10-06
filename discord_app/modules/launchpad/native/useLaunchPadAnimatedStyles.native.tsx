// === Module 17415: useLaunchPadAnimatedStyles ===

// Module 17415 (useLaunchPadAnimatedStyles)
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import spring from "spring" /* 5604 */;
import LaunchPadConstants from "LaunchPadConstants" /* 11138 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let LAUNCH_PAD_SPRING_CONFIG = LaunchPadConstants.LAUNCH_PAD_SPRING_CONFIG;
let IS_ANDROID = PlatformUtils.isAndroid();
let closure_5 = createStyles.createStyles({ launchPad: { position: "absolute", top: 0, left: 0, width: "100%", zIndex: 1 }, launchPadCover: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "#000" } });
const __initData = { code: "function useLaunchPadAnimatedStylesNativeTsx1(){const{withSpring,interpolate,launchPadSharedState,windowDimensions,LAUNCH_PAD_SPRING_CONFIG,gestureState,launchPadShown,IS_ANDROID,height}=this.__closure;return{transform:[{translateX:withSpring(interpolate(launchPadSharedState.get(),[0,1],[windowDimensions.get().width-16,0]),LAUNCH_PAD_SPRING_CONFIG,\"animate-always\",function(finished){\"worklet\";if(!finished||gestureState.get().active){return;}if(launchPadSharedState.get()===1||launchPadSharedState.get()===0){launchPadShown.set(launchPadSharedState.get()===1);}})}],bottom:IS_ANDROID?0:height.get()};}" };
let closure_7 = { code: "function useLaunchPadAnimatedStylesNativeTsx2(finished){const{gestureState,launchPadSharedState,launchPadShown}=this.__closure;if(!finished||gestureState.get().active){return;}if(launchPadSharedState.get()===1||launchPadSharedState.get()===0){launchPadShown.set(launchPadSharedState.get()===1);}}" };
const __initData2 = { code: "function useLaunchPadAnimatedStylesNativeTsx3(){const{withSpring,interpolate,launchPadSharedState,LAUNCH_PAD_SPRING_CONFIG}=this.__closure;return{opacity:withSpring(interpolate(launchPadSharedState.get(),[0,1],[0,0.6]),LAUNCH_PAD_SPRING_CONFIG,\"animate-always\")};}" };
const __initData3 = { code: "function useLaunchPadAnimatedStylesNativeTsx4(){const{withSpring,interpolate,launchPadSharedState,windowDimensions,LAUNCH_PAD_SPRING_CONFIG,gestureState,launchPadShown,IS_ANDROID,height}=this.__closure;return{transform:[{translateX:withSpring(interpolate(launchPadSharedState.get(),[0,1],[windowDimensions.get().width-16,0]),LAUNCH_PAD_SPRING_CONFIG,'animate-always',function(finished){'worklet';if(!finished||gestureState.get().active)return;if(launchPadSharedState.get()===1||launchPadSharedState.get()===0){launchPadShown.set(launchPadSharedState.get()===1);}})}],bottom:IS_ANDROID?0:height.get()};}" };
let closure_10 = { code: "function useLaunchPadAnimatedStylesNativeTsx5(finished){const{gestureState,launchPadSharedState,launchPadShown}=this.__closure;if(!finished||gestureState.get().active)return;if(launchPadSharedState.get()===1||launchPadSharedState.get()===0){launchPadShown.set(launchPadSharedState.get()===1);}}" };
const __initData4 = { code: "function useLaunchPadAnimatedStylesNativeTsx6(){const{withSpring,interpolate,launchPadSharedState,LAUNCH_PAD_SPRING_CONFIG}=this.__closure;return{opacity:withSpring(interpolate(launchPadSharedState.get(),[0,1],[0,0.6]),LAUNCH_PAD_SPRING_CONFIG,'animate-always')};}" };
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((launchPadSharedState) => {
  let closure_3;
  let closure_4;
  let launchPadShown;
  let obj = launchPadSharedState(launchPadShown[4]);
  const cResult = obj.c(12);
  launchPadSharedState = launchPadSharedState.launchPadSharedState;
  const gestureState = launchPadSharedState.gestureState;
  launchPadShown = launchPadSharedState.launchPadShown;
  const tmp2 = closure_5();
  let tmp3 = gestureState(launchPadShown[5])();
  LAUNCH_PAD_SPRING_CONFIG = tmp3;
  const tmp4 = gestureState(launchPadShown[6])();
  IS_ANDROID = tmp4;
  const top = gestureState(launchPadShown[7])().top;
  let obj2 = launchPadSharedState(launchPadShown[8]);
  let fn = function s() {
    let fn;
    let interpolate;
    let items;
    let items1;
    let num;
    let value;
    let withSpring;
    const obj = { transform: items1, bottom: num };
    const obj2 = { translateX: withSpring(interpolate(value, [0, 1], items), LAUNCH_PAD_SPRING_CONFIG, "animate-always", fn) };
    let tmp = spring;
    withSpring = tmp.withSpring;
    interpolate = ReanimatedRexport.interpolate;
    ReanimatedRexport;
    value = launchPadSharedState.get();
    items = [closure_4.get().width - 16, ];
    num = 0;
    items[1] = 0;
    fn = function h(arg0) {
      const tmp = arg0 && !gestureState.get().active;
      if (tmp) {
        const tmp3 = 1 !== launchPadSharedState.get() && 0 !== launchPadSharedState.get();
        if (!tmp3) {
          const result = launchPadShown.set(1 === launchPadSharedState.get());
        }
      }
    };
    const obj3 = { gestureState, launchPadSharedState, launchPadShown };
    fn.__closure = obj3;
    fn.__workletHash = 16585115655243;
    fn.__initData = __initData;
    items1 = [obj2];
    if (!closure_4) {
      num = closure_3.get();
    }
    return obj;
  };
  let obj3 = { withSpring: launchPadSharedState(launchPadShown[9]).withSpring, interpolate: launchPadSharedState(launchPadShown[8]).interpolate, launchPadSharedState, windowDimensions: tmp4, LAUNCH_PAD_SPRING_CONFIG, gestureState, launchPadShown, IS_ANDROID, height: tmp3 };
  fn.__closure = obj3;
  fn.__workletHash = 16016733096180;
  fn.__initData = __initData;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  const fn2 = function c() {
    let obj2;
    let withSpring;
    const obj = { opacity: withSpring(obj2.interpolate(launchPadSharedState.get(), [0, 1], [0, 0.6]), LAUNCH_PAD_SPRING_CONFIG, "animate-always") };
    withSpring = spring.withSpring;
    spring;
    obj2 = ReanimatedRexport;
    return obj;
  };
  const obj4 = launchPadSharedState(launchPadShown[8]);
  fn2.__closure = { withSpring: launchPadSharedState(launchPadShown[9]).withSpring, interpolate: launchPadSharedState(launchPadShown[8]).interpolate, launchPadSharedState, LAUNCH_PAD_SPRING_CONFIG };
  fn2.__workletHash = 16922269496348;
  fn2.__initData = __initData2;
  ({ withSpring: launchPadSharedState(launchPadShown[9]).withSpring, interpolate: launchPadSharedState(launchPadShown[8]).interpolate, launchPadSharedState, LAUNCH_PAD_SPRING_CONFIG });
  const animatedStyle1 = obj4.useAnimatedStyle(fn2);
  if (cResult[0] === animatedStyle1) {
    let tmp7;
    let tmp8;
    if (cResult[1] === tmp2.launchPadCover) {
      tmp7 = cResult[2];
    }
    if (cResult[3] !== top) {
      const obj6 = { paddingTop: top };
      let num = 3;
      cResult[3] = top;
      cResult[4] = obj6;
      tmp8 = obj6;
    } else {
      tmp8 = cResult[4];
    }
    if (cResult[5] === animatedStyle) {
      if (cResult[6] === tmp2.launchPad) {
        let tmp9;
        if (cResult[7] === tmp8) {
          tmp9 = cResult[8];
        }
        if (cResult[9] === tmp7) {
          let tmp10;
          if (cResult[10] === tmp9) {
            tmp10 = cResult[11];
          }
          return tmp10;
        }
        const obj7 = { launchPadCoverStyles: tmp7, launchPadStyles: tmp9 };
        cResult[9] = tmp7;
        cResult[10] = tmp9;
        cResult[11] = obj7;
        tmp10 = obj7;
      }
    }
    let items = [tmp2.launchPad, animatedStyle, tmp8];
    cResult[5] = animatedStyle;
    cResult[6] = tmp2.launchPad;
    cResult[7] = tmp8;
    cResult[8] = items;
    tmp9 = items;
  }
  let items1 = [tmp2.launchPadCover, animatedStyle1];
  cResult[0] = animatedStyle1;
  cResult[1] = tmp2.launchPadCover;
  cResult[2] = items1;
  tmp7 = items1;
}) : ((launchPadSharedState) => {
  let closure_3;
  let closure_4;
  let items;
  let items1;
  launchPadSharedState = launchPadSharedState.launchPadSharedState;
  const gestureState = launchPadSharedState.gestureState;
  const launchPadShown = launchPadSharedState.launchPadShown;
  let tmp = closure_5();
  const tmp2 = gestureState(launchPadShown[5])();
  LAUNCH_PAD_SPRING_CONFIG = tmp2;
  let tmp3 = gestureState(launchPadShown[6])();
  IS_ANDROID = tmp3;
  const top = gestureState(launchPadShown[7])().top;
  let obj = launchPadSharedState(launchPadShown[8]);
  let fn = function _() {
    let fn;
    let interpolate;
    let items;
    let items1;
    let num;
    let value;
    let withSpring;
    const obj = { transform: items1, bottom: num };
    const obj2 = { translateX: withSpring(interpolate(value, [0, 1], items), LAUNCH_PAD_SPRING_CONFIG, "animate-always", fn) };
    let tmp = spring;
    withSpring = tmp.withSpring;
    interpolate = ReanimatedRexport.interpolate;
    ReanimatedRexport;
    value = launchPadSharedState.get();
    items = [closure_4.get().width - 16, ];
    num = 0;
    items[1] = 0;
    fn = function h(arg0) {
      const tmp = arg0 && !gestureState.get().active;
      if (tmp) {
        const tmp3 = 1 !== launchPadSharedState.get() && 0 !== launchPadSharedState.get();
        if (!tmp3) {
          const result = launchPadShown.set(1 === launchPadSharedState.get());
        }
      }
    };
    const obj3 = { gestureState, launchPadSharedState, launchPadShown };
    fn.__closure = obj3;
    fn.__workletHash = 1540754346538;
    fn.__initData = __initData;
    items1 = [obj2];
    if (!closure_4) {
      num = closure_3.get();
    }
    return obj;
  };
  let obj2 = { withSpring: launchPadSharedState(launchPadShown[9]).withSpring, interpolate: launchPadSharedState(launchPadShown[8]).interpolate, launchPadSharedState, windowDimensions: tmp3, LAUNCH_PAD_SPRING_CONFIG, gestureState, launchPadShown, IS_ANDROID, height: tmp2 };
  fn.__closure = obj2;
  fn.__workletHash = 13582130779383;
  fn.__initData = __initData3;
  const animatedStyle = obj.useAnimatedStyle(fn);
  let obj3 = launchPadSharedState(launchPadShown[8]);
  class P {
    constructor() {
      let obj2;
      let withSpring;
      const obj = { opacity: withSpring(obj2.interpolate(launchPadSharedState.get(), [0, 1], [0, 0.6]), LAUNCH_PAD_SPRING_CONFIG, "animate-always") };
      withSpring = spring.withSpring;
      spring;
      obj2 = ReanimatedRexport;
      return obj;
    }
  }
  P.__closure = { withSpring: launchPadSharedState(launchPadShown[9]).withSpring, interpolate: launchPadSharedState(launchPadShown[8]).interpolate, launchPadSharedState, LAUNCH_PAD_SPRING_CONFIG };
  P.__workletHash = 3126588516345;
  P.__initData = __initData4;
  const obj5 = { launchPadCoverStyles: items, launchPadStyles: items1 };
  items = [tmp.launchPadCover, ];
  ({ withSpring: launchPadSharedState(launchPadShown[9]).withSpring, interpolate: launchPadSharedState(launchPadShown[8]).interpolate, launchPadSharedState, LAUNCH_PAD_SPRING_CONFIG });
  items[1] = obj3.useAnimatedStyle(P);
  items1 = [tmp.launchPad, animatedStyle, { paddingTop: top }];
  return obj5;
});
let result = size.fileFinishedImporting("modules/launchpad/native/useLaunchPadAnimatedStyles.native.tsx");

export default tmp2;