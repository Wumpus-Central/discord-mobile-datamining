// === Module 17113: showEmailSettingsUpdateErrorToast ===

// Module 17113 (showEmailSettingsUpdateErrorToast)
import util from "util" /* 1112 */;
import ToastUtils from "ToastUtils" /* 5724 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/notifications/showEmailSettingsUpdateErrorToast.native.tsx");

export default function showEmailSettingsUpdateErrorToast() {
  const intl = util.intl;
  ToastUtils.presentFailedToast(intl.string(util.t.F8FvUy));
};