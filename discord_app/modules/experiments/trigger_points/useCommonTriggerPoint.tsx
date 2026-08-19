// === Module 12846: useCommonTriggerPoint ===

// Module 12846 (useCommonTriggerPoint)
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import getHash from "getHash" /* 4288 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/experiments/trigger_points/useCommonTriggerPoint.tsx");

export const useCommonTriggerPoint = function useCommonTriggerPoint(OpenNitroTriggerPoint) {
  const _require = OpenNitroTriggerPoint;
  let items = [closure_4];
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