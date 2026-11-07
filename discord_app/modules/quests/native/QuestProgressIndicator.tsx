// === Module 17421: QuestProgressIndicator ===

// Module 17421 (QuestProgressIndicator)
import _mod17 from "module_17" /* 17 */;
import nativeDefault from "native" /* 575 */;
import timing_timing from "timing/timing" /* 5370 */;
import inlineStyles from "inlineStyles" /* 8101 */;
import noop_mod from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5141 */;
import jsxProd from "jsxProd" /* 21 */;
import module_1652 from "module_1652" /* 1652 */;
import createStyles from "createStyles" /* 5140 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let noop = noop_mod;
({ useMemo: c3, useEffect: closure_4, useRef: hasOwnProperty } = noop);
let noop = noop_mod;
const View = _mod17.View;
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
const dependencyMap = ["#666777", "#535564"];
let closure_12 = module_1652.createAnimatedComponent(inlineStyles.Circle);
const QUEST_PROGRESS_DIAMETER_BY_SIZE = { "x-sm": 40, sm: 64, md: 70, "md-lg": 100, lg: 128 };
let closure_14 = createStyles.createStyles((arg0) => {
  const obj = { wrapper: { position: "relative" }, container: { position: "relative", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1 }, completionGlow: { shadowOffset: { width: 0, height: 0 }, shadowRadius: 20, shadowOpacity: 0, elevation: 4, shadowColor: "#30C77399" }, canvas: null, imageContainer: null, progressPath: null, confetti: null, opacityMask: null };
  const obj2 = { transform: null };
  items = [{ rotate: "-90deg" }];
  obj2.transform = items;
  obj.canvas = obj2;
  const size = { position: "absolute", height: 0.78 * arg0, width: 0.78 * arg0, borderRadius: nativeDefault.radii.round, overflow: "hidden" };
  obj.imageContainer = size;
  obj.progressPath = { color: nativeDefault.colors.STATUS_POSITIVE };
  obj.confetti = { position: "absolute", pointerEvents: "none" };
  const rect = { backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT, position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: 2 };
  obj.opacityMask = rect;
  return obj;
});
let closure_15 = { code: "(function QuestProgressIndicatorTsx1(){let[glowOpacity]=this.__closure;return{shadowOpacity:glowOpacity.get()};})" };
let closure_16 = { code: "(function QuestProgressIndicatorTsx2(){let[circumference,animatedProgress]=this.__closure;return{strokeDashoffset:circumference-circumference*animatedProgress.get()};})" };
let closure_17 = { code: "(function QuestProgressIndicatorTsx3(){let[underlayOpacity,styles]=this.__closure;return{opacity:underlayOpacity.get(),...styles.opacityMask};})" };
let result = size.fileFinishedImporting("modules/quests/native/QuestProgressIndicator.tsx");

export default noop.memo(function QuestProgressIndicator(loading) {
  ({ quest, size, progress } = loading);
  _require = progress;
  let flag = loading.loading;
  if (flag === undefined) {
    flag = false;
  }
  importDefault = flag;
  let flag2 = loading.hasConfetti;
  if (flag2 === undefined) {
    flag2 = false;
  }
  ({ onPress, accessibilityLabel } = loading);
  let stateFromStores;
  let sharedValue1;
  let useReducedMotion;
  let sharedValue2;
  let ref;
  ({ withAnimation, paused } = loading);
  let obj = require("initialize");
  items = [useReducedMotion];
  stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const tmp4 = { "x-sm": 3, sm: 3, md: 3, "md-lg": 4, lg: 6 }[size];
  closure_3 = tmp5;
  const tmp6 = { "x-sm": 1.6, sm: 1, md: 1.4, "md-lg": 1.5, lg: 1.6 }[size];
  const scale = tmp6;
  let result = tmp5 / 2;
  let result1 = tmp4 / 2;
  const result2 = 2 * Math.PI;
  const tmp10 = closure_14(obj[size]);
  const confetti = tmp10;
  const sharedValue = require("module_1652").useSharedValue(progress);
  const obj2 = require("module_1652");
  let num = 0;
  if (flag) {
    num = 0.7;
  }
  sharedValue1 = require("module_1652").useSharedValue(num);
  const userStatus = quest.userStatus;
  let completedAt;
  if (userStatus != null) {
    completedAt = userStatus.completedAt;
  }
  useReducedMotion = tmp14;
  const obj3 = require("module_1652");
  let num2 = 0;
  if (null != completedAt) {
    num2 = 1;
  }
  sharedValue2 = require("module_1652").useSharedValue(num2);
  const tmpResult = require("module_1652");
  const items1 = [closure_15, sharedValue2];
  _require = undefined;
  [tmp16, tmp17] = items1;
  const diff = result - result1;
  const result3 = result2 * diff;
  class QuestProgressIndicatorTsx1 {
    constructor() {
      obj = { shadowOpacity: closure_0.get() };
      return obj;
    }
  }
  const items2 = [tmp17];
  QuestProgressIndicatorTsx1.__closure = items2;
  QuestProgressIndicatorTsx1.__workletHash = 3121805679544;
  QuestProgressIndicatorTsx1.__initData = tmp16;
  const animatedStyle = require("module_1652").useAnimatedStyle(QuestProgressIndicatorTsx1);
  const tmpResult4 = require("module_1652");
  const items3 = [closure_16, result3, sharedValue];
  _require = undefined;
  importDefault = undefined;
  [tmp21, tmp22, tmp23] = items3;
  class QuestProgressIndicatorTsx2 {
    constructor() {
      obj = { strokeDashoffset: closure_0 - closure_0 * closure_1.get() };
      return obj;
    }
  }
  const items4 = [tmp22, tmp23];
  QuestProgressIndicatorTsx2.__closure = items4;
  QuestProgressIndicatorTsx2.__workletHash = 3809633407287;
  QuestProgressIndicatorTsx2.__initData = tmp21;
  const animatedProps = require("module_1652").useAnimatedProps(QuestProgressIndicatorTsx2);
  const tmpResult5 = require("module_1652");
  const items5 = [closure_17, sharedValue1, tmp10];
  _require = undefined;
  importDefault = undefined;
  [tmp25, tmp26, tmp27] = items5;
  class QuestProgressIndicatorTsx3 {
    constructor() {
      obj = { opacity: closure_0.get() };
      merged = Object.assign(closure_1.opacityMask);
      return obj;
    }
  }
  const items6 = [tmp26, tmp27];
  QuestProgressIndicatorTsx3.__closure = items6;
  QuestProgressIndicatorTsx3.__workletHash = 14807344640177;
  QuestProgressIndicatorTsx3.__initData = tmp25;
  const items7 = [sharedValue, progress, stateFromStores];
  const animatedStyle1 = require("module_1652").useAnimatedStyle(QuestProgressIndicatorTsx3);
  scale(() => {
    let num = 500;
    if (stateFromStores) {
      num = 0;
    }
    const result = sharedValue.set(timing_timing.withTiming(c0, { duration: num }));
    return () => {
      c0(stateFromStores[4]).cancelAnimation(sharedValue);
    };
  }, items7);
  const items8 = [sharedValue1, flag];
  scale(() => {
    let num = 0;
    if (c1) {
      num = 0.7;
    }
    const result = sharedValue1.set(timing_timing.withTiming(num, { duration: 500 }));
    return () => {
      c0(stateFromStores[4]).cancelAnimation(sharedValue1);
    };
  }, items8);
  const tmp31 = confetti(null);
  ref = tmp31;
  const items9 = [tmp10.confetti, tmp6, obj[size]];
  const items10 = [null != completedAt, sharedValue2, stateFromStores];
  const tmpResult6 = require("module_1652");
  scale(() => {
    if (!stateFromStores) {
      if (closure_8) {
        const result = sharedValue2.set(timing_timing.withTiming(1, { duration: 500 }));
        const current = ref.current;
        if (current != null) {
          current.play();
        }
      }
    }
    const result1 = sharedValue2.set(0);
    const current2 = ref.current;
    if (current2 != null) {
      current2.reset();
    }
  }, items10);
  if (null == onPress) {
    let PressableOpacity = sharedValue.Fragment;
  } else {
    PressableOpacity = tmp(tmp2[10]).PressableOpacity;
  }
  const rounded = Math.round(100 * progress);
  if (null == onPress) {
    let obj4 = {};
  } else {
    obj4 = { onPress };
  }
  const obj5 = {};
  let merged = Object.assign(obj4);
  const obj6 = { style: null, accessible: true, accessibilityRole: "progressbar", accessibilityLabel: null, accessibilityValue: null, children: null };
  const items11 = [, , ];
  ({ wrapper: arr12[0], completionGlow: arr12[1] } = tmp10);
  items11[2] = animatedStyle;
  obj6.style = items11;
  let formatToPlainStringResult = accessibilityLabel;
  if (accessibilityLabel == null) {
    const intl = tmp(tmp2[11]).intl;
    const obj7 = { percent: rounded };
    formatToPlainStringResult = intl.formatToPlainString(tmp(tmp2[11]).t.Gj8Jqn, obj7);
  }
  obj6.accessibilityLabel = formatToPlainStringResult;
  obj6.accessibilityValue = { min: 0, max: 100, now: rounded };
  const items12 = [sharedValue2(require("module_1652").View, { style: animatedStyle1 }), ];
  const obj8 = { style: tmp10.container, children: null };
  const size1 = { height: tmp5, width: tmp5, style: tmp10.canvas, children: null };
  const obj9 = { children: null };
  const obj10 = { id: "underlayGradient", x1: "0", y1: "0.5", x2: "1", y2: "0.5", children: null };
  const items13 = [sharedValue2(require("inlineStyles").Stop, { offset: "0", stopColor: 19 }), sharedValue2(require("inlineStyles").Stop, { offset: "1", stopColor: 17 })];
  obj10.children = items13;
  obj9.children = ref(require("inlineStyles").LinearGradient, obj10);
  const items14 = [sharedValue2(require("inlineStyles").Defs, obj9), sharedValue2(require("inlineStyles").Circle, { cx: obj[size] / 2, cy: obj[size] / 2, r: diff, fill: "none", stroke: "url(#underlayGradient)", strokeWidth: tmp4 }), sharedValue2(closure_12, { cx: obj[size] / 2, cy: obj[size] / 2, r: diff, fill: "none", stroke: tmp10.progressPath.color, strokeWidth: tmp4, strokeDasharray: result3, strokeLinecap: "round", animatedProps })];
  size1.children = items14;
  const items15 = [ref(require("inlineStyles").Svg, size1), , ];
  let tmp36Result = null;
  if (flag2) {
    const obj15 = { ref: tmp31, style: tmp32, source: tmp(tmp2[13]), autoPlay: false, loop: false };
    tmp36Result = tmp36(tmp39(tmp2[12]), obj15);
    const tmp39Result = tmp39(tmp2[12]);
  }
  items15[1] = tmp36Result;
  const obj16 = { style: tmp10.imageContainer, children: null };
  const size2 = { quest, height: 0.78 * tmp5, width: 0.78 * tmp5, withAnimation, paused, accessibilityLabelPrefix: accessibilityLabel };
  obj16.children = sharedValue2(require("QuestRewardTile"), size2);
  items15[2] = sharedValue2(sharedValue1, obj16);
  obj8.children = items15;
  items12[1] = ref(sharedValue1, obj8);
  obj6.children = items12;
  obj5.children = ref(require("module_1652").View, obj6);
  return sharedValue2(PressableOpacity, obj5);
});
export const COMPLETION_GLOW_SHADOW_RADIUS = 20;
export const COMPLETION_GLOW_CLEARANCE = 40;
export { QUEST_PROGRESS_DIAMETER_BY_SIZE };