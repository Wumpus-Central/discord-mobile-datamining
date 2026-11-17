// === Module 18123: showEmailSettingsUpdateErrorToast ===

// Module 18123 (showEmailSettingsUpdateErrorToast)
import util from "util" /* 1113 */;
import ToastUtils from "ToastUtils" /* 6004 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/notifications/showEmailSettingsUpdateErrorToast.native.tsx");

export default function showEmailSettingsUpdateErrorToast() {
  const intl = util.intl;
  ToastUtils.presentFailedToast(intl.string(util.t.F8FvUy));
};