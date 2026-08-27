// discord_app/modules/scheduled_messages/native/ScheduledMessagesUtils.native.tsx
import asyncRequireImpl from "../../../../_runtime/02009_asyncRequireImpl.js";
import hooksDefault from "../../../../_runtime/04043_hooks.js";
import _modDef4676 from "../../../actions/ModalActionCreators.tsx";
import closure_3 from "../../../../_runtime/00005_asyncGeneratorStep.js";
import MIN_SCHEDULE_TIME_INTO_FUTURE_SECONDS from "../../../../discord_common/js/shared/shared-constants/ScheduledMessagesConstants.tsx";

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
          return { value: "HermesInternal", done: null };
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
              let obj3 = lib(closure_1_2[10]);
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
            obj2 = lib(7525);
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
            obj = lib(7525);
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
  closure_7 = tmp;
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
      yield lib(closure_1_2[10]).deleteScheduledMessage(lib);
      if (1 === tmp7) {
        c4 = 0;
        lib = closure_3;
        const obj2 = lib(7525);
        const result = obj2.showScheduleMessageDeleteFailureToast(lib.message);
        c6 = 3;
      } else if (arg0 === 1) {
        c6 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        const obj = lib(7525);
        const result1 = obj.showScheduleMessageDeleteSuccessToast();
        c4 = 0;
      }
      c4 = 0;
      return arg1;
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
    let obj = closure_1_1(closure_1_2[13]);
    obj = { title, mode: "datetime", startDate: closure_1.toDate(), minimumDate: null, maximumDate: null, onSubmit: null };
    const tmp = title(closure_1_2[7])(closure_1_2[14], closure_1_2.paths);
    const obj3 = closure_1_1(closure_1_2[9])();
    obj[3] = closure_1_1(closure_1_2[9])().add(closure_1_5, "seconds").toDate();
    const addResult = closure_1_1(closure_1_2[9])().add(closure_1_5, "seconds");
    const obj5 = closure_1_1(closure_1_2[9])();
    obj[4] = closure_1_1(closure_1_2[9])().add(closure_1_4, "seconds").toDate();
    obj[5] = closure_2;
    return obj.openLazy(tmp, "DatePicker", obj);
  };
  items1[tmp4] = obj3;
  obj2[3] = items1;
  const result3 = title(5938).showSimpleActionSheet(obj2);
}
({ MAX_SCHEDULE_TIME_INTO_FUTURE_SECONDS: c4, MIN_SCHEDULE_TIME_INTO_FUTURE_SECONDS: c5 } = MIN_SCHEDULE_TIME_INTO_FUTURE_SECONDS);
let result = require("set").fileFinishedImporting("modules/scheduled_messages/native/ScheduledMessagesUtils.native.tsx");

export const openScheduleMessageActionSheet = function openScheduleMessageActionSheet(id) {
  const _require = id;
  let obj = { key: "schedule-message", title: null, startDate: null, onSelect: null };
  const intl = require("../../../intl/index.native.tsx").intl;
  obj[1] = intl.string(require("../../../intl/index.native.tsx").t["3+ii4F"]);
  obj[2] = require("../ScheduledMessageUtils.tsx").getDefaultScheduledTime();
  obj[3] = function onSelect(toISOString) {
    let obj = closure_1_1(closure_1_2[4]);
    obj = { scheduledTimestamp: toISOString.toISOString() };
    return obj.changeScheduledMessage(closure_0, obj);
  };
  openSendTimeActionSheet(obj);
};
export const showScheduledMessagesModal = function showScheduledMessagesModal() {
  _modDef4676.pushLazy(asyncRequireImpl(11712, dependencyMap.paths), {}, "scheduled-messages-modal", { presentation: "modal" });
};
export const openScheduledMessageEditContentModal = function openScheduledMessageEditContentModal(scheduledMessage) {
  let obj = _modDef4676;
  obj = { scheduledMessage };
  obj.pushLazy(asyncRequireImpl(11722, dependencyMap.paths), obj, "scheduled-message-edit-content", { presentation: "modal" });
};
export const openRescheduleMessageActionSheet = function openRescheduleMessageActionSheet(scheduledMessageId, sendAtTimestamp) {
  const _require = scheduledMessageId;
  const obj = { key: "reschedule-message", title: null, startDate: null, onSelect: null };
  const intl = require("../../../intl/index.native.tsx").intl;
  obj[1] = intl.string(require("../../../intl/index.native.tsx").t.jbdHj3);
  obj[2] = hooksDefault(sendAtTimestamp);
  obj[3] = function onSelect(toISOString) {
    return closure_1_6(closure_0, { scheduledTimestamp: toISOString.toISOString() });
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