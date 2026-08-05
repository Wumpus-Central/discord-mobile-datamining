import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";
// discord_app/modules/experiments/trigger_points/useCommonTriggerPoint.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import getHash from "getHash";

const require = arg1;
const result = require("getHash").fileFinishedImporting("modules/experiments/trigger_points/useCommonTriggerPoint.tsx");

export const useCommonTriggerPoint = function useCommonTriggerPoint(OpenNitroTriggerPoint) {
  const _require = OpenNitroTriggerPoint;
  let items = [getHash];
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