// === Module 16500: SpeakerPulse ===

// Module 16500 (SpeakerPulse)
import nativeDefault from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import timing_timing from "timing/timing" /* 5485 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5244 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_6, Fragment: metroImportDefault, jsxs: closure_8 } = jsxProd);
let c9 = 0.16;
const createStyles = fn(5243);
let obj2 = { pulse: { backgroundColor: nativeDefault.colors.WHITE }, border: null };
let obj3 = { backgroundColor: nativeDefault.colors.WHITE };
obj2.border = { backgroundColor: nativeDefault.colors.STATUS_SPEAKING };
let closure_10 = createStyles.createStyles(obj2);
let closure_11 = { code: "(function SpeakerPulseTsx1(){let[animatedInnerOpacity]=this.__closure;return{opacity:animatedInnerOpacity.get()};})" };
let closure_12 = { code: "(function SpeakerPulseTsx2(){let[animatedOuterOpacity]=this.__closure;return{opacity:animatedOuterOpacity.get()};})" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/stage_channels/native/components/SpeakerPulse.tsx");

export default function SpeakerPulse(style) {
  style = style.style;
  _require = undefined;
  let sharedValue1;
  const tmp = closure_10();
  items = [AccessibilityStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => !useReducedMotion.useReducedMotion, []);
  _require = stateFromStores;
  const obj = require("initialize");
  const tmp2 = _require;
  const sharedValue = require("module_1652").useSharedValue(c9);
  let obj2 = require("module_1652");
  sharedValue1 = require("module_1652").useSharedValue(c9);
  const items1 = [stateFromStores, sharedValue, sharedValue1];
  const effect = noop.useEffect(() => {
    if (c0) {
      const result = set(0);
      const result1 = sharedValue1.set(0);
      const obj2 = _mod1652;
      const obj3 = _mod1652;
      const obj4 = _mod1652;
      const withDelayResult = obj4.withDelay(100, timing_timing.withTiming(c9, { duration: 250 }));
      const obj6 = _mod1652;
      const withRepeatResult = obj2.withRepeat(obj3.withSequence(withDelayResult, obj6.withDelay(250, timing_timing.withTiming(0, { duration: 500 }))), -1, false);
      const obj8 = _mod1652;
      const obj9 = _mod1652;
      const obj10 = _mod1652;
      const withDelayResult1 = obj10.withDelay(350, timing_timing.withTiming(c9, { duration: 250 }));
      const result2 = sharedValue.set(withRepeatResult);
      const result3 = sharedValue1.set(obj8.withRepeat(obj9.withSequence(withDelayResult1, timing_timing.withTiming(0, { duration: 500 })), -1, false));
      const withRepeatResult1 = obj8.withRepeat(obj9.withSequence(withDelayResult1, timing_timing.withTiming(0, { duration: 500 })), -1, false);
    } else {
      const result4 = set(c9);
      const result5 = sharedValue1.set(c9);
    }
  }, items1);
  let obj3 = require("module_1652");
  const items2 = [closure_11, sharedValue];
  _require = undefined;
  [tmp8, tmp9] = items2;
  class SpeakerPulseTsx1 {
    constructor() {
      obj = { opacity: closure_0.get() };
      return obj;
    }
  }
  const items3 = [tmp9];
  SpeakerPulseTsx1.__closure = items3;
  SpeakerPulseTsx1.__workletHash = 867418052896;
  SpeakerPulseTsx1.__initData = tmp8;
  const animatedStyle = require("module_1652").useAnimatedStyle(SpeakerPulseTsx1);
  let obj4 = require("module_1652");
  const items4 = [closure_12, sharedValue1];
  _require = undefined;
  [tmp11, tmp12] = items4;
  class SpeakerPulseTsx2 {
    constructor() {
      obj = { opacity: closure_0.get() };
      return obj;
    }
  }
  const items5 = [tmp12];
  SpeakerPulseTsx2.__closure = items5;
  SpeakerPulseTsx2.__workletHash = 12945159140547;
  SpeakerPulseTsx2.__initData = tmp11;
  let obj5 = { children: null };
  let obj6 = { style: null };
  const items6 = [tmp.border, style];
  obj6.style = items6;
  const animatedStyle1 = tmp2(sharedValue1[7]).useAnimatedStyle(SpeakerPulseTsx2);
  const items7 = [closure_6(View, obj6), , ];
  let obj7 = { style: null };
  const items8 = [tmp.pulse, style, animatedStyle, ];
  let obj8 = { transform: null };
  const items9 = [{ scale: 1.5 }];
  obj8.transform = items9;
  items8[3] = obj8;
  obj7.style = items8;
  items7[1] = closure_6(sharedValue(sharedValue1[7]).View, obj7);
  let obj9 = { style: null };
  const items10 = [tmp.pulse, style, animatedStyle1, ];
  let obj10 = { transform: null };
  const items11 = [{ scale: 2 }];
  obj10.transform = items11;
  items10[3] = obj10;
  obj9.style = items10;
  items7[2] = closure_6(sharedValue(sharedValue1[7]).View, obj9);
  obj5.children = items7;
  return closure_8(closure_7, obj5);
};