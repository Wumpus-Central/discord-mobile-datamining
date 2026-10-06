// === Module 11854: ScheduledMessagesUtils ===

// Module 11854 (ScheduledMessagesUtils)
import intl3 from "intl" /* 1126 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import _modDef4467 from "module_4467" /* 4467 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5099 */;
import DraftActionCreatorsDefault from "DraftActionCreators" /* 7416 */;
import ScheduledMessageUtils from "ScheduledMessageUtils" /* 7486 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_2, closure_3, closure_4;

function onSelect(toISOString) {
  return id(toISOString.toISOString());
}
function editScheduledMessage() {
  return obj(...arguments);
}
let obj = function _editScheduledMessage() {
  obj = _asyncToGenerator(async (scheduledMessageId, arg1) => {
    let closure_1 = arg1;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (async (arg0, value) => {
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp;
              closure_2 = tmp4;
              c5 = 1;
              const obj5 = { scheduledMessageId };
              const updateScheduledMessage = require("ScheduledMessageActionCreators").updateScheduledMessage;
              require("ScheduledMessageActionCreators");
              const merged = Object.assign(closure_1);
              c6 = 2;
              c7 = 1;
              const obj6 = { value: updateScheduledMessage(obj5), done: false };
              return obj6;
            }
          } else if (1 === c6) {
            c5 = 0;
            scheduledMessageId = closure_4;
            const obj3 = closure_131_0(closure_131_2[11]);
            const result = obj3.showScheduledMessageEditFailureToast(scheduledMessageId.message);
            c7 = 3;
            return { value: false, done: true };
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            return { value, done: true };
          } else {
            obj = closure_131_0(closure_131_2[11]);
            const result1 = obj.showScheduledMessageEditSuccessToast();
            c5 = 0;
            c7 = 3;
            return { value: true, done: true };
          }
        } catch (tmp24) {
          closure_4 = tmp24;
          if (0 === c5) {
            c7 = 3;
            throw tmp24;
          } else {
            c6 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _cancelScheduledMessage() {
  obj = _asyncToGenerator(async (arg0) => {
    let message = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (async (arg0) => {
      let obj4;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              closure_2 = tmp;
              closure_1 = tmp4;
              c4 = 1;
              c5 = 2;
              c6 = 1;
              const obj6 = { value: obj4.deleteScheduledMessage(message), done: false };
              obj4 = require("ScheduledMessageActionCreators");
              return obj6;
            }
          } else {
            if (1 === c5) {
              c4 = 0;
              message = closure_3;
              const obj3 = closure_130_0(closure_130_2[11]);
              const result = obj3.showScheduleMessageDeleteFailureToast(message.message);
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              return { value, done: true };
            } else {
              obj = closure_130_0(closure_130_2[11]);
              const result1 = obj.showScheduleMessageDeleteSuccessToast();
              c4 = 0;
            }
            c6 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp20) {
          closure_3 = tmp20;
          if (0 === c4) {
            c6 = 3;
            throw tmp20;
          } else {
            c5 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _sendScheduledMessageNow() {
  obj = _asyncToGenerator(async (arg0) => {
    let message = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (async (arg0) => {
      let obj4;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              closure_2 = tmp;
              closure_1 = tmp4;
              c4 = 1;
              c5 = 2;
              c6 = 1;
              const obj6 = { value: obj4.sendScheduledMessageNow(message), done: false };
              obj4 = require("ScheduledMessageActionCreators");
              return obj6;
            }
          } else {
            if (1 === c5) {
              c4 = 0;
              message = closure_3;
              const obj3 = closure_130_0(closure_130_2[11]);
              const result = obj3.showScheduleMessageSentNowFailureToast(message.message);
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              return { value, done: true };
            } else {
              obj = closure_130_0(closure_130_2[11]);
              const result1 = obj.showScheduleMessageSentNowSuccessToast();
              c4 = 0;
            }
            c6 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp20) {
          closure_3 = tmp20;
          if (0 === c4) {
            c6 = 3;
            throw tmp20;
          } else {
            c5 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
function openSendTimeActionSheet(title) {
  let channelId;
  let defaultValue;
  let entryPoint;
  let intl;
  let intl2;
  let isEditing;
  let items;
  let items2;
  let key;
  let onClear;
  title = title.title;
  ({ startDate: importDefault, scheduledMessageId: dependencyMap, onSelect: _asyncToGenerator, onClear } = title);
  const tmp2 = title;
  ({ key, entryPoint, isEditing, channelId } = title);
  obj = title(7486);
  const result = obj.trackScheduledMessageTimePickerOpened({ entryPoint, isEditing, channelId });
  let obj2 = { key, header: { title }, hasIcons: false, options: items };
  const showSimpleActionSheet = title(6700).showSimpleActionSheet;
  title(6700);
  let obj3 = title(7486);
  const presetScheduledTimes = obj3.getPresetScheduledTimes();
  items = [
    ...presetScheduledTimes.map((label) => {
      let value;
      title = label.value;
      return {
        label: label.label,
        onPress() {
          return _asyncToGenerator(title);
        }
      };
    })
  ];
  let obj4 = {
    label: intl.string(title(1126).t.stHooC),
    onPress() {
      let obj3;
      let obj4;
      obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      const pushLazy = ModalActionCreatorsDefault.pushLazy;
      ModalActionCreatorsDefault;
      const obj2 = {
        title,
        defaultValue: importDefault,
        minimumDate: obj3.getEarliestScheduledTime(),
        maximumDate: obj4.getLatestScheduledTime(dependencyMap),
        getError(isBefore) {
          obj = title(dependencyMap[4]);
          return obj.getScheduledTimeError(isBefore, closure_1_2);
        },
        createReminder(arg0) {
          return closure_1_3(_modDef4467(arg0));
        },
        onClose: ModalActionCreatorsDefault.pop
      };
      const tmp3 = asyncRequire(11356, dependencyMap.paths);
      obj3 = ScheduledMessageUtils;
      obj4 = ScheduledMessageUtils;
      pushLazy(tmp3, obj2, "scheduled-message-custom-time", { presentation: "modal" });
    }
  };
  intl = title(1126).intl;
  items[tmp6] = obj4;
  if (null != onClear) {
    const obj5 = { label: intl2.string(tmp2(1126).t.VkKicb), onPress: onClear };
    intl2 = tmp2(1126).intl;
    const items1 = [obj5];
    items2 = items1;
  } else {
    items2 = [];
  }
  HermesBuiltin.arraySpread(items, items2, tmp6 + 1);
  const result1 = showSimpleActionSheet(obj2);
}
let result = size.fileFinishedImporting("modules/scheduled_messages/native/ScheduledMessagesUtils.native.tsx");

export const openScheduleMessageActionSheet = function openScheduleMessageActionSheet(id, COMPOSER_BAR, scheduledTimestamp) {
  let channelId;
  let closure_129_0;
  let currentTimestamp;
  let defaultScheduledTime;
  let entryPoint;
  let intl;
  let onClear;
  _require = id;
  obj = {
    onSelect(scheduledTimestamp) {
      obj = DraftActionCreatorsDefault;
      const obj2 = { scheduledTimestamp };
      return obj.changeScheduledMessage(id, obj2);
    },
    currentTimestamp: scheduledTimestamp,
    entryPoint: COMPOSER_BAR,
    channelId: id
  };
  ({ onSelect: closure_129_0, currentTimestamp } = obj);
  let obj2 = { key: "schedule-message", title: intl.string(require("intl").t["3+ii4F"]), startDate: defaultScheduledTime, onSelect, onClear, entryPoint, isEditing: null != currentTimestamp, channelId };
  ({ onClear, entryPoint, channelId } = obj);
  intl = require("intl").intl;
  const tmp2 = _require;
  if (null != currentTimestamp) {
    defaultScheduledTime = _modDef4467(currentTimestamp);
  } else {
    const tmp2Result = tmp2(7486);
    defaultScheduledTime = tmp2Result.getDefaultScheduledTime();
  }
  openSendTimeActionSheet(obj2);
};
export const pickScheduledMessageTime = function pickScheduledMessageTime(arg0) {
  let channelId;
  let closure_129_0;
  let currentTimestamp;
  let defaultScheduledTime;
  let entryPoint;
  let intl;
  let onClear;
  ({ onSelect: closure_129_0, currentTimestamp } = arg0);
  obj = { key: "schedule-message", title: intl.string(intl3.t["3+ii4F"]), startDate: defaultScheduledTime, onSelect, onClear, entryPoint, isEditing: null != currentTimestamp, channelId };
  ({ onClear, entryPoint, channelId } = arg0);
  intl = intl3.intl;
  if (null != currentTimestamp) {
    defaultScheduledTime = _modDef4467(currentTimestamp);
  } else {
    const tmp2Result = ScheduledMessageUtils;
    defaultScheduledTime = tmp2Result.getDefaultScheduledTime();
  }
  openSendTimeActionSheet(obj);
};
export const showScheduledMessagesModal = function showScheduledMessagesModal() {
  obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(11855, dependencyMap.paths), {}, "scheduled-messages-modal", { presentation: "modal" });
};
export const openScheduledMessageEditContentModal = function openScheduledMessageEditContentModal(scheduledMessage) {
  obj = ModalActionCreatorsDefault;
  const obj2 = { scheduledMessage };
  obj.pushLazy(asyncRequire(11865, dependencyMap.paths), obj2, "scheduled-message-edit-content", { presentation: "modal" });
};
export const openRescheduleMessageActionSheet = function openRescheduleMessageActionSheet(scheduledMessageId, sendAtTimestamp, channelId) {
  let intl;
  _require = scheduledMessageId;
  obj = {
    key: "reschedule-message",
    title: intl.string(require("intl").t.jbdHj3),
    startDate: _modDef4467(sendAtTimestamp),
    scheduledMessageId,
    onSelect(toISOString) {
      obj = { scheduledTimestamp: toISOString.toISOString() };
      return editScheduledMessage(scheduledMessageId, obj);
    },
    entryPoint: require("ScheduledMessageTypes").ScheduledMessageEntryPoint.INBOX,
    isEditing: true,
    channelId
  };
  intl = require("intl").intl;
  openSendTimeActionSheet(obj);
};
export { editScheduledMessage };
export const cancelScheduledMessage = function cancelScheduledMessage() {
  return obj(...arguments);
};
export const sendScheduledMessageNow = function sendScheduledMessageNow() {
  return obj(...arguments);
};