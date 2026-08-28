// === Module 9337: useTimestampTickedNow ===

// Module 9337 (useTimestampTickedNow)
import setDefault from "set" /* 687 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import closure_5 from "maybeApplyNoTextColorForLightCustomTheme" /* 4438 */;

const require = arg1;
let result = require("set").fileFinishedImporting("modules/content_inventory/memberlist/useTimestampTickedNow.tsx");

export const useTimestampTickedNow = function useTimestampTickedNow() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  ({ isAppFocused, hovered } = obj);
  if (isAppFocused === undefined) {
    isAppFocused = true;
  }
  let _require;
  importDefault = undefined;
  const now = callback(React.useState(() => {
    const timestamp = Date.now();
    const rounded = Math.floor(timestamp / _undefined(687).Millis.SECOND);
    return rounded * _undefined(687).Millis.SECOND;
  }), 2);
  _require = now[1];
  const items = [closure_5];
  let stateFromStores = _require(589).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let slowTickMode = !isAppFocused;
  if (isAppFocused) {
    if (stateFromStores) {
      stateFromStores = !hovered;
    }
    slowTickMode = stateFromStores;
  }
  const SECOND = setDefault.Millis.SECOND;
  if (slowTickMode) {
    let result = 15 * SECOND;
  } else {
    result = SECOND;
  }
  importDefault = result;
  const items1 = [result];
  const effect = React.useEffect(() => {
    const interval = new callback(closure_1_2[5]).Interval();
    interval.start(c1, () => {
      const timestamp = Date.now();
      const rounded = Math.floor(timestamp / closure_1_1(closure_1_2[3]).Millis.SECOND);
      interval(rounded * closure_1_1(closure_1_2[3]).Millis.SECOND);
    });
    return () => interval.stop();
  }, items1);
  return { now: now[0], slowTickMode };
};