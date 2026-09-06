// discord_app/modules/scheduled_messages/native/ScheduledMessagesUtils.native.tsx
import util from "../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
import _modDef4153 from "../../../../_runtime/metro/04153__.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import DraftActionCreatorsDefault from "../../../actions/DraftActionCreators.tsx";
import ScheduledMessageUtils from "../ScheduledMessageUtils.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";

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
let closure_5 = async function _editScheduledMessage(scheduledMessageId, arg1) {
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
        let obj = { value, done: true };
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
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_3 = tmp3;
            closure_2 = tmp7;
            c5 = 1;
            let obj3 = require("ScheduledMessageActionCreators");
            const obj1 = { scheduledMessageId };
            const merged = Object.assign(closure_1);
            c6 = 2;
            c7 = 1;
            let obj2 = { value: obj3.updateScheduledMessage(obj1), done: false };
            return obj2;
          }
        } else if (1 === tmp7) {
          c5 = 0;
          closure_130_0 = closure_4;
          obj2 = closure_131_0(closure_131_2[11]);
          const result = obj2.showScheduledMessageEditFailureToast(closure_130_0.message);
          c7 = 3;
          return { value: false, done: true };
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c7 = 3;
          obj3 = { value, done: true };
          return obj3;
        } else {
          obj = closure_131_0(closure_131_2[11]);
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
};
let closure_6 = async function _cancelScheduledMessage(arg0, arg1) {
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
    throw arg1;
  } else if (arg0 !== 2) {
    const result1 = closure_130_0(closure_130_2[11]).showScheduleMessageDeleteSuccessToast();
    c4 = 0;
    closure_130_0(closure_130_2[11]);
  }
  return arg1;
};
let closure_7 = async function _sendScheduledMessageNow(arg0, arg1) {
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
    throw arg1;
  } else if (arg0 !== 2) {
    const result1 = closure_130_0(closure_130_2[11]).showScheduleMessageSentNowSuccessToast();
    c4 = 0;
    closure_130_0(closure_130_2[11]);
  }
  return arg1;
};
function openSendTimeActionSheet(title) {
  title = title.title;
  ({ startDate: importDefault, scheduledMessageId: dependencyMap, onSelect: asyncGeneratorStep, onClear } = title);
  ({ key, entryPoint, isEditing, channelId } = title);
  let obj = title(7845);
  const result = obj.trackScheduledMessageTimePickerOpened({ entryPoint, isEditing, channelId });
  let obj1 = _modDef4153();
  const addResult = obj1.add(1, "day");
  const result1 = obj1.add(1, "day").startOf("day").set("hours", 9);
  let obj4 = _modDef4153();
  const startOfResult = obj1.add(1, "day").startOf("day");
  const addResult1 = obj4.add(1, "day");
  const result2 = obj4.add(1, "day").startOf("day").set("hours", 13);
  const startOfResult1 = obj4.add(1, "day").startOf("day");
  const obj8 = _modDef4153();
  const startOfResult2 = _modDef4153().startOf("isoWeek");
  obj = { label: null, value: null };
  const result3 = _modDef4153().startOf("isoWeek").add(1, "week").set("hours", 9);
  const intl = title(1114).intl;
  obj.label = intl.string(title(1114).t.tjIn9i);
  obj.value = result1;
  const items = [obj, ,];
  obj = { label: null, value: null };
  const intl2 = title(1114).intl;
  obj.label = intl2.string(title(1114).t.EMRZyS);
  obj.value = result2;
  items[1] = obj;
  obj1 = { label: null, value: null };
  const intl3 = title(1114).intl;
  obj1.label = intl3.string(title(1114).t["+P5MmK"]);
  obj1.value = result3;
  items[2] = obj1;
  const addResult2 = _modDef4153().startOf("isoWeek").add(1, "week");
  let obj2 = { key, header: { title }, hasIcons: false, options: null };
  const items1 = [
    ...items.map((label) => {
      title = label.value;
      return {
        label: label.label,
        onPress() {
          return asyncGeneratorStep(value);
        },
      };
    }),
  ];
  const obj3 = { label: null, onPress: null };
  const intl4 = title(1114).intl;
  obj3.label = intl4.string(title(1114).t.stHooC);
  obj3.onPress = function onPress() {
    let obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    const obj2 = ModalActionCreatorsDefault;
    obj = {
      title,
      defaultValue,
      minimumDate: null,
      maximumDate: null,
      getError: null,
      createReminder: null,
      onClose: null,
    };
    const tmp2 = asyncRequireImpl(11713, dependencyMap.paths);
    obj.minimumDate = ScheduledMessageUtils.getEarliestScheduledTime();
    obj.maximumDate = ScheduledMessageUtils.getLatestScheduledTime(closure_1_2);
    obj.getError = function getError(isBefore) {
      return title(7845).getScheduledTimeError(isBefore, dependencyMap);
    };
    obj.createReminder = function createReminder(arg0) {
      return closure_1_3(defaultValue(4153)(arg0));
    };
    obj.onClose = ModalActionCreatorsDefault.pop;
    obj2.pushLazy(tmp2, obj, "scheduled-message-custom-time", { presentation: "modal" });
  };
  items1[tmp7] = obj3;
  if (null != onClear) {
    obj4 = { label: null, onPress: null };
    const intl5 = tmp(1114).intl;
    obj4.label = intl5.string(tmp(1114).t.VkKicb);
    obj4.onPress = onClear;
    const items2 = [obj4];
    let items3 = items2;
  } else {
    items3 = [];
  }
  HermesBuiltin.arraySpread(items3, tmp7 + 1);
  obj2.options = items1;
  const result4 = title(7195).showSimpleActionSheet(obj2);
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/scheduled_messages/native/ScheduledMessagesUtils.native.tsx");

export const openScheduleMessageActionSheet = function openScheduleMessageActionSheet(
  id,
  ATTACH_MENU,
  scheduledTimestamp,
) {
  _require = id;
  let obj = {
    onSelect(scheduledTimestamp) {
      const obj = { scheduledTimestamp };
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
  const intl = require("util").intl;
  obj.title = intl.string(require("util").t["3+ii4F"]);
  if (null != currentTimestamp) {
    let defaultScheduledTime = _modDef4153(currentTimestamp);
  } else {
    defaultScheduledTime = require("ScheduledMessageUtils").getDefaultScheduledTime();
    const tmp2Result = require("ScheduledMessageUtils");
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
  const intl = util.intl;
  obj.title = intl.string(util.t["3+ii4F"]);
  if (null != currentTimestamp) {
    let defaultScheduledTime = _modDef4153(currentTimestamp);
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
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(12212, dependencyMap.paths), {}, "scheduled-messages-modal", {
    presentation: "modal",
  });
};
export const openScheduledMessageEditContentModal = function openScheduledMessageEditContentModal(scheduledMessage) {
  const obj = { scheduledMessage };
  obj.pushLazy(asyncRequireImpl(12222, dependencyMap.paths), obj, "scheduled-message-edit-content", {
    presentation: "modal",
  });
};
export const openRescheduleMessageActionSheet = function openRescheduleMessageActionSheet(
  scheduledMessageId,
  sendAtTimestamp,
  channelId,
) {
  _require = scheduledMessageId;
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
  const intl = require("util").intl;
  obj.title = intl.string(require("util").t.jbdHj3);
  obj.startDate = _modDef4153(sendAtTimestamp);
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
