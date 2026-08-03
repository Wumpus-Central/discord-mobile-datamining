import { LAUNCH_PAD_SPRING_CONFIG } from "LAUNCH_PAD_SPRING_CONFIG";
import set from "set";
import createCacheKey from "createCacheKey";
import set from "createCacheKey";

set = set.isAndroid();
let closure_5 = createCacheKey.createStyles({ launchPad: { position: "absolute", top: 0, left: 0, width: "100%", zIndex: 1 }, launchPadCover: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "#000" } });
let closure_6 = { code: "function useLaunchPadAnimatedStylesNativeTsx1(){const{withSpring,interpolate,launchPadSharedState,windowDimensions,LAUNCH_PAD_SPRING_CONFIG,gestureState,launchPadShown,IS_ANDROID,height}=this.__closure;return{transform:[{translateX:withSpring(interpolate(launchPadSharedState.get(),[0,1],[windowDimensions.get().width-16,0]),LAUNCH_PAD_SPRING_CONFIG,'animate-always',function(finished){'worklet';if(!finished||gestureState.get().active)return;if(launchPadSharedState.get()===1||launchPadSharedState.get()===0){launchPadShown.set(launchPadSharedState.get()===1);}})}],bottom:IS_ANDROID?0:height.get()};}" };
let closure_7 = { code: "function useLaunchPadAnimatedStylesNativeTsx2(finished){const{gestureState,launchPadSharedState,launchPadShown}=this.__closure;if(!finished||gestureState.get().active)return;if(launchPadSharedState.get()===1||launchPadSharedState.get()===0){launchPadShown.set(launchPadSharedState.get()===1);}}" };
let closure_8 = { code: "function useLaunchPadAnimatedStylesNativeTsx3(){const{withSpring,interpolate,launchPadSharedState,LAUNCH_PAD_SPRING_CONFIG}=this.__closure;return{opacity:withSpring(interpolate(launchPadSharedState.get(),[0,1],[0,0.6]),LAUNCH_PAD_SPRING_CONFIG,'animate-always')};}" };
let result = set.fileFinishedImporting("modules/launchpad/native/useLaunchPadAnimatedStyles.native.tsx");

export default function useLaunchpadAnimatedStyles(launchPadSharedState) {
  launchPadSharedState = launchPadSharedState.launchPadSharedState;
  const gestureState = launchPadSharedState.gestureState;
  const launchPadShown = launchPadSharedState.launchPadShown;
  let c3;
  let c4;
  let tmp = callback();
  const tmp2 = gestureState(launchPadShown[3])();
  c3 = tmp2;
  let tmp3 = gestureState(launchPadShown[4])();
  c4 = tmp3;
  let obj = launchPadSharedState(launchPadShown[6]);
  let fn = function _() {
    let obj = { transform: null, bottom: null };
    obj = { translateX: null };
    const obj3 = launchPadSharedState(launchPadShown[7]);
    const value = launchPadSharedState.get();
    const items = [_undefined2.get().width - 16, ];
    let num = 0;
    items[1] = 0;
    const fn = function h(arg0) {
      let tmp = arg0;
      if (arg0) {
        tmp = !closure_1.get().active;
      }
      if (tmp) {
        let tmp3 = 1 !== closure_0.get();
        if (tmp3) {
          tmp3 = 0 !== obj.get();
        }
        if (!tmp3) {
          const result = closure_2.set(1 === obj.get());
        }
      }
    };
    obj = { gestureState, launchPadSharedState, launchPadShown };
    fn.__closure = obj;
    fn.__workletHash = 7028378249389;
    fn.__initData = outer1_7;
    obj[0] = obj3.withSpring(launchPadSharedState(launchPadShown[6]).interpolate(value, [0, 1], items), _undefined, "animate-always", fn);
    const items1 = [obj];
    obj[0] = items1;
    if (!_undefined2) {
      num = _undefined.get();
    }
    obj[1] = num;
    return obj;
  };
  obj = { withSpring: launchPadSharedState(launchPadShown[7]).withSpring, interpolate: launchPadSharedState(launchPadShown[6]).interpolate, launchPadSharedState, windowDimensions: tmp3, LAUNCH_PAD_SPRING_CONFIG: c3, gestureState, launchPadShown, IS_ANDROID: c4, height: tmp2 };
  fn.__closure = obj;
  fn.__workletHash = 1628632614770;
  fn.__initData = closure_6;
  const animatedStyle = obj.useAnimatedStyle(fn);
  class P {
    constructor() {
      obj = { opacity: null };
      obj2 = launchPadSharedState(launchPadShown[7]);
      obj3 = launchPadSharedState(launchPadShown[6]);
      obj[0] = obj2.withSpring(obj3.interpolate(launchPadSharedState.get(), [0, 1], [0, 0.6]), c3, "animate-always");
      return obj;
    }
  }
  obj = { withSpring: launchPadSharedState(launchPadShown[7]).withSpring, interpolate: launchPadSharedState(launchPadShown[6]).interpolate, launchPadSharedState, LAUNCH_PAD_SPRING_CONFIG: c3 };
  P.__closure = obj;
  P.__workletHash = 6964438968188;
  P.__initData = closure_8;
  const obj1 = { launchPadCoverStyles: null, launchPadStyles: null };
  let items = [tmp.launchPadCover, launchPadSharedState(launchPadShown[6]).useAnimatedStyle(P)];
  obj1[0] = items;
  let items1 = [tmp.launchPad, animatedStyle, { paddingTop: gestureState(launchPadShown[5])().top }];
  obj1[1] = items1;
  return obj1;
};