// discord_app/modules/notifications/NotificationSettingsUtils.tsx
import NotificationSettingsExperiments from "NotificationSettingsExperiments.tsx";
import DeclarativeNotificationSettingsRedesignExperiment from "DeclarativeNotificationSettingsRedesignExperiment.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";

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
const NotificationSettingsConstants = fn(14444);
({ NOTIF_SETTING_MAPPING: closure_4, NOTIF_SETTINGS: hasOwnProperty } = NotificationSettingsConstants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/notifications/NotificationSettingsUtils.tsx");

export const getAssignedNotifSettingsAndMappings = function getAssignedNotifSettingsAndMappings() {
  const settings = [];
  const mappings = [];
  const set = new Set();
  const iter = dependencyMap[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = nextResult;
    if (null != nextResult.experiment) {
      let obj2 = getNamedExperiment(tmp3.experiment);
      let variations = tmp3.variations;
      continue;
    }
    let arr = settings.push(tmp3);
    let addResult = set.add(tmp3.id);
    continue;
  }
  const entries = Object.entries(React4);
  while (tmp10 !== undefined) {
    let tmp13 = _slicedToArray(tmp11, 2);
    let tmp14 = tmp13[1];
    let _parseInt = parseInt;
    let parsed = parseInt(tmp13[0]);
    for (const item10059 of tmp14) {
      if (set.has(item10059)) {
        let obj = { notifType: null, notifSetting: null };
        obj.notifType = parsed;
        obj.notifSetting = item10059;
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
export const useIsDeclarativeSettingsUIAvailable = function useIsDeclarativeSettingsUIAvailable(
  LegacyNotificationsSetting,
) {
  return DeclarativeNotificationSettingsRedesignExperiment.useIsDeclarativeNotificationSettingsRedesignEnabled(
    "useIsDeclarativeSettingsUIAvailable:" + LegacyNotificationsSetting,
  );
};
export const useNotifCategoryVisibility = function useNotifCategoryVisibility(CATEGORY_OTHER) {
  return DeclarativeNotificationSettingsRedesignExperiment.useIsDeclarativeNotificationSettingsRedesignEnabled(
    "useIsDeclarativeSettingsUIAvailable:" + CATEGORY_OTHER,
  );
};
export const useNotifSettingVisibility = function useNotifSettingVisibility(GAMING_DEFAULT) {
  _require = GAMING_DEFAULT;
  const items = [GAMING_DEFAULT];
  const memo = noop.useMemo(
    () =>
      (function getExperimentAndConfigBySettingId(arg0) {
        const iter = dependencyMap[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          if (nextResult.id === arg0) {
            if (null != tmp3.experiment) {
              let obj = { experiment: null, variations: null };
              obj.experiment = closure_1_6(nextResult.experiment);
              obj.variations = nextResult.variations;
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
  const variations = memo.variations;
  const items1 = [require("ApexExperiment").ApexExperimentStore];
  const items2 = [experiment];
  const stateFromStores = require("initialize").useStateFromStores(
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
  let obj = require("initialize");
  let isDeclarativeNotificationSettingsRedesignEnabled =
    require("DeclarativeNotificationSettingsRedesignExperiment").useIsDeclarativeNotificationSettingsRedesignEnabled(
      "useIsDeclarativeSettingsUIAvailable:" + "useNotifSettingVisibility",
    );
  if (isDeclarativeNotificationSettingsRedesignEnabled) {
    isDeclarativeNotificationSettingsRedesignEnabled =
      null == stateFromStores || null == variations || variations.includes(stateFromStores.variation);
    const tmp5 = null == stateFromStores || null == variations || variations.includes(stateFromStores.variation);
  }
  return isDeclarativeNotificationSettingsRedesignEnabled;
};
