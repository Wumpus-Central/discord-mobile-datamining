// === Module 14367: showAppChannelReportErrorToast ===

// Module 14367 (showAppChannelReportErrorToast)
import util from "util" /* 1112 */;
import ToastUtils from "ToastUtils" /* 5594 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_channels/showAppChannelReportErrorToast.native.tsx");

export default function showAppChannelReportErrorToast() {
  const intl = util.intl;
  ToastUtils.presentFailedToast(intl.string(util.t.F8FvUy));
};