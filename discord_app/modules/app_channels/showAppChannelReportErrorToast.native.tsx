// === Module 14024: showAppChannelReportErrorToast ===

// Module 14024 (showAppChannelReportErrorToast)
import util from "util" /* 1112 */;
import ToastUtils from "ToastUtils" /* 5693 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_channels/showAppChannelReportErrorToast.native.tsx");

export default function showAppChannelReportErrorToast() {
  const intl = util.intl;
  ToastUtils.presentFailedToast(intl.string(util.t.F8FvUy));
};