// === Module 19652: showOverdueRemindersToast ===

// Module 19652 (showOverdueRemindersToast)
import util from "util" /* 1112 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5595 */;
import ClockIcon from "ClockIcon" /* 5622 */;
import MessageRemindersSeenStorage from "MessageRemindersSeenStorage" /* 11681 */;
import SavedMessagesStore from "SavedMessagesStore" /* 11684 */;

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