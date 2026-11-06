// discord_app/modules/scheduled_messages/ScheduledMessageUtils.tsx
import LoggerDefault from "../debug/Logger.tsx";
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import util from "../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import GlobalUtils from "../../utils/GlobalUtils.tsx";
import FlagUtils from "../../../discord_common/js/shared/utils/FlagUtils.tsx";
import _modDef2166 from "../../../_runtime/metro/02166__.js";
import MessageRecordUtils from "../messages/MessageRecordUtils.tsx";
import parseContentForSuppressNotifications from "../suppress_notifications/parseContentForSuppressNotifications.tsx";
import ScheduledMessageTypes from "ScheduledMessageTypes.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import PermissionStore from "../../stores/PermissionStore.tsx";
import UserStore from "../../stores/UserStore.tsx";

const require = globalThis.__r;
const parseContentForSuppressNotificationsDefault = parseContentForSuppressNotifications;

require = fn;
const Constants = fn(1072);
({ AnalyticEvents: closure_6, MessageFlags: metroImportDefault, Permissions: closure_8 } = Constants);
const PremiumTypes = fn(1387).PremiumTypes;
const ScheduledMessagesConstants = fn(9901);
({
  MAX_SCHEDULE_TIME_AFTER_CREATION_SECONDS: closure_10,
  MAX_SCHEDULE_TIME_INTO_FUTURE_SECONDS: closure_11,
  MAX_SCHEDULED_MESSAGES_PER_USER: closure_12,
  MAX_SCHEDULED_MESSAGES_PER_USER_WITHOUT_NITRO: map1,
  MIN_SCHEDULE_TIME_INTO_FUTURE_SECONDS: closure_14,
} = ScheduledMessagesConstants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/scheduled_messages/ScheduledMessageUtils.tsx");

export const scheduledMessageLogger = new LoggerDefault("Scheduled Messages");
export function parseContentAndFlagsForSilentMessage(arg0) {
  ({ content, flags } = arg0);
  const tmp2 = _slicedToArray(parseContentForSuppressNotificationsDefault(content), 2);
  items = [,];
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
}
export function unparseContentAndFlagsForSilentMessage(createArgs) {
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
}
export function trackScheduledMessageTimePickerOpened(arg0) {
  ({ entryPoint, isEditing, channelId } = arg0);
  AnalyticsUtilsDefault.track(constants.SCHEDULED_MESSAGE_TIME_PICKER_OPENED, {
    entry_point: entryPoint,
    is_editing: isEditing,
    channel_id: channelId,
  });
}
export function useCanSendScheduledMessagesInChannel(channel) {
  _require = channel;
  items = [PermissionStore];
  return require("initialize").useStateFromStores(items, () => {
    let tmp = null != _private;
    if (tmp) {
      let canResult = _private.isPrivate();
      if (!canResult) {
        canResult = PermissionStore.can(constants3.SEND_MESSAGES, _private);
      }
      tmp = canResult;
    }
    return tmp;
  });
}
export function canSendScheduledMessagesInChannel(isPrivate) {
  let canResult = isPrivate.isPrivate();
  if (!canResult) {
    canResult = PermissionStore.can(constants3.SEND_MESSAGES, isPrivate);
  }
  return canResult;
}
export function getPresetScheduledTimes() {
  const addResult = _modDef2166().add(gesture, "seconds");
  const obj = _modDef2166();
  const obj2 = _modDef2166();
  const result = _modDef2166().startOf("day").set("hours", 9);
  const startOfResult = _modDef2166().startOf("day");
  const obj5 = _modDef2166();
  const result1 = _modDef2166().startOf("day").set("hours", 13);
  const obj3 = { label: null, value: null };
  const startOfResult1 = _modDef2166().startOf("day");
  const intl = util.intl;
  const string = intl.string;
  const t = util.t;
  if (isAfterResult) {
    obj3.label = string(t["qINKo/"]);
    obj3.value = result;
    let tmp6 = require;
    let tmp7 = obj3;
  } else {
    obj3.label = string(t.tjIn9i);
    obj3.value = result.add(1, "day");
    tmp6 = require;
    tmp7 = obj3;
  }
  items = [tmp7, ,];
  const obj4 = { label: null, value: null };
  isAfterResult = result.isAfter(addResult);
  const intl2 = tmp6(1113).intl;
  const string2 = intl2.string;
  const t2 = tmp6(1113).t;
  if (isAfterResult1) {
    obj4.label = string2(t2.qT6LjY);
    obj4.value = result1;
    let tmp9 = obj4;
  } else {
    obj4.label = string2(t2.EMRZyS);
    obj4.value = result1.add(1, "day");
    tmp9 = obj4;
  }
  items[1] = tmp9;
  const obj6 = { label: null, value: null };
  const intl3 = tmp6(1113).intl;
  obj6.label = intl3.string(tmp6(1113).t["+P5MmK"]);
  isAfterResult1 = result1.isAfter(addResult);
  const obj11 = _modDef2166();
  const startOfResult2 = _modDef2166().startOf("isoWeek");
  obj6.value = _modDef2166().startOf("isoWeek").add(1, "week").set("hours", 9);
  items[2] = obj6;
  return items;
}
export function getDefaultScheduledTime() {
  const obj = _modDef2166();
  const addResult = _modDef2166().startOf("hour").add(1, "hour");
  const startOfResult = _modDef2166().startOf("hour");
  let addResult1 = addResult;
  if (addResult.isBefore(obj4.add(gesture, "seconds"))) {
    addResult1 = addResult.add(1, "hour");
  }
  return addResult1;
}
export function getScheduledTimeError(isBefore, dependencyMap) {
  if (isBefore.isBefore(obj.add(gesture, "seconds"))) {
    const intl2 = util.intl;
    let stringResult = intl2.string(util.t["w/fgvh"]);
  } else {
    const addResult = _modDef2166().add(closure_1_11, "seconds");
    let minResult = addResult;
    if (null != dependencyMap) {
      const tmpResult = _modDef2166;
      const tmpResult3 = SnowflakeUtilsDefault;
      const tmpResultResult = tmpResult(SnowflakeUtilsDefault.extractTimestamp(dependencyMap));
      minResult = _modDef2166.min(addResult, tmpResultResult.add(closure_1_10, "seconds"));
      const tmpResult4 = _modDef2166;
    }
    stringResult = null;
    if (isBefore.isAfter(minResult)) {
      const intl = util.intl;
      stringResult = intl.string(util.t.Nt0tz7);
    }
    const obj2 = _modDef2166();
  }
  return stringResult;
}
export function getEarliestScheduledTime() {
  return _modDef2166().add(gesture, "seconds");
}
export function getLatestScheduledTime(arg0) {
  const addResult = _modDef2166().add(closure_1_11, "seconds");
  if (null == arg0) {
    return addResult;
  } else {
    const tmpResult = _modDef2166;
    const tmpResult3 = SnowflakeUtilsDefault;
    const tmpResultResult = tmpResult(SnowflakeUtilsDefault.extractTimestamp(arg0));
    return _modDef2166.min(addResult, tmpResultResult.add(closure_1_10, "seconds"));
  }
  const obj = _modDef2166();
}
export function getScheduledMessagesLimit() {
  if (obj.isPremium(UserStore.getCurrentUser(), PremiumTypes.TIER_2)) {
    const obj2 = { limit, isUpgradable: false };
    let obj3 = obj2;
  } else {
    obj3 = { limit: limit2, isUpgradable: true };
  }
  return obj3;
}
export function useScheduledMessagesLimit() {
  items = [UserStore];
  if (
    obj.useStateFromStores(items, () =>
      require("PremiumTypeUtils").isPremium(currentUser.getCurrentUser(), TIER_2.TIER_2),
    )
  ) {
    const obj2 = { limit, isUpgradable: false };
    let obj3 = obj2;
  } else {
    obj3 = { limit: limit2, isUpgradable: true };
  }
  return obj3;
}
export function convertServerScheduledMessageSend(body) {
  const obj = {
    userId: body.user_id,
    scheduledMessageId: body.scheduled_message_id,
    sendAtTimestamp: body.send_at_timestamp,
    createArgs: null,
    state: body.state,
    attachmentUploads: null,
    record: null,
  };
  const create_args = body.create_args;
  obj.createArgs = {
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
  obj.attachmentUploads = attachment_uploads.map((filename) => ({
    filename: filename.filename,
    uploadedFilename: filename.uploaded_filename,
    description: filename.description,
    title: filename.title,
  }));
  const obj3 = {};
  const merged = Object.assign(body.message_preview);
  obj3.timestamp = body.send_at_timestamp;
  obj.record = MessageRecordUtils.createMessageRecord(obj3);
  return obj;
}
export function getMessageForState(state) {
  if (ScheduledMessageTypes.ScheduledMessageSendState.SCHEDULED === state) {
    const obj = { isError: false, stateMessage: null };
    const intl6 = util.intl;
    obj.stateMessage = intl6.string(util.t.Fn6Odn);
    return obj;
  } else if (ScheduledMessageTypes.ScheduledMessageSendState.ERROR_CHANNEL_NOT_FOUND === state) {
    const obj2 = { isError: true, stateMessage: null };
    const intl5 = util.intl;
    obj2.stateMessage = intl5.string(util.t.v5O2dK);
    return obj2;
  } else if (ScheduledMessageTypes.ScheduledMessageSendState.ERROR_USER_NOT_FOUND === state) {
    const obj3 = { isError: true, stateMessage: null };
    const intl4 = util.intl;
    obj3.stateMessage = intl4.string(util.t.j8uIfG);
    return obj3;
  } else if (ScheduledMessageTypes.ScheduledMessageSendState.ERROR_USER_CANNOT_USE_SCHEDULED_MESSAGES === state) {
    const obj4 = { isError: true, stateMessage: null };
    const intl3 = util.intl;
    obj4.stateMessage = intl3.string(util.t["w6zHX/"]);
    return obj4;
  } else if (ScheduledMessageTypes.ScheduledMessageSendState.ERROR_SEND_FAILED === state) {
    const obj5 = { isError: true, stateMessage: null };
    const intl2 = util.intl;
    obj5.stateMessage = intl2.string(util.t.pflV7z);
    return obj5;
  } else if (ScheduledMessageTypes.ScheduledMessageSendState.ERROR_SCHEDULED_MESSAGES_DISABLED === state) {
    const obj6 = { isError: true, stateMessage: null };
    const intl = util.intl;
    obj6.stateMessage = intl.string(util.t.j8uIfG);
    return obj6;
  } else {
    GlobalUtils.assertNever(state);
    const tmpResult = GlobalUtils;
  }
}
export function convertServerScheduledMessageCreateArgs(channelId) {
  return {
    channelId: channelId.channel_id,
    content: channelId.content,
    type: channelId.type,
    flags: channelId.flags,
    messageReference: channelId.message_reference,
  };
}
