import { SWITCH_ACCOUNTS_MODAL_KEY } from "MAX_ACCOUNTS";

const result = require("module_4461").fileFinishedImporting("modules/multi_account/native/openManageAccountsModal.tsx");

export default function openManageAccountsModal(initialRouteName) {
  let obj = importDefault(4223);
  obj.hideActionSheet();
  obj = { initialRouteName };
  importDefault(4461).pushLazy(require(1959) /* asyncRequireImpl */(15338, dependencyMap.paths), obj, SWITCH_ACCOUNTS_MODAL_KEY);
};