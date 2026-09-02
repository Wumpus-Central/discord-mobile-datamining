// === Module 13293: useCommonTriggerPoint ===

// Module 13293 (useCommonTriggerPoint)
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "noop" /* 19 */;
import closure_4 from "getHash" /* 4391 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/experiments/trigger_points/useCommonTriggerPoint.tsx");

export const useCommonTriggerPoint = function useCommonTriggerPoint(OpenNitroTriggerPoint) {
  const _require = OpenNitroTriggerPoint;
  let items = [closure_4];
  const obj = _require(586);
  const items1 = [OpenNitroTriggerPoint, , ];
  [arr2[1], arr2[2]] = callback(_require(586).useStateFromStoresArray(items, () => {
    const items = [authStore.getAllUserExperimentDescriptors(), authStore.getGuildExperiments()];
    return items;
  }), 2);
  const effect = React.useEffect(() => {
    OpenNitroTriggerPoint.trigger();
  }, items1);
};