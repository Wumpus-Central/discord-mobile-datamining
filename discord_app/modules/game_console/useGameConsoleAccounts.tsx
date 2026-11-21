// === Module 11015: useGameConsoleAccounts ===

// Module 11015 (useGameConsoleAccounts)
import initialize from "initialize" /* 504 */;
import GlobalUtils from "GlobalUtils" /* 1254 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 6689 */;

require = fn;
const PlatformTypes = fn(1071).PlatformTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_console/useGameConsoleAccounts.tsx");

export default function useGameConsoleAccounts() {
  items = [ConnectedAccountsStore];
  return initialize.useStateFromStoresArray(items, () => {
    items = [ConnectedAccountsStore.getAccount(null, constants.XBOX), ConnectedAccountsStore.getAccount(null, constants.PLAYSTATION), ConnectedAccountsStore.getAccount(null, constants.PLAYSTATION_STAGING)];
    return items.filter(GlobalUtils.isNotNullish);
  });
};