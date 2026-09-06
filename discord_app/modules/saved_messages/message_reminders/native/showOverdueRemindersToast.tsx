// === Module 17479: showOverdueRemindersToast ===

// Module 17479 (showOverdueRemindersToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4259 */;
import ForLaterExperiment from "ForLaterExperiment" /* 7855 */;
import SavedMessagesStore from "SavedMessagesStore" /* 11660 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/message_reminders/native/showOverdueRemindersToast.tsx");

export const showOverdueRemindersToast = function showOverdueRemindersToast() {
  let obj = ForLaterExperiment;
  if (obj.isForLaterExperimentOn("showOverdueRemindersToast")) {
    const overdueMessageReminderCount = SavedMessagesStore.getOverdueMessageReminderCount();
    if (0 !== overdueMessageReminderCount) {
      const mostRecentOverdueDueAt = obj2.getMostRecentOverdueDueAt();
      let tmpResult = tmp(7861);
      if (mostRecentOverdueDueAt > tmpResult.getRemindersLastSeenAt()) {
        tmpResult = tmp(7861);
        tmpResult.markRemindersSeen();
        obj = { key: "overdue-message-reminders", IconComponent: tmp(4523).ClockIcon, content: null, position: "bottom", toastDurationMs: 5000 };
        const intl = tmp(1114).intl;
        obj = { count: overdueMessageReminderCount };
        obj.content = intl.formatToPlainString(tmp(1114).t.yBmFPA, obj);
        ToastActionCreatorsDefault.open(obj);
      }
    }
    obj2 = SavedMessagesStore;
  }
};