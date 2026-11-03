// discord_app/modules/collectibles/native/CollectiblesProgressiveImage.tsx
import _mod1652 from "../../../../_runtime/metro/01652__.js";
import timing_timing from "../../../design/animation/reanimated/timing/timing.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;
const _modDef1652 = _mod1652;

require = fn;
const StyleSheet = fn(17).StyleSheet;
const jsx = fn(21).jsx;
let closure_5 = {
  code: "(function CollectiblesProgressiveImageTsx1(){let[backgroundImageOpacity]=this.__closure;return{opacity:backgroundImageOpacity.get()};})",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesProgressiveImage.tsx");

export function CollectiblesProgressiveImage(arg0) {
  ({ source, style } = arg0);
  const merged = Object.assign(arg0, Object.assign({ source: 0, style: 0 }));
  _require = undefined;
  const sharedValue = require("../../../../_runtime/metro/01652__.js").useSharedValue(0);
  _require = sharedValue;
  const obj = require("../../../../_runtime/metro/01652__.js");
  items = [closure_5, sharedValue];
  _require = undefined;
  [tmp4, tmp5] = items;
  class CollectiblesProgressiveImageTsx1 {
    constructor() {
      obj = { opacity: closure_0.get() };
      return obj;
    }
  }
  const items1 = [tmp5];
  CollectiblesProgressiveImageTsx1.__closure = items1;
  CollectiblesProgressiveImageTsx1.__workletHash = 7073856696811;
  CollectiblesProgressiveImageTsx1.__initData = tmp4;
  const animatedStyle = require("../../../../_runtime/metro/01652__.js").useAnimatedStyle(
    CollectiblesProgressiveImageTsx1,
  );
  const obj3 = { style: null, children: null };
  const items2 = [style, animatedStyle];
  obj3.style = items2;
  const obj4 = {};
  let obj2 = require("../../../../_runtime/metro/01652__.js");
  const merged1 = Object.assign(merged);
  obj4.source = source;
  obj4.style = StyleSheet.absoluteFill;
  obj4.fadeDuration = 0;
  obj4.onLoad = function handleImageLoad() {
    const obj2 = { duration: 500, easing: null };
    const Easing = _mod1652.Easing;
    obj2.easing = Easing.inOut(_mod1652.Easing.ease);
    const result = _undefined.set(timing_timing.withTiming(1, obj2));
  };
  obj3.children = jsx(FastImageDefault, {});
  return jsx(_modDef1652.View, { style: null, children: null });
}
