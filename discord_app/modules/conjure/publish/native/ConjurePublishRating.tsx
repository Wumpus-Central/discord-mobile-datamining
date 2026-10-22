// === Module 12425: ConjurePublishRating ===

// Module 12425 (ConjurePublishRating)
import nativeDefault from "native" /* 587 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2002 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5038 */;
import timing from "timing" /* 5192 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5196 */;
import spring from "spring" /* 5233 */;
import springPresets from "springPresets" /* 5234 */;
import ConjureRatingFeedbackSheet from "ConjureRatingFeedbackSheet" /* 12427 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4970 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4969);
let obj2 = { row: { flexDirection: "row", alignItems: "center", flexWrap: "wrap", gap: nativeDefault.space.PX_8 }, stars: { flexDirection: "row" }, star: null, thanks: null };
let obj3 = { flexDirection: "row", alignItems: "center", flexWrap: "wrap", gap: nativeDefault.space.PX_8 };
obj2.star = { padding: nativeDefault.space.PX_4 };
let obj4 = { padding: nativeDefault.space.PX_4 };
obj2.thanks = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let closure_9 = createStyles.createStyles(obj2);
const __initData = { code: "function ConjurePublishRatingTsx1(){const{scale}=this.__closure;return{transform:[{scale:scale.get()}]};}" };
const __initData2 = { code: "function ConjurePublishRatingTsx2(){const{scale}=this.__closure;return{transform:[{scale:scale.get()}]};}" };
const ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function Star(rating) {
  const cResult = rating(576).c(20);
  rating = rating.rating;
  ({ picked, reducedMotion } = rating);
  const onPress = rating.onPress;
  const tmp4 = closure_9();
  dependencyMap = tmp5;
  let obj = rating(576);
  const sharedValue = rating(5038).useSharedValue(1);
  if (cResult[0] === (null != picked && rating <= picked)) {
    if (cResult[1] === rating) {
      if (cResult[2] === reducedMotion) {
        if (cResult[3] === sharedValue) {
          let tmp7 = cResult[4];
          let tmp8 = cResult[5];
        }
        const effect = noop.useEffect(tmp7, tmp8);
        class I {
          constructor() {
            obj = { transform: null };
            obj1 = { scale: closure_3.get() };
            items = [];
            items[0] = obj1;
            obj.transform = items;
            return obj;
          }
        }
        let obj2 = { scale: sharedValue };
        I.__closure = obj2;
        I.__workletHash = 8453054615454;
        I.__initData = __initData;
        const animatedStyle = tmp(5038).useAnimatedStyle(I);
        if (tmp5) {
          let StarOutlineIcon = tmp(9919).StarIcon;
        } else {
          StarOutlineIcon = tmp(9917).StarOutlineIcon;
        }
        const star = tmp4.star;
        if (cResult[6] !== rating) {
          let result = tmp(12426).conjurePublishRatingOptionLabel(rating);
          cResult[6] = rating;
          class I {
            constructor() {
              obj = { transform: null };
              obj1 = { scale: closure_3.get() };
              items = [];
              items[0] = obj1;
              obj.transform = items;
              return obj;
            }
          }
          cResult[7] = result;
          let tmp13 = result;
          const tmpResult4 = tmp(12426);
        } else {
          tmp13 = cResult[7];
        }
        const colors = reducedMotion(587).colors;
        if (tmp5) {
          let ICON_MUTED = colors.ICON_BRAND;
          let tmp17 = reducedMotion;
        } else {
          ICON_MUTED = colors.ICON_MUTED;
          tmp17 = reducedMotion;
        }
        if (cResult[8] === StarOutlineIcon) {
          if (cResult[9] === ICON_MUTED) {
            let tmp18 = cResult[10];
          }
          if (cResult[11] === animatedStyle) {
            if (cResult[12] === tmp18) {
              let tmp21 = cResult[13];
            }
            if (cResult[14] === onPress) {
              if (cResult[15] === tmp4.star) {
                if (cResult[16] === tmp13) {
                  if (cResult[17] === tmp15) {
                    if (cResult[18] === tmp21) {
                      let tmp24 = cResult[19];
                    }
                    return tmp24;
                  }
                }
              }
            }
            let obj3 = { style: null, accessibilityRole: "button", accessibilityLabel: null, disabled: null, hitSlop: null, onPress: null, children: null };
            class I {
              constructor() {
                obj = { transform: null };
                obj1 = { scale: closure_3.get() };
                items = [];
                items[0] = obj1;
                obj.transform = items;
                return obj;
              }
            }
            obj3.accessibilityLabel = tmp13;
            obj3.disabled = tmp15;
            obj3.hitSlop = tmp17(587).space.PX_8;
            obj3.onPress = onPress;
            obj3.children = tmp21;
            const tmp26 = closure_7(tmp(6894).PressableOpacity, obj3);
            cResult[14] = onPress;
            cResult[15] = tmp4.star;
            cResult[16] = tmp13;
            cResult[17] = tmp15;
            cResult[18] = tmp21;
            cResult[19] = tmp26;
            tmp24 = tmp26;
          }
          let obj4 = { style: null, children: null };
          class I {
            constructor() {
              obj = { transform: null };
              obj1 = { scale: closure_3.get() };
              items = [];
              items[0] = obj1;
              obj.transform = items;
              return obj;
            }
          }
          obj4.children = tmp18;
          const tmp23 = closure_7(tmp17(5038).View, obj4);
          cResult[11] = animatedStyle;
          cResult[12] = tmp18;
          cResult[13] = tmp23;
          tmp21 = tmp23;
        }
        const obj5 = { size: "sm", color: ICON_MUTED };
        const tmp20 = closure_7(StarOutlineIcon, obj5);
        cResult[8] = StarOutlineIcon;
        cResult[9] = ICON_MUTED;
        cResult[10] = tmp20;
        tmp18 = tmp20;
        const tmpResult3 = tmp(5038);
      }
    }
  }
  const fn = function n() {
    let tmp = closure_2;
    if (closure_2) {
      tmp = !reducedMotion;
    }
    if (tmp) {
      const result = 30 * rating;
      const obj = ReanimatedRexport;
      const obj2 = ReanimatedRexport;
      const withTimingResult = timing.withTiming(1.35, { duration: 140 });
      const result1 = sharedValue.set(obj.withDelay(result, obj2.withSequence(withTimingResult, spring.withSpring(1, springPresets.springUnclampedBounce))));
    }
  };
  let items = [null != picked && rating <= picked, rating, reducedMotion, sharedValue];
  cResult[0] = null != picked && rating <= picked;
  cResult[1] = rating;
  cResult[2] = reducedMotion;
  cResult[3] = sharedValue;
  cResult[4] = fn;
  cResult[5] = items;
  tmp8 = items;
  tmp7 = fn;
  const tmpResult = rating(5038);
}) : (function Star(rating) {
  rating = rating.rating;
  ({ picked, reducedMotion } = rating);
  dependencyMap = undefined;
  let sharedValue;
  let tmp2 = null != picked;
  if (tmp2) {
    tmp2 = rating <= picked;
  }
  dependencyMap = tmp2;
  let tmp = closure_9();
  sharedValue = rating(5038).useSharedValue(1);
  let items = [tmp2, rating, reducedMotion, sharedValue];
  const effect = noop.useEffect(() => {
    let tmp = closure_2;
    if (closure_2) {
      tmp = !reducedMotion;
    }
    if (tmp) {
      const result = 30 * rating;
      const obj = ReanimatedRexport;
      const obj2 = ReanimatedRexport;
      const withTimingResult = timing.withTiming(1.35, { duration: 140 });
      const result1 = sharedValue.set(obj.withDelay(result, obj2.withSequence(withTimingResult, spring.withSpring(1, springPresets.springUnclampedBounce))));
    }
  }, items);
  let obj = rating(5038);
  const fn = function f() {
    const obj = { transform: null };
    const items = [{ scale: sharedValue.get() }];
    obj.transform = items;
    return obj;
  };
  fn.__closure = { scale: sharedValue };
  fn.__workletHash = 10098165815389;
  fn.__initData = __initData2;
  const animatedStyle = rating(5038).useAnimatedStyle(fn);
  if (tmp2) {
    let StarOutlineIcon = tmp3(9919).StarIcon;
  } else {
    StarOutlineIcon = tmp3(9917).StarOutlineIcon;
  }
  let obj3 = { style: tmp.star, accessibilityRole: "button", accessibilityLabel: null, disabled: null, hitSlop: null, onPress: null, children: null };
  let obj2 = rating(5038);
  obj3.accessibilityLabel = rating(12426).conjurePublishRatingOptionLabel(rating);
  obj3.disabled = null != picked;
  obj3.hitSlop = reducedMotion(587).space.PX_8;
  obj3.onPress = rating.onPress;
  let obj4 = { style: animatedStyle, children: null };
  const colors = reducedMotion(587).colors;
  obj4.children = closure_7(StarOutlineIcon, { size: "sm", color: tmp2 ? colors.ICON_BRAND : colors.ICON_MUTED });
  obj3.children = closure_7(reducedMotion(5038).View, obj4);
  return closure_7(rating(6894).PressableOpacity, obj3);
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/publish/native/ConjurePublishRating.tsx");

export default function ConjurePublishRating(arg0) {
  let rating;
  let stateFromStores;
  let first;
  noop = undefined;
  ({ projectId, turnId, cta, status } = arg0);
  const tmp = closure_9();
  const conjurePublishRating = rating(stateFromStores[15]).useConjurePublishRating({ projectId, turnId, cta, status });
  rating = conjurePublishRating.rating;
  const rate = conjurePublishRating.rate;
  let obj = rating(stateFromStores[15]);
  const items = [AccessibilityStore];
  stateFromStores = rating(stateFromStores[17]).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let tmp6 = first(noop.useState(null), 2);
  first = tmp6[0];
  noop = tmp6[1];
  const items1 = [first, stateFromStores];
  const effect = noop.useEffect(() => {
    if (null != first) {
      let num = 420;
      if (stateFromStores) {
        num = 0;
      }
      const timeout = setTimeout(() => closure_1_4(null), num);
      return () => clearTimeout(closure_0);
    }
  }, items1);
  if (null != rating) {
    if (null == first) {
      const obj3 = { style: tmp.thanks, accessibilityLiveRegion: "polite", children: null };
      const obj4 = { size: "xs", color: rate(tmp3[6]).colors.ICON_BRAND };
      const items2 = [closure_7(tmp2(tmp3[18]).SparklesIcon, obj4), ];
      const obj5 = { variant: "text-xs/medium", color: "text-muted", children: tmp2(tmp3[15]).conjurePublishRatingThanks(rating) };
      items2[1] = closure_7(tmp2(tmp3[19]).Text, obj5);
      obj3.children = items2;
      let obj6 = obj3;
      const tmp2Result = tmp2(tmp3[15]);
    }
    return tmp9(View, obj6);
  }
  obj6 = { style: tmp.row, children: null };
  const obj7 = { variant: "text-xs/medium", color: "text-muted", children: null };
  const intl = tmp2(tmp3[24]).intl;
  obj7.children = intl.string(rate(stateFromStores[25]).mTV326);
  const items3 = [closure_7(rating(stateFromStores[19]).Text, obj7), ];
  const obj8 = { style: tmp.stars, children: null };
  const prop = tmp2(tmp3[15]).CONJURE_PUBLISH_RATINGS;
  obj8.children = prop.map((rating) => {
    closure_0 = rating;
    let obj = { rating, picked: null, reducedMotion: null, onPress: null };
    let tmp3 = first;
    if (first == null) {
      tmp3 = closure_0;
    }
    obj.picked = tmp3;
    obj.reducedMotion = stateFromStores;
    obj.onPress = function onPress() {
      closure_4(closure_0);
      const tmp2 = rate(closure_0);
      if (null != tmp2) {
        const obj = ActionSheetActionCreatorsDefault;
        const obj2 = { rating: tmp2 };
        obj.openLazy(asyncRequireImpl(12427, dependencyMap.paths), ConjureRatingFeedbackSheet.CONJURE_RATING_FEEDBACK_SHEET_KEY, obj2);
        const tmp6 = asyncRequireImpl(12427, dependencyMap.paths);
      }
    };
    return closure_1_7(closure_1_12, obj, rating);
  });
  items3[1] = closure_7(View, obj8);
  obj6.children = items3;
  let obj2 = rating(stateFromStores[17]);
};