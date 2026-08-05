// discord_app/modules/multi_account/native/openManageAccountsModal.tsx
import { SWITCH_ACCOUNTS_MODAL_KEY } from "MAX_ACCOUNTS";
import { asyncRequireImpl } from "../../../../_runtime/01959_asyncRequireImpl.js";
import { ModalActionCreators } from "../../../actions/ModalActionCreators.tsx";
import { ACTION_SHEET_HEIGHT_HALF } from "../../action_sheet/native/ActionSheetActionCreators.tsx";

const result = require("module_4490").fileFinishedImporting("modules/multi_account/native/openManageAccountsModal.tsx");

export default function openManageAccountsModal(initialRouteName) {
  let obj = ACTION_SHEET_HEIGHT_HALF;
  obj.hideActionSheet();
  obj = { initialRouteName };
  ModalActionCreators.pushLazy(asyncRequireImpl /* asyncRequireImpl */(15368, dependencyMap.paths), obj, SWITCH_ACCOUNTS_MODAL_KEY);
};