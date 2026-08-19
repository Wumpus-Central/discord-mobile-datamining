// discord_app/modules/safety_common/SafetyToastsActionCreators.native.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import presentAddedFriendToast from "../toast/native/ToastUtils.tsx";
import SafetyToastType2 from "Constants.tsx";
import getSafetyToastTypeContent from "SafetyToastsUtils.tsx";

const SafetyToastType = SafetyToastType2.SafetyToastType;
const result = obj132.fileFinishedImporting("modules/safety_common/SafetyToastsActionCreators.native.tsx");

export default {
  showIgnoreSuccessToast(closure_0, closure_1) {
    const obj = presentAddedFriendToast;
    obj.showSafetySuccess(SafetyToastType.IGNORE_SUCCESS, getSafetyToastTypeContent.getSafetyToastTypeContent(SafetyToastType.IGNORE_SUCCESS, closure_0, closure_1));
  },
  showUnignoreSuccessToast(closure_0, closure_1) {
    const obj = presentAddedFriendToast;
    obj.showSafetySuccess(SafetyToastType.UNIGNORE_SUCCESS, getSafetyToastTypeContent.getSafetyToastTypeContent(SafetyToastType.UNIGNORE_SUCCESS, closure_0, closure_1));
  },
  showBlockSuccessToast(closure_0, closure_1) {
    const obj = presentAddedFriendToast;
    obj.showSafetySuccess(SafetyToastType.BLOCK_SUCCESS, getSafetyToastTypeContent.getSafetyToastTypeContent(SafetyToastType.BLOCK_SUCCESS, closure_0, closure_1));
  },
  showUnblockSuccessToast(id, id2) {
    const obj = presentAddedFriendToast;
    obj.showSafetySuccess(SafetyToastType.UNBLOCK_SUCCESS, getSafetyToastTypeContent.getSafetyToastTypeContent(SafetyToastType.UNBLOCK_SUCCESS, id, id2));
  },
  showMuteSuccessToast(id, channelId) {
    const obj = presentAddedFriendToast;
    obj.showSafetySuccess(SafetyToastType.MUTE_SUCCESS, getSafetyToastTypeContent.getSafetyToastTypeContent(SafetyToastType.MUTE_SUCCESS, id, channelId));
  },
  showUnmuteSuccessToast(closure_0, c1) {
    const obj = presentAddedFriendToast;
    obj.showSafetySuccess(SafetyToastType.UNMUTE_SUCCESS, getSafetyToastTypeContent.getSafetyToastTypeContent(SafetyToastType.UNMUTE_SUCCESS, closure_0, c1));
  },
  showReportSuccessToast(closure_0, c1) {
    const obj = presentAddedFriendToast;
    obj.showSafetySuccess(SafetyToastType.REPORT_SUCCESS, getSafetyToastTypeContent.getSafetyToastTypeContent(SafetyToastType.REPORT_SUCCESS, closure_0, c1));
  },
  showSuccessToast(REPORT_TO_MOD_SUCCESS) {
    const obj = presentAddedFriendToast;
    obj.showSafetySuccess(REPORT_TO_MOD_SUCCESS, getSafetyToastTypeContent.getSafetyToastTypeContent(REPORT_TO_MOD_SUCCESS));
  },
  showFailedToast(GENERIC_ERROR) {
    const obj = presentAddedFriendToast;
    if (GENERIC_ERROR == null) {
      GENERIC_ERROR = SafetyToastType.GENERIC_ERROR;
    }
    obj.presentFailedToast(getSafetyToastTypeContent.getSafetyToastTypeContent(GENERIC_ERROR));
  }
};