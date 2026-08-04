import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import FeedbackRating from "FeedbackRating";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import createCacheKey from "createCacheKey";

let c3;
let c4;
let c5;
let closure_6;
const require = arg1;
({ View: c3, Image: c4 } = get_ActivityIndicator);
({ DEFAULT_RATINGS: c5, FeedbackRating: closure_6 } = FeedbackRating);
let closure_8 = createCacheKey.createStyles({ ratings: { flexDirection: "row", alignItems: "center", justifyContent: "center" }, rating: {}, emoji: { width: 64, height: 64, marginVertical: 24, marginHorizontal: 12 } });
let closure_9 = createCacheKey.createStyles({ ratings: { flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", gap: 16, marginBottom: 12 }, rating: { width: "100%" }, emoji: { width: 32, height: 32 } });
const result = require("FeedbackRating").fileFinishedImporting("modules/feedback/native/RatingSelector.tsx");

export default function RatingSelector(ratingOptions) {
  let dependencyMap;
  let importDefault;
  ratingOptions = ratingOptions.ratingOptions;
  if (ratingOptions === undefined) {
    ratingOptions = closure_5;
  }
  const textLabels = ratingOptions.textLabels;
  let obj = textLabels;
  ({ selectedRating: importDefault, onChangeRating: dependencyMap } = ratingOptions);
  let c3;
  let tmp2 = callback();
  if (null != textLabels) {
    tmp2 = tmp;
  }
  c3 = tmp2;
  obj = undefined;
  obj = {};
  obj = { source: null, getLabel: null, rating: null };
  obj = { selected: importDefault(11006), normal: null };
  let obj3 = obj(11007);
  obj[1] = obj3.useFeedbackModalSadDesaturatedSource();
  obj[0] = obj;
  obj[1] = function getLabel() {
    const intl = obj(1236).intl;
    return intl.string(obj(1236).t["C/12Tt"]);
  };
  obj[2] = constants.BAD;
  obj[constants.BAD] = obj;
  let obj1 = { source: null, getLabel: null, rating: null };
  let obj2 = { selected: importDefault(11011), normal: null };
  tmp = callback2();
  obj2[1] = obj(11012).useFeedbackModalNeutralDesaturatedSource();
  obj1[0] = obj2;
  obj1[1] = function getLabel() {
    const intl = obj(1236).intl;
    return intl.string(obj(1236).t.Xcb4cF);
  };
  obj1[2] = constants.NEUTRAL;
  obj[constants.NEUTRAL] = obj1;
  obj3 = { source: null, getLabel: null, rating: null };
  let obj4 = { selected: importDefault(11016), normal: null };
  const obj7 = obj(11012);
  obj4[1] = obj(11017).useFeedbackModalHappyDesaturatedSource();
  obj3[0] = obj4;
  obj3[1] = function getLabel() {
    const intl = obj(1236).intl;
    return intl.string(obj(1236).t["1Vyb5J"]);
  };
  obj3[2] = constants.GOOD;
  obj[constants.GOOD] = obj3;
  const mapped = ratingOptions.map((arg0) => obj[arg0]);
  const obj10 = obj(11017);
  return <c3 style={tmp2.ratings}>{mapped.map((rating) => {
    let normal;
    let selected;
    rating = rating.rating;
    ({ selected, normal } = rating.source);
    const getLabel = rating.getLabel;
    if (null != rating) {
      let obj = { style: null, children: null };
      obj[0] = _undefined.rating;
      obj = { accessibilityRole: "button", accessibilityLabel: null, accessibilityState: null, onPress: null, icon: null, label: null };
      obj[1] = getLabel();
      obj = { selected: null };
      obj[0] = closure_1 === rating;
      obj[2] = obj;
      obj[3] = function onPress() {
        return outer1_2(rating);
      };
      const obj1 = { style: null, source: null };
      obj1[0] = _undefined.emoji;
      if (closure_1 === rating) {
        normal = selected;
      }
      obj1[1] = normal;
      obj[4] = outer1_7(outer1_4, obj1);
      obj[5] = tmp[rating];
      obj[1] = outer1_7(obj(outer1_2[12]).RowButton, obj);
      let tmp14Result = outer1_7(_undefined, obj, rating);
      const tmp12 = outer1_7;
      const tmp13 = outer1_4;
      const tmp4 = outer1_7;
      const tmp5 = _undefined;
      const tmp7 = outer1_7;
    } else {
      const obj2 = { accessibilityRole: "button", accessibilityLabel: null, accessibilityState: null, onPress: null, children: null };
      obj2[1] = getLabel();
      const obj3 = { selected: null };
      obj3[0] = closure_1 === rating;
      obj2[2] = obj3;
      obj2[3] = function onPress() {
        return outer1_2(rating);
      };
      const obj4 = { style: null, source: null };
      obj4[0] = _undefined.emoji;
      let tmp2 = normal;
      if (closure_1 === rating) {
        tmp2 = selected;
      }
      obj4[1] = tmp2;
      obj2[4] = outer1_7(outer1_4, obj4);
      tmp14Result = outer1_7(obj(outer1_2[13]).PressableOpacity, obj2, rating);
      const tmp14 = outer1_7;
      const tmp19 = outer1_7;
      const tmp20 = outer1_4;
    }
    return tmp14Result;
  })}</c3>;
};