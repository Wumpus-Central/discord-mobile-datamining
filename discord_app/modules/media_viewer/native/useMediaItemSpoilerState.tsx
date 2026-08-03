// === Module 12421: useMediaItemSpoilerState ===

// Module 12421 (useMediaItemSpoilerState)
import _slicedToArray from "_slicedToArray";
import noop from "noop";

const require = arg1;
let closure_4 = { code: "function useMediaItemSpoilerStateTsx1(){const{runOnJS,setSpoilerActive,hasSpoiler}=this.__closure;runOnJS(setSpoilerActive)(hasSpoiler);}" };
let closure_5 = { code: "function useMediaItemSpoilerStateTsx2(){const{spoilerOpacity}=this.__closure;return{opacity:spoilerOpacity.get()};}" };
let result = require("zustandStore").fileFinishedImporting("modules/media_viewer/native/useMediaItemSpoilerState.tsx");

export const useMediaItemSpoilerState = function useMediaItemSpoilerState(index) {
  let _slicedToArray;
  let tmp5;
  const _require = index;
  const MediaViewerSourcesStore = _require(state[2]).MediaViewerSourcesStore;
  state = MediaViewerSourcesStore.useState((spoilerIndexes) => {
    spoilerIndexes = spoilerIndexes.spoilerIndexes;
    return spoilerIndexes.has(closure_0);
  });
  [tmp5, _slicedToArray] = callback(sharedValue.useState(state), 2);
  let obj = sharedValue;
  const tmp = _require;
  const tmp2 = state;
  const tmp4 = callback(sharedValue.useState(state), 2);
  let num = 0;
  if (state) {
    num = 1;
  }
  sharedValue = _require(state[3]).useSharedValue(num);
  const items = [state, sharedValue];
  const effect = obj.useEffect(() => {
    let obj = index(state[4]);
    let num = 0;
    if (state) {
      num = 1;
    }
    obj = { duration: 200, easing: tmp2(tmp3[5]).STANDARD_EASING };
    const fn = function t() {
      outer1_0(outer1_1[3]).runOnJS(_slicedToArray)(closure_1);
    };
    obj = { runOnJS: tmp2(tmp3[3]).runOnJS, setSpoilerActive: _slicedToArray, hasSpoiler: state };
    fn.__closure = obj;
    fn.__workletHash = 15930548853488;
    fn.__initData = outer1_4;
    const result = sharedValue.set(obj.withTiming(num, obj, "respect-motion-settings", fn));
  }, items);
  const items1 = [tmp5, ];
  const obj2 = _require(state[3]);
  class S {
    constructor() {
      obj = { opacity: useSharedValue.get() };
      return obj;
    }
  }
  S.__closure = { spoilerOpacity: sharedValue };
  S.__workletHash = 8496335051493;
  S.__initData = closure_5;
  items1[1] = tmp(tmp2[3]).useAnimatedStyle(S);
  return items1;
};