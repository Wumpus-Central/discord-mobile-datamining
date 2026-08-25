// discord_app/modules/scheduled_messages/ScheduledMessageUtils.tsx
import timestampDefault from "../debug/Logger.tsx";
import _modDef38 from "../../../_runtime/metro/00038__.js";
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import hasFlag from "../../../discord_common/js/shared/utils/FlagUtils.tsx";
import isPremiumAtLeast from "../../utils/PremiumTypeUtils.tsx";
import hooksDefault from "../../../_runtime/03979_hooks.js";
import regExp from "../suppress_notifications/parseContentForSuppressNotifications.tsx";
import regExpDefault from "../suppress_notifications/parseContentForSuppressNotifications.tsx";
import ScheduledMessageSendState from "ScheduledMessageTypes.tsx";
import closure_3 from "../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../records/MessageRecord.tsx";
import closure_5 from "../../stores/UserStore.tsx";
import { MessageFlags } from "../../Constants.tsx";
import { PremiumTypes } from "../premium/PremiumConstants.tsx";
import MIN_SCHEDULE_TIME_INTO_FUTURE_SECONDS from "../../../discord_common/js/shared/shared-constants/ScheduledMessagesConstants.tsx";
import ApexExperiment from "../experiments/apex/index.tsx";

require = arg1;
({ MAX_SCHEDULED_MESSAGES_PER_USER: closure_8, MIN_SCHEDULE_TIME_INTO_FUTURE_SECONDS: c9 } = MIN_SCHEDULE_TIME_INTO_FUTURE_SECONDS);
class ScheduledMessagesConfig {
  constructor(arg0, arg1) {
    obj = Object.create(new.target.prototype);
    tmp2 = require("../../../_runtime/metro/00038__.js")(null != arg1.limit, "Config is missing scheduled message limit");
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
  }
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
let closure_11 = ApexExperiment.createApexExperiment(ApexExperiment);
const tmp3 = new timestampDefault("Scheduled Messages");
const result = require("set").fileFinishedImporting("modules/scheduled_messages/ScheduledMessageUtils.tsx");

export const scheduledMessageLogger = tmp3;
export const parseContentAndFlagsForSilentMessage = function parseContentAndFlagsForSilentMessage(arg0) {
  ({ content, flags } = arg0);
  const tmp2 = callback(regExpDefault(content), 2);
  const items = [, ];
  if (tmp2[0]) {
    items[0] = tmp2[1];
    if (flags == null) {
      flags = 0;
    }
    items[1] = hasFlag.addFlag(flags, MessageFlags.SUPPRESS_NOTIFICATIONS);
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
export const unparseContentAndFlagsForSilentMessage = function unparseContentAndFlagsForSilentMessage(scheduledMessage) {
  ({ content, flags } = scheduledMessage);
  if (flags == null) {
    flags = 0;
  }
  let combined = content;
  if (obj.hasFlag(flags, MessageFlags.SUPPRESS_NOTIFICATIONS)) {
    const _HermesInternal = HermesInternal;
    combined = "" + regExp.SILENT_SENTINEL + " " + content;
  }
  return combined;
};
export const useCanUseScheduledMessages = function useCanUseScheduledMessages() {
  return store.useConfig({ location: "useCanUseScheduledMessages" }).enabled;
};
export const canUseScheduledMessages = function canUseScheduledMessages(location) {
  return store.getConfig({ location }).enabled;
};
export const getDefaultScheduledTime = function getDefaultScheduledTime() {
  const obj = hooksDefault();
  const addResult = hooksDefault().add(closure_9, "seconds");
  const obj2 = hooksDefault();
  const addResult1 = hooksDefault().startOf("hour").add(1, "hour");
  let addResult2 = addResult1;
  if (addResult1.isBefore(addResult)) {
    addResult2 = addResult1.add(1, "hour");
  }
  return addResult2;
};
export const getScheduledMessagesLimit = function getScheduledMessagesLimit(location) {
  let obj = isPremiumAtLeast;
  obj = { location };
  const config = store.getConfig(obj);
  if (!config.enabled) {
    return 0;
  }
};
export const useScheduledMessagesLimit = function useScheduledMessagesLimit(location) {
  const config = store.useConfig({ location });
  initialize;
  [][0] = closure_5;
  if (!config.enabled) {
    return 0;
  }
};
export const convertServerScheduledMessageSend = function convertServerScheduledMessageSend(body) {
  obj = { userId: body.user_id, scheduledMessageId: body.scheduled_message_id, sendAtTimestamp: body.send_at_timestamp, scheduledMessage: obj, state: body.state, attachmentUploads: null, record: null };
  const scheduled_message = body.scheduled_message;
  obj = { channelId: scheduled_message.channel_id, content: scheduled_message.content, type: scheduled_message.type, flags: scheduled_message.flags, messageReference: scheduled_message.message_reference };
  let attachment_uploads = body.attachment_uploads;
  if (attachment_uploads == null) {
    attachment_uploads = [];
  }
  obj[5] = attachment_uploads.map((filename) => ({ filename: filename.filename, uploadedFilename: filename.uploaded_filename, description: filename.description, title: filename.title }));
  obj = { id: body.scheduled_message_id, content: body.scheduled_message.content, author: authStore.getUser(body.user_id), timestamp: hooksDefault(body.send_at_timestamp).toDate(), channel_id: body.scheduled_message.channel_id };
  const obj4 = hooksDefault(body.send_at_timestamp);
  obj[6] = new closure_4(obj);
  return obj;
};
export const getMessageForState = function getMessageForState(state) {
  if (ScheduledMessageSendState.ScheduledMessageSendState.SCHEDULED === state) {
    let obj = { isError: false, stateMessage: null };
    const intl6 = tmp(1236).intl;
    obj[1] = intl6.string(tmp(1236).t.Fn6Odn);
    return obj;
  } else if (tmp(11573).ScheduledMessageSendState.ERROR_CHANNEL_NOT_FOUND === state) {
    obj = { isError: true, stateMessage: null };
    const intl5 = tmp(1236).intl;
    obj[1] = intl5.string(tmp(1236).t.v5O2dK);
    return obj;
  } else if (tmp(11573).ScheduledMessageSendState.ERROR_USER_NOT_FOUND === state) {
    obj1 = { isError: true, stateMessage: null };
    const intl4 = tmp(1236).intl;
    obj1[1] = intl4.string(tmp(1236).t.j8uIfG);
    return obj1;
  } else if (tmp(11573).ScheduledMessageSendState.ERROR_USER_CANNOT_USE_SCHEDULED_MESSAGES === state) {
    const obj2 = { isError: true, stateMessage: null };
    const intl3 = tmp(1236).intl;
    obj2[1] = intl3.string(tmp(1236).t["w6zHX/"]);
    return obj2;
  } else if (tmp(11573).ScheduledMessageSendState.ERROR_SEND_FAILED === state) {
    const obj3 = { isError: true, stateMessage: null };
    const intl2 = tmp(1236).intl;
    obj3[1] = intl2.string(tmp(1236).t.pflV7z);
    return obj3;
  } else if (tmp(11573).ScheduledMessageSendState.ERROR_SCHEDULED_MESSAGES_DISABLED === state) {
    const obj4 = { isError: true, stateMessage: null };
    const intl = tmp(1236).intl;
    obj4[1] = intl.string(tmp(1236).t.j8uIfG);
    return obj4;
  } else {
    tmp(1370).assertNever(state);
  }
};
export const convertServerScheduledMessage = function convertServerScheduledMessage(channelId) {
  return { channelId: channelId.channel_id, content: channelId.content, type: channelId.type, flags: channelId.flags, messageReference: channelId.message_reference };
};