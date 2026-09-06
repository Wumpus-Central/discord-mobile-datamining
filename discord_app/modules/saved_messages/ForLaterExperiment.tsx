// discord_app/modules/saved_messages/ForLaterExperiment.tsx
import _modDef38 from "../../../_runtime/metro/00038__.js";
import hasForLaterPremiumType2 from "hasForLaterPremiumType.tsx";
import SavedMessagesConstants from "../../../discord_common/js/shared/shared-constants/SavedMessagesConstants.tsx";
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

const hasForLaterPremiumTypeDefault = hasForLaterPremiumType2;

({ SAVED_BOOKMARKS_MAX: c3, SAVED_REMINDERS_MAX: closure_4 } = SavedMessagesConstants);
let obj = { name: "2026-03-message-bookmarks", kind: "user", defaultConfig: { enabled: false }, variations: null };
obj = { 1: null, 2: { enabled: true } };
obj[2] = { enabled: true };
obj.variations = obj;
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
const obj1 = { name: "2026-07-message-bookmarks-v2", kind: "user", defaultConfig: null, variations: null };
let merged = Object.assign({ enabled: false, bookmarkLimit: 0, reminderLimit: 0 });
_modDef38(true, "Config is missing bookmark limit");
_modDef38(true, "Config is missing reminder limit");
merged.enabled = false;
merged.bookmarkLimit = 0;
merged.reminderLimit = 0;
obj1.defaultConfig = merged;
const obj2 = {
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
obj2[2] = (arg0) => {
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
obj1.variations = obj2;
let closure_7 = ApexExperiment.createApexExperiment(obj1);
const result = size.fileFinishedImporting("modules/saved_messages/ForLaterExperiment.tsx");

export const useIsForLaterExperimentOn = function useIsForLaterExperimentOn(LongPressMessageActionSheet) {
  let obj = { location: LongPressMessageActionSheet };
  let enabled = closure_7.useConfig(obj).enabled;
  obj = { location: LongPressMessageActionSheet };
  if (!enabled) {
    enabled = closure_5.useConfig(obj).enabled;
  }
  return enabled;
};
export const isForLaterExperimentOn = function isForLaterExperimentOn(MessageRemindersNotificationManager) {
  let obj = { location: MessageRemindersNotificationManager };
  let enabled = closure_7.getConfig(obj).enabled;
  if (!enabled) {
    obj = { location: MessageRemindersNotificationManager };
    enabled = closure_5.getConfig(obj).enabled;
  }
  return enabled;
};
export const isForLaterFreemiumExperimentOn = function isForLaterFreemiumExperimentOn(location) {
  return closure_7.getConfig({ location }).enabled;
};
export const useHasForLaterAccess = function useHasForLaterAccess(ForLaterOpenActionButton) {
  let obj = { location: ForLaterOpenActionButton };
  obj = { location: ForLaterOpenActionButton };
  let enabled = closure_7.useConfig(obj).enabled;
  if (!enabled) {
    let enabled1 = closure_5.useConfig(obj).enabled;
    if (enabled1) {
      enabled1 = hasForLaterPremiumTypeDefault();
    }
    enabled = enabled1;
  }
  return enabled;
};
export const hasForLaterAccess = function hasForLaterAccess(addOrUpdateSavedMessage) {
  let obj = { location: addOrUpdateSavedMessage };
  obj = { location: addOrUpdateSavedMessage };
  let enabled = closure_7.getConfig(obj).enabled;
  if (!enabled) {
    let enabled1 = closure_5.getConfig(obj).enabled;
    if (enabled1) {
      enabled1 = hasForLaterPremiumTypeDefault();
    }
    enabled = enabled1;
  }
  return enabled;
};
export const getForLaterLimit = function getForLaterLimit(addOrUpdateSavedMessage, arg1) {
  let obj = { location: addOrUpdateSavedMessage };
  const config = closure_7.getConfig(obj);
  obj = { location: addOrUpdateSavedMessage };
  const tmp2 = hasForLaterPremiumTypeDefault();
  if (!config.enabled) {
    let num = 0;
    if (closure_5.getConfig(obj).enabled) {
      num = 0;
    }
    return num;
  }
};
export const useForLaterLimit = function useForLaterLimit(ForLaterScreen, arg1) {
  let obj = { location: ForLaterScreen };
  const config = closure_7.useConfig(obj);
  obj = { location: ForLaterScreen };
  const config1 = closure_5.useConfig(obj);
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
