// === Module 11745: editScheduledMessage ===

// Module 11745 (editScheduledMessage)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import hooksDefault from "hooks" /* 4045 */;
import _modDef4691 from "module_4691" /* 4691 */;
import ScheduledMessagesConfig from "ScheduledMessagesConfig" /* 7557 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;

require = arg1;
function editScheduledMessage(scheduledMessageId, arg1) {
  const self = this;
  const apply = _editScheduledMessage.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _editScheduledMessage() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c6 = 0;
    c7 = 0;
    c5 = 0;
    return (function*(arg0, arg1) {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_3 = tmp3;
              dependencyMap = tmp7;
              c5 = 1;
              let obj3 = lib(closure_1_2[9]);
              obj1 = { scheduledMessageId: null };
              obj1[0] = lib;
              const merged = Object.assign(closure_1);
              c6 = 2;
              c7 = 1;
              let obj2 = { value: null, done: false };
              obj2[0] = obj3.updateScheduledMessage(obj1);
              return obj2;
            }
          } else if (1 === tmp7) {
            c5 = 0;
            lib = closure_4;
            obj2 = lib(7560);
            const result = obj2.showScheduledMessageEditFailureToast(lib.message);
            c7 = 3;
            return { value: false, done: true };
          } else if (arg0 === 1) {
            c7 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          } else {
            obj = lib(7560);
            const result1 = obj.showScheduledMessageEditSuccessToast();
            c5 = 0;
            c7 = 3;
            return { value: true, done: true };
          }
        } catch (tmp26) {
          closure_4 = tmp26;
          if (tmp4 === c5) {
            c7 = tmp2;
            throw tmp26;
          } else {
            c6 = tmp;
          }
        }
      }
    })();
  });
  closure_5 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _cancelScheduledMessage() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    return (function*(arg0) {
      dependencyMap = tmp3;
      c4 = 1;
      yield lib(closure_1_2[9]).deleteScheduledMessage(lib);
      if (1 === tmp7) {
        c4 = 0;
        lib = closure_3;
        const obj2 = lib(7560);
        const result = obj2.showScheduleMessageDeleteFailureToast(lib.message);
        c6 = 3;
      } else if (arg0 === 1) {
        c6 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        const obj = lib(7560);
        const result1 = obj.showScheduleMessageDeleteSuccessToast();
        c4 = 0;
      }
      c4 = 0;
      return arg1;
    })();
  });
  closure_6 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _sendScheduledMessageNow() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    return (function*(arg0) {
      dependencyMap = tmp3;
      c4 = 1;
      yield lib(closure_1_2[9]).sendScheduledMessageNow(lib);
      if (1 === tmp7) {
        c4 = 0;
        lib = closure_3;
        const obj2 = lib(7560);
        const result = obj2.showScheduleMessageSentNowFailureToast(lib.message);
        c6 = 3;
      } else if (arg0 === 1) {
        c6 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        const obj = lib(7560);
        const result1 = obj.showScheduleMessageSentNowSuccessToast();
        c4 = 0;
      }
      c4 = 0;
      return arg1;
    })();
  });
  closure_7 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function openSendTimeActionSheet(key) {
  let title = key.title;
  ({ startDate: importDefault, scheduledMessageId: dependencyMap, onSelect: closure_3, onClear } = key);
  let obj = hooksDefault();
  const addResult = obj.add(1, "day");
  const result = obj.add(1, "day").startOf("day").set("hours", 9);
  let obj3 = hooksDefault();
  const startOfResult = obj.add(1, "day").startOf("day");
  const addResult1 = obj3.add(1, "day");
  const result1 = obj3.add(1, "day").startOf("day").set("hours", 13);
  const startOfResult1 = obj3.add(1, "day").startOf("day");
  const obj7 = hooksDefault();
  const startOfResult2 = hooksDefault().startOf("isoWeek");
  obj = { label: null, value: null };
  const result2 = hooksDefault().startOf("isoWeek").add(1, "week").set("hours", 9);
  const intl = title(1236).intl;
  obj[0] = intl.string(title(1236).t.tjIn9i);
  obj[1] = result;
  const items = [obj, , ];
  obj = { label: null, value: null };
  const intl2 = title(1236).intl;
  obj[0] = intl2.string(title(1236).t.EMRZyS);
  obj[1] = result1;
  items[1] = obj;
  obj1 = { label: null, value: null };
  const intl3 = title(1236).intl;
  obj1[0] = intl3.string(title(1236).t["+P5MmK"]);
  obj1[1] = result2;
  items[2] = obj1;
  const addResult2 = hooksDefault().startOf("isoWeek").add(1, "week");
  let obj2 = { key: key.key, header: { title }, hasIcons: false, options: null };
  const items1 = [
    ...items.map((label) => {
      title = label.value;
      return {
        label: label.label,
        onPress() {
          return closure_1_3(closure_0);
        }
      };
    })
  ];
  obj3 = { label: null, onPress: null };
  const intl4 = title(1236).intl;
  obj3[0] = intl4.string(title(1236).t.stHooC);
  obj3[1] = function onPress() {
    let obj = closure_1_1(closure_1_2[12]);
    obj.hideActionSheet();
    const obj2 = closure_1_1(closure_1_2[5]);
    obj = { title, defaultValue: closure_1, minimumDate: null, maximumDate: null, getError: null, createReminder: null, onClose: null };
    const tmp2 = title(closure_1_2[7])(closure_1_2[13], closure_1_2.paths);
    obj[2] = title(closure_1_2[4]).getEarliestScheduledTime();
    const obj4 = title(closure_1_2[4]);
    obj[3] = title(closure_1_2[4]).getLatestScheduledTime(closure_2);
    obj[4] = function getError(isBefore) {
      return closure_1_0(closure_1_2[4]).getScheduledTimeError(isBefore, closure_2);
    };
    obj[5] = function createReminder(arg0) {
      return callback(closure_1_1(closure_1_2[3])(arg0));
    };
    obj[6] = closure_1_1(closure_1_2[5]).pop;
    obj2.pushLazy(tmp2, obj, "scheduled-message-custom-time", { presentation: "modal" });
  };
  items1[tmp6] = obj3;
  if (null != onClear) {
    let obj4 = { label: null, onPress: null };
    const intl5 = tmp5(1236).intl;
    obj4[0] = intl5.string(tmp5(1236).t.VkKicb);
    obj4[1] = onClear;
    const items2 = [obj4];
    let items3 = items2;
  } else {
    items3 = [];
  }
  HermesBuiltin.arraySpread(items3, tmp6 + 1);
  obj2[3] = items1;
  const result3 = title(5954).showSimpleActionSheet(obj2);
}
let result = require("set").fileFinishedImporting("modules/scheduled_messages/native/ScheduledMessagesUtils.native.tsx");

export const openScheduleMessageActionSheet = function openScheduleMessageActionSheet(id, scheduledTimestamp) {
  const _require = id;
  let obj = {
    onSelect(scheduledTimestamp) {
      let obj = closure_1_1(closure_1_2[1]);
      obj = { scheduledTimestamp };
      return obj.changeScheduledMessage(closure_0, obj);
    },
    currentTimestamp: scheduledTimestamp
  };
  ({ onSelect: closure_0, currentTimestamp } = obj);
  obj = { key: "schedule-message", title: null, startDate: null, onSelect: null, onClear: null };
  const intl = _require(1236).intl;
  obj[1] = intl.string(_require(1236).t["3+ii4F"]);
  if (null != currentTimestamp) {
    let defaultScheduledTime = hooksDefault(currentTimestamp);
  } else {
    defaultScheduledTime = _require(7557).getDefaultScheduledTime();
    const tmp2Result = _require(7557);
  }
  obj[2] = defaultScheduledTime;
  obj[3] = function onSelect(toISOString) {
    return id(toISOString.toISOString());
  };
  obj[4] = obj.onClear;
  openSendTimeActionSheet(obj);
};
export const pickScheduledMessageTime = function pickScheduledMessageTime(onClear) {
  ({ onSelect: require, currentTimestamp } = onClear);
  const obj = { key: "schedule-message", title: null, startDate: null, onSelect: null, onClear: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t["3+ii4F"]);
  if (null != currentTimestamp) {
    let defaultScheduledTime = hooksDefault(currentTimestamp);
  } else {
    defaultScheduledTime = ScheduledMessagesConfig.getDefaultScheduledTime();
    const tmp2Result = ScheduledMessagesConfig;
  }
  obj[2] = defaultScheduledTime;
  obj[3] = function onSelect(toISOString) {
    return id(toISOString.toISOString());
  };
  obj[4] = onClear.onClear;
  openSendTimeActionSheet(obj);
};
export const showScheduledMessagesModal = function showScheduledMessagesModal() {
  _modDef4691.pushLazy(asyncRequireImpl(11746, dependencyMap.paths), {}, "scheduled-messages-modal", { presentation: "modal" });
};
export const openScheduledMessageEditContentModal = function openScheduledMessageEditContentModal(closure_0) {
  let obj = _modDef4691;
  obj = { scheduledMessage: closure_0 };
  obj.pushLazy(asyncRequireImpl(11756, dependencyMap.paths), obj, "scheduled-message-edit-content", { presentation: "modal" });
};
export const openRescheduleMessageActionSheet = function openRescheduleMessageActionSheet(scheduledMessageId, sendAtTimestamp) {
  const _require = scheduledMessageId;
  const obj = { key: "reschedule-message", title: null, startDate: null, scheduledMessageId: null, onSelect: null };
  const intl = _require(1236).intl;
  obj[1] = intl.string(_require(1236).t.jbdHj3);
  obj[2] = hooksDefault(sendAtTimestamp);
  obj[3] = scheduledMessageId;
  obj[4] = function onSelect(toISOString) {
    return closure_1_4(closure_0, { scheduledTimestamp: toISOString.toISOString() });
  };
  openSendTimeActionSheet(obj);
};
export { editScheduledMessage };
export const cancelScheduledMessage = function cancelScheduledMessage(scheduledMessageId) {
  const self = this;
  const apply = _cancelScheduledMessage.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const sendScheduledMessageNow = function sendScheduledMessageNow() {
  const self = this;
  const apply = _sendScheduledMessageNow.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};