// === Module 17041: OrbsArcadeRewardChainCell ===

// Module 17041 (OrbsArcadeRewardChainCell)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 575 */;
import _modDef671 from "module_671" /* 671 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5095 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5015 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
const StyleSheet = get_ActivityIndicator.StyleSheet;
const View = get_ActivityIndicator.View;
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9, jsxs: c10 } = jsxProd);
let c11 = 1.6666666666666667;
let c12 = 500;
const start = { x: 0, y: 0 };
const end = { x: 0, y: 1 };
const createStyles = fn(5014);
let obj2 = { cell: { width: 50, height: 50, alignItems: "center", justifyContent: "center" }, circle: null, ring: null, confetti: null, stem: null, grantedStem: null, checkBadge: null };
let obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.borderRadius = 25;
obj2.circle = obj3;
obj2.ring = { borderWidth: 1.6666666666666667, borderColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
obj2.confetti = { position: "absolute", top: -50, left: -50, width: 150, height: 150 };
obj2.stem = { position: "absolute", left: 24, width: 2 };
const obj4 = { borderWidth: 1.6666666666666667, borderColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
obj2.grantedStem = { backgroundColor: nativeDefault.colors.STATUS_POSITIVE, opacity: 0.4 };
obj2.checkBadge = { position: "absolute", right: -1, bottom: -1 };
let closure_15 = createStyles.createStyles(obj2);
function getWindowProgress(arg0, arg1, arg2) {
  let num = 1;
  if (null != arg1) {
    const obj = ReanimatedRexport;
    const items = [arg1, arg1 + arg2];
    num = obj.interpolate(arg0, items, [0, 1], ReanimatedRexport.Extrapolation.CLAMP);
  }
  return num;
}
let obj5 = { backgroundColor: nativeDefault.colors.STATUS_POSITIVE, opacity: 0.4 };
getWindowProgress.__closure = { interpolate: fn(5095).interpolate, Extrapolation: fn(5095).Extrapolation };
getWindowProgress.__workletHash = 10001292080604;
getWindowProgress.__initData = { code: "function getWindowProgress_OrbsArcadeRewardChainCellTsx1(timeMs,startMs,durationMs){const{interpolate,Extrapolation}=this.__closure;if(startMs==null){return 1;}return interpolate(timeMs,[startMs,startMs+durationMs],[0,1],Extrapolation.CLAMP);}" };
const __initData = { code: "function OrbsArcadeRewardChainCellTsx2(){const{isGranted,isFocused,DIMMED_ROW_OPACITY,getWindowProgress,timeline,focusRingAtMs,FOCUS_RING_MS,interpolate}=this.__closure;if(isGranted){return{opacity:1};}if(!isFocused){return{opacity:DIMMED_ROW_OPACITY};}const progress=getWindowProgress(timeline.get(),focusRingAtMs,FOCUS_RING_MS);return{opacity:interpolate(progress,[0,1],[DIMMED_ROW_OPACITY,1])};}" };
const __initData2 = { code: "function OrbsArcadeRewardChainCellTsx3(){const{getWindowProgress,timeline,grantAtMs,GRANT_FILL_MS}=this.__closure;return getWindowProgress(timeline.get(),grantAtMs,GRANT_FILL_MS);}" };
const __initData3 = { code: "function OrbsArcadeRewardChainCellTsx4(){const{getWindowProgress,timeline,focusRingAtMs,FOCUS_RING_MS}=this.__closure;return getWindowProgress(timeline.get(),focusRingAtMs,FOCUS_RING_MS);}" };
const __initData4 = { code: "function OrbsArcadeRewardChainCellTsx5(){const{getWindowProgress,timeline,stemAtMs,GRANT_STEM_MS}=this.__closure;return getWindowProgress(timeline.get(),stemAtMs,GRANT_STEM_MS);}" };
const __initData5 = { code: "function OrbsArcadeRewardChainCellTsx6(){const{confettiAtMs,timeline}=this.__closure;return confettiAtMs!=null&&timeline.get()>=confettiAtMs;}" };
const __initData6 = { code: "function OrbsArcadeRewardChainCellTsx7(reached,wasReached){const{runOnJS,playConfetti}=this.__closure;if(reached&&wasReached===false){runOnJS(playConfetti)();}}" };
const __initData7 = { code: "function OrbsArcadeRewardChainCellTsx8(){const{fillProgress}=this.__closure;return{opacity:fillProgress.get()};}" };
const __initData8 = { code: "function OrbsArcadeRewardChainCellTsx9(){const{interpolate,getWindowProgress,timeline,checkAtMs,GRANT_CHECK_MS,GRANT_CONFETTI_MS}=this.__closure;return{transform:[{scale:interpolate(getWindowProgress(timeline.get(),checkAtMs,GRANT_CHECK_MS+GRANT_CONFETTI_MS),[0,0.6,1],[0,1.2,1])}]};}" };
const __initData9 = { code: "function OrbsArcadeRewardChainCellTsx10(){const{stemLength,stemProgress}=this.__closure;var _stemLength,_stemLength2;return{top:-((_stemLength=stemLength)!==null&&_stemLength!==void 0?_stemLength:0)*stemProgress.get(),height:((_stemLength2=stemLength)!==null&&_stemLength2!==void 0?_stemLength2:0)*stemProgress.get()};}" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeRewardChainCell.tsx");

export default function OrbsArcadeRewardChainCell(grantAtMs) {
  ({ reward, stemLength } = grantAtMs);
  ({ isStemTargetGranted, timeline } = grantAtMs);
  grantAtMs = grantAtMs.grantAtMs;
  const focusRingAtMs = grantAtMs.focusRingAtMs;
  c6 = undefined;
  let sum1;
  let sum2;
  let derivedValue;
  let derivedValue2;
  let strokeWidth;
  ({ status, isFocused } = grantAtMs);
  let tmp = closure_15();
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
  class D {
    constructor() {
      value = timeline.get();
      tmp2 = grantAtMs;
      if (typeof getWindowProgress === "function") {
        tmp3 = null;
        num = 1;
        if (null != tmp2) {
          tmp4 = closure_0;
          tmp5 = closure_2;
          obj = closure_0(closure_2[7]);
          items = [, ];
          items[0] = tmp2;
          num2 = 400;
          items[1] = tmp2 + 400;
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
  D.__closure = { getWindowProgress, timeline, grantAtMs, GRANT_FILL_MS: 400 };
  D.__workletHash = 457674995255;
  D.__initData = __initData2;
  derivedValue = stemLength(grantAtMs[7]).useDerivedValue(D);
  const obj5 = { getWindowProgress, timeline, grantAtMs, GRANT_FILL_MS: 400 };
  const tmp2Result = stemLength(grantAtMs[7]);
  class L {
    constructor() {
      value = timeline.get();
      tmp2 = focusRingAtMs;
      if (typeof getWindowProgress === "function") {
        tmp4 = null;
        num = 1;
        if (null != tmp2) {
          tmp5 = closure_0;
          tmp6 = closure_2;
          obj = closure_0(closure_2[7]);
          items = [, ];
          items[0] = tmp2;
          items[1] = tmp2 + tmp3;
          tmp7 = obj;
          tmp8 = value;
          tmp9 = items;
          num = obj.interpolate(value, items, [0, 1], closure_0(closure_2[7]).Extrapolation.CLAMP);
        }
        return num;
      } else {
        str = "Trying to call a non-function";
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
  L.__closure = { getWindowProgress, timeline, focusRingAtMs, FOCUS_RING_MS };
  L.__workletHash = 2881105662352;
  L.__initData = __initData3;
  const derivedValue1 = stemLength(grantAtMs[7]).useDerivedValue(L);
  const obj6 = { getWindowProgress, timeline, focusRingAtMs, FOCUS_RING_MS };
  const tmp2Result8 = stemLength(grantAtMs[7]);
  class W {
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
  W.__closure = { getWindowProgress, timeline, stemAtMs: sum2, GRANT_STEM_MS: 300 };
  W.__workletHash = 16672758617649;
  W.__initData = __initData4;
  derivedValue2 = stemLength(grantAtMs[7]).useDerivedValue(W);
  strokeWidth = obj4.useCallback(() => {
    const current = ref.current;
    let playResult;
    if (current != null) {
      playResult = current.play();
    }
    return playResult;
  }, []);
  const tmp2Result9 = stemLength(grantAtMs[7]);
  const fn = function v() {
    let tmp2 = null != sum1;
    if (tmp2) {
      tmp2 = timeline.get() >= tmp;
    }
    return tmp2;
  };
  fn.__closure = { confettiAtMs: sum1, timeline };
  fn.__workletHash = 16599466747956;
  fn.__initData = __initData5;
  const fn2 = function k(arg0, arg1) {
    let tmp = arg0;
    if (arg0) {
      tmp = false === arg1;
    }
    if (tmp) {
      ReanimatedRexport.runOnJS(callback)();
    }
  };
  const tmp2Result10 = stemLength(grantAtMs[7]);
  fn2.__closure = { runOnJS: stemLength(grantAtMs[7]).runOnJS, playConfetti: strokeWidth };
  fn2.__workletHash = 16492338404069;
  fn2.__initData = __initData6;
  const animatedReaction = tmp2Result10.useAnimatedReaction(fn, fn2);
  let items = [token1];
  let items1 = [token1];
  const memo = obj4.useMemo(() => {
    const obj = { boxShadow: null };
    const obj2 = { offsetX: 0, offsetY: 0, blurRadius: 5, color: null };
    const obj3 = _modDef671(token1);
    obj2.color = _modDef671(token1).alpha(0.5).css();
    const items = [obj2];
    obj.boxShadow = items;
    return obj;
  }, items);
  const memo1 = obj4.useMemo(() => {
    const obj = _modDef671(token1);
    const items = [_modDef671(token1).alpha(0).css(), token1];
    return items;
  }, items1);
  const obj7 = { runOnJS: stemLength(grantAtMs[7]).runOnJS, playConfetti: strokeWidth };
  const fn3 = function $() {
    return { opacity: derivedValue.get() };
  };
  fn3.__closure = { fillProgress: derivedValue };
  fn3.__workletHash = 12498561807764;
  fn3.__initData = __initData7;
  const animatedStyle = stemLength(grantAtMs[7]).useAnimatedStyle(fn3);
  const tmp2Result11 = stemLength(grantAtMs[7]);
  function ee() {
    value = timeline.get();
    if (typeof getWindowProgress === "function") {
      let num = 1;
      if (null != c6) {
        const tmpResult = ReanimatedRexport;
        const items = [c6, c6 + 400];
        num = tmpResult.interpolate(value, items, [0, 1], ReanimatedRexport.Extrapolation.CLAMP);
      }
      const obj2 = { transform: null };
      const obj3 = { scale: obj.interpolate(num, [0, 0.6, 1], [0, 1.2, 1]) };
      const items1 = [obj3];
      obj2.transform = items1;
      return obj2;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
    obj = ReanimatedRexport;
  }
  const tmp2Result12 = stemLength(grantAtMs[7]);
  ee.__closure = { interpolate: stemLength(grantAtMs[7]).interpolate, getWindowProgress, timeline, checkAtMs: sum, GRANT_CHECK_MS: 150, GRANT_CONFETTI_MS: 250 };
  ee.__workletHash = 14524699700096;
  ee.__initData = __initData8;
  const animatedStyle1 = tmp2Result12.useAnimatedStyle(ee);
  stemLength(grantAtMs[7]);
  function te() {
    let num = stemLength;
    let num2 = stemLength;
    if (stemLength == null) {
      num2 = 0;
    }
    const obj = { top: -num2 * derivedValue2.get(), height: null };
    if (num == null) {
      num = 0;
    }
    obj.height = num * derivedValue2.get();
    return obj;
  }
  te.__closure = { stemLength, stemProgress: derivedValue2 };
  te.__workletHash = 5035540152605;
  te.__initData = __initData9;
  const obj9 = { style: tmp.cell, children: null };
  let tmp25Result2 = null;
  if (null != stemLength) {
    const items2 = [tmp.stem, , ];
    let grantedStem;
    if (isStemTargetGranted) {
      grantedStem = tmp.grantedStem;
    }
    const obj10 = { style: null, children: null };
    items2[1] = grantedStem;
    items2[2] = tmp21;
    obj10.style = items2;
    let tmp25Result = null;
    if (!isStemTargetGranted) {
      const obj11 = { style: ref.absoluteFill, start, end, colors: memo1 };
      tmp25Result = tmp25(timeline(tmp3[14]), obj11);
    }
    obj10.children = tmp25Result;
    tmp25Result2 = tmp25(timeline(tmp3[7]).View, obj10);
  }
  const tmp31 = status !== stemLength(grantAtMs[12]).OrbsArcadeRewardStatus.LOCKED;
  const items3 = [tmp25Result2, , , , , , ];
  const obj12 = { style: null };
  const items4 = [, ];
  ({ circle: arr5[0], ring: arr5[1] } = tmp);
  obj12.style = items4;
  items3[1] = sum2(c6, obj12);
  if (isFocused) {
    const obj13 = { color: token, progress: derivedValue1, rewardSize: 50, strokeWidth };
    let tmp32Result = tmp32(timeline(tmp3[15]), obj13);
  } else {
    tmp32Result = null;
  }
  items3[2] = tmp32Result;
  let tmp22Result = null;
  if (tmp31) {
    let tmp32Result5 = null;
    if (!tmp2Result14.isThemeLight(obj.useThemeContext().theme)) {
      const obj14 = { style: null };
      const items5 = [tmp.circle, memo, animatedStyle];
      obj14.style = items5;
      tmp32Result5 = tmp32(timeline(tmp3[7]).View, obj14);
    }
    const obj15 = { children: null };
    const items6 = [tmp32Result5, ];
    const obj16 = { color: token1, progress: derivedValue, rewardSize: 50, strokeWidth };
    items6[1] = tmp32(timeline(tmp3[15]), obj16);
    obj15.children = items6;
    tmp22Result = tmp22(derivedValue, obj15);
    tmp2Result14 = stemLength(tmp3[10]);
  }
  items3[3] = tmp22Result;
  if (reward.type === stemLength(grantAtMs[12]).OrbsArcadeRewardType.FRACTIONAL_PREMIUM) {
    let tmp32Result6 = tmp32(stemLength(tmp3[16]).NitroCoinSpotIllustration, { height: 30 });
  } else {
    const obj17 = { reward, size: 38 };
    tmp32Result6 = tmp32(timeline(tmp3[17]), obj17);
  }
  items3[4] = tmp32Result6;
  let tmp32Result7 = null;
  if (tmp31) {
    const obj18 = { style: null, children: null };
    const items7 = [tmp.checkBadge, animatedStyle1];
    obj18.style = items7;
    const obj19 = { size: "xs", color: timeline(tmp3[6]).colors.STATUS_POSITIVE, secondaryColor: timeline(tmp3[6]).colors.WHITE };
    obj18.children = tmp32(stemLength(tmp3[18]).CircleCheckIcon, obj19);
    tmp32Result7 = tmp32(timeline(tmp3[7]).View, obj18);
  }
  items3[5] = tmp32Result7;
  let tmp32Result8 = null;
  if (tmp31) {
    tmp32Result8 = null;
    if (null != grantAtMs) {
      const obj20 = { pointerEvents: "none", style: tmp.confetti, children: null };
      const obj21 = { ref, source: stemLength(tmp3[20]), autoPlay: false, loop: false };
      obj20.children = tmp32(timeline(tmp3[19]), obj21);
      tmp32Result8 = tmp32(tmp23, obj20);
      const tmp4Result = timeline(tmp3[19]);
    }
  }
  items3[6] = tmp32Result8;
  obj9.children = items3;
  return derivedValue2(c6, obj9);
};
export function useOrbsArcadeRewardChainRowStyle(isGranted) {
  isGranted = isGranted.isGranted;
  const isFocused = isGranted.isFocused;
  const timeline = isGranted.timeline;
  const focusRingAtMs = isGranted.focusRingAtMs;
  const fn = function l() {
    if (isGranted) {
      return { opacity: 1 };
    } else if (isFocused) {
      value = timeline.get();
      if (typeof getWindowProgress === "function") {
        let num = 1;
        if (null != focusRingAtMs) {
          const obj = ReanimatedRexport;
          const items = [focusRingAtMs, focusRingAtMs + tmp6];
          num = obj.interpolate(value, items, [0, 1], ReanimatedRexport.Extrapolation.CLAMP);
        }
        const obj2 = { opacity: ReanimatedRexport.interpolate(num, [0, 1], [0.4, 1]) };
        return obj2;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      return { opacity: 0.4 };
    }
  };
  let obj = isGranted(timeline[7]);
  fn.__closure = { isGranted, isFocused, DIMMED_ROW_OPACITY: 0.4, getWindowProgress, timeline, focusRingAtMs, FOCUS_RING_MS, interpolate: isGranted(timeline[7]).interpolate };
  fn.__workletHash = 2692711565582;
  fn.__initData = __initData;
  return obj.useAnimatedStyle(fn);
}
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
        num3 = c12;
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