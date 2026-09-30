// === Module 12720: useMediaItemSpoilerState ===

// Module 12720 (useMediaItemSpoilerState)
import native from "native" /* 1177 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4596 */;
import timing from "timing" /* 4867 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_4 = { code: "function useMediaItemSpoilerStateTsx1(){const{runOnJS,setSpoilerActive,hasSpoiler}=this.__closure;runOnJS(setSpoilerActive)(hasSpoiler);}" };
const __initData = { code: "function useMediaItemSpoilerStateTsx2(){const{spoilerOpacity}=this.__closure;return{opacity:spoilerOpacity.get()};}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/media_viewer/native/useMediaItemSpoilerState.tsx");

export const useMediaItemSpoilerState = function useMediaItemSpoilerState(index) {
  mediaItemHasSpoiler = mediaItemHasSpoiler(7907).useMediaItemHasSpoiler(index);
  let obj = mediaItemHasSpoiler(7907);
  const tmp = mediaItemHasSpoiler;
  [tmp5, dependencyMap] = sharedValue(noop.useState(mediaItemHasSpoiler), 2);
  const tmp4 = sharedValue(noop.useState(mediaItemHasSpoiler), 2);
  let num = 0;
  if (mediaItemHasSpoiler) {
    num = 1;
  }
  sharedValue = mediaItemHasSpoiler(4596).useSharedValue(num);
  const items = [mediaItemHasSpoiler, sharedValue];
  const effect = noop.useEffect(() => {
    let num = 0;
    if (mediaItemHasSpoiler) {
      num = 1;
    }
    const obj = timing;
    const fn = function t() {
      mediaItemHasSpoiler(setSpoilerActive[3]).runOnJS(closure_1_1)(closure_1_0);
    };
    const obj2 = { duration: 200, easing: native.STANDARD_EASING };
    fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, setSpoilerActive, hasSpoiler: mediaItemHasSpoiler };
    fn.__workletHash = 15930548853488;
    fn.__initData = __initData;
    const result = sharedValue.set(obj.withTiming(num, obj2, "respect-motion-settings", fn));
    const obj3 = { runOnJS: ReanimatedRexport.runOnJS, setSpoilerActive, hasSpoiler: mediaItemHasSpoiler };
  }, items);
  const items1 = [tmp5, ];
  let obj3 = mediaItemHasSpoiler(4596);
  let fn = function l() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { spoilerOpacity: sharedValue };
  fn.__workletHash = 8496335051493;
  fn.__initData = __initData;
  items1[1] = tmp(4596).useAnimatedStyle(fn);
  return items1;
};