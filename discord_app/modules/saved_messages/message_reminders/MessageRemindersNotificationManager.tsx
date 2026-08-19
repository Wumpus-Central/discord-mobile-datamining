// discord_app/modules/saved_messages/message_reminders/MessageRemindersNotificationManager.tsx
import obj132Default from "../../../utils/Durations.tsx";
import dispatcherDefault from "../../../Dispatcher.tsx";
import initializeDefault from "../../../lib/AutomaticLifecycleManager.tsx";
import getTimeSafe from "../SavedMessagesStore.tsx";

let require = fn;
function scheduleNextNotification() {
  if (obj.isForLaterExperimentOn("MessageRemindersNotificationManager")) {
    if (null != timeout) {
      const _clearTimeout = clearTimeout;
      clearTimeout(timeout);
    }
    messageReminders = messageReminders.getMessageReminders();
    const found = messageReminders.find((item, index) => {
      let tmp = null != item.saveData.dueAt;
      if (tmp) {
        const _Date = Date;
        const date = new Date();
        tmp = item.saveData.dueAt > date;
      }
      return tmp;
    });
    let dueAt;
    if (found != null) {
      const saveData = found.saveData;
      if (saveData != null) {
        dueAt = saveData.dueAt;
      }
    }
    if (null != dueAt) {
      let _Date = Date;
      const timestamp = Date.now();
      dueAt = found.saveData.dueAt;
      const sum = timestamp + obj132Default.Millis.WEEK;
      if (dueAt.getTime() <= sum) {
        const dueAt2 = found.saveData.dueAt;
        const _Date2 = Date;
        const time = dueAt2.getTime();
        const _setTimeout = setTimeout;
        timeout = setTimeout(() => {
          let obj = found(dependencyMap[1]);
          if (obj.isForLaterExperimentOn("MessageRemindersNotificationManager")) {
            obj = { type: "MESSAGE_REMINDER_DUE", savedMessage: null };
            obj[1] = found;
            dispatcherDefault.dispatch(obj);
            scheduleNextNotification();
          }
        }, time - Date.now());
      }
    } else {
      timeout = null;
    }
  }
  obj = found(8484);
}
let c4 = null;
initializeDefault;
let prototype = function MessageRemindersNotificationManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  require = applyArgumentsResult;
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
    callback();
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
prototype = new prototype();
const result = require("obj132").fileFinishedImporting("modules/saved_messages/message_reminders/MessageRemindersNotificationManager.tsx");

export default prototype;