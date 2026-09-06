// discord_app/modules/saved_messages/message_reminders/native/showOverdueRemindersToast.tsx
import util from "../../../../intl/index.native.tsx";
import ToastActionCreatorsDefault from "../../../toast/native/ToastActionCreators.tsx";
import ClockIcon from "../../../../design/components/Icon/native/redesign/generated/ClockIcon.tsx";
import ForLaterExperiment from "../../ForLaterExperiment.tsx";
import MessageRemindersSeenStorage from "MessageRemindersSeenStorage.tsx";
import SavedMessagesStore from "../../SavedMessagesStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/saved_messages/message_reminders/native/showOverdueRemindersToast.tsx",
);

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
        obj = {
          key: "overdue-message-reminders",
          IconComponent: ClockIcon.ClockIcon,
          content: null,
          position: "bottom",
          toastDurationMs: 5000,
        };
        const intl = util.intl;
        obj = { count: overdueMessageReminderCount };
        obj.content = intl.formatToPlainString(util.t.yBmFPA, obj);
        ToastActionCreatorsDefault.open(obj);
      }
    }
  }
};
