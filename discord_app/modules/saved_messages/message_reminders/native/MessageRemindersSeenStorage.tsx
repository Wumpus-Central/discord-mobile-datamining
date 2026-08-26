// === Module 8605: getRemindersLastSeenAt ===

// Module 8605 (getRemindersLastSeenAt)
import set from "set" /* 2 */;
import Storage2 from "Storage" /* 595 */;

const MessageRemindersLastSeenAt = "MessageRemindersLastSeenAt";
let result = set.fileFinishedImporting("modules/saved_messages/message_reminders/native/MessageRemindersSeenStorage.tsx");

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