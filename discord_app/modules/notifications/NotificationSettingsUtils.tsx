// discord_app/modules/notifications/NotificationSettingsUtils.tsx
import knownExperimentConfigs from "NotificationSettingsExperiments.tsx";
import closure_2 from "../../../_runtime/metro/00032__slicedToArray.js";
import closure_3 from "../../../_runtime/00019_noop.js";
import items2 from "NotificationSettingsConstants.tsx";

require = arg1;
function getNamedExperiment(experiment) {
  const tmp = knownExperimentConfigs.knownExperimentConfigs[experiment];
  if (tmp.definition.name !== experiment) {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    error = new Error("Experiment called " + tmp.definition.name + " assigned to name " + experiment);
    throw error;
  } else {
    return tmp;
  }
}
({ NOTIF_SETTING_MAPPING: c4, NOTIF_SETTINGS: c5 } = items2);
const result = require("set").fileFinishedImporting("modules/notifications/NotificationSettingsUtils.tsx");

export const getAssignedNotifSettingsAndMappings = function getAssignedNotifSettingsAndMappings() {
  const settings = [];
  const mappings = [];
  const set = new Set();
  const iter = dependencyMap[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = nextResult;
    if (null != nextResult.experiment) {
      let tmp4 = getNamedExperiment;
      let tmp5 = nextResult;
      let obj2 = getNamedExperiment(tmp3.experiment);
      let variations = tmp3.variations;
      continue;
    }
    let tmp6 = nextResult;
    let arr = settings.push(tmp3);
    let addResult = set.add(tmp3.id);
    continue;
  }
  const entries = Object.entries(closure_4);
  while (tmp10 !== undefined) {
    let tmp12 = callback;
    let tmp13 = callback(tmp11, 2);
    let tmp14 = tmp13[1];
    let _parseInt = parseInt;
    let parsed = parseInt(tmp13[0]);
    let tmp16 = tmp14;
    let tmp17 = tmp14;
    for (const item10059 of tmp14) {
      let tmp18 = item10059;
      if (set.has(item10059)) {
        let obj = { notifType: null, notifSetting: null };
        let tmp19 = parsed;
        obj[0] = parsed;
        let tmp20 = item10059;
        obj[1] = tmp18;
        arr = mappings.push(obj);
        let tmp22 = obj3;
        obj3.return();
        break;
      }
      continue;
    }
    continue;
  }
  return { settings, mappings };
};
export const useNotifSettingVisibility = function useNotifSettingVisibility(GAMING_DEFAULT) {
  const _require = GAMING_DEFAULT;
  const items = [GAMING_DEFAULT];
  const memo = React.useMemo(
    () =>
      (function getExperimentAndConfigBySettingId(closure_0) {
        const iter = dependencyMap[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          if (nextResult.id === closure_0) {
            let tmp4 = nextResult;
            if (null != tmp3.experiment) {
              let obj = { experiment: null, variations: null };
              let tmp5 = callback;
              let num = 0;
              obj[0] = callback(nextResult.experiment);
              obj[1] = nextResult.variations;
              let tmp6 = iter;
              iter.return();
              return obj;
            }
          }
          continue;
        }
        return {};
      })(closure_0),
    items,
  );
  const experiment = memo.experiment;
  const items1 = [_require(experiment[5]).ApexExperimentStore];
  const items2 = [experiment];
  const stateFromStores = _require(experiment[4]).useStateFromStores(
    items1,
    () => {
      let config;
      if (experiment != null) {
        config = experiment.getConfig({ location: "useNotifSettingVisibility" });
      }
      return config;
    },
    items2,
  );
  return false;
};
