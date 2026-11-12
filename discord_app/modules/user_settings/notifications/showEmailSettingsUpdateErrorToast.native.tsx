// === Module 18001: showEmailSettingsUpdateErrorToast ===

// Module 18001 (showEmailSettingsUpdateErrorToast)
import util from "util" /* 1113 */;
import ToastUtils from "ToastUtils" /* 5951 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/notifications/showEmailSettingsUpdateErrorToast.native.tsx");

export default function showEmailSettingsUpdateErrorToast() {
  const intl = util.intl;
  ToastUtils.presentFailedToast(intl.string(util.t.F8FvUy));
};