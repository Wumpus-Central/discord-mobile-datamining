// discord_app/modules/feedback/native/RatingSelector.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import registerAssetDefault from "../../../../_runtime/11216_registerAsset.js";
import registerAssetDefault2 from "../../../../_runtime/11221_registerAsset.js";
import registerAssetDefault3 from "../../../../_runtime/11226_registerAsset.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import FeedbackRating from "../Constants.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
noopAll;
({ View: c3, Image: c4 } = get_ActivityIndicator);
({ DEFAULT_RATINGS: c5, FeedbackRating: closure_6 } = FeedbackRating);
let closure_8 = createCacheKey.createStyles({ ratings: { flexDirection: "row", alignItems: "center", justifyContent: "center" }, rating: {}, emoji: { width: 64, height: 64, marginVertical: 24, marginHorizontal: 12 } });
let closure_9 = createCacheKey.createStyles({ ratings: { flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", gap: 16, marginBottom: 12 }, rating: { width: "100%" }, emoji: { width: 32, height: 32 } });
const result = require("set").fileFinishedImporting("modules/feedback/native/RatingSelector.tsx");

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
  obj = undefined;
  obj = {};
  obj = { source: null, getLabel: null, rating: null };
  obj = { selected: registerAssetDefault, normal: null };
  let obj3 = obj(11217);
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
  obj2[1] = obj(11222).useFeedbackModalNeutralDesaturatedSource();
  obj1[0] = obj2;
  obj1[1] = function getLabel() {
    const intl = obj(1236).intl;
    return intl.string(obj(1236).t.Xcb4cF);
  };
  obj1[2] = constants.NEUTRAL;
  obj[constants.NEUTRAL] = obj1;
  obj3 = { source: null, getLabel: null, rating: null };
  let obj4 = { selected: registerAssetDefault3, normal: null };
  const obj7 = obj(11222);
  obj4[1] = obj(11227).useFeedbackModalHappyDesaturatedSource();
  obj3[0] = obj4;
  obj3[1] = function getLabel() {
    const intl = obj(1236).intl;
    return intl.string(obj(1236).t["1Vyb5J"]);
  };
  obj3[2] = constants.GOOD;
  obj[constants.GOOD] = obj3;
  const mapped = ratingOptions.map((arg0) => obj[arg0]);
  const obj10 = obj(11227);
  return <closure_3 style={tmp2.ratings}>{mapped.map((rating) => {
    rating = rating.rating;
    ({ selected, normal } = rating.source);
    const getLabel = rating.getLabel;
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
      obj[4] = closure_1_7(closure_1_4, obj1);
      obj[5] = tmp[rating];
      obj[1] = closure_1_7(obj(closure_1_2[12]).RowButton, obj);
      let tmp14Result = closure_1_7(closure_3, obj, rating);
      const tmp12 = closure_1_7;
      const tmp13 = closure_1_4;
      const tmp4 = closure_1_7;
      const tmp5 = closure_3;
      const tmp7 = closure_1_7;
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
      obj2[4] = closure_1_7(closure_1_4, obj4);
      tmp14Result = closure_1_7(obj(closure_1_2[13]).PressableOpacity, obj2, rating);
      const tmp14 = closure_1_7;
      const tmp19 = closure_1_7;
      const tmp20 = closure_1_4;
    }
    return tmp14Result;
  })}</closure_3>;
};