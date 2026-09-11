// === Module 16445: openManageAccountsModal ===

// Module 16445 (openManageAccountsModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4573 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4809 */;
import Constants from "Constants" /* 12507 */;
import size from "module_2" /* 2 */;

const SWITCH_ACCOUNTS_MODAL_KEY = Constants.SWITCH_ACCOUNTS_MODAL_KEY;
const result = size.fileFinishedImporting("modules/multi_account/native/openManageAccountsModal.tsx");

export default function openManageAccountsModal(initialRouteName) {
  let obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  obj = { initialRouteName };
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(16446, dependencyMap.paths), obj, SWITCH_ACCOUNTS_MODAL_KEY);
};