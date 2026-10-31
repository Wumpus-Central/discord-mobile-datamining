// === Module 12770: ConjurePublishRating ===

// Module 12770 (ConjurePublishRating)
import nativeDefault from "native" /* 575 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1994 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5095 */;
import timing from "timing" /* 5254 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import spring from "spring" /* 5637 */;
import springPresets from "springPresets" /* 5638 */;
import ConjureRatingFeedbackSheet from "ConjureRatingFeedbackSheet" /* 12772 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5015 */;

require = fn;
function Star(rating) {
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
  sharedValue = rating(5095).useSharedValue(1);
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
  let obj = rating(5095);
  const fn = function x() {
    const obj = { transform: null };
    const items = [{ scale: sharedValue.get() }];
    obj.transform = items;
    return obj;
  };
  fn.__closure = { scale: sharedValue };
  fn.__workletHash = 8453054615454;
  fn.__initData = __initData;
  const animatedStyle = rating(5095).useAnimatedStyle(fn);
  if (tmp2) {
    let StarOutlineIcon = tmp3(10063).StarIcon;
  } else {
    StarOutlineIcon = tmp3(10061).StarOutlineIcon;
  }
  let obj3 = { style: tmp.star, accessibilityRole: "button", accessibilityLabel: null, disabled: null, hitSlop: null, onPress: null, children: null };
  let obj2 = rating(5095);
  obj3.accessibilityLabel = rating(12771).conjurePublishRatingOptionLabel(rating);
  obj3.disabled = null != picked;
  obj3.hitSlop = reducedMotion(575).space.PX_8;
  obj3.onPress = rating.onPress;
  let obj4 = { style: animatedStyle, children: null };
  const colors = reducedMotion(575).colors;
  obj4.children = closure_7(StarOutlineIcon, { size: "sm", color: tmp2 ? colors.ICON_BRAND : colors.ICON_MUTED });
  obj3.children = closure_7(reducedMotion(5095).View, obj4);
  return closure_7(rating(6980).PressableOpacity, obj3);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5014);
let obj2 = { row: { flexDirection: "row", alignItems: "center", flexWrap: "wrap", gap: nativeDefault.space.PX_8 }, stars: { flexDirection: "row" }, star: null, thanks: null };
let obj3 = { flexDirection: "row", alignItems: "center", flexWrap: "wrap", gap: nativeDefault.space.PX_8 };
obj2.star = { padding: nativeDefault.space.PX_4 };
let obj4 = { padding: nativeDefault.space.PX_4 };
obj2.thanks = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let closure_9 = createStyles.createStyles(obj2);
const __initData = { code: "function ConjurePublishRatingTsx1(){const{scale}=this.__closure;return{transform:[{scale:scale.get()}]};}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/publish/native/ConjurePublishRating.tsx");

export default function ConjurePublishRating(arg0) {
  let rating;
  let stateFromStores;
  let first;
  noop = undefined;
  ({ projectId, turnId, cta, status } = arg0);
  const tmp = closure_9();
  const conjurePublishRating = rating(stateFromStores[14]).useConjurePublishRating({ projectId, turnId, cta, status });
  rating = conjurePublishRating.rating;
  const rate = conjurePublishRating.rate;
  let obj = rating(stateFromStores[14]);
  const items = [AccessibilityStore];
  stateFromStores = rating(stateFromStores[15]).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
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
      const items2 = [closure_7(tmp2(tmp3[16]).SparklesIcon, obj4), ];
      const obj5 = { variant: "text-xs/medium", color: "text-muted", children: tmp2(tmp3[14]).conjurePublishRatingThanks(rating) };
      items2[1] = closure_7(tmp2(tmp3[17]).Text, obj5);
      obj3.children = items2;
      let obj6 = obj3;
      const tmp2Result = tmp2(tmp3[14]);
    }
    return tmp9(View, obj6);
  }
  obj6 = { style: tmp.row, children: null };
  const obj7 = { variant: "text-xs/medium", color: "text-muted", children: null };
  const intl = tmp2(tmp3[22]).intl;
  obj7.children = intl.string(rate(stateFromStores[23]).mTV326);
  const items3 = [closure_7(rating(stateFromStores[17]).Text, obj7), ];
  const obj8 = { style: tmp.stars, children: null };
  const prop = tmp2(tmp3[14]).CONJURE_PUBLISH_RATINGS;
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
        obj.openLazy(asyncRequireImpl(12772, dependencyMap.paths), ConjureRatingFeedbackSheet.CONJURE_RATING_FEEDBACK_SHEET_KEY, obj2);
        const tmp6 = asyncRequireImpl(12772, dependencyMap.paths);
      }
    };
    return closure_1_7(Star, obj, rating);
  });
  items3[1] = closure_7(View, obj8);
  obj6.children = items3;
  let obj2 = rating(stateFromStores[15]);
};