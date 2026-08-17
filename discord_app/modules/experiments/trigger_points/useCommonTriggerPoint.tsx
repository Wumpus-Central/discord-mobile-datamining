// discord_app/modules/experiments/trigger_points/useCommonTriggerPoint.tsx
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "noop" /* 19 */;
import closure_4 from "getHash" /* 4288 */;
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/experiments/trigger_points/useCommonTriggerPoint.tsx");

export const useCommonTriggerPoint = function useCommonTriggerPoint(OpenNitroTriggerPoint) {
  const _require = OpenNitroTriggerPoint;
  let items = [closure_4];
  const obj = _initialize;
  const items1 = [OpenNitroTriggerPoint, , ];
  [arr2[1], arr2[2]] = callback(_initialize.useStateFromStoresArray(items, () => {
    const items = [authStore.getAllUserExperimentDescriptors(), authStore.getGuildExperiments()];
    return items;
  }), 2);
  const effect = React.useEffect(() => {
    OpenNitroTriggerPoint.trigger();
  }, items1);
};