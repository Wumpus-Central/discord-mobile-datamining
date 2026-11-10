// discord_app/modules/badges/native/BadgeUnlockAnimation.tsx
import _mod1652 from "../../../../_runtime/metro/01652__.js";
import _mod1705 from "../../../../_runtime/metro/01705__.js";
import ColorUtils from "../../../utils/ColorUtils.tsx";
import shared from "../../../design/shared.tsx";
import timing_timing from "../../../design/animation/reanimated/timing/timing.tsx";
import useTimeoutDefault from "../../../hooks/useTimeout.tsx";
import trackBadgeDirectoryActionDefault from "../trackBadgeDirectoryAction.tsx";
import BadgeUtils from "../BadgeUtils.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";

const require = globalThis.__r;
const _modDef1652 = _mod1652;

require = fn;
function BadgeLayer(onLoad) {
  ({ artUrl, rasterUrl, ambientUrl, hasFill, isShown } = onLoad);
  _require = isShown;
  onLoad = onLoad.onLoad;
  let sharedValue;
  let FALLBACK_BADGE_COLOR;
  noop = undefined;
  closure_5 = undefined;
  c6 = undefined;
  c7 = undefined;
  closure_8 = undefined;
  const tmp = closure_17();
  sharedValue = require("../../../../_runtime/metro/01652__.js").useSharedValue(0);
  let obj = require("../../../../_runtime/metro/01652__.js");
  items = [closure_18, sharedValue];
  _require = undefined;
  [tmp5, tmp6] = items;
  class BadgeUnlockAnimationTsx1 {
    constructor() {
      obj = { opacity: closure_0.get() };
      return obj;
    }
  }
  const items1 = [tmp6];
  BadgeUnlockAnimationTsx1.__closure = items1;
  BadgeUnlockAnimationTsx1.__workletHash = 5168065107335;
  BadgeUnlockAnimationTsx1.__initData = tmp5;
  const animatedStyle = require("../../../../_runtime/metro/01652__.js").useAnimatedStyle(BadgeUnlockAnimationTsx1);
  let obj2 = require("../../../../_runtime/metro/01652__.js");
  const items2 = [closure_19, onLoad.fillOpacity];
  _require = undefined;
  [tmp8, tmp9] = items2;
  class BadgeUnlockAnimationTsx2 {
    constructor() {
      obj = { opacity: closure_0.get() };
      return obj;
    }
  }
  const items3 = [tmp9];
  BadgeUnlockAnimationTsx2.__closure = items3;
  BadgeUnlockAnimationTsx2.__workletHash = 11413155013124;
  BadgeUnlockAnimationTsx2.__initData = tmp8;
  const animatedStyle1 = require("../../../../_runtime/metro/01652__.js").useAnimatedStyle(BadgeUnlockAnimationTsx2);
  const tmp2Result = require("../../../../_runtime/metro/01652__.js");
  const badgeColor = require("useBadgeColor").useBadgeColor(rasterUrl);
  FALLBACK_BADGE_COLOR = badgeColor;
  if (badgeColor == null) {
    FALLBACK_BADGE_COLOR = tmp2(tmp3[7]).FALLBACK_BADGE_COLOR;
  }
  const items4 = [FALLBACK_BADGE_COLOR];
  const items5 = [FALLBACK_BADGE_COLOR];
  const memo = noop.useMemo(() => ({ backgroundColor: FALLBACK_BADGE_COLOR }), items4);
  const memo1 = noop.useMemo(() => ({ shadowColor: FALLBACK_BADGE_COLOR }), items5);
  const items6 = [FALLBACK_BADGE_COLOR];
  const memo2 = noop.useMemo(() => {
    let tmp3 = null;
    if (obj.isAndroid()) {
      const obj2 = { filter: null };
      const obj3 = { dropShadow: null };
      const obj4 = { offsetX: 0, offsetY: 0, standardDeviation: 4, color: FALLBACK_BADGE_COLOR };
      obj3.dropShadow = obj4;
      items = [obj3, ,];
      const obj5 = { dropShadow: null };
      const obj6 = { offsetX: 0, offsetY: 0, standardDeviation: 4, color: FALLBACK_BADGE_COLOR };
      obj5.dropShadow = obj6;
      items[1] = obj5;
      const obj7 = { dropShadow: null };
      const obj8 = {
        offsetX: 0,
        offsetY: 0,
        standardDeviation: 10,
        color: ColorUtils.hexOpacityToRgba(FALLBACK_BADGE_COLOR, 0.8),
      };
      obj7.dropShadow = obj8;
      items[2] = obj7;
      obj2.filter = items;
      tmp3 = obj2;
      const tmpResult = ColorUtils;
    }
    return tmp3;
  }, items6);
  const tmp2Result3 = require("useBadgeColor");
  [tmp17, c4] = FALLBACK_BADGE_COLOR(noop.useState(false), 2);
  const callback = noop.useCallback(() => _undefined2(true), []);
  closure_5 = tmp19;
  const tmp16 = FALLBACK_BADGE_COLOR(noop.useState(false), 2);
  [tmp21, c6] = FALLBACK_BADGE_COLOR(noop.useState(false), 2);
  const callback1 = obj5.useCallback(() => _undefined3(true), []);
  const tmp15Result = FALLBACK_BADGE_COLOR(noop.useState(false), 2);
  if (null == ambientUrl) {
    let num = null;
  } else {
    num = 1000;
  }
  onLoad(sharedValue[10])(callback1, num);
  const tmp24 = onLoad(sharedValue[10]);
  [tmp28, c7] = FALLBACK_BADGE_COLOR(noop.useState(false), 2);
  let tmp30 = tmp19;
  const callback2 = obj5.useCallback(() => _undefined4(true), []);
  if (null == artUrl || tmp17) {
    tmp30 = null != badgeColor;
  }
  if (tmp30) {
    tmp30 = null == ambientUrl || tmp28;
    const tmp31 = null == ambientUrl || tmp28;
  }
  closure_8 = tmp30;
  const items7 = [tmp30, onLoad];
  const effect = obj5.useEffect(() => {
    if (closure_8) {
      onLoad();
    }
  }, items7);
  const items8 = [null == artUrl || tmp17, isShown, sharedValue];
  const effect1 = obj5.useEffect(() => {
    if (closure_5) {
      let num2 = 1;
      if (c0) {
        const obj2 = { duration, easing };
        num2 = timing_timing.withTiming(1, obj2, "animate-always");
      }
      const result = sharedValue.set(num2);
    }
  }, items8);
  if (null == artUrl) {
    return null;
  } else {
    const size = { url: artUrl, width: 192, height: 120, fallbackUrl: rasterUrl, sharesSvgLoad: true };
    let obj3 = { style: animatedStyle, children: null };
    if (null != ambientUrl) {
      let obj4 = { style: tmp.artSize, children: null };
      const size1 = {
        url: ambientUrl,
        width: 205.7142857142857,
        height: 171.42857142857142,
        animated: true,
        onLoad: callback,
        onError: callback1,
        style: tmp.nitroAmbientArt,
      };
      obj4.children = c7(tmp23(tmp3[12]), size1);
      let tmp40 = c7(closure_5, obj4);
      let tmp39 = c7;
    } else {
      let obj6 = {};
      const merged = Object.assign(size);
      obj6.onLoad = callback;
      tmp39 = c7;
      tmp40 = c7(tmp23(tmp3[12]), obj6);
      const tmp23Result = tmp23(tmp3[12]);
    }
    const items9 = [tmp40];
    if (hasFill) {
      let obj7 = { style: null, children: null };
      const items10 = [, , ,];
      ({ layer: arr11[0], haloGlow: arr11[1] } = tmp);
      items10[2] = memo1;
      items10[3] = animatedStyle1;
      obj7.style = items10;
      let obj8 = { style: null, children: null };
      const items11 = [tmp.edgeGlow, memo1];
      obj8.style = items11;
      const items12 = [tmp.edgeGlow, memo1, ,];
      const tmp2Result4 = tmp2(tmp3[8]);
      const obj9 = { style: null, children: null };
      items12[2] = tmp2(tmp3[8]).isAndroid() && tmp.glowArea;
      items12[3] = memo2;
      obj9.style = items12;
      const tmp44 = tmp2(tmp3[8]).isAndroid() && tmp.glowArea;
      const obj10 = {};
      const tmp23Result3 = tmp23(tmp3[13]);
      const merged1 = Object.assign(size);
      let tmp50;
      if (null != ambientUrl) {
        tmp50 = callback2;
      }
      const obj11 = { maskElement: null, children: null };
      obj10.onLoad = tmp50;
      obj11.maskElement = tmp39(tmp23(tmp3[12]), obj10);
      class BadgeUnlockAnimationTsx1 {
        constructor() {
          obj = { opacity: closure_0.get() };
          return obj;
        }
      }
      const items13 = [tmp.artSize, memo];
      tmp51[0] = items13;
      obj11.children = tmp39(closure_5, tmp51);
      obj9.children = tmp39(tmp23Result3, obj11);
      obj8.children = tmp39(closure_5, obj9);
      obj7.children = tmp39(closure_5, obj8);
      hasFill = tmp39(tmp23(tmp3[5]).View, obj7);
      const tmp23Result4 = tmp23(tmp3[12]);
    }
    items9[1] = hasFill;
    obj3.children = items9;
    return closure_8(tmp23(tmp3[5]).View, obj3);
  }
  const tmp15Result2 = FALLBACK_BADGE_COLOR(noop.useState(false), 2);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8 } = jsxProd);
const Easing = fn(1652).Easing;
let closure_9 = Easing.bezier(0.33, 0, 0.67, 1);
const Easing2 = fn(1652).Easing;
let closure_10 = Easing2.bezier(0.62, 0, 0.47, 1);
const Easing3 = fn(1652).Easing;
let closure_11 = Easing3.bezier(0.43, 0, 0.54, 1);
const Easing4 = fn(1652).Easing;
let closure_12 = Easing4.bezier(0.17, 0.17, 0.83, 0.83);
const Easing5 = fn(1652).Easing;
let closure_13 = Easing5.bezier(0.67, 0, 0.28, 1);
let c14 = 250;
let c15 = 1000;
let c16 = 200;
const createStyles = fn(5142);
let closure_17 = createStyles.createStyles({
  pulse: { position: "absolute", top: -40, left: -54, width: 300, height: 200 },
  pulseHidden: { opacity: 0 },
  layer: { position: "absolute", top: 0, left: 0 },
  artSize: { width: 192, height: 120 },
  nitroAmbientArt: { position: "absolute", left: -6.857142857142847, top: -25.714285714285708 },
  edgeGlow: { shadowOpacity: 1, shadowRadius: 4, shadowOffset: { width: 0, height: 0 } },
  haloGlow: { shadowOpacity: 0.8, shadowRadius: 10, shadowOffset: { width: 0, height: 0 } },
  glowArea: { margin: -30, padding: 30 },
});
let closure_18 = {
  code: "(function BadgeUnlockAnimationTsx1(){let[opacity]=this.__closure;return{opacity:opacity.get()};})",
};
let closure_19 = {
  code: "(function BadgeUnlockAnimationTsx2(){let[fillOpacity]=this.__closure;return{opacity:fillOpacity.get()};})",
};
let closure_21 = {
  code: "(function BadgeUnlockAnimationTsx3(){let[sheetIndex]=this.__closure;return sheetIndex.get()>=0;})",
};
let closure_22 = {
  code: "(function BadgeUnlockAnimationTsx4(isUp){let[scheduleOnRN,setIsSheetUp]=this.__closure;if(isUp)scheduleOnRN(setIsSheetUp,true);})",
};
let closure_23 = {
  code: "(function BadgeUnlockAnimationTsx5(finished){let[scheduleOnRN,startPulse]=this.__closure;if(finished===true)scheduleOnRN(startPulse);})",
};
let closure_24 = {
  code: "(function BadgeUnlockAnimationTsx6(finished){let[scheduleOnRN,setIsFillDone]=this.__closure;if(finished===true)scheduleOnRN(setIsFillDone,true);})",
};
let closure_25 = {
  code: "(function BadgeUnlockAnimationTsx7(){let[groupScale]=this.__closure;return{transform:[{scale:groupScale.get()}]};})",
};
let closure_26 = {
  code: "(function BadgeUnlockAnimationTsx8(){let[oldScale]=this.__closure;return{transform:[{scale:oldScale.get()}]};})",
};
let closure_27 = {
  code: "(function BadgeUnlockAnimationTsx9(){let[newScale]=this.__closure;return{transform:[{scale:newScale.get()}]};})",
};
let size = fn(2);
let result = size.fileFinishedImporting("modules/badges/native/BadgeUnlockAnimation.tsx");

export default function BadgeUnlockAnimation(badge) {
  badge = badge.badge;
  _require = badge;
  ({ userId: c1, source: dependencyMap, previousTierKey } = badge);
  ({ contentOpacity: noop, titleScale: View, unlockLabelOpacity: AccessibilityStore } = badge);
  let sharedValue3;
  let sharedValue4;
  c15 = undefined;
  c16 = undefined;
  c17 = undefined;
  closure_18 = undefined;
  let ref;
  let FALLBACK_BADGE_COLOR;
  c21 = undefined;
  closure_22 = undefined;
  const tmp = c17();
  items = [AccessibilityStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => AccessibilityStore.useReducedMotion);
  let obj = require("initialize");
  const findTierResult = require("BadgeUtils").findTier(badge, previousTierKey);
  let obj2 = require("BadgeUtils");
  let obj3 = require("badgeUnlockArt");
  const badgeUnlockArt = obj3.getBadgeUnlockArt(badge, require("BadgeUtils").getDisplayTier(badge), false);
  let obj4 = require("BadgeUtils");
  const badgeUnlockArt1 = require("badgeUnlockArt").getBadgeUnlockArt(badge, findTierResult, true);
  const tmp8 = badge.badge_id === require("BadgeId").BadgeId.PREMIUM_TENURE && !stateFromStores;
  let tmp56Result = null != findTierResult && !stateFromStores;
  closure_8 = tmp56Result;
  let obj5 = require("badgeUnlockArt");
  let num2 = 1;
  const sharedValue = require("../../../../_runtime/metro/01652__.js").useSharedValue(1);
  const tmp2Result = require("../../../../_runtime/metro/01652__.js");
  const sharedValue1 = require("../../../../_runtime/metro/01652__.js").useSharedValue(1);
  const tmp2Result10 = require("../../../../_runtime/metro/01652__.js");
  const sharedValue2 = require("../../../../_runtime/metro/01652__.js").useSharedValue(0);
  const tmp2Result11 = require("../../../../_runtime/metro/01652__.js");
  let num3 = 0;
  if (stateFromStores) {
    num3 = num2;
  }
  sharedValue3 = require("../../../../_runtime/metro/01652__.js").useSharedValue(num3);
  const tmp2Result12 = require("../../../../_runtime/metro/01652__.js");
  let num4 = num2;
  if (stateFromStores) {
    num4 = 0;
  }
  sharedValue4 = require("../../../../_runtime/metro/01652__.js").useSharedValue(num4);
  const tmp2Result13 = require("../../../../_runtime/metro/01652__.js");
  [tmp17, c15] = previousTierKey(noop.useState(stateFromStores), 2);
  const tmp16 = previousTierKey(noop.useState(stateFromStores), 2);
  [tmp19, c16] = previousTierKey(noop.useState(0), 2);
  const callback = noop.useCallback(() => _undefined((arg0) => arg0 + 1), []);
  const tmp18 = previousTierKey(noop.useState(0), 2);
  [tmp22, c17] = previousTierKey(noop.useState(false), 2);
  if (tmp56Result) {
    num2 = 2;
  }
  let tmp26 = 1000;
  const tmp21 = previousTierKey(noop.useState(false), 2);
  if (tmp19 >= num2 || tmp22) {
    tmp26 = null;
  }
  useTimeoutDefault(() => _undefined2(true), tmp26);
  [tmp29, tmp30] = previousTierKey(noop.useState(false), 2);
  const tmp15Result = previousTierKey(noop.useState(false), 2);
  let items1 = [c21, badge.sheetIndex];
  _require = undefined;
  [tmp31, tmp32] = items1;
  class BadgeUnlockAnimationTsx3 {
    constructor() {
      return closure_0.get() >= 0;
    }
  }
  let items2 = [tmp32];
  BadgeUnlockAnimationTsx3.__closure = items2;
  BadgeUnlockAnimationTsx3.__workletHash = 17283210868115;
  BadgeUnlockAnimationTsx3.__initData = tmp31;
  let items3 = [closure_22, require("../../../../_runtime/metro/01705__.js").scheduleOnRN, tmp30];
  _require = undefined;
  importDefault = undefined;
  [tmp33, tmp34, tmp35] = items3;
  class BadgeUnlockAnimationTsx4 {
    constructor(arg0) {
      if (badge) {
        tmp = closure_0;
        tmp2 = closure_1;
        flag = true;
        tmp3 = closure_0(closure_1, true);
      }
      return;
    }
  }
  const items4 = [tmp34, tmp35];
  BadgeUnlockAnimationTsx4.__closure = items4;
  BadgeUnlockAnimationTsx4.__workletHash = 2871332509453;
  BadgeUnlockAnimationTsx4.__initData = tmp33;
  const animatedReaction = require("../../../../_runtime/metro/01652__.js").useAnimatedReaction(
    BadgeUnlockAnimationTsx3,
    BadgeUnlockAnimationTsx4,
  );
  closure_18 = tmp29;
  ref = noop.useRef(null);
  const tmp2Result14 = require("../../../../_runtime/metro/01652__.js");
  FALLBACK_BADGE_COLOR = require("useBadgeColor").useBadgeColor(badgeUnlockArt.rasterUrl);
  if (FALLBACK_BADGE_COLOR == null) {
    FALLBACK_BADGE_COLOR = tmp2(11631).FALLBACK_BADGE_COLOR;
  }
  const items5 = [FALLBACK_BADGE_COLOR];
  const memo = noop.useMemo(() => ({ fill: FALLBACK_BADGE_COLOR }), items5);
  const tmp2Result15 = require("useBadgeColor");
  [tmp40, c21] = previousTierKey(noop.useState(false), 2);
  const items6 = [stateFromStores];
  const effect = noop.useEffect(() => {
    if (!stateFromStores) {
      const current = ref.current;
      if (current != null) {
        current.pause();
      }
    }
  }, items6);
  closure_22 = noop.useCallback(() => {
    _undefined3(true);
    const current = ref.current;
    if (current != null) {
      current.play();
    }
  }, []);
  const items7 = [tmp29];
  const effect1 = noop.useEffect(() => {
    if (closure_18) {
      const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
      AccessibilityAnnouncer.announce(BadgeUtils.getBadgeUnlockLabel(badge, previousTierKey), "polite");
      const obj2 = {
        actionName: "badge_unlock_viewed",
        badge,
        displayedUserId,
        isSociallyNavigated: false,
        source,
        surface: "badge_details",
      };
      trackBadgeDirectoryActionDefault(obj2);
      if (stateFromStores) {
        const result = sharedValue3.set(1);
        const result1 = sharedValue4.set(0);
        const obj3 = { duration, easing };
        const result2 = noop.set(timing_timing.withTiming(1, obj3, "animate-always"));
        const result3 = View.set(1);
        const tmpResult = timing_timing;
      } else {
        const tmpResult25 = _mod1652;
        const Never = _mod1652.ReduceMotion.Never;
        const tmpResult24 = _mod1652;
        const obj4 = { duration: num, easing };
        const withTimingResult = timing_timing.withTiming(1.1, obj4, "animate-always");
        const tmpResult27 = timing_timing;
        const obj5 = { duration: duration2, easing };
        items = [closure_23, _mod1705.scheduleOnRN, closure_22];
        badge = undefined;
        displayedUserId = undefined;
        [tmp20, tmp21, tmp22] = items;
        class BadgeUnlockAnimationTsx5 {
          constructor(arg0) {
            if (true === arg0) {
              tmp = closure_0;
              tmp2 = closure_1;
              tmp3 = closure_0(closure_1);
            }
            return;
          }
        }
        const items1 = [tmp21, tmp22];
        BadgeUnlockAnimationTsx5.__closure = items1;
        BadgeUnlockAnimationTsx5.__workletHash = 11528024484669;
        BadgeUnlockAnimationTsx5.__initData = tmp20;
        const withTimingResult1 = tmpResult27.withTiming(1.15, obj5, "animate-always", BadgeUnlockAnimationTsx5);
        const tmpResult26 = timing_timing;
        const obj6 = { duration: 150, easing };
        const tmpResult28 = timing_timing;
        const withTimingResult2 = timing_timing.withTiming(0.75, obj6, "animate-always");
        const obj7 = { duration: 350, easing };
        const tmpResult29 = timing_timing;
        const result4 = sharedValue.set(
          tmpResult24.withDelay(
            c16,
            tmpResult25.withSequence(
              Never,
              withTimingResult,
              withTimingResult1,
              withTimingResult2,
              timing_timing.withTiming(1, obj7, "animate-always"),
            ),
            _mod1652.ReduceMotion.Never,
          ),
        );
        if (closure_8) {
          const tmpResult30 = _mod1652;
          const obj8 = { duration: 750, easing: easing4 };
          const tmpResult31 = timing_timing;
          const result5 = sharedValue2.set(
            tmpResult30.withDelay(
              c16,
              timing_timing.withTiming(1, obj8, "animate-always"),
              _mod1652.ReduceMotion.Never,
            ),
          );
          const withTimingResult3 = timing_timing.withTiming(1, obj8, "animate-always");
          const tmpResult32 = _mod1652;
          const obj9 = { duration: 250, easing: easing2 };
          const tmpResult33 = timing_timing;
          const result6 = sharedValue1.set(
            tmpResult32.withDelay(
              c16 + tmp13,
              timing_timing.withTiming(0, obj9, "animate-always"),
              _mod1652.ReduceMotion.Never,
            ),
          );
          const withTimingResult4 = timing_timing.withTiming(0, obj9, "animate-always");
        }
        const withSequenceResult = tmpResult25.withSequence(
          Never,
          withTimingResult,
          withTimingResult1,
          withTimingResult2,
          timing_timing.withTiming(1, obj7, "animate-always"),
        );
        const tmpResult34 = _mod1652;
        const obj10 = { duration: 500, easing: easing3 };
        const tmpResult35 = timing_timing;
        const sum = c16 + tmp13;
        const result7 = sharedValue3.set(
          tmpResult34.withDelay(sum, timing_timing.withTiming(1, obj10, "animate-always"), _mod1652.ReduceMotion.Never),
        );
        const withTimingResult5 = timing_timing.withTiming(1, obj10, "animate-always");
        const tmpResult37 = timing_timing;
        const obj11 = { duration: 400, easing: easing4 };
        const items2 = [closure_24, _mod1705.scheduleOnRN, duration2];
        badge = undefined;
        displayedUserId = undefined;
        [tmp53, tmp54, tmp55] = items2;
        class BadgeUnlockAnimationTsx6 {
          constructor(arg0) {
            if (true === arg0) {
              tmp = closure_0;
              tmp2 = closure_1;
              tmp3 = closure_0(closure_1, true);
            }
            return;
          }
        }
        const items3 = [tmp54, tmp55];
        BadgeUnlockAnimationTsx6.__closure = items3;
        BadgeUnlockAnimationTsx6.__workletHash = 5104272508772;
        BadgeUnlockAnimationTsx6.__initData = tmp53;
        const sum1 = sum + 750;
        const tmpResult36 = _mod1652;
        const result8 = sharedValue4.set(
          tmpResult36.withDelay(
            sum1,
            tmpResult37.withTiming(0, obj11, "animate-always", BadgeUnlockAnimationTsx6),
            _mod1652.ReduceMotion.Never,
          ),
        );
        const withTimingResult6 = tmpResult37.withTiming(0, obj11, "animate-always", BadgeUnlockAnimationTsx6);
        const tmpResult38 = _mod1652;
        const obj12 = { duration, easing };
        const tmpResult39 = timing_timing;
        const sum2 = sum + duration2;
        const result9 = noop.set(
          tmpResult38.withDelay(
            sum2,
            timing_timing.withTiming(1, obj12, "animate-always"),
            _mod1652.ReduceMotion.Never,
          ),
        );
        const withTimingResult7 = timing_timing.withTiming(1, obj12, "animate-always");
        const tmpResult40 = _mod1652;
        const tmpResult41 = _mod1652;
        const obj13 = { duration, easing };
        const tmpResult42 = timing_timing;
        const withTimingResult8 = timing_timing.withTiming(1, obj13, "animate-always");
        const withDelayResult = tmpResult41.withDelay(
          c16,
          timing_timing.withTiming(1, obj13, "animate-always"),
          _mod1652.ReduceMotion.Never,
        );
        const tmpResult43 = _mod1652;
        const obj14 = { duration, easing };
        const tmpResult44 = timing_timing;
        const result10 = AccessibilityStore.set(
          tmpResult40.withSequence(
            _mod1652.ReduceMotion.Never,
            withDelayResult,
            tmpResult43.withDelay(
              tmp13 + duration2 - 500,
              timing_timing.withTiming(0, obj14, "animate-always"),
              _mod1652.ReduceMotion.Never,
            ),
          ),
        );
        const withTimingResult9 = timing_timing.withTiming(0, obj14, "animate-always");
        const tmpResult45 = _mod1652;
        const obj15 = { duration, easing: easing5 };
        const tmpResult46 = timing_timing;
        const result11 = View.set(
          tmpResult45.withDelay(
            sum2,
            timing_timing.withTiming(1, obj15, "animate-always"),
            _mod1652.ReduceMotion.Never,
          ),
        );
        const withTimingResult10 = timing_timing.withTiming(1, obj15, "animate-always");
      }
    }
  }, items7);
  const tmp15Result2 = previousTierKey(noop.useState(false), 2);
  const items8 = [closure_25, sharedValue];
  _require = undefined;
  [tmp43, tmp44] = items8;
  class BadgeUnlockAnimationTsx7 {
    constructor() {
      obj = { transform: null };
      obj1 = { scale: closure_0.get() };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  const items9 = [tmp44];
  BadgeUnlockAnimationTsx7.__closure = items9;
  BadgeUnlockAnimationTsx7.__workletHash = 15667029482838;
  BadgeUnlockAnimationTsx7.__initData = tmp43;
  const animatedStyle = require("../../../../_runtime/metro/01652__.js").useAnimatedStyle(BadgeUnlockAnimationTsx7);
  const tmp2Result16 = require("../../../../_runtime/metro/01652__.js");
  const items10 = [closure_26, sharedValue1];
  _require = undefined;
  [tmp46, tmp47] = items10;
  class BadgeUnlockAnimationTsx8 {
    constructor() {
      obj = { transform: null };
      obj1 = { scale: closure_0.get() };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  const items11 = [tmp47];
  BadgeUnlockAnimationTsx8.__closure = items11;
  BadgeUnlockAnimationTsx8.__workletHash = 4734288509049;
  BadgeUnlockAnimationTsx8.__initData = tmp46;
  const animatedStyle1 = require("../../../../_runtime/metro/01652__.js").useAnimatedStyle(BadgeUnlockAnimationTsx8);
  const tmp2Result17 = require("../../../../_runtime/metro/01652__.js");
  const items12 = [closure_27, sharedValue3];
  _require = undefined;
  [tmp49, tmp50] = items12;
  class BadgeUnlockAnimationTsx9 {
    constructor() {
      obj = { transform: null };
      obj1 = { scale: closure_0.get() };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  const items13 = [tmp50];
  BadgeUnlockAnimationTsx9.__closure = items13;
  BadgeUnlockAnimationTsx9.__workletHash = 10763015167128;
  BadgeUnlockAnimationTsx9.__initData = tmp49;
  let obj6 = { style: tmp.artSize, pointerEvents: "none", "aria-hidden": true, children: null };
  let tmp55Result = !stateFromStores;
  const animatedStyle2 = require("../../../../_runtime/metro/01652__.js").useAnimatedStyle(BadgeUnlockAnimationTsx9);
  if (!stateFromStores) {
    const items14 = [tmp.pulse];
    let pulseHidden = !tmp40;
    if (!tmp40) {
      pulseHidden = tmp.pulseHidden;
    }
    let obj7 = { style: null, children: null };
    items14[1] = pulseHidden;
    obj7.style = items14;
    let obj8 = { ref, artboard: "Mobile", dataBinding: memo };
    obj7.children = stateFromStores(tmp2(5263).BadgeUnlockPulseRive, obj8);
    tmp55Result = tmp55(View, obj7);
  }
  const items15 = [tmp55Result];
  let obj9 = { style: null, children: null };
  const items16 = [tmp.artSize, animatedStyle];
  obj9.style = items16;
  if (tmp56Result) {
    let obj10 = { style: null, children: null };
    const items17 = [tmp.layer, animatedStyle1];
    obj10.style = items17;
    let obj12 = {
      artUrl: null,
      rasterUrl: null,
      fillOpacity: null,
      ambientUrl: null,
      hasFill: null,
      isShown: null,
      onLoad: null,
    };
    ({ artUrl: obj22.artUrl, rasterUrl: obj22.rasterUrl } = badgeUnlockArt1);
    obj12.fillOpacity = sharedValue2;
    let animatedUrl;
    if (tmp8) {
      animatedUrl = badgeUnlockArt1.animatedUrl;
    }
    obj12.ambientUrl = animatedUrl;
    let tmp59 = !tmp17;
    if (!tmp17) {
      tmp59 = !stateFromStores;
    }
    obj12.hasFill = tmp59;
    obj12.isShown = tmp23;
    obj12.onLoad = callback;
    obj10.children = stateFromStores(FALLBACK_BADGE_COLOR, obj12);
    tmp56Result = tmp56(tmp24(1652).View, obj10);
  }
  const items18 = [tmp56Result];
  let obj13 = { style: null, children: null };
  const items19 = [tmp.layer, animatedStyle2];
  obj13.style = items19;
  let obj14 = {
    artUrl: badgeUnlockArt.artUrl,
    rasterUrl: badgeUnlockArt.rasterUrl,
    fillOpacity: sharedValue4,
    ambientUrl: null,
    hasFill: null,
    isShown: null,
    onLoad: null,
  };
  let animatedUrl1;
  if (tmp8) {
    animatedUrl1 = badgeUnlockArt.animatedUrl;
  }
  obj14.ambientUrl = animatedUrl1;
  let tmp63 = !tmp17;
  if (!tmp17) {
    tmp63 = !stateFromStores;
  }
  obj14.hasFill = tmp63;
  obj14.isShown = tmp19 >= num2 || tmp22;
  obj14.onLoad = callback;
  obj13.children = stateFromStores(FALLBACK_BADGE_COLOR, obj14);
  items18[1] = stateFromStores(_modDef1652.View, obj13);
  obj9.children = items18;
  items15[1] = closure_8(_modDef1652.View, obj9);
  obj6.children = items15;
  return closure_8(View, obj6);
}
