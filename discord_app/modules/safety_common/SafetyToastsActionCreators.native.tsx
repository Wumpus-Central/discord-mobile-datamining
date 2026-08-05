// discord_app/modules/safety_common/SafetyToastsActionCreators.native.tsx
import { SafetyToastType } from "SafetyToastType";

const result = require("getSafetyToastTypeContent").fileFinishedImporting("modules/safety_common/SafetyToastsActionCreators.native.tsx");

export default {
  showIgnoreSuccessToast(closure_0, closure_1) {
    const obj = require("../toast/native/ToastUtils.tsx") /* presentAddedFriendToast */;
    obj.showSafetySuccess(SafetyToastType.IGNORE_SUCCESS, require("SafetyToastsUtils.tsx") /* getSafetyToastTypeContent */.getSafetyToastTypeContent(SafetyToastType.IGNORE_SUCCESS, closure_0, closure_1));
  },
  showUnignoreSuccessToast(closure_0, closure_1) {
    const obj = require("../toast/native/ToastUtils.tsx") /* presentAddedFriendToast */;
    obj.showSafetySuccess(SafetyToastType.UNIGNORE_SUCCESS, require("SafetyToastsUtils.tsx") /* getSafetyToastTypeContent */.getSafetyToastTypeContent(SafetyToastType.UNIGNORE_SUCCESS, closure_0, closure_1));
  },
  showBlockSuccessToast(closure_0, closure_1) {
    const obj = require("../toast/native/ToastUtils.tsx") /* presentAddedFriendToast */;
    obj.showSafetySuccess(SafetyToastType.BLOCK_SUCCESS, require("SafetyToastsUtils.tsx") /* getSafetyToastTypeContent */.getSafetyToastTypeContent(SafetyToastType.BLOCK_SUCCESS, closure_0, closure_1));
  },
  showUnblockSuccessToast(closure_3, id) {
    const obj = require("../toast/native/ToastUtils.tsx") /* presentAddedFriendToast */;
    obj.showSafetySuccess(SafetyToastType.UNBLOCK_SUCCESS, require("SafetyToastsUtils.tsx") /* getSafetyToastTypeContent */.getSafetyToastTypeContent(SafetyToastType.UNBLOCK_SUCCESS, closure_3, id));
  },
  showMuteSuccessToast(id, channelId) {
    const obj = require("../toast/native/ToastUtils.tsx") /* presentAddedFriendToast */;
    obj.showSafetySuccess(SafetyToastType.MUTE_SUCCESS, require("SafetyToastsUtils.tsx") /* getSafetyToastTypeContent */.getSafetyToastTypeContent(SafetyToastType.MUTE_SUCCESS, id, channelId));
  },
  showUnmuteSuccessToast(closure_0, c1) {
    const obj = require("../toast/native/ToastUtils.tsx") /* presentAddedFriendToast */;
    obj.showSafetySuccess(SafetyToastType.UNMUTE_SUCCESS, require("SafetyToastsUtils.tsx") /* getSafetyToastTypeContent */.getSafetyToastTypeContent(SafetyToastType.UNMUTE_SUCCESS, closure_0, c1));
  },
  showReportSuccessToast(closure_0, c1) {
    const obj = require("../toast/native/ToastUtils.tsx") /* presentAddedFriendToast */;
    obj.showSafetySuccess(SafetyToastType.REPORT_SUCCESS, require("SafetyToastsUtils.tsx") /* getSafetyToastTypeContent */.getSafetyToastTypeContent(SafetyToastType.REPORT_SUCCESS, closure_0, c1));
  },
  showSuccessToast(REPORT_TO_MOD_SUCCESS) {
    const obj = require("../toast/native/ToastUtils.tsx") /* presentAddedFriendToast */;
    obj.showSafetySuccess(REPORT_TO_MOD_SUCCESS, require("SafetyToastsUtils.tsx") /* getSafetyToastTypeContent */.getSafetyToastTypeContent(REPORT_TO_MOD_SUCCESS));
  },
  showFailedToast(GENERIC_ERROR) {
    const obj = require("../toast/native/ToastUtils.tsx") /* presentAddedFriendToast */;
    if (GENERIC_ERROR == null) {
      GENERIC_ERROR = SafetyToastType.GENERIC_ERROR;
    }
    obj.presentFailedToast(require("SafetyToastsUtils.tsx") /* getSafetyToastTypeContent */.getSafetyToastTypeContent(GENERIC_ERROR));
  }
};