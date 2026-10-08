// === Module 12927: useMediaItemSpoilerState ===

// Module 12927 (useMediaItemSpoilerState)
import native from "native" /* 1200 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4810 */;
import timing from "timing" /* 5091 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_4 = { code: "function useMediaItemSpoilerStateTsx1(){const{runOnJS,setSpoilerActive,hasSpoiler}=this.__closure;runOnJS(setSpoilerActive)(hasSpoiler);}" };
const __initData = { code: "function useMediaItemSpoilerStateTsx2(){const{spoilerOpacity}=this.__closure;return{opacity:spoilerOpacity.get()};}" };
let closure_6 = { code: "function useMediaItemSpoilerStateTsx3(){const{runOnJS,setSpoilerActive,hasSpoiler}=this.__closure;runOnJS(setSpoilerActive)(hasSpoiler);}" };
const __initData2 = { code: "function useMediaItemSpoilerStateTsx4(){const{spoilerOpacity}=this.__closure;return{opacity:spoilerOpacity.get()};}" };
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/media_viewer/native/useMediaItemSpoilerState.tsx");

export const useMediaItemSpoilerState = ReactCompilerGating.isReactCompilerEnabled() ? (function useMediaItemSpoilerState(arg0) {
  const cResult = mediaItemHasSpoiler(576).c(7);
  let obj = mediaItemHasSpoiler(576);
  const tmp = mediaItemHasSpoiler;
  mediaItemHasSpoiler = mediaItemHasSpoiler(8367).useMediaItemHasSpoiler(arg0);
  let obj2 = mediaItemHasSpoiler(8367);
  [tmp6, dependencyMap] = sharedValue(noop.useState(mediaItemHasSpoiler), 2);
  const tmp5 = sharedValue(noop.useState(mediaItemHasSpoiler), 2);
  let num = 0;
  if (mediaItemHasSpoiler) {
    num = 1;
  }
  sharedValue = mediaItemHasSpoiler(4810).useSharedValue(num);
  if (cResult[0] === mediaItemHasSpoiler) {
    if (cResult[1] === sharedValue) {
      let tmp8 = cResult[2];
      let tmp9 = cResult[3];
    }
    const effect = noop.useEffect(tmp8, tmp9);
    class A {
      constructor() {
        obj = { opacity: closure_2.get() };
        return obj;
      }
    }
    const obj5 = { spoilerOpacity: sharedValue };
    A.__closure = obj5;
    A.__workletHash = 8496335051493;
    A.__initData = __initData;
    const animatedStyle = tmp(4810).useAnimatedStyle(A);
    if (cResult[4] === tmp6) {
      if (cResult[5] === animatedStyle) {
        let tmp13 = cResult[6];
      }
      return tmp13;
    }
    const items = [tmp6, animatedStyle];
    cResult[4] = tmp6;
    cResult[5] = animatedStyle;
    cResult[6] = items;
    tmp13 = items;
    const tmpResult = tmp(4810);
  }
  let fn = function c() {
    let num = 0;
    if (mediaItemHasSpoiler) {
      num = 1;
    }
    const obj = timing;
    const fn = function t() {
      mediaItemHasSpoiler(setSpoilerActive[5]).runOnJS(closure_1_1)(closure_1_0);
    };
    const obj2 = { duration: 200, easing: native.STANDARD_EASING };
    fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, setSpoilerActive, hasSpoiler: mediaItemHasSpoiler };
    fn.__workletHash = 15930548853488;
    fn.__initData = __initData;
    const result = sharedValue.set(obj.withTiming(num, obj2, "respect-motion-settings", fn));
    const obj3 = { runOnJS: ReanimatedRexport.runOnJS, setSpoilerActive, hasSpoiler: mediaItemHasSpoiler };
  };
  const items1 = [mediaItemHasSpoiler, sharedValue];
  cResult[0] = mediaItemHasSpoiler;
  cResult[1] = sharedValue;
  cResult[2] = fn;
  cResult[3] = items1;
  tmp9 = items1;
  tmp8 = fn;
  const obj4 = mediaItemHasSpoiler(4810);
}) : (function useMediaItemSpoilerState(arg0) {
  mediaItemHasSpoiler = mediaItemHasSpoiler(8367).useMediaItemHasSpoiler(arg0);
  let obj = mediaItemHasSpoiler(8367);
  const tmp = mediaItemHasSpoiler;
  [tmp5, dependencyMap] = sharedValue(noop.useState(mediaItemHasSpoiler), 2);
  const tmp4 = sharedValue(noop.useState(mediaItemHasSpoiler), 2);
  let num = 0;
  if (mediaItemHasSpoiler) {
    num = 1;
  }
  sharedValue = mediaItemHasSpoiler(4810).useSharedValue(num);
  const items = [mediaItemHasSpoiler, sharedValue];
  const effect = noop.useEffect(() => {
    let num = 0;
    if (mediaItemHasSpoiler) {
      num = 1;
    }
    const obj = timing;
    const fn = function t() {
      mediaItemHasSpoiler(setSpoilerActive[5]).runOnJS(closure_1_1)(closure_1_0);
    };
    const obj2 = { duration: 200, easing: native.STANDARD_EASING };
    fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, setSpoilerActive, hasSpoiler: mediaItemHasSpoiler };
    fn.__workletHash = 9328207925106;
    fn.__initData = __initData;
    const result = sharedValue.set(obj.withTiming(num, obj2, "respect-motion-settings", fn));
    const obj3 = { runOnJS: ReanimatedRexport.runOnJS, setSpoilerActive, hasSpoiler: mediaItemHasSpoiler };
  }, items);
  const items1 = [tmp5, ];
  let obj3 = mediaItemHasSpoiler(4810);
  let fn = function n() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { spoilerOpacity: sharedValue };
  fn.__workletHash = 11024579603555;
  fn.__initData = __initData2;
  items1[1] = tmp(4810).useAnimatedStyle(fn);
  return items1;
});