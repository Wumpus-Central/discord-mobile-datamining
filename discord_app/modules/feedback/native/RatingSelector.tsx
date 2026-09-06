// === Module 11630: RatingSelector ===

// Module 11630 (RatingSelector)
import _modDef11631 from "module_11631" /* 11631 */;
import _modDef11636 from "module_11636" /* 11636 */;
import _modDef11641 from "module_11641" /* 11641 */;
import noop from "module_19" /* 19 */;

const require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, Image: closure_4 } = get_ActivityIndicator);
const Constants = fn(11626);
({ DEFAULT_RATINGS: hasOwnProperty, FeedbackRating: metroRequire } = Constants);
const jsx = fn(21).jsx;
let createStyles = fn(4560);
let closure_8 = createStyles.createStyles({ ratings: { flexDirection: "row", alignItems: "center", justifyContent: "center" }, rating: {}, emoji: { width: 64, height: 64, marginVertical: 24, marginHorizontal: 12 } });
createStyles = fn(4560);
let closure_9 = createStyles.createStyles({ ratings: { flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", gap: 16, marginBottom: 12 }, rating: { width: "100%" }, emoji: { width: 32, height: 32 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/feedback/native/RatingSelector.tsx");

export default function RatingSelector(ratingOptions) {
  ratingOptions = ratingOptions.ratingOptions;
  if (ratingOptions === undefined) {
    ratingOptions = closure_5;
  }
  const textLabels = ratingOptions.textLabels;
  ({ selectedRating: importDefault, onChangeRating: dependencyMap } = ratingOptions);
  closure_3 = undefined;
  let tmp2 = closure_8();
  if (null != textLabels) {
    tmp2 = tmp;
  }
  closure_3 = tmp2;
  let obj = {};
  obj = { source: null, getLabel: null, rating: null };
  obj = { selected: _modDef11631, normal: null };
  let obj3 = textLabels(11632);
  obj.normal = obj3.useFeedbackModalSadDesaturatedSource();
  obj.source = obj;
  obj.getLabel = function getLabel() {
    const intl = textLabels(1114).intl;
    return intl.string(textLabels(1114).t["C/12Tt"]);
  };
  obj.rating = constants.BAD;
  obj[constants.BAD] = obj;
  let obj1 = { source: null, getLabel: null, rating: null };
  let obj2 = { selected: _modDef11636, normal: null };
  tmp = closure_9();
  obj2.normal = textLabels(11637).useFeedbackModalNeutralDesaturatedSource();
  obj1.source = obj2;
  obj1.getLabel = function getLabel() {
    const intl = textLabels(1114).intl;
    return intl.string(textLabels(1114).t.Xcb4cF);
  };
  obj1.rating = constants.NEUTRAL;
  obj[constants.NEUTRAL] = obj1;
  obj3 = { source: null, getLabel: null, rating: null };
  let obj4 = { selected: _modDef11641, normal: null };
  const obj7 = textLabels(11637);
  obj4.normal = textLabels(11642).useFeedbackModalHappyDesaturatedSource();
  obj3.source = obj4;
  obj3.getLabel = function getLabel() {
    const intl = textLabels(1114).intl;
    return intl.string(textLabels(1114).t["1Vyb5J"]);
  };
  obj3.rating = constants.GOOD;
  obj[constants.GOOD] = obj3;
  closure_129_0 = obj;
  const mapped = ratingOptions.map((item) => textLabels[item]);
  const obj10 = textLabels(11642);
  return <closure_3 style={tmp2.ratings}>{mapped.map((rating) => {
    rating = rating.rating;
    ({ selected, normal } = rating.source);
    const getLabel = rating.getLabel;
    if (null != rating) {
      let obj = { style: closure_3.rating, children: null };
      obj = { accessibilityRole: "button", accessibilityLabel: getLabel(), accessibilityState: null, onPress: null, icon: null, label: null };
      obj = { selected: closure_1 === rating };
      obj.accessibilityState = obj;
      obj.onPress = function onPress() {
        return dependencyMap(rating);
      };
      const obj1 = { style: closure_3.emoji, source: null };
      if (closure_1 === rating) {
        normal = selected;
      }
      obj1.source = normal;
      obj.icon = <closure_1_4 style={closure_3.emoji} source={null} />;
      obj.label = tmp[rating];
      obj.children = jsx(textLabels(8595).RowButton, { selected: closure_1 === rating });
      let tmp14Result = <closure_3 key={rating} selected={closure_1 === rating} />;
    } else {
      const obj2 = { accessibilityRole: "button", accessibilityLabel: getLabel(), accessibilityState: null, onPress: null, children: null };
      const obj3 = { selected: closure_1 === rating };
      obj2.accessibilityState = obj3;
      obj2.onPress = function onPress() {
        return dependencyMap(rating);
      };
      const obj4 = { style: closure_3.emoji, source: null };
      let tmp2 = normal;
      if (closure_1 === rating) {
        tmp2 = selected;
      }
      obj4.source = tmp2;
      obj2.children = <closure_1_4 style={closure_3.emoji} source={null} />;
      tmp14Result = jsx(textLabels(5123).PressableOpacity, { accessibilityRole: "button", accessibilityLabel: getLabel(), accessibilityState: null, onPress: null, children: null }, rating);
    }
    return tmp14Result;
  })}</closure_3>;
};