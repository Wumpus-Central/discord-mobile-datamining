// discord_app/modules/scheduled_messages/native/ScheduledMessagesUtils.native.tsx
import ClockIcon from "ClockIcon";
import { t } from "../../../../_runtime/03943_t.js";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { showSimpleActionSheet } from "../../action_sheet/native/showSimpleActionSheet.tsx";

const require = arg1;
function _scheduleMessage() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    const iter = (function*(arg0) {
      let c0;
      let c1;
      let c2;
      let c3;
      let c4;
      let c5;
      let c6;
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
          return { value: "HermesInternal", done: null };
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
              const obj1 = { value: null, done: true };
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
              const obj6 = callback(outer1_2[1]);
              obj3[2] = callback(outer1_2[2]).createNonce();
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
              let obj = _undefined2(_undefined3[3]);
              obj = { key: "SCHEDULED_MESSAGE_CREATE_FAILURE", content: null, IconComponent: null, iconColor: "icon-feedback-critical" };
              const intl = _undefined(_undefined3[4]).intl;
              obj = { error: message };
              obj[1] = intl.formatToPlainString(_undefined(_undefined3[4]).t.PsJmUe, obj);
              obj[2] = _undefined(_undefined3[6]).CircleXIcon;
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
              let obj = _undefined2(_undefined3[3]);
              obj = { key: "SCHEDULED_MESSAGE_CREATE_SUCCESS", content: null, IconComponent: null, iconColor: "status-positive" };
              const intl = _undefined(_undefined3[4]).intl;
              obj = { timestamp: null };
              obj[0] = new Date(c1).valueOf();
              obj[1] = intl.formatToPlainString(_undefined(_undefined3[4]).t["CvHu/j"], obj);
              obj[2] = _undefined(_undefined3[5]).ClockIcon;
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
  const _scheduleMessage = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let result = require("snowflakeSequence").fileFinishedImporting("modules/scheduled_messages/native/ScheduledMessagesUtils.native.tsx");

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
  let obj = t();
  let addResult = obj.add(1, "day");
  let result = obj.add(1, "day").startOf("day").set("hours", 9);
  let obj3 = t();
  let startOfResult = obj.add(1, "day").startOf("day");
  const addResult1 = obj3.add(1, "day");
  const result1 = obj3.add(1, "day").startOf("day").set("hours", 13);
  const startOfResult1 = obj3.add(1, "day").startOf("day");
  const obj7 = t();
  const startOfResult2 = t().startOf("isoWeek");
  obj = { label: null, value: null };
  const result2 = t().startOf("isoWeek").add(1, "week").set("hours", 9);
  let intl = _getSystemLocale.intl;
  obj[0] = intl.string(_getSystemLocale.t.tjIn9i);
  obj[1] = result;
  const items = [obj, , ];
  obj = { label: null, value: null };
  const intl2 = _getSystemLocale.intl;
  obj[0] = intl2.string(_getSystemLocale.t.EMRZyS);
  obj[1] = result1;
  items[1] = obj;
  const obj1 = { label: null, value: null };
  const intl3 = _getSystemLocale.intl;
  obj1[0] = intl3.string(_getSystemLocale.t["+P5MmK"]);
  obj1[1] = result2;
  items[2] = obj1;
  const addResult2 = t().startOf("isoWeek").add(1, "week");
  const obj2 = { key: "schedule-message", header: null, hasIcons: false, options: null };
  obj3 = { title: null };
  const intl4 = _getSystemLocale.intl;
  obj3[0] = intl4.string(_getSystemLocale.t["3+ii4F"]);
  obj2[1] = obj3;
  const items1 = [
    ...items.map((label) => {
      const value = label.value;
      return {
        label: label.label,
        onPress() {
          let obj = outer2_1(outer2_2[12]);
          obj = { scheduledTimestamp: value.toISOString() };
          const result = obj.changeScheduledMessage(value, obj);
        }
      };
    })
  ];
  const obj4 = { label: null, onPress: null };
  const intl5 = _getSystemLocale.intl;
  obj4[0] = intl5.string(_getSystemLocale.t.stHooC);
  obj4[1] = function onPress() {
    let obj = outer1_1(outer1_2[9]);
    obj = { title: null, mode: "datetime", startDate: null, minimumDate: null, maximumDate: null, onSubmit: null };
    const intl = id(outer1_2[4]).intl;
    obj[0] = intl.string(id(outer1_2[4]).t["3+ii4F"]);
    const tmp = id(outer1_2[11])(outer1_2[10], outer1_2.paths);
    const obj3 = outer1_1(outer1_2[7])();
    const startOfResult = outer1_1(outer1_2[7])().startOf("hour");
    obj[2] = outer1_1(outer1_2[7])().startOf("hour").add(1, "hour").toDate();
    const addResult = outer1_1(outer1_2[7])().startOf("hour").add(1, "hour");
    obj[3] = new Date();
    const date = new Date();
    const obj6 = outer1_1(outer1_2[7])();
    obj[4] = outer1_1(outer1_2[7])().add(365, "days").toDate();
    obj[5] = function onSubmit(toISOString) {
      let obj = outer1_1(outer1_2[12]);
      obj = { scheduledTimestamp: toISOString.toISOString() };
      const result = obj.changeScheduledMessage(closure_0, obj);
    };
    obj.openLazy(tmp, "DatePicker", obj);
  };
  items1[tmp4] = obj4;
  obj2[3] = items1;
  const result3 = _showSimpleActionSheet.showSimpleActionSheet(obj2);
};