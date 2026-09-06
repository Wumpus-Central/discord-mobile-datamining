// discord_app/modules/multi_account/native/openManageAccountsModal.tsx
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import Constants from "../Constants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const SWITCH_ACCOUNTS_MODAL_KEY = Constants.SWITCH_ACCOUNTS_MODAL_KEY;
const result = size.fileFinishedImporting("modules/multi_account/native/openManageAccountsModal.tsx");

export default function openManageAccountsModal(initialRouteName) {
  let obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  obj = { initialRouteName };
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(16375, dependencyMap.paths), obj, SWITCH_ACCOUNTS_MODAL_KEY);
}
