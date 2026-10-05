// discord_app/modules/saved_messages/ForLaterExperiment.tsx
import _modDef38 from "../../../_runtime/metro/00038__.js";
import react from "../../../_runtime/00576_react.js";
import hasForLaterPremiumType2 from "hasForLaterPremiumType.tsx";
import SavedMessagesConstants from "../../../discord_common/js/shared/shared-constants/SavedMessagesConstants.tsx";
import ApexExperiment_mod from "../experiments/apex/index.tsx";
import ReactCompilerGating_mod from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const hasForLaterPremiumTypeDefault = hasForLaterPremiumType2;

let c3;
let closure_4;
let merged;
let obj2;
let obj4;
({ SAVED_BOOKMARKS_MAX: c3, SAVED_REMINDERS_MAX: closure_4 } = SavedMessagesConstants);
let ApexExperiment = ApexExperiment_mod;
let obj = { name: "2026-03-message-bookmarks", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null, 2: { enabled: true } };
obj2[2] = { enabled: true };
let closure_5 = ApexExperiment.createApexExperiment(obj);
class ForLaterFreemiumConfig {
  constructor(enabled, arg1) {
    const merged = Object.assign({ enabled: false, bookmarkLimit: 0, reminderLimit: 0 });
    _modDef38(null != arg1.b, "Config is missing bookmark limit");
    _modDef38(null != arg1.r, "Config is missing reminder limit");
    merged.enabled = enabled;
    ({ b: tmp.bookmarkLimit, r: tmp.reminderLimit } = arg1);
    return merged;
  }
}
ApexExperiment = ApexExperiment_mod;
let obj3 = { name: "2026-07-message-bookmarks-v2", kind: "user", defaultConfig: merged, variations: obj4 };
const createApexExperiment = ApexExperiment.createApexExperiment;
merged = Object.assign({ enabled: false, bookmarkLimit: 0, reminderLimit: 0 });
let tmp5 = _modDef38(true, "Config is missing bookmark limit");
let tmp6 = _modDef38(true, "Config is missing reminder limit");
merged.enabled = false;
merged.bookmarkLimit = 0;
merged.reminderLimit = 0;
obj4 = {
  1: null,
  2: (arg0) => {
    const parsed = JSON.parse(arg0);
    if (typeof ForLaterFreemiumConfig === "function") {
      const merged = Object.assign({ enabled: false, bookmarkLimit: 0, reminderLimit: 0 });
      _modDef38(null != parsed.b, "Config is missing bookmark limit");
      _modDef38(null != parsed.r, "Config is missing reminder limit");
      merged.enabled = true;
      ({ b: tmp3.bookmarkLimit, r: tmp3.reminderLimit } = parsed);
      return merged;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
};
obj4[2] = (arg0) => {
  const parsed = JSON.parse(arg0);
  if (typeof ForLaterFreemiumConfig === "function") {
    const merged = Object.assign({ enabled: false, bookmarkLimit: 0, reminderLimit: 0 });
    _modDef38(null != parsed.b, "Config is missing bookmark limit");
    _modDef38(null != parsed.r, "Config is missing reminder limit");
    merged.enabled = true;
    ({ b: tmp3.bookmarkLimit, r: tmp3.reminderLimit } = parsed);
    return merged;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
let closure_7 = createApexExperiment(obj3);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (location) => {
      let tmp2;
      let tmp3;
      const obj = react;
      const cResult = obj.c(4);
      if (cResult[0] !== location) {
        const obj2 = { location };
        cResult[0] = location;
        cResult[1] = obj2;
        tmp2 = obj2;
      } else {
        tmp2 = cResult[1];
      }
      let enabled = closure_7.useConfig(tmp2).enabled;
      if (cResult[2] !== location) {
        const obj3 = { location };
        cResult[2] = location;
        cResult[3] = obj3;
        tmp3 = obj3;
      } else {
        tmp3 = cResult[3];
      }
      if (!enabled) {
        enabled = closure_5.useConfig(tmp3).enabled;
      }
      return enabled;
    }
  : (location) => {
      const obj = { location };
      let enabled = closure_7.useConfig(obj).enabled;
      const obj2 = { location };
      if (!enabled) {
        enabled = closure_5.useConfig(obj2).enabled;
      }
      return enabled;
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp8 = ReactCompilerGating.isReactCompilerEnabled()
  ? (location) => {
      let tmp3;
      let tmp4;
      const obj = react;
      const cResult = obj.c(7);
      if (cResult[0] !== location) {
        const obj2 = { location };
        cResult[0] = location;
        cResult[1] = obj2;
        tmp3 = obj2;
      } else {
        tmp3 = cResult[1];
      }
      const enabled = closure_7.useConfig(tmp3).enabled;
      if (cResult[2] !== location) {
        const obj3 = { location };
        cResult[2] = location;
        cResult[3] = obj3;
        tmp4 = obj3;
      } else {
        tmp4 = cResult[3];
      }
      const enabled2 = closure_5.useConfig(tmp4).enabled;
      if (cResult[4] === enabled) {
        let tmp5;
        if (cResult[5] === enabled2) {
          tmp5 = cResult[6];
        }
        return tmp5;
      }
      let tmp6 = enabled;
      if (!tmp6) {
        tmp6 = enabled2 && hasForLaterPremiumTypeDefault();
        const tmp7 = enabled2 && hasForLaterPremiumTypeDefault();
      }
      cResult[4] = enabled;
      cResult[5] = enabled2;
      cResult[6] = tmp6;
      tmp5 = tmp6;
    }
  : (location) => {
      const obj = { location };
      const obj2 = { location };
      let enabled = closure_7.useConfig(obj).enabled;
      if (!enabled) {
        const enabled1 = closure_5.useConfig(obj2).enabled && hasForLaterPremiumTypeDefault();
        enabled = enabled1;
      }
      return enabled;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp9 = ReactCompilerGating.isReactCompilerEnabled()
  ? (location, arg1) => {
      let num5;
      let tmp4;
      let tmp6;
      const obj = react;
      const cResult = obj.c(9);
      if (cResult[0] !== location) {
        const obj2 = { location };
        cResult[0] = location;
        cResult[1] = obj2;
        tmp4 = obj2;
      } else {
        tmp4 = cResult[1];
      }
      const config = closure_7.useConfig(tmp4);
      if (cResult[2] !== location) {
        const obj3 = { location };
        cResult[2] = location;
        cResult[3] = obj3;
        tmp6 = obj3;
      } else {
        tmp6 = cResult[3];
      }
      const config1 = closure_5.useConfig(tmp6);
      const tmpResult = hasForLaterPremiumType2;
      const hasForLaterPremiumType = tmpResult.useHasForLaterPremiumType();
      if (cResult[4] === config) {
        if (cResult[5] === hasForLaterPremiumType) {
          if (cResult[6] === arg1) {
            let tmp9;
            if (cResult[7] === config1.enabled) {
              tmp9 = cResult[8];
            }
            return tmp9;
          }
        }
      }
      if (config.enabled) {
        let tmp11;
        if (hasForLaterPremiumType) {
          tmp11 = arg1 ? React3 : _false;
        } else {
          tmp11 = arg1 ? config.reminderLimit : config.bookmarkLimit;
        }
        num5 = tmp11;
      } else {
        num5 = 0;
        if (tmp10) {
          num5 = 0;
          if (hasForLaterPremiumType) {
            num5 = arg1 ? React3 : _false;
          }
        }
      }
      cResult[4] = config;
      cResult[5] = hasForLaterPremiumType;
      cResult[6] = arg1;
      cResult[7] = config1.enabled;
      cResult[8] = num5;
      tmp9 = num5;
    }
  : (location, arg1) => {
      let num;
      const obj = { location };
      const config = closure_7.useConfig(obj);
      const obj2 = { location };
      const config1 = closure_5.useConfig(obj2);
      const obj3 = hasForLaterPremiumType2;
      const hasForLaterPremiumType = obj3.useHasForLaterPremiumType();
      if (config.enabled) {
        let tmp5;
        if (hasForLaterPremiumType) {
          tmp5 = arg1 ? React3 : _false;
        } else {
          tmp5 = arg1 ? config.reminderLimit : config.bookmarkLimit;
        }
        num = tmp5;
      } else {
        num = 0;
        if (tmp4) {
          num = 0;
          if (hasForLaterPremiumType) {
            num = arg1 ? React3 : _false;
          }
        }
      }
      return num;
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp10 = ReactCompilerGating.isReactCompilerEnabled()
  ? (location) => {
      let tmp4;
      const obj = react;
      const cResult = obj.c(2);
      if (cResult[0] !== location) {
        const obj2 = { location };
        cResult[0] = location;
        cResult[1] = obj2;
        tmp4 = obj2;
      } else {
        tmp4 = cResult[1];
      }
      let enabled = closure_7.useConfig(tmp4).enabled;
      const tmpResult = hasForLaterPremiumType2;
      if (enabled) {
        enabled = !tmpResult.useHasForLaterPremiumType();
      }
      return enabled;
    }
  : (location) => {
      const obj = { location };
      let enabled = closure_7.useConfig(obj).enabled;
      const obj2 = hasForLaterPremiumType2;
      if (enabled) {
        enabled = !obj2.useHasForLaterPremiumType();
      }
      return enabled;
    };
const result = size.fileFinishedImporting("modules/saved_messages/ForLaterExperiment.tsx");

export const useIsForLaterExperimentOn = tmp7;
export const isForLaterExperimentOn = function isForLaterExperimentOn(MessageRemindersNotificationManager) {
  const obj = { location: MessageRemindersNotificationManager };
  let enabled = closure_7.getConfig(obj).enabled;
  if (!enabled) {
    const obj2 = { location: MessageRemindersNotificationManager };
    enabled = closure_5.getConfig(obj2).enabled;
  }
  return enabled;
};
export const isForLaterFreemiumExperimentOn = function isForLaterFreemiumExperimentOn(location) {
  const obj = { location };
  return closure_7.getConfig(obj).enabled;
};
export const useHasForLaterAccess = tmp8;
export const hasForLaterAccess = function hasForLaterAccess(addOrUpdateSavedMessage) {
  const obj = { location: addOrUpdateSavedMessage };
  const obj2 = { location: addOrUpdateSavedMessage };
  let enabled = closure_7.getConfig(obj).enabled;
  if (!enabled) {
    const enabled1 = closure_5.getConfig(obj2).enabled && hasForLaterPremiumTypeDefault();
    enabled = enabled1;
  }
  return enabled;
};
export const getForLaterLimit = function getForLaterLimit(addOrUpdateSavedMessage, arg1) {
  let num;
  const obj = { location: addOrUpdateSavedMessage };
  const config = closure_7.getConfig(obj);
  const obj2 = { location: addOrUpdateSavedMessage };
  const enabled = closure_5.getConfig(obj2).enabled;
  const tmp2 = hasForLaterPremiumTypeDefault();
  if (config.enabled) {
    let tmp3;
    if (tmp2) {
      tmp3 = arg1 ? React3 : _false;
    } else {
      tmp3 = arg1 ? config.reminderLimit : config.bookmarkLimit;
    }
    num = tmp3;
  } else {
    num = 0;
    if (enabled) {
      num = 0;
      if (tmp2) {
        num = arg1 ? React3 : _false;
      }
    }
  }
  return num;
};
export const useForLaterLimit = tmp9;
export const isForLaterLimitUpgradable = function isForLaterLimitUpgradable(addOrUpdateSavedMessage) {
  const obj = { location: addOrUpdateSavedMessage };
  const enabled = closure_7.getConfig(obj).enabled && !hasForLaterPremiumTypeDefault();
  return enabled;
};
export const useIsForLaterLimitUpgradable = tmp10;
