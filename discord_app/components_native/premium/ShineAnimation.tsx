// discord_app/components_native/premium/ShineAnimation.tsx
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import _modDef671 from "../../../_runtime/metro/00671__.js";
import _mod1652 from "../../../_runtime/metro/01652__.js";
import timing_timing from "../../design/animation/reanimated/timing/timing.tsx";
import FastImageDefault from "../common/FastImage.tsx";
import noop from "../../../_runtime/metro/00019__.js";

const require = globalThis.__r;
const _modDef1652 = _mod1652;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: closure_6 } = jsxProd);
let closure_7 = Object.freeze({ FLASH_TIME_PERCENT: 0.72, FLASH_DURATION_PERCENT: 0.08 });
const createStyles = fn(5140);
let obj = { container: { overflow: "hidden" }, shineContainer: null, shine: null, shineInner: null };
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj.shineContainer = {};
let size = { transform: null, width: 56, flex: 0, height: "300%", top: "-10%" };
let items = [{ rotate: "30deg" }];
size.transform = items;
obj.shine = size;
obj.shineInner = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, flex: 1 };
let closure_8 = createStyles.createStyles(obj);
let closure_9 = {
  code: '(function ShineAnimationTsx1(){let[interpolate,progress]=this.__closure;const widthPercent=interpolate(progress.get(),[0,1],[20,160]);return{width:widthPercent+"%"};})',
};
let closure_10 = {
  code: "(function ShineAnimationTsx2(){let[ShineAnimationConfig,interpolateColor,progress,flashStartColor,flashEndColor]=this.__closure;const startTime=ShineAnimationConfig.FLASH_TIME_PERCENT;const duration=ShineAnimationConfig.FLASH_DURATION_PERCENT;return{backgroundColor:interpolateColor(progress.get(),[0,startTime,startTime,startTime+duration,1],[flashStartColor,flashStartColor,flashEndColor,flashEndColor,flashStartColor])};})",
};
let obj3 = {};
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, flex: 1 };
size = fn(2);
let result = size.fileFinishedImporting("components_native/premium/ShineAnimation.tsx");

export default noop.memo(function ShineAnimation(arg0) {
  _require = undefined;
  ({ source, style } = arg0);
  const tmp = closure_8();
  const sharedValue = require("../../../_runtime/metro/01652__.js").useSharedValue(0);
  _require = sharedValue;
  items = [sharedValue];
  const effect = noop.useEffect(() => {
    const obj = _mod1652;
    const obj2 = _mod1652;
    const result = _undefined.set(
      obj.withDelay(400, obj2.withRepeat(timing_timing.withTiming(1, { duration: 1000 }), -1, false)),
    );
  }, items);
  let obj = require("../../../_runtime/metro/01652__.js");
  let items1 = [closure_9, require("../../../_runtime/metro/01652__.js").interpolate, sharedValue];
  _require = undefined;
  importDefault = undefined;
  [tmp6, tmp7, tmp8] = items1;
  class ShineAnimationTsx1 {
    constructor() {
      obj = { width: "" + closure_0(closure_1.get(), [0, 1], [20, 160]) + "%" };
      return obj;
    }
  }
  const items2 = [tmp7, tmp8];
  ShineAnimationTsx1.__closure = items2;
  ShineAnimationTsx1.__workletHash = 2390175696032;
  ShineAnimationTsx1.__initData = tmp6;
  const animatedStyle = require("../../../_runtime/metro/01652__.js").useAnimatedStyle(ShineAnimationTsx1);
  let obj2 = require("../../../_runtime/metro/01652__.js");
  const tmp11Result = _modDef671(nativeDefault.unsafe_rawColors.BRAND_360);
  const alphaResult = _modDef671(nativeDefault.unsafe_rawColors.BRAND_360).alpha(0.2);
  const hexResult = _modDef671(nativeDefault.unsafe_rawColors.BRAND_360).alpha(0.2).hex();
  const tmp13Result = _modDef671(nativeDefault.unsafe_rawColors.BRAND_360);
  const alphaResult1 = _modDef671(nativeDefault.unsafe_rawColors.BRAND_360).alpha(1);
  const hexResult1 = _modDef671(nativeDefault.unsafe_rawColors.BRAND_360).alpha(1).hex();
  const items3 = [
    closure_10,
    closure_7,
    require("../../../_runtime/metro/01652__.js").interpolateColor,
    sharedValue,
    hexResult,
    hexResult1,
  ];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  c4 = undefined;
  [tmp15, tmp16, tmp17, tmp18, tmp19, tmp20] = items3;
  class ShineAnimationTsx2 {
    constructor() {
      FLASH_TIME_PERCENT = closure_0.FLASH_TIME_PERCENT;
      obj = { backgroundColor: null };
      items = [0];
      items[1] = FLASH_TIME_PERCENT;
      items[2] = FLASH_TIME_PERCENT;
      items[3] = FLASH_TIME_PERCENT + closure_0.FLASH_DURATION_PERCENT;
      items[4] = 1;
      items1 = [, , , ,];
      items1[0] = closure_3;
      items1[1] = closure_3;
      items1[2] = closure_4;
      items1[3] = closure_4;
      items1[4] = closure_3;
      obj.backgroundColor = closure_1(closure_2.get(), items, items1);
      return obj;
    }
  }
  const items4 = [tmp16, tmp17, tmp18, tmp19, tmp20];
  ShineAnimationTsx2.__closure = items4;
  ShineAnimationTsx2.__workletHash = 15848815967493;
  ShineAnimationTsx2.__initData = tmp15;
  const animatedStyle1 = require("../../../_runtime/metro/01652__.js").useAnimatedStyle(ShineAnimationTsx2);
  const obj3 = { style: null, children: null };
  const items5 = [tmp.container, style, animatedStyle1];
  obj3.style = items5;
  const obj4 = { style: tmp.shineContainer, children: null };
  const items6 = [closure_5(_modDef1652.View, { style: animatedStyle })];
  const obj5 = { style: tmp.shine, children: closure_5(c4, { style: tmp.shineInner }) };
  items6[1] = closure_5(c4, obj5);
  obj4.children = items6;
  const items7 = [closure_6(c4, obj4), closure_5(FastImageDefault, { source })];
  obj3.children = items7;
  return closure_6(_modDef1652.View, obj3);
});
