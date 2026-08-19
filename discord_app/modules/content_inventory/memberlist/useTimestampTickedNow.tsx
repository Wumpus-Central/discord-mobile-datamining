// discord_app/modules/content_inventory/memberlist/useTimestampTickedNow.tsx
import obj132Default from "../../../utils/Durations.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../_runtime/00019_noop.js";
import maybeApplyNoTextColorForLightCustomTheme from "../../a11y/AccessibilityStore.tsx";

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
  let stateFromStores = require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => useReducedMotion.useReducedMotion);
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