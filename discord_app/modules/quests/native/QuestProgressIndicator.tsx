import noop from "noop";
import importDefaultResult from "noop";
import { View } from "get ActivityIndicator";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import importDefaultResult1 from "module_4146";

let c10;
let c3;
let c4;
let c5;
let c9;
({ useMemo: c3, useEffect: c4, useRef: c5 } = noop);
({ jsx: c9, jsxs: c10 } = jsxProd);
let closure_11 = ["#666777", "#535564"];
let closure_12 = require("module_4146").createAnimatedComponent(require("inlineStyles").Circle);
let obj = { "x-sm": 40, sm: 64, md: 70, "md-lg": 100, lg: 128 };
let closure_14 = createCacheKey.createStyles((arg0) => {
  let obj = { wrapper: { position: "relative" }, container: { position: "relative", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1 }, completionGlow: { shadowOffset: { width: 0, height: 0 }, shadowRadius: 20, shadowOpacity: 0, elevation: 4, shadowColor: "#30C77399" }, canvas: { transform: items }, imageContainer: null, progressPath: null, confetti: null, opacityMask: null };
  items = [{ rotate: "-90deg" }];
  obj = { position: "absolute", height: 0.78 * arg0, width: 0.78 * arg0, borderRadius: importDefault(712).radii.round, overflow: "hidden" };
  obj[4] = obj;
  obj = { color: importDefault(712).colors.STATUS_POSITIVE };
  obj[5] = obj;
  obj[6] = { position: "absolute", pointerEvents: "none" };
  obj[7] = { backgroundColor: importDefault(712).colors.CARD_BACKGROUND_DEFAULT, position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: 2 };
  return obj;
});
let closure_15 = { code: "function QuestProgressIndicatorTsx1(){const{glowOpacity}=this.__closure;return{shadowOpacity:glowOpacity.get()};}" };
let closure_16 = { code: "function QuestProgressIndicatorTsx2(){const{circumference,animatedProgress}=this.__closure;return{strokeDashoffset:circumference-circumference*animatedProgress.get()};}" };
let closure_17 = { code: "function QuestProgressIndicatorTsx3(){const{underlayOpacity,styles}=this.__closure;return{opacity:underlayOpacity.get(),...styles.opacityMask};}" };
const memoResult = importDefaultResult.memo(function QuestProgressIndicator(loading) {
  let accessibilityLabel;
  let onPress;
  let progress;
  let quest;
  let size;
  ({ quest, size, progress } = loading);
  let flag = loading.loading;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = loading.hasConfetti;
  if (flag2 === undefined) {
    flag2 = false;
  }
  ({ onPress, accessibilityLabel } = loading);
  let stateFromStores;
  let callback;
  let callback2;
  let callback3;
  let importDefaultResult;
  let sharedValue;
  let sharedValue1;
  let c9;
  let sharedValue2;
  let dependencyMap;
  let obj = progress(stateFromStores[8]);
  let items = [sharedValue1];
  stateFromStores = obj.useStateFromStores(items, () => sharedValue1.useReducedMotion);
  const tmp4 = { "x-sm": 3, sm: 3, md: 3, "md-lg": 4, lg: 6 }[size];
  callback = tmp5;
  const tmp6 = { "x-sm": 1.6, sm: 1, md: 1.4, "md-lg": 1.5, lg: 1.6 }[size];
  callback2 = tmp6;
  const diff = tmp5 / 2 - tmp4 / 2;
  let result = 2 * Math.PI * diff;
  callback3 = result;
  const tmp9 = callback4(obj[size]);
  importDefaultResult = tmp9;
  let obj1 = progress(stateFromStores[4]);
  sharedValue = obj1.useSharedValue(progress);
  let obj2 = progress(stateFromStores[4]);
  let num = 0;
  if (flag) {
    num = 0.7;
  }
  sharedValue1 = obj2.useSharedValue(num);
  const userStatus = quest.userStatus;
  let completedAt;
  if (userStatus != null) {
    completedAt = userStatus.completedAt;
  }
  c9 = tmp13;
  let tmpResult = tmp(tmp2[4]);
  let num2 = 0;
  if (null != completedAt) {
    num2 = 1;
  }
  sharedValue2 = tmpResult.useSharedValue(num2);
  tmpResult = tmp(tmp2[4]);
  class T {
    constructor() {
      obj = { shadowOpacity: userStatus.get() };
      return obj;
    }
  }
  T.__closure = { glowOpacity: sharedValue2 };
  T.__workletHash = 17183837725505;
  T.__initData = closure_15;
  const animatedStyle = tmpResult.useAnimatedStyle(T);
  class D {
    constructor() {
      obj = { strokeDashoffset: c5 - c5 * c7.get() };
      return obj;
    }
  }
  D.__closure = { circumference: result, animatedProgress: sharedValue };
  D.__workletHash = 17281152506254;
  D.__initData = closure_16;
  const animatedProps = progress(stateFromStores[4]).useAnimatedProps(D);
  const tmpResult1 = progress(stateFromStores[4]);
  class R {
    constructor() {
      obj = { opacity: c8.get() };
      merged = Object.assign(c6.opacityMask);
      return obj;
    }
  }
  R.__closure = { underlayOpacity: sharedValue1, styles: tmp9 };
  R.__workletHash = 4427598698568;
  R.__initData = closure_17;
  const items1 = [sharedValue, progress, stateFromStores];
  const animatedStyle1 = progress(stateFromStores[4]).useAnimatedStyle(R);
  callback2(() => {
    let num = 500;
    if (stateFromStores) {
      num = 0;
    }
    const result = sharedValue.set(progress(stateFromStores[9]).withTiming(progress, { duration: num }));
    return () => {
      outer1_0(outer1_2[4]).cancelAnimation(closure_7);
    };
  }, items1);
  const items2 = [sharedValue1, flag];
  callback2(() => {
    let num = 0;
    if (flag) {
      num = 0.7;
    }
    const result = sharedValue1.set(progress(stateFromStores[9]).withTiming(num, { duration: 500 }));
    return () => {
      outer1_0(outer1_2[4]).cancelAnimation(maybeApplyNoTextColorForLightCustomTheme);
    };
  }, items2);
  const tmp20 = callback3(null);
  dependencyMap = tmp20;
  const items3 = [tmp9.confetti, tmp6, obj[size]];
  const items4 = [null != completedAt, sharedValue2, stateFromStores];
  const tmpResult2 = progress(stateFromStores[4]);
  callback2(() => {
    if (!stateFromStores) {
      if (c9) {
        const result = sharedValue2.set(progress(stateFromStores[9]).withTiming(1, { duration: 500 }));
        const current = _undefined2.current;
        if (current != null) {
          current.play();
        }
        const obj = progress(stateFromStores[9]);
      }
    }
    const result1 = sharedValue2.set(0);
    const current2 = _undefined2.current;
    if (current2 != null) {
      current2.reset();
    }
  }, items4);
  if (null == onPress) {
    let PressableOpacity = importDefaultResult.Fragment;
  } else {
    PressableOpacity = tmp(tmp2[10]).PressableOpacity;
  }
  const rounded = Math.round(100 * progress);
  if (null == onPress) {
    obj = {};
  } else {
    obj = { onPress: null };
    obj[0] = onPress;
  }
  obj = {};
  let merged = Object.assign(obj);
  obj1 = { style: items5, accessible: true, accessibilityRole: "progressbar", accessibilityLabel: null, accessibilityValue: null, children: null };
  items5 = [, , ];
  ({ wrapper: arr6[0], completionGlow: arr6[1] } = tmp9);
  items5[2] = animatedStyle;
  let formatToPlainStringResult = accessibilityLabel;
  if (accessibilityLabel == null) {
    const intl = tmp(tmp2[11]).intl;
    obj2 = { percent: null };
    obj2[0] = rounded;
    formatToPlainStringResult = intl.formatToPlainString(tmp(tmp2[11]).t.Gj8Jqn, obj2);
  }
  obj1[3] = formatToPlainStringResult;
  obj1[4] = { min: 0, max: 100, now: rounded };
  const items6 = [c9(flag(stateFromStores[4]).View, { style: animatedStyle1 }), ];
  const obj3 = { style: tmp9.container, children: null };
  const obj4 = { height: obj[size], width: obj[size], style: tmp9.canvas, children: null };
  const obj5 = { children: null };
  const obj6 = { id: "underlayGradient", x1: "0", y1: "0.5", x2: "1", y2: "0.5", children: null };
  const items7 = [c9(progress(stateFromStores[5]).Stop, { offset: "0", stopColor: 19 }), c9(progress(stateFromStores[5]).Stop, { offset: "1", stopColor: 17 })];
  obj6[5] = items7;
  obj5[0] = sharedValue2(progress(stateFromStores[5]).LinearGradient, obj6);
  const items8 = [c9(progress(stateFromStores[5]).Defs, obj5), c9(progress(stateFromStores[5]).Circle, { cx: obj[size] / 2, cy: obj[size] / 2, r: diff, fill: "none", stroke: "url(#underlayGradient)", strokeWidth: tmp4 }), c9(closure_12, { cx: obj[size] / 2, cy: obj[size] / 2, r: diff, fill: "none", stroke: tmp9.progressPath.color, strokeWidth: tmp4, strokeDasharray: result, strokeLinecap: "round", animatedProps })];
  obj4[3] = items8;
  const items9 = [sharedValue2(progress(stateFromStores[5]).Svg, obj4), , ];
  let tmp25Result = null;
  if (flag2) {
    const obj11 = { ref: null, style: null, source: null, autoPlay: false, loop: false };
    obj11[0] = tmp20;
    obj11[1] = tmp21;
    obj11[2] = tmp(tmp2[13]);
    tmp25Result = tmp25(tmp28(tmp2[12]), obj11);
    const tmp28Result = tmp28(tmp2[12]);
  }
  items9[1] = tmp25Result;
  const obj10 = { cx: obj[size] / 2, cy: obj[size] / 2, r: diff, fill: "none", stroke: tmp9.progressPath.color, strokeWidth: tmp4, strokeDasharray: result, strokeLinecap: "round", animatedProps };
  const obj7 = { offset: "0", stopColor: 19 };
  const obj8 = { offset: "1", stopColor: 17 };
  const obj9 = { cx: obj[size] / 2, cy: obj[size] / 2, r: diff, fill: "none", stroke: "url(#underlayGradient)", strokeWidth: tmp4 };
  tmp21 = callback(() => {
    let obj = {};
    const merged = Object.assign(_undefined.confetti);
    obj.width = c3;
    obj.height = c3;
    obj = { scale: c4 };
    const items = [obj];
    obj.transform = items;
    return obj;
  }, items3);
  items9[2] = c9(sharedValue, { style: tmp9.imageContainer, children: c9(flag(stateFromStores[14]), obj13) });
  obj3[1] = items9;
  items6[1] = sharedValue2(sharedValue, obj3);
  obj1[5] = items6;
  obj.children = sharedValue2(flag(stateFromStores[4]).View, obj1);
  return c9(PressableOpacity, obj);
});
let result = require("maybeApplyNoTextColorForLightCustomTheme").fileFinishedImporting("modules/quests/native/QuestProgressIndicator.tsx");

export default memoResult;
export const QUEST_PROGRESS_DIAMETER_BY_SIZE = obj;