// discord_app/modules/game_profile/native/components/GameProfileSummary.tsx
import GameProfileAnalyticUtils from "../../GameProfileAnalyticUtils.tsx";
import _slicedToArray_mod from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let _slicedToArray = _slicedToArray_mod;
({ View: closure_4, Pressable: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles({ container: { flexDirection: "column" } });
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_2;
      let closure_4;
      let first;
      let first1;
      let game;
      let items;
      let obj4;
      let tmp9;
      let trackAction;
      const obj = trackAction(first[6]);
      const cResult = obj.c(19);
      ({ game, trackAction } = arg0);
      const tmp4 = closure_8();
      [first, _slicedToArray] = first1.useState(false);
      [first1, closure_4] = first1.useState(null);
      if (cResult[0] !== first1) {
        const fn = function c(nativeEvent) {
          if (null == first1) {
            closure_4(nativeEvent.nativeEvent.lines.length > 3);
          }
        };
        cResult[0] = first1;
        cResult[1] = fn;
        tmp9 = fn;
      } else {
        tmp9 = cResult[1];
      }
      if (cResult[2] === first) {
        let tmp10;
        if (cResult[3] === trackAction) {
          tmp10 = cResult[4];
        }
        let summaryLocalized;
        if (game != null) {
          summaryLocalized = game.summaryLocalized;
        }
        if (summaryLocalized == null) {
          let description;
          if (game != null) {
            description = game.description;
          }
          summaryLocalized = description;
        }
        if (null == summaryLocalized) {
          return null;
        } else {
          let tmp13;
          if (cResult[5] !== first) {
            const intl = trackAction(tmp2[8]).intl;
            const string = intl.string;
            const t = trackAction(tmp2[8]).t;
            const stringResult = string(first ? t["6MwJo/"] : t.lBeKY2);
            cResult[5] = first;
            cResult[6] = stringResult;
            tmp13 = stringResult;
          } else {
            tmp13 = cResult[6];
          }
          if (cResult[7] === summaryLocalized) {
            if (cResult[8] === tmp9) {
              let tmp15;
              if (cResult[9] === num5) {
                tmp15 = cResult[10];
              }
              if (cResult[11] === tmp13) {
                if (cResult[12] === tmp10) {
                  let tmp18;
                  if (cResult[13] === first1) {
                    tmp18 = cResult[14];
                  }
                  if (cResult[15] === tmp4.container) {
                    if (cResult[16] === tmp15) {
                      let tmp22;
                      if (cResult[17] === tmp18) {
                        tmp22 = cResult[18];
                      }
                      return tmp22;
                    }
                  }
                  const obj2 = { style: tmp4.container, children: items };
                  items = [tmp15, tmp18];
                  const tmp25 = closure_7(closure_4, obj2);
                  cResult[15] = tmp4.container;
                  cResult[16] = tmp15;
                  cResult[17] = tmp18;
                  cResult[18] = tmp25;
                  tmp22 = tmp25;
                }
              }
              let tmp19 = null;
              if (first1) {
                const obj3 = {
                  onPress: tmp10,
                  accessibilityRole: "button",
                  accessibilityLabel: tmp13,
                  children: closure_6(trackAction(first[9]).Text, obj4),
                };
                obj4 = { variant: "text-md/medium", color: "text-brand", children: tmp13 };
                tmp19 = closure_6(closure_5, obj3);
              }
              cResult[11] = tmp13;
              cResult[12] = tmp10;
              cResult[13] = first1;
              cResult[14] = tmp19;
              tmp18 = tmp19;
            }
          }
          const obj5 = {
            variant: "text-md/normal",
            color: "interactive-text-active",
            lineClamp: num5,
            onTextLayout: tmp9,
            children: summaryLocalized,
          };
          const tmp17 = closure_6(trackAction(first[9]).Text, obj5);
          cResult[7] = summaryLocalized;
          cResult[8] = tmp9;
          cResult[9] = num5;
          cResult[10] = tmp17;
          tmp15 = tmp17;
        }
      }
      const fn2 = function w() {
        const tmp = !first;
        const GameProfileTrackActionActions = GameProfileAnalyticUtils.GameProfileTrackActionActions;
        trackAction(first ? GameProfileTrackActionActions.ShowLess : GameProfileTrackActionActions.ShowMore);
        closure_2(tmp);
      };
      cResult[2] = first;
      cResult[3] = trackAction;
      cResult[4] = fn2;
      tmp10 = fn2;
    }
  : (arg0) => {
      let closure_2;
      let closure_4;
      let first;
      let first1;
      let game;
      let items2;
      let obj4;
      let trackAction;
      ({ game, trackAction } = arg0);
      first = undefined;
      _slicedToArray = undefined;
      first1 = undefined;
      closure_4 = undefined;
      let tmp = closure_8();
      [first, _slicedToArray] = first1.useState(false);
      [first1, closure_4] = first1.useState(null);
      const items = [first1];
      const items1 = [first, trackAction];
      const callback = first1.useCallback((nativeEvent) => {
        if (null == first1) {
          closure_4(nativeEvent.nativeEvent.lines.length > 3);
        }
      }, items);
      let summaryLocalized;
      const callback1 = first1.useCallback(() => {
        const tmp = !first;
        const GameProfileTrackActionActions = GameProfileAnalyticUtils.GameProfileTrackActionActions;
        trackAction(first ? GameProfileTrackActionActions.ShowLess : GameProfileTrackActionActions.ShowMore);
        closure_2(tmp);
      }, items1);
      if (game != null) {
        summaryLocalized = game.summaryLocalized;
      }
      if (summaryLocalized == null) {
        let description;
        if (game != null) {
          description = game.description;
        }
        summaryLocalized = description;
      }
      if (null == summaryLocalized) {
        return null;
      } else {
        const intl = trackAction(first[8]).intl;
        const string = intl.string;
        const t = trackAction(first[8]).t;
        const stringResult = string(first ? t["6MwJo/"] : t.lBeKY2);
        const obj = { style: tmp.container, children: items2 };
        const Text = trackAction(tmp17[9]).Text;
        const tmp12 = closure_4;
        const obj2 = {
          variant: "text-md/normal",
          color: "interactive-text-active",
          lineClamp: num,
          onTextLayout: callback,
          children: summaryLocalized,
        };
        items2 = [closure_6(Text, obj2)];
        let tmp13Result = null;
        if (first1) {
          const obj3 = {
            onPress: callback1,
            accessibilityRole: "button",
            accessibilityLabel: stringResult,
            children: closure_6(trackAction(first[9]).Text, obj4),
          };
          obj4 = { variant: "text-md/medium", color: "text-brand", children: stringResult };
          tmp13Result = closure_6(closure_5, obj3);
        }
        items2[1] = tmp13Result;
        return closure_7(tmp12, obj);
      }
    };
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileSummary.tsx");

export default tmp4;
