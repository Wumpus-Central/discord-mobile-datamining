// discord_app/modules/saved_messages/message_reminders/MessageRemindersNotificationManager.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import DurationsDefault from "../../../utils/Durations.tsx";
import ForLaterExperiment from "../ForLaterExperiment.tsx";
import SavedMessagesStore from "../SavedMessagesStore.tsx";
import AutomaticLifecycleManager from "../../../lib/AutomaticLifecycleManager.tsx";

require = fn;
function scheduleNextNotification() {
  if (obj.isForLaterExperimentOn("MessageRemindersNotificationManager")) {
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
      const sum = timestamp + DurationsDefault.Millis.WEEK;
      if (dueAt.getTime() <= sum) {
        const dueAt2 = found.saveData.dueAt;
        const _Date2 = Date;
        const time = dueAt2.getTime();
        const _setTimeout = setTimeout;
        timeout = setTimeout(() => {
          let obj = ForLaterExperiment;
          if (obj.isForLaterExperimentOn("MessageRemindersNotificationManager")) {
            obj = { type: "MESSAGE_REMINDER_DUE", savedMessage: found };
            DispatcherDefault.dispatch(obj);
            scheduleNextNotification();
          }
        }, time - Date.now());
      }
    } else {
      timeout = null;
    }
  }
  obj = found(7855);
}
let c4 = null;
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
    },
  };
  applyArgumentsResult.handleUpdates = function handleUpdates() {
    scheduleNextNotification();
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {}
prototype = new prototype();
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/saved_messages/message_reminders/MessageRemindersNotificationManager.tsx",
);

export default prototype;
