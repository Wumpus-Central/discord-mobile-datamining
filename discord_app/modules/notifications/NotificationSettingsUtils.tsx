// discord_app/modules/notifications/NotificationSettingsUtils.tsx
import get_initialized from "../../../discord_common/js/packages/flux/index.tsx";
import react2 from "../../../_runtime/00576_react.js";
import ApexExperiment from "../experiments/apex/index.tsx";
import NotificationSettingsExperiments from "NotificationSettingsExperiments.tsx";
import DeclarativeNotificationSettingsRedesignExperiment from "DeclarativeNotificationSettingsRedesignExperiment.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../_runtime/00019_react.js";
import NotificationSettingsConstants from "NotificationSettingsConstants.tsx";
import ReactCompilerGating_mod from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, set;

let closure_4;
let hasOwnProperty;
function getNamedExperiment(experiment) {
  const tmp = NotificationSettingsExperiments.knownExperimentConfigs[experiment];
  if (tmp.definition.name !== experiment) {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    const error = new Error("Experiment called " + tmp.definition.name + " assigned to name " + experiment);
    throw error;
  } else {
    return tmp;
  }
}
function getExperimentAndConfigBySettingId(arg0) {
  const iter = hasOwnProperty[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = nextResult;
    if (nextResult.id === arg0) {
      let redesignState = tmp3.redesignState;
      if (null != tmp3.experiment) {
        let obj2 = {
          redesignState,
          experiment: getNamedExperiment(nextResult.experiment),
          variations: nextResult.variations,
        };
        iter.return();
        return obj2;
      } else if (null != redesignState) {
        let obj = { redesignState };
        iter.return();
        return obj;
      }
    }
    continue;
  }
  return {};
}
({ NOTIF_SETTING_MAPPING: closure_4, NOTIF_SETTINGS: hasOwnProperty } = NotificationSettingsConstants);
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
const useIsDeclarativeSettingsUIAvailable = (arg0) => {
  const obj = DeclarativeNotificationSettingsRedesignExperiment;
  return obj.useIsDeclarativeNotificationSettingsRedesignEnabled("useIsDeclarativeSettingsUIAvailable:" + arg0);
};
ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let fn;
      let tmp4;
      let tmp7;
      let tmp8;
      let tmp9;
      const obj = react2;
      const cResult = obj.c(9);
      if (cResult[0] !== arg0) {
        const tmp6 = getExperimentAndConfigBySettingId(arg0);
        cResult[0] = arg0;
        cResult[1] = tmp6;
        tmp4 = tmp6;
      } else {
        tmp4 = cResult[1];
      }
      const experiment = tmp4.experiment;
      const variations = tmp4.variations;
      const redesignState = tmp4.redesignState;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ApexExperiment.ApexExperimentStore];
        cResult[2] = items;
        tmp7 = items;
      } else {
        tmp7 = cResult[2];
      }
      if (cResult[3] !== experiment) {
        fn = function l() {
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
        tmp9 = items1;
        tmp8 = fn;
      } else {
        tmp8 = cResult[4];
        tmp9 = cResult[5];
      }
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp7, tmp8, tmp9);
      if (typeof fn === "function") {
        const _HermesInternal = HermesInternal;
        const tmpResult2 = DeclarativeNotificationSettingsRedesignExperiment;
        let isDeclarativeNotificationSettingsRedesignEnabled =
          tmpResult2.useIsDeclarativeNotificationSettingsRedesignEnabled(
            "useIsDeclarativeSettingsUIAvailable:" + "useNotifSettingVisibility",
          );
        if (isDeclarativeNotificationSettingsRedesignEnabled) {
          let tmp12 = false !== redesignState;
          if (tmp12) {
            let tmp14 = null == stateFromStores || null == variations;
            if (!tmp14) {
              if (cResult[6] === stateFromStores.variation) {
                let tmp15;
                if (cResult[7] === variations) {
                  tmp15 = cResult[8];
                }
                tmp14 = tmp15;
              }
              const hasItem = variations.includes(stateFromStores.variation);
              cResult[6] = stateFromStores.variation;
              cResult[7] = variations;
              cResult[8] = hasItem;
              tmp15 = hasItem;
            }
            tmp12 = tmp14;
          }
          isDeclarativeNotificationSettingsRedesignEnabled = tmp12;
        }
        return isDeclarativeNotificationSettingsRedesignEnabled;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      const items = [arg0];
      const memo = react.useMemo(() => getExperimentAndConfigBySettingId(closure_0), items);
      const experiment = memo.experiment;
      const variations = memo.variations;
      const redesignState = memo.redesignState;
      const useStateFromStores = require("get initialized").useStateFromStores;
      const items1 = [];
      require("get initialized");
      items1[0] = require("ApexExperiment").ApexExperimentStore;
      const items2 = [experiment];
      const stateFromStores = useStateFromStores(
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
      const tmp2 = _require;
      const tmp3 = experiment;
      if (typeof fn === "function") {
        const _HermesInternal = HermesInternal;
        const tmp2Result = tmp2(tmp3[4]);
        let isDeclarativeNotificationSettingsRedesignEnabled =
          tmp2Result.useIsDeclarativeNotificationSettingsRedesignEnabled(
            "useIsDeclarativeSettingsUIAvailable:" + "useNotifSettingVisibility",
          );
        if (isDeclarativeNotificationSettingsRedesignEnabled) {
          let tmp8 = false !== redesignState;
          if (tmp8) {
            tmp8 = null == stateFromStores || null == variations || variations.includes(stateFromStores.variation);
            null == stateFromStores || null == variations || variations.includes(stateFromStores.variation);
          }
          isDeclarativeNotificationSettingsRedesignEnabled = tmp8;
        }
        return isDeclarativeNotificationSettingsRedesignEnabled;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
const fn2 = (CATEGORY_OTHER) => {
  if (typeof fn === "function") {
    const _HermesInternal = HermesInternal;
    const obj = DeclarativeNotificationSettingsRedesignExperiment;
    return obj.useIsDeclarativeNotificationSettingsRedesignEnabled(
      "useIsDeclarativeSettingsUIAvailable:" + CATEGORY_OTHER,
    );
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
const result2 = size.fileFinishedImporting("modules/notifications/NotificationSettingsUtils.tsx");

export const getAssignedNotifSettingsAndMappings = function getAssignedNotifSettingsAndMappings() {
  const settings = [];
  const mappings = [];
  const obj = DeclarativeNotificationSettingsRedesignExperiment;
  const result = obj.isDeclarativeNotificationSettingsRedesignEnabled("getAssignedNotifSettingsAndMappings");
  set = new Set();
  const iter = hasOwnProperty[Symbol.iterator]();
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
  const entries = Object.entries(React3);
  const tmp14 = entries[Symbol.iterator]();
  while (tmp14 !== undefined) {
    let tmp17 = _slicedToArray(tmp15, 2);
    let tmp18 = tmp17[1];
    let _parseInt = parseInt;
    let parsed = parseInt(tmp17[0]);
    for (const item10071 of tmp18) {
      if (set.has(item10071)) {
        let obj2 = { notifType: parsed, notifSetting: item10071 };
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
export const useNotifCategoryVisibility = fn2;
export const useNotifSettingVisibility = tmp5;
