// discord_app/modules/feedback/native/RatingSelector.tsx
import _modDef9607 from "../../../../_runtime/metro/09607__.js";
import _modDef9612 from "../../../../_runtime/metro/09612__.js";
import _modDef9617 from "../../../../_runtime/metro/09617__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, Image: closure_4 } = get_ActivityIndicator);
const Constants = fn(9602);
({ DEFAULT_RATINGS: hasOwnProperty, FeedbackRating: metroRequire } = Constants);
const jsx = fn(21).jsx;
let createStyles = fn(5090);
let closure_8 = createStyles.createStyles({
  ratings: { flexDirection: "row", alignItems: "center", justifyContent: "center" },
  rating: {},
  emoji: { width: 64, height: 64, marginVertical: 24, marginHorizontal: 12 },
});
createStyles = fn(5090);
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
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useEmojiConfigs(arr) {
      const cResult = obj2(576).c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function n() {
          const intl = obj2(1126).intl;
          return intl.string(obj2(1126).t["C/12Tt"]);
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function l() {
          const intl = obj2(1126).intl;
          return intl.string(obj2(1126).t.Xcb4cF);
        };
        cResult[1] = fn2;
        let tmp5 = fn2;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const fn3 = function s() {
          const intl = obj2(1126).intl;
          return intl.string(obj2(1126).t["1Vyb5J"]);
        };
        cResult[2] = fn3;
        let tmp6 = fn3;
      } else {
        tmp6 = cResult[2];
      }
      obj2 = {};
      const obj3 = { source: null, getLabel: null, rating: null };
      const obj4 = { selected: _modDef9607, normal: null };
      const obj = obj2(576);
      obj4.normal = obj2(9608).useFeedbackModalSadDesaturatedSource();
      obj3.source = obj4;
      obj3.getLabel = first;
      obj3.rating = constants.BAD;
      obj2[constants.BAD] = obj3;
      const obj5 = { source: null, getLabel: null, rating: null };
      const obj6 = { selected: _modDef9612, normal: null };
      const tmpResult = obj2(9608);
      obj6.normal = obj2(9613).useFeedbackModalNeutralDesaturatedSource();
      obj5.source = obj6;
      obj5.getLabel = tmp5;
      obj5.rating = constants.NEUTRAL;
      obj2[constants.NEUTRAL] = obj5;
      const obj7 = { source: null, getLabel: null, rating: null };
      const obj8 = { selected: _modDef9617, normal: null };
      const tmpResult3 = obj2(9613);
      obj8.normal = obj2(9618).useFeedbackModalHappyDesaturatedSource();
      obj7.source = obj8;
      obj7.getLabel = tmp6;
      obj7.rating = constants.GOOD;
      obj2[constants.GOOD] = obj7;
      return arr.map((item) => obj2[item]);
    }
  : function useEmojiConfigs(arr) {
      const obj = {};
      const obj2 = { source: null, getLabel: null, rating: null };
      const obj3 = { selected: _modDef9607, normal: obj(9608).useFeedbackModalSadDesaturatedSource() };
      obj2.source = obj3;
      obj2.getLabel = function getLabel() {
        const intl = obj(1126).intl;
        return intl.string(obj(1126).t["C/12Tt"]);
      };
      obj2.rating = constants.BAD;
      obj[constants.BAD] = obj2;
      const obj5 = { source: null, getLabel: null, rating: null };
      const obj6 = { selected: _modDef9612, normal: null };
      const obj4 = obj(9608);
      obj6.normal = obj(9613).useFeedbackModalNeutralDesaturatedSource();
      obj5.source = obj6;
      obj5.getLabel = function getLabel() {
        const intl = obj(1126).intl;
        return intl.string(obj(1126).t.Xcb4cF);
      };
      obj5.rating = constants.NEUTRAL;
      obj[constants.NEUTRAL] = obj5;
      const obj8 = { source: null, getLabel: null, rating: null };
      const obj9 = { selected: _modDef9617, normal: null };
      const obj7 = obj(9613);
      obj9.normal = obj(9618).useFeedbackModalHappyDesaturatedSource();
      obj8.source = obj9;
      obj8.getLabel = function getLabel() {
        const intl = obj(1126).intl;
        return intl.string(obj(1126).t["1Vyb5J"]);
      };
      obj8.rating = constants.GOOD;
      obj[constants.GOOD] = obj8;
      return arr.map((item) => obj[item]);
    };
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/feedback/native/RatingSelector.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function RatingSelector(selectedRating) {
      const cResult = textLabels(onChangeRating[6]).c(16);
      ({ ratingOptions, textLabels } = selectedRating);
      rating = selectedRating.selectedRating;
      onChangeRating = selectedRating.onChangeRating;
      if (undefined === ratingOptions) {
        ratingOptions = closure_5;
      }
      let obj = textLabels(onChangeRating[6]);
      let tmp3 = closure_8();
      if (null != textLabels) {
        tmp3 = tmp2;
      }
      closure_3 = tmp3;
      const arr = closure_10(ratingOptions);
      if (cResult[0] === arr) {
        if (cResult[1] === onChangeRating) {
          if (cResult[2] === rating) {
            if (cResult[3] === tmp3.emoji) {
              if (cResult[4] === tmp3.rating) {
                if (cResult[5] === textLabels) {
                  if (cResult[13] === tmp3.ratings) {
                    if (cResult[14] === tmp5) {
                      let tmp9 = cResult[15];
                    }
                    return tmp9;
                  }
                  let obj2 = { style: tmp4, children: cResult[6] };
                  const tmp12 = <closure_3 style={tmp4}>{cResult[6]}</closure_3>;
                  cResult[13] = tmp3.ratings;
                  cResult[14] = cResult[6];
                  cResult[15] = tmp12;
                  tmp9 = tmp12;
                }
              }
            }
          }
        }
      }
      if (cResult[7] === onChangeRating) {
        if (cResult[8] === rating) {
          if (cResult[9] === tmp3.emoji) {
            if (cResult[10] === tmp3.rating) {
              if (cResult[11] === textLabels) {
                let tmp6 = cResult[12];
              }
              const mapped = arr.map(tmp6);
              cResult[0] = arr;
              cResult[1] = onChangeRating;
              cResult[2] = rating;
              ({ emoji: tmp[3], rating } = tmp3);
              cResult[4] = rating;
              cResult[5] = textLabels;
              cResult[6] = mapped;
            }
          }
        }
      }
      const fn = function o(rating) {
        rating = rating.rating;
        ({ source, getLabel } = rating);
        ({ selected, normal } = source);
        if (null != rating) {
          const obj = { style: closure_3.rating, children: null };
          const obj2 = {
            accessibilityRole: "button",
            accessibilityLabel: getLabel(),
            accessibilityState: null,
            onPress: null,
            icon: null,
            label: null,
          };
          const obj3 = { selected: rating === rating };
          obj2.accessibilityState = obj3;
          obj2.onPress = function onPress() {
            return onChangeRating(rating);
          };
          const obj4 = { style: closure_3.emoji, source: null };
          if (rating === rating) {
            normal = selected;
          }
          obj4.source = normal;
          obj2.icon = <closure_1_4 style={closure_3.emoji} source={null} />;
          obj2.label = tmp[rating];
          obj.children = jsx(textLabels(onChangeRating[14]).RowButton, {
            accessibilityRole: "button",
            accessibilityLabel: getLabel(),
            accessibilityState: null,
            onPress: null,
            icon: null,
            label: null,
          });
          let tmp14Result = (
            <closure_3 key={rating} style={closure_3.rating}>
              {null}
            </closure_3>
          );
        } else {
          const obj5 = {
            accessibilityRole: "button",
            accessibilityLabel: getLabel(),
            accessibilityState: null,
            onPress: null,
            children: null,
          };
          const obj6 = { selected: rating === rating };
          obj5.accessibilityState = obj6;
          obj5.onPress = function onPress() {
            return onChangeRating(rating);
          };
          const obj7 = { style: closure_3.emoji, source: null };
          let tmp2 = normal;
          if (rating === rating) {
            tmp2 = selected;
          }
          obj7.source = tmp2;
          obj5.children = <closure_1_4 style={closure_3.emoji} source={null} />;
          tmp14Result = jsx(
            textLabels(onChangeRating[15]).PressableOpacity,
            {
              accessibilityRole: "button",
              accessibilityLabel: getLabel(),
              accessibilityState: null,
              onPress: null,
              children: null,
            },
            rating,
          );
        }
        return tmp14Result;
      };
      cResult[7] = onChangeRating;
      cResult[8] = rating;
      cResult[9] = tmp3.emoji;
      cResult[10] = tmp3.rating;
      cResult[11] = textLabels;
      cResult[12] = fn;
      tmp6 = fn;
      tmp2 = closure_9();
    }
  : function RatingSelector(ratingOptions) {
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
      tmp = closure_9();
      const arr = closure_10(ratingOptions);
      return (
        <closure_3 style={tmp2.ratings}>
          {closure_10(ratingOptions).map((rating) => {
            rating = rating.rating;
            ({ selected, normal } = rating.source);
            const getLabel = rating.getLabel;
            if (null != rating) {
              const obj = { style: closure_3.rating, children: null };
              const obj2 = {
                accessibilityRole: "button",
                accessibilityLabel: getLabel(),
                accessibilityState: null,
                onPress: null,
                icon: null,
                label: null,
              };
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
              obj2.icon = <closure_1_4 style={closure_3.emoji} source={null} />;
              obj2.label = tmp[rating];
              obj.children = jsx(textLabels(8557).RowButton, {
                accessibilityRole: "button",
                accessibilityLabel: getLabel(),
                accessibilityState: null,
                onPress: null,
                icon: null,
                label: null,
              });
              let tmp14Result = (
                <closure_3 key={rating} style={closure_3.rating}>
                  {null}
                </closure_3>
              );
            } else {
              const obj5 = {
                accessibilityRole: "button",
                accessibilityLabel: getLabel(),
                accessibilityState: null,
                onPress: null,
                children: null,
              };
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
              obj5.children = <closure_1_4 style={closure_3.emoji} source={null} />;
              tmp14Result = jsx(
                textLabels(6189).PressableOpacity,
                {
                  accessibilityRole: "button",
                  accessibilityLabel: getLabel(),
                  accessibilityState: null,
                  onPress: null,
                  children: null,
                },
                rating,
              );
            }
            return tmp14Result;
          })}
        </closure_3>
      );
    };
