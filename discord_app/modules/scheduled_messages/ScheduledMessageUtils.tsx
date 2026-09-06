// === Module 7845: ScheduledMessageUtils ===

// Module 7845 (ScheduledMessageUtils)
import LoggerDefault from "Logger" /* 3 */;
import _modDef38 from "module_38" /* 38 */;
import util from "util" /* 1114 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import FlagUtils from "FlagUtils" /* 1384 */;
import PremiumTypeUtils from "PremiumTypeUtils" /* 1885 */;
import _modDef4153 from "module_4153" /* 4153 */;
import MessageRecordUtils from "MessageRecordUtils" /* 4783 */;
import parseContentForSuppressNotifications from "parseContentForSuppressNotifications" /* 7684 */;
import ScheduledMessageTypes from "ScheduledMessageTypes" /* 7847 */;
import _slicedToArray from "module_32" /* 32 */;
import UserStore from "UserStore" /* 1371 */;

const parseContentForSuppressNotificationsDefault = parseContentForSuppressNotifications;

require = fn;
const Constants = fn(1074);
({ AnalyticEvents: hasOwnProperty, MessageFlags: metroRequire } = Constants);
const PremiumTypes = fn(1373).PremiumTypes;
const ScheduledMessagesConstants = fn(7846);
({ MAX_SCHEDULE_TIME_AFTER_CREATION_SECONDS: closure_8, MAX_SCHEDULE_TIME_INTO_FUTURE_SECONDS: closure_9, MAX_SCHEDULED_MESSAGES_PER_USER: c10, MIN_SCHEDULE_TIME_INTO_FUTURE_SECONDS: closure_11 } = ScheduledMessagesConstants);
class ScheduledMessagesConfig {
  constructor(arg0, arg1) {
    merged = Object.assign({ enabled: false, limit: 0 });
    tmp2 = closure_1(closure_2[6])(null != fn.limit, "Config is missing scheduled message limit");
    merged.enabled = global;
    merged.limit = fn.limit;
    return merged;
  }
}
fn(1433);
let ApexExperiment = { name: "2026-08-scheduled-messages", kind: "user", defaultConfig: null, variations: null };
let merged = Object.assign({ enabled: false, limit: 0 });
_modDef38(true, "Config is missing scheduled message limit");
merged.enabled = false;
merged.limit = 0;
ApexExperiment.defaultConfig = merged;
ApexExperiment = {
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
ApexExperiment[2] = (arg0) => {
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
ApexExperiment.variations = ApexExperiment;
let closure_13 = ApexExperiment.createApexExperiment(ApexExperiment);
const size = fn(2);
const result = size.fileFinishedImporting("modules/scheduled_messages/ScheduledMessageUtils.tsx");

export const scheduledMessageLogger = new LoggerDefault("Scheduled Messages");
export const parseContentAndFlagsForSilentMessage = function parseContentAndFlagsForSilentMessage(arg0) {
  ({ content, flags } = arg0);
  const tmp2 = _slicedToArray(parseContentForSuppressNotificationsDefault(content), 2);
  const items = [, ];
  if (tmp2[0]) {
    items[0] = tmp2[1];
    if (flags == null) {
      flags = 0;
    }
    items[1] = FlagUtils.addFlag(flags, constants2.SUPPRESS_NOTIFICATIONS);
    let tmp4 = items;
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
  ({ content, flags } = createArgs);
  if (flags == null) {
    flags = 0;
  }
  let combined = content;
  if (obj.hasFlag(flags, constants2.SUPPRESS_NOTIFICATIONS)) {
    const _HermesInternal = HermesInternal;
    combined = "" + parseContentForSuppressNotifications.SILENT_SENTINEL + " " + content;
  }
  return combined;
};
export const trackScheduledMessageTimePickerOpened = function trackScheduledMessageTimePickerOpened(arg0) {
  ({ entryPoint, isEditing, channelId } = arg0);
  AnalyticsUtilsDefault.track(constants.SCHEDULED_MESSAGE_TIME_PICKER_OPENED, { entry_point: entryPoint, is_editing: isEditing, channel_id: channelId });
};
export const useCanUseScheduledMessages = function useCanUseScheduledMessages() {
  return closure_13.useConfig({ location: "useCanUseScheduledMessages" }).enabled;
};
export const canUseScheduledMessages = function canUseScheduledMessages(location) {
  return closure_13.getConfig({ location }).enabled;
};
export const getDefaultScheduledTime = function getDefaultScheduledTime() {
  const obj = _modDef4153();
  const addResult = _modDef4153().startOf("hour").add(1, "hour");
  const startOfResult = _modDef4153().startOf("hour");
  let addResult1 = addResult;
  if (addResult.isBefore(obj4.add(closure_1_11, "seconds"))) {
    addResult1 = addResult.add(1, "hour");
  }
  return addResult1;
};
export const getScheduledTimeError = function getScheduledTimeError(isBefore, arg1) {
  if (isBefore.isBefore(obj.add(closure_1_11, "seconds"))) {
    const intl2 = util.intl;
    let stringResult = intl2.string(util.t["w/fgvh"]);
  } else {
    const addResult = tmp(4153)().add(React7, "seconds");
    let minResult = addResult;
    if (null != arg1) {
      tmp(4153);
      const tmpResult = tmp(11);
      const tmpResultResult = tmpResult(tmpResult.extractTimestamp(arg1));
      minResult = tmp(4153).min(addResult, tmpResultResult.add(React6, "seconds"));
      const tmpResult1 = tmp(4153);
    }
    stringResult = null;
    if (isBefore.isAfter(minResult)) {
      const intl = util.intl;
      stringResult = intl.string(util.t.Nt0tz7);
    }
    const obj2 = tmp(4153)();
  }
  return stringResult;
};
export const getEarliestScheduledTime = function getEarliestScheduledTime() {
  return _modDef4153().add(closure_1_11, "seconds");
};
export const getLatestScheduledTime = function getLatestScheduledTime(arg0) {
  const addResult = _modDef4153().add(React7, "seconds");
  if (null == arg0) {
    return addResult;
  } else {
    tmp(4153);
    const tmpResult = tmp(11);
    const tmpResultResult = tmpResult(tmpResult.extractTimestamp(arg0));
    return tmp(4153).min(addResult, tmpResultResult.add(React6, "seconds"));
  }
  const obj = _modDef4153();
};
export const getScheduledMessagesLimit = function getScheduledMessagesLimit(ScheduledMessagesCreateRoadblock) {
  let obj = { location: ScheduledMessagesCreateRoadblock };
  const config = closure_13.getConfig(obj);
  if (config.enabled) {
    if (isPremiumResult) {
      obj = { limit, isUpgradable: false };
    } else {
      const obj1 = { limit: config.limit, isUpgradable: true };
    }
  } else {
    return { limit: 0, isUpgradable: false };
  }
};
export const useScheduledMessagesLimit = function useScheduledMessagesLimit(ScheduledMessagesMobileModal) {
  let obj = { location: ScheduledMessagesMobileModal };
  const config = closure_13.useConfig(obj);
  const items = [UserStore];
  if (config.enabled) {
    if (obj2.useStateFromStores(items, () => PremiumTypeUtils.isPremium(currentUser.getCurrentUser(), TIER_2.TIER_2))) {
      obj = { limit, isUpgradable: false };
    } else {
      obj = { limit: config.limit, isUpgradable: true };
    }
  } else {
    return { limit: 0, isUpgradable: false };
  }
};
export const convertServerScheduledMessageSend = function convertServerScheduledMessageSend(body) {
  let obj = { userId: body.user_id, scheduledMessageId: body.scheduled_message_id, sendAtTimestamp: body.send_at_timestamp, createArgs: null, state: body.state, attachmentUploads: null, record: null };
  const create_args = body.create_args;
  obj.createArgs = { channelId: create_args.channel_id, content: create_args.content, type: create_args.type, flags: create_args.flags, messageReference: create_args.message_reference };
  let attachment_uploads = body.attachment_uploads;
  if (attachment_uploads == null) {
    attachment_uploads = [];
  }
  obj.attachmentUploads = attachment_uploads.map((filename) => ({ filename: filename.filename, uploadedFilename: filename.uploaded_filename, description: filename.description, title: filename.title }));
  obj = {};
  const merged = Object.assign(body.message_preview);
  obj.timestamp = body.send_at_timestamp;
  obj.record = MessageRecordUtils.createMessageRecord(obj);
  return obj;
};
export const getMessageForState = function getMessageForState(state) {
  if (ScheduledMessageTypes.ScheduledMessageSendState.SCHEDULED === state) {
    let obj = { isError: false, stateMessage: null };
    const intl6 = tmp(1114).intl;
    obj.stateMessage = intl6.string(tmp(1114).t.Fn6Odn);
    return obj;
  } else if (tmp(7847).ScheduledMessageSendState.ERROR_CHANNEL_NOT_FOUND === state) {
    obj = { isError: true, stateMessage: null };
    const intl5 = tmp(1114).intl;
    obj.stateMessage = intl5.string(tmp(1114).t.v5O2dK);
    return obj;
  } else if (tmp(7847).ScheduledMessageSendState.ERROR_USER_NOT_FOUND === state) {
    const obj1 = { isError: true, stateMessage: null };
    const intl4 = tmp(1114).intl;
    obj1.stateMessage = intl4.string(tmp(1114).t.j8uIfG);
    return obj1;
  } else if (tmp(7847).ScheduledMessageSendState.ERROR_USER_CANNOT_USE_SCHEDULED_MESSAGES === state) {
    const obj2 = { isError: true, stateMessage: null };
    const intl3 = tmp(1114).intl;
    obj2.stateMessage = intl3.string(tmp(1114).t["w6zHX/"]);
    return obj2;
  } else if (tmp(7847).ScheduledMessageSendState.ERROR_SEND_FAILED === state) {
    const obj3 = { isError: true, stateMessage: null };
    const intl2 = tmp(1114).intl;
    obj3.stateMessage = intl2.string(tmp(1114).t.pflV7z);
    return obj3;
  } else if (tmp(7847).ScheduledMessageSendState.ERROR_SCHEDULED_MESSAGES_DISABLED === state) {
    const obj4 = { isError: true, stateMessage: null };
    const intl = tmp(1114).intl;
    obj4.stateMessage = intl.string(tmp(1114).t.j8uIfG);
    return obj4;
  } else {
    tmp(1369).assertNever(state);
  }
};
export const convertServerScheduledMessageCreateArgs = function convertServerScheduledMessageCreateArgs(channelId) {
  return { channelId: channelId.channel_id, content: channelId.content, type: channelId.type, flags: channelId.flags, messageReference: channelId.message_reference };
};