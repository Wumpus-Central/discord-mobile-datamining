// === Module 8184: GameProfileSummary ===

// Module 8184 (GameProfileSummary)
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8131 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, Pressable: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4829);
let closure_8 = createStyles.createStyles({ container: { flexDirection: "column" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileSummary.tsx");

export default function GameProfileSummary(arg0) {
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
    const intl = trackAction(first[6]).intl;
    const t = trackAction(first[6]).t;
    const stringResult = intl.string(first ? t["6MwJo/"] : t.lBeKY2);
    const obj = { style: tmp.container, children: null };
    const obj2 = { variant: "text-md/normal", color: "interactive-text-active", lineClamp: num, onTextLayout: callback, children: summaryLocalized };
    const items2 = [closure_6(trackAction(first[7]).Text, obj2), ];
    let tmp13Result = null;
    if (first1) {
      const obj3 = { onPress: callback1, accessibilityRole: "button", accessibilityLabel: stringResult, children: null };
      const obj4 = { variant: "text-md/medium", color: "text-brand", children: stringResult };
      obj3.children = closure_6(trackAction(tmp17[7]).Text, obj4);
      tmp13Result = closure_6(closure_5, obj3);
    }
    items2[1] = tmp13Result;
    obj.children = items2;
    return closure_7(closure_4, obj);
  }
  tmp = closure_8();
};