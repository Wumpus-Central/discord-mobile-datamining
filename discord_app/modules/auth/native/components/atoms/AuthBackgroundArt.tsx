// discord_app/modules/auth/native/components/atoms/AuthBackgroundArt.tsx
import timing_timing from "../../../../../design/animation/reanimated/timing/timing.tsx";
import timingPresets from "../../../../../design/animation/reanimated/timing/timingPresets.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
const StyleSheet = get_ActivityIndicator.StyleSheet;
const View = get_ActivityIndicator.View;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
let obj = { container: null };
let obj2 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj2.backgroundColor = "#07064C";
obj.container = obj2;
const container = StyleSheet.create(obj);
let closure_9 = {
  code: "(function AuthBackgroundArtTsx1(){let[squareOpacity]=this.__closure;return{opacity:squareOpacity.get()};})",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/auth/native/components/atoms/AuthBackgroundArt.tsx");

export default noop.memo(function AuthBackgroundArt() {
  const tmp3 = sharedValue(7647)();
  _require = tmp3;
  let num = 0;
  if ("square" === tmp3) {
    num = 1;
  }
  sharedValue = require("../../../../../../_runtime/metro/01652__.js").useSharedValue(num);
  items = [tmp3, sharedValue];
  const effect = noop.useEffect(() => {
    let num = 0;
    if ("square" === c0) {
      num = 1;
    }
    const result = sharedValue.set(timing_timing.withTiming(num, timingPresets.timingStandard));
  }, items);
  let obj = require("../../../../../../_runtime/metro/01652__.js");
  const items1 = [closure_9, sharedValue];
  _require = undefined;
  [tmp7, tmp8] = items1;
  class AuthBackgroundArtTsx1 {
    constructor() {
      obj = { opacity: closure_0.get() };
      return obj;
    }
  }
  const items2 = [tmp8];
  AuthBackgroundArtTsx1.__closure = items2;
  AuthBackgroundArtTsx1.__workletHash = 5771106652293;
  AuthBackgroundArtTsx1.__initData = tmp7;
  const obj2 = {
    style: container.container,
    pointerEvents: "none",
    accessible: false,
    accessibilityElementsHidden: true,
    importantForAccessibility: "no-hide-descendants",
    children: null,
  };
  const animatedStyle = require("../../../../../../_runtime/metro/01652__.js").useAnimatedStyle(AuthBackgroundArtTsx1);
  const obj3 = { backgroundImageSource: null, backgroundImageCover: true };
  const tmp4Result = require("../../../../../../_runtime/metro/01652__.js");
  obj3.backgroundImageSource = sharedValue(7651);
  const items3 = [closure_6(sharedValue(7648), obj3)];
  const obj4 = { style: null, children: null };
  const items4 = [StyleSheet.absoluteFill, animatedStyle];
  obj4.style = items4;
  const obj5 = { backgroundImageSource: null, backgroundImageCover: true };
  const tmpResult = sharedValue(7648);
  obj5.backgroundImageSource = sharedValue(7652);
  obj4.children = closure_6(sharedValue(7648), obj5);
  items3[1] = closure_6(sharedValue(1652).View, obj4);
  obj2.children = items3;
  return closure_7(View, obj2);
});
