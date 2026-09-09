// === Module 12994: useMediaItemSpoilerState ===

// Module 12994 (useMediaItemSpoilerState)
import native from "native" /* 1178 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4310 */;
import timing from "timing" /* 4575 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_4 = { code: "function useMediaItemSpoilerStateTsx1(){const{runOnJS,setSpoilerActive,hasSpoiler}=this.__closure;runOnJS(setSpoilerActive)(hasSpoiler);}" };
const __initData = { code: "function useMediaItemSpoilerStateTsx2(){const{spoilerOpacity}=this.__closure;return{opacity:spoilerOpacity.get()};}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/media_viewer/native/useMediaItemSpoilerState.tsx");

export const useMediaItemSpoilerState = function useMediaItemSpoilerState(index) {
  mediaItemHasSpoiler = mediaItemHasSpoiler(8292).useMediaItemHasSpoiler(index);
  let obj = mediaItemHasSpoiler(8292);
  const tmp = mediaItemHasSpoiler;
  [tmp5, dependencyMap] = sharedValue(noop.useState(mediaItemHasSpoiler), 2);
  const tmp4 = sharedValue(noop.useState(mediaItemHasSpoiler), 2);
  let num = 0;
  if (mediaItemHasSpoiler) {
    num = 1;
  }
  sharedValue = mediaItemHasSpoiler(4310).useSharedValue(num);
  const items = [mediaItemHasSpoiler, sharedValue];
  const effect = noop.useEffect(() => {
    let obj = timing;
    let num = 0;
    if (mediaItemHasSpoiler) {
      num = 1;
    }
    obj = { duration: 200, easing: native.STANDARD_EASING };
    const fn = function t() {
      mediaItemHasSpoiler(setSpoilerActive[3]).runOnJS(closure_1_1)(closure_1_0);
    };
    obj = { runOnJS: ReanimatedRexport.runOnJS, setSpoilerActive, hasSpoiler: mediaItemHasSpoiler };
    fn.__closure = obj;
    fn.__workletHash = 15930548853488;
    fn.__initData = __initData;
    const result = sharedValue.set(obj.withTiming(num, obj, "respect-motion-settings", fn));
  }, items);
  const items1 = [tmp5, ];
  const obj3 = mediaItemHasSpoiler(4310);
  let fn = function l() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { spoilerOpacity: sharedValue };
  fn.__workletHash = 8496335051493;
  fn.__initData = __initData;
  items1[1] = tmp(4310).useAnimatedStyle(fn);
  return items1;
};