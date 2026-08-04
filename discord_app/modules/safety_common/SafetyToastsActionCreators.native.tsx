import { SafetyToastType } from "SafetyToastType";

const result = require("getSafetyToastTypeContent").fileFinishedImporting("modules/safety_common/SafetyToastsActionCreators.native.tsx");

export default {
  showIgnoreSuccessToast(closure_0, closure_1) {
    const obj = require(3985) /* presentAddedFriendToast */;
    obj.showSafetySuccess(SafetyToastType.IGNORE_SUCCESS, require(7708) /* getSafetyToastTypeContent */.getSafetyToastTypeContent(SafetyToastType.IGNORE_SUCCESS, closure_0, closure_1));
  },
  showUnignoreSuccessToast(closure_0, closure_1) {
    const obj = require(3985) /* presentAddedFriendToast */;
    obj.showSafetySuccess(SafetyToastType.UNIGNORE_SUCCESS, require(7708) /* getSafetyToastTypeContent */.getSafetyToastTypeContent(SafetyToastType.UNIGNORE_SUCCESS, closure_0, closure_1));
  },
  showBlockSuccessToast(closure_0, closure_1) {
    const obj = require(3985) /* presentAddedFriendToast */;
    obj.showSafetySuccess(SafetyToastType.BLOCK_SUCCESS, require(7708) /* getSafetyToastTypeContent */.getSafetyToastTypeContent(SafetyToastType.BLOCK_SUCCESS, closure_0, closure_1));
  },
  showUnblockSuccessToast(closure_3, id) {
    const obj = require(3985) /* presentAddedFriendToast */;
    obj.showSafetySuccess(SafetyToastType.UNBLOCK_SUCCESS, require(7708) /* getSafetyToastTypeContent */.getSafetyToastTypeContent(SafetyToastType.UNBLOCK_SUCCESS, closure_3, id));
  },
  showMuteSuccessToast(id, channelId) {
    const obj = require(3985) /* presentAddedFriendToast */;
    obj.showSafetySuccess(SafetyToastType.MUTE_SUCCESS, require(7708) /* getSafetyToastTypeContent */.getSafetyToastTypeContent(SafetyToastType.MUTE_SUCCESS, id, channelId));
  },
  showUnmuteSuccessToast(closure_0, c1) {
    const obj = require(3985) /* presentAddedFriendToast */;
    obj.showSafetySuccess(SafetyToastType.UNMUTE_SUCCESS, require(7708) /* getSafetyToastTypeContent */.getSafetyToastTypeContent(SafetyToastType.UNMUTE_SUCCESS, closure_0, c1));
  },
  showReportSuccessToast(closure_0, c1) {
    const obj = require(3985) /* presentAddedFriendToast */;
    obj.showSafetySuccess(SafetyToastType.REPORT_SUCCESS, require(7708) /* getSafetyToastTypeContent */.getSafetyToastTypeContent(SafetyToastType.REPORT_SUCCESS, closure_0, c1));
  },
  showSuccessToast(REPORT_TO_MOD_SUCCESS) {
    const obj = require(3985) /* presentAddedFriendToast */;
    obj.showSafetySuccess(REPORT_TO_MOD_SUCCESS, require(7708) /* getSafetyToastTypeContent */.getSafetyToastTypeContent(REPORT_TO_MOD_SUCCESS));
  },
  showFailedToast(GENERIC_ERROR) {
    const obj = require(3985) /* presentAddedFriendToast */;
    if (GENERIC_ERROR == null) {
      GENERIC_ERROR = SafetyToastType.GENERIC_ERROR;
    }
    obj.presentFailedToast(require(7708) /* getSafetyToastTypeContent */.getSafetyToastTypeContent(GENERIC_ERROR));
  }
};