// === Module 8113: SafetyToastsActionCreators ===

// Module 8113 (SafetyToastsActionCreators)
import ToastUtils from "ToastUtils" /* 4573 */;
import Constants from "Constants" /* 8108 */;
import SafetyToastsUtils from "SafetyToastsUtils" /* 8114 */;
import size from "module_2" /* 2 */;

const SafetyToastType = Constants.SafetyToastType;
let obj = {
  showIgnoreSuccessToast(id, c1) {
    const showSafetySuccess = ToastUtils.showSafetySuccess;
    const IGNORE_SUCCESS = SafetyToastType.IGNORE_SUCCESS;
    ToastUtils;
    const obj = SafetyToastsUtils;
    showSafetySuccess(IGNORE_SUCCESS, obj.getSafetyToastTypeContent(SafetyToastType.IGNORE_SUCCESS, id, c1));
  },
  showUnignoreSuccessToast(id, c1) {
    const showSafetySuccess = ToastUtils.showSafetySuccess;
    const UNIGNORE_SUCCESS = SafetyToastType.UNIGNORE_SUCCESS;
    ToastUtils;
    const obj = SafetyToastsUtils;
    showSafetySuccess(UNIGNORE_SUCCESS, obj.getSafetyToastTypeContent(SafetyToastType.UNIGNORE_SUCCESS, id, c1));
  },
  showBlockSuccessToast(id, channelId) {
    const showSafetySuccess = ToastUtils.showSafetySuccess;
    const BLOCK_SUCCESS = SafetyToastType.BLOCK_SUCCESS;
    ToastUtils;
    const obj = SafetyToastsUtils;
    showSafetySuccess(BLOCK_SUCCESS, obj.getSafetyToastTypeContent(SafetyToastType.BLOCK_SUCCESS, id, channelId));
  },
  showUnblockSuccessToast(senderId, channelId) {
    const showSafetySuccess = ToastUtils.showSafetySuccess;
    const UNBLOCK_SUCCESS = SafetyToastType.UNBLOCK_SUCCESS;
    ToastUtils;
    const obj = SafetyToastsUtils;
    showSafetySuccess(UNBLOCK_SUCCESS, obj.getSafetyToastTypeContent(SafetyToastType.UNBLOCK_SUCCESS, senderId, channelId));
  },
  showMuteSuccessToast(id, channelId) {
    const showSafetySuccess = ToastUtils.showSafetySuccess;
    const MUTE_SUCCESS = SafetyToastType.MUTE_SUCCESS;
    ToastUtils;
    const obj = SafetyToastsUtils;
    showSafetySuccess(MUTE_SUCCESS, obj.getSafetyToastTypeContent(SafetyToastType.MUTE_SUCCESS, id, channelId));
  },
  showUnmuteSuccessToast(id, c1) {
    const showSafetySuccess = ToastUtils.showSafetySuccess;
    const UNMUTE_SUCCESS = SafetyToastType.UNMUTE_SUCCESS;
    ToastUtils;
    const obj = SafetyToastsUtils;
    showSafetySuccess(UNMUTE_SUCCESS, obj.getSafetyToastTypeContent(SafetyToastType.UNMUTE_SUCCESS, id, c1));
  },
  showReportSuccessToast(id, c1) {
    const showSafetySuccess = ToastUtils.showSafetySuccess;
    const REPORT_SUCCESS = SafetyToastType.REPORT_SUCCESS;
    ToastUtils;
    const obj = SafetyToastsUtils;
    showSafetySuccess(REPORT_SUCCESS, obj.getSafetyToastTypeContent(SafetyToastType.REPORT_SUCCESS, id, c1));
  },
  showSuccessToast(SAFETY_FEEDBACK_SUCCESS) {
    const showSafetySuccess = ToastUtils.showSafetySuccess;
    ToastUtils;
    const obj = SafetyToastsUtils;
    showSafetySuccess(SAFETY_FEEDBACK_SUCCESS, obj.getSafetyToastTypeContent(SAFETY_FEEDBACK_SUCCESS));
  },
  showFailedToast(GENERIC_ERROR) {
    const presentFailedToast = ToastUtils.presentFailedToast;
    ToastUtils;
    const getSafetyToastTypeContent = SafetyToastsUtils.getSafetyToastTypeContent;
    SafetyToastsUtils;
    if (GENERIC_ERROR == null) {
      GENERIC_ERROR = SafetyToastType.GENERIC_ERROR;
    }
    presentFailedToast(getSafetyToastTypeContent(GENERIC_ERROR));
  }
};
const result = size.fileFinishedImporting("modules/safety_common/SafetyToastsActionCreators.native.tsx");

export default obj;