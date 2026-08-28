// discord_app/modules/scheduled_messages/ScheduledMessageNotifications.native.tsx
import set from "../../../_runtime/00002_set.js";
import ME from "../../Constants.tsx";
import getSystemLocale from "../../intl/index.native.tsx";
import dispatcherDefault from "../toast/native/ToastActionCreators.tsx";
import ClockIcon from "../../design/components/Icon/native/redesign/generated/ClockIcon.tsx";
import CircleXIcon from "../../design/components/Icon/native/redesign/generated/CircleXIcon.tsx";
import ScheduledMessagesConfig from "ScheduledMessageUtils.tsx";

const AbortCodes = ME.AbortCodes;
const result = set.fileFinishedImporting("modules/scheduled_messages/ScheduledMessageNotifications.native.tsx");

export const showScheduleMessageSuccessToast = function showScheduleMessageSuccessToast(closure_1_10) {
  let obj = dispatcherDefault;
  obj = { key: "SCHEDULED_MESSAGE_CREATE_SUCCESS", content: null, IconComponent: null, iconColor: "status-positive" };
  const intl = getSystemLocale.intl;
  obj = { timestamp: new Date(closure_1_10).valueOf() };
  obj[1] = intl.formatToPlainString(getSystemLocale.t["CvHu/j"], obj);
  obj[2] = ClockIcon.ClockIcon;
  obj.open(obj);
};
export const showScheduleMessageFailureToast = function showScheduleMessageFailureToast(error) {
  let obj = dispatcherDefault;
  obj = { key: "SCHEDULED_MESSAGE_CREATE_FAILURE", content: null, IconComponent: null, iconColor: "icon-feedback-critical" };
  const intl = getSystemLocale.intl;
  obj = { error };
  obj[1] = intl.formatToPlainString(getSystemLocale.t.PsJmUe, obj);
  obj[2] = CircleXIcon.CircleXIcon;
  obj.open(obj);
};
export const handleScheduleMessageError = function handleScheduleMessageError(closure_26) {
  const body = closure_26.body;
  let code;
  if (body != null) {
    code = body.code;
  }
  if (code === AbortCodes.TOO_MANY_SCHEDULED_MESSAGES) {
    const scheduledMessagesLimit = ScheduledMessagesConfig.getScheduledMessagesLimit("ScheduledMessagesCreateRoadblock");
    if (scheduledMessagesLimit.isUpgradable) {
      let tmp11Result = tmp11(7540);
      const items = [tmp11(5938).SCHEDULED_MESSAGES_ROADBLOCK];
      tmp11Result(items);
    } else {
      tmp11Result = tmp11(4822);
      let obj = { title: null, body: null, confirmText: null, cancelText: null, onCancel: null };
      const intl2 = tmp7(1236).intl;
      obj[0] = intl2.string(tmp7(1236).t.RLdUVh);
      const intl3 = tmp7(1236).intl;
      obj = { max: null };
      obj[0] = tmp10;
      obj[1] = intl3.formatToPlainString(tmp7(1236).t["3AMt7r"], obj);
      const intl4 = tmp7(1236).intl;
      obj[2] = intl4.string(tmp7(1236).t.BddRzS);
      const intl5 = tmp7(1236).intl;
      obj[3] = intl5.string(tmp7(1236).t.lv6bDa);
      obj[4] = function onCancel() {
        return callback2(paths[9]).pushLazy(callback(paths[11])(paths[10], paths.paths), {}, "scheduled-messages-modal", { presentation: "modal" });
      };
      tmp11Result.show(obj);
    }
    const obj4 = ScheduledMessagesConfig;
  } else {
    const body2 = closure_26.body;
    let message;
    if (body2 != null) {
      message = body2.message;
    }
    if (message == null) {
      message = closure_26.message;
    }
    obj = dispatcherDefault;
    obj1 = { key: "SCHEDULED_MESSAGE_CREATE_FAILURE", content: null, IconComponent: null, iconColor: "icon-feedback-critical" };
    const intl = getSystemLocale.intl;
    const obj2 = { error: null };
    obj2[0] = message;
    obj1[1] = intl.formatToPlainString(getSystemLocale.t.PsJmUe, obj2);
    obj1[2] = CircleXIcon.CircleXIcon;
    obj.open(obj1);
  }
};
export const showScheduledMessageEditSuccessToast = function showScheduledMessageEditSuccessToast() {
  let obj = dispatcherDefault;
  obj = { key: "SCHEDULED_MESSAGE_UPDATE_SUCCESS", content: null, IconComponent: null, iconColor: "status-positive" };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t.MXsMRk);
  obj[2] = ClockIcon.ClockIcon;
  obj.open(obj);
};
export const showScheduledMessageEditFailureToast = function showScheduledMessageEditFailureToast(message) {
  let obj = dispatcherDefault;
  obj = { key: "SCHEDULED_MESSAGE_UPDATE_FAILURE", content: null, IconComponent: null, iconColor: "icon-feedback-critical" };
  const intl = getSystemLocale.intl;
  obj = { error: message };
  obj[1] = intl.formatToPlainString(getSystemLocale.t.slM6In, obj);
  obj[2] = CircleXIcon.CircleXIcon;
  obj.open(obj);
};
export const showScheduleMessageDeleteSuccessToast = function showScheduleMessageDeleteSuccessToast() {
  let obj = dispatcherDefault;
  obj = { key: "SCHEDULED_MESSAGE_DELETE_SUCCESS", content: null, IconComponent: null, iconColor: "status-positive" };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t["JF/LWn"]);
  obj[2] = ClockIcon.ClockIcon;
  obj.open(obj);
};
export const showScheduleMessageDeleteFailureToast = function showScheduleMessageDeleteFailureToast(message) {
  let obj = dispatcherDefault;
  obj = { key: "SCHEDULED_MESSAGE_DELETE_FAILURE", content: null, IconComponent: null, iconColor: "icon-feedback-critical" };
  const intl = getSystemLocale.intl;
  obj = { error: message };
  obj[1] = intl.formatToPlainString(getSystemLocale.t.sUvyW3, obj);
  obj[2] = CircleXIcon.CircleXIcon;
  obj.open(obj);
};
export const showScheduleMessageSentNowSuccessToast = function showScheduleMessageSentNowSuccessToast() {
  let obj = dispatcherDefault;
  obj = { key: "SCHEDULED_MESSAGE_SEND_NOW_SUCCESS", content: null, IconComponent: null, iconColor: "status-positive" };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t["BHCm/d"]);
  obj[2] = ClockIcon.ClockIcon;
  obj.open(obj);
};
export const showScheduleMessageSentNowFailureToast = function showScheduleMessageSentNowFailureToast(message) {
  let obj = dispatcherDefault;
  obj = { key: "SCHEDULED_MESSAGE_SEND_NOW_FAILURE", content: null, IconComponent: null, iconColor: "icon-feedback-critical" };
  const intl = getSystemLocale.intl;
  obj = { error: message };
  obj[1] = intl.formatToPlainString(getSystemLocale.t["uy++C+"], obj);
  obj[2] = CircleXIcon.CircleXIcon;
  obj.open(obj);
};