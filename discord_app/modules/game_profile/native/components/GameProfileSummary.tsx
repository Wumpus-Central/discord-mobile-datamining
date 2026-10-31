// === Module 9402: GameProfileSummary ===

// Module 9402 (GameProfileSummary)
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9340 */;
import findTextStart from "findTextStart" /* 9404 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, Pressable: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5014);
let closure_7 = createStyles.createStyles({ container: { flexDirection: "column", overflow: "hidden" }, measurement: { position: "absolute", top: 0, left: 0, right: 0, opacity: 0 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileSummary.tsx");

export default function GameProfileSummary(arg0) {
  ({ game, trackAction } = arg0);
  setHasOverflow = undefined;
  const tmp = closure_7();
  const gameProfileSummaryExpansion = trackAction(setHasOverflow[4]).useGameProfileSummaryExpansion(trackAction);
  ({ isExpanded, setHasOverflow } = gameProfileSummaryExpansion);
  let description = game.summaryLocalized;
  ({ showToggle, toggleExpanded } = gameProfileSummaryExpansion);
  if (description == null) {
    description = game.description;
  }
  const items = [description];
  const memo = description.useMemo(() => {
    if (null != description) {
      let parseHTMLFromTextResult = findTextStart.parseHTMLFromText(tmp, { parseTextLinks: true });
    } else {
      parseHTMLFromTextResult = [];
    }
    return parseHTMLFromTextResult;
  }, items);
  const items1 = [trackAction];
  const callback = description.useCallback(() => {
    trackAction(GameProfileAnalyticUtils.GameProfileTrackActionActions.ClickDescriptionLink);
  }, items1);
  [][0] = setHasOverflow;
  if (0 === memo.length) {
    return null;
  } else {
    const intl = trackAction(tmp3[7]).intl;
    const t = trackAction(tmp3[7]).t;
    const stringResult = intl.string(isExpanded ? t["6MwJo/"] : t.lBeKY2);
    const obj2 = { style: tmp.container, children: null };
    let tmp10 = null;
    if (!isExpanded) {
      const obj3 = { style: tmp.measurement, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
      const obj4 = { variant: "text-md/normal", color: "interactive-text-active", onTextLayout: tmp6, children: null };
      const obj5 = { runs: memo, onLinkPress: callback };
      obj4.children = closure_5(trackAction(tmp3[9]).HTMLText, obj5);
      obj3.children = closure_5(trackAction(tmp3[8]).Text, obj4);
      tmp10 = closure_5(closure_3, obj3);
    }
    const items2 = [tmp10, , ];
    const obj6 = { variant: "text-md/normal", color: "interactive-text-active", lineClamp: 3, children: null };
    const obj7 = { runs: memo, onLinkPress: callback };
    obj6.children = closure_5(trackAction(tmp3[9]).HTMLText, obj7);
    items2[1] = closure_5(trackAction(tmp3[8]).Text, obj6);
    let tmp12Result = null;
    if (showToggle) {
      const obj8 = { onPress: toggleExpanded, accessibilityRole: "button", accessibilityLabel: stringResult, accessibilityState: null, children: null };
      const obj9 = { expanded: isExpanded };
      obj8.accessibilityState = obj9;
      const obj10 = { variant: "text-md/medium", color: "text-brand", children: stringResult };
      obj8.children = closure_5(trackAction(tmp3[8]).Text, obj10);
      tmp12Result = closure_5(closure_4, obj8);
    }
    items2[2] = tmp12Result;
    obj2.children = items2;
    return closure_6(closure_3, obj2);
  }
  let obj = trackAction(setHasOverflow[4]);
};