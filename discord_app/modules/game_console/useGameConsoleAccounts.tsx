// === Module 9304: useGameConsoleAccounts ===

// Module 9304 (useGameConsoleAccounts)
import initialize from "initialize" /* 504 */;
import GlobalUtils from "GlobalUtils" /* 1369 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 5332 */;

require = fn;
const PlatformTypes = fn(1074).PlatformTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_console/useGameConsoleAccounts.tsx");

export default function useGameConsoleAccounts() {
  let items = [ConnectedAccountsStore];
  return initialize.useStateFromStoresArray(items, () => {
    const items = [ConnectedAccountsStore.getAccount(null, constants.XBOX), ConnectedAccountsStore.getAccount(null, constants.PLAYSTATION), ConnectedAccountsStore.getAccount(null, constants.PLAYSTATION_STAGING)];
    return items.filter(GlobalUtils.isNotNullish);
  });
};