// === Module 12460: useCommonTriggerPoint ===

// Module 12460 (useCommonTriggerPoint)
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import getHash from "getHash";

const require = arg1;
const result = require("getHash").fileFinishedImporting("modules/experiments/trigger_points/useCommonTriggerPoint.tsx");

export const useCommonTriggerPoint = function useCommonTriggerPoint(OpenNitroTriggerPoint) {
  const _require = OpenNitroTriggerPoint;
  let items = [getHash];
  const obj = _require(589);
  const items1 = [OpenNitroTriggerPoint, , ];
  [arr2[1], arr2[2]] = callback(_require(589).useStateFromStoresArray(items, () => {
    const items = [authStore.getAllUserExperimentDescriptors(), authStore.getGuildExperiments()];
    return items;
  }), 2);
  const effect = React.useEffect(() => {
    OpenNitroTriggerPoint.trigger();
  }, items1);
};