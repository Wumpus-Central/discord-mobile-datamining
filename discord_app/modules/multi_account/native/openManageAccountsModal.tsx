// === Module 18107: openManageAccountsModal ===

// Module 18107 (openManageAccountsModal)
import asyncRequireImpl from "asyncRequireImpl" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5226 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6099 */;
import Constants from "Constants" /* 13334 */;
import size from "module_2" /* 2 */;

const SWITCH_ACCOUNTS_MODAL_KEY = Constants.SWITCH_ACCOUNTS_MODAL_KEY;
const result = size.fileFinishedImporting("modules/multi_account/native/openManageAccountsModal.tsx");

export default function openManageAccountsModal(initialRouteName) {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(18108, dependencyMap.paths), { initialRouteName }, SWITCH_ACCOUNTS_MODAL_KEY);
};