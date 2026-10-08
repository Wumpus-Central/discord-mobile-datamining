// === Module 17948: showOverdueRemindersToast ===

// Module 17948 (showOverdueRemindersToast)
import util from "util" /* 1126 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4766 */;
import ClockIcon from "ClockIcon" /* 5049 */;
import MessageRemindersSeenStorage from "MessageRemindersSeenStorage" /* 12657 */;
import SavedMessagesStore from "SavedMessagesStore" /* 9632 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/message_reminders/native/showOverdueRemindersToast.tsx");

export const showOverdueRemindersToast = function showOverdueRemindersToast() {
  const overdueMessageReminderCount = SavedMessagesStore.getOverdueMessageReminderCount();
  if (0 !== overdueMessageReminderCount) {
    const mostRecentOverdueDueAt = SavedMessagesStore.getMostRecentOverdueDueAt();
    if (mostRecentOverdueDueAt > obj2.getRemindersLastSeenAt()) {
      MessageRemindersSeenStorage.markRemindersSeen();
      const tmp3Result = MessageRemindersSeenStorage;
      const obj3 = { key: "overdue-message-reminders", IconComponent: ClockIcon.ClockIcon, content: null, position: "bottom", toastDurationMs: 5000 };
      const intl = util.intl;
      const obj5 = { count: overdueMessageReminderCount };
      obj3.content = intl.formatToPlainString(util.t.yBmFPA, obj5);
      ToastActionCreatorsDefault.open(obj3);
    }
    obj2 = MessageRemindersSeenStorage;
  }
};