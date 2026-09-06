// === Module 15041: BountiesModalTimer ===

// Module 15041 (BountiesModalTimer)
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport2 from "ReanimatedRexport" /* 4296 */;
import timing from "timing" /* 4561 */;
import noop from "module_19" /* 19 */;

const ReanimatedRexport = ReanimatedRexport2;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let c7 = "#2ECC71";
let result = (fn(4980).SMALL_BUTTON_HEIGHT - 4) / 2;
let closure_9 = 2 * Math.PI * result;
const Easing = fn(4296).Easing;
let closure_10 = Easing.bezier(0.15, 0.21, 0.58, 1);
const Easing2 = fn(4296).Easing;
let closure_11 = Easing2.bezier(0.61, 0, 0.58, 1);
const Easing3 = fn(4296).Easing;
let closure_12 = Easing3.bezier(0.42, 0, 0.58, 1);
let closure_13 = ReanimatedRexport.createAnimatedComponent(fn(8453).Circle);
fn(4560);
let obj = { progress: null, ring: null, trackPath: null, countdownText: null, checkmarkLayer: null, checkmarkBackground: null, checkmarkIcon: null };
let size = { alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.round, width: fn(4980).SMALL_BUTTON_HEIGHT, height: fn(4980).SMALL_BUTTON_HEIGHT };
obj.progress = size;
obj = { position: "absolute", transform: null };
let items = [{ rotate: "-90deg" }];
obj.transform = items;
obj.ring = obj;
const createStyles = { color: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST };
obj.trackPath = createStyles;
let obj2 = { color: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT, lineHeight: null };
const PlatformUtils = fn(1115);
let num;
if (PlatformUtils.isAndroid()) {
  num = 14;
}
obj2.lineHeight = num;
obj.countdownText = obj2;
obj.checkmarkLayer = { position: "absolute", inset: 6, alignItems: "center", justifyContent: "center" };
const size1 = { width: 20, height: 20, backgroundColor: "#2ECC71", borderRadius: nativeDefault.radii.round };
obj.checkmarkBackground = size1;
obj.checkmarkIcon = { width: 20, height: 20 };
let closure_14 = createStyles.createStyles(obj);
const __initData = { code: "function BountiesModalTimerTsx1(){const{PROGRESS_CIRCUMFERENCE,animatedProgress}=this.__closure;return{strokeDashoffset:PROGRESS_CIRCUMFERENCE-PROGRESS_CIRCUMFERENCE*animatedProgress.get()};}" };
const __initData2 = { code: "function BountiesModalTimerTsx2(){const{checkmarkBackgroundScale}=this.__closure;return{transform:[{scale:checkmarkBackgroundScale.get()}]};}" };
const __initData3 = { code: "function BountiesModalTimerTsx3(){const{checkmarkScale}=this.__closure;return{transform:[{scale:checkmarkScale.get()}]};}" };
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
  let obj = require("ReanimatedRexport");
  sharedValue = obj.useSharedValue(num2);
  let obj1 = require("ReanimatedRexport");
  sharedValue1 = obj1.useSharedValue(0);
  let obj2 = require("ReanimatedRexport");
  sharedValue2 = obj2.useSharedValue(0);
  let items = [sharedValue, num2];
  const effect = sharedValue1.useEffect(() => {
    const result = sharedValue.set(timing.withTiming(c1, { duration: 500 }, "animate-always"));
  }, items);
  ref = sharedValue1.useRef(false);
  const items1 = [tmp2, sharedValue1, sharedValue2];
  const effect1 = sharedValue1.useEffect(() => {
    ref.current = true;
    let tmp = sharedValue1;
    let withDelay = sharedValue1.set;
    if (closure_0) {
      if (ref.current) {
        let obj1 = timing;
        let obj = { duration: 267, easing };
        const withTimingResult = obj1.withTiming(1.65, obj);
        obj = { duration: 233, easing: easing2 };
        withDelay(obj.withSequence(withTimingResult, timing.withTiming(1, obj)));
        tmp = ReanimatedRexport2;
        withDelay = tmp.withDelay;
        const obj6 = ReanimatedRexport2;
        obj1 = { duration: 167, easing: easing3 };
        const withTimingResult1 = timing.withTiming(1.25, obj1);
        const obj2 = { duration: 333, easing: easing3 };
        const result = sharedValue2.set(withDelay(167, obj6.withSequence(withTimingResult1, timing.withTiming(1, obj2))));
      } else {
        withDelay(1);
        const result1 = sharedValue2.set(1);
      }
    } else {
      withDelay(0);
      const result2 = sharedValue2.set(0);
    }
  }, items1);
  let obj3 = require("ReanimatedRexport");
  class U {
    constructor() {
      obj = { strokeDashoffset: closure_9 - closure_9 * closure_2.get() };
      return obj;
    }
  }
  obj = { PROGRESS_CIRCUMFERENCE: strokeDasharray, animatedProgress: sharedValue };
  U.__closure = obj;
  U.__workletHash = 12964700773124;
  U.__initData = __initData;
  const animatedProps = obj3.useAnimatedProps(U);
  let obj5 = require("ReanimatedRexport");
  const fn = function x() {
    let obj = { transform: null };
    obj = { scale: sharedValue1.get() };
    const items = [obj];
    obj.transform = items;
    return obj;
  };
  fn.__closure = { checkmarkBackgroundScale: sharedValue1 };
  fn.__workletHash = 10834015407160;
  fn.__initData = __initData2;
  const animatedStyle = obj5.useAnimatedStyle(fn);
  let obj6 = require("ReanimatedRexport");
  class G {
    constructor() {
      obj = { transform: null };
      obj = { scale: closure_4.get() };
      items = [];
      items[0] = obj;
      obj.transform = items;
      return obj;
    }
  }
  G.__closure = { checkmarkScale: sharedValue2 };
  G.__workletHash = 7510845920441;
  G.__initData = __initData3;
  obj = { style: tmp.progress, children: null };
  const animatedStyle1 = obj6.useAnimatedStyle(G);
  const size = { height: require("ButtonConstants").SMALL_BUTTON_HEIGHT, width: require("ButtonConstants").SMALL_BUTTON_HEIGHT, style: tmp.ring, children: null };
  obj1 = { cx: require("ButtonConstants").SMALL_BUTTON_HEIGHT / 2, cy: require("ButtonConstants").SMALL_BUTTON_HEIGHT / 2, r, fill: "none", stroke: tmp.trackPath.color, strokeWidth: 4 };
  const items2 = [ref(require("inlineStyles").Circle, obj1), ];
  obj2 = { cx: require("ButtonConstants").SMALL_BUTTON_HEIGHT / 2, cy: require("ButtonConstants").SMALL_BUTTON_HEIGHT / 2, r, fill: "none", stroke, strokeWidth: 4, strokeDasharray, strokeLinecap: "round", animatedProps };
  items2[1] = ref(closure_13, obj2);
  size.children = items2;
  const items3 = [closure_6(require("inlineStyles"), size), , , ];
  let tmp19Result = !tmp2;
  if (!tmp2) {
    obj3 = { variant: "text-sm/semibold", style: tmp.countdownText, maxFontSizeMultiplier: 1, children: bound };
    tmp19Result = tmp19(tmp5(tmp6[10]).Text, obj3);
  }
  items3[1] = tmp19Result;
  let obj4 = { style: null, children: null };
  const items4 = [tmp.checkmarkLayer, animatedStyle];
  obj4.style = items4;
  obj5 = { style: tmp.checkmarkBackground };
  obj4.children = ref(sharedValue2, obj5);
  items3[2] = ref(require("ReanimatedRexport").View, obj4);
  obj6 = { style: null, children: null };
  const items5 = [tmp.checkmarkLayer, animatedStyle1];
  obj6.style = items5;
  const tmp18 = require("inlineStyles");
  obj6.children = ref(require("CheckmarkSmallBoldIcon").CheckmarkSmallBoldIcon, { size: "custom", color: require("native").colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT, style: tmp.checkmarkIcon });
  items3[3] = ref(require("ReanimatedRexport").View, obj6);
  obj.children = items3;
  return closure_6(sharedValue2, obj);
};