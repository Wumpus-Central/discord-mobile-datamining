// discord_app/modules/game_profile/native/components/GameProfileSummary.tsx
import GameProfileAnalyticUtils from "../../GameProfileAnalyticUtils.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, Pressable: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4560);
let closure_8 = createStyles.createStyles({ container: { flexDirection: "column" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileSummary.tsx");

export default function GameProfileSummary(arg0) {
  ({ game, trackAction } = arg0);
  _slicedToArray = undefined;
  let first1;
  const tmp2 = _slicedToArray(first1.useState(false), 2);
  const first = tmp2[0];
  _slicedToArray = tmp2[1];
  const tmp4 = _slicedToArray(first1.useState(null), 2);
  first1 = tmp4[0];
  closure_4 = tmp4[1];
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
    let obj = { style: tmp.container, children: null };
    obj = {
      variant: "text-md/normal",
      color: "interactive-text-active",
      lineClamp: num,
      onTextLayout: callback,
      children: summaryLocalized,
    };
    const items2 = [closure_6(trackAction(first[7]).Text, obj)];
    let tmp13Result = null;
    if (first1) {
      obj = { onPress: callback1, accessibilityRole: "button", accessibilityLabel: stringResult, children: null };
      const obj1 = { variant: "text-md/medium", color: "text-brand", children: stringResult };
      obj.children = tmp13(tmp16(tmp17[7]).Text, obj1);
      tmp13Result = tmp13(closure_5, obj);
    }
    items2[1] = tmp13Result;
    obj.children = items2;
    return closure_7(closure_4, obj);
  }
  tmp = closure_8();
}
