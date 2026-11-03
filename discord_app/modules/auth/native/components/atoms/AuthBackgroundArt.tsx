// === Module 7073: AuthBackgroundArt ===

// Module 7073 (AuthBackgroundArt)
import timing_timing from "timing/timing" /* 5377 */;
import timingPresets from "timingPresets" /* 5380 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
const StyleSheet = get_ActivityIndicator.StyleSheet;
const View = get_ActivityIndicator.View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let obj = { container: null };
let obj2 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj2.backgroundColor = "#07064C";
obj.container = obj2;
const container = StyleSheet.create(obj);
let closure_9 = { code: "(function AuthBackgroundArtTsx1(){let[squareOpacity]=this.__closure;return{opacity:squareOpacity.get()};})" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/auth/native/components/atoms/AuthBackgroundArt.tsx");

export default noop.memo(function AuthBackgroundArt() {
  const tmp3 = sharedValue(7074)();
  _require = tmp3;
  let num = 0;
  if ("square" === tmp3) {
    num = 1;
  }
  sharedValue = require("module_1652").useSharedValue(num);
  items = [tmp3, sharedValue];
  const effect = noop.useEffect(() => {
    let num = 0;
    if ("square" === c0) {
      num = 1;
    }
    const result = sharedValue.set(timing_timing.withTiming(num, timingPresets.timingStandard));
  }, items);
  let obj = require("module_1652");
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
  const obj2 = { style: container.container, pointerEvents: "none", accessible: false, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
  const animatedStyle = require("module_1652").useAnimatedStyle(AuthBackgroundArtTsx1);
  const obj3 = { backgroundImageSource: null, backgroundImageCover: true };
  const tmp4Result = require("module_1652");
  obj3.backgroundImageSource = sharedValue(7078);
  const items3 = [closure_6(sharedValue(7075), obj3), ];
  const obj4 = { style: null, children: null };
  const items4 = [StyleSheet.absoluteFill, animatedStyle];
  obj4.style = items4;
  const obj5 = { backgroundImageSource: null, backgroundImageCover: true };
  const tmpResult = sharedValue(7075);
  obj5.backgroundImageSource = sharedValue(7079);
  obj4.children = closure_6(sharedValue(7075), obj5);
  items3[1] = closure_6(sharedValue(1652).View, obj4);
  obj2.children = items3;
  return closure_7(View, obj2);
});