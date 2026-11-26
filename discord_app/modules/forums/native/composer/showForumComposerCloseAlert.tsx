// discord_app/modules/forums/native/composer/showForumComposerCloseAlert.tsx
import util from "../../../../intl/index.native.tsx";
import KeyboardManagerUtils from "../../../../utils/native/KeyboardManagerUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import useAlertStore from "../../../../design/components/AlertModal/native/useAlertStore.native.tsx";
import AlertModal from "../../../../design/components/AlertModal/native/AlertModal.native.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let c3 = "forum-composer-close";
let result = size.fileFinishedImporting("modules/forums/native/composer/showForumComposerCloseAlert.tsx");

export default function showForumComposerCloseAlert(arg0) {
  ({ onConfirm, onCancel } = arg0);
  const result = KeyboardManagerUtils.dismissGlobalKeyboard();
  ActionSheetActionCreatorsDefault.hideActionSheet();
  useAlertStore.dismissAlert(key);
  const obj5 = {
    key,
    title: null,
    content: null,
    confirmText: null,
    cancelText: null,
    variant: "primary",
    onConfirm: null,
    onCancel: null,
    dismissable: true,
  };
  const intl = util.intl;
  obj5.title = intl.string(util.t.Fz1512);
  const intl2 = util.intl;
  obj5.content = intl2.string(util.t.YBgepz);
  const intl3 = util.intl;
  obj5.confirmText = intl3.string(util.t.Rnli6C);
  const intl4 = util.intl;
  obj5.cancelText = intl4.string(util.t["3NnH6V"]);
  obj5.onConfirm = onConfirm;
  obj5.onCancel = onCancel;
  AlertModal.showConfirmModal(obj5);
}
export const FORUM_COMPOSER_CLOSE_ALERT_KEY = "forum-composer-close";
