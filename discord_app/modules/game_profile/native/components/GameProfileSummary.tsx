import _slicedToArray from "_slicedToArray";
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
let closure_6;
let error;
const require = arg1;
({ View: c4, Pressable: c5 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
let closure_8 = createCacheKey.createStyles({ container: { flexDirection: "column" } });
const result = require("get ActivityIndicator").fileFinishedImporting("modules/game_profile/native/components/GameProfileSummary.tsx");

export default function GameProfileSummary(arg0) {
  let game;
  let trackAction;
  ({ game, trackAction } = arg0);
  let first;
  let callback;
  let first1;
  let closure_4;
  const tmp2 = callback(first1.useState(false), 2);
  first = tmp2[0];
  callback = tmp2[1];
  const tmp4 = callback(first1.useState(null), 2);
  first1 = tmp4[0];
  closure_4 = tmp4[1];
  const items = [first1];
  const items1 = [first, trackAction];
  callback = first1.useCallback((nativeEvent) => {
    if (null == first1) {
      callback2(nativeEvent.nativeEvent.lines.length > 3);
    }
  }, items);
  let summaryLocalized;
  const callback1 = first1.useCallback(() => {
    const GameProfileTrackActionActions = trackAction(first[5]).GameProfileTrackActionActions;
    trackAction(first ? GameProfileTrackActionActions.ShowLess : GameProfileTrackActionActions.ShowMore);
    callback(!first);
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
    let obj = { style: null, children: null };
    obj[0] = tmp.container;
    obj = { variant: "text-md/normal", color: "interactive-text-active", lineClamp: null, onTextLayout: null, children: null };
    obj[2] = num;
    obj[3] = callback;
    obj[4] = summaryLocalized;
    const items2 = [closure_6(trackAction(first[7]).Text, obj), ];
    let tmp13Result = null;
    if (first1) {
      obj = { onPress: null, accessibilityRole: "button", accessibilityLabel: null, children: null };
      obj[0] = callback1;
      obj[2] = stringResult;
      const obj1 = { variant: "text-md/medium", color: "text-brand", children: null };
      obj1[2] = stringResult;
      obj[3] = tmp13(tmp16(tmp17[7]).Text, obj1);
      tmp13Result = tmp13(closure_5, obj);
    }
    items2[1] = tmp13Result;
    obj[1] = items2;
    return closure_7(closure_4, obj);
  }
  tmp = callback2();
};