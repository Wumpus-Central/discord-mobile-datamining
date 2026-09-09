// === Module 17513: showOverdueRemindersToast ===

// Module 17513 (showOverdueRemindersToast)
import util from "util" /* 1114 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4272 */;
import ClockIcon from "ClockIcon" /* 4537 */;
import ForLaterExperiment from "ForLaterExperiment" /* 7869 */;
import MessageRemindersSeenStorage from "MessageRemindersSeenStorage" /* 7875 */;
import SavedMessagesStore from "SavedMessagesStore" /* 11691 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/message_reminders/native/showOverdueRemindersToast.tsx");

export const showOverdueRemindersToast = function showOverdueRemindersToast() {
  let obj = ForLaterExperiment;
  if (obj.isForLaterExperimentOn("showOverdueRemindersToast")) {
    const overdueMessageReminderCount = SavedMessagesStore.getOverdueMessageReminderCount();
    if (0 !== overdueMessageReminderCount) {
      const mostRecentOverdueDueAt = SavedMessagesStore.getMostRecentOverdueDueAt();
      let tmpResult = MessageRemindersSeenStorage;
      if (mostRecentOverdueDueAt > tmpResult.getRemindersLastSeenAt()) {
        tmpResult = MessageRemindersSeenStorage;
        tmpResult.markRemindersSeen();
        obj = { key: "overdue-message-reminders", IconComponent: ClockIcon.ClockIcon, content: null, position: "bottom", toastDurationMs: 5000 };
        const intl = util.intl;
        obj = { count: overdueMessageReminderCount };
        obj.content = intl.formatToPlainString(util.t.yBmFPA, obj);
        ToastActionCreatorsDefault.open(obj);
      }
    }
  }
};