// === Module 14533: notifications/NotificationSettingsUtils ===

// Module 14533 (notifications/NotificationSettingsUtils)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import ApexExperiment from "ApexExperiment" /* 1452 */;
import NotificationSettingsExperiments from "NotificationSettingsExperiments" /* 14534 */;
import DeclarativeNotificationSettingsRedesignExperiment from "DeclarativeNotificationSettingsRedesignExperiment" /* 14535 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

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
function getExperimentAndConfigBySettingId(arg0) {
  const iter = dependencyMap[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = nextResult;
    if (nextResult.id === arg0) {
      let redesignState = tmp3.redesignState;
      if (null != tmp3.experiment) {
        let obj2 = { redesignState, experiment: null, variations: null };
        obj2.experiment = getNamedExperiment(nextResult.experiment);
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
}
const NotificationSettingsConstants = fn(14527);
({ NOTIF_SETTING_MAPPING: closure_4, NOTIF_SETTINGS: hasOwnProperty } = NotificationSettingsConstants);
let ReactCompilerGating = fn(558);
ReactCompilerGating.isReactCompilerEnabled();
function useIsDeclarativeSettingsUIAvailable(AndroidMessageNotificationsSetting) {
  return DeclarativeNotificationSettingsRedesignExperiment.useIsDeclarativeNotificationSettingsRedesignEnabled("useIsDeclarativeSettingsUIAvailable:" + AndroidMessageNotificationsSetting);
}
ReactCompilerGating = fn(558);
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = fn(558);
function useNotifCategoryVisibility(CATEGORY_OTHER) {
  if (typeof useIsDeclarativeSettingsUIAvailable === "function") {
    const _HermesInternal = HermesInternal;
    return DeclarativeNotificationSettingsRedesignExperiment.useIsDeclarativeNotificationSettingsRedesignEnabled("useIsDeclarativeSettingsUIAvailable:" + CATEGORY_OTHER);
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
const size = fn(2);
const result2 = size.fileFinishedImporting("modules/notifications/NotificationSettingsUtils.tsx");

export const getAssignedNotifSettingsAndMappings = function getAssignedNotifSettingsAndMappings() {
  const settings = [];
  const mappings = [];
  const result = DeclarativeNotificationSettingsRedesignExperiment.isDeclarativeNotificationSettingsRedesignEnabled("getAssignedNotifSettingsAndMappings");
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
        let obj2 = { notifType: null, notifSetting: null };
        obj2.notifType = parsed;
        obj2.notifSetting = item10071;
        let arr2 = mappings.push(obj2);
        obj4.return();
        break;
      }
      continue;
    }
    continue;
  }
  return { settings, mappings };
};
export { useIsDeclarativeSettingsUIAvailable };
export { useNotifCategoryVisibility };
export const useNotifSettingVisibility = ReactCompilerGating.isReactCompilerEnabled() ? (function useNotifSettingVisibility(arg0) {
  const cResult = c.c(9);
  if (cResult[0] !== arg0) {
    const tmp6 = getExperimentAndConfigBySettingId(arg0);
    cResult[0] = arg0;
    cResult[1] = tmp6;
    let tmp4 = tmp6;
  } else {
    tmp4 = cResult[1];
  }
  const experiment = tmp4.experiment;
  const variations = tmp4.variations;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ApexExperiment.ApexExperimentStore];
    cResult[2] = items;
    let tmp7 = items;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] !== experiment) {
    const fn = function l() {
      let config;
      if (experiment != null) {
        config = experiment.getConfig({ location: "useNotifSettingVisibility" });
      }
      return config;
    };
    const items1 = [experiment];
    cResult[3] = experiment;
    cResult[4] = fn;
    cResult[5] = items1;
    let tmp9 = items1;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[4];
    tmp9 = cResult[5];
  }
  let variation = initialize.useStateFromStores(tmp7, tmp8, tmp9);
  if (typeof useIsDeclarativeSettingsUIAvailable === "function") {
    const _HermesInternal = HermesInternal;
    let isDeclarativeNotificationSettingsRedesignEnabled = DeclarativeNotificationSettingsRedesignExperiment.useIsDeclarativeNotificationSettingsRedesignEnabled("useIsDeclarativeSettingsUIAvailable:" + "useNotifSettingVisibility");
    if (isDeclarativeNotificationSettingsRedesignEnabled) {
      let tmp11 = false !== tmp4.redesignState;
      if (tmp11) {
        if (null == variation || null == variations) {
          tmp11 = tmp13;
        } else {
          if (cResult[6] === variation.variation) {
          }
          const hasItem = variations.includes(variation.variation);
          variation = variation.variation;
          cResult[6] = variation;
          cResult[7] = variations;
          cResult[8] = hasItem;
        }
      }
      isDeclarativeNotificationSettingsRedesignEnabled = tmp11;
    }
    return isDeclarativeNotificationSettingsRedesignEnabled;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
  const tmpResult = initialize;
}) : (function useNotifSettingVisibility(arg0) {
  _require = arg0;
  const items = [arg0];
  const memo = noop.useMemo(() => getExperimentAndConfigBySettingId(closure_0), items);
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
  if (typeof useIsDeclarativeSettingsUIAvailable === "function") {
    const _HermesInternal = HermesInternal;
    let isDeclarativeNotificationSettingsRedesignEnabled = tmp2(tmp3[4]).useIsDeclarativeNotificationSettingsRedesignEnabled("useIsDeclarativeSettingsUIAvailable:" + "useNotifSettingVisibility");
    if (isDeclarativeNotificationSettingsRedesignEnabled) {
      let tmp7 = false !== memo.redesignState;
      if (tmp7) {
        tmp7 = null == stateFromStores || null == variations || variations.includes(stateFromStores.variation);
        const tmp9 = null == stateFromStores || null == variations || variations.includes(stateFromStores.variation);
      }
      isDeclarativeNotificationSettingsRedesignEnabled = tmp7;
    }
    return isDeclarativeNotificationSettingsRedesignEnabled;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
  const obj = require("initialize");
  tmp2 = _require;
  tmp3 = experiment;
});