// discord_app/modules/game_profile/native/components/GameProfileSummary.tsx
import GameProfileAnalyticUtils from "../../GameProfileAnalyticUtils.tsx";
import findTextStart from "../../../html_parser/index.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, Pressable: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5005);
let closure_8 = createStyles.createStyles({ container: { flexDirection: "column", overflow: "hidden" }, measurement: { position: "absolute", top: 0, left: 0, right: 0, opacity: 0 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileSummary.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GameProfileSummary(arg0) {
  const cResult = trackAction(expanded[6]).c(27);
  ({ game, trackAction } = arg0);
  const tmp4 = closure_8();
  [expanded, _slicedToArray] = noop.useState(false);
  const obj = trackAction(expanded[6]);
  [tmp8, noop] = noop.useState(false);
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
  if (cResult[0] !== summaryLocalized) {
    if (null != summaryLocalized) {
      let parseHTMLFromTextResult = trackAction(tmp2[7]).parseHTMLFromText(summaryLocalized);
      const tmpResult = trackAction(tmp2[7]);
    } else {
      parseHTMLFromTextResult = [];
    }
    cResult[0] = summaryLocalized;
    cResult[1] = parseHTMLFromTextResult;
  } else {
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function w(nativeEvent) {
        noop(nativeEvent.nativeEvent.lines.length > 3);
      };
      cResult[2] = fn;
      let tmp13 = fn;
    } else {
      tmp13 = cResult[2];
    }
    if (cResult[3] === expanded) {
      if (cResult[4] === trackAction) {
        let tmp14 = cResult[5];
      }
      if (0 === arr.length) {
        return null;
      } else if (cResult[6] !== expanded) {
        const intl = trackAction(tmp2[9]).intl;
        const t = trackAction(tmp2[9]).t;
        cResult[6] = expanded;
        class E {
          constructor() {
            tmp = !closure_1;
            tmp2 = trackAction;
            GameProfileTrackActionActions = closure_0(closure_1[8]).GameProfileTrackActionActions;
            tmp2Result = tmp2(closure_1 ? GameProfileTrackActionActions.ShowLess : GameProfileTrackActionActions.ShowMore);
            tmp4 = closure_2(tmp);
            return;
          }
        }
        const stringResult = intl.string(expanded ? t["6MwJo/"] : t.lBeKY2);
      } else {
        if (cResult[8] === arr) {
          if (cResult[9] === expanded) {
            if (cResult[10] === tmp4.measurement) {
              let tmp18 = cResult[11];
            }
            if (cResult[12] !== arr) {
              const obj2 = { runs: arr };
              cResult[12] = arr;
              class E {
                constructor() {
                  tmp = !closure_1;
                  tmp2 = trackAction;
                  GameProfileTrackActionActions = closure_0(closure_1[8]).GameProfileTrackActionActions;
                  tmp2Result = tmp2(closure_1 ? GameProfileTrackActionActions.ShowLess : GameProfileTrackActionActions.ShowMore);
                  tmp4 = closure_2(tmp);
                  return;
                }
              }
              let tmp23 = closure_6(trackAction(tmp2[11]).GameDescription, obj2);
              const tmp25 = closure_6(trackAction(tmp2[11]).GameDescription, obj2);
            } else {
              tmp23 = cResult[13];
            }
            if (cResult[14] === 3) {
              if (cResult[15] === tmp23) {
                let tmp26 = cResult[16];
              }
              if (cResult[17] === tmp15) {
                if (cResult[18] === expanded) {
                  if (cResult[19] === tmp14) {
                    if (cResult[20] === tmp8) {
                      let tmp29 = cResult[21];
                    }
                    if (cResult[22] === tmp4.container) {
                      if (cResult[23] === tmp18) {
                        if (cResult[24] === tmp26) {
                          if (cResult[25] === tmp29) {
                            let tmp33 = cResult[26];
                          }
                          return tmp33;
                        }
                      }
                    }
                    const obj3 = { style: tmp4.container, children: null };
                    const items = [, , ];
                    class E {
                      constructor() {
                        tmp = !closure_1;
                        tmp2 = trackAction;
                        GameProfileTrackActionActions = closure_0(closure_1[8]).GameProfileTrackActionActions;
                        tmp2Result = tmp2(closure_1 ? GameProfileTrackActionActions.ShowLess : GameProfileTrackActionActions.ShowMore);
                        tmp4 = closure_2(tmp);
                        return;
                      }
                    }
                    items[1] = tmp26;
                    items[2] = tmp29;
                    obj3.children = items;
                    const tmp36 = closure_7(closure_4, obj3);
                    cResult[22] = tmp4.container;
                    cResult[23] = tmp18;
                    cResult[24] = tmp26;
                    cResult[25] = tmp29;
                    cResult[26] = tmp36;
                    tmp33 = tmp36;
                  }
                }
              }
              let tmp30 = null;
              if (tmp8) {
                const obj4 = { onPress: tmp14, accessibilityRole: "button", accessibilityLabel: tmp15, accessibilityState: null, children: null };
                { expanded: null }.expanded = expanded;
                class E {
                  constructor() {
                    tmp = !closure_1;
                    tmp2 = trackAction;
                    GameProfileTrackActionActions = closure_0(closure_1[8]).GameProfileTrackActionActions;
                    tmp2Result = tmp2(closure_1 ? GameProfileTrackActionActions.ShowLess : GameProfileTrackActionActions.ShowMore);
                    tmp4 = closure_2(tmp);
                    return;
                  }
                }
                const obj6 = { variant: "text-md/medium", color: "text-brand", children: tmp15 };
                obj4.children = closure_6(trackAction(tmp2[10]).Text, obj6);
                tmp30 = closure_6(closure_5, obj4);
                const obj5 = { expanded: null };
              }
              cResult[17] = tmp15;
              class E {
                constructor() {
                  tmp = !closure_1;
                  tmp2 = trackAction;
                  GameProfileTrackActionActions = closure_0(closure_1[8]).GameProfileTrackActionActions;
                  tmp2Result = tmp2(closure_1 ? GameProfileTrackActionActions.ShowLess : GameProfileTrackActionActions.ShowMore);
                  tmp4 = closure_2(tmp);
                  return;
                }
              }
              cResult[19] = tmp14;
              cResult[20] = tmp8;
              cResult[21] = tmp30;
              tmp29 = tmp30;
            }
            const obj7 = { variant: "text-md/normal", color: "interactive-text-active", lineClamp: null, children: null };
            class E {
              constructor() {
                tmp = !closure_1;
                tmp2 = trackAction;
                GameProfileTrackActionActions = closure_0(closure_1[8]).GameProfileTrackActionActions;
                tmp2Result = tmp2(closure_1 ? GameProfileTrackActionActions.ShowLess : GameProfileTrackActionActions.ShowMore);
                tmp4 = closure_2(tmp);
                return;
              }
            }
            obj7.children = tmp23;
            const tmp28 = closure_6(trackAction(tmp2[10]).Text, obj7);
            cResult[14] = 3;
            cResult[15] = tmp23;
            cResult[16] = tmp28;
            tmp26 = tmp28;
          }
        }
        let tmp19 = null;
        if (!expanded) {
          const obj8 = { style: tmp4.measurement, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
          const obj9 = { variant: "text-md/normal", color: "interactive-text-active", onTextLayout: tmp13, children: null };
          class E {
            constructor() {
              tmp = !closure_1;
              tmp2 = trackAction;
              GameProfileTrackActionActions = closure_0(closure_1[8]).GameProfileTrackActionActions;
              tmp2Result = tmp2(closure_1 ? GameProfileTrackActionActions.ShowLess : GameProfileTrackActionActions.ShowMore);
              tmp4 = closure_2(tmp);
              return;
            }
          }
          tmp22[0] = arr;
          obj9.children = closure_6(trackAction(tmp2[11]).GameDescription, tmp22);
          obj8.children = closure_6(trackAction(tmp2[10]).Text, obj9);
          tmp19 = closure_6(closure_4, obj8);
        }
        cResult[8] = arr;
        class E {
          constructor() {
            tmp = !closure_1;
            tmp2 = trackAction;
            GameProfileTrackActionActions = closure_0(closure_1[8]).GameProfileTrackActionActions;
            tmp2Result = tmp2(closure_1 ? GameProfileTrackActionActions.ShowLess : GameProfileTrackActionActions.ShowMore);
            tmp4 = closure_2(tmp);
            return;
          }
        }
        cResult[10] = tmp4.measurement;
        cResult[11] = tmp19;
        tmp18 = tmp19;
      }
    }
    class E {
      constructor() {
        tmp = !closure_1;
        tmp2 = trackAction;
        GameProfileTrackActionActions = closure_0(closure_1[8]).GameProfileTrackActionActions;
        tmp2Result = tmp2(closure_1 ? GameProfileTrackActionActions.ShowLess : GameProfileTrackActionActions.ShowMore);
        tmp4 = closure_2(tmp);
        return;
      }
    }
    cResult[3] = expanded;
    cResult[4] = trackAction;
    cResult[5] = E;
    tmp14 = E;
  }
  const tmp7 = _slicedToArray(noop.useState(false), 2);
}) : (function GameProfileSummary(arg0) {
  ({ game, trackAction } = arg0);
  expanded = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  let tmp = closure_8();
  [expanded, _slicedToArray] = noop.useState(false);
  const tmp4 = _slicedToArray(noop.useState(false), 2);
  noop = tmp4[1];
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
  const items = [summaryLocalized];
  const memo = obj.useMemo(() => {
    if (null != summaryLocalized) {
      let parseHTMLFromTextResult = findTextStart.parseHTMLFromText(tmp);
    } else {
      parseHTMLFromTextResult = [];
    }
    return parseHTMLFromTextResult;
  }, items);
  const items1 = [expanded, trackAction];
  const callback = obj.useCallback((nativeEvent) => {
    closure_3(nativeEvent.nativeEvent.lines.length > 3);
  }, []);
  if (0 === memo.length) {
    return null;
  } else {
    const intl = trackAction(expanded[9]).intl;
    const t = trackAction(expanded[9]).t;
    const stringResult = intl.string(expanded ? t["6MwJo/"] : t.lBeKY2);
    const obj2 = { style: tmp.container, children: null };
    let tmp12 = null;
    if (!expanded) {
      const obj3 = { style: tmp.measurement, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
      const obj4 = { variant: "text-md/normal", color: "interactive-text-active", onTextLayout: callback, children: null };
      const obj5 = { runs: memo };
      obj4.children = closure_6(trackAction(tmp18[11]).GameDescription, obj5);
      obj3.children = closure_6(trackAction(tmp18[10]).Text, obj4);
      tmp12 = closure_6(tmp11, obj3);
    }
    const items2 = [tmp12, , ];
    const obj6 = { variant: "text-md/normal", color: "interactive-text-active", lineClamp: 3, children: null };
    const obj7 = { runs: memo };
    obj6.children = closure_6(trackAction(expanded[11]).GameDescription, obj7);
    items2[1] = closure_6(trackAction(expanded[10]).Text, obj6);
    let tmp14Result = null;
    if (tmp4[0]) {
      const obj8 = { onPress: tmp8, accessibilityRole: "button", accessibilityLabel: stringResult, accessibilityState: null, children: null };
      const obj9 = { expanded };
      obj8.accessibilityState = obj9;
      const obj10 = { variant: "text-md/medium", color: "text-brand", children: stringResult };
      obj8.children = closure_6(trackAction(tmp18[10]).Text, obj10);
      tmp14Result = closure_6(closure_5, obj8);
    }
    items2[2] = tmp14Result;
    obj2.children = items2;
    return closure_7(summaryLocalized, obj2);
  }
});