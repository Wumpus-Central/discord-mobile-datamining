// === Module 10820: useCanShowTooltip ===

// Module 10820 (useCanShowTooltip)
import noop from "noop";
import set from "set";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/tooltip/useCanShowTooltip.tsx");

export const useCanShowTooltip = function useCanShowTooltip(SCREENSHARE_SWIPE_UP_CONTROLS, arg1) {
  const _require = SCREENSHARE_SWIPE_UP_CONTROLS;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let flag2 = arg2;
  if (arg2 === undefined) {
    flag2 = true;
  }
  const items = [set];
  const items1 = [flag2, flag, SCREENSHARE_SWIPE_UP_CONTROLS];
  const stateFromStores = _require(flag2[2]).useStateFromStores(items, () => outer1_4.canShowTooltip(closure_0) && flag2);
  const effect = React.useEffect(() => {
    if (flag2) {
      flag(flag2[3]).attemptToShowTooltip(closure_0, flag);
      const obj = flag(flag2[3]);
    }
  }, items1);
  return stateFromStores;
};