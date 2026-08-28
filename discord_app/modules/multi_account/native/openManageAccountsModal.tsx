// discord_app/modules/multi_account/native/openManageAccountsModal.tsx
import set from "../../../../_runtime/00002_set.js";
import asyncRequireImpl from "../../../../_runtime/02010_asyncRequireImpl.js";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import _modDef4689 from "../../../actions/ModalActionCreators.tsx";
import MAX_ACCOUNTS from "../Constants.tsx";

const SWITCH_ACCOUNTS_MODAL_KEY = MAX_ACCOUNTS.SWITCH_ACCOUNTS_MODAL_KEY;
const result = set.fileFinishedImporting("modules/multi_account/native/openManageAccountsModal.tsx");

export default function openManageAccountsModal(initialRouteName) {
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj.hideActionSheet();
  obj = { initialRouteName };
  _modDef4689.pushLazy(asyncRequireImpl(15897, dependencyMap.paths), obj, SWITCH_ACCOUNTS_MODAL_KEY);
};