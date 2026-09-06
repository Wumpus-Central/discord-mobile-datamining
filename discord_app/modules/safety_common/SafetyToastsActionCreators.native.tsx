// discord_app/modules/safety_common/SafetyToastsActionCreators.native.tsx
import ToastUtils from "../toast/native/ToastUtils.tsx";
import Constants from "Constants.tsx";
import SafetyToastsUtils from "SafetyToastsUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

const SafetyToastType = Constants.SafetyToastType;
const result = size.fileFinishedImporting("modules/safety_common/SafetyToastsActionCreators.native.tsx");

export default {
  showIgnoreSuccessToast(id, channelId) {
    const obj = ToastUtils;
    obj.showSafetySuccess(
      SafetyToastType.IGNORE_SUCCESS,
      SafetyToastsUtils.getSafetyToastTypeContent(SafetyToastType.IGNORE_SUCCESS, id, channelId),
    );
  },
  showUnignoreSuccessToast(id, channelId) {
    const obj = ToastUtils;
    obj.showSafetySuccess(
      SafetyToastType.UNIGNORE_SUCCESS,
      SafetyToastsUtils.getSafetyToastTypeContent(SafetyToastType.UNIGNORE_SUCCESS, id, channelId),
    );
  },
  showBlockSuccessToast(id, channelId) {
    const obj = ToastUtils;
    obj.showSafetySuccess(
      SafetyToastType.BLOCK_SUCCESS,
      SafetyToastsUtils.getSafetyToastTypeContent(SafetyToastType.BLOCK_SUCCESS, id, channelId),
    );
  },
  showUnblockSuccessToast(id, id2) {
    const obj = ToastUtils;
    obj.showSafetySuccess(
      SafetyToastType.UNBLOCK_SUCCESS,
      SafetyToastsUtils.getSafetyToastTypeContent(SafetyToastType.UNBLOCK_SUCCESS, id, id2),
    );
  },
  showMuteSuccessToast(id, channelId) {
    const obj = ToastUtils;
    obj.showSafetySuccess(
      SafetyToastType.MUTE_SUCCESS,
      SafetyToastsUtils.getSafetyToastTypeContent(SafetyToastType.MUTE_SUCCESS, id, channelId),
    );
  },
  showUnmuteSuccessToast(id, channelId) {
    const obj = ToastUtils;
    obj.showSafetySuccess(
      SafetyToastType.UNMUTE_SUCCESS,
      SafetyToastsUtils.getSafetyToastTypeContent(SafetyToastType.UNMUTE_SUCCESS, id, channelId),
    );
  },
  showReportSuccessToast(id, channelId) {
    const obj = ToastUtils;
    obj.showSafetySuccess(
      SafetyToastType.REPORT_SUCCESS,
      SafetyToastsUtils.getSafetyToastTypeContent(SafetyToastType.REPORT_SUCCESS, id, channelId),
    );
  },
  showSuccessToast(REPORT_TO_MOD_SUCCESS) {
    const obj = ToastUtils;
    obj.showSafetySuccess(REPORT_TO_MOD_SUCCESS, SafetyToastsUtils.getSafetyToastTypeContent(REPORT_TO_MOD_SUCCESS));
  },
  showFailedToast(TIGGER_PAWTECT_ERROR) {
    let GENERIC_ERROR = TIGGER_PAWTECT_ERROR;
    const obj = ToastUtils;
    if (TIGGER_PAWTECT_ERROR == null) {
      GENERIC_ERROR = SafetyToastType.GENERIC_ERROR;
    }
    obj.presentFailedToast(SafetyToastsUtils.getSafetyToastTypeContent(GENERIC_ERROR));
  },
};
