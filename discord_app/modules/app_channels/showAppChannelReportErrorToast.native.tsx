// === Module 13957: showAppChannelReportErrorToast ===

// Module 13957 (showAppChannelReportErrorToast)
import util from "util" /* 1128 */;
import ToastUtils from "ToastUtils" /* 5648 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_channels/showAppChannelReportErrorToast.native.tsx");

export default function showAppChannelReportErrorToast() {
  const intl = util.intl;
  ToastUtils.presentFailedToast(intl.string(util.t.F8FvUy));
};