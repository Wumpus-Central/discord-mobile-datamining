// === Module 17224: BountiesModalTimer ===

// Module 17224 (BountiesModalTimer)
import nativeDefault from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import timing_timing from "timing/timing" /* 5400 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;
const module_1652 = _mod1652;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: closure_6 } = jsxProd);
let c7 = "#2ECC71";
let result = (fn(5794).SMALL_BUTTON_HEIGHT - 4) / 2;
const strokeDasharray = 2 * Math.PI * result;
const Easing = fn(1652).Easing;
let closure_10 = Easing.bezier(0.15, 0.21, 0.58, 1);
const Easing2 = fn(1652).Easing;
let closure_11 = Easing2.bezier(0.61, 0, 0.58, 1);
const Easing3 = fn(1652).Easing;
let closure_12 = Easing3.bezier(0.42, 0, 0.58, 1);
let closure_13 = module_1652.createAnimatedComponent(fn(8122).Circle);
const createStyles = fn(5170);
let obj = { progress: null, ring: null, trackPath: null, countdownText: null, checkmarkLayer: null, checkmarkBackground: null, checkmarkIcon: null };
let size = { alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.round, width: fn(5794).SMALL_BUTTON_HEIGHT, height: fn(5794).SMALL_BUTTON_HEIGHT };
obj.progress = size;
let obj3 = { position: "absolute", transform: null };
let items = [{ rotate: "-90deg" }];
obj3.transform = items;
obj.ring = obj3;
obj.trackPath = { color: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST };
let obj5 = { color: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT, lineHeight: null };
const PlatformUtils = fn(1377);
let num;
if (PlatformUtils.isAndroid()) {
  num = 14;
}
obj5.lineHeight = num;
obj.countdownText = obj5;
obj.checkmarkLayer = { position: "absolute", inset: 6, alignItems: "center", justifyContent: "center" };
const size1 = { width: 20, height: 20, backgroundColor: "#2ECC71", borderRadius: nativeDefault.radii.round };
obj.checkmarkBackground = size1;
obj.checkmarkIcon = { width: 20, height: 20 };
let closure_14 = createStyles.createStyles(obj);
let closure_15 = { code: "(function BountiesModalTimerTsx1(){let[PROGRESS_CIRCUMFERENCE,animatedProgress]=this.__closure;return{strokeDashoffset:PROGRESS_CIRCUMFERENCE-PROGRESS_CIRCUMFERENCE*animatedProgress.get()};})" };
let closure_16 = { code: "(function BountiesModalTimerTsx2(){let[checkmarkBackgroundScale]=this.__closure;return{transform:[{scale:checkmarkBackgroundScale.get()}]};})" };
let closure_17 = { code: "(function BountiesModalTimerTsx3(){let[checkmarkScale]=this.__closure;return{transform:[{scale:checkmarkScale.get()}]};})" };
size = fn(2);
let result1 = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalTimer.tsx");

export default function BountiesModalTimer(arg0) {
  ({ isCompleted, totalSeconds, remainingSeconds } = arg0);
  _require = undefined;
  importDefault = undefined;
  let sharedValue;
  let sharedValue1;
  let sharedValue2;
  let ref;
  let tmp = closure_14();
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
  sharedValue = require("module_1652").useSharedValue(num2);
  let obj = require("module_1652");
  sharedValue1 = require("module_1652").useSharedValue(0);
  let obj2 = require("module_1652");
  sharedValue2 = require("module_1652").useSharedValue(0);
  items = [sharedValue, num2];
  const effect = sharedValue1.useEffect(() => {
    const result = sharedValue.set(timing_timing.withTiming(c1, { duration: 500 }, "animate-always"));
  }, items);
  ref = sharedValue1.useRef(false);
  const items1 = [tmp2, sharedValue1, sharedValue2];
  const effect1 = sharedValue1.useEffect(() => {
    ref.current = true;
    let tmp = sharedValue1;
    let withDelay = sharedValue1.set;
    if (c0) {
      if (ref.current) {
        const obj = _mod1652;
        const obj3 = { duration: 267, easing };
        const withTimingResult = timing_timing.withTiming(1.65, obj3);
        const obj5 = { duration: 233, easing: easing2 };
        withDelay(obj.withSequence(withTimingResult, timing_timing.withTiming(1, obj5)));
        tmp = _mod1652;
        withDelay = tmp.withDelay;
        const obj6 = _mod1652;
        const obj8 = { duration: 167, easing: easing3 };
        const withTimingResult1 = timing_timing.withTiming(1.25, obj8);
        const obj10 = { duration: 333, easing: easing3 };
        const result = sharedValue2.set(withDelay(167, obj6.withSequence(withTimingResult1, timing_timing.withTiming(1, obj10))));
      } else {
        withDelay(1);
        const result1 = sharedValue2.set(1);
      }
    } else {
      withDelay(0);
      const result2 = sharedValue2.set(0);
    }
  }, items1);
  let obj3 = require("module_1652");
  const items2 = [closure_15, strokeDasharray, sharedValue];
  _require = undefined;
  importDefault = undefined;
  [tmp13, tmp14, tmp15] = items2;
  class BountiesModalTimerTsx1 {
    constructor() {
      obj = { strokeDashoffset: closure_0 - closure_0 * closure_1.get() };
      return obj;
    }
  }
  const items3 = [tmp14, tmp15];
  BountiesModalTimerTsx1.__closure = items3;
  BountiesModalTimerTsx1.__workletHash = 1981431490589;
  BountiesModalTimerTsx1.__initData = tmp13;
  const animatedProps = require("module_1652").useAnimatedProps(BountiesModalTimerTsx1);
  let obj4 = require("module_1652");
  const items4 = [closure_16, sharedValue1];
  _require = undefined;
  [tmp17, tmp18] = items4;
  class BountiesModalTimerTsx2 {
    constructor() {
      obj = { transform: null };
      obj1 = { scale: closure_0.get() };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  const items5 = [tmp18];
  BountiesModalTimerTsx2.__closure = items5;
  BountiesModalTimerTsx2.__workletHash = 3015849196897;
  BountiesModalTimerTsx2.__initData = tmp17;
  const animatedStyle = require("module_1652").useAnimatedStyle(BountiesModalTimerTsx2);
  const tmp5Result = require("module_1652");
  const items6 = [closure_17, sharedValue2];
  _require = undefined;
  [tmp20, tmp21] = items6;
  class BountiesModalTimerTsx3 {
    constructor() {
      obj = { transform: null };
      obj1 = { scale: closure_0.get() };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  const items7 = [tmp21];
  BountiesModalTimerTsx3.__closure = items7;
  BountiesModalTimerTsx3.__workletHash = 10659255628480;
  BountiesModalTimerTsx3.__initData = tmp20;
  let obj5 = { style: tmp.progress, children: null };
  const animatedStyle1 = require("module_1652").useAnimatedStyle(BountiesModalTimerTsx3);
  const size = { height: null, width: null, style: null, children: null };
  const tmp5Result2 = require("module_1652");
  size.height = require("ButtonConstants").SMALL_BUTTON_HEIGHT;
  size.width = require("ButtonConstants").SMALL_BUTTON_HEIGHT;
  size.style = tmp.ring;
  const tmp26 = require("inlineStyles");
  const items8 = [ref(require("inlineStyles").Circle, { cx: require("ButtonConstants").SMALL_BUTTON_HEIGHT / 2, cy: require("ButtonConstants").SMALL_BUTTON_HEIGHT / 2, r, fill: "none", stroke: tmp.trackPath.color, strokeWidth: 4 }), ];
  let obj6 = { cx: require("ButtonConstants").SMALL_BUTTON_HEIGHT / 2, cy: require("ButtonConstants").SMALL_BUTTON_HEIGHT / 2, r, fill: "none", stroke: tmp.trackPath.color, strokeWidth: 4 };
  items8[1] = ref(closure_13, { cx: require("ButtonConstants").SMALL_BUTTON_HEIGHT / 2, cy: require("ButtonConstants").SMALL_BUTTON_HEIGHT / 2, r, fill: "none", stroke, strokeWidth: 4, strokeDasharray, strokeLinecap: "round", animatedProps });
  size.children = items8;
  const items9 = [closure_6(tmp26, size), , , ];
  let tmp27Result = !tmp2;
  if (!tmp2) {
    let obj8 = { variant: "body-sm/semibold", style: tmp.countdownText, maxFontSizeMultiplier: 1, children: bound };
    tmp27Result = tmp27(tmp5(tmp6[10]).Text, obj8);
  }
  items9[1] = tmp27Result;
  let obj9 = { style: null, children: ref(sharedValue2, { style: tmp.checkmarkBackground }) };
  const items10 = [tmp.checkmarkLayer, animatedStyle];
  obj9.style = items10;
  items9[2] = ref(require("module_1652").View, obj9);
  const obj11 = { style: null, children: null };
  const items11 = [tmp.checkmarkLayer, animatedStyle1];
  obj11.style = items11;
  let obj10 = { style: tmp.checkmarkBackground };
  let obj7 = { cx: require("ButtonConstants").SMALL_BUTTON_HEIGHT / 2, cy: require("ButtonConstants").SMALL_BUTTON_HEIGHT / 2, r, fill: "none", stroke, strokeWidth: 4, strokeDasharray, strokeLinecap: "round", animatedProps };
  obj11.children = ref(require("CheckmarkSmallBoldIcon").CheckmarkSmallBoldIcon, { size: "custom", color: require("native").colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT, style: tmp.checkmarkIcon });
  items9[3] = ref(require("module_1652").View, obj11);
  obj5.children = items9;
  return closure_6(sharedValue2, obj5);
};