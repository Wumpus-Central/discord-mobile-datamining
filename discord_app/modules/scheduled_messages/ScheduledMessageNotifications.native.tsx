// === Module 7263: ScheduledMessageNotifications ===

// Module 7263 (ScheduledMessageNotifications)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4525 */;
import ClockIcon from "ClockIcon" /* 4791 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5196 */;
import CircleXIcon from "CircleXIcon" /* 6029 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6598 */;
import ScheduledMessageUtils from "ScheduledMessageUtils" /* 7260 */;
import openScheduledMessagesLimitUpsellDefault from "openScheduledMessagesLimitUpsell" /* 7264 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const AbortCodes = Constants.AbortCodes;
const result = size.fileFinishedImporting("modules/scheduled_messages/ScheduledMessageNotifications.native.tsx");

export const showScheduleMessageSuccessToast = function showScheduleMessageSuccessToast(arg0) {
  const obj2 = { key: "SCHEDULED_MESSAGE_CREATE_SUCCESS", content: null, IconComponent: null, iconColor: "status-positive" };
  const intl = util.intl;
  const obj3 = { timestamp: null };
  const obj = ToastActionCreatorsDefault;
  obj3.timestamp = new Date(arg0).valueOf();
  obj2.content = intl.formatToPlainString(util.t["CvHu/j"], obj3);
  obj2.IconComponent = ClockIcon.ClockIcon;
  obj.open(obj2);
};
export const showScheduleMessageFailureToast = function showScheduleMessageFailureToast(error) {
  const obj2 = { key: "SCHEDULED_MESSAGE_CREATE_FAILURE", content: null, IconComponent: null, iconColor: "icon-feedback-critical" };
  const intl = util.intl;
  obj2.content = intl.formatToPlainString(util.t.PsJmUe, { error });
  obj2.IconComponent = CircleXIcon.CircleXIcon;
  ToastActionCreatorsDefault.open(obj2);
};
export const handleScheduleMessageError = function handleScheduleMessageError(body) {
  body = body.body;
  let code;
  if (body != null) {
    code = body.code;
  }
  if (code === AbortCodes.TOO_MANY_SCHEDULED_MESSAGES) {
    const scheduledMessagesLimit = ScheduledMessageUtils.getScheduledMessagesLimit("ScheduledMessagesCreateRoadblock");
    if (scheduledMessagesLimit.isUpgradable) {
      const items = [AnalyticsLocationDefault.SCHEDULED_MESSAGES_ROADBLOCK];
      openScheduledMessagesLimitUpsellDefault(items);
      const tmp11Result = openScheduledMessagesLimitUpsellDefault;
    } else {
      const obj2 = { title: null, body: null, confirmText: null, cancelText: null, onCancel: null, isDismissable: false };
      const intl2 = util.intl;
      obj2.title = intl2.string(util.t.RLdUVh);
      const intl3 = util.intl;
      const obj3 = { max: tmp10 };
      obj2.body = intl3.formatToPlainString(util.t["3AMt7r"], obj3);
      const intl4 = util.intl;
      obj2.confirmText = intl4.string(util.t.BddRzS);
      const intl5 = util.intl;
      obj2.cancelText = intl5.string(util.t.lv6bDa);
      obj2.onCancel = function onCancel() {
        return require("ModalActionCreators").pushLazy(require("asyncRequireImpl")(paths[10], paths.paths), {}, "scheduled-messages-modal", { presentation: "modal" });
      };
      AlertActionCreatorsDefault.show(obj2);
      const tmp11Result2 = AlertActionCreatorsDefault;
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
    const obj5 = { key: "SCHEDULED_MESSAGE_CREATE_FAILURE", content: null, IconComponent: null, iconColor: "icon-feedback-critical" };
    const intl = util.intl;
    const obj6 = { error: message };
    obj5.content = intl.formatToPlainString(util.t.PsJmUe, obj6);
    obj5.IconComponent = CircleXIcon.CircleXIcon;
    ToastActionCreatorsDefault.open(obj5);
  }
};
export const showScheduledMessageEditSuccessToast = function showScheduledMessageEditSuccessToast() {
  const obj2 = { key: "SCHEDULED_MESSAGE_UPDATE_SUCCESS", content: null, IconComponent: null, iconColor: "status-positive" };
  const intl = util.intl;
  obj2.content = intl.string(util.t.MXsMRk);
  obj2.IconComponent = ClockIcon.ClockIcon;
  ToastActionCreatorsDefault.open(obj2);
};
export const showScheduledMessageEditFailureToast = function showScheduledMessageEditFailureToast(message) {
  const obj2 = { key: "SCHEDULED_MESSAGE_UPDATE_FAILURE", content: null, IconComponent: null, iconColor: "icon-feedback-critical" };
  const intl = util.intl;
  obj2.content = intl.formatToPlainString(util.t.slM6In, { error: message });
  obj2.IconComponent = CircleXIcon.CircleXIcon;
  ToastActionCreatorsDefault.open(obj2);
};
export const showScheduleMessageDeleteSuccessToast = function showScheduleMessageDeleteSuccessToast() {
  const obj2 = { key: "SCHEDULED_MESSAGE_DELETE_SUCCESS", content: null, IconComponent: null, iconColor: "status-positive" };
  const intl = util.intl;
  obj2.content = intl.string(util.t["JF/LWn"]);
  obj2.IconComponent = ClockIcon.ClockIcon;
  ToastActionCreatorsDefault.open(obj2);
};
export const showScheduleMessageDeleteFailureToast = function showScheduleMessageDeleteFailureToast(message) {
  const obj2 = { key: "SCHEDULED_MESSAGE_DELETE_FAILURE", content: null, IconComponent: null, iconColor: "icon-feedback-critical" };
  const intl = util.intl;
  obj2.content = intl.formatToPlainString(util.t.sUvyW3, { error: message });
  obj2.IconComponent = CircleXIcon.CircleXIcon;
  ToastActionCreatorsDefault.open(obj2);
};
export const showScheduleMessageSentNowSuccessToast = function showScheduleMessageSentNowSuccessToast() {
  const obj2 = { key: "SCHEDULED_MESSAGE_SEND_NOW_SUCCESS", content: null, IconComponent: null, iconColor: "status-positive" };
  const intl = util.intl;
  obj2.content = intl.string(util.t["BHCm/d"]);
  obj2.IconComponent = ClockIcon.ClockIcon;
  ToastActionCreatorsDefault.open(obj2);
};
export const showScheduleMessageSentNowFailureToast = function showScheduleMessageSentNowFailureToast(message) {
  const obj2 = { key: "SCHEDULED_MESSAGE_SEND_NOW_FAILURE", content: null, IconComponent: null, iconColor: "icon-feedback-critical" };
  const intl = util.intl;
  obj2.content = intl.formatToPlainString(util.t["uy++C+"], { error: message });
  obj2.IconComponent = CircleXIcon.CircleXIcon;
  ToastActionCreatorsDefault.open(obj2);
};