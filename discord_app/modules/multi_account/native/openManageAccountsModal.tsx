// === Module 15965: openManageAccountsModal ===

// Module 15965 (openManageAccountsModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4445 */;
import _modDef4723 from "module_4723" /* 4723 */;
import MAX_ACCOUNTS from "MAX_ACCOUNTS" /* 11983 */;

const SWITCH_ACCOUNTS_MODAL_KEY = MAX_ACCOUNTS.SWITCH_ACCOUNTS_MODAL_KEY;
const result = set.fileFinishedImporting("modules/multi_account/native/openManageAccountsModal.tsx");

export default function openManageAccountsModal(initialRouteName) {
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj.hideActionSheet();
  obj = { initialRouteName };
  _modDef4723.pushLazy(asyncRequireImpl(15966, dependencyMap.paths), obj, SWITCH_ACCOUNTS_MODAL_KEY);
};