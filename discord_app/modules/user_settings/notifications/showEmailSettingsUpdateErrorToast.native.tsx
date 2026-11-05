// discord_app/modules/user_settings/notifications/showEmailSettingsUpdateErrorToast.native.tsx
import util from "../../../intl/index.native.tsx";
import ToastUtils from "../../toast/native/ToastUtils.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting(
  "modules/user_settings/notifications/showEmailSettingsUpdateErrorToast.native.tsx",
);

export default function showEmailSettingsUpdateErrorToast() {
  const intl = util.intl;
  ToastUtils.presentFailedToast(intl.string(util.t.F8FvUy));
}
