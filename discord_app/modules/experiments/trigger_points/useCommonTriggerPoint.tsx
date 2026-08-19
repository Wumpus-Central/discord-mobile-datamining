// discord_app/modules/experiments/trigger_points/useCommonTriggerPoint.tsx
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../_runtime/00019_noop.js";
import getHash from "../ExperimentStore.tsx";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/experiments/trigger_points/useCommonTriggerPoint.tsx");

export const useCommonTriggerPoint = function useCommonTriggerPoint(OpenNitroTriggerPoint) {
  const _require = OpenNitroTriggerPoint;
  let items = [closure_4];
  const obj = initialize;
  const items1 = [OpenNitroTriggerPoint, , ];
  [arr2[1], arr2[2]] = callback(require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStoresArray(items, () => {
    const items = [authStore.getAllUserExperimentDescriptors(), authStore.getGuildExperiments()];
    return items;
  }), 2);
  const effect = React.useEffect(() => {
    OpenNitroTriggerPoint.trigger();
  }, items1);
};