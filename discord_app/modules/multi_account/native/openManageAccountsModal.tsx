// discord_app/modules/multi_account/native/openManageAccountsModal.tsx
import { SWITCH_ACCOUNTS_MODAL_KEY } from "MAX_ACCOUNTS";

const result = require("module_4490").fileFinishedImporting("modules/multi_account/native/openManageAccountsModal.tsx");

export default function openManageAccountsModal(initialRouteName) {
  let obj = require("../../action_sheet/native/ActionSheetActionCreators.tsx");
  obj.hideActionSheet();
  obj = { initialRouteName };
  require("../../../actions/ModalActionCreators.tsx").pushLazy(require("../../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(15368, dependencyMap.paths), obj, SWITCH_ACCOUNTS_MODAL_KEY);
};