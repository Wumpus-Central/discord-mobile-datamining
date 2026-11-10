// discord_app/modules/orbs_arcade/native/OrbsArcadeRewardChainCell.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef671 from "../../../../_runtime/metro/00671__.js";
import _mod1652 from "../../../../_runtime/metro/01652__.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
let StyleSheet = get_ActivityIndicator.StyleSheet;
const View = get_ActivityIndicator.View;
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9, jsxs: closure_10 } = jsxProd);
let c11 = 1.6666666666666667;
const start = { x: 0, y: 0 };
const end = { x: 0, y: 1 };
const createStyles = fn(5142);
let obj2 = {
  cell: { width: 50, height: 50, alignItems: "center", justifyContent: "center" },
  circle: null,
  ring: null,
  confetti: null,
  stem: null,
  grantedStem: null,
  checkBadge: null,
};
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
let closure_14 = createStyles.createStyles(obj2);
let items = [
  {
    code: "(function getWindowProgress_OrbsArcadeRewardChainCellTsx1(timeMs,startMs,durationMs){let[interpolate,Extrapolation]=this.__closure;if(startMs==null){return 1;}return interpolate(timeMs,[startMs,startMs+durationMs],[0,1],Extrapolation.CLAMP);})",
  },
  fn(1652).interpolate,
  fn(1652).Extrapolation,
];
let closure_129_0;
let closure_129_1;
[tmp5, tmp6, tmp7] = items;
function getWindowProgress(arg0, arg1, arg2) {
  let num = 1;
  if (null != arg1) {
    items = [arg1, arg1 + arg2];
    num = require(arg0, items, [0, 1], importDefault.CLAMP);
  }
  return num;
}
let items1 = [tmp6, tmp7];
getWindowProgress.__closure = items1;
getWindowProgress.__workletHash = 8514018897669;
getWindowProgress.__initData = tmp5;
let closure_16 = {
  code: "(function OrbsArcadeRewardChainCellTsx2(){let[isGranted,isFocused,DIMMED_ROW_OPACITY,getWindowProgress,timeline,focusRingAtMs,FOCUS_RING_MS,interpolate]=this.__closure;if(isGranted){return{opacity:1};}if(!isFocused){return{opacity:DIMMED_ROW_OPACITY};}const progress=getWindowProgress(timeline.get(),focusRingAtMs,FOCUS_RING_MS);return{opacity:interpolate(progress,[0,1],[DIMMED_ROW_OPACITY,1])};})",
};
let closure_17 = {
  code: "(function OrbsArcadeRewardChainCellTsx3(){let[getWindowProgress,timeline,grantAtMs,GRANT_FILL_MS]=this.__closure;return getWindowProgress(timeline.get(),grantAtMs,GRANT_FILL_MS);})",
};
let closure_18 = {
  code: "(function OrbsArcadeRewardChainCellTsx4(){let[getWindowProgress,timeline,focusRingAtMs,FOCUS_RING_MS]=this.__closure;return getWindowProgress(timeline.get(),focusRingAtMs,FOCUS_RING_MS);})",
};
let closure_19 = {
  code: "(function OrbsArcadeRewardChainCellTsx5(){let[getWindowProgress,timeline,stemAtMs,GRANT_STEM_MS]=this.__closure;return getWindowProgress(timeline.get(),stemAtMs,GRANT_STEM_MS);})",
};
let closure_20 = {
  code: "(function OrbsArcadeRewardChainCellTsx6(){let[confettiAtMs,timeline]=this.__closure;return confettiAtMs!=null&&timeline.get()>=confettiAtMs;})",
};
let closure_21 = {
  code: "(function OrbsArcadeRewardChainCellTsx7(reached,wasReached){let[scheduleOnRN,playConfetti]=this.__closure;if(reached&&wasReached===false){scheduleOnRN(playConfetti);}})",
};
let closure_22 = {
  code: "(function OrbsArcadeRewardChainCellTsx8(){let[fillProgress]=this.__closure;return{opacity:fillProgress.get()};})",
};
let closure_23 = {
  code: "(function OrbsArcadeRewardChainCellTsx9(){let[interpolate,getWindowProgress,timeline,checkAtMs,GRANT_CHECK_MS,GRANT_CONFETTI_MS]=this.__closure;return{transform:[{scale:interpolate(getWindowProgress(timeline.get(),checkAtMs,GRANT_CHECK_MS+GRANT_CONFETTI_MS),[0,0.6,1],[0,1.2,1])}]};})",
};
let closure_24 = {
  code: "(function OrbsArcadeRewardChainCellTsx10(){let[stemLength,stemProgress]=this.__closure;var _stemLength,_stemLength2;return{top:-((_stemLength=stemLength)!==null&&_stemLength!==void 0?_stemLength:0)*stemProgress.get(),height:((_stemLength2=stemLength)!==null&&_stemLength2!==void 0?_stemLength2:0)*stemProgress.get()};})",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeRewardChainCell.tsx");

export default function OrbsArcadeRewardChainCell(arg0) {
  ({ reward, stemLength, isStemTargetGranted, timeline, grantAtMs } = arg0);
  _require = undefined;
  ({ status, isFocused, focusRingAtMs } = arg0);
  let tmp = closure_14();
  let obj = require("shared");
  const token = require("useToken").useToken(nativeDefault.colors.ICON_STRONG);
  let obj2 = require("useToken");
  const token1 = require("useToken").useToken(nativeDefault.colors.STATUS_POSITIVE);
  _require = token1;
  const ref = noop.useRef(null);
  importDefault = ref;
  let sum = null;
  if (null != grantAtMs) {
    sum = grantAtMs + 400;
  }
  let sum1 = null;
  if (null != sum) {
    sum1 = sum + 150;
  }
  let sum2 = null;
  if (null != sum1) {
    sum2 = sum1 + 250;
  }
  let obj3 = require("useToken");
  items = [closure_17, getWindowProgress, timeline, grantAtMs, 400];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  [tmp12, tmp13, tmp14, tmp15, tmp16] = items;
  class OrbsArcadeRewardChainCellTsx3 {
    constructor() {
      return closure_0(closure_1.get(), closure_2, closure_3);
    }
  }
  const items1 = [tmp13, tmp14, tmp15, tmp16];
  OrbsArcadeRewardChainCellTsx3.__closure = items1;
  OrbsArcadeRewardChainCellTsx3.__workletHash = 11819610046638;
  OrbsArcadeRewardChainCellTsx3.__initData = tmp12;
  const derivedValue = require("../../../../_runtime/metro/01652__.js").useDerivedValue(OrbsArcadeRewardChainCellTsx3);
  const tmp2Result = require("../../../../_runtime/metro/01652__.js");
  const items2 = [closure_18, getWindowProgress, timeline, focusRingAtMs, 500];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  [tmp18, tmp19, tmp20, tmp21, tmp22] = items2;
  class OrbsArcadeRewardChainCellTsx4 {
    constructor() {
      return closure_0(closure_1.get(), closure_2, closure_3);
    }
  }
  const items3 = [tmp19, tmp20, tmp21, tmp22];
  OrbsArcadeRewardChainCellTsx4.__closure = items3;
  OrbsArcadeRewardChainCellTsx4.__workletHash = 12936805051177;
  OrbsArcadeRewardChainCellTsx4.__initData = tmp18;
  const derivedValue1 = require("../../../../_runtime/metro/01652__.js").useDerivedValue(OrbsArcadeRewardChainCellTsx4);
  const tmp2Result8 = require("../../../../_runtime/metro/01652__.js");
  const items4 = [closure_19, getWindowProgress, timeline, sum2, 300];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  [tmp24, tmp25, tmp26, tmp27, tmp28] = items4;
  class OrbsArcadeRewardChainCellTsx5 {
    constructor() {
      return closure_0(closure_1.get(), closure_2, closure_3);
    }
  }
  const items5 = [tmp25, tmp26, tmp27, tmp28];
  OrbsArcadeRewardChainCellTsx5.__closure = items5;
  OrbsArcadeRewardChainCellTsx5.__workletHash = 15419288936808;
  OrbsArcadeRewardChainCellTsx5.__initData = tmp24;
  const derivedValue2 = require("../../../../_runtime/metro/01652__.js").useDerivedValue(OrbsArcadeRewardChainCellTsx5);
  const callback = obj4.useCallback(() => {
    const current = _undefined2.current;
    let playResult;
    if (current != null) {
      playResult = current.play();
    }
    return playResult;
  }, []);
  const tmp2Result9 = require("../../../../_runtime/metro/01652__.js");
  const items6 = [closure_20, sum1, timeline];
  _require = undefined;
  importDefault = undefined;
  [tmp31, tmp32, tmp33] = items6;
  class OrbsArcadeRewardChainCellTsx6 {
    constructor() {
      tmp2 = null != closure_0;
      if (tmp2) {
        tmp3 = closure_1;
        tmp2 = closure_1.get() >= tmp;
      }
      return tmp2;
    }
  }
  const items7 = [tmp32, tmp33];
  OrbsArcadeRewardChainCellTsx6.__closure = items7;
  OrbsArcadeRewardChainCellTsx6.__workletHash = 11506455557581;
  OrbsArcadeRewardChainCellTsx6.__initData = tmp31;
  const items8 = [closure_21, require("../../../../_runtime/metro/01705__.js").scheduleOnRN, callback];
  _require = undefined;
  importDefault = undefined;
  [tmp34, tmp35, tmp36] = items8;
  class OrbsArcadeRewardChainCellTsx7 {
    constructor(arg0, arg1) {
      tmp = arg0;
      if (arg0) {
        tmp2 = arg1;
        flag = false;
        tmp = false === arg1;
      }
      if (tmp) {
        tmp3 = closure_0;
        tmp4 = closure_1;
        tmp5 = closure_0(closure_1);
      }
      return;
    }
  }
  const items9 = [tmp35, tmp36];
  OrbsArcadeRewardChainCellTsx7.__closure = items9;
  OrbsArcadeRewardChainCellTsx7.__workletHash = 5869540871165;
  OrbsArcadeRewardChainCellTsx7.__initData = tmp34;
  const animatedReaction = require("../../../../_runtime/metro/01652__.js").useAnimatedReaction(
    OrbsArcadeRewardChainCellTsx6,
    OrbsArcadeRewardChainCellTsx7,
  );
  const items10 = [token1];
  const items11 = [token1];
  const memo = obj4.useMemo(() => {
    const obj = { boxShadow: null };
    const obj2 = { offsetX: 0, offsetY: 0, blurRadius: 5, color: null };
    const obj3 = _modDef671(c0);
    obj2.color = _modDef671(c0).alpha(0.5).css();
    items = [obj2];
    obj.boxShadow = items;
    return obj;
  }, items10);
  const memo1 = obj4.useMemo(() => {
    const obj = _modDef671(c0);
    items = [_modDef671(c0).alpha(0).css(), c0];
    return items;
  }, items11);
  const tmp2Result10 = require("../../../../_runtime/metro/01652__.js");
  const items12 = [closure_22, derivedValue];
  _require = undefined;
  [tmp40, tmp41] = items12;
  class OrbsArcadeRewardChainCellTsx8 {
    constructor() {
      obj = { opacity: closure_0.get() };
      return obj;
    }
  }
  const items13 = [tmp41];
  OrbsArcadeRewardChainCellTsx8.__closure = items13;
  OrbsArcadeRewardChainCellTsx8.__workletHash = 16220502073133;
  OrbsArcadeRewardChainCellTsx8.__initData = tmp40;
  const animatedStyle = require("../../../../_runtime/metro/01652__.js").useAnimatedStyle(
    OrbsArcadeRewardChainCellTsx8,
  );
  const tmp2Result11 = require("../../../../_runtime/metro/01652__.js");
  const items14 = [
    closure_23,
    require("../../../../_runtime/metro/01652__.js").interpolate,
    getWindowProgress,
    timeline,
    sum,
    150,
    250,
  ];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  noop = undefined;
  StyleSheet = undefined;
  [tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49] = items14;
  class OrbsArcadeRewardChainCellTsx9 {
    constructor() {
      obj = { transform: null };
      obj1 = {
        scale: closure_0(closure_1(closure_2.get(), closure_3, closure_4 + closure_5), [0, 0.6, 1], [0, 1.2, 1]),
      };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  const items15 = [tmp44, tmp45, tmp46, tmp47, tmp48, tmp49];
  OrbsArcadeRewardChainCellTsx9.__closure = items15;
  OrbsArcadeRewardChainCellTsx9.__workletHash = 15751771266873;
  OrbsArcadeRewardChainCellTsx9.__initData = tmp43;
  const animatedStyle1 = require("../../../../_runtime/metro/01652__.js").useAnimatedStyle(
    OrbsArcadeRewardChainCellTsx9,
  );
  require("../../../../_runtime/metro/01652__.js");
  const items16 = [closure_24, stemLength, derivedValue2];
  _require = undefined;
  importDefault = undefined;
  [tmp52, tmp53, tmp54] = items16;
  class OrbsArcadeRewardChainCellTsx10 {
    constructor() {
      num = closure_0;
      num2 = closure_0;
      if (closure_0 == null) {
        num2 = 0;
      }
      obj = { top: null, height: null };
      obj2 = closure_1;
      tmp = -num2;
      obj.top = tmp * closure_1.get();
      if (num == null) {
        num = 0;
      }
      obj.height = num * obj2.get();
      return obj;
    }
  }
  const items17 = [tmp53, tmp54];
  OrbsArcadeRewardChainCellTsx10.__closure = items17;
  OrbsArcadeRewardChainCellTsx10.__workletHash = 14451068892068;
  OrbsArcadeRewardChainCellTsx10.__initData = tmp52;
  const obj5 = { style: tmp.cell, children: null };
  let tmp59Result2 = null;
  if (null != stemLength) {
    const items18 = [tmp.stem, ,];
    let grantedStem;
    if (isStemTargetGranted) {
      grantedStem = tmp.grantedStem;
    }
    const obj6 = { style: null, children: null };
    items18[1] = grantedStem;
    items18[2] = tmp55;
    obj6.style = items18;
    let tmp59Result = null;
    if (!isStemTargetGranted) {
      const obj7 = { style: StyleSheet.absoluteFill, start, end, colors: memo1 };
      tmp59Result = closure_8(tmp4(5717), obj7);
    }
    obj6.children = tmp59Result;
    tmp59Result2 = closure_8(tmp4(1652).View, obj6);
  }
  const tmp65 = status !== require("OrbsArcadeTypes").OrbsArcadeRewardStatus.LOCKED;
  const items19 = [tmp59Result2, , , , , ,];
  const obj8 = { style: null };
  const items20 = [,];
  ({ circle: arr21[0], ring: arr21[1] } = tmp);
  obj8.style = items20;
  items19[1] = closure_8(View, obj8);
  if (isFocused) {
    const obj9 = { color: token, progress: derivedValue1, rewardSize: 50, strokeWidth };
    let tmp66Result = closure_8(tmp4(17395), obj9);
  } else {
    tmp66Result = null;
  }
  items19[2] = tmp66Result;
  let tmp56Result = null;
  if (tmp65) {
    let tmp66Result5 = null;
    if (!tmp2Result14.isThemeLight(obj.useThemeContext().theme)) {
      const obj10 = { style: null };
      const items21 = [tmp.circle, memo, animatedStyle];
      obj10.style = items21;
      tmp66Result5 = closure_8(tmp4(1652).View, obj10);
    }
    const obj11 = { children: null };
    const items22 = [tmp66Result5];
    const obj12 = { color: token1, progress: derivedValue, rewardSize: 50, strokeWidth };
    items22[1] = closure_8(tmp4(17395), obj12);
    obj11.children = items22;
    tmp56Result = closure_10(closure_9, obj11);
    tmp2Result14 = tmp2(5149);
  }
  items19[3] = tmp56Result;
  if (reward.type === require("OrbsArcadeTypes").OrbsArcadeRewardType.FRACTIONAL_PREMIUM) {
    let tmp66Result6 = closure_8(tmp2(9632).NitroCoinSpotIllustration, { height: 30 });
  } else {
    const obj13 = { reward, size: 38 };
    tmp66Result6 = closure_8(tmp4(17386), obj13);
  }
  items19[4] = tmp66Result6;
  let tmp66Result7 = null;
  if (tmp65) {
    const obj14 = { style: null, children: null };
    const items23 = [tmp.checkBadge, animatedStyle1];
    obj14.style = items23;
    const obj15 = { size: "xs", color: tmp4(575).colors.STATUS_POSITIVE, secondaryColor: tmp4(575).colors.WHITE };
    obj14.children = closure_8(tmp2(7404).CircleCheckIcon, obj15);
    tmp66Result7 = closure_8(tmp4(1652).View, obj14);
  }
  items19[5] = tmp66Result7;
  let tmp66Result8 = null;
  if (tmp65) {
    tmp66Result8 = null;
    if (null != grantAtMs) {
      const obj16 = { pointerEvents: "none", style: tmp.confetti, children: null };
      const obj17 = { ref, source: tmp2(17396), autoPlay: false, loop: false };
      obj16.children = closure_8(tmp4(5747), obj17);
      tmp66Result8 = closure_8(View, obj16);
      const tmp4Result = tmp4(5747);
    }
  }
  items19[6] = tmp66Result8;
  obj5.children = items19;
  return closure_10(View, obj5);
}
export function useOrbsArcadeRewardChainRowStyle(arg0) {
  ({ isGranted, isFocused, timeline, focusRingAtMs } = arg0);
  items = [
    closure_16,
    isGranted,
    isFocused,
    0.4,
    getWindowProgress,
    timeline,
    focusRingAtMs,
    500,
    _mod1652.interpolate,
  ];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  [tmp, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9] = items;
  class OrbsArcadeRewardChainCellTsx2 {
    constructor() {
      if (closure_0) {
        return { opacity: 1 };
      } else {
        tmp = closure_1;
        if (closure_1) {
          tmp3 = closure_3;
          tmp4 = closure_4;
          tmp5 = closure_5;
          tmp6 = closure_6;
          obj1 = { opacity: null };
          tmp7 = closure_7;
          tmp8 = closure_2;
          items = [,];
          items[0] = closure_2;
          num = 1;
          items[1] = 1;
          obj1.opacity = closure_7(closure_3(closure_4.get(), closure_5, closure_6), [0, 1], items);
          return obj1;
        } else {
          obj = { opacity: null };
          tmp2 = closure_2;
          obj.opacity = closure_2;
          return obj;
        }
      }
    }
  }
  const items1 = [tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9];
  OrbsArcadeRewardChainCellTsx2.__closure = items1;
  OrbsArcadeRewardChainCellTsx2.__workletHash = 17555703606007;
  OrbsArcadeRewardChainCellTsx2.__initData = tmp;
  return _mod1652.useAnimatedStyle(OrbsArcadeRewardChainCellTsx2);
}
export function useOrbsArcadeRewardChainTimeline(arg0) {
  ({ grantedRewardIds: require, focusedRewardId: importDefault, grantAnimatedOnOpenRewardIds: dependencyMap } = arg0);
  let first;
  items = [AccessibilityStore];
  _slicedToArray = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  first = _slicedToArray(
    first.useState(() => {
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
        const map = new Map(
          found.map((item, index) => {
            items = [item, 250 + 1100 * index];
            return items;
          }),
        );
        const sum = 250 + 1100 * map.size;
        const obj = { grantAtMsByRewardId: map, focusRingRewardId, focusRingAtMs: sum, endMs: null };
        let num3 = 0;
        if (null != focusRingRewardId) {
          num3 = 500;
        }
        obj.endMs = sum + num3;
        return obj;
      }
    }),
    1,
  )[0];
  const sharedValue = _mod1652.useSharedValue(0);
  const items1 = [first, sharedValue];
  const effect = first.useEffect(() => {
    if (null != first) {
      const _requestAnimationFrame = requestAnimationFrame;
      closure_0 = requestAnimationFrame(() => {
        const obj = require("timing/timing");
        return sharedValue.set(
          obj.withTiming(first.endMs, {
            duration: first.endMs,
            easing: require("../../../../_runtime/metro/01652__.js").Easing.linear,
          }),
        );
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
    },
  };
}
