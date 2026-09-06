// === Module 13410: useCommonTriggerPoint ===

// Module 13410 (useCommonTriggerPoint)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ExperimentStore from "ExperimentStore" /* 4476 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/experiments/trigger_points/useCommonTriggerPoint.tsx");

export const useCommonTriggerPoint = function useCommonTriggerPoint(OpenNitroTriggerPoint) {
  _require = OpenNitroTriggerPoint;
  let items = [ExperimentStore];
  const obj = require("initialize");
  const items1 = [OpenNitroTriggerPoint, , ];
  [arr2[1], arr2[2]] = _slicedToArray(require("initialize").useStateFromStoresArray(items, () => {
    const items = [authStore.getAllUserExperimentDescriptors(), authStore.getGuildExperiments()];
    return items;
  }), 2);
  const effect = noop.useEffect(() => {
    OpenNitroTriggerPoint.trigger();
  }, items1);
};