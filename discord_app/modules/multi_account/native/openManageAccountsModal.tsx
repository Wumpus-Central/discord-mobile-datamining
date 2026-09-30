// === Module 16216: openManageAccountsModal ===

// Module 16216 (openManageAccountsModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4830 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5069 */;
import Constants from "Constants" /* 12112 */;
import size from "module_2" /* 2 */;

const SWITCH_ACCOUNTS_MODAL_KEY = Constants.SWITCH_ACCOUNTS_MODAL_KEY;
const result = size.fileFinishedImporting("modules/multi_account/native/openManageAccountsModal.tsx");

export default function openManageAccountsModal(initialRouteName) {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(16217, dependencyMap.paths), { initialRouteName }, SWITCH_ACCOUNTS_MODAL_KEY);
};