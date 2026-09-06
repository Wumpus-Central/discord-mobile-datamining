// === Module 9214: useGameConsoleAccounts ===

// Module 9214 (useGameConsoleAccounts)
import initialize from "initialize" /* 504 */;
import closure_2 from "set" /* 5281 */;
import { PlatformTypes } from "ME" /* 1074 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/game_console/useGameConsoleAccounts.tsx");

export default function useGameConsoleAccounts() {
  let items = [closure_2];
  return initialize.useStateFromStoresArray(items, () => {
    const items = [store.getAccount(null, constants.XBOX), store.getAccount(null, constants.PLAYSTATION), store.getAccount(null, constants.PLAYSTATION_STAGING)];
    return items.filter(callback(table[3]).isNotNullish);
  });
};