// === Module 11568: _scheduleMessage ===

// Module 11568 (_scheduleMessage)
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import hooksDefault from "hooks" /* 3979 */;
import _modDef4611 from "module_4611" /* 4611 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import MIN_SCHEDULE_TIME_INTO_FUTURE_SECONDS from "MIN_SCHEDULE_TIME_INTO_FUTURE_SECONDS" /* 11569 */;

require = arg1;
function _scheduleMessage() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    const iter = (function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
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
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              c2 = tmp3;
              c1 = tmp5;
              c0 = undefined;
              c1 = undefined;
              c2 = undefined;
              let message;
              c4 = undefined;
              c5 = undefined;
              c6 = undefined;
              ({ channelId: c0, scheduledTimestamp: c1, content: c2, tts: c3, messageReference: c4, allowedMentions: c5, attachmentsToUpload: c6 } = c0);
              c5 = 1;
              c6 = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp8) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              c4 = 1;
              const obj2 = { channelId: null, scheduledTimestamp: null, messageSendData: null, attachmentsToUpload: null };
              obj2[0] = c0;
              obj2[1] = c1;
              const obj3 = { channelId: null, content: null, nonce: null, tts: null, message_reference: null, allowed_mentions: null };
              obj3[0] = c0;
              obj3[1] = c2;
              const obj6 = callback(closure_1_2[2]);
              obj3[2] = callback(closure_1_2[3]).createNonce();
              obj3[3] = message;
              obj3[4] = c4;
              obj3[5] = c5;
              obj2[2] = obj3;
              obj2[3] = c6;
              c5 = 3;
              c6 = 1;
              const obj4 = { value: null, done: false };
              obj4[0] = obj6.createScheduledMessage(obj2);
              return obj4;
            }
          } else if (2 === tmp8) {
            c4 = 0;
            (function showScheduleMessageFailureToast(message) {
              let obj = _undefined2(_undefined3[4]);
              obj = { key: "SCHEDULED_MESSAGE_CREATE_FAILURE", content: null, IconComponent: null, iconColor: "icon-feedback-critical" };
              const intl = _undefined(_undefined3[5]).intl;
              obj = { error: message };
              obj[1] = intl.formatToPlainString(_undefined(_undefined3[5]).t.PsJmUe, obj);
              obj[2] = _undefined(_undefined3[7]).CircleXIcon;
              obj.open(obj);
            })(message.message);
            c6 = 3;
            return { value: false, done: true };
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            (function showScheduleMessageSuccessToast(c1) {
              let obj = _undefined2(_undefined3[4]);
              obj = { key: "SCHEDULED_MESSAGE_CREATE_SUCCESS", content: null, IconComponent: null, iconColor: "status-positive" };
              const intl = _undefined(_undefined3[5]).intl;
              obj = { timestamp: new Date(c1).valueOf() };
              obj[1] = intl.formatToPlainString(_undefined(_undefined3[5]).t["CvHu/j"], obj);
              obj[2] = _undefined(_undefined3[6]).ClockIcon;
              obj.open(obj);
            })(c1);
            c4 = 0;
            c6 = 3;
            return { value: true, done: true };
          }
        } catch (tmp16) {
          message = tmp16;
          if (tmp4 === c4) {
            c6 = tmp2;
            throw tmp16;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
    iter.next();
    return iter;
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
              let obj4 = lib(closure_1_2[2]);
              obj1 = { scheduledMessageId: null };
              obj1[0] = lib;
              const merged = Object.assign(callback);
              c6 = 2;
              c7 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = obj4.updateScheduledMessage(obj1);
              return obj2;
            }
          } else if (1 === tmp7) {
            c5 = 0;
            lib = closure_4;
            obj1 = callback(4098);
            const obj3 = { key: "SCHEDULED_MESSAGE_UPDATE_FAILURE", content: null, IconComponent: null, iconColor: "icon-feedback-critical" };
            const intl = lib(1236).intl;
            obj4 = { error: null };
            obj4[0] = lib.message;
            obj3[1] = intl.formatToPlainString(lib(1236).t.slM6In, obj4);
            obj3[2] = lib(6105).CircleXIcon;
            obj1.open(obj3);
            c7 = 3;
            return { value: false, done: true };
          } else if (arg0 === 1) {
            c7 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const obj5 = { key: "SCHEDULED_MESSAGE_UPDATE_SUCCESS", content: null, IconComponent: null, iconColor: "status-positive" };
            const intl2 = lib(1236).intl;
            obj5[1] = intl2.string(lib(1236).t.MXsMRk);
            obj5[2] = lib(4343).ClockIcon;
            callback(4098).open(obj5);
            c5 = 0;
            c7 = 3;
            return { value: true, done: true };
          }
        } catch (tmp28) {
          closure_4 = tmp28;
          if (tmp4 === c5) {
            c7 = tmp2;
            throw tmp28;
          } else {
            c6 = tmp;
          }
        }
      }
    })();
  });
  closure_8 = tmp;
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
      let obj4 = lib(closure_1_2[2]);
      yield obj4.deleteScheduledMessage(lib);
      if (1 === tmp7) {
        c4 = 0;
        lib = closure_3;
        obj1 = callback(4098);
        const obj2 = { key: "SCHEDULED_MESSAGE_DELETE_FAILURE", content: null, IconComponent: null, iconColor: "icon-feedback-critical" };
        const intl = lib(1236).intl;
        const obj3 = { error: null };
        obj3[0] = lib.message;
        obj2[1] = intl.formatToPlainString(lib(1236).t.sUvyW3, obj3);
        obj2[2] = lib(6105).CircleXIcon;
        obj1.open(obj2);
        c6 = 3;
      } else if (arg0 === 1) {
        c6 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        obj4 = { key: "SCHEDULED_MESSAGE_DELETE_SUCCESS", content: null, IconComponent: null, iconColor: "status-positive" };
        const intl2 = lib(1236).intl;
        obj4[1] = intl2.string(lib(1236).t["JF/LWn"]);
        obj4[2] = lib(4343).ClockIcon;
        callback(4098).open(obj4);
        c4 = 0;
        const obj9 = callback(4098);
      }
      c4 = 0;
      return arg1;
    })();
  });
  closure_9 = tmp;
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
  ({ startDate: importDefault, onSelect: dependencyMap } = key);
  let obj = hooksDefault();
  let addResult = obj.add(1, "day");
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
  const obj2 = { key: key.key, header: { title }, hasIcons: false, options: null };
  const items1 = [
    ...items.map((label) => {
      title = label.value;
      return {
        label: label.label,
        onPress() {
          return closure_1_2(closure_0);
        }
      };
    })
  ];
  obj3 = { label: null, onPress: null };
  const intl4 = title(1236).intl;
  obj3[0] = intl4.string(title(1236).t.stHooC);
  obj3[1] = function onPress() {
    let obj = closure_1_1(closure_1_2[16]);
    obj = { title, mode: "datetime", startDate: closure_1.toDate(), minimumDate: null, maximumDate: null, onSubmit: null };
    const tmp = title(closure_1_2[12])(closure_1_2[17], closure_1_2.paths);
    const obj3 = closure_1_1(closure_1_2[14])();
    obj[3] = closure_1_1(closure_1_2[14])().add(closure_1_5, "seconds").toDate();
    const addResult = closure_1_1(closure_1_2[14])().add(closure_1_5, "seconds");
    const obj5 = closure_1_1(closure_1_2[14])();
    obj[4] = closure_1_1(closure_1_2[14])().add(closure_1_4, "seconds").toDate();
    obj[5] = closure_2;
    return obj.openLazy(tmp, "DatePicker", obj);
  };
  items1[tmp4] = obj3;
  obj2[3] = items1;
  const result3 = title(5867).showSimpleActionSheet(obj2);
}
({ MAX_SCHEDULE_TIME_INTO_FUTURE_SECONDS: c4, MIN_SCHEDULE_TIME_INTO_FUTURE_SECONDS: c5 } = MIN_SCHEDULE_TIME_INTO_FUTURE_SECONDS);
let result = require("set").fileFinishedImporting("modules/scheduled_messages/native/ScheduledMessagesUtils.native.tsx");

export const scheduleMessage = function scheduleMessage(arg0) {
  const self = this;
  const apply = _scheduleMessage.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const openScheduleMessageActionSheet = function openScheduleMessageActionSheet(id) {
  const _require = id;
  let obj = { key: "schedule-message", title: null, startDate: null, onSelect: null };
  const intl = _require(1236).intl;
  obj[1] = intl.string(_require(1236).t["3+ii4F"]);
  obj[2] = _require(11572).getDefaultScheduledTime();
  obj[3] = function onSelect(toISOString) {
    let obj = closure_1_1(closure_1_2[9]);
    obj = { scheduledTimestamp: toISOString.toISOString() };
    return obj.changeScheduledMessage(closure_0, obj);
  };
  openSendTimeActionSheet(obj);
};
export const showScheduledMessagesModal = function showScheduledMessagesModal() {
  _modDef4611.pushLazy(asyncRequireImpl(11574, dependencyMap.paths), {}, "scheduled-messages-modal", { presentation: "modal" });
};
export const openScheduledMessageEditContentModal = function openScheduledMessageEditContentModal(scheduledMessage) {
  let obj = _modDef4611;
  obj = { scheduledMessage };
  obj.pushLazy(asyncRequireImpl(11585, dependencyMap.paths), obj, "scheduled-message-edit-content", { presentation: "modal" });
};
export const openRescheduleMessageActionSheet = function openRescheduleMessageActionSheet(scheduledMessageId, sendAtTimestamp) {
  const _require = scheduledMessageId;
  const obj = { key: "reschedule-message", title: null, startDate: null, onSelect: null };
  const intl = _require(1236).intl;
  obj[1] = intl.string(_require(1236).t.jbdHj3);
  obj[2] = hooksDefault(sendAtTimestamp);
  obj[3] = function onSelect(toISOString) {
    return closure_1_7(closure_0, { scheduledTimestamp: toISOString.toISOString() });
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