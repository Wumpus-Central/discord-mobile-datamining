import getTimeSafe from "getTimeSafe";
import "initialize";

let require = arg1;
function scheduleNextNotification() {
  if (obj.isForLaterExperimentOn("MessageRemindersNotificationManager")) {
    if (null != timeout) {
      const _clearTimeout = clearTimeout;
      clearTimeout(timeout);
    }
    messageReminders = messageReminders.getMessageReminders();
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
      const sum = timestamp + importDefault(687).Millis.WEEK;
      if (dueAt.getTime() <= sum) {
        const dueAt2 = found.saveData.dueAt;
        const _Date2 = Date;
        const time = dueAt2.getTime();
        const _setTimeout = setTimeout;
        timeout = setTimeout(() => {
          let obj = found(outer1_2[1]);
          if (obj.isForLaterExperimentOn("MessageRemindersNotificationManager")) {
            obj = { type: "MESSAGE_REMINDER_DUE", savedMessage: null };
            obj[1] = found;
            outer1_1(outer1_2[2]).dispatch(obj);
            outer1_5();
            const obj2 = outer1_1(outer1_2[2]);
          }
        }, time - Date.now());
      }
    } else {
      timeout = null;
    }
  }
}
let c4 = null;
let prototype = function MessageRemindersNotificationManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  const require = applyArgumentsResult;
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
const result = require("dispatcher").fileFinishedImporting("modules/saved_messages/message_reminders/MessageRemindersNotificationManager.tsx");

export default prototype;