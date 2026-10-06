// === Module 7486: ScheduledMessageUtils ===

// Module 7486 (ScheduledMessageUtils)
import LoggerDefault from "Logger" /* 3 */;
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import _modDef38 from "module_38" /* 38 */;
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import intl7 from "intl" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import GlobalUtils from "GlobalUtils" /* 1375 */;
import PremiumConstants from "PremiumConstants" /* 1379 */;
import FlagUtils from "FlagUtils" /* 1390 */;
import PremiumTypeUtils from "PremiumTypeUtils" /* 1976 */;
import _modDef4467 from "module_4467" /* 4467 */;
import MessageRecordUtils from "MessageRecordUtils" /* 5118 */;
import parseContentForSuppressNotifications from "parseContentForSuppressNotifications" /* 7181 */;
import ScheduledMessageTypes from "ScheduledMessageTypes" /* 7488 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import PermissionStore from "PermissionStore" /* 4515 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 1085 */;
import ScheduledMessagesConstants from "ScheduledMessagesConstants" /* 7487 */;
import ApexExperiment from "ApexExperiment" /* 1440 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const parseContentForSuppressNotificationsDefault = parseContentForSuppressNotifications;
let _require;

let c10;
let closure_12;
let map1;
let merged;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let unpackModuleId;
({ AnalyticEvents: metroRequire, MessageFlags: metroImportDefault, Permissions: metroImportAll } = Constants);
const PremiumTypes = PremiumConstants.PremiumTypes;
({ MAX_SCHEDULE_TIME_AFTER_CREATION_SECONDS: c10, MAX_SCHEDULE_TIME_INTO_FUTURE_SECONDS: unpackModuleId, MAX_SCHEDULED_MESSAGES_PER_USER: closure_12, MIN_SCHEDULE_TIME_INTO_FUTURE_SECONDS: map1 } = ScheduledMessagesConstants);
let tmp4 = new LoggerDefault("Scheduled Messages");
class ScheduledMessagesConfig {
  constructor(enabled, limit) {
    const merged = Object.assign({ enabled: false, limit: 0 });
    _modDef38(null != limit.limit, "Config is missing scheduled message limit");
    merged.enabled = enabled;
    merged.limit = limit.limit;
    return merged;
  }
}
let obj = { name: "2026-08-scheduled-messages", kind: "user", defaultConfig: merged, variations: obj2 };
const createApexExperiment = ApexExperiment.createApexExperiment;
merged = Object.assign({ enabled: false, limit: 0 });
let tmp7 = _modDef38(true, "Config is missing scheduled message limit");
merged.enabled = false;
merged.limit = 0;
obj2 = {
  1: null,
  2: (arg0) => {
    const parsed = JSON.parse(arg0);
    if (typeof ScheduledMessagesConfig === "function") {
      const merged = Object.assign({ enabled: false, limit: 0 });
      _modDef38(null != parsed.limit, "Config is missing scheduled message limit");
      merged.enabled = true;
      merged.limit = parsed.limit;
      return merged;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
};
obj2[2] = (arg0) => {
  const parsed = JSON.parse(arg0);
  if (typeof ScheduledMessagesConfig === "function") {
    const merged = Object.assign({ enabled: false, limit: 0 });
    _modDef38(null != parsed.limit, "Config is missing scheduled message limit");
    merged.enabled = true;
    merged.limit = parsed.limit;
    return merged;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
let closure_15 = createApexExperiment(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  const obj = react;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { location: "useCanUseScheduledMessages" };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  return closure_15.useConfig(first).enabled;
}) : (() => closure_15.useConfig({ location: "useCanUseScheduledMessages" }).enabled);
let closure_16 = tmp8;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp9 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let _private;
  let first;
  let tmp7;
  _require = arg0;
  let tmp = _require;
  const obj = require("react");
  const cResult = obj.c(3);
  let stateFromStores = closure_16();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function l() {
      let tmp = null != _private;
      if (tmp) {
        tmp = _private.isPrivate() || PermissionStore.can(metroImportAll.SEND_MESSAGES, _private);
        const canResult = _private.isPrivate() || PermissionStore.can(metroImportAll.SEND_MESSAGES, _private);
      }
      return tmp;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = tmp(504);
  if (stateFromStores) {
    stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  }
  return stateFromStores;
}) : ((arg0) => {
  let _private;
  _require = arg0;
  let stateFromStores = closure_16();
  const items = [PermissionStore];
  const obj = require("get initialized");
  if (stateFromStores) {
    stateFromStores = obj.useStateFromStores(items, () => {
      let tmp = null != _private;
      if (tmp) {
        tmp = _private.isPrivate() || PermissionStore.can(metroImportAll.SEND_MESSAGES, _private);
        const canResult = _private.isPrivate() || PermissionStore.can(metroImportAll.SEND_MESSAGES, _private);
      }
      return tmp;
    });
  }
  return stateFromStores;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp10 = ReactCompilerGating.isReactCompilerEnabled() ? ((location) => {
  let TIER_2;
  let currentUser;
  let obj5;
  let tmp4;
  let tmp6;
  let tmp7;
  let obj = react;
  const cResult = obj.c(7);
  if (cResult[0] !== location) {
    const obj2 = { location };
    cResult[0] = location;
    cResult[1] = obj2;
    tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  const config = closure_15.useConfig(tmp4);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function c() {
      const obj = require("PremiumTypeUtils");
      return obj.isPremium(currentUser.getCurrentUser(), TIER_2.TIER_2);
    };
    cResult[2] = items;
    cResult[3] = fn;
    tmp7 = fn;
    tmp6 = items;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp6, tmp7);
  if (cResult[4] === config) {
    let tmp10;
    if (cResult[5] === stateFromStores) {
      tmp10 = cResult[6];
    }
    return tmp10;
  }
  if (config.enabled) {
    let obj4;
    if (stateFromStores) {
      obj4 = { limit, isUpgradable: false };
      const obj3 = { limit, isUpgradable: false };
    } else {
      obj4 = { limit: config.limit, isUpgradable: true };
    }
    obj5 = obj4;
  } else {
    obj5 = { limit: 0, isUpgradable: false };
  }
  cResult[4] = config;
  cResult[5] = stateFromStores;
  cResult[6] = obj5;
  tmp10 = obj5;
}) : ((location) => {
  let TIER_2;
  let currentUser;
  let obj5;
  let obj = { location };
  const config = closure_15.useConfig(obj);
  const items = [UserStore];
  const obj2 = get_initialized;
  if (config.enabled) {
    let obj4;
    if (obj2.useStateFromStores(items, () => {
      const obj = require("PremiumTypeUtils");
      return obj.isPremium(currentUser.getCurrentUser(), TIER_2.TIER_2);
    })) {
      obj4 = { limit, isUpgradable: false };
      const obj3 = { limit, isUpgradable: false };
    } else {
      obj4 = { limit: config.limit, isUpgradable: true };
    }
    obj5 = obj4;
  } else {
    obj5 = { limit: 0, isUpgradable: false };
  }
  return obj5;
});
function canUseScheduledMessages(location) {
  const obj = { location };
  return closure_15.getConfig(obj).enabled;
}
function getEarliestScheduledTime() {
  const obj = _modDef4467();
  return obj.add(map1, "seconds");
}
function getLatestScheduledTime(dependencyMap) {
  const obj = _modDef4467();
  const addResult = obj.add(unpackModuleId, "seconds");
  if (null == dependencyMap) {
    return addResult;
  } else {
    const tmpResult = _modDef4467;
    const tmpResult3 = SnowflakeUtilsDefault;
    const tmpResultResult = tmpResult(tmpResult3.extractTimestamp(dependencyMap));
    const tmpResult4 = _modDef4467;
    return tmpResult4.min(addResult, tmpResultResult.add(authStore, "seconds"));
  }
}
function convertServerScheduledMessageCreateArgs(channelId) {
  return { channelId: channelId.channel_id, content: channelId.content, type: channelId.type, flags: channelId.flags, messageReference: channelId.message_reference };
}
let result = size.fileFinishedImporting("modules/scheduled_messages/ScheduledMessageUtils.tsx");

export const scheduledMessageLogger = tmp4;
export const parseContentAndFlagsForSilentMessage = function parseContentAndFlagsForSilentMessage(arg0) {
  let content;
  let flags;
  let tmp4;
  ({ content, flags } = arg0);
  const tmp2 = _slicedToArray(parseContentForSuppressNotificationsDefault(content), 2);
  const items = [, ];
  if (tmp2[0]) {
    items[0] = tmp2[1];
    const addFlag = FlagUtils.addFlag;
    FlagUtils;
    if (flags == null) {
      flags = 0;
    }
    items[1] = addFlag(flags, metroImportDefault.SUPPRESS_NOTIFICATIONS);
    tmp4 = items;
  } else {
    items[0] = content;
    let num = flags;
    if (flags == null) {
      num = 0;
    }
    items[1] = num;
    tmp4 = items;
  }
  return tmp4;
};
export const unparseContentAndFlagsForSilentMessage = function unparseContentAndFlagsForSilentMessage(createArgs) {
  let content;
  let flags;
  ({ content, flags } = createArgs);
  const hasFlag = FlagUtils.hasFlag;
  FlagUtils;
  if (flags == null) {
    flags = 0;
  }
  let combined = content;
  if (hasFlag(flags, metroImportDefault.SUPPRESS_NOTIFICATIONS)) {
    const _HermesInternal = HermesInternal;
    combined = "" + parseContentForSuppressNotifications.SILENT_SENTINEL + " " + content;
  }
  return combined;
};
export const trackScheduledMessageTimePickerOpened = function trackScheduledMessageTimePickerOpened(arg0) {
  let channelId;
  let entryPoint;
  let isEditing;
  ({ entryPoint, isEditing, channelId } = arg0);
  const obj = AnalyticsUtilsDefault;
  obj.track(metroRequire.SCHEDULED_MESSAGE_TIME_PICKER_OPENED, { entry_point: entryPoint, is_editing: isEditing, channel_id: channelId });
};
export const useCanUseScheduledMessages = tmp8;
export const useCanSendScheduledMessagesInChannel = tmp9;
export { canUseScheduledMessages };
export const canSendScheduledMessagesInChannel = function canSendScheduledMessagesInChannel(isPrivate, location) {
  const obj = { location };
  let enabled = closure_15.getConfig(obj).enabled;
  if (enabled) {
    enabled = isPrivate.isPrivate() || PermissionStore.can(metroImportAll.SEND_MESSAGES, isPrivate);
    const canResult = isPrivate.isPrivate() || PermissionStore.can(metroImportAll.SEND_MESSAGES, isPrivate);
  }
  return enabled;
};
export const getPresetScheduledTimes = function getPresetScheduledTimes() {
  let addResult1;
  let intl3;
  let tmp6;
  let tmp7;
  let tmp9;
  const obj = _modDef4467();
  const addResult = obj.add(map1, "seconds");
  const obj2 = _modDef4467();
  const startOfResult = obj2.startOf("day");
  const result = startOfResult.set("hours", 9);
  const obj5 = _modDef4467();
  const startOfResult1 = obj5.startOf("day");
  const result1 = startOfResult1.set("hours", 13);
  const obj3 = { label: null, value: null };
  const isAfterResult = result.isAfter(addResult);
  const intl = intl7.intl;
  const string = intl.string;
  const t = intl7.t;
  if (isAfterResult) {
    obj3.label = string(t["qINKo/"]);
    obj3.value = result;
    tmp6 = require;
    tmp7 = obj3;
  } else {
    obj3.label = string(t.tjIn9i);
    obj3.value = result.add(1, "day");
    tmp6 = require;
    tmp7 = obj3;
  }
  const items = [tmp7, , ];
  const obj4 = { label: null, value: null };
  const isAfterResult1 = result1.isAfter(addResult);
  const intl2 = tmp6(1126).intl;
  const string2 = intl2.string;
  const t2 = tmp6(1126).t;
  if (isAfterResult1) {
    obj4.label = string2(t2.qT6LjY);
    obj4.value = result1;
    tmp9 = obj4;
  } else {
    obj4.label = string2(t2.EMRZyS);
    obj4.value = result1.add(1, "day");
    tmp9 = obj4;
  }
  items[1] = tmp9;
  const obj6 = { label: intl3.string(tmp6(1126).t["+P5MmK"]), value: addResult1.set("hours", 9) };
  intl3 = tmp6(1126).intl;
  const obj11 = _modDef4467();
  const startOfResult2 = obj11.startOf("isoWeek");
  items[2] = obj6;
  addResult1 = startOfResult2.add(1, "week");
  return items;
};
export const getDefaultScheduledTime = function getDefaultScheduledTime() {
  const obj = _modDef4467();
  const startOfResult = obj.startOf("hour");
  const addResult = startOfResult.add(1, "hour");
  const isBefore = addResult.isBefore;
  let addResult1 = addResult;
  const obj4 = _modDef4467();
  if (isBefore(obj4.add(map1, "seconds"))) {
    addResult1 = addResult.add(1, "hour");
  }
  return addResult1;
};
export const getScheduledTimeError = function getScheduledTimeError(isBefore, arg1) {
  let stringResult;
  isBefore = isBefore.isBefore;
  const obj = _modDef4467();
  if (isBefore(obj.add(map1, "seconds"))) {
    const intl2 = intl7.intl;
    stringResult = intl2.string(intl7.t["w/fgvh"]);
  } else {
    const isAfter = isBefore.isAfter;
    const obj2 = _modDef4467();
    const addResult = obj2.add(unpackModuleId, "seconds");
    let minResult = addResult;
    if (null != arg1) {
      const tmpResult = _modDef4467;
      const tmpResult3 = SnowflakeUtilsDefault;
      const tmpResultResult = tmpResult(tmpResult3.extractTimestamp(arg1));
      const tmpResult4 = _modDef4467;
      minResult = tmpResult4.min(addResult, tmpResultResult.add(authStore, "seconds"));
    }
    stringResult = null;
    if (isAfter(minResult)) {
      const intl = intl7.intl;
      stringResult = intl.string(intl7.t.Nt0tz7);
    }
  }
  return stringResult;
};
export { getEarliestScheduledTime };
export { getLatestScheduledTime };
export const getScheduledMessagesLimit = function getScheduledMessagesLimit(ScheduledMessagesCreateRoadblock) {
  let obj5;
  const obj = PremiumTypeUtils;
  const obj2 = { location: ScheduledMessagesCreateRoadblock };
  const isPremiumResult = obj.isPremium(UserStore.getCurrentUser(), PremiumTypes.TIER_2);
  const config = closure_15.getConfig(obj2);
  if (config.enabled) {
    let obj4;
    if (isPremiumResult) {
      obj4 = { limit, isUpgradable: false };
      const obj3 = { limit, isUpgradable: false };
    } else {
      obj4 = { limit: config.limit, isUpgradable: true };
    }
    obj5 = obj4;
  } else {
    obj5 = { limit: 0, isUpgradable: false };
  }
  return obj5;
};
export const useScheduledMessagesLimit = tmp10;
export const convertServerScheduledMessageSend = function convertServerScheduledMessageSend(body) {
  let attachment_uploads;
  let createMessageRecord;
  let create_args;
  let obj2;
  const obj = { userId: body.user_id, scheduledMessageId: body.scheduled_message_id, sendAtTimestamp: body.send_at_timestamp, createArgs: { channelId: create_args.channel_id, content: create_args.content, type: create_args.type, flags: create_args.flags, messageReference: create_args.message_reference }, state: body.state, attachmentUploads: attachment_uploads.map((filename) => ({ filename: filename.filename, uploadedFilename: filename.uploaded_filename, description: filename.description, title: filename.title })), record: createMessageRecord(obj2) };
  create_args = body.create_args;
  attachment_uploads = body.attachment_uploads;
  if (attachment_uploads == null) {
    attachment_uploads = [];
  }
  obj2 = { timestamp: body.send_at_timestamp };
  createMessageRecord = MessageRecordUtils.createMessageRecord;
  MessageRecordUtils;
  const merged = Object.assign(body.message_preview);
  return obj;
};
export const getMessageForState = function getMessageForState(state) {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  if (ScheduledMessageTypes.ScheduledMessageSendState.SCHEDULED === state) {
    const obj = { isError: false, stateMessage: intl6.string(intl7.t.Fn6Odn) };
    intl6 = intl7.intl;
    return obj;
  } else if (ScheduledMessageTypes.ScheduledMessageSendState.ERROR_CHANNEL_NOT_FOUND === state) {
    const obj2 = { isError: true, stateMessage: intl5.string(intl7.t.v5O2dK) };
    intl5 = intl7.intl;
    return obj2;
  } else if (ScheduledMessageTypes.ScheduledMessageSendState.ERROR_USER_NOT_FOUND === state) {
    const obj3 = { isError: true, stateMessage: intl4.string(intl7.t.j8uIfG) };
    intl4 = intl7.intl;
    return obj3;
  } else if (ScheduledMessageTypes.ScheduledMessageSendState.ERROR_USER_CANNOT_USE_SCHEDULED_MESSAGES === state) {
    const obj4 = { isError: true, stateMessage: intl3.string(intl7.t["w6zHX/"]) };
    intl3 = intl7.intl;
    return obj4;
  } else if (ScheduledMessageTypes.ScheduledMessageSendState.ERROR_SEND_FAILED === state) {
    const obj5 = { isError: true, stateMessage: intl2.string(intl7.t.pflV7z) };
    intl2 = intl7.intl;
    return obj5;
  } else if (ScheduledMessageTypes.ScheduledMessageSendState.ERROR_SCHEDULED_MESSAGES_DISABLED === state) {
    const obj6 = { isError: true, stateMessage: intl.string(intl7.t.j8uIfG) };
    intl = intl7.intl;
    return obj6;
  } else {
    const tmpResult = GlobalUtils;
    tmpResult.assertNever(state);
  }
};
export { convertServerScheduledMessageCreateArgs };