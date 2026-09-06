// === Module 15131: QuestProgressIndicator ===

// Module 15131 (QuestProgressIndicator)
import _mod17 from "module_17" /* 17 */;
import nativeDefault from "native" /* 576 */;
import timing from "timing" /* 4561 */;
import inlineStyles from "inlineStyles" /* 8453 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;
import jsxProd from "jsxProd" /* 21 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import createStyles from "createStyles" /* 4560 */;
import size from "module_2" /* 2 */;

({ useMemo: c3, useEffect: closure_4, useRef: hasOwnProperty } = noop);
const View = _mod17.View;
({ jsx: closure_9, jsxs: c10 } = jsxProd);
let dependencyMap = ["#666777", "#535564"];
let closure_12 = ReanimatedRexport.createAnimatedComponent(inlineStyles.Circle);
const QUEST_PROGRESS_DIAMETER_BY_SIZE = { "x-sm": 40, sm: 64, md: 70, "md-lg": 100, lg: 128 };
let closure_14 = createStyles.createStyles((arg0) => {
  let progressPath = { wrapper: { position: "relative" }, container: { position: "relative", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1 }, completionGlow: { shadowOffset: { width: 0, height: 0 }, shadowRadius: 20, shadowOpacity: 0, elevation: 4, shadowColor: "#30C77399" }, canvas: null, imageContainer: null, progressPath: null, confetti: null, opacityMask: null };
  progressPath = { transform: null };
  const items = [{ rotate: "-90deg" }];
  progressPath.transform = items;
  progressPath.canvas = progressPath;
  const size = { position: "absolute", height: 0.78 * arg0, width: 0.78 * arg0, borderRadius: nativeDefault.radii.round, overflow: "hidden" };
  progressPath.imageContainer = size;
  progressPath = { color: nativeDefault.colors.STATUS_POSITIVE };
  progressPath.progressPath = progressPath;
  progressPath.confetti = { position: "absolute", pointerEvents: "none" };
  const rect = { backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT, position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: 2 };
  progressPath.opacityMask = rect;
  return progressPath;
});
const __initData = { code: "function QuestProgressIndicatorTsx1(){const{glowOpacity}=this.__closure;return{shadowOpacity:glowOpacity.get()};}" };
const __initData2 = { code: "function QuestProgressIndicatorTsx2(){const{circumference,animatedProgress}=this.__closure;return{strokeDashoffset:circumference-circumference*animatedProgress.get()};}" };
const __initData3 = { code: "function QuestProgressIndicatorTsx3(){const{underlayOpacity,styles}=this.__closure;return{opacity:underlayOpacity.get(),...styles.opacityMask};}" };
let result = size.fileFinishedImporting("modules/quests/native/QuestProgressIndicator.tsx");

export default noop.memo(function QuestProgressIndicator(loading) {
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
  let sharedValue1;
  closure_9 = undefined;
  let sharedValue2;
  dependencyMap = undefined;
  obj = progress(stateFromStores[8]);
  let items = [sharedValue1];
  stateFromStores = obj.useStateFromStores(items, () => sharedValue1.useReducedMotion);
  const tmp4 = { "x-sm": 3, sm: 3, md: 3, "md-lg": 4, lg: 6 }[size];
  closure_3 = tmp5;
  const tmp6 = { "x-sm": 1.6, sm: 1, md: 1.4, "md-lg": 1.5, lg: 1.6 }[size];
  const scale = tmp6;
  const diff = tmp5 / 2 - tmp4 / 2;
  let result = 2 * Math.PI * diff;
  c5 = result;
  const tmp9 = closure_14(obj[size]);
  noop = tmp9;
  let obj1 = progress(stateFromStores[4]);
  const sharedValue = obj1.useSharedValue(progress);
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
  closure_9 = tmp13;
  let tmpResult = tmp(tmp2[4]);
  let num2 = 0;
  if (null != completedAt) {
    num2 = 1;
  }
  sharedValue2 = tmpResult.useSharedValue(num2);
  tmpResult = tmp(tmp2[4]);
  class T {
    constructor() {
      obj = { shadowOpacity: closure_10.get() };
      return obj;
    }
  }
  T.__closure = { glowOpacity: sharedValue2 };
  T.__workletHash = 17183837725505;
  T.__initData = __initData;
  const animatedStyle = tmpResult.useAnimatedStyle(T);
  class D {
    constructor() {
      obj = { strokeDashoffset: closure_5 - closure_5 * closure_7.get() };
      return obj;
    }
  }
  D.__closure = { circumference: result, animatedProgress: sharedValue };
  D.__workletHash = 17281152506254;
  D.__initData = __initData2;
  const animatedProps = progress(stateFromStores[4]).useAnimatedProps(D);
  const tmpResult1 = progress(stateFromStores[4]);
  class E {
    constructor() {
      obj = { opacity: closure_8.get() };
      merged = Object.assign(closure_6.opacityMask);
      return obj;
    }
  }
  E.__closure = { underlayOpacity: sharedValue1, styles: tmp9 };
  E.__workletHash = 4427598698568;
  E.__initData = __initData3;
  const items1 = [sharedValue, progress, stateFromStores];
  const animatedStyle1 = progress(stateFromStores[4]).useAnimatedStyle(E);
  scale(() => {
    let num = 500;
    if (stateFromStores) {
      num = 0;
    }
    const result = sharedValue.set(timing.withTiming(progress, { duration: num }));
    return () => {
      progress(stateFromStores[4]).cancelAnimation(sharedValue);
    };
  }, items1);
  const items2 = [sharedValue1, flag];
  scale(() => {
    let num = 0;
    if (flag) {
      num = 0.7;
    }
    const result = sharedValue1.set(timing.withTiming(num, { duration: 500 }));
    return () => {
      progress(stateFromStores[4]).cancelAnimation(sharedValue1);
    };
  }, items2);
  const tmp20 = c5(null);
  dependencyMap = tmp20;
  const items3 = [tmp9.confetti, tmp6, obj[size]];
  const items4 = [null != completedAt, sharedValue2, stateFromStores];
  const tmpResult2 = progress(stateFromStores[4]);
  scale(() => {
    if (!stateFromStores) {
      if (closure_9) {
        const result = sharedValue2.set(timing.withTiming(1, { duration: 500 }));
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
  }, items4);
  if (null == onPress) {
    let PressableOpacity = noop.Fragment;
  } else {
    PressableOpacity = tmp(tmp2[10]).PressableOpacity;
  }
  const rounded = Math.round(100 * progress);
  if (null == onPress) {
    obj = {};
  } else {
    obj = { onPress };
  }
  obj = {};
  let merged = Object.assign(obj);
  obj1 = { style: null, accessible: true, accessibilityRole: "progressbar", accessibilityLabel: null, accessibilityValue: null, children: null };
  const items5 = [, , ];
  ({ wrapper: arr6[0], completionGlow: arr6[1] } = tmp9);
  items5[2] = animatedStyle;
  obj1.style = items5;
  let formatToPlainStringResult = accessibilityLabel;
  if (accessibilityLabel == null) {
    const intl = tmp(tmp2[11]).intl;
    obj2 = { percent: rounded };
    formatToPlainStringResult = intl.formatToPlainString(tmp(tmp2[11]).t.Gj8Jqn, obj2);
  }
  obj1.accessibilityLabel = formatToPlainStringResult;
  obj1.accessibilityValue = { min: 0, max: 100, now: rounded };
  const items6 = [closure_9(flag(stateFromStores[4]).View, { style: animatedStyle1 }), ];
  const obj3 = { style: tmp9.container, children: null };
  size = { height: tmp5, width: tmp5, style: tmp9.canvas, children: null };
  const obj4 = { children: null };
  const obj5 = { id: "underlayGradient", x1: "0", y1: "0.5", x2: "1", y2: "0.5", children: null };
  const items7 = [closure_9(progress(stateFromStores[5]).Stop, { offset: "0", stopColor: 19 }), closure_9(progress(stateFromStores[5]).Stop, { offset: "1", stopColor: 17 })];
  obj5.children = items7;
  obj4.children = sharedValue2(progress(stateFromStores[5]).LinearGradient, obj5);
  const items8 = [closure_9(progress(stateFromStores[5]).Defs, obj4), closure_9(progress(stateFromStores[5]).Circle, { cx: obj[size] / 2, cy: obj[size] / 2, r: diff, fill: "none", stroke: "url(#underlayGradient)", strokeWidth: tmp4 }), closure_9(closure_12, { cx: obj[size] / 2, cy: obj[size] / 2, r: diff, fill: "none", stroke: tmp9.progressPath.color, strokeWidth: tmp4, strokeDasharray: result, strokeLinecap: "round", animatedProps })];
  size.children = items8;
  const items9 = [sharedValue2(progress(stateFromStores[5]).Svg, size), , ];
  let tmp25Result = null;
  if (flag2) {
    const obj10 = { ref: tmp20, style: tmp21, source: tmp(tmp2[13]), autoPlay: false, loop: false };
    tmp25Result = tmp25(tmp28(tmp2[12]), obj10);
    const tmp28Result = tmp28(tmp2[12]);
  }
  items9[1] = tmp25Result;
  const obj11 = { style: tmp9.imageContainer, children: null };
  const size1 = { quest, height: 0.78 * tmp5, width: 0.78 * tmp5, withAnimation: loading.withAnimation, accessibilityLabelPrefix: accessibilityLabel };
  obj11.children = closure_9(flag(stateFromStores[14]), size1);
  items9[2] = closure_9(sharedValue, obj11);
  obj3.children = items9;
  items6[1] = sharedValue2(sharedValue, obj3);
  obj1.children = items6;
  obj.children = sharedValue2(flag(stateFromStores[4]).View, obj1);
  return closure_9(PressableOpacity, obj);
});
export const COMPLETION_GLOW_SHADOW_RADIUS = 20;
export const COMPLETION_GLOW_CLEARANCE = 40;
export { QUEST_PROGRESS_DIAMETER_BY_SIZE };