// === Module 9508: Nameplate ===

// Module 9508 (Nameplate)
import _mod1655 from "module_1655" /* 1655 */;
import timing_timing from "timing/timing" /* 5548 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5307 */;

require = fn;
function NameplateInner(isFocused) {
  ({ nameplate, isPressed } = isFocused);
  if (isPressed === undefined) {
    isPressed = false;
  }
  let flag = isFocused.isFocused;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = isFocused.isMuted;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = isFocused.fullOpacity;
  if (flag3 === undefined) {
    flag3 = false;
  }
  let flag4 = isFocused.isSquarePreview;
  if (flag4 === undefined) {
    flag4 = false;
  }
  let flag5 = isFocused.invertPressOpacity;
  if (flag5 === undefined) {
    flag5 = false;
  }
  let flag6 = isFocused.fadeIn;
  if (flag6 === undefined) {
    flag6 = false;
  }
  _require = flag6;
  let flag7 = isFocused.animate;
  if (flag7 === undefined) {
    flag7 = false;
  }
  let sharedValue;
  items = [AccessibilityStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const tmp4 = closure_7(flag3, isPressed, flag, flag2, flag5);
  let obj = require("initialize");
  const tmp6 = sharedValue(5547)();
  let num = 1;
  if (flag6) {
    num = 0;
  }
  sharedValue = require("module_1655").useSharedValue(num);
  const items1 = [sharedValue, flag6];
  const effect = noop.useEffect(() => {
    if (c0) {
      const obj2 = { duration: 100, easing: null };
      const Easing = _mod1655.Easing;
      obj2.easing = Easing.in(_mod1655.Easing.ease);
      const result = sharedValue.set(timing_timing.withTiming(1, obj2));
    }
  }, items1);
  let obj2 = require("module_1655");
  const items2 = [closure_8, sharedValue];
  _require = undefined;
  [tmp9, tmp10] = items2;
  class NameplateTsx1 {
    constructor() {
      obj = { opacity: closure_0.get() };
      return obj;
    }
  }
  const items3 = [tmp10];
  NameplateTsx1.__closure = items3;
  NameplateTsx1.__workletHash = 2118555458479;
  NameplateTsx1.__initData = tmp9;
  const animatedStyle = require("module_1655").useAnimatedStyle(NameplateTsx1);
  const tmpResult = require("module_1655");
  const backgroundGradientColors = require("utils").getBackgroundGradientColors(nameplate.palette, tmp6);
  const tmpResult3 = require("utils");
  const nameplateAssets = require("NameplateUtils").getNameplateAssets(nameplate);
  let str = nameplateAssets.staticImageUrl;
  let tmp14 = true === flag7;
  if (tmp14) {
    tmp14 = !stateFromStores;
  }
  if (!tmp14) {
    tmp14 = "always" === flag7;
  }
  if (tmp14) {
    str = nameplateAssets.animatedImageUrl;
  }
  if (str == null) {
    str = "";
  }
  const obj3 = { style: null, children: null };
  const items4 = [tmp4.container, isFocused.style, animatedStyle];
  obj3.style = items4;
  let tmp17Result = null;
  if (null != backgroundGradientColors) {
    const obj4 = { style: tmp4.gradient, start: null, end: null, colors: null };
    let num2 = 0;
    if (flag4) {
      num2 = -2;
    }
    const point = { x: num2, y: 0 };
    obj4.start = point;
    obj4.end = { x: 1, y: 0 };
    const items5 = [, ];
    ({ left: arr6[0], right: arr6[1] } = backgroundGradientColors);
    obj4.colors = items5;
    tmp17Result = closure_5(tmp5(5893), obj4);
    const tmp5Result = tmp5(5893);
  }
  const items6 = [tmp17Result, closure_5(sharedValue(6020), { source: { uri: str }, style: tmp4.img, accessibilityRole: "image", enableAnimation: tmp14 })];
  obj3.children = items6;
  return closure_6(sharedValue(1655).View, obj3);
}
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: closure_6 } = jsxProd);
const createStyles = fn(5306);
let closure_7 = createStyles.createStyles((arg0, arg1, arg2, arg3, arg4) => {
  const obj = { container: { position: "absolute", overflow: "hidden", top: 0, bottom: 0, left: 0, right: 0 }, gradient: null, img: null };
  let num = 1;
  let num2 = 1;
  if (!arg0) {
    if (arg3) {
      if (!arg2) {
        num2 = 0;
      }
    }
    if (arg1) {
    }
  }
  obj.gradient = { position: "absolute", width: "100%", height: "100%", opacity: num2 };
  if (!arg0) {
    if (arg3) {
      if (!arg2) {
        num = 0.1;
      }
    }
    if (arg1) {
    }
  }
  obj.img = { position: "absolute", height: "100%", right: 0, aspectRatio: 5.333333333333333, opacity: num };
  return obj;
});
let closure_8 = { code: "(function NameplateTsx1(){let[opacity]=this.__closure;return{opacity:opacity.get()};})" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/nameplates/native/Nameplate.tsx");

export default function Nameplate(nameplate) {
  nameplate = nameplate.nameplate;
  let tmp = null;
  const merged = Object.assign(nameplate, Object.assign({ nameplate: 0 }));
  if (null != nameplate) {
    const obj = { nameplate };
    const merged1 = Object.assign(merged);
    obj["aria-hidden"] = true;
    tmp = hasOwnProperty(NameplateInner, obj);
  }
  return tmp;
};