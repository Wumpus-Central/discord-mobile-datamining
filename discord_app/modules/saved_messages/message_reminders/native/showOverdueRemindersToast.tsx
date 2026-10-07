// === Module 17665: showOverdueRemindersToast ===

// Module 17665 (showOverdueRemindersToast)
import util from "util" /* 1126 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4574 */;
import ClockIcon from "ClockIcon" /* 4855 */;
import ForLaterExperiment from "ForLaterExperiment" /* 7496 */;
import MessageRemindersSeenStorage from "MessageRemindersSeenStorage" /* 7507 */;
import SavedMessagesStore from "SavedMessagesStore" /* 11296 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/message_reminders/native/showOverdueRemindersToast.tsx");

export const showOverdueRemindersToast = function showOverdueRemindersToast() {
  if (obj.isForLaterExperimentOn("showOverdueRemindersToast")) {
    const overdueMessageReminderCount = SavedMessagesStore.getOverdueMessageReminderCount();
    if (0 !== overdueMessageReminderCount) {
      const mostRecentOverdueDueAt = SavedMessagesStore.getMostRecentOverdueDueAt();
      if (mostRecentOverdueDueAt > tmpResult.getRemindersLastSeenAt()) {
        MessageRemindersSeenStorage.markRemindersSeen();
        const tmpResult2 = MessageRemindersSeenStorage;
        const obj3 = { key: "overdue-message-reminders", IconComponent: ClockIcon.ClockIcon, content: null, position: "bottom", toastDurationMs: 5000 };
        const intl = util.intl;
        const obj4 = { count: overdueMessageReminderCount };
        obj3.content = intl.formatToPlainString(util.t.yBmFPA, obj4);
        ToastActionCreatorsDefault.open(obj3);
      }
      tmpResult = MessageRemindersSeenStorage;
    }
  }
  obj = ForLaterExperiment;
};