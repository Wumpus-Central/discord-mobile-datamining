// discord_app/modules/notifications/NotificationSettingsUtils.tsx
import knownExperimentConfigs from "NotificationSettingsExperiments.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import items2 from "NotificationSettingsConstants.tsx";

require = fn;
({ NOTIF_SETTING_MAPPING: c3, NOTIF_SETTINGS: c4 } = items2);
const result = require("obj132").fileFinishedImporting("modules/notifications/NotificationSettingsUtils.tsx");

export const getAssignedNotifSettingsAndMappings = function getAssignedNotifSettingsAndMappings() {
  const settings = [];
  const mappings = [];
  const set = new Set();
  const iter = dependencyMap[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = nextResult;
    if (null != nextResult.experiment) {
      let tmp7 = knownExperimentConfigs.knownExperimentConfigs[tmp3.experiment];
      if (tmp7.definition.name !== tmp3.experiment) {
        let _Error = Error;
        let _HermesInternal = HermesInternal;
        error = new Error("Experiment called " + tmp7.definition.name + " assigned to name " + nextResult.experiment);
        throw error;
      } else {
        let variations = tmp3.variations;
        continue;
      }
    }
    let arr = settings.push(tmp3);
    let addResult = set.add(tmp3.id);
    continue;
  }
  const entries = Object.entries(closure_3);
  while (tmp18 !== undefined) {
    let tmp21 = callback(tmp19, 2);
    let tmp22 = tmp21[1];
    let _parseInt = parseInt;
    let parsed = parseInt(tmp21[0]);
    for (const item10082 of tmp22) {
      if (set.has(item10082)) {
        let obj = { notifType: null, notifSetting: null };
        obj[0] = parsed;
        obj[1] = item10082;
        arr = mappings.push(obj);
        obj3.return();
        break;
      }
      continue;
    }
    continue;
  }
  return { settings, mappings };
};