// === Module 8113: SafetyToastsActionCreators ===

// Module 8113 (SafetyToastsActionCreators)
import ToastUtils from "ToastUtils" /* 4573 */;
import Constants from "Constants" /* 8108 */;
import SafetyToastsUtils from "SafetyToastsUtils" /* 8114 */;
import size from "module_2" /* 2 */;

const SafetyToastType = Constants.SafetyToastType;
const result = size.fileFinishedImporting("modules/safety_common/SafetyToastsActionCreators.native.tsx");

export default {
  showIgnoreSuccessToast(id, c1) {
    const obj = ToastUtils;
    obj.showSafetySuccess(SafetyToastType.IGNORE_SUCCESS, SafetyToastsUtils.getSafetyToastTypeContent(SafetyToastType.IGNORE_SUCCESS, id, c1));
  },
  showUnignoreSuccessToast(id, c1) {
    const obj = ToastUtils;
    obj.showSafetySuccess(SafetyToastType.UNIGNORE_SUCCESS, SafetyToastsUtils.getSafetyToastTypeContent(SafetyToastType.UNIGNORE_SUCCESS, id, c1));
  },
  showBlockSuccessToast(id, channelId) {
    const obj = ToastUtils;
    obj.showSafetySuccess(SafetyToastType.BLOCK_SUCCESS, SafetyToastsUtils.getSafetyToastTypeContent(SafetyToastType.BLOCK_SUCCESS, id, channelId));
  },
  showUnblockSuccessToast(id, channelId) {
    const obj = ToastUtils;
    obj.showSafetySuccess(SafetyToastType.UNBLOCK_SUCCESS, SafetyToastsUtils.getSafetyToastTypeContent(SafetyToastType.UNBLOCK_SUCCESS, id, channelId));
  },
  showMuteSuccessToast(id, channelId) {
    const obj = ToastUtils;
    obj.showSafetySuccess(SafetyToastType.MUTE_SUCCESS, SafetyToastsUtils.getSafetyToastTypeContent(SafetyToastType.MUTE_SUCCESS, id, channelId));
  },
  showUnmuteSuccessToast(id, c1) {
    const obj = ToastUtils;
    obj.showSafetySuccess(SafetyToastType.UNMUTE_SUCCESS, SafetyToastsUtils.getSafetyToastTypeContent(SafetyToastType.UNMUTE_SUCCESS, id, c1));
  },
  showReportSuccessToast(id, c1) {
    const obj = ToastUtils;
    obj.showSafetySuccess(SafetyToastType.REPORT_SUCCESS, SafetyToastsUtils.getSafetyToastTypeContent(SafetyToastType.REPORT_SUCCESS, id, c1));
  },
  showSuccessToast(SAFETY_FEEDBACK_SUCCESS) {
    const obj = ToastUtils;
    obj.showSafetySuccess(SAFETY_FEEDBACK_SUCCESS, SafetyToastsUtils.getSafetyToastTypeContent(SAFETY_FEEDBACK_SUCCESS));
  },
  showFailedToast(TIGGER_PAWTECT_ERROR) {
    let GENERIC_ERROR = TIGGER_PAWTECT_ERROR;
    const obj = ToastUtils;
    if (TIGGER_PAWTECT_ERROR == null) {
      GENERIC_ERROR = SafetyToastType.GENERIC_ERROR;
    }
    obj.presentFailedToast(SafetyToastsUtils.getSafetyToastTypeContent(GENERIC_ERROR));
  }
};