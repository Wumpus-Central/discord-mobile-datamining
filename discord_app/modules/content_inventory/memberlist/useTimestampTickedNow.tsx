// discord_app/modules/content_inventory/memberlist/useTimestampTickedNow.tsx
import DurationsDefault from "../../../utils/Durations.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";

const require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/content_inventory/memberlist/useTimestampTickedNow.tsx");

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
  const now = _slicedToArray(
    noop.useState(() => {
      const timestamp = Date.now();
      const rounded = Math.floor(timestamp / _undefined(1090).Millis.SECOND);
      return rounded * _undefined(1090).Millis.SECOND;
    }),
    2,
  );
  _require = now[1];
  const items = [AccessibilityStore];
  let stateFromStores = require("initialize").useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let slowTickMode = !isAppFocused;
  if (isAppFocused) {
    if (stateFromStores) {
      stateFromStores = !hovered;
    }
    slowTickMode = stateFromStores;
  }
  const SECOND = DurationsDefault.Millis.SECOND;
  if (slowTickMode) {
    let result = 15 * SECOND;
  } else {
    result = SECOND;
  }
  importDefault = result;
  const items1 = [result];
  const effect = noop.useEffect(() => {
    const interval = new closure_0(4447).Interval();
    interval.start(c1, () => {
      const timestamp = Date.now();
      const rounded = Math.floor(timestamp / c1(1090).Millis.SECOND);
      interval(rounded * c1(1090).Millis.SECOND);
    });
    return () => interval.stop();
  }, items1);
  return { now: now[0], slowTickMode };
};
