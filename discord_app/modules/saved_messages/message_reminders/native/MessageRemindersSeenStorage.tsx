// === Module 8490: getRemindersLastSeenAt ===

// Module 8490 (getRemindersLastSeenAt)
import obj132 from "obj132" /* 2 */;
import Storage2 from "Storage" /* 595 */;

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