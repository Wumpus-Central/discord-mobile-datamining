// === Module 16697: showOverdueRemindersToast ===

// Module 16697 (showOverdueRemindersToast)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import dispatcherDefault from "dispatcher" /* 4094 */;
import ClockIcon from "ClockIcon" /* 4338 */;
import ForLaterFreemiumConfig from "ForLaterFreemiumConfig" /* 8484 */;
import getRemindersLastSeenAt from "getRemindersLastSeenAt" /* 8490 */;
import getTimeSafe from "getTimeSafe" /* 10850 */;

require = fn;
const result = require("obj132").fileFinishedImporting("modules/saved_messages/message_reminders/native/showOverdueRemindersToast.tsx");

export const showOverdueRemindersToast = function showOverdueRemindersToast() {
  let obj = ForLaterFreemiumConfig;
  if (obj.isForLaterExperimentOn("showOverdueRemindersToast")) {
    overdueMessageReminderCount = overdueMessageReminderCount.getOverdueMessageReminderCount();
    if (0 !== overdueMessageReminderCount) {
      const mostRecentOverdueDueAt = obj2.getMostRecentOverdueDueAt();
      let tmpResult = getRemindersLastSeenAt;
      if (mostRecentOverdueDueAt > tmpResult.getRemindersLastSeenAt()) {
        tmpResult = getRemindersLastSeenAt;
        tmpResult.markRemindersSeen();
        obj = { key: "overdue-message-reminders", IconComponent: null, content: null, position: "bottom", toastDurationMs: 5000 };
        obj[1] = ClockIcon.ClockIcon;
        const intl = getSystemLocale.intl;
        obj = { count: null };
        obj[0] = overdueMessageReminderCount;
        obj[2] = intl.formatToPlainString(getSystemLocale.t.yBmFPA, obj);
        dispatcherDefault.open(obj);
      }
    }
    obj2 = overdueMessageReminderCount;
  }
};