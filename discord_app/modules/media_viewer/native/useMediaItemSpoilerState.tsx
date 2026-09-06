// discord_app/modules/media_viewer/native/useMediaItemSpoilerState.tsx
import native from "../../../design/void/native.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
let closure_4 = {
  code: "function useMediaItemSpoilerStateTsx1(){const{runOnJS,setSpoilerActive,hasSpoiler}=this.__closure;runOnJS(setSpoilerActive)(hasSpoiler);}",
};
const __initData = {
  code: "function useMediaItemSpoilerStateTsx2(){const{spoilerOpacity}=this.__closure;return{opacity:spoilerOpacity.get()};}",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/media_viewer/native/useMediaItemSpoilerState.tsx");

export const useMediaItemSpoilerState = function useMediaItemSpoilerState(index) {
  _require = index;
  const MediaViewerSourcesStore = require("useMediaViewerSources").MediaViewerSourcesStore;
  state = MediaViewerSourcesStore.useState((spoilerIndexes) => {
    spoilerIndexes = spoilerIndexes.spoilerIndexes;
    return spoilerIndexes.has(closure_0);
  });
  [tmp5, _slicedToArray] = _slicedToArray(sharedValue.useState(state), 2);
  let obj = sharedValue;
  const tmp = _require;
  const tmp2 = state;
  const tmp4 = _slicedToArray(sharedValue.useState(state), 2);
  let num = 0;
  if (state) {
    num = 1;
  }
  sharedValue = require("ReanimatedRexport").useSharedValue(num);
  const items = [state, sharedValue];
  const effect = obj.useEffect(() => {
    let obj = timing;
    let num = 0;
    if (state) {
      num = 1;
    }
    obj = { duration: 200, easing: native.STANDARD_EASING };
    const fn = function t() {
      closure_0(state[3]).runOnJS(setSpoilerActive)(closure_1_1);
    };
    obj = { runOnJS: ReanimatedRexport.runOnJS, setSpoilerActive, hasSpoiler: state };
    fn.__closure = obj;
    fn.__workletHash = 15930548853488;
    fn.__initData = __initData;
    const result = sharedValue.set(obj.withTiming(num, obj, "respect-motion-settings", fn));
  }, items);
  const items1 = [tmp5];
  const obj2 = require("ReanimatedRexport");
  class S {
    constructor() {
      obj = { opacity: closure_3.get() };
      return obj;
    }
  }
  S.__closure = { spoilerOpacity: sharedValue };
  S.__workletHash = 8496335051493;
  S.__initData = __initData;
  items1[1] = tmp(tmp2[3]).useAnimatedStyle(S);
  return items1;
};
