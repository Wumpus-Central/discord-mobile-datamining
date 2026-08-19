// discord_app/modules/saved_messages/message_reminders/native/MessageRemindersSeenStorage.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import Storage2 from "../../../../../discord_common/js/packages/storage/Storage.tsx";

const MessageRemindersLastSeenAt = "MessageRemindersLastSeenAt";
let result = obj132.fileFinishedImporting("modules/saved_messages/message_reminders/native/MessageRemindersSeenStorage.tsx");

export const getRemindersLastSeenAt = function getRemindersLastSeenAt() {
  const Storage = Storage2.Storage;
  let num = Storage.get(MessageRemindersLastSeenAt, 0);
  if (num == null) {
    num = 0;
  }
  return num;
};
export const markRemindersSeen = function markRemindersSeen() {
  const Storage = Storage2.Storage;
  const result = Storage.set(MessageRemindersLastSeenAt, Date.now());
};