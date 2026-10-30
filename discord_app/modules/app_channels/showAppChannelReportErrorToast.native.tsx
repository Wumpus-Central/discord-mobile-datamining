// === Module 14511: showAppChannelReportErrorToast ===

// Module 14511 (showAppChannelReportErrorToast)
import util from "util" /* 1114 */;
import ToastUtils from "ToastUtils" /* 5706 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_channels/showAppChannelReportErrorToast.native.tsx");

export default function showAppChannelReportErrorToast() {
  const intl = util.intl;
  ToastUtils.presentFailedToast(intl.string(util.t.F8FvUy));
};