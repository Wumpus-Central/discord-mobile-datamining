// discord_app/modules/multi_account/native/openManageAccountsModal.tsx
import { SWITCH_ACCOUNTS_MODAL_KEY } from "MAX_ACCOUNTS";

const result = require("module_4399").fileFinishedImporting("modules/multi_account/native/openManageAccountsModal.tsx");

export default function openManageAccountsModal(initialRouteName) {
  let obj = importDefault(4161);
  obj.hideActionSheet();
  obj = { initialRouteName };
  importDefault(4399).pushLazy(require(1959) /* asyncRequireImpl */(15271, dependencyMap.paths), obj, SWITCH_ACCOUNTS_MODAL_KEY);
};