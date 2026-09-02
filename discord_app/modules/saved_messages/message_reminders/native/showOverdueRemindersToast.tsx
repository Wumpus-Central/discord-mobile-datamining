// discord_app/modules/saved_messages/message_reminders/native/showOverdueRemindersToast.tsx
import dispatcherDefault from "../../../toast/native/ToastActionCreators.tsx";
import ForLaterFreemiumConfig from "../../ForLaterExperiment.tsx";
import closure_3 from "../../SavedMessagesStore.tsx";

require = arg1;
const result = require("set").fileFinishedImporting(
  "modules/saved_messages/message_reminders/native/showOverdueRemindersToast.tsx",
);

export const showOverdueRemindersToast = function showOverdueRemindersToast() {
  let obj = ForLaterFreemiumConfig;
  if (obj.isForLaterExperimentOn("showOverdueRemindersToast")) {
    overdueMessageReminderCount = overdueMessageReminderCount.getOverdueMessageReminderCount();
    if (0 !== overdueMessageReminderCount) {
      const mostRecentOverdueDueAt = obj2.getMostRecentOverdueDueAt();
      let tmpResult = tmp(7615);
      if (mostRecentOverdueDueAt > tmpResult.getRemindersLastSeenAt()) {
        tmpResult = tmp(7615);
        tmpResult.markRemindersSeen();
        obj = {
          key: "overdue-message-reminders",
          IconComponent: null,
          content: null,
          position: "bottom",
          toastDurationMs: 5000,
        };
        obj[1] = tmp(4441).ClockIcon;
        const intl = tmp(1233).intl;
        obj = { count: null };
        obj[0] = overdueMessageReminderCount;
        obj[2] = intl.formatToPlainString(tmp(1233).t.yBmFPA, obj);
        dispatcherDefault.open(obj);
        const obj5 = dispatcherDefault;
      }
    }
    obj2 = overdueMessageReminderCount;
  }
};
