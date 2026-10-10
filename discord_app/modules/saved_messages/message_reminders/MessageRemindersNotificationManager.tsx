// === Module 18183: MessageRemindersNotificationManager ===

// Module 18183 (MessageRemindersNotificationManager)
import DispatcherDefault from "Dispatcher" /* 584 */;
import SavedMessagesStore from "SavedMessagesStore" /* 9680 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6807 */;

function scheduleNextNotification() {
  if (null != timeout) {
    const _clearTimeout = clearTimeout;
    clearTimeout(timeout);
  }
  const messageReminders = SavedMessagesStore.getMessageReminders();
  const found = messageReminders.find((saveData) => {
    let tmp = null != saveData.saveData.dueAt;
    if (tmp) {
      const _Date = Date;
      const date = new Date();
      tmp = saveData.saveData.dueAt > date;
    }
    return tmp;
  });
  let dueAt1;
  if (found != null) {
    const saveData = found.saveData;
    if (saveData != null) {
      dueAt1 = saveData.dueAt;
    }
  }
  if (null != dueAt1) {
    let _Date = Date;
    const timestamp = Date.now();
    const dueAt = found.saveData.dueAt;
    const sum = timestamp + found(1102).Millis.WEEK;
    if (dueAt.getTime() <= sum) {
      const dueAt2 = found.saveData.dueAt;
      const _Date2 = Date;
      const time = dueAt2.getTime();
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => {
        DispatcherDefault.dispatch({ type: "MESSAGE_REMINDER_DUE", savedMessage: found });
        scheduleNextNotification();
      }, time - Date.now());
    }
  } else {
    timeout = null;
  }
}
let c3 = null;
const prototype = function MessageRemindersNotificationManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  importDefault = applyArgumentsResult;
  applyArgumentsResult.actions = {
    SAVED_MESSAGES_UPDATE() {
      return applyArgumentsResult.handleUpdates();
    },
    SAVED_MESSAGE_CREATE() {
      return applyArgumentsResult.handleUpdates();
    },
    SAVED_MESSAGE_DELETE() {
      return applyArgumentsResult.handleUpdates();
    }
  };
  applyArgumentsResult.handleUpdates = function handleUpdates() {
    scheduleNextNotification();
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
const prototype1 = new prototype();
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/message_reminders/MessageRemindersNotificationManager.tsx");

export default prototype1;