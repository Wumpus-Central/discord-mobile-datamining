import { knownExperimentConfigs } from "NotificationSettingsExperiments.tsx";
// discord_app/modules/notifications/NotificationSettingsUtils.tsx
import _slicedToArray from "_slicedToArray";
import items2 from "items2";

let c3;
let c4;
const require = arg1;
({ NOTIF_SETTING_MAPPING: c3, NOTIF_SETTINGS: c4 } = items2);
const result = require("knownExperimentConfigs").fileFinishedImporting("modules/notifications/NotificationSettingsUtils.tsx");

export const getAssignedNotifSettingsAndMappings = function getAssignedNotifSettingsAndMappings() {
  const settings = [];
  const mappings = [];
  const set = new Set();
  const iter = dependencyMap[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = nextResult;
    if (null != nextResult.experiment) {
      let tmp4 = require;
      let tmp5 = dependencyMap;
      let tmp6 = nextResult;
      let tmp7 = knownExperimentConfigs /* knownExperimentConfigs */.knownExperimentConfigs[tmp3.experiment];
      let obj2 = tmp7;
      if (tmp7.definition.name !== tmp3.experiment) {
        let _Error = Error;
        let _HermesInternal = HermesInternal;
        let str = " assigned to name ";
        let str2 = "Experiment called ";
        let tmp13 = new.target;
        let tmp14 = new.target;
        let error = new Error("Experiment called " + tmp7.definition.name + " assigned to name " + nextResult.experiment);
        let tmp16 = error;
        throw error;
      } else {
        let tmp8 = tmp7;
        let tmp9 = nextResult;
        let variations = tmp3.variations;
        continue;
      }
    }
    let tmp10 = nextResult;
    let arr = settings.push(tmp3);
    let addResult = set.add(tmp3.id);
    continue;
  }
  const entries = Object.entries(closure_3);
  while (tmp18 !== undefined) {
    let tmp20 = callback;
    let tmp21 = callback(tmp19, 2);
    let tmp22 = tmp21[1];
    let _parseInt = parseInt;
    let parsed = parseInt(tmp21[0]);
    let tmp24 = tmp22;
    let tmp25 = tmp22;
    for (const item10082 of tmp22) {
      let tmp26 = item10082;
      if (set.has(item10082)) {
        let obj = { notifType: null, notifSetting: null };
        let tmp27 = parsed;
        obj[0] = parsed;
        let tmp28 = item10082;
        obj[1] = tmp26;
        arr = mappings.push(obj);
        let tmp30 = obj3;
        obj3.return();
        break;
      }
      continue;
    }
    continue;
  }
  return { settings, mappings };
};