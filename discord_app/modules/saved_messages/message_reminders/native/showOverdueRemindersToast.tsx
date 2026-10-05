// discord_app/modules/saved_messages/message_reminders/native/showOverdueRemindersToast.tsx
import intl2 from "../../../../intl/index.native.tsx";
import ToastActionCreatorsDefault from "../../../toast/native/ToastActionCreators.tsx";
import ClockIcon from "../../../../design/components/Icon/native/redesign/generated/ClockIcon.tsx";
import ForLaterExperiment from "../../ForLaterExperiment.tsx";
import MessageRemindersSeenStorage from "MessageRemindersSeenStorage.tsx";
import SavedMessagesStore from "../../SavedMessagesStore.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting(
  "modules/saved_messages/message_reminders/native/showOverdueRemindersToast.tsx",
);

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
        const obj3 = {
          key: "overdue-message-reminders",
          IconComponent: ClockIcon.ClockIcon,
          content: intl.formatToPlainString(intl2.t.yBmFPA, obj4),
          position: "bottom",
          toastDurationMs: 5000,
        };
        const open = ToastActionCreatorsDefault.open;
        ToastActionCreatorsDefault;
        intl = intl2.intl;
        obj4 = { count: overdueMessageReminderCount };
        open(obj3);
      }
    }
  }
};
