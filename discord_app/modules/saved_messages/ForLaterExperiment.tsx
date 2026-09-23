// === Module 8183: ForLaterExperiment ===

// Module 8183 (ForLaterExperiment)
import _modDef38 from "module_38" /* 38 */;
import hasForLaterPremiumType2 from "hasForLaterPremiumType" /* 8184 */;
import SavedMessagesConstants from "SavedMessagesConstants" /* 8180 */;
import ApexExperiment_mod from "ApexExperiment" /* 1434 */;
import size from "module_2" /* 2 */;

const hasForLaterPremiumTypeDefault = hasForLaterPremiumType2;

({ SAVED_BOOKMARKS_MAX: c3, SAVED_REMINDERS_MAX: closure_4 } = SavedMessagesConstants);
let ApexExperiment = ApexExperiment_mod;
const obj = { name: "2026-03-message-bookmarks", kind: "user", defaultConfig: { enabled: false }, variations: null };
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
const obj3 = { name: "2026-07-message-bookmarks-v2", kind: "user", defaultConfig: null, variations: null };
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
  }
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
const result = size.fileFinishedImporting("modules/saved_messages/ForLaterExperiment.tsx");

export const useIsForLaterExperimentOn = function useIsForLaterExperimentOn(LongPressMessageActionSheet) {
  let enabled = closure_7.useConfig({ location: LongPressMessageActionSheet }).enabled;
  if (!enabled) {
    enabled = closure_5.useConfig(obj2).enabled;
  }
  return enabled;
};
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
export const useHasForLaterAccess = function useHasForLaterAccess(ForLaterOpenActionButton) {
  let enabled = closure_7.useConfig({ location: ForLaterOpenActionButton }).enabled;
  if (!enabled) {
    let enabled1 = closure_5.useConfig(obj2).enabled;
    if (enabled1) {
      enabled1 = hasForLaterPremiumTypeDefault();
    }
    enabled = enabled1;
  }
  return enabled;
};
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
export const useForLaterLimit = function useForLaterLimit(ForLaterScreen, arg1) {
  const config = closure_7.useConfig({ location: ForLaterScreen });
  const config1 = closure_5.useConfig({ location: ForLaterScreen });
  const hasForLaterPremiumType = hasForLaterPremiumType2.useHasForLaterPremiumType();
  if (!config.enabled) {
    let num = 0;
    if (tmp4) {
      num = 0;
    }
    return num;
  }
};
export const isForLaterLimitUpgradable = function isForLaterLimitUpgradable(addOrUpdateSavedMessage) {
  let enabled = closure_7.getConfig({ location: addOrUpdateSavedMessage }).enabled;
  if (enabled) {
    enabled = !hasForLaterPremiumTypeDefault();
  }
  return enabled;
};
export const useIsForLaterLimitUpgradable = function useIsForLaterLimitUpgradable(ForLaterScreen) {
  let enabled = closure_7.useConfig({ location: ForLaterScreen }).enabled;
  if (enabled) {
    enabled = !obj2.useHasForLaterPremiumType();
  }
  return enabled;
};