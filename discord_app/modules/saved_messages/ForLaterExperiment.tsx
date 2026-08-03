import SAVED_BOOKMARKS_MAX from "SAVED_BOOKMARKS_MAX";
import ApexExperiment from "ApexExperiment";
import ApexExperiment from "ApexExperiment";

let c3;
let obj1;
({ SAVED_BOOKMARKS_MAX: obj1, SAVED_REMINDERS_MAX: c3 } = SAVED_BOOKMARKS_MAX);
let obj = { 1: null, 2: { enabled: true } };
obj[2] = { enabled: true };
let closure_4 = ApexExperiment.createApexExperiment({ name: "2026-03-message-bookmarks", kind: "user", defaultConfig: { enabled: false }, variations: obj });
class ForLaterFreemiumConfig {
  constructor(arg0, arg1) {
    obj = Object.create(new.target.prototype);
    tmp2 = require("module_38")(null != require.b, "Config is missing bookmark limit");
    tmp3 = require("module_38")(null != require.r, "Config is missing reminder limit");
    obj.enabled = global;
    ({ b: tmp.bookmarkLimit, r: tmp.reminderLimit } = require);
    return obj;
  }
}
obj = { name: "2026-07-message-bookmarks-v2", kind: "user", defaultConfig: null, variations: null };
obj1 = Object.create(ForLaterFreemiumConfig.prototype);
require("module_38")(true, "Config is missing bookmark limit");
require("module_38")(true, "Config is missing reminder limit");
obj1.enabled = false;
obj1.bookmarkLimit = 0;
obj1.reminderLimit = 0;
obj[2] = obj1;
const obj2 = {
  1: null,
  2: (arg0) => {
    const parsed = JSON.parse(arg0);
    if (typeof ForLaterFreemiumConfig !== "fileFinishedImporting") {
      HermesBuiltin.throwTypeError();
    }
    const obj = Object.create(ForLaterFreemiumConfig.prototype);
    importDefault(38)(null != parsed.b, "Config is missing bookmark limit");
    importDefault(38)(null != parsed.r, "Config is missing reminder limit");
    obj.enabled = true;
    ({ b: tmp3.bookmarkLimit, r: tmp3.reminderLimit } = parsed);
    return obj;
  }
};
obj2[2] = (arg0) => {
  const parsed = JSON.parse(arg0);
  if (typeof ForLaterFreemiumConfig !== "fileFinishedImporting") {
    HermesBuiltin.throwTypeError();
  }
  const obj = Object.create(ForLaterFreemiumConfig.prototype);
  importDefault(38)(null != parsed.b, "Config is missing bookmark limit");
  importDefault(38)(null != parsed.r, "Config is missing reminder limit");
  obj.enabled = true;
  ({ b: tmp3.bookmarkLimit, r: tmp3.reminderLimit } = parsed);
  return obj;
};
obj[3] = obj2;
let closure_6 = ApexExperiment.createApexExperiment(obj);
const result = require("module_38").fileFinishedImporting("modules/saved_messages/ForLaterExperiment.tsx");

export const useIsForLaterExperimentOn = function useIsForLaterExperimentOn(LongPressMessageActionSheet) {
  let obj = { location: LongPressMessageActionSheet };
  let enabled = store2.useConfig(obj).enabled;
  obj = { location: LongPressMessageActionSheet };
  if (!enabled) {
    enabled = store.useConfig(obj).enabled;
  }
  return enabled;
};
export const isForLaterExperimentOn = function isForLaterExperimentOn(MessageRemindersNotificationManager) {
  let obj = { location: MessageRemindersNotificationManager };
  let enabled = store2.getConfig(obj).enabled;
  if (!enabled) {
    obj = { location: null };
    obj[0] = MessageRemindersNotificationManager;
    enabled = store.getConfig(obj).enabled;
  }
  return enabled;
};
export const isForLaterFreemiumExperimentOn = function isForLaterFreemiumExperimentOn(location) {
  return store2.getConfig({ location }).enabled;
};
export const useHasForLaterAccess = function useHasForLaterAccess(ForLaterOpenActionButton) {
  let obj = { location: ForLaterOpenActionButton };
  obj = { location: ForLaterOpenActionButton };
  let enabled = store2.useConfig(obj).enabled;
  if (!enabled) {
    let enabled1 = store.useConfig(obj).enabled;
    if (enabled1) {
      enabled1 = importDefault(9569)();
    }
    enabled = enabled1;
  }
  return enabled;
};
export const hasForLaterAccess = function hasForLaterAccess(addOrUpdateSavedMessage) {
  let obj = { location: addOrUpdateSavedMessage };
  obj = { location: addOrUpdateSavedMessage };
  let enabled = store2.getConfig(obj).enabled;
  if (!enabled) {
    let enabled1 = store.getConfig(obj).enabled;
    if (enabled1) {
      enabled1 = importDefault(9569)();
    }
    enabled = enabled1;
  }
  return enabled;
};
export const getForLaterLimit = function getForLaterLimit(addOrUpdateSavedMessage, arg1) {
  let obj = { location: addOrUpdateSavedMessage };
  const config = store2.getConfig(obj);
  if (!config.enabled) {
    obj = { location: null };
    obj[0] = addOrUpdateSavedMessage;
    let num = 0;
    if (store.getConfig(obj).enabled) {
      num = 0;
    }
    return num;
  }
};