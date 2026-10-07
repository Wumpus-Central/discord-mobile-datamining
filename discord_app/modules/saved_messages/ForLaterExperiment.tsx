// discord_app/modules/saved_messages/ForLaterExperiment.tsx
import _modDef38 from "../../../_runtime/metro/00038__.js";
import c from "../../../_runtime/00576_c.js";
import hasForLaterPremiumType2 from "hasForLaterPremiumType.tsx";
import SavedMessagesConstants from "../../../discord_common/js/shared/shared-constants/SavedMessagesConstants.tsx";
import ApexExperiment_mod from "../experiments/apex/index.tsx";
import "ReactCompilerGating";
import ReactCompilerGating_mod from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const hasForLaterPremiumTypeDefault = hasForLaterPremiumType2;

({ SAVED_BOOKMARKS_MAX: c3, SAVED_REMINDERS_MAX: closure_4 } = SavedMessagesConstants);
let ApexExperiment = ApexExperiment_mod;
let obj = { name: "2026-03-message-bookmarks", kind: "user", defaultConfig: { enabled: false }, variations: null };
let obj2 = { 1: null, 2: { enabled: true } };
obj2[2] = { enabled: true };
obj.variations = obj2;
let closure_5 = ApexExperiment.createApexExperiment(obj);
class ForLaterFreemiumConfig {
  constructor(arg0, arg1) {
    merged = Object.assign({ enabled: false, bookmarkLimit: 0, reminderLimit: 0 });
    tmp2 = closure_1(closure_2[2])(null != require.b, "Config is missing bookmark limit");
    tmp3 = closure_1(closure_2[2])(null != require.r, "Config is missing reminder limit");
    merged.enabled = global;
    ({ b: tmp.bookmarkLimit, r: tmp.reminderLimit } = require);
    return merged;
  }
}
let ApexExperiment = ApexExperiment_mod;
let obj3 = { name: "2026-07-message-bookmarks-v2", kind: "user", defaultConfig: null, variations: null };
let merged = Object.assign({ enabled: false, bookmarkLimit: 0, reminderLimit: 0 });
_modDef38(true, "Config is missing bookmark limit");
_modDef38(true, "Config is missing reminder limit");
merged.enabled = false;
merged.bookmarkLimit = 0;
merged.reminderLimit = 0;
obj3.defaultConfig = merged;
const obj4 = {
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
obj3.variations = obj4;
let closure_7 = ApexExperiment.createApexExperiment(obj3);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (location) => {
      const cResult = c.c(4);
      if (cResult[0] !== location) {
        const obj2 = { location };
        cResult[0] = location;
        cResult[1] = obj2;
        let tmp2 = obj2;
      } else {
        tmp2 = cResult[1];
      }
      let enabled = closure_7.useConfig(tmp2).enabled;
      if (cResult[2] !== location) {
        const obj3 = { location };
        cResult[2] = location;
        cResult[3] = obj3;
        let tmp3 = obj3;
      } else {
        tmp3 = cResult[3];
      }
      if (!enabled) {
        enabled = closure_5.useConfig(tmp3).enabled;
      }
      return enabled;
    }
  : (location) => {
      let enabled = closure_7.useConfig({ location }).enabled;
      if (!enabled) {
        enabled = closure_5.useConfig(obj2).enabled;
      }
      return enabled;
    };
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (location) => {
      const cResult = c.c(7);
      if (cResult[0] !== location) {
        const obj2 = { location };
        cResult[0] = location;
        cResult[1] = obj2;
        let tmp3 = obj2;
      } else {
        tmp3 = cResult[1];
      }
      const enabled = closure_7.useConfig(tmp3).enabled;
      if (cResult[2] !== location) {
        const obj3 = { location };
        cResult[2] = location;
        cResult[3] = obj3;
        let tmp4 = obj3;
      } else {
        tmp4 = cResult[3];
      }
      const enabled2 = closure_5.useConfig(tmp4).enabled;
      if (cResult[4] === enabled) {
        if (cResult[5] === enabled2) {
          let tmp5 = cResult[6];
        }
        return tmp5;
      }
      let tmp6 = enabled;
      if (!tmp6) {
        let tmp7 = enabled2;
        if (tmp7) {
          tmp7 = hasForLaterPremiumTypeDefault();
        }
        tmp6 = tmp7;
      }
      cResult[4] = enabled;
      cResult[5] = enabled2;
      cResult[6] = tmp6;
      tmp5 = tmp6;
    }
  : (location) => {
      let enabled = closure_7.useConfig({ location }).enabled;
      if (!enabled) {
        let enabled1 = closure_5.useConfig(obj2).enabled;
        if (enabled1) {
          enabled1 = hasForLaterPremiumTypeDefault();
        }
        enabled = enabled1;
      }
      return enabled;
    };
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp8 = ReactCompilerGating.isReactCompilerEnabled()
  ? (location, arg1) => {
      const cResult = c.c(9);
      if (cResult[0] !== location) {
        const obj2 = { location };
        cResult[0] = location;
        cResult[1] = obj2;
        let tmp4 = obj2;
      } else {
        tmp4 = cResult[1];
      }
      const config = closure_7.useConfig(tmp4);
      if (cResult[2] !== location) {
        const obj3 = { location };
        cResult[2] = location;
        cResult[3] = obj3;
        let tmp6 = obj3;
      } else {
        tmp6 = cResult[3];
      }
      const config1 = closure_5.useConfig(tmp6);
      const hasForLaterPremiumType = hasForLaterPremiumType2.useHasForLaterPremiumType();
      if (cResult[4] === config) {
        if (cResult[5] === hasForLaterPremiumType) {
          if (cResult[6] === arg1) {
            if (cResult[7] === config1.enabled) {
              return cResult[8];
            }
          }
        }
      }
      if (!config.enabled) {
        let num5 = 0;
        if (tmp9) {
          num5 = 0;
        }
        cResult[4] = config;
        cResult[5] = hasForLaterPremiumType;
        cResult[6] = arg1;
        cResult[7] = config1.enabled;
        cResult[8] = num5;
      }
      const tmpResult = hasForLaterPremiumType2;
    }
  : (location, arg1) => {
      const config = closure_7.useConfig({ location });
      const config1 = closure_5.useConfig({ location });
      const hasForLaterPremiumType = hasForLaterPremiumType2.useHasForLaterPremiumType();
      if (!config.enabled) {
        let num = 0;
        if (tmp4) {
          num = 0;
        }
        return num;
      }
    };
const result = size.fileFinishedImporting("modules/saved_messages/ForLaterExperiment.tsx");

export const useIsForLaterExperimentOn = tmp6;
export const isForLaterExperimentOn = function isForLaterExperimentOn(MessageRemindersNotificationManager) {
  let enabled = closure_7.getConfig({ location: MessageRemindersNotificationManager }).enabled;
  if (!enabled) {
    const obj2 = { location: MessageRemindersNotificationManager };
    enabled = closure_5.getConfig(obj2).enabled;
  }
  return enabled;
};
export const isForLaterFreemiumExperimentOn = function isForLaterFreemiumExperimentOn(location) {
  return closure_7.getConfig({ location }).enabled;
};
export const useHasForLaterAccess = tmp7;
export const hasForLaterAccess = function hasForLaterAccess(addOrUpdateSavedMessage) {
  let enabled = closure_7.getConfig({ location: addOrUpdateSavedMessage }).enabled;
  if (!enabled) {
    let enabled1 = closure_5.getConfig(obj2).enabled;
    if (enabled1) {
      enabled1 = hasForLaterPremiumTypeDefault();
    }
    enabled = enabled1;
  }
  return enabled;
};
export const getForLaterLimit = function getForLaterLimit(addOrUpdateSavedMessage, arg1) {
  const config = closure_7.getConfig({ location: addOrUpdateSavedMessage });
  const tmp2 = hasForLaterPremiumTypeDefault();
  if (!config.enabled) {
    let num = 0;
    if (closure_5.getConfig(obj2).enabled) {
      num = 0;
    }
    return num;
  }
};
export const useForLaterLimit = tmp8;
export const isForLaterLimitUpgradable = function isForLaterLimitUpgradable(addOrUpdateSavedMessage) {
  let enabled = closure_7.getConfig({ location: addOrUpdateSavedMessage }).enabled;
  if (enabled) {
    enabled = !hasForLaterPremiumTypeDefault();
  }
  return enabled;
};
export const useIsForLaterLimitUpgradable = ReactCompilerGating.isReactCompilerEnabled()
  ? (location) => {
      const cResult = c.c(2);
      if (cResult[0] !== location) {
        const obj2 = { location };
        cResult[0] = location;
        cResult[1] = obj2;
        let tmp4 = obj2;
      } else {
        tmp4 = cResult[1];
      }
      let enabled = closure_7.useConfig(tmp4).enabled;
      if (enabled) {
        enabled = !tmpResult.useHasForLaterPremiumType();
      }
      return enabled;
    }
  : (location) => {
      let enabled = closure_7.useConfig({ location }).enabled;
      if (enabled) {
        enabled = !obj2.useHasForLaterPremiumType();
      }
      return enabled;
    };
