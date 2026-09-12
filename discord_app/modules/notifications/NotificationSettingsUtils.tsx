// === Module 14538: notifications/NotificationSettingsUtils ===

// Module 14538 (notifications/NotificationSettingsUtils)
import NotificationSettingsExperiments from "NotificationSettingsExperiments" /* 14539 */;
import DeclarativeNotificationSettingsRedesignExperiment from "DeclarativeNotificationSettingsRedesignExperiment" /* 14540 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function getNamedExperiment(experiment) {
  const tmp = NotificationSettingsExperiments.knownExperimentConfigs[experiment];
  if (tmp.definition.name !== experiment) {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("Experiment called " + tmp.definition.name + " assigned to name " + experiment);
    throw error;
  } else {
    return tmp;
  }
}
const NotificationSettingsConstants = fn(14532);
({ NOTIF_SETTING_MAPPING: closure_4, NOTIF_SETTINGS: hasOwnProperty } = NotificationSettingsConstants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/notifications/NotificationSettingsUtils.tsx");

export const getAssignedNotifSettingsAndMappings = function getAssignedNotifSettingsAndMappings() {
  const settings = [];
  const mappings = [];
  let obj = DeclarativeNotificationSettingsRedesignExperiment;
  const result = obj.isDeclarativeNotificationSettingsRedesignEnabled("getAssignedNotifSettingsAndMappings");
  const set = new Set();
  const iter = dependencyMap[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp4 = nextResult;
    let redesignState = nextResult.redesignState;
    if (null == redesignState) {
      if (null != tmp4.experiment) {
        let obj3 = getNamedExperiment(tmp4.experiment);
        let variations = tmp4.variations;
        continue;
      }
      let arr = settings.push(tmp4);
      let addResult = set.add(tmp4.id);
    }
    continue;
  }
  const entries = Object.entries(React4);
  while (tmp14 !== undefined) {
    let tmp17 = _slicedToArray(tmp15, 2);
    let tmp18 = tmp17[1];
    let _parseInt = parseInt;
    let parsed = parseInt(tmp17[0]);
    for (const item10071 of tmp18) {
      if (set.has(item10071)) {
        obj = { notifType: null, notifSetting: null };
        obj.notifType = parsed;
        obj.notifSetting = item10071;
        arr = mappings.push(obj);
        obj4.return();
        break;
      }
      continue;
    }
    continue;
  }
  return { settings, mappings };
};
export const useIsDeclarativeSettingsUIAvailable = function useIsDeclarativeSettingsUIAvailable(AndroidMessageNotificationsSetting) {
  return DeclarativeNotificationSettingsRedesignExperiment.useIsDeclarativeNotificationSettingsRedesignEnabled("useIsDeclarativeSettingsUIAvailable:" + AndroidMessageNotificationsSetting);
};
export const useNotifCategoryVisibility = function useNotifCategoryVisibility(CATEGORY_OTHER) {
  return DeclarativeNotificationSettingsRedesignExperiment.useIsDeclarativeNotificationSettingsRedesignEnabled("useIsDeclarativeSettingsUIAvailable:" + CATEGORY_OTHER);
};
export const useNotifSettingVisibility = function useNotifSettingVisibility(GAMING_DEFAULT) {
  _require = GAMING_DEFAULT;
  const items = [GAMING_DEFAULT];
  const memo = noop.useMemo(() => (function getExperimentAndConfigBySettingId(arg0) {
    const iter = dependencyMap[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      if (nextResult.id === arg0) {
        let redesignState = tmp3.redesignState;
        if (null != tmp3.experiment) {
          let obj = { redesignState, experiment: null, variations: null };
          obj.experiment = closure_1_6(nextResult.experiment);
          obj.variations = nextResult.variations;
          iter.return();
          return obj;
        } else if (null != redesignState) {
          obj = { redesignState: null };
          obj.redesignState = redesignState;
          iter.return();
          return obj;
        }
      }
      continue;
    }
    return {};
  })(closure_0), items);
  const experiment = memo.experiment;
  const variations = memo.variations;
  const items1 = [require("ApexExperiment").ApexExperimentStore];
  const items2 = [experiment];
  const stateFromStores = require("initialize").useStateFromStores(items1, () => {
    let config;
    if (experiment != null) {
      config = experiment.getConfig({ location: "useNotifSettingVisibility" });
    }
    return config;
  }, items2);
  let obj = require("initialize");
  let isDeclarativeNotificationSettingsRedesignEnabled = require("DeclarativeNotificationSettingsRedesignExperiment").useIsDeclarativeNotificationSettingsRedesignEnabled("useIsDeclarativeSettingsUIAvailable:" + "useNotifSettingVisibility");
  if (isDeclarativeNotificationSettingsRedesignEnabled) {
    let tmp4 = false !== memo.redesignState;
    if (tmp4) {
      tmp4 = null == stateFromStores || null == variations || variations.includes(stateFromStores.variation);
      let tmp6 = null == stateFromStores || null == variations || variations.includes(stateFromStores.variation);
    }
    isDeclarativeNotificationSettingsRedesignEnabled = tmp4;
  }
  return isDeclarativeNotificationSettingsRedesignEnabled;
};