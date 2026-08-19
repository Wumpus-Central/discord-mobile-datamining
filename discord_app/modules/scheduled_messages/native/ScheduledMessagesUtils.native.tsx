// discord_app/modules/scheduled_messages/native/ScheduledMessagesUtils.native.tsx
import tDefault from "../../../../_runtime/03975_t.js";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import dispatcherDefault from "../../../actions/DraftActionCreators.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import MIN_SCHEDULE_TIME_INTO_FUTURE_SECONDS from "../../../../discord_common/js/shared/shared-constants/ScheduledMessagesConstants.tsx";

const require = fn;
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
              _undefined2(_undefined3[4]);
              const intl = _undefined(_undefined3[5]).intl;
              const obj = { error: message };
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
              _undefined2(_undefined3[4]);
              const intl = _undefined(_undefined3[5]).intl;
              const obj = { timestamp: new Date(c1).valueOf() };
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
({ MAX_SCHEDULE_TIME_INTO_FUTURE_SECONDS: c4, MIN_SCHEDULE_TIME_INTO_FUTURE_SECONDS: c5 } = MIN_SCHEDULE_TIME_INTO_FUTURE_SECONDS);
let result = require("obj132").fileFinishedImporting("modules/scheduled_messages/native/ScheduledMessagesUtils.native.tsx");

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
  let obj = tDefault();
  let addResult = obj.add(1, "day");
  let result = obj.add(1, "day").startOf("day").set("hours", 9);
  let obj3 = tDefault();
  const startOfResult = obj.add(1, "day").startOf("day");
  const addResult1 = obj3.add(1, "day");
  const result1 = obj3.add(1, "day").startOf("day").set("hours", 13);
  const startOfResult1 = obj3.add(1, "day").startOf("day");
  let obj7 = tDefault();
  const startOfResult2 = tDefault().startOf("isoWeek");
  obj = { label: null, value: null };
  const result2 = tDefault().startOf("isoWeek").add(1, "week").set("hours", 9);
  let intl = require("../../../intl/index.native.tsx").intl;
  obj[0] = intl.string(require("../../../intl/index.native.tsx").t.tjIn9i);
  obj[1] = result;
  const items = [obj, , ];
  obj = { label: null, value: null };
  const intl2 = require("../../../intl/index.native.tsx").intl;
  obj[0] = intl2.string(require("../../../intl/index.native.tsx").t.EMRZyS);
  obj[1] = result1;
  items[1] = obj;
  obj1 = { label: null, value: null };
  const intl3 = require("../../../intl/index.native.tsx").intl;
  obj1[0] = intl3.string(require("../../../intl/index.native.tsx").t["+P5MmK"]);
  obj1[1] = result2;
  items[2] = obj1;
  const addResult2 = tDefault().startOf("isoWeek").add(1, "week");
  const obj2 = { key: "schedule-message", header: null, hasIcons: false, options: null };
  obj3 = { title: null };
  const intl4 = require("../../../intl/index.native.tsx").intl;
  obj3[0] = intl4.string(require("../../../intl/index.native.tsx").t["3+ii4F"]);
  obj2[1] = obj3;
  const items1 = [
    ...items.map((item, index) => {
      const value = item.value;
      return {
        label: item.label,
        onPress() {
          const obj = { scheduledTimestamp: value.toISOString() };
          const result = obj.changeScheduledMessage(value, obj);
        }
      };
    })
  ];
  const obj4 = { label: null, onPress: null };
  const intl5 = require("../../../intl/index.native.tsx").intl;
  obj4[0] = intl5.string(require("../../../intl/index.native.tsx").t.stHooC);
  obj4[1] = function onPress() {
    let obj = { title: null, mode: "datetime", startDate: null, minimumDate: null, maximumDate: null, onSubmit: null };
    const intl = id(dependencyMap[5]).intl;
    obj[0] = intl.string(id(dependencyMap[5]).t["3+ii4F"]);
    const tmp = id(dependencyMap[12])(dependencyMap[11], dependencyMap.paths);
    const defaultScheduledTime = id(dependencyMap[13]).getDefaultScheduledTime();
    obj[2] = defaultScheduledTime.toDate();
    const obj3 = id(dependencyMap[13]);
    const obj5 = tDefault();
    obj[3] = tDefault().add(closure_1_5, "seconds").toDate();
    const addResult = tDefault().add(closure_1_5, "seconds");
    const obj7 = tDefault();
    obj[4] = tDefault().add(closure_1_4, "seconds").toDate();
    obj[5] = function onSubmit(toISOString) {
      closure_1_1(closure_1_2[14]);
      const obj = { scheduledTimestamp: toISOString.toISOString() };
      const result = obj.changeScheduledMessage(closure_0, obj);
    };
    obj.openLazy(tmp, "DatePicker", obj);
  };
  items1[tmp4] = obj4;
  obj2[3] = items1;
  const result3 = require("../../action_sheet/native/showSimpleActionSheet.tsx").showSimpleActionSheet(obj2);
};