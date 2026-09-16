// === Module 12353: ScheduledMessagesUtils ===

// Module 12353 (ScheduledMessagesUtils)
import util from "util" /* 1115 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import _modDef4229 from "module_4229" /* 4229 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4605 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4841 */;
import DraftActionCreatorsDefault from "DraftActionCreators" /* 7891 */;
import ScheduledMessageUtils from "ScheduledMessageUtils" /* 7959 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = globalThis.__r;

require = fn;
function editScheduledMessage() {
  const self = this;
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_5 = async function _editScheduledMessage() {
  closure_1 = arg1;
  c6 = 0;
  c7 = 0;
  c5 = 0;
  return (async (arg0, value) => {
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
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
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_3 = tmp3;
            closure_2 = tmp7;
            c5 = 1;
            const obj6 = { scheduledMessageId };
            const merged = Object.assign(closure_1);
            c6 = 2;
            c7 = 1;
            const obj7 = { value: require("ScheduledMessageActionCreators").updateScheduledMessage(obj6), done: false };
            return obj7;
          }
        } else if (1 === tmp7) {
          c5 = 0;
          closure_130_0 = closure_4;
          const result = closure_131_0(closure_131_2[11]).showScheduledMessageEditFailureToast(closure_130_0.message);
          c7 = 3;
          return { value: false, done: true };
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c7 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          const result1 = closure_131_0(closure_131_2[11]).showScheduledMessageEditSuccessToast();
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
};
let closure_6 = async function _cancelScheduledMessage(arg0) {
  closure_2 = tmp3;
  await require("ScheduledMessageActionCreators").deleteScheduledMessage(closure_0);
  if (1 === tmp7) {
    c4 = 0;
    closure_129_0 = closure_3;
    const result = closure_130_0(closure_130_2[11]).showScheduleMessageDeleteFailureToast(closure_129_0.message);
    c6 = 3;
    closure_130_0(closure_130_2[11]);
  } else if (arg0 === 1) {
    c6 = 3;
    throw value;
  } else if (arg0 !== 2) {
    const result1 = closure_130_0(closure_130_2[11]).showScheduleMessageDeleteSuccessToast();
    c4 = 0;
    closure_130_0(closure_130_2[11]);
  }
  return value;
};
let closure_7 = async function _sendScheduledMessageNow(arg0) {
  closure_2 = tmp3;
  await require("ScheduledMessageActionCreators").sendScheduledMessageNow(closure_0);
  if (1 === tmp7) {
    c4 = 0;
    closure_129_0 = closure_3;
    const result = closure_130_0(closure_130_2[11]).showScheduleMessageSentNowFailureToast(closure_129_0.message);
    c6 = 3;
    closure_130_0(closure_130_2[11]);
  } else if (arg0 === 1) {
    c6 = 3;
    throw value;
  } else if (arg0 !== 2) {
    const result1 = closure_130_0(closure_130_2[11]).showScheduleMessageSentNowSuccessToast();
    c4 = 0;
    closure_130_0(closure_130_2[11]);
  }
  return value;
};
function openSendTimeActionSheet(title) {
  title = title.title;
  ({ startDate: importDefault, scheduledMessageId: dependencyMap, onSelect: asyncGeneratorStep, onClear } = title);
  ({ key, entryPoint, isEditing, channelId } = title);
  const result = title(7959).trackScheduledMessageTimePickerOpened({ entryPoint, isEditing, channelId });
  let obj = title(7959);
  let obj3 = { key, header: { title }, hasIcons: false, options: null };
  let obj2 = title(7304);
  const presetScheduledTimes = title(7959).getPresetScheduledTimes();
  const items = [
    ...presetScheduledTimes.map((label) => {
      title = label.value;
      return {
        label: label.label,
        onPress() {
          return asyncGeneratorStep(value);
        }
      };
    })
  ];
  const obj5 = { label: null, onPress: null };
  const intl = title(1115).intl;
  obj5.label = intl.string(title(1115).t.stHooC);
  obj5.onPress = function onPress() {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    const obj2 = ModalActionCreatorsDefault;
    const obj3 = { title, defaultValue, minimumDate: null, maximumDate: null, getError: null, createReminder: null, onClose: null };
    const tmp2 = asyncRequireImpl(11855, dependencyMap.paths);
    obj3.minimumDate = ScheduledMessageUtils.getEarliestScheduledTime();
    obj3.maximumDate = ScheduledMessageUtils.getLatestScheduledTime(closure_1_2);
    obj3.getError = function getError(isBefore) {
      return title(7959).getScheduledTimeError(isBefore, dependencyMap);
    };
    obj3.createReminder = function createReminder(arg0) {
      return closure_1_3(defaultValue(4229)(arg0));
    };
    obj3.onClose = ModalActionCreatorsDefault.pop;
    obj2.pushLazy(tmp2, obj3, "scheduled-message-custom-time", { presentation: "modal" });
  };
  items[tmp4] = obj5;
  if (null != onClear) {
    const obj6 = { label: null, onPress: null };
    const intl2 = tmp(1115).intl;
    obj6.label = intl2.string(tmp(1115).t.VkKicb);
    obj6.onPress = onClear;
    const items1 = [obj6];
    let items2 = items1;
  } else {
    items2 = [];
  }
  HermesBuiltin.arraySpread(items2, tmp4 + 1);
  obj3.options = items;
  const result1 = obj2.showSimpleActionSheet(obj3);
  let obj4 = title(7959);
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/scheduled_messages/native/ScheduledMessagesUtils.native.tsx");

export const openScheduleMessageActionSheet = function openScheduleMessageActionSheet(id, ATTACH_MENU, scheduledTimestamp) {
  _require = id;
  const obj = {
    onSelect(scheduledTimestamp) {
      return DraftActionCreatorsDefault.changeScheduledMessage(closure_0, { scheduledTimestamp });
    },
    currentTimestamp: scheduledTimestamp,
    entryPoint: ATTACH_MENU,
    channelId: id
  };
  ({ onSelect: closure_0, currentTimestamp } = obj);
  const obj2 = { key: "schedule-message", title: null, startDate: null, onSelect: null, onClear: null, entryPoint: null, isEditing: null, channelId: null };
  ({ onClear, entryPoint, channelId } = obj);
  const intl = require("util").intl;
  obj2.title = intl.string(require("util").t["3+ii4F"]);
  if (null != currentTimestamp) {
    let defaultScheduledTime = _modDef4229(currentTimestamp);
  } else {
    defaultScheduledTime = tmp2(7959).getDefaultScheduledTime();
    const tmp2Result = tmp2(7959);
  }
  obj2.startDate = defaultScheduledTime;
  obj2.onSelect = function onSelect(toISOString) {
    return id(toISOString.toISOString());
  };
  obj2.onClear = onClear;
  obj2.entryPoint = entryPoint;
  obj2.isEditing = null != currentTimestamp;
  obj2.channelId = channelId;
  openSendTimeActionSheet(obj2);
  tmp2 = _require;
};
export const pickScheduledMessageTime = function pickScheduledMessageTime(arg0) {
  ({ onSelect: require, currentTimestamp } = arg0);
  const obj = { key: "schedule-message", title: null, startDate: null, onSelect: null, onClear: null, entryPoint: null, isEditing: null, channelId: null };
  ({ onClear, entryPoint, channelId } = arg0);
  const intl = util.intl;
  obj.title = intl.string(util.t["3+ii4F"]);
  if (null != currentTimestamp) {
    let defaultScheduledTime = _modDef4229(currentTimestamp);
  } else {
    defaultScheduledTime = ScheduledMessageUtils.getDefaultScheduledTime();
    const tmp2Result = ScheduledMessageUtils;
  }
  obj.startDate = defaultScheduledTime;
  obj.onSelect = function onSelect(toISOString) {
    return id(toISOString.toISOString());
  };
  obj.onClear = onClear;
  obj.entryPoint = entryPoint;
  obj.isEditing = null != currentTimestamp;
  obj.channelId = channelId;
  openSendTimeActionSheet(obj);
};
export const showScheduledMessagesModal = function showScheduledMessagesModal() {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(12354, dependencyMap.paths), {}, "scheduled-messages-modal", { presentation: "modal" });
};
export const openScheduledMessageEditContentModal = function openScheduledMessageEditContentModal(scheduledMessage) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(12364, dependencyMap.paths), { scheduledMessage }, "scheduled-message-edit-content", { presentation: "modal" });
};
export const openRescheduleMessageActionSheet = function openRescheduleMessageActionSheet(scheduledMessageId, sendAtTimestamp, channelId) {
  _require = scheduledMessageId;
  const obj = { key: "reschedule-message", title: null, startDate: null, scheduledMessageId: null, onSelect: null, entryPoint: null, isEditing: true, channelId: null };
  const intl = require("util").intl;
  obj.title = intl.string(require("util").t.jbdHj3);
  obj.startDate = _modDef4229(sendAtTimestamp);
  obj.scheduledMessageId = scheduledMessageId;
  obj.onSelect = function onSelect(toISOString) {
    return editScheduledMessage(closure_0, { scheduledTimestamp: toISOString.toISOString() });
  };
  obj.entryPoint = require("ScheduledMessageTypes").ScheduledMessageEntryPoint.INBOX;
  obj.channelId = channelId;
  openSendTimeActionSheet(obj);
};
export { editScheduledMessage };
export const cancelScheduledMessage = function cancelScheduledMessage() {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const sendScheduledMessageNow = function sendScheduledMessageNow() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};