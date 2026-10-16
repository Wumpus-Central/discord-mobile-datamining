// discord_app/modules/app_channels/showAppChannelReportErrorToast.native.tsx
import util from "../../intl/index.native.tsx";
import ToastUtils from "../toast/native/ToastUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/app_channels/showAppChannelReportErrorToast.native.tsx");

export default function showAppChannelReportErrorToast() {
  const intl = util.intl;
  ToastUtils.presentFailedToast(intl.string(util.t.F8FvUy));
}
