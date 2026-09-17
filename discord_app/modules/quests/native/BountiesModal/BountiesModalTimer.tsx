// discord_app/modules/quests/native/BountiesModal/BountiesModalTimer.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport2 from "../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;
const ReanimatedRexport = ReanimatedRexport2;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let c7 = "#2ECC71";
let result = (fn(5067).SMALL_BUTTON_HEIGHT - 4) / 2;
let closure_9 = 2 * Math.PI * result;
const Easing = fn(4376).Easing;
let closure_10 = Easing.bezier(0.15, 0.21, 0.58, 1);
const Easing2 = fn(4376).Easing;
let closure_11 = Easing2.bezier(0.61, 0, 0.58, 1);
const Easing3 = fn(4376).Easing;
let closure_12 = Easing3.bezier(0.42, 0, 0.58, 1);
let closure_13 = ReanimatedRexport.createAnimatedComponent(fn(8606).Circle);
const createStyles = fn(4640);
let obj = {
  progress: null,
  ring: null,
  trackPath: null,
  countdownText: null,
  checkmarkLayer: null,
  checkmarkBackground: null,
  checkmarkIcon: null,
};
let size = {
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT,
  borderRadius: nativeDefault.radii.round,
  width: fn(5067).SMALL_BUTTON_HEIGHT,
  height: fn(5067).SMALL_BUTTON_HEIGHT,
};
obj.progress = size;
let obj3 = { position: "absolute", transform: null };
let items = [{ rotate: "-90deg" }];
obj3.transform = items;
obj.ring = obj3;
obj.trackPath = { color: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST };
let obj5 = { color: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT, lineHeight: null };
const PlatformUtils = fn(1364);
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
const __initData = {
  code: "function BountiesModalTimerTsx1(){const{PROGRESS_CIRCUMFERENCE,animatedProgress}=this.__closure;return{strokeDashoffset:PROGRESS_CIRCUMFERENCE-PROGRESS_CIRCUMFERENCE*animatedProgress.get()};}",
};
const __initData2 = {
  code: "function BountiesModalTimerTsx2(){const{checkmarkBackgroundScale}=this.__closure;return{transform:[{scale:checkmarkBackgroundScale.get()}]};}",
};
const __initData3 = {
  code: "function BountiesModalTimerTsx3(){const{checkmarkScale}=this.__closure;return{transform:[{scale:checkmarkScale.get()}]};}",
};
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
  sharedValue = require("ReanimatedRexport").useSharedValue(num2);
  let obj = require("ReanimatedRexport");
  sharedValue1 = require("ReanimatedRexport").useSharedValue(0);
  let obj2 = require("ReanimatedRexport");
  sharedValue2 = require("ReanimatedRexport").useSharedValue(0);
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
        const obj = ReanimatedRexport2;
        const obj3 = { duration: 267, easing };
        const withTimingResult = timing.withTiming(1.65, obj3);
        const obj5 = { duration: 233, easing: easing2 };
        withDelay(obj.withSequence(withTimingResult, timing.withTiming(1, obj5)));
        tmp = ReanimatedRexport2;
        withDelay = tmp.withDelay;
        const obj6 = ReanimatedRexport2;
        const obj8 = { duration: 167, easing: easing3 };
        const withTimingResult1 = timing.withTiming(1.25, obj8);
        const obj10 = { duration: 333, easing: easing3 };
        const result = sharedValue2.set(
          withDelay(167, obj6.withSequence(withTimingResult1, timing.withTiming(1, obj10))),
        );
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
  U.__closure = { PROGRESS_CIRCUMFERENCE: strokeDasharray, animatedProgress: sharedValue };
  U.__workletHash = 12964700773124;
  U.__initData = __initData;
  const animatedProps = require("ReanimatedRexport").useAnimatedProps(U);
  let obj4 = require("ReanimatedRexport");
  let obj5 = { PROGRESS_CIRCUMFERENCE: strokeDasharray, animatedProgress: sharedValue };
  const fn = function x() {
    const obj = { transform: null };
    const items = [{ scale: sharedValue1.get() }];
    obj.transform = items;
    return obj;
  };
  fn.__closure = { checkmarkBackgroundScale: sharedValue1 };
  fn.__workletHash = 10834015407160;
  fn.__initData = __initData2;
  const animatedStyle = require("ReanimatedRexport").useAnimatedStyle(fn);
  let obj6 = require("ReanimatedRexport");
  class G {
    constructor() {
      obj = { transform: null };
      obj1 = { scale: closure_4.get() };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  G.__closure = { checkmarkScale: sharedValue2 };
  G.__workletHash = 7510845920441;
  G.__initData = __initData3;
  let obj8 = { style: tmp.progress, children: null };
  const animatedStyle1 = require("ReanimatedRexport").useAnimatedStyle(G);
  const size = { height: null, width: null, style: null, children: null };
  let obj7 = require("ReanimatedRexport");
  size.height = require("ButtonConstants").SMALL_BUTTON_HEIGHT;
  size.width = require("ButtonConstants").SMALL_BUTTON_HEIGHT;
  size.style = tmp.ring;
  const tmp18 = require("inlineStyles");
  const items2 = [
    ref(require("inlineStyles").Circle, {
      cx: require("ButtonConstants").SMALL_BUTTON_HEIGHT / 2,
      cy: require("ButtonConstants").SMALL_BUTTON_HEIGHT / 2,
      r,
      fill: "none",
      stroke: tmp.trackPath.color,
      strokeWidth: 4,
    }),
  ];
  let obj9 = {
    cx: require("ButtonConstants").SMALL_BUTTON_HEIGHT / 2,
    cy: require("ButtonConstants").SMALL_BUTTON_HEIGHT / 2,
    r,
    fill: "none",
    stroke: tmp.trackPath.color,
    strokeWidth: 4,
  };
  items2[1] = ref(closure_13, {
    cx: require("ButtonConstants").SMALL_BUTTON_HEIGHT / 2,
    cy: require("ButtonConstants").SMALL_BUTTON_HEIGHT / 2,
    r,
    fill: "none",
    stroke,
    strokeWidth: 4,
    strokeDasharray,
    strokeLinecap: "round",
    animatedProps,
  });
  size.children = items2;
  const items3 = [closure_6(tmp18, size), , ,];
  let tmp19Result = !tmp2;
  if (!tmp2) {
    const obj11 = { variant: "text-sm/semibold", style: tmp.countdownText, maxFontSizeMultiplier: 1, children: bound };
    tmp19Result = tmp19(tmp5(tmp6[10]).Text, obj11);
  }
  items3[1] = tmp19Result;
  const obj12 = { style: null, children: ref(sharedValue2, { style: tmp.checkmarkBackground }) };
  const items4 = [tmp.checkmarkLayer, animatedStyle];
  obj12.style = items4;
  items3[2] = ref(require("ReanimatedRexport").View, obj12);
  const obj14 = { style: null, children: null };
  const items5 = [tmp.checkmarkLayer, animatedStyle1];
  obj14.style = items5;
  let obj10 = {
    cx: require("ButtonConstants").SMALL_BUTTON_HEIGHT / 2,
    cy: require("ButtonConstants").SMALL_BUTTON_HEIGHT / 2,
    r,
    fill: "none",
    stroke,
    strokeWidth: 4,
    strokeDasharray,
    strokeLinecap: "round",
    animatedProps,
  };
  const obj13 = { style: tmp.checkmarkBackground };
  obj14.children = ref(require("CheckmarkSmallBoldIcon").CheckmarkSmallBoldIcon, {
    size: "custom",
    color: require("native").colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT,
    style: tmp.checkmarkIcon,
  });
  items3[3] = ref(require("ReanimatedRexport").View, obj14);
  obj8.children = items3;
  return closure_6(sharedValue2, obj8);
}
