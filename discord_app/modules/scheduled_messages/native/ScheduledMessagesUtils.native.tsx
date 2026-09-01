// discord_app/modules/scheduled_messages/native/ScheduledMessagesUtils.native.tsx
import getSystemLocale from "../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../_runtime/02009_asyncRequireImpl.js";
import hooksDefault from "../../../../_runtime/04075_hooks.js";
import _modDef4723 from "../../../actions/ModalActionCreators.tsx";
import ScheduledMessagesConfig from "../ScheduledMessageUtils.tsx";
import closure_3 from "../../../../_runtime/00005_asyncGeneratorStep.js";
import { ScheduledMessagesConfig } from "../ScheduledMessageUtils.tsx";

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
    return (function* (arg0, arg1) {
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
            obj2 = lib(7592);
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
            obj = lib(7592);
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
    return (function* (arg0) {
      dependencyMap = tmp3;
      c4 = 1;
      yield lib(closure_1_2[10]).deleteScheduledMessage(lib);
      if (1 === tmp7) {
        c4 = 0;
        lib = closure_3;
        const obj2 = lib(7592);
        const result = obj2.showScheduleMessageDeleteFailureToast(lib.message);
        c6 = 3;
      } else if (arg0 === 1) {
        c6 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        const obj = lib(7592);
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
    return (function* (arg0) {
      dependencyMap = tmp3;
      c4 = 1;
      yield lib(closure_1_2[10]).sendScheduledMessageNow(lib);
      if (1 === tmp7) {
        c4 = 0;
        lib = closure_3;
        const obj2 = lib(7592);
        const result = obj2.showScheduleMessageSentNowFailureToast(lib.message);
        c6 = 3;
      } else if (arg0 === 1) {
        c6 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        const obj = lib(7592);
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
function openSendTimeActionSheet(title) {
  title = title.title;
  ({ startDate: importDefault, scheduledMessageId: dependencyMap, onSelect: closure_3, onClear } = title);
  ({ key, entryPoint, isEditing, channelId } = title);
  let obj = title(7589);
  const result = obj.trackScheduledMessageTimePickerOpened({ entryPoint, isEditing, channelId });
  obj1 = hooksDefault();
  const addResult = obj1.add(1, "day");
  const result1 = obj1.add(1, "day").startOf("day").set("hours", 9);
  let obj4 = hooksDefault();
  const startOfResult = obj1.add(1, "day").startOf("day");
  const addResult1 = obj4.add(1, "day");
  const result2 = obj4.add(1, "day").startOf("day").set("hours", 13);
  const startOfResult1 = obj4.add(1, "day").startOf("day");
  const obj8 = hooksDefault();
  const startOfResult2 = hooksDefault().startOf("isoWeek");
  obj = { label: null, value: null };
  const result3 = hooksDefault().startOf("isoWeek").add(1, "week").set("hours", 9);
  const intl = title(1236).intl;
  obj[0] = intl.string(title(1236).t.tjIn9i);
  obj[1] = result1;
  const items = [obj, ,];
  obj = { label: null, value: null };
  const intl2 = title(1236).intl;
  obj[0] = intl2.string(title(1236).t.EMRZyS);
  obj[1] = result2;
  items[1] = obj;
  obj1 = { label: null, value: null };
  const intl3 = title(1236).intl;
  obj1[0] = intl3.string(title(1236).t["+P5MmK"]);
  obj1[1] = result3;
  items[2] = obj1;
  const addResult2 = hooksDefault().startOf("isoWeek").add(1, "week");
  let obj2 = { key, header: { title }, hasIcons: false, options: null };
  const items1 = [
    ...items.map((label) => {
      title = label.value;
      return {
        label: label.label,
        onPress() {
          return closure_1_3(closure_0);
        },
      };
    }),
  ];
  const obj3 = { label: null, onPress: null };
  const intl4 = title(1236).intl;
  obj3[0] = intl4.string(title(1236).t.stHooC);
  obj3[1] = function onPress() {
    let obj = closure_1_1(closure_1_2[13]);
    obj.hideActionSheet();
    const obj2 = closure_1_1(closure_1_2[5]);
    obj = {
      title,
      defaultValue: closure_1,
      minimumDate: null,
      maximumDate: null,
      getError: null,
      createReminder: null,
      onClose: null,
    };
    const tmp2 = title(closure_1_2[7])(closure_1_2[14], closure_1_2.paths);
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
  items1[tmp7] = obj3;
  if (null != onClear) {
    obj4 = { label: null, onPress: null };
    const intl5 = tmp(1236).intl;
    obj4[0] = intl5.string(tmp(1236).t.VkKicb);
    obj4[1] = onClear;
    const items2 = [obj4];
    let items3 = items2;
  } else {
    items3 = [];
  }
  HermesBuiltin.arraySpread(items3, tmp7 + 1);
  obj2[3] = items1;
  const result4 = title(5986).showSimpleActionSheet(obj2);
}
let result = require("set").fileFinishedImporting(
  "modules/scheduled_messages/native/ScheduledMessagesUtils.native.tsx",
);

export const openScheduleMessageActionSheet = function openScheduleMessageActionSheet(
  id,
  ATTACH_MENU,
  scheduledTimestamp,
) {
  const _require = id;
  let obj = {
    onSelect(scheduledTimestamp) {
      let obj = closure_1_1(closure_1_2[1]);
      obj = { scheduledTimestamp };
      return obj.changeScheduledMessage(closure_0, obj);
    },
    currentTimestamp: scheduledTimestamp,
    entryPoint: ATTACH_MENU,
    channelId: id,
  };
  ({ onSelect: closure_0, currentTimestamp } = obj);
  obj = {
    key: "schedule-message",
    title: null,
    startDate: null,
    onSelect: null,
    onClear: null,
    entryPoint: null,
    isEditing: null,
    channelId: null,
  };
  ({ onClear, entryPoint, channelId } = obj);
  const intl = require("../../../intl/index.native.tsx").intl;
  obj[1] = intl.string(require("../../../intl/index.native.tsx").t["3+ii4F"]);
  if (null != currentTimestamp) {
    let defaultScheduledTime = hooksDefault(currentTimestamp);
  } else {
    defaultScheduledTime = require("../ScheduledMessageUtils.tsx").getDefaultScheduledTime();
    const tmp2Result = ScheduledMessagesConfig;
  }
  obj[2] = defaultScheduledTime;
  obj[3] = function onSelect(toISOString) {
    return id(toISOString.toISOString());
  };
  obj[4] = onClear;
  obj[5] = entryPoint;
  obj[6] = null != currentTimestamp;
  obj[7] = channelId;
  openSendTimeActionSheet(obj);
};
export const pickScheduledMessageTime = function pickScheduledMessageTime(arg0) {
  ({ onSelect: require, currentTimestamp } = arg0);
  const obj = {
    key: "schedule-message",
    title: null,
    startDate: null,
    onSelect: null,
    onClear: null,
    entryPoint: null,
    isEditing: null,
    channelId: null,
  };
  ({ onClear, entryPoint, channelId } = arg0);
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
  obj[4] = onClear;
  obj[5] = entryPoint;
  obj[6] = null != currentTimestamp;
  obj[7] = channelId;
  openSendTimeActionSheet(obj);
};
export const showScheduledMessagesModal = function showScheduledMessagesModal() {
  _modDef4723.pushLazy(asyncRequireImpl(11779, dependencyMap.paths), {}, "scheduled-messages-modal", {
    presentation: "modal",
  });
};
export const openScheduledMessageEditContentModal = function openScheduledMessageEditContentModal(closure_0) {
  let obj = _modDef4723;
  obj = { scheduledMessage: closure_0 };
  obj.pushLazy(asyncRequireImpl(11789, dependencyMap.paths), obj, "scheduled-message-edit-content", {
    presentation: "modal",
  });
};
export const openRescheduleMessageActionSheet = function openRescheduleMessageActionSheet(
  scheduledMessageId,
  sendAtTimestamp,
  channelId,
) {
  const _require = scheduledMessageId;
  const obj = {
    key: "reschedule-message",
    title: null,
    startDate: null,
    scheduledMessageId: null,
    onSelect: null,
    entryPoint: null,
    isEditing: true,
    channelId: null,
  };
  const intl = require("../../../intl/index.native.tsx").intl;
  obj[1] = intl.string(require("../../../intl/index.native.tsx").t.jbdHj3);
  obj[2] = hooksDefault(sendAtTimestamp);
  obj[3] = scheduledMessageId;
  obj[4] = function onSelect(toISOString) {
    return closure_1_4(closure_0, { scheduledTimestamp: toISOString.toISOString() });
  };
  obj[5] = require("../ScheduledMessageTypes.tsx").ScheduledMessageEntryPoint.INBOX;
  obj[7] = channelId;
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
