// === Module 10162: RatingSelector ===

// Module 10162 (RatingSelector)
import FastImageDefault from "FastImage" /* 5717 */;
import _modDef10163 from "module_10163" /* 10163 */;
import _modDef10168 from "module_10168" /* 10168 */;
import _modDef10173 from "module_10173" /* 10173 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const Constants = fn(10158);
({ DEFAULT_RATINGS: closure_4, FeedbackRating: hasOwnProperty } = Constants);
const jsx = fn(21).jsx;
let createStyles = fn(5014);
let closure_7 = createStyles.createStyles({ ratings: { flexDirection: "row", alignItems: "center", justifyContent: "center" }, rating: {}, emoji: { width: 64, height: 64, marginVertical: 24, marginHorizontal: 12 } });
createStyles = fn(5014);
let closure_8 = createStyles.createStyles({ ratings: { flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", gap: 16, marginBottom: 12 }, rating: { width: "100%" }, emoji: { width: 32, height: 32 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/feedback/native/RatingSelector.tsx");

export default function RatingSelector(ratingOptions) {
  ratingOptions = ratingOptions.ratingOptions;
  if (ratingOptions === undefined) {
    ratingOptions = closure_4;
  }
  const textLabels = ratingOptions.textLabels;
  ({ selectedRating: importDefault, onChangeRating: dependencyMap } = ratingOptions);
  closure_3 = undefined;
  let tmp2 = closure_7();
  if (null != textLabels) {
    tmp2 = tmp;
  }
  closure_3 = tmp2;
  let obj = {};
  let obj2 = { source: null, getLabel: null, rating: null };
  let obj3 = { selected: _modDef10163, normal: null };
  tmp = closure_8();
  obj3.normal = textLabels(10164).useFeedbackModalSadDesaturatedSource();
  obj2.source = obj3;
  obj2.getLabel = function getLabel() {
    const intl = textLabels(1113).intl;
    return intl.string(textLabels(1113).t["C/12Tt"]);
  };
  obj2.rating = constants.BAD;
  obj[constants.BAD] = obj2;
  let obj5 = { source: null, getLabel: null, rating: null };
  let obj6 = { selected: _modDef10168, normal: null };
  let obj4 = textLabels(10164);
  obj6.normal = textLabels(10169).useFeedbackModalNeutralDesaturatedSource();
  obj5.source = obj6;
  obj5.getLabel = function getLabel() {
    const intl = textLabels(1113).intl;
    return intl.string(textLabels(1113).t.Xcb4cF);
  };
  obj5.rating = constants.NEUTRAL;
  obj[constants.NEUTRAL] = obj5;
  const obj8 = { source: null, getLabel: null, rating: null };
  const obj9 = { selected: _modDef10173, normal: null };
  let obj7 = textLabels(10169);
  obj9.normal = textLabels(10174).useFeedbackModalHappyDesaturatedSource();
  obj8.source = obj9;
  obj8.getLabel = function getLabel() {
    const intl = textLabels(1113).intl;
    return intl.string(textLabels(1113).t["1Vyb5J"]);
  };
  obj8.rating = constants.GOOD;
  obj[constants.GOOD] = obj8;
  closure_129_0 = obj;
  const mapped = ratingOptions.map((item) => textLabels[item]);
  const obj10 = textLabels(10174);
  return <closure_3 style={tmp2.ratings}>{mapped.map((rating) => {
    rating = rating.rating;
    ({ selected, normal } = rating.source);
    const getLabel = rating.getLabel;
    if (null != rating) {
      const obj = { style: closure_3.rating, children: null };
      const obj2 = { accessibilityRole: "button", accessibilityLabel: getLabel(), accessibilityState: null, onPress: null, icon: null, label: null };
      const obj3 = { selected: closure_1 === rating };
      obj2.accessibilityState = obj3;
      obj2.onPress = function onPress() {
        return dependencyMap(rating);
      };
      const obj4 = { style: closure_3.emoji, source: null };
      if (closure_1 === rating) {
        normal = selected;
      }
      obj4.source = normal;
      obj2.icon = jsx(FastImageDefault, { style: closure_3.emoji, source: null });
      obj2.label = tmp[rating];
      obj.children = jsx(textLabels(8179).RowButton, { accessibilityRole: "button", accessibilityLabel: getLabel(), accessibilityState: null, onPress: null, icon: null, label: null });
      let tmp16Result = <closure_3 key={rating} style={closure_3.rating}>{null}</closure_3>;
    } else {
      const obj5 = { accessibilityRole: "button", accessibilityLabel: getLabel(), accessibilityState: null, onPress: null, children: null };
      const obj6 = { selected: closure_1 === rating };
      obj5.accessibilityState = obj6;
      obj5.onPress = function onPress() {
        return dependencyMap(rating);
      };
      const obj7 = { style: closure_3.emoji, source: null };
      let tmp2 = normal;
      if (closure_1 === rating) {
        tmp2 = selected;
      }
      obj7.source = tmp2;
      obj5.children = jsx(FastImageDefault, { style: closure_3.emoji, source: null });
      tmp16Result = jsx(textLabels(6980).PressableOpacity, { accessibilityRole: "button", accessibilityLabel: getLabel(), accessibilityState: null, onPress: null, children: null }, rating);
    }
    return tmp16Result;
  })}</closure_3>;
};