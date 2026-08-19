// === Module 10815: RatingSelector ===

// Module 10815 (RatingSelector)
import noopAll from "noop" /* 19 */;
import registerAssetDefault from "registerAsset" /* 10816 */;
import registerAssetDefault2 from "registerAsset" /* 10821 */;
import registerAssetDefault3 from "registerAsset" /* 10826 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import FeedbackRating from "FeedbackRating" /* 10811 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = fn;
noopAll;
({ View: c3, Image: c4 } = get_ActivityIndicator);
({ DEFAULT_RATINGS: c5, FeedbackRating: closure_6 } = FeedbackRating);
let closure_8 = createCacheKey.createStyles({ ratings: { flexDirection: "row", alignItems: "center", justifyContent: "center" }, rating: {}, emoji: { width: 64, height: 64, marginVertical: 24, marginHorizontal: 12 } });
let closure_9 = createCacheKey.createStyles({ ratings: { flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", gap: 16, marginBottom: 12 }, rating: { width: "100%" }, emoji: { width: 32, height: 32 } });
const result = require("obj132").fileFinishedImporting("modules/feedback/native/RatingSelector.tsx");

export default function RatingSelector(ratingOptions) {
  ratingOptions = ratingOptions.ratingOptions;
  if (ratingOptions === undefined) {
    ratingOptions = closure_5;
  }
  const textLabels = ratingOptions.textLabels;
  let obj = textLabels;
  ({ selectedRating: importDefault, onChangeRating: dependencyMap } = ratingOptions);
  closure_3 = undefined;
  let tmp2 = callback();
  if (null != textLabels) {
    tmp2 = tmp;
  }
  closure_3 = tmp2;
  obj = { selected: registerAssetDefault, normal: null };
  let obj3 = obj(10817);
  obj[1] = obj3.useFeedbackModalSadDesaturatedSource();
  obj[0] = obj;
  obj[1] = function getLabel() {
    const intl = obj(1236).intl;
    return intl.string(obj(1236).t["C/12Tt"]);
  };
  obj[2] = constants.BAD;
  obj[constants.BAD] = obj;
  obj1 = { source: null, getLabel: null, rating: null };
  let obj2 = { selected: registerAssetDefault2, normal: null };
  tmp = callback2();
  obj2[1] = obj(10822).useFeedbackModalNeutralDesaturatedSource();
  obj1[0] = obj2;
  obj1[1] = function getLabel() {
    const intl = obj(1236).intl;
    return intl.string(obj(1236).t.Xcb4cF);
  };
  obj1[2] = constants.NEUTRAL;
  obj[constants.NEUTRAL] = obj1;
  obj3 = { source: null, getLabel: null, rating: null };
  let obj4 = { selected: registerAssetDefault3, normal: null };
  const obj7 = obj(10822);
  obj4[1] = obj(10827).useFeedbackModalHappyDesaturatedSource();
  obj3[0] = obj4;
  obj3[1] = function getLabel() {
    const intl = obj(1236).intl;
    return intl.string(obj(1236).t["1Vyb5J"]);
  };
  obj3[2] = constants.GOOD;
  obj[constants.GOOD] = obj3;
  const mapped = ratingOptions.map((item, index) => obj[item]);
  const obj10 = obj(10827);
  return <closure_3 style={tmp2.ratings}>{mapped.map((item, index) => {
    const rating = item.rating;
    ({ selected, normal } = item.source);
    const getLabel = item.getLabel;
    if (null != rating) {
      obj = { style: null, children: null };
      obj[0] = closure_3.rating;
      obj = { accessibilityRole: "button", accessibilityLabel: null, accessibilityState: null, onPress: null, icon: null, label: null };
      obj[1] = getLabel();
      obj = { selected: null };
      obj[0] = closure_1 === rating;
      obj[2] = obj;
      obj[3] = function onPress() {
        return closure_1_2(rating);
      };
      obj1 = { style: null, source: null };
      obj1[0] = closure_3.emoji;
      if (closure_1 === rating) {
        normal = selected;
      }
      obj1[1] = normal;
      obj[4] = <closure_1_4 style={null} source={null} />;
      obj[5] = tmp[rating];
      obj[1] = jsx(obj(dependencyMap[12]).RowButton, { selected: null });
      let tmp14Result = <closure_3 key={rating} selected={null} />;
    } else {
      const obj2 = { accessibilityRole: "button", accessibilityLabel: null, accessibilityState: null, onPress: null, children: null };
      obj2[1] = getLabel();
      const obj3 = { selected: null };
      obj3[0] = closure_1 === rating;
      obj2[2] = obj3;
      obj2[3] = function onPress() {
        return closure_1_2(rating);
      };
      const obj4 = { style: null, source: null };
      obj4[0] = closure_3.emoji;
      let tmp2 = normal;
      if (closure_1 === rating) {
        tmp2 = selected;
      }
      obj4[1] = tmp2;
      obj2[4] = <closure_1_4 style={null} source={null} />;
      tmp14Result = jsx(obj(dependencyMap[13]).PressableOpacity, { accessibilityRole: "button", accessibilityLabel: null, accessibilityState: null, onPress: null, children: null }, rating);
    }
    return tmp14Result;
  })}</closure_3>;
};