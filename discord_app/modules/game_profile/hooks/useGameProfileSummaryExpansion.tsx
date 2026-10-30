// === Module 9383: useGameProfileSummaryExpansion ===

// Module 9383 (useGameProfileSummaryExpansion)
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9320 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileSummaryExpansion.tsx");

export function useGameProfileSummaryExpansion(trackAction) {
  [first, _slicedToArray] = callback1.useState("full");
  const items = [trackAction, first];
  const callback = callback1.useCallback((arg0) => {
    closure_0 = arg0;
    closure_2((arg0) => {
      let tmp = arg0;
      if ("expanded" !== arg0) {
        let str = "full";
        if (closure_0) {
          str = "collapsed";
        }
        tmp = str;
      }
      return tmp;
    });
  }, []);
  callback1 = callback1.useCallback((arg0) => {
    let str = "collapsed";
    if (arg0) {
      str = "expanded";
    }
    if (tmp) {
      const GameProfileTrackActionActions = GameProfileAnalyticUtils.GameProfileTrackActionActions;
      trackAction(arg0 ? GameProfileTrackActionActions.ShowMore : GameProfileTrackActionActions.ShowLess);
      closure_2(str);
    }
    tmp = "full" !== first && first !== str;
  }, items);
  const items1 = [callback1, first];
  return { isCollapsed: "collapsed" === first, isExpanded: "expanded" === first, showToggle: "full" !== first, setHasOverflow: callback, setExpanded: callback1, toggleExpanded: callback1.useCallback(() => callback1("expanded" !== first), items1) };
}