// === Module 9382: GameProfileSummary ===

// Module 9382 (GameProfileSummary)
import findTextStart from "findTextStart" /* 9384 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, Pressable: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5009);
let closure_7 = createStyles.createStyles({ container: { flexDirection: "column", overflow: "hidden" }, measurement: { position: "absolute", top: 0, left: 0, right: 0, opacity: 0 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileSummary.tsx");

export default function GameProfileSummary(arg0) {
  ({ game, trackAction } = arg0);
  setHasOverflow = undefined;
  let description;
  const tmp = closure_7();
  const gameProfileSummaryExpansion = setHasOverflow(description[4]).useGameProfileSummaryExpansion(trackAction);
  ({ isExpanded, setHasOverflow } = gameProfileSummaryExpansion);
  description = game.summaryLocalized;
  ({ showToggle, toggleExpanded } = gameProfileSummaryExpansion);
  if (description == null) {
    description = game.description;
  }
  const items = [description];
  const memo = noop.useMemo(() => {
    if (null != description) {
      let parseHTMLFromTextResult = findTextStart.parseHTMLFromText(tmp, { parseTextLinks: true });
    } else {
      parseHTMLFromTextResult = [];
    }
    return parseHTMLFromTextResult;
  }, items);
  [][0] = setHasOverflow;
  if (0 === memo.length) {
    return null;
  } else {
    const intl = tmp2(tmp3[6]).intl;
    const t = tmp2(tmp3[6]).t;
    const stringResult = intl.string(isExpanded ? t["6MwJo/"] : t.lBeKY2);
    const obj2 = { style: tmp.container, children: null };
    let tmp9 = null;
    if (!isExpanded) {
      const obj3 = { style: tmp.measurement, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
      const obj4 = { variant: "text-md/normal", color: "interactive-text-active", onTextLayout: tmp5, children: null };
      const obj5 = { runs: memo, trackAction };
      obj4.children = closure_5(tmp2(tmp3[8]).GameDescription, obj5);
      obj3.children = closure_5(tmp2(tmp3[7]).Text, obj4);
      tmp9 = closure_5(closure_3, obj3);
    }
    const items1 = [tmp9, , ];
    const obj6 = { variant: "text-md/normal", color: "interactive-text-active", lineClamp: 3, children: null };
    const obj7 = { runs: memo, trackAction };
    obj6.children = closure_5(tmp2(tmp3[8]).GameDescription, obj7);
    items1[1] = closure_5(tmp2(tmp3[7]).Text, obj6);
    let tmp11Result = null;
    if (showToggle) {
      const obj8 = { onPress: toggleExpanded, accessibilityRole: "button", accessibilityLabel: stringResult, accessibilityState: null, children: null };
      const obj9 = { expanded: isExpanded };
      obj8.accessibilityState = obj9;
      const obj10 = { variant: "text-md/medium", color: "text-brand", children: stringResult };
      obj8.children = closure_5(tmp2(tmp3[7]).Text, obj10);
      tmp11Result = closure_5(closure_4, obj8);
    }
    items1[2] = tmp11Result;
    obj2.children = items1;
    return closure_6(closure_3, obj2);
  }
  let obj = setHasOverflow(description[4]);
};