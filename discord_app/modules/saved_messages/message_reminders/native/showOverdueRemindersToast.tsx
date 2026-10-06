// === Module 17665: showOverdueRemindersToast ===

// Module 17665 (showOverdueRemindersToast)
import intl2 from "intl" /* 1126 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4574 */;
import ClockIcon from "ClockIcon" /* 4855 */;
import ForLaterExperiment from "ForLaterExperiment" /* 7496 */;
import MessageRemindersSeenStorage from "MessageRemindersSeenStorage" /* 7507 */;
import SavedMessagesStore from "SavedMessagesStore" /* 11296 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/saved_messages/message_reminders/native/showOverdueRemindersToast.tsx");

export const showOverdueRemindersToast = function showOverdueRemindersToast() {
  let intl;
  let obj4;
  const obj = ForLaterExperiment;
  if (obj.isForLaterExperimentOn("showOverdueRemindersToast")) {
    const overdueMessageReminderCount = SavedMessagesStore.getOverdueMessageReminderCount();
    if (0 !== overdueMessageReminderCount) {
      const mostRecentOverdueDueAt = SavedMessagesStore.getMostRecentOverdueDueAt();
      const tmpResult = MessageRemindersSeenStorage;
      if (mostRecentOverdueDueAt > tmpResult.getRemindersLastSeenAt()) {
        const tmpResult2 = MessageRemindersSeenStorage;
        tmpResult2.markRemindersSeen();
        const obj3 = { key: "overdue-message-reminders", IconComponent: ClockIcon.ClockIcon, content: intl.formatToPlainString(intl2.t.yBmFPA, obj4), position: "bottom", toastDurationMs: 5000 };
        const open = ToastActionCreatorsDefault.open;
        ToastActionCreatorsDefault;
        intl = intl2.intl;
        obj4 = { count: overdueMessageReminderCount };
        open(obj3);
      }
    }
  }
};