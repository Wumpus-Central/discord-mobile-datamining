// === Module 20233: showOverdueRemindersToast ===

// Module 20233 (showOverdueRemindersToast)
import util from "util" /* 1113 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5952 */;
import ClockIcon from "ClockIcon" /* 5979 */;
import MessageRemindersSeenStorage from "MessageRemindersSeenStorage" /* 11840 */;
import SavedMessagesStore from "SavedMessagesStore" /* 11843 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/message_reminders/native/showOverdueRemindersToast.tsx");

export function showOverdueRemindersToast() {
  const overdueMessageReminderCount = SavedMessagesStore.getOverdueMessageReminderCount();
  if (0 !== overdueMessageReminderCount) {
    const mostRecentOverdueDueAt = SavedMessagesStore.getMostRecentOverdueDueAt();
    if (mostRecentOverdueDueAt > obj2.getRemindersLastSeenAt()) {
      MessageRemindersSeenStorage.markRemindersSeen();
      const tmp3Result = MessageRemindersSeenStorage;
      const obj3 = { text: null, icon: null, position: "bottom", duration: 5000 };
      const intl = util.intl;
      const obj5 = { count: overdueMessageReminderCount };
      obj3.text = intl.formatToPlainString(util.t.yBmFPA, obj5);
      obj3.icon = ClockIcon.ClockIcon;
      ToastActionCreatorsDefault.open("overdue-message-reminders", obj3);
    }
    obj2 = MessageRemindersSeenStorage;
  }
}