// discord_app/modules/content_inventory/memberlist/useTimestampTickedNow.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";
import { set } from "../../../utils/Durations.tsx";

const require = arg1;
let result = require("maybeApplyNoTextColorForLightCustomTheme").fileFinishedImporting("modules/content_inventory/memberlist/useTimestampTickedNow.tsx");

export const useTimestampTickedNow = function useTimestampTickedNow() {
  let hovered;
  let isAppFocused;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  ({ isAppFocused, hovered } = obj);
  if (isAppFocused === undefined) {
    isAppFocused = true;
  }
  let _require;
  let importDefault;
  const now = callback(React.useState(() => {
    const timestamp = Date.now();
    const rounded = Math.floor(timestamp / _undefined(687).Millis.SECOND);
    return rounded * _undefined(687).Millis.SECOND;
  }), 2);
  _require = now[1];
  const items = [maybeApplyNoTextColorForLightCustomTheme];
  let stateFromStores = _initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let slowTickMode = !isAppFocused;
  if (isAppFocused) {
    if (stateFromStores) {
      stateFromStores = !hovered;
    }
    slowTickMode = stateFromStores;
  }
  const SECOND = set.Millis.SECOND;
  if (slowTickMode) {
    let result = 15 * SECOND;
  } else {
    result = SECOND;
  }
  importDefault = result;
  const items1 = [result];
  const effect = React.useEffect(() => {
    const interval = new callback(outer1_2[5]).Interval();
    interval.start(c1, () => {
      const timestamp = Date.now();
      const rounded = Math.floor(timestamp / outer1_1(outer1_2[3]).Millis.SECOND);
      interval(rounded * outer1_1(outer1_2[3]).Millis.SECOND);
    });
    return () => interval.stop();
  }, items1);
  return { now: now[0], slowTickMode };
};