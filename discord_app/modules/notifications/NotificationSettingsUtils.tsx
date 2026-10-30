// discord_app/modules/notifications/NotificationSettingsUtils.tsx
import NotificationSettingsExperiments from "NotificationSettingsExperiments.tsx";
import DeclarativeNotificationSettingsRedesignExperiment from "DeclarativeNotificationSettingsRedesignExperiment.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

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
const NotificationSettingsConstants = fn(16231);
({
  NOTIF_CATEGORIES: closure_4,
  NOTIF_SETTING_MAPPING: hasOwnProperty,
  NOTIF_SETTING_REDESIGN_MAPPING: metroRequire,
  NOTIF_SETTINGS: closure_7,
} = NotificationSettingsConstants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/notifications/NotificationSettingsUtils.tsx");

export function getAssignedNotifSettingsAndMappings() {
  const items = [];
  const result = DeclarativeNotificationSettingsRedesignExperiment.isDeclarativeNotificationSettingsRedesignEnabled(
    "getAssignedNotifSettingsAndMappings",
  );
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
      let arr = items.push(tmp4);
      let addResult = set.add(tmp4.id);
    }
    continue;
  }
  let tmp13 = hasOwnProperty;
  if (result) {
    const obj2 = {};
    const merged = Object.assign(tmp13);
    const merged1 = Object.assign(timestampProducer);
    let tmp14 = obj2;
  } else {
    tmp14 = tmp13;
  }
  const entries = Object.entries(tmp14);
  tmp13 = entries[Symbol.iterator]();
  set = new Set();
}
export function useIsDeclarativeSettingsUIAvailable(AndroidMessageNotificationsSetting) {
  return DeclarativeNotificationSettingsRedesignExperiment.useIsDeclarativeNotificationSettingsRedesignEnabled(
    "useIsDeclarativeSettingsUIAvailable:" + AndroidMessageNotificationsSetting,
  );
}
export function useNotifCategoryVisibility(CATEGORY_CALLS_MESSAGES) {
  return DeclarativeNotificationSettingsRedesignExperiment.useIsDeclarativeNotificationSettingsRedesignEnabled(
    "useIsDeclarativeSettingsUIAvailable:" + CATEGORY_CALLS_MESSAGES,
  );
}
export function useNotifSettingVisibility(CALLS) {
  _require = CALLS;
  const items = [CALLS];
  const memo = noop.useMemo(
    () =>
      (function getExperimentAndConfigBySettingId(arg0) {
        const iter = dependencyMap[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp3 = nextResult;
          if (nextResult.id === arg0) {
            let redesignState = tmp3.redesignState;
            if (null != tmp3.experiment) {
              let obj2 = { redesignState, experiment: null, variations: null };
              obj2.experiment = closure_1_8(nextResult.experiment);
              obj2.variations = nextResult.variations;
              iter.return();
              return obj2;
            } else if (null != redesignState) {
              let obj = { redesignState: null };
              obj.redesignState = redesignState;
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
    let tmp4 = false !== memo.redesignState;
    if (tmp4) {
      tmp4 = null == stateFromStores || null == variations || variations.includes(stateFromStores.variation);
      let tmp6 = null == stateFromStores || null == variations || variations.includes(stateFromStores.variation);
    }
    isDeclarativeNotificationSettingsRedesignEnabled = tmp4;
  }
  return isDeclarativeNotificationSettingsRedesignEnabled;
}
