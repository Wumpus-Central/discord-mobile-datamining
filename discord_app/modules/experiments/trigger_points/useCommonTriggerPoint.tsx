// discord_app/modules/experiments/trigger_points/useCommonTriggerPoint.tsx
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ExperimentStore from "../ExperimentStore.tsx";

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/experiments/trigger_points/useCommonTriggerPoint.tsx");

export const useCommonTriggerPoint = function useCommonTriggerPoint(OpenNitroTriggerPoint) {
  _require = OpenNitroTriggerPoint;
  let items = [ExperimentStore];
  const obj = require("initialize");
  const items1 = [OpenNitroTriggerPoint, ,];
  [arr2[1], arr2[2]] = _slicedToArray(
    require("initialize").useStateFromStoresArray(items, () => {
      const items = [authStore.getAllUserExperimentDescriptors(), authStore.getGuildExperiments()];
      return items;
    }),
    2,
  );
  const effect = noop.useEffect(() => {
    OpenNitroTriggerPoint.trigger();
  }, items1);
};
