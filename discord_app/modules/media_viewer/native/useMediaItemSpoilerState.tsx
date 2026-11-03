// discord_app/modules/media_viewer/native/useMediaItemSpoilerState.tsx
import native from "../../../design/void/native.tsx";
import _mod1705 from "../../../../_runtime/metro/01705__.js";
import timing_timing from "../../../design/animation/reanimated/timing/timing.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
let closure_4 = {
  code: "(function useMediaItemSpoilerStateTsx1(){let[scheduleOnRN,setSpoilerActive,hasSpoiler]=this.__closure;scheduleOnRN(setSpoilerActive,hasSpoiler);})",
};
let closure_5 = {
  code: "(function useMediaItemSpoilerStateTsx2(){let[spoilerOpacity]=this.__closure;return{opacity:spoilerOpacity.get()};})",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/media_viewer/native/useMediaItemSpoilerState.tsx");

export function useMediaItemSpoilerState(index) {
  const mediaItemHasSpoiler = require("useMediaItemHasSpoiler").useMediaItemHasSpoiler(index);
  _require = mediaItemHasSpoiler;
  let obj = require("useMediaItemHasSpoiler");
  const tmp = _require;
  [tmp5, dependencyMap] = sharedValue(noop.useState(mediaItemHasSpoiler), 2);
  let tmp4 = sharedValue(noop.useState(mediaItemHasSpoiler), 2);
  let num = 0;
  if (mediaItemHasSpoiler) {
    num = 1;
  }
  sharedValue = require("../../../../_runtime/metro/01652__.js").useSharedValue(num);
  items = [mediaItemHasSpoiler, sharedValue];
  const effect = noop.useEffect(() => {
    let num = 0;
    if (c0) {
      num = 1;
    }
    const obj = timing_timing;
    const tmp4 = c0;
    items = [closure_4, _mod1705.scheduleOnRN, dependencyMap, tmp4];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    [tmp5, tmp6, tmp7, tmp8] = items;
    function useMediaItemSpoilerStateTsx1() {
      _undefined(c1, c2);
    }
    const items1 = [tmp6, tmp7, tmp8];
    useMediaItemSpoilerStateTsx1.__closure = items1;
    useMediaItemSpoilerStateTsx1.__workletHash = 9307516647300;
    useMediaItemSpoilerStateTsx1.__initData = tmp5;
    const result = sharedValue.set(
      obj.withTiming(
        num,
        { duration: 200, easing: native.STANDARD_EASING },
        "respect-motion-settings",
        useMediaItemSpoilerStateTsx1,
      ),
    );
    const obj2 = { duration: 200, easing: native.STANDARD_EASING };
  }, items);
  const obj3 = require("../../../../_runtime/metro/01652__.js");
  let items1 = [closure_5, sharedValue];
  _require = undefined;
  [tmp8, tmp9] = items1;
  function useMediaItemSpoilerStateTsx2() {
    return { opacity: _undefined.get() };
  }
  const items2 = [tmp9];
  useMediaItemSpoilerStateTsx2.__closure = items2;
  useMediaItemSpoilerStateTsx2.__workletHash = 9056847135964;
  useMediaItemSpoilerStateTsx2.__initData = tmp8;
  const items3 = [tmp5, tmp(1652).useAnimatedStyle(useMediaItemSpoilerStateTsx2)];
  return items3;
}
