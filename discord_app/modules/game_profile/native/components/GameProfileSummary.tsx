// === Module 8417: GameProfileSummary ===

// Module 8417 (GameProfileSummary)
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8352 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, Pressable: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4896);
let closure_8 = createStyles.createStyles({ container: { flexDirection: "column" } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileSummary.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = trackAction(first[6]).c(19);
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
    let tmp9 = fn;
  } else {
    tmp9 = cResult[1];
  }
  if (cResult[2] === first) {
    if (cResult[3] === trackAction) {
      let tmp10 = cResult[4];
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
    } else if (cResult[5] !== first) {
      const intl = trackAction(tmp2[8]).intl;
      const t = trackAction(tmp2[8]).t;
      const stringResult = intl.string(first ? t["6MwJo/"] : t.lBeKY2);
      cResult[5] = first;
      cResult[6] = stringResult;
    } else {
      if (cResult[7] === summaryLocalized) {
        if (cResult[8] === tmp9) {
          if (cResult[9] === num5) {
            let tmp16 = cResult[10];
          }
          if (cResult[11] === tmp13) {
            if (cResult[12] === tmp10) {
              if (cResult[13] === first1) {
                let tmp19 = cResult[14];
              }
              if (cResult[15] === tmp4.container) {
                if (cResult[16] === tmp16) {
                  if (cResult[17] === tmp19) {
                    let tmp23 = cResult[18];
                  }
                  return tmp23;
                }
              }
              const obj2 = { style: tmp4.container, children: null };
              const items = [tmp16, tmp19];
              obj2.children = items;
              const tmp26 = closure_7(closure_4, obj2);
              cResult[15] = tmp4.container;
              cResult[16] = tmp16;
              cResult[17] = tmp19;
              cResult[18] = tmp26;
              tmp23 = tmp26;
            }
          }
          let tmp20 = null;
          if (first1) {
            const obj3 = { onPress: tmp10, accessibilityRole: "button", accessibilityLabel: tmp13, children: null };
            const obj4 = { variant: "text-md/medium", color: "text-brand", children: tmp13 };
            obj3.children = closure_6(trackAction(tmp2[9]).Text, obj4);
            tmp20 = closure_6(closure_5, obj3);
          }
          cResult[11] = tmp13;
          cResult[12] = tmp10;
          cResult[13] = first1;
          cResult[14] = tmp20;
          tmp19 = tmp20;
        }
      }
      const obj5 = { variant: "text-md/normal", color: "interactive-text-active", lineClamp: num5, onTextLayout: tmp9, children: summaryLocalized };
      const tmp18 = closure_6(trackAction(tmp2[9]).Text, obj5);
      cResult[7] = summaryLocalized;
      cResult[8] = tmp9;
      cResult[9] = num5;
      cResult[10] = tmp18;
      tmp16 = tmp18;
    }
  }
  const fn2 = function w() {
    const GameProfileTrackActionActions = GameProfileAnalyticUtils.GameProfileTrackActionActions;
    trackAction(first ? GameProfileTrackActionActions.ShowLess : GameProfileTrackActionActions.ShowMore);
    closure_2(!first);
    const tmp = !first;
  };
  cResult[2] = first;
  cResult[3] = trackAction;
  cResult[4] = fn2;
  tmp10 = fn2;
  const obj = trackAction(first[6]);
}) : ((arg0) => {
  ({ game, trackAction } = arg0);
  first = undefined;
  _slicedToArray = undefined;
  first1 = undefined;
  closure_4 = undefined;
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
    const GameProfileTrackActionActions = GameProfileAnalyticUtils.GameProfileTrackActionActions;
    trackAction(first ? GameProfileTrackActionActions.ShowLess : GameProfileTrackActionActions.ShowMore);
    closure_2(!first);
    const tmp = !first;
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
    const t = trackAction(first[8]).t;
    const stringResult = intl.string(first ? t["6MwJo/"] : t.lBeKY2);
    const obj = { style: tmp.container, children: null };
    const obj2 = { variant: "text-md/normal", color: "interactive-text-active", lineClamp: num, onTextLayout: callback, children: summaryLocalized };
    const items2 = [closure_6(trackAction(first[9]).Text, obj2), ];
    let tmp13Result = null;
    if (first1) {
      const obj3 = { onPress: callback1, accessibilityRole: "button", accessibilityLabel: stringResult, children: null };
      const obj4 = { variant: "text-md/medium", color: "text-brand", children: stringResult };
      obj3.children = closure_6(trackAction(tmp17[9]).Text, obj4);
      tmp13Result = closure_6(closure_5, obj3);
    }
    items2[1] = tmp13Result;
    obj.children = items2;
    return closure_7(closure_4, obj);
  }
  tmp = closure_8();
});