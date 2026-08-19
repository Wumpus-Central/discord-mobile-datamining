// discord_app/modules/saved_messages/message_reminders/native/showOverdueRemindersToast.tsx
import getSystemLocale from "../../../../intl/index.native.tsx";
import dispatcherDefault from "../../../toast/native/ToastActionCreators.tsx";
import ClockIcon from "../../../../design/components/Icon/native/redesign/generated/ClockIcon.tsx";
import ForLaterFreemiumConfig from "../../ForLaterExperiment.tsx";
import getRemindersLastSeenAt from "MessageRemindersSeenStorage.tsx";
import getTimeSafe from "../../SavedMessagesStore.tsx";

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