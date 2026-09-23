// === Module 17965: showOverdueRemindersToast ===

// Module 17965 (showOverdueRemindersToast)
import util from "util" /* 1115 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4521 */;
import ClockIcon from "ClockIcon" /* 4789 */;
import ForLaterExperiment from "ForLaterExperiment" /* 8183 */;
import MessageRemindersSeenStorage from "MessageRemindersSeenStorage" /* 8190 */;
import SavedMessagesStore from "SavedMessagesStore" /* 11991 */;

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