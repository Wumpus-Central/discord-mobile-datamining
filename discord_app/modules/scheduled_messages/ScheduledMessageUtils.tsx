// discord_app/modules/scheduled_messages/ScheduledMessageUtils.tsx
import _slicedToArray from "_slicedToArray";
import hasFlag from "hasFlag";
import mergeGuildAvatar from "mergeGuildAvatar";
import { MessageFlags } from "ME";
import { t } from "../../../_runtime/03943_t.js";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";
import { hasFlag } from "../../../discord_common/js/shared/utils/FlagUtils.tsx";
import { regExp } from "../suppress_notifications/parseContentForSuppressNotifications.tsx";
import { apexExperiment } from "ScheduledMessagesUIBackupExperiment.tsx";

const require = arg1;
let tmp2 = new require("ME")("Scheduled Messages");
const result = require("mergeGuildAvatar").fileFinishedImporting("modules/scheduled_messages/ScheduledMessageUtils.tsx");

export const scheduledMessageLogger = tmp2;
export const parseContentAndFlagsForSilentMessage = function parseContentAndFlagsForSilentMessage(arg0) {
  let content;
  let flags;
  ({ content, flags } = arg0);
  const tmp2 = callback(regExp(content), 2);
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
export const unparseContentAndFlagsForSilentMessage = function unparseContentAndFlagsForSilentMessage(arg0) {
  let content;
  let flags;
  ({ content, flags } = arg0);
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
  const items = [mergeGuildAvatar];
  let stateFromStores = initialize.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let flag;
    if (currentUser != null) {
      flag = currentUser.isStaff();
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  });
  const obj = initialize;
  if (!stateFromStores) {
    stateFromStores = obj2.useConfig({ location: "useCanUseScheduledMessages" });
  }
  return stateFromStores;
};
export const canUseScheduledMessages = function canUseScheduledMessages(arg0) {
  const currentUser = authStore.getCurrentUser();
  let flag;
  if (currentUser != null) {
    flag = currentUser.isStaff();
  }
  if (flag == null) {
    flag = false;
  }
  if (!flag) {
    const obj = { location: null };
    obj[0] = arg0;
    flag = apexExperiment.getConfig(obj);
    const obj2 = apexExperiment;
  }
  return flag;
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
  obj = { id: body.scheduled_message_id, content: body.scheduled_message.content, author: authStore.getUser(body.user_id), timestamp: null, channel_id: null };
  obj[3] = t(body.send_at_timestamp).toDate();
  obj[4] = body.scheduled_message.channel_id;
  const obj4 = t(body.send_at_timestamp);
  obj[6] = new hasFlag(obj);
  return obj;
};
export const convertServerScheduledMessage = function convertServerScheduledMessage(channelId) {
  return { channelId: channelId.channel_id, content: channelId.content, type: channelId.type, flags: channelId.flags, messageReference: channelId.message_reference };
};