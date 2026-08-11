// discord_app/modules/saved_messages/message_reminders/native/MessageRemindersSeenStorage.tsx
import { Storage } from "../../../../../discord_common/js/packages/storage/Storage.tsx";
const MessageRemindersLastSeenAt = "MessageRemindersLastSeenAt";
let result = require("set").fileFinishedImporting("modules/saved_messages/message_reminders/native/MessageRemindersSeenStorage.tsx");

export const getRemindersLastSeenAt = function getRemindersLastSeenAt() {
  const Storage = Storage.Storage;
  let num = Storage.get(MessageRemindersLastSeenAt, 0);
  if (num == null) {
    num = 0;
  }
  return num;
};
export const markRemindersSeen = function markRemindersSeen() {
  const Storage = Storage.Storage;
  const result = Storage.set(MessageRemindersLastSeenAt, Date.now());
};