// discord_app/modules/scheduled_messages/ScheduledMessageUtils.tsx
import timestampDefault from "../debug/Logger.tsx";
import _modDef38 from "../../../_runtime/metro/00038__.js";
import expandEventPropertiesDefault from "../../utils/AnalyticsUtils.tsx";
import getSystemLocale from "../../intl/index.native.tsx";
import hasFlag from "../../../discord_common/js/shared/utils/FlagUtils.tsx";
import isPremiumAtLeast from "../../utils/PremiumTypeUtils.tsx";
import hooksDefault from "../../../_runtime/04075_hooks.js";
import createMinimalMessageRecord from "../messages/MessageRecordUtils.tsx";
import regExp from "../suppress_notifications/parseContentForSuppressNotifications.tsx";
import regExpDefault from "../suppress_notifications/parseContentForSuppressNotifications.tsx";
import ScheduledMessageSendState from "ScheduledMessageTypes.tsx";
import closure_3 from "../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../stores/UserStore.tsx";
import ME from "../../Constants.tsx";
import { PremiumTypes } from "../premium/PremiumConstants.tsx";
import MIN_SCHEDULE_TIME_INTO_FUTURE_SECONDS from "../../../discord_common/js/shared/shared-constants/ScheduledMessagesConstants.tsx";
import ApexExperiment from "../experiments/apex/index.tsx";

require = arg1;
({ AnalyticEvents: c5, MessageFlags: closure_6 } = ME);
({
  MAX_SCHEDULE_TIME_AFTER_CREATION_SECONDS: closure_8,
  MAX_SCHEDULE_TIME_INTO_FUTURE_SECONDS: c9,
  MAX_SCHEDULED_MESSAGES_PER_USER: c10,
  MIN_SCHEDULE_TIME_INTO_FUTURE_SECONDS: unpackModuleId,
} = MIN_SCHEDULE_TIME_INTO_FUTURE_SECONDS);
class ScheduledMessagesConfig {
  constructor(arg0, arg1) {
    obj = Object.create(new.target.prototype);
    tmp2 = require("../../../_runtime/metro/00038__.js")(
      null != arg1.limit,
      "Config is missing scheduled message limit",
    );
    obj.enabled = global;
    obj.limit = arg1.limit;
    return obj;
  }
}
ApexExperiment = { name: "2026-08-scheduled-messages", kind: "user", defaultConfig: null, variations: null };
ApexExperiment = Object.create(ScheduledMessagesConfig.prototype);
_modDef38(true, "Config is missing scheduled message limit");
ApexExperiment.enabled = false;
ApexExperiment.limit = 0;
ApexExperiment[2] = ApexExperiment;
let obj1 = {
  1: null,
  2: (arg0) => {
    const parsed = JSON.parse(arg0);
    if (typeof ScheduledMessagesConfig !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const obj = Object.create(ScheduledMessagesConfig.prototype);
    _modDef38(null != parsed.limit, "Config is missing scheduled message limit");
    obj.enabled = true;
    obj.limit = parsed.limit;
    return obj;
  },
};
obj1[2] = (arg0) => {
  const parsed = JSON.parse(arg0);
  if (typeof ScheduledMessagesConfig !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj = Object.create(ScheduledMessagesConfig.prototype);
  _modDef38(null != parsed.limit, "Config is missing scheduled message limit");
  obj.enabled = true;
  obj.limit = parsed.limit;
  return obj;
};
ApexExperiment[3] = obj1;
let closure_13 = ApexExperiment.createApexExperiment(ApexExperiment);
let tmp4 = new timestampDefault("Scheduled Messages");
const result = require("set").fileFinishedImporting("modules/scheduled_messages/ScheduledMessageUtils.tsx");

export const scheduledMessageLogger = tmp4;
export const parseContentAndFlagsForSilentMessage = function parseContentAndFlagsForSilentMessage(arg0) {
  ({ content, flags } = arg0);
  const tmp2 = callback(regExpDefault(content), 2);
  const items = [,];
  if (tmp2[0]) {
    items[0] = tmp2[1];
    if (flags == null) {
      flags = 0;
    }
    items[1] = hasFlag.addFlag(flags, constants2.SUPPRESS_NOTIFICATIONS);
    let tmp4 = items;
    const obj = hasFlag;
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
    combined = "" + regExp.SILENT_SENTINEL + " " + content;
  }
  return combined;
};
export const trackScheduledMessageTimePickerOpened = function trackScheduledMessageTimePickerOpened(arg0) {
  ({ entryPoint, isEditing, channelId } = arg0);
  expandEventPropertiesDefault.track(constants.SCHEDULED_MESSAGE_TIME_PICKER_OPENED, {
    entry_point: entryPoint,
    is_editing: isEditing,
    channel_id: channelId,
  });
};
export const useCanUseScheduledMessages = function useCanUseScheduledMessages() {
  return store.useConfig({ location: "useCanUseScheduledMessages" }).enabled;
};
export const canUseScheduledMessages = function canUseScheduledMessages(location) {
  return store.getConfig({ location }).enabled;
};
export const getDefaultScheduledTime = function getDefaultScheduledTime() {
  const obj = hooksDefault();
  const addResult = hooksDefault().startOf("hour").add(1, "hour");
  const startOfResult = hooksDefault().startOf("hour");
  let addResult1 = addResult;
  if (addResult.isBefore(obj4.add(closure_11, "seconds"))) {
    addResult1 = addResult.add(1, "hour");
  }
  return addResult1;
};
export const getScheduledTimeError = function getScheduledTimeError(isBefore, closure_2) {
  if (isBefore.isBefore(obj.add(closure_11, "seconds"))) {
    const intl2 = getSystemLocale.intl;
    let stringResult = intl2.string(getSystemLocale.t["w/fgvh"]);
  } else {
    const addResult = tmp(4075)().add(closure_9, "seconds");
    let minResult = addResult;
    if (null != closure_2) {
      let tmpResult = tmp(4075);
      tmpResult = tmp(11);
      const tmpResultResult = tmpResult(tmpResult.extractTimestamp(closure_2));
      minResult = tmp(4075).min(addResult, tmpResultResult.add(closure_8, "seconds"));
      const tmpResult1 = tmp(4075);
    }
    stringResult = null;
    if (isBefore.isAfter(minResult)) {
      const intl = getSystemLocale.intl;
      stringResult = intl.string(getSystemLocale.t.Nt0tz7);
    }
    const obj2 = tmp(4075)();
  }
  return stringResult;
};
export const getEarliestScheduledTime = function getEarliestScheduledTime() {
  return hooksDefault().add(closure_11, "seconds");
};
export const getLatestScheduledTime = function getLatestScheduledTime(closure_2) {
  const addResult = hooksDefault().add(closure_9, "seconds");
  if (null == closure_2) {
    return addResult;
  } else {
    let tmpResult = tmp(4075);
    tmpResult = tmp(11);
    const tmpResultResult = tmpResult(tmpResult.extractTimestamp(closure_2));
    return tmp(4075).min(addResult, tmpResultResult.add(closure_8, "seconds"));
  }
  const obj = hooksDefault();
};
export const getScheduledMessagesLimit = function getScheduledMessagesLimit(ScheduledMessagesCreateRoadblock) {
  let obj = isPremiumAtLeast;
  obj = { location: ScheduledMessagesCreateRoadblock };
  const config = store.getConfig(obj);
  if (config.enabled) {
    if (isPremiumResult) {
      obj = { limit: null, isUpgradable: false };
      obj[0] = closure_10;
      obj1 = obj;
    } else {
      obj1 = { limit: null, isUpgradable: true };
      obj1[0] = config.limit;
    }
  } else {
    return { limit: 0, isUpgradable: false };
  }
};
export const useScheduledMessagesLimit = function useScheduledMessagesLimit(ScheduledMessagesMobileModal) {
  let obj = { location: ScheduledMessagesMobileModal };
  const config = store.useConfig(obj);
  const items = [closure_4];
  if (config.enabled) {
    if (
      obj2.useStateFromStores(items, () => callback(table[14]).isPremium(currentUser.getCurrentUser(), TIER_2.TIER_2))
    ) {
      obj = { limit: null, isUpgradable: false };
      obj[0] = closure_10;
    } else {
      obj = { limit: null, isUpgradable: true };
      obj[0] = config.limit;
    }
  } else {
    return { limit: 0, isUpgradable: false };
  }
};
export const convertServerScheduledMessageSend = function convertServerScheduledMessageSend(body) {
  obj = {
    userId: body.user_id,
    scheduledMessageId: body.scheduled_message_id,
    sendAtTimestamp: body.send_at_timestamp,
    createArgs: obj,
    state: body.state,
    attachmentUploads: null,
    record: null,
  };
  const create_args = body.create_args;
  obj = {
    channelId: create_args.channel_id,
    content: create_args.content,
    type: create_args.type,
    flags: create_args.flags,
    messageReference: create_args.message_reference,
  };
  let attachment_uploads = body.attachment_uploads;
  if (attachment_uploads == null) {
    attachment_uploads = [];
  }
  obj[5] = attachment_uploads.map((filename) => ({
    filename: filename.filename,
    uploadedFilename: filename.uploaded_filename,
    description: filename.description,
    title: filename.title,
  }));
  obj = {};
  const merged = Object.assign(body.message_preview);
  obj.timestamp = body.send_at_timestamp;
  obj[6] = createMinimalMessageRecord.createMessageRecord(obj);
  return obj;
};
export const getMessageForState = function getMessageForState(state) {
  if (ScheduledMessageSendState.ScheduledMessageSendState.SCHEDULED === state) {
    let obj = { isError: false, stateMessage: null };
    const intl6 = tmp(1236).intl;
    obj[1] = intl6.string(tmp(1236).t.Fn6Odn);
    return obj;
  } else if (tmp(7591).ScheduledMessageSendState.ERROR_CHANNEL_NOT_FOUND === state) {
    obj = { isError: true, stateMessage: null };
    const intl5 = tmp(1236).intl;
    obj[1] = intl5.string(tmp(1236).t.v5O2dK);
    return obj;
  } else if (tmp(7591).ScheduledMessageSendState.ERROR_USER_NOT_FOUND === state) {
    obj1 = { isError: true, stateMessage: null };
    const intl4 = tmp(1236).intl;
    obj1[1] = intl4.string(tmp(1236).t.j8uIfG);
    return obj1;
  } else if (tmp(7591).ScheduledMessageSendState.ERROR_USER_CANNOT_USE_SCHEDULED_MESSAGES === state) {
    const obj2 = { isError: true, stateMessage: null };
    const intl3 = tmp(1236).intl;
    obj2[1] = intl3.string(tmp(1236).t["w6zHX/"]);
    return obj2;
  } else if (tmp(7591).ScheduledMessageSendState.ERROR_SEND_FAILED === state) {
    const obj3 = { isError: true, stateMessage: null };
    const intl2 = tmp(1236).intl;
    obj3[1] = intl2.string(tmp(1236).t.pflV7z);
    return obj3;
  } else if (tmp(7591).ScheduledMessageSendState.ERROR_SCHEDULED_MESSAGES_DISABLED === state) {
    const obj4 = { isError: true, stateMessage: null };
    const intl = tmp(1236).intl;
    obj4[1] = intl.string(tmp(1236).t.j8uIfG);
    return obj4;
  } else {
    tmp(1471).assertNever(state);
  }
};
export const convertServerScheduledMessageCreateArgs = function convertServerScheduledMessageCreateArgs(channelId) {
  return {
    channelId: channelId.channel_id,
    content: channelId.content,
    type: channelId.type,
    flags: channelId.flags,
    messageReference: channelId.message_reference,
  };
};
