// === Module 7861: MessageRemindersSeenStorage ===

// Module 7861 (MessageRemindersSeenStorage)
import Storage2 from "Storage" /* 510 */;
import size from "module_2" /* 2 */;

const MessageRemindersLastSeenAt = "MessageRemindersLastSeenAt";
let result = size.fileFinishedImporting("modules/saved_messages/message_reminders/native/MessageRemindersSeenStorage.tsx");

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