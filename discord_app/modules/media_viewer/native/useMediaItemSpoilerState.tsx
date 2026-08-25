// === Module 12448: useMediaItemSpoilerState ===

// Module 12448 (useMediaItemSpoilerState)
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "noop" /* 19 */;

const require = arg1;
let closure_4 = { code: "function useMediaItemSpoilerStateTsx1(){const{runOnJS,setSpoilerActive,hasSpoiler}=this.__closure;runOnJS(setSpoilerActive)(hasSpoiler);}" };
let closure_5 = { code: "function useMediaItemSpoilerStateTsx2(){const{spoilerOpacity}=this.__closure;return{opacity:spoilerOpacity.get()};}" };
let result = require("set").fileFinishedImporting("modules/media_viewer/native/useMediaItemSpoilerState.tsx");

export const useMediaItemSpoilerState = function useMediaItemSpoilerState(index) {
  const _require = index;
  const MediaViewerSourcesStore = _require(state[2]).MediaViewerSourcesStore;
  state = MediaViewerSourcesStore.useState((spoilerIndexes) => {
    spoilerIndexes = spoilerIndexes.spoilerIndexes;
    return spoilerIndexes.has(closure_0);
  });
  [tmp5, closure_2] = callback(sharedValue.useState(state), 2);
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
      closure_1_0(closure_1_1[3]).runOnJS(closure_2)(closure_1);
    };
    obj = { runOnJS: tmp2(tmp3[3]).runOnJS, setSpoilerActive: closure_2, hasSpoiler: state };
    fn.__closure = obj;
    fn.__workletHash = 15930548853488;
    fn.__initData = closure_1_4;
    const result = sharedValue.set(obj.withTiming(num, obj, "respect-motion-settings", fn));
  }, items);
  const items1 = [tmp5, ];
  const obj2 = _require(state[3]);
  class S {
    constructor() {
      obj = { opacity: closure_3.get() };
      return obj;
    }
  }
  S.__closure = { spoilerOpacity: sharedValue };
  S.__workletHash = 8496335051493;
  S.__initData = closure_5;
  items1[1] = tmp(tmp2[3]).useAnimatedStyle(S);
  return items1;
};