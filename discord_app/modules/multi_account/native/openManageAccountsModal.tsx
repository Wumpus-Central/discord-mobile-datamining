// === Module 17446: openManageAccountsModal ===

// Module 17446 (openManageAccountsModal)
import asyncRequireImpl from "asyncRequireImpl" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6152 */;
import Constants from "Constants" /* 12999 */;
import size from "module_2" /* 2 */;

const SWITCH_ACCOUNTS_MODAL_KEY = Constants.SWITCH_ACCOUNTS_MODAL_KEY;
const result = size.fileFinishedImporting("modules/multi_account/native/openManageAccountsModal.tsx");

export default function openManageAccountsModal(initialRouteName) {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(17447, dependencyMap.paths), { initialRouteName }, SWITCH_ACCOUNTS_MODAL_KEY);
};