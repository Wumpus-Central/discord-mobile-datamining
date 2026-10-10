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
      const obj3 = { text: null, icon: null, position: "bottom", duration: 5000 };
      const intl = util.intl;
      const obj5 = { count: overdueMessageReminderCount };
      obj3.text = intl.formatToPlainString(util.t.yBmFPA, obj5);
      obj3.icon = ClockIcon.ClockIcon;
      ToastActionCreatorsDefault.open("overdue-message-reminders", obj3);
    }
    obj2 = MessageRemindersSeenStorage;
  }
};
