// === Module 15634: openManageAccountsModal ===

// Module 15634 (openManageAccountsModal)
import obj132 from "obj132" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2007 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4342 */;
import _modDef5260 from "module_5260" /* 5260 */;
import MAX_ACCOUNTS from "MAX_ACCOUNTS" /* 11586 */;

const SWITCH_ACCOUNTS_MODAL_KEY = MAX_ACCOUNTS.SWITCH_ACCOUNTS_MODAL_KEY;
const result = obj132.fileFinishedImporting("modules/multi_account/native/openManageAccountsModal.tsx");

export default function openManageAccountsModal(initialRouteName) {
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj.hideActionSheet();
  obj = { initialRouteName };
  _modDef5260.pushLazy(asyncRequireImpl(15635, dependencyMap.paths), obj, SWITCH_ACCOUNTS_MODAL_KEY);
};