// === Module 12974: ConjurePublishRating ===

// Module 12974 (ConjurePublishRating)
import nativeDefault from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2118 */;
import timing_timing from "timing/timing" /* 5370 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5374 */;
import spring_spring from "spring/spring" /* 5761 */;
import springPresets from "springPresets" /* 5762 */;
import ConjureRatingFeedbackSheet from "ConjureRatingFeedbackSheet" /* 12976 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5141 */;

require = fn;
function Star(rating) {
  rating = rating.rating;
  _require = rating;
  ({ picked, reducedMotion } = rating);
  dependencyMap = undefined;
  let sharedValue;
  let tmp2 = null != picked;
  if (tmp2) {
    tmp2 = rating <= picked;
  }
  dependencyMap = tmp2;
  let tmp = closure_9();
  sharedValue = require("module_1652").useSharedValue(1);
  items = [tmp2, rating, reducedMotion, sharedValue];
  const effect = noop.useEffect(() => {
    let tmp = closure_2;
    if (closure_2) {
      tmp = !reducedMotion;
    }
    if (tmp) {
      const result = 30 * c0;
      const obj = _mod1652;
      const obj2 = _mod1652;
      const withTimingResult = timing_timing.withTiming(1.35, { duration: 140 });
      const result1 = sharedValue.set(obj.withDelay(result, obj2.withSequence(withTimingResult, spring_spring.withSpring(1, springPresets.springUnclampedBounce))));
    }
  }, items);
  let obj = require("module_1652");
  const items1 = [closure_10, sharedValue];
  _require = undefined;
  [tmp7, tmp8] = items1;
  class ConjurePublishRatingTsx1 {
    constructor() {
      obj = { transform: null };
      obj1 = { scale: closure_0.get() };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  const items2 = [tmp8];
  ConjurePublishRatingTsx1.__closure = items2;
  ConjurePublishRatingTsx1.__workletHash = 4902118440263;
  ConjurePublishRatingTsx1.__initData = tmp7;
  const animatedStyle = require("module_1652").useAnimatedStyle(ConjurePublishRatingTsx1);
  if (tmp2) {
    let StarOutlineIcon = tmp3(10184).StarIcon;
  } else {
    StarOutlineIcon = tmp3(10182).StarOutlineIcon;
  }
  let obj3 = { style: tmp.star, accessibilityRole: "button", accessibilityLabel: null, disabled: null, hitSlop: null, onPress: null, children: null };
  let obj2 = require("module_1652");
  obj3.accessibilityLabel = require("conjurePublishRatings").conjurePublishRatingOptionLabel(rating);
  obj3.disabled = null != picked;
  obj3.hitSlop = reducedMotion(575).space.PX_8;
  obj3.onPress = rating.onPress;
  let obj4 = { style: animatedStyle, children: null };
  const colors = reducedMotion(575).colors;
  obj4.children = closure_7(StarOutlineIcon, { size: "sm", color: tmp2 ? colors.ICON_BRAND : colors.ICON_MUTED });
  obj3.children = closure_7(reducedMotion(1652).View, obj4);
  return closure_7(require("Pressables").PressableOpacity, obj3);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5140);
let obj2 = { row: { flexDirection: "row", alignItems: "center", flexWrap: "wrap", gap: nativeDefault.space.PX_8 }, stars: { flexDirection: "row" }, star: null, thanks: null };
let obj3 = { flexDirection: "row", alignItems: "center", flexWrap: "wrap", gap: nativeDefault.space.PX_8 };
obj2.star = { padding: nativeDefault.space.PX_4 };
let obj4 = { padding: nativeDefault.space.PX_4 };
obj2.thanks = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let closure_9 = createStyles.createStyles(obj2);
let closure_10 = { code: "(function ConjurePublishRatingTsx1(){let[scale]=this.__closure;return{transform:[{scale:scale.get()}]};})" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/publish/native/ConjurePublishRating.tsx");

export default function ConjurePublishRating(arg0) {
  let rating;
  let stateFromStores;
  let first;
  noop = undefined;
  ({ projectId, turnId, cta, status, placement } = arg0);
  const tmp = closure_9();
  const conjurePublishRating = rating(stateFromStores[14]).useConjurePublishRating({ projectId, turnId, cta, status, placement });
  rating = conjurePublishRating.rating;
  const rate = conjurePublishRating.rate;
  let obj = rating(stateFromStores[14]);
  items = [AccessibilityStore];
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
      const obj5 = { variant: "body-xs/medium", color: "text-muted", children: tmp2(tmp3[14]).conjurePublishRatingThanks(rating) };
      items2[1] = closure_7(tmp2(tmp3[17]).Text, obj5);
      obj3.children = items2;
      let obj6 = obj3;
      const tmp2Result = tmp2(tmp3[14]);
    }
    return tmp9(View, obj6);
  }
  obj6 = { style: tmp.row, children: null };
  const obj7 = { variant: "body-xs/medium", color: "text-muted", children: null };
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
        obj.openLazy(asyncRequireImpl(12976, dependencyMap.paths), ConjureRatingFeedbackSheet.CONJURE_RATING_FEEDBACK_SHEET_KEY, obj2);
        const tmp6 = asyncRequireImpl(12976, dependencyMap.paths);
      }
    };
    return closure_1_7(Star, obj, rating);
  });
  items3[1] = closure_7(View, obj8);
  obj6.children = items3;
  let obj2 = rating(stateFromStores[15]);
};