// discord_app/modules/saved_messages/message_reminders/native/showOverdueRemindersToast.tsx
import util from "../../../../intl/index.native.tsx";
import ToastActionCreatorsDefault from "../../../toast/native/ToastActionCreators.tsx";
import ClockIcon from "../../../../design/components/Icon/native/redesign/generated/ClockIcon.tsx";
import MessageRemindersSeenStorage from "MessageRemindersSeenStorage.tsx";
import SavedMessagesStore from "../../SavedMessagesStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/saved_messages/message_reminders/native/showOverdueRemindersToast.tsx",
);

export const showOverdueRemindersToast = function showOverdueRemindersToast() {
  const overdueMessageReminderCount = SavedMessagesStore.getOverdueMessageReminderCount();
  if (0 !== overdueMessageReminderCount) {
    const mostRecentOverdueDueAt = SavedMessagesStore.getMostRecentOverdueDueAt();
    if (mostRecentOverdueDueAt > obj2.getRemindersLastSeenAt()) {
      MessageRemindersSeenStorage.markRemindersSeen();
      const tmp3Result = MessageRemindersSeenStorage;
      const obj3 = {
        key: "overdue-message-reminders",
        IconComponent: ClockIcon.ClockIcon,
        content: null,
        position: "bottom",
        toastDurationMs: 5000,
      };
      const intl = util.intl;
      const obj5 = { count: overdueMessageReminderCount };
      obj3.content = intl.formatToPlainString(util.t.yBmFPA, obj5);
      ToastActionCreatorsDefault.open(obj3);
    }
    obj2 = MessageRemindersSeenStorage;
  }
};
