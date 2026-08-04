import noop from "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import { Easing } from "module_4146";
import { Easing as Easing2 } from "module_4146";
import { Easing as Easing3 } from "module_4146";
import createCacheKey from "createCacheKey";
import set from "set";
import importDefaultResult from "module_4146";
import set from "jsxProd";

let c5;
let closure_6;
const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let c7 = "#2ECC71";
let result = (require("MINIMUM_HIT_AREA").SMALL_BUTTON_HEIGHT - 4) / 2;
const metroImportAll = result;
let closure_9 = 2 * Math.PI * result;
let closure_10 = Easing.bezier(0.15, 0.21, 0.58, 1);
let closure_11 = Easing2.bezier(0.61, 0, 0.58, 1);
let closure_12 = Easing3.bezier(0.42, 0, 0.58, 1);
let closure_13 = require("module_4146").createAnimatedComponent(require("inlineStyles").Circle);
let obj = { progress: null, ring: null, trackPath: null, countdownText: null, checkmarkLayer: null, checkmarkBackground: null, checkmarkIcon: null };
obj = { alignItems: "center", justifyContent: "center", backgroundColor: require("Themes").colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, borderRadius: require("Themes").radii.round, width: require("MINIMUM_HIT_AREA").SMALL_BUTTON_HEIGHT, height: require("MINIMUM_HIT_AREA").SMALL_BUTTON_HEIGHT };
obj[0] = obj;
let items = [{ rotate: "-90deg" }];
obj[1] = { position: "absolute", transform: items };
createCacheKey = { color: require("Themes").colors.BACKGROUND_SURFACE_HIGHEST };
obj[2] = createCacheKey;
let obj2 = { color: require("Themes").colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT, lineHeight: null };
let num;
if (set.isAndroid()) {
  num = 14;
}
obj2[1] = num;
obj[3] = obj2;
obj[4] = { position: "absolute", inset: 6, alignItems: "center", justifyContent: "center" };
obj[5] = { width: 20, height: 20, backgroundColor: "#2ECC71", borderRadius: require("Themes").radii.round };
obj[6] = { width: 20, height: 20 };
let closure_14 = createCacheKey.createStyles(obj);
let closure_15 = { code: "function BountiesModalTimerTsx1(){const{PROGRESS_CIRCUMFERENCE,animatedProgress}=this.__closure;return{strokeDashoffset:PROGRESS_CIRCUMFERENCE-PROGRESS_CIRCUMFERENCE*animatedProgress.get()};}" };
let closure_16 = { code: "function BountiesModalTimerTsx2(){const{checkmarkBackgroundScale}=this.__closure;return{transform:[{scale:checkmarkBackgroundScale.get()}]};}" };
let closure_17 = { code: "function BountiesModalTimerTsx3(){const{checkmarkScale}=this.__closure;return{transform:[{scale:checkmarkScale.get()}]};}" };
let result1 = set.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalTimer.tsx");

export default function BountiesModalTimer(arg0) {
  let isCompleted;
  let remainingSeconds;
  let totalSeconds;
  ({ isCompleted, totalSeconds, remainingSeconds } = arg0);
  let _require;
  let importDefault;
  let sharedValue;
  let sharedValue1;
  let sharedValue2;
  let callback;
  let tmp = callback3();
  let tmp2 = isCompleted;
  if (!isCompleted) {
    tmp2 = remainingSeconds <= 0;
  }
  _require = tmp2;
  importDefault = 0;
  const bound = Math.max(1, Math.ceil(remainingSeconds));
  if (isCompleted) {
    importDefault = 1;
    let num2 = 1;
  } else {
    num2 = 0;
    if (totalSeconds > 0) {
      const diff = 1 - remainingSeconds / totalSeconds;
      importDefault = diff;
      num2 = diff;
    }
  }
  let obj = _require(sharedValue[4]);
  sharedValue = obj.useSharedValue(num2);
  let obj1 = _require(sharedValue[4]);
  sharedValue1 = obj1.useSharedValue(0);
  let obj2 = _require(sharedValue[4]);
  sharedValue2 = obj2.useSharedValue(0);
  let items = [sharedValue, num2];
  const effect = sharedValue1.useEffect(() => {
    const result = sharedValue.set(_undefined(sharedValue[9]).withTiming(c1, { duration: 500 }, "animate-always"));
  }, items);
  callback = sharedValue1.useRef(false);
  const items1 = [tmp2, sharedValue1, sharedValue2];
  const effect1 = sharedValue1.useEffect(() => {
    ref.current = true;
    let tmp = sharedValue1;
    let withDelay = sharedValue1.set;
    if (_undefined) {
      if (ref.current) {
        let obj = _undefined(sharedValue[4]);
        let obj1 = _undefined(sharedValue[9]);
        obj = { duration: 267, easing: null };
        obj[1] = outer1_10;
        const withTimingResult = obj1.withTiming(1.65, obj);
        obj = { duration: 233, easing: null };
        obj[1] = outer1_11;
        withDelay(obj.withSequence(withTimingResult, _undefined(sharedValue[9]).withTiming(1, obj)));
        tmp = _undefined(sharedValue[4]);
        withDelay = tmp.withDelay;
        const obj4 = _undefined(sharedValue[9]);
        const obj6 = _undefined(sharedValue[4]);
        obj1 = { duration: 167, easing: null };
        obj1[1] = outer1_12;
        const obj7 = _undefined(sharedValue[9]);
        const withTimingResult1 = _undefined(sharedValue[9]).withTiming(1.25, obj1);
        const obj2 = { duration: 333, easing: null };
        obj2[1] = outer1_12;
        const result = sharedValue2.set(withDelay(167, obj6.withSequence(withTimingResult1, _undefined(sharedValue[9]).withTiming(1, obj2))));
        const obj9 = _undefined(sharedValue[9]);
      } else {
        withDelay(1);
        const result1 = sharedValue2.set(1);
      }
    } else {
      withDelay(0);
      const result2 = sharedValue2.set(0);
    }
  }, items1);
  let obj3 = _require(sharedValue[4]);
  class U {
    constructor() {
      obj = { strokeDashoffset: outer1_9 - outer1_9 * c2.get() };
      return obj;
    }
  }
  obj = { PROGRESS_CIRCUMFERENCE: closure_9, animatedProgress: sharedValue };
  U.__closure = obj;
  U.__workletHash = 12964700773124;
  U.__initData = closure_15;
  const animatedProps = obj3.useAnimatedProps(U);
  let obj5 = _require(sharedValue[4]);
  const fn = function x() {
    let obj = { transform: null };
    obj = { scale: sharedValue1.get() };
    const items = [obj];
    obj[0] = items;
    return obj;
  };
  fn.__closure = { checkmarkBackgroundScale: sharedValue1 };
  fn.__workletHash = 10834015407160;
  fn.__initData = closure_16;
  const animatedStyle = obj5.useAnimatedStyle(fn);
  let obj6 = _require(sharedValue[4]);
  class G {
    constructor() {
      obj = { transform: null };
      obj = { scale: ceil.get() };
      items = [];
      items[0] = obj;
      obj[0] = items;
      return obj;
    }
  }
  G.__closure = { checkmarkScale: sharedValue2 };
  G.__workletHash = 7510845920441;
  G.__initData = closure_17;
  obj = { style: tmp.progress, children: null };
  const animatedStyle1 = obj6.useAnimatedStyle(G);
  obj1 = { height: null, width: null, style: null, children: null };
  obj1[0] = _require(sharedValue[3]).SMALL_BUTTON_HEIGHT;
  obj1[1] = _require(sharedValue[3]).SMALL_BUTTON_HEIGHT;
  obj1[2] = tmp.ring;
  obj2 = { cx: null, cy: null, r: null, fill: "none", stroke: null, strokeWidth: 4 };
  obj2[0] = _require(sharedValue[3]).SMALL_BUTTON_HEIGHT / 2;
  obj2[1] = _require(sharedValue[3]).SMALL_BUTTON_HEIGHT / 2;
  obj2[2] = closure_8;
  obj2[4] = tmp.trackPath.color;
  const items2 = [callback(_require(sharedValue[5]).Circle, obj2), ];
  obj3 = { cx: _require(sharedValue[3]).SMALL_BUTTON_HEIGHT / 2, cy: _require(sharedValue[3]).SMALL_BUTTON_HEIGHT / 2, r: closure_8, fill: "none", stroke: c7, strokeWidth: 4, strokeDasharray: closure_9, strokeLinecap: "round", animatedProps };
  items2[1] = callback(closure_13, obj3);
  obj1[3] = items2;
  const items3 = [callback2(importDefault(sharedValue[5]), obj1), , , ];
  let tmp19Result = !tmp2;
  if (!tmp2) {
    let obj4 = { variant: "text-sm/semibold", style: null, maxFontSizeMultiplier: 1, children: null };
    obj4[1] = tmp.countdownText;
    obj4[3] = bound;
    tmp19Result = tmp19(tmp5(tmp6[10]).Text, obj4);
  }
  items3[1] = tmp19Result;
  obj5 = { style: items4, children: null };
  items4 = [tmp.checkmarkLayer, animatedStyle];
  obj6 = { style: tmp.checkmarkBackground };
  obj5[1] = callback(sharedValue2, obj6);
  items3[2] = callback(importDefault(sharedValue[4]).View, obj5);
  let obj7 = { style: items5, children: null };
  items5 = [tmp.checkmarkLayer, animatedStyle1];
  const obj8 = { size: "custom", color: null, style: null };
  obj8[1] = importDefault(sharedValue[7]).colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT;
  obj8[2] = tmp.checkmarkIcon;
  obj7[1] = callback(_require(sharedValue[11]).CheckmarkSmallBoldIcon, obj8);
  items3[3] = callback(importDefault(sharedValue[4]).View, obj7);
  obj[1] = items3;
  return callback2(sharedValue2, obj);
};