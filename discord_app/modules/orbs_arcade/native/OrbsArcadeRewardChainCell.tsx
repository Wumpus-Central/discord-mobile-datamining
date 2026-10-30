// === Module 16983: OrbsArcadeRewardChainCell ===

// Module 16983 (OrbsArcadeRewardChainCell)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 575 */;
import _modDef671 from "module_671" /* 671 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5090 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5010 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
let c10 = 1.6666666666666667;
const createStyles = fn(5009);
let obj2 = { cell: { width: 50, height: 50, alignItems: "center", justifyContent: "center" }, circle: null, ring: null, confetti: null, stem: null, checkBadge: null };
let obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.borderRadius = 25;
obj2.circle = obj3;
obj2.ring = { borderWidth: 1.6666666666666667, borderColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
obj2.confetti = { position: "absolute", top: -50, left: -50, width: 150, height: 150 };
const obj4 = { borderWidth: 1.6666666666666667, borderColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
obj2.stem = { position: "absolute", left: 24, width: 2, backgroundColor: nativeDefault.colors.STATUS_POSITIVE };
obj2.checkBadge = { position: "absolute", right: -1, bottom: -1 };
let closure_11 = createStyles.createStyles(obj2);
function getWindowProgress(arg0, arg1, arg2) {
  let num = 1;
  if (null != arg1) {
    const obj = ReanimatedRexport;
    const items = [arg1, arg1 + arg2];
    num = obj.interpolate(arg0, items, [0, 1], ReanimatedRexport.Extrapolation.CLAMP);
  }
  return num;
}
let obj5 = { position: "absolute", left: 24, width: 2, backgroundColor: nativeDefault.colors.STATUS_POSITIVE };
getWindowProgress.__closure = { interpolate: fn(5090).interpolate, Extrapolation: fn(5090).Extrapolation };
getWindowProgress.__workletHash = 10001292080604;
getWindowProgress.__initData = { code: "function getWindowProgress_OrbsArcadeRewardChainCellTsx1(timeMs,startMs,durationMs){const{interpolate,Extrapolation}=this.__closure;if(startMs==null){return 1;}return interpolate(timeMs,[startMs,startMs+durationMs],[0,1],Extrapolation.CLAMP);}" };
const __initData = { code: "function OrbsArcadeRewardChainCellTsx2(){const{getWindowProgress,timeline,grantAtMs,GRANT_FILL_MS}=this.__closure;return getWindowProgress(timeline.get(),grantAtMs,GRANT_FILL_MS);}" };
const __initData2 = { code: "function OrbsArcadeRewardChainCellTsx3(){const{getWindowProgress,timeline,focusRingAtMs,FOCUS_RING_MS}=this.__closure;return getWindowProgress(timeline.get(),focusRingAtMs,FOCUS_RING_MS);}" };
const __initData3 = { code: "function OrbsArcadeRewardChainCellTsx4(){const{getWindowProgress,timeline,stemAtMs,GRANT_STEM_MS}=this.__closure;return getWindowProgress(timeline.get(),stemAtMs,GRANT_STEM_MS);}" };
const __initData4 = { code: "function OrbsArcadeRewardChainCellTsx5(){const{confettiAtMs,timeline}=this.__closure;return confettiAtMs!=null&&timeline.get()>=confettiAtMs;}" };
const __initData5 = { code: "function OrbsArcadeRewardChainCellTsx6(reached,wasReached){const{runOnJS,playConfetti}=this.__closure;if(reached&&wasReached===false){runOnJS(playConfetti)();}}" };
const __initData6 = { code: "function OrbsArcadeRewardChainCellTsx7(){const{fillProgress}=this.__closure;return{opacity:fillProgress.get()};}" };
const __initData7 = { code: "function OrbsArcadeRewardChainCellTsx8(){const{interpolate,getWindowProgress,timeline,checkAtMs,GRANT_CHECK_MS,GRANT_CONFETTI_MS}=this.__closure;return{transform:[{scale:interpolate(getWindowProgress(timeline.get(),checkAtMs,GRANT_CHECK_MS+GRANT_CONFETTI_MS),[0,0.6,1],[0,1.2,1])}]};}" };
const __initData8 = { code: "function OrbsArcadeRewardChainCellTsx9(){const{stemLength,stemProgress}=this.__closure;var _stemLength,_stemLength2;return{top:-((_stemLength=stemLength)!==null&&_stemLength!==void 0?_stemLength:0)*stemProgress.get(),height:((_stemLength2=stemLength)!==null&&_stemLength2!==void 0?_stemLength2:0)*stemProgress.get()};}" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeRewardChainCell.tsx");

export default function OrbsArcadeRewardChainCell(timeline) {
  ({ reward, stemLength } = timeline);
  timeline = timeline.timeline;
  const grantAtMs = timeline.grantAtMs;
  const focusRingAtMs = timeline.focusRingAtMs;
  c6 = undefined;
  let sum1;
  let sum2;
  let derivedValue;
  let derivedValue2;
  let playConfetti;
  ({ status, isFocused } = timeline);
  let tmp = playConfetti();
  let obj = stemLength(grantAtMs[10]);
  const token = stemLength(grantAtMs[11]).useToken(timeline(grantAtMs[6]).colors.ICON_STRONG);
  let obj2 = stemLength(grantAtMs[11]);
  const token1 = stemLength(grantAtMs[11]).useToken(timeline(grantAtMs[6]).colors.STATUS_POSITIVE);
  const ref = token1.useRef(null);
  let sum = null;
  if (null != grantAtMs) {
    sum = grantAtMs + 400;
  }
  c6 = sum;
  sum1 = null;
  if (null != sum) {
    sum1 = sum + 150;
  }
  sum2 = null;
  if (null != sum1) {
    sum2 = sum1 + 250;
  }
  let obj3 = stemLength(grantAtMs[11]);
  const fn = function y() {
    value = timeline.get();
    if (typeof getWindowProgress === "function") {
      let num = 1;
      if (null != grantAtMs) {
        const obj = ReanimatedRexport;
        const items = [grantAtMs, grantAtMs + 400];
        num = obj.interpolate(value, items, [0, 1], ReanimatedRexport.Extrapolation.CLAMP);
      }
      return num;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  };
  fn.__closure = { getWindowProgress, timeline, grantAtMs, GRANT_FILL_MS: 400 };
  fn.__workletHash = 16298581706582;
  fn.__initData = __initData;
  derivedValue = stemLength(grantAtMs[7]).useDerivedValue(fn);
  const obj5 = { getWindowProgress, timeline, grantAtMs, GRANT_FILL_MS: 400 };
  const tmp2Result = stemLength(grantAtMs[7]);
  class L {
    constructor() {
      value = timeline.get();
      tmp2 = focusRingAtMs;
      if (typeof getWindowProgress === "function") {
        tmp3 = null;
        num = 1;
        if (null != tmp2) {
          tmp4 = closure_0;
          tmp5 = closure_2;
          obj = closure_0(closure_2[7]);
          items = [, ];
          items[0] = tmp2;
          num2 = 500;
          items[1] = tmp2 + 500;
          tmp6 = obj;
          tmp7 = value;
          tmp8 = items;
          num = obj.interpolate(value, items, [0, 1], closure_0(closure_2[7]).Extrapolation.CLAMP);
        }
        return num;
      } else {
        str = "Trying to call a non-function";
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
  L.__closure = { getWindowProgress, timeline, focusRingAtMs, FOCUS_RING_MS: 500 };
  L.__workletHash = 2996759496631;
  L.__initData = __initData2;
  const derivedValue1 = stemLength(grantAtMs[7]).useDerivedValue(L);
  const tmp2Result8 = stemLength(grantAtMs[7]);
  class N {
    constructor() {
      value = timeline.get();
      tmp2 = closure_8;
      if (typeof getWindowProgress === "function") {
        num = 1;
        tmp3 = null;
        if (null != tmp2) {
          tmp4 = closure_0;
          tmp5 = closure_2;
          obj = closure_0(closure_2[7]);
          items = [, ];
          items[0] = tmp2;
          num2 = 300;
          items[1] = tmp2 + 300;
          tmp6 = obj;
          tmp7 = value;
          tmp8 = items;
          num = obj.interpolate(value, items, [0, 1], closure_0(closure_2[7]).Extrapolation.CLAMP);
        }
        return num;
      } else {
        str = "Trying to call a non-function";
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
  N.__closure = { getWindowProgress, timeline, stemAtMs: sum2, GRANT_STEM_MS: 300 };
  N.__workletHash = 4451047761232;
  N.__initData = __initData3;
  derivedValue2 = stemLength(grantAtMs[7]).useDerivedValue(N);
  playConfetti = obj4.useCallback(() => {
    const current = ref.current;
    let playResult;
    if (current != null) {
      playResult = current.play();
    }
    return playResult;
  }, []);
  const tmp2Result9 = stemLength(grantAtMs[7]);
  const fn2 = function k() {
    let tmp2 = null != sum1;
    if (tmp2) {
      tmp2 = timeline.get() >= tmp;
    }
    return tmp2;
  };
  fn2.__closure = { confettiAtMs: sum1, timeline };
  fn2.__workletHash = 17078558180439;
  fn2.__initData = __initData4;
  class E {
    constructor(arg0, arg1) {
      tmp = timeline;
      if (timeline) {
        tmp2 = arg1;
        flag = false;
        tmp = false === arg1;
      }
      if (tmp) {
        tmp3 = closure_0;
        tmp4 = closure_2;
        obj = closure_0(closure_2[7]);
        tmp5 = closure_11;
        tmp6 = obj.runOnJS(closure_11)();
      }
      return;
    }
  }
  const tmp2Result10 = stemLength(grantAtMs[7]);
  E.__closure = { runOnJS: stemLength(grantAtMs[7]).runOnJS, playConfetti };
  E.__workletHash = 13780775152900;
  E.__initData = __initData5;
  const animatedReaction = tmp2Result10.useAnimatedReaction(fn2, E);
  let items = [token1];
  const memo = obj4.useMemo(() => {
    const obj = { boxShadow: null };
    const obj2 = { offsetX: 0, offsetY: 0, blurRadius: 5, color: null };
    const obj3 = _modDef671(token1);
    obj2.color = _modDef671(token1).alpha(0.5).css();
    const items = [obj2];
    obj.boxShadow = items;
    return obj;
  }, items);
  const obj6 = { runOnJS: stemLength(grantAtMs[7]).runOnJS, playConfetti };
  const fn3 = function q() {
    return { opacity: derivedValue.get() };
  };
  fn3.__closure = { fillProgress: derivedValue };
  fn3.__workletHash = 7749646821819;
  fn3.__initData = __initData6;
  const animatedStyle = stemLength(grantAtMs[7]).useAnimatedStyle(fn3);
  const tmp2Result11 = stemLength(grantAtMs[7]);
  class X {
    constructor() {
      tmp = closure_0;
      tmp2 = closure_2;
      obj = closure_0(closure_2[7]);
      value = timeline.get();
      tmp4 = closure_6;
      if (typeof getWindowProgress === "function") {
        num = 1;
        tmp5 = null;
        if (null != tmp4) {
          tmpResult = tmp(tmp2[7]);
          items = [, ];
          items[0] = tmp4;
          num2 = 400;
          items[1] = tmp4 + 400;
          tmp6 = tmpResult;
          tmp7 = value;
          tmp8 = items;
          num = tmpResult.interpolate(value, items, [0, 1], tmp(tmp2[7]).Extrapolation.CLAMP);
        }
        obj1 = { transform: null };
        obj5 = { scale: null };
        obj5.scale = obj.interpolate(num, [0, 0.6, 1], [0, 1.2, 1]);
        items1 = [];
        items1[0] = obj5;
        obj1.transform = items1;
        return obj1;
      } else {
        str = "Trying to call a non-function";
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
  const tmp2Result12 = stemLength(grantAtMs[7]);
  X.__closure = { interpolate: stemLength(grantAtMs[7]).interpolate, getWindowProgress, timeline, checkAtMs: sum, GRANT_CHECK_MS: 150, GRANT_CONFETTI_MS: 250 };
  X.__workletHash = 17236262951265;
  X.__initData = __initData7;
  const animatedStyle1 = tmp2Result12.useAnimatedStyle(X);
  stemLength(grantAtMs[7]);
  class Y {
    constructor() {
      num = stemLength;
      num2 = stemLength;
      if (stemLength == null) {
        num2 = 0;
      }
      obj = { top: null, height: null };
      obj2 = closure_10;
      tmp = -num2;
      obj.top = tmp * closure_10.get();
      if (num == null) {
        num = 0;
      }
      obj.height = num * obj2.get();
      return obj;
    }
  }
  Y.__closure = { stemLength, stemProgress: derivedValue2 };
  Y.__workletHash = 13706139303941;
  Y.__initData = __initData8;
  const obj8 = { style: tmp.cell, children: null };
  let tmp23 = null;
  if (null != stemLength) {
    const obj9 = { style: null };
    let items1 = [tmp.stem, tmp20];
    obj9.style = items1;
    tmp23 = sum1(tmp4(tmp3[7]).View, obj9);
  }
  const tmp25 = status !== stemLength(grantAtMs[12]).OrbsArcadeRewardStatus.LOCKED;
  const items2 = [tmp23, , , , , , ];
  const obj10 = { style: null };
  const items3 = [, ];
  ({ circle: arr4[0], ring: arr4[1] } = tmp);
  obj10.style = items3;
  items2[1] = sum1(ref, obj10);
  if (isFocused) {
    const obj11 = { color: token, progress: derivedValue1, rewardSize: 50, strokeWidth: derivedValue2 };
    let tmp26Result = tmp26(tmp4(tmp3[14]), obj11);
  } else {
    tmp26Result = null;
  }
  items2[2] = tmp26Result;
  let tmp21Result = null;
  if (tmp25) {
    let tmp26Result5 = null;
    if (!tmp2Result14.isThemeLight(obj.useThemeContext().theme)) {
      const obj12 = { style: null };
      const items4 = [tmp.circle, memo, animatedStyle];
      obj12.style = items4;
      tmp26Result5 = tmp26(tmp4(tmp3[7]).View, obj12);
    }
    const obj13 = { children: null };
    const items5 = [tmp26Result5, ];
    const obj14 = { color: token1, progress: derivedValue, rewardSize: 50, strokeWidth: derivedValue2 };
    items5[1] = tmp26(tmp4(tmp3[14]), obj14);
    obj13.children = items5;
    tmp21Result = tmp21(sum2, obj13);
    tmp2Result14 = tmp2(tmp3[10]);
  }
  items2[3] = tmp21Result;
  if (reward.type === stemLength(grantAtMs[12]).OrbsArcadeRewardType.FRACTIONAL_PREMIUM) {
    let tmp26Result6 = tmp26(tmp2(tmp3[15]).NitroCoinSpotIllustration, { height: 30 });
  } else {
    const obj15 = { reward, size: 38 };
    tmp26Result6 = tmp26(tmp4(tmp3[16]), obj15);
  }
  items2[4] = tmp26Result6;
  let tmp26Result7 = null;
  if (tmp25) {
    const obj16 = { style: null, children: null };
    const items6 = [tmp.checkBadge, animatedStyle1];
    obj16.style = items6;
    const obj17 = { size: "xs", color: tmp4(tmp3[6]).colors.STATUS_POSITIVE, secondaryColor: tmp4(tmp3[6]).colors.WHITE };
    obj16.children = tmp26(tmp2(tmp3[17]).CircleCheckIcon, obj17);
    tmp26Result7 = tmp26(tmp4(tmp3[7]).View, obj16);
  }
  items2[5] = tmp26Result7;
  let tmp26Result8 = null;
  if (tmp25) {
    tmp26Result8 = null;
    if (null != grantAtMs) {
      const obj18 = { pointerEvents: "none", style: tmp.confetti, children: null };
      const obj19 = { ref, source: tmp2(tmp3[19]), autoPlay: false, loop: false };
      obj18.children = tmp26(tmp4(tmp3[18]), obj19);
      tmp26Result8 = tmp26(tmp22, obj18);
      const tmp4Result = tmp4(tmp3[18]);
    }
  }
  items2[6] = tmp26Result8;
  obj8.children = items2;
  return derivedValue(ref, obj8);
};
export function useOrbsArcadeRewardChainTimeline(arg0) {
  ({ grantedRewardIds: require, focusedRewardId: importDefault, grantAnimatedOnOpenRewardIds: dependencyMap } = arg0);
  let first;
  let items = [AccessibilityStore];
  _slicedToArray = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  first = _slicedToArray(first.useState(() => {
    if (closure_3) {
      return null;
    } else {
      const _Map = Map;
      const found = _require.filter((item) => {
        let hasItem;
        if (dependencyMap != null) {
          hasItem = dependencyMap.has(item);
        }
        return true === hasItem;
      });
      const map = new Map(found.map((item, index) => {
        const items = [item, 250 + 1100 * index];
        return items;
      }));
      const sum = 250 + 1100 * map.size;
      const obj = { grantAtMsByRewardId: map, focusRingRewardId, focusRingAtMs: sum, endMs: null };
      let num3 = 0;
      if (null != focusRingRewardId) {
        num3 = 500;
      }
      obj.endMs = sum + num3;
      return obj;
    }
  }), 1)[0];
  const sharedValue = ReanimatedRexport.useSharedValue(0);
  const items1 = [first, sharedValue];
  const effect = first.useEffect(() => {
    if (null != first) {
      const _requestAnimationFrame = requestAnimationFrame;
      closure_0 = requestAnimationFrame(() => {
        const obj = require("timing");
        return sharedValue.set(obj.withTiming(first.endMs, { duration: first.endMs, easing: require("ReanimatedRexport").Easing.linear }));
      });
      return () => cancelAnimationFrame(closure_0);
    }
  }, items1);
  return {
    timeline: sharedValue,
    getGrantAtMs(arg0) {
      value = undefined;
      if (first != null) {
        const grantAtMsByRewardId = tmp.grantAtMsByRewardId;
        value = grantAtMsByRewardId.get(arg0);
      }
      if (value == null) {
        value = null;
      }
      return value;
    },
    getFocusRingAtMs(arg0) {
      focusRingRewardId = undefined;
      if (first != null) {
        focusRingRewardId = first.focusRingRewardId;
      }
      let focusRingAtMs = null;
      if (focusRingRewardId === arg0) {
        focusRingAtMs = first.focusRingAtMs;
      }
      return focusRingAtMs;
    }
  };
}