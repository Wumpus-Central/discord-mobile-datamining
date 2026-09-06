// discord_app/modules/scheduled_messages/ScheduledMessageNotifications.native.tsx
import Constants from "../../Constants.tsx";
import util from "../../intl/index.native.tsx";
import ToastActionCreatorsDefault from "../toast/native/ToastActionCreators.tsx";
import ClockIcon from "../../design/components/Icon/native/redesign/generated/ClockIcon.tsx";
import CircleXIcon from "../../design/components/Icon/native/redesign/generated/CircleXIcon.tsx";
import ScheduledMessageUtils from "ScheduledMessageUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

const AbortCodes = Constants.AbortCodes;
const result = size.fileFinishedImporting("modules/scheduled_messages/ScheduledMessageNotifications.native.tsx");

export const showScheduleMessageSuccessToast = function showScheduleMessageSuccessToast(arg0) {
  let obj = {
    key: "SCHEDULED_MESSAGE_CREATE_SUCCESS",
    content: null,
    IconComponent: null,
    iconColor: "status-positive",
  };
  const intl = util.intl;
  obj = { timestamp: new Date(arg0).valueOf() };
  obj.content = intl.formatToPlainString(util.t["CvHu/j"], obj);
  obj.IconComponent = ClockIcon.ClockIcon;
  obj.open(obj);
};
export const showScheduleMessageFailureToast = function showScheduleMessageFailureToast(error) {
  let obj = {
    key: "SCHEDULED_MESSAGE_CREATE_FAILURE",
    content: null,
    IconComponent: null,
    iconColor: "icon-feedback-critical",
  };
  const intl = util.intl;
  obj = { error };
  obj.content = intl.formatToPlainString(util.t.PsJmUe, obj);
  obj.IconComponent = CircleXIcon.CircleXIcon;
  obj.open(obj);
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
      let tmp11Result = tmp11(7849);
      const items = [tmp11(7182).SCHEDULED_MESSAGES_ROADBLOCK];
      tmp11Result(items);
    } else {
      tmp11Result = tmp11(4904);
      let obj = { title: null, body: null, confirmText: null, cancelText: null, onCancel: null };
      const intl2 = tmp7(1114).intl;
      obj.title = intl2.string(tmp7(1114).t.RLdUVh);
      const intl3 = tmp7(1114).intl;
      obj = { max: tmp10 };
      obj.body = intl3.formatToPlainString(tmp7(1114).t["3AMt7r"], obj);
      const intl4 = tmp7(1114).intl;
      obj.confirmText = intl4.string(tmp7(1114).t.BddRzS);
      const intl5 = tmp7(1114).intl;
      obj.cancelText = intl5.string(tmp7(1114).t.lv6bDa);
      obj.onCancel = function onCancel() {
        return require("ModalActionCreators").pushLazy(
          require("asyncRequireImpl")(paths[10], paths.paths),
          {},
          "scheduled-messages-modal",
          { presentation: "modal" },
        );
      };
      tmp11Result.show(obj);
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
    obj = ToastActionCreatorsDefault;
    const obj1 = {
      key: "SCHEDULED_MESSAGE_CREATE_FAILURE",
      content: null,
      IconComponent: null,
      iconColor: "icon-feedback-critical",
    };
    const intl = util.intl;
    const obj2 = { error: message };
    obj1.content = intl.formatToPlainString(util.t.PsJmUe, obj2);
    obj1.IconComponent = CircleXIcon.CircleXIcon;
    obj.open(obj1);
  }
};
export const showScheduledMessageEditSuccessToast = function showScheduledMessageEditSuccessToast() {
  const obj = {
    key: "SCHEDULED_MESSAGE_UPDATE_SUCCESS",
    content: null,
    IconComponent: null,
    iconColor: "status-positive",
  };
  const intl = util.intl;
  obj.content = intl.string(util.t.MXsMRk);
  obj.IconComponent = ClockIcon.ClockIcon;
  obj.open(obj);
};
export const showScheduledMessageEditFailureToast = function showScheduledMessageEditFailureToast(message) {
  let obj = {
    key: "SCHEDULED_MESSAGE_UPDATE_FAILURE",
    content: null,
    IconComponent: null,
    iconColor: "icon-feedback-critical",
  };
  const intl = util.intl;
  obj = { error: message };
  obj.content = intl.formatToPlainString(util.t.slM6In, obj);
  obj.IconComponent = CircleXIcon.CircleXIcon;
  obj.open(obj);
};
export const showScheduleMessageDeleteSuccessToast = function showScheduleMessageDeleteSuccessToast() {
  const obj = {
    key: "SCHEDULED_MESSAGE_DELETE_SUCCESS",
    content: null,
    IconComponent: null,
    iconColor: "status-positive",
  };
  const intl = util.intl;
  obj.content = intl.string(util.t["JF/LWn"]);
  obj.IconComponent = ClockIcon.ClockIcon;
  obj.open(obj);
};
export const showScheduleMessageDeleteFailureToast = function showScheduleMessageDeleteFailureToast(message) {
  let obj = {
    key: "SCHEDULED_MESSAGE_DELETE_FAILURE",
    content: null,
    IconComponent: null,
    iconColor: "icon-feedback-critical",
  };
  const intl = util.intl;
  obj = { error: message };
  obj.content = intl.formatToPlainString(util.t.sUvyW3, obj);
  obj.IconComponent = CircleXIcon.CircleXIcon;
  obj.open(obj);
};
export const showScheduleMessageSentNowSuccessToast = function showScheduleMessageSentNowSuccessToast() {
  const obj = {
    key: "SCHEDULED_MESSAGE_SEND_NOW_SUCCESS",
    content: null,
    IconComponent: null,
    iconColor: "status-positive",
  };
  const intl = util.intl;
  obj.content = intl.string(util.t["BHCm/d"]);
  obj.IconComponent = ClockIcon.ClockIcon;
  obj.open(obj);
};
export const showScheduleMessageSentNowFailureToast = function showScheduleMessageSentNowFailureToast(message) {
  let obj = {
    key: "SCHEDULED_MESSAGE_SEND_NOW_FAILURE",
    content: null,
    IconComponent: null,
    iconColor: "icon-feedback-critical",
  };
  const intl = util.intl;
  obj = { error: message };
  obj.content = intl.formatToPlainString(util.t["uy++C+"], obj);
  obj.IconComponent = CircleXIcon.CircleXIcon;
  obj.open(obj);
};
