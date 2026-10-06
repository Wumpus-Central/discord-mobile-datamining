// discord_app/modules/feedback/native/RatingSelector.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import AssetRegistryDefault from "../../../../_runtime/11267_AssetRegistry.js";
import AssetRegistryDefault2 from "../../../../_runtime/11272_AssetRegistry.js";
import AssetRegistryDefault3 from "../../../../_runtime/11277_AssetRegistry.js";
import react from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import Constants from "../Constants.tsx";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let selectedRating;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
({ View: c3, Image: closure_4 } = react_native);
({ DEFAULT_RATINGS: hasOwnProperty, FeedbackRating: metroRequire } = Constants);
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let closure_8 = createStyles.createStyles({
  ratings: { flexDirection: "row", alignItems: "center", justifyContent: "center" },
  rating: {},
  emoji: { width: 64, height: 64, marginVertical: 24, marginHorizontal: 12 },
});
createStyles = createStyles_mod;
let closure_9 = createStyles.createStyles({
  ratings: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 16,
    marginBottom: 12,
  },
  rating: { width: "100%" },
  emoji: { width: 32, height: 32 },
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arr) => {
      let first;
      let obj2;
      let obj4;
      let obj6;
      let obj8;
      let tmp5;
      let tmp6;
      let tmpResult;
      let tmpResult3;
      let tmpResult4;
      const obj = obj2(576);
      const cResult = obj.c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function l() {
          const intl = obj2(dependencyMap[7]).intl;
          return intl.string(obj2(dependencyMap[7]).t["C/12Tt"]);
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function n() {
          const intl = obj2(dependencyMap[7]).intl;
          return intl.string(obj2(dependencyMap[7]).t.Xcb4cF);
        };
        cResult[1] = fn2;
        tmp5 = fn2;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const fn3 = function s() {
          const intl = obj2(dependencyMap[7]).intl;
          return intl.string(obj2(dependencyMap[7]).t["1Vyb5J"]);
        };
        cResult[2] = fn3;
        tmp6 = fn3;
      } else {
        tmp6 = cResult[2];
      }
      obj2 = {};
      const obj3 = { source: obj4, getLabel: first, rating: constants.BAD };
      const BAD = constants.BAD;
      obj4 = { selected: AssetRegistryDefault, normal: tmpResult.useFeedbackModalSadDesaturatedSource() };
      obj2[BAD] = obj3;
      const obj5 = { source: obj6, getLabel: tmp5, rating: constants.NEUTRAL };
      tmpResult = obj2(11268);
      const NEUTRAL = constants.NEUTRAL;
      obj6 = { selected: AssetRegistryDefault2, normal: tmpResult3.useFeedbackModalNeutralDesaturatedSource() };
      obj2[NEUTRAL] = obj5;
      const obj7 = { source: obj8, getLabel: tmp6, rating: constants.GOOD };
      tmpResult3 = obj2(11273);
      const GOOD = constants.GOOD;
      obj8 = { selected: AssetRegistryDefault3, normal: tmpResult4.useFeedbackModalHappyDesaturatedSource() };
      obj2[GOOD] = obj7;
      tmpResult4 = obj2(11278);
      return arr.map((item) => obj2[item]);
    }
  : (arr) => {
      let obj10;
      let obj3;
      let obj4;
      let obj6;
      let obj7;
      let obj9;
      const obj = {};
      const obj2 = {
        source: obj3,
        getLabel() {
          const intl = obj(dependencyMap[7]).intl;
          return intl.string(obj(dependencyMap[7]).t["C/12Tt"]);
        },
        rating: constants.BAD,
      };
      const BAD = constants.BAD;
      obj3 = { selected: AssetRegistryDefault, normal: obj4.useFeedbackModalSadDesaturatedSource() };
      obj[BAD] = obj2;
      obj4 = obj(11268);
      const obj5 = {
        source: obj6,
        getLabel() {
          const intl = obj(dependencyMap[7]).intl;
          return intl.string(obj(dependencyMap[7]).t.Xcb4cF);
        },
        rating: constants.NEUTRAL,
      };
      const NEUTRAL = constants.NEUTRAL;
      obj6 = { selected: AssetRegistryDefault2, normal: obj7.useFeedbackModalNeutralDesaturatedSource() };
      obj[NEUTRAL] = obj5;
      obj7 = obj(11273);
      const obj8 = {
        source: obj9,
        getLabel() {
          const intl = obj(dependencyMap[7]).intl;
          return intl.string(obj(dependencyMap[7]).t["1Vyb5J"]);
        },
        rating: constants.GOOD,
      };
      const GOOD = constants.GOOD;
      obj9 = { selected: AssetRegistryDefault3, normal: obj10.useFeedbackModalHappyDesaturatedSource() };
      obj[GOOD] = obj8;
      obj10 = obj(11278);
      return arr.map((item) => obj[item]);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (selectedRating) => {
      let onChangeRating;
      let ratingOptions;
      let textLabels;
      let tmp5;
      const obj = textLabels(onChangeRating[6]);
      const cResult = obj.c(16);
      ({ ratingOptions, textLabels } = selectedRating);
      selectedRating = selectedRating.selectedRating;
      onChangeRating = selectedRating.onChangeRating;
      if (undefined === ratingOptions) {
        ratingOptions = closure_5;
      }
      let tmp2 = closure_9();
      let tmp3 = closure_8();
      if (null != textLabels) {
        tmp3 = tmp2;
      }
      let closure_3 = tmp3;
      const arr = closure_10(ratingOptions);
      if (cResult[0] === arr) {
        if (cResult[1] === onChangeRating) {
          if (cResult[2] === selectedRating) {
            if (cResult[3] === tmp3.emoji) {
              if (cResult[4] === tmp3.rating) {
                if (cResult[5] === textLabels) {
                  tmp5 = cResult[6];
                }
                if (cResult[13] === tmp3.ratings) {
                  let tmp8;
                  if (cResult[14] === tmp5) {
                    tmp8 = cResult[15];
                  }
                  return tmp8;
                }
                const tmp11 = <closure_3 style={tmp4}>{tmp5}</closure_3>;
                cResult[13] = tmp3.ratings;
                cResult[14] = tmp5;
                cResult[15] = tmp11;
                tmp8 = tmp11;
              }
            }
          }
        }
      }
      if (cResult[7] === onChangeRating) {
        if (cResult[8] === selectedRating) {
          if (cResult[9] === tmp3.emoji) {
            if (cResult[10] === tmp3.rating) {
              let tmp6;
              if (cResult[11] === textLabels) {
                tmp6 = cResult[12];
              }
              const mapped = arr.map(tmp6);
              cResult[0] = arr;
              cResult[1] = onChangeRating;
              cResult[2] = selectedRating;
              cResult[3] = tmp3.emoji;
              cResult[4] = tmp3.rating;
              cResult[5] = textLabels;
              cResult[6] = mapped;
              tmp5 = mapped;
            }
          }
        }
      }
      const fn = function o(rating) {
        let getLabel;
        let normal;
        let obj3;
        let selected;
        let source;
        let tmp14Result;
        rating = rating.rating;
        ({ source, getLabel } = rating);
        ({ selected, normal } = source);
        if (null != rating) {
          ({
            accessibilityRole: "button",
            accessibilityLabel: getLabel(),
            accessibilityState: obj3,
            onPress() {
              return onChangeRating(rating);
            },
            icon: null,
            label: tmp[rating],
          });
          const RowButton = textLabels(onChangeRating[14]).RowButton;
          obj3 = { selected: selectedRating === rating };
          if (selectedRating === rating) {
            normal = selected;
          }
          tmp14Result = (
            <closure_3 key={rating} style={closure_3.rating}>
              {null}
            </closure_3>
          );
        } else {
          const PressableOpacity = textLabels(onChangeRating[15]).PressableOpacity;
          const obj6 = { selected: selectedRating === rating };
          tmp14Result = (
            <PressableOpacity
              key={rating}
              accessibilityRole="button"
              accessibilityLabel={getLabel()}
              accessibilityState={obj6}
              onPress={function onPress() {
                return onChangeRating(rating);
              }}
            >
              {null}
            </PressableOpacity>
          );
        }
        return tmp14Result;
      };
      cResult[7] = onChangeRating;
      cResult[8] = selectedRating;
      cResult[9] = tmp3.emoji;
      cResult[10] = tmp3.rating;
      cResult[11] = textLabels;
      cResult[12] = fn;
      tmp6 = fn;
    }
  : (ratingOptions) => {
      ratingOptions = ratingOptions.ratingOptions;
      if (ratingOptions === undefined) {
        ratingOptions = closure_5;
      }
      const textLabels = ratingOptions.textLabels;
      ({ selectedRating: importDefault, onChangeRating: dependencyMap } = ratingOptions);
      let closure_3;
      const tmp = closure_9();
      let tmp2 = closure_8();
      if (null != textLabels) {
        tmp2 = tmp;
      }
      closure_3 = tmp2;
      const arr = closure_10(ratingOptions);
      return (
        <closure_3 style={tmp2.ratings}>
          {arr.map((rating) => {
            let normal;
            let obj3;
            let selected;
            let tmp14Result;
            rating = rating.rating;
            ({ selected, normal } = rating.source);
            const getLabel = rating.getLabel;
            if (null != rating) {
              ({
                accessibilityRole: "button",
                accessibilityLabel: getLabel(),
                accessibilityState: obj3,
                onPress() {
                  return dependencyMap(rating);
                },
                icon: null,
                label: tmp[rating],
              });
              const RowButton = textLabels(dependencyMap[14]).RowButton;
              obj3 = { selected: closure_1 === rating };
              if (closure_1 === rating) {
                normal = selected;
              }
              tmp14Result = (
                <closure_3 key={rating} style={closure_3.rating}>
                  {null}
                </closure_3>
              );
            } else {
              const PressableOpacity = textLabels(dependencyMap[15]).PressableOpacity;
              const obj6 = { selected: closure_1 === rating };
              tmp14Result = (
                <PressableOpacity
                  key={rating}
                  accessibilityRole="button"
                  accessibilityLabel={getLabel()}
                  accessibilityState={obj6}
                  onPress={function onPress() {
                    return dependencyMap(rating);
                  }}
                >
                  {null}
                </PressableOpacity>
              );
            }
            return tmp14Result;
          })}
        </closure_3>
      );
    };
const result = size.fileFinishedImporting("modules/feedback/native/RatingSelector.tsx");

export default tmp5;
