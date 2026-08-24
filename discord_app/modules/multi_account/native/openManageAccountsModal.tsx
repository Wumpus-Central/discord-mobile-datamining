// === Module 15702: openManageAccountsModal ===

// Module 15702 (openManageAccountsModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4346 */;
import _modDef5265 from "module_5265" /* 5265 */;
import MAX_ACCOUNTS from "MAX_ACCOUNTS" /* 11635 */;

const SWITCH_ACCOUNTS_MODAL_KEY = MAX_ACCOUNTS.SWITCH_ACCOUNTS_MODAL_KEY;
const result = set.fileFinishedImporting("modules/multi_account/native/openManageAccountsModal.tsx");

export default function openManageAccountsModal(initialRouteName) {
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj.hideActionSheet();
  obj = { initialRouteName };
  _modDef5265.pushLazy(asyncRequireImpl(15703, dependencyMap.paths), obj, SWITCH_ACCOUNTS_MODAL_KEY);
};