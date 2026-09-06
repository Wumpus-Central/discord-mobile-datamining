// discord_app/modules/tooltip/useCanShowTooltip.tsx
import TooltipActionCreatorsDefault from "TooltipActionCreators.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import TooltipStore from "TooltipStore.tsx";

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/tooltip/useCanShowTooltip.tsx");

export const useCanShowTooltip = function useCanShowTooltip(SCREENSHARE_SWIPE_UP_CONTROLS, arg1) {
  _require = SCREENSHARE_SWIPE_UP_CONTROLS;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let flag2 = arg2;
  if (arg2 === undefined) {
    flag2 = true;
  }
  const items = [TooltipStore];
  const items1 = [flag2, flag, SCREENSHARE_SWIPE_UP_CONTROLS];
  const stateFromStores = require("initialize").useStateFromStores(
    items,
    () => TooltipStore.canShowTooltip(closure_0) && flag2,
  );
  const effect = noop.useEffect(() => {
    if (flag2) {
      TooltipActionCreatorsDefault.attemptToShowTooltip(closure_0, flag);
    }
  }, items1);
  return stateFromStores;
};
