// === Module 16941: showEmailSettingsUpdateErrorToast ===

// Module 16941 (showEmailSettingsUpdateErrorToast)
import util from "util" /* 1112 */;
import ToastUtils from "ToastUtils" /* 5598 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/notifications/showEmailSettingsUpdateErrorToast.native.tsx");

export default function showEmailSettingsUpdateErrorToast() {
  const intl = util.intl;
  ToastUtils.presentFailedToast(intl.string(util.t.F8FvUy));
};