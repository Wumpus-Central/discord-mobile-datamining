// === Module 17620: MessageRemindersNotificationManager ===

// Module 17620 (MessageRemindersNotificationManager)
import DispatcherDefault from "Dispatcher" /* 584 */;
import DurationsDefault from "Durations" /* 1102 */;
import ForLaterExperiment from "ForLaterExperiment" /* 7485 */;
import SavedMessagesStore from "SavedMessagesStore" /* 11283 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6613 */;
import size from "module_2" /* 2 */;

function scheduleNextNotification() {
  let found;
  let timeout;
  let obj = found(7485);
  if (obj.isForLaterExperimentOn("MessageRemindersNotificationManager")) {
    if (null != timeout) {
      const _clearTimeout = clearTimeout;
      clearTimeout(timeout);
    }
    const messageReminders = SavedMessagesStore.getMessageReminders();
    found = messageReminders.find(function(saveData) {
      let tmp = null != saveData.saveData.dueAt;
      if (tmp) {
        const _Date = Date;
        const self = this;
        const self2 = this;
        const dueAt = saveData.saveData.dueAt;
        tmp = dueAt > new Date();
        const date = new Date();
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
      let dueAt = found.saveData.dueAt;
      const sum = timestamp + DurationsDefault.Millis.WEEK;
      if (dueAt.getTime() <= sum) {
        const dueAt2 = found.saveData.dueAt;
        const _Date2 = Date;
        const time = dueAt2.getTime();
        const _setTimeout = setTimeout;
        timeout = setTimeout(() => {
          const obj = ForLaterExperiment;
          if (obj.isForLaterExperimentOn("MessageRemindersNotificationManager")) {
            const obj3 = { type: "MESSAGE_REMINDER_DUE", savedMessage: found };
            const obj2 = DispatcherDefault;
            obj2.dispatch(obj3);
            scheduleNextNotification();
          }
        }, time - Date.now());
      }
    } else {
      timeout = null;
    }
  }
}
let c4 = null;
class MessageRemindersNotificationManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.actions = {
      SAVED_MESSAGES_UPDATE() {
        return require.handleUpdates();
      },
      SAVED_MESSAGE_CREATE() {
        return require.handleUpdates();
      },
      SAVED_MESSAGE_DELETE() {
        return require.handleUpdates();
      }
    };
    applyArgumentsResult.handleUpdates = function handleUpdates() {
      scheduleNextNotification();
    };
    return applyArgumentsResult;
  }
}
const messageRemindersNotificationManager = new MessageRemindersNotificationManager();
const result = size.fileFinishedImporting("modules/saved_messages/message_reminders/MessageRemindersNotificationManager.tsx");

export default messageRemindersNotificationManager;