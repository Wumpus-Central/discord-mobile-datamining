// === Module 12103: useTimestampTickedNow ===

// Module 12103 (useTimestampTickedNow)
import obj132Default from "obj132" /* 687 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme" /* 4662 */;

const require = fn;
let result = require("obj132").fileFinishedImporting("modules/content_inventory/memberlist/useTimestampTickedNow.tsx");

export const useTimestampTickedNow = function useTimestampTickedNow() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  ({ isAppFocused, hovered } = obj);
  if (isAppFocused === undefined) {
    isAppFocused = true;
  }
  importDefault = undefined;
  const now = callback(React.useState(() => {
    const timestamp = Date.now();
    const rounded = Math.floor(timestamp / _undefined(687).Millis.SECOND);
    return rounded * _undefined(687).Millis.SECOND;
  }), 2);
  const _require = now[1];
  const items = [closure_5];
  let stateFromStores = _require(589).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let slowTickMode = !isAppFocused;
  if (isAppFocused) {
    if (stateFromStores) {
      stateFromStores = !hovered;
    }
    slowTickMode = stateFromStores;
  }
  const SECOND = obj132Default.Millis.SECOND;
  if (slowTickMode) {
    let result = 15 * SECOND;
  } else {
    result = SECOND;
  }
  importDefault = result;
  const items1 = [result];
  const effect = React.useEffect(() => {
    const interval = new callback(dependencyMap[5]).Interval();
    interval.start(c1, () => {
      const timestamp = Date.now();
      const rounded = Math.floor(timestamp / closure_1_1(closure_1_2[3]).Millis.SECOND);
      interval(rounded * closure_1_1(closure_1_2[3]).Millis.SECOND);
    });
    return () => interval.stop();
  }, items1);
  return { now: now[0], slowTickMode };
};