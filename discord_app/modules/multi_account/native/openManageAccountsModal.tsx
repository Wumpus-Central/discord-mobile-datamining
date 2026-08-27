// === Module 15878: openManageAccountsModal ===

// Module 15878 (openManageAccountsModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4412 */;
import _modDef4676 from "module_4676" /* 4676 */;
import MAX_ACCOUNTS from "MAX_ACCOUNTS" /* 11897 */;

const SWITCH_ACCOUNTS_MODAL_KEY = MAX_ACCOUNTS.SWITCH_ACCOUNTS_MODAL_KEY;
const result = set.fileFinishedImporting("modules/multi_account/native/openManageAccountsModal.tsx");

export default function openManageAccountsModal(initialRouteName) {
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj.hideActionSheet();
  obj = { initialRouteName };
  _modDef4676.pushLazy(asyncRequireImpl(15879, dependencyMap.paths), obj, SWITCH_ACCOUNTS_MODAL_KEY);
};