// discord_app/modules/saved_messages/message_reminders/native/showOverdueRemindersToast.tsx
import getTimeSafe from "getTimeSafe";
import { dispatcher } from "../../../toast/native/ToastActionCreators.tsx";
import { ForLaterFreemiumConfig } from "../../ForLaterExperiment.tsx";

const require = arg1;
const result = require("getRemindersLastSeenAt").fileFinishedImporting("modules/saved_messages/message_reminders/native/showOverdueRemindersToast.tsx");

export const showOverdueRemindersToast = function showOverdueRemindersToast() {
  let obj = ForLaterFreemiumConfig;
  if (obj.isForLaterExperimentOn("showOverdueRemindersToast")) {
    overdueMessageReminderCount = overdueMessageReminderCount.getOverdueMessageReminderCount();
    if (0 !== overdueMessageReminderCount) {
      const mostRecentOverdueDueAt = obj2.getMostRecentOverdueDueAt();
      let tmpResult = tmp(8425);
      if (mostRecentOverdueDueAt > tmpResult.getRemindersLastSeenAt()) {
        tmpResult = tmp(8425);
        tmpResult.markRemindersSeen();
        obj = { key: "overdue-message-reminders", IconComponent: null, content: null, position: "bottom", toastDurationMs: 5000 };
        obj[1] = tmp(4308).ClockIcon;
        const intl = tmp(1236).intl;
        obj = { count: null };
        obj[0] = overdueMessageReminderCount;
        obj[2] = intl.formatToPlainString(tmp(1236).t.yBmFPA, obj);
        dispatcher.open(obj);
        const obj5 = dispatcher;
      }
    }
    obj2 = overdueMessageReminderCount;
  }
};