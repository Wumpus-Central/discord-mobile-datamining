// === Module 9747: useGameConsoleAccounts ===

// Module 9747 (useGameConsoleAccounts)
import initialize from "initialize" /* 589 */;
import set from "set" /* 5221 */;
import { PlatformTypes } from "ME" /* 676 */;

require = fn;
const result = require("obj132").fileFinishedImporting("modules/game_console/useGameConsoleAccounts.tsx");

export default function useGameConsoleAccounts() {
  let items = [closure_2];
  return initialize.useStateFromStoresArray(items, () => {
    const items = [store.getAccount(null, constants.XBOX), store.getAccount(null, constants.PLAYSTATION), store.getAccount(null, constants.PLAYSTATION_STAGING)];
    return items.filter(callback(table[3]).isNotNullish);
  });
};