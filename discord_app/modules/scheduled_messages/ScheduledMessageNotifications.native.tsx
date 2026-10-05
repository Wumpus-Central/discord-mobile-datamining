// === Module 7478: ScheduledMessageNotifications ===

// Module 7478 (ScheduledMessageNotifications)
import Constants from "Constants" /* 1085 */;
import intl6 from "intl" /* 1126 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4568 */;
import CircleXIcon from "CircleXIcon" /* 4797 */;
import ClockIcon from "ClockIcon" /* 4849 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5707 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6681 */;
import ScheduledMessageUtils from "ScheduledMessageUtils" /* 7475 */;
import openScheduledMessagesLimitUpsellDefault from "openScheduledMessagesLimitUpsell" /* 7479 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const AbortCodes = Constants.AbortCodes;
const result = size.fileFinishedImporting("modules/scheduled_messages/ScheduledMessageNotifications.native.tsx");

export const showScheduleMessageSuccessToast = function showScheduleMessageSuccessToast(scheduledTimestamp) {
  let date;
  let formatToPlainString;
  let obj2;
  let prop;
  const obj = { key: "SCHEDULED_MESSAGE_CREATE_SUCCESS", content: formatToPlainString(prop, obj2), IconComponent: ClockIcon.ClockIcon, iconColor: "status-positive" };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  const intl = intl6.intl;
  formatToPlainString = intl.formatToPlainString;
  obj2 = { timestamp: date.valueOf() };
  prop = intl6.t["CvHu/j"];
  date = new Date(scheduledTimestamp);
  open(obj);
};
export const showScheduleMessageFailureToast = function showScheduleMessageFailureToast(error) {
  let intl;
  let obj2;
  const obj = { key: "SCHEDULED_MESSAGE_CREATE_FAILURE", content: intl.formatToPlainString(intl6.t.PsJmUe, obj2), IconComponent: CircleXIcon.CircleXIcon, iconColor: "icon-feedback-critical" };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl6.intl;
  obj2 = { error };
  open(obj);
};
export const handleScheduleMessageError = function handleScheduleMessageError(body) {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let obj4;
  let obj5;
  let paths;
  body = body.body;
  let code;
  if (body != null) {
    code = body.code;
  }
  if (code === AbortCodes.TOO_MANY_SCHEDULED_MESSAGES) {
    const obj3 = ScheduledMessageUtils;
    const scheduledMessagesLimit = obj3.getScheduledMessagesLimit("ScheduledMessagesCreateRoadblock");
    if (scheduledMessagesLimit.isUpgradable) {
      const items = [];
      const tmp12Result = openScheduledMessagesLimitUpsellDefault;
      items[0] = AnalyticsLocationDefault.SCHEDULED_MESSAGES_ROADBLOCK;
      tmp12Result(items);
    } else {
      const obj2 = {
        title: intl2.string(intl6.t.RLdUVh),
        body: intl3.formatToPlainString(intl6.t["3AMt7r"], obj4),
        confirmText: intl4.string(intl6.t.BddRzS),
        cancelText: intl5.string(intl6.t.lv6bDa),
        onCancel() {
              const obj = require("ModalActionCreators");
              return obj.pushLazy(require("asyncRequire")(paths[10], paths.paths), {}, "scheduled-messages-modal", { presentation: "modal" });
            },
        isDismissable: false
      };
      const show = AlertActionCreatorsDefault.show;
      AlertActionCreatorsDefault;
      intl2 = intl6.intl;
      intl3 = intl6.intl;
      obj4 = { max: tmp11 };
      intl4 = intl6.intl;
      intl5 = intl6.intl;
      show(obj2);
    }
  } else {
    const body2 = body.body;
    let message;
    if (body2 != null) {
      message = body2.message;
    }
    if (message == null) {
      message = body.message;
    }
    let obj = { key: "SCHEDULED_MESSAGE_CREATE_FAILURE", content: intl.formatToPlainString(intl6.t.PsJmUe, obj5), IconComponent: CircleXIcon.CircleXIcon, iconColor: "icon-feedback-critical" };
    const open = ToastActionCreatorsDefault.open;
    ToastActionCreatorsDefault;
    intl = intl6.intl;
    obj5 = { error: message };
    open(obj);
  }
};
export const showScheduledMessageEditSuccessToast = function showScheduledMessageEditSuccessToast() {
  let intl;
  const obj = { key: "SCHEDULED_MESSAGE_UPDATE_SUCCESS", content: intl.string(intl6.t.MXsMRk), IconComponent: ClockIcon.ClockIcon, iconColor: "status-positive" };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl6.intl;
  open(obj);
};
export const showScheduledMessageEditFailureToast = function showScheduledMessageEditFailureToast(message) {
  let intl;
  let obj2;
  const obj = { key: "SCHEDULED_MESSAGE_UPDATE_FAILURE", content: intl.formatToPlainString(intl6.t.slM6In, obj2), IconComponent: CircleXIcon.CircleXIcon, iconColor: "icon-feedback-critical" };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl6.intl;
  obj2 = { error: message };
  open(obj);
};
export const showScheduleMessageDeleteSuccessToast = function showScheduleMessageDeleteSuccessToast() {
  let intl;
  const obj = { key: "SCHEDULED_MESSAGE_DELETE_SUCCESS", content: intl.string(intl6.t["JF/LWn"]), IconComponent: ClockIcon.ClockIcon, iconColor: "status-positive" };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl6.intl;
  open(obj);
};
export const showScheduleMessageDeleteFailureToast = function showScheduleMessageDeleteFailureToast(message) {
  let intl;
  let obj2;
  const obj = { key: "SCHEDULED_MESSAGE_DELETE_FAILURE", content: intl.formatToPlainString(intl6.t.sUvyW3, obj2), IconComponent: CircleXIcon.CircleXIcon, iconColor: "icon-feedback-critical" };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl6.intl;
  obj2 = { error: message };
  open(obj);
};
export const showScheduleMessageSentNowSuccessToast = function showScheduleMessageSentNowSuccessToast() {
  let intl;
  const obj = { key: "SCHEDULED_MESSAGE_SEND_NOW_SUCCESS", content: intl.string(intl6.t["BHCm/d"]), IconComponent: ClockIcon.ClockIcon, iconColor: "status-positive" };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl6.intl;
  open(obj);
};
export const showScheduleMessageSentNowFailureToast = function showScheduleMessageSentNowFailureToast(message) {
  let intl;
  let obj2;
  const obj = { key: "SCHEDULED_MESSAGE_SEND_NOW_FAILURE", content: intl.formatToPlainString(intl6.t["uy++C+"], obj2), IconComponent: CircleXIcon.CircleXIcon, iconColor: "icon-feedback-critical" };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl6.intl;
  obj2 = { error: message };
  open(obj);
};