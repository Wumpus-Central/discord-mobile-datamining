// discord_app/modules/game_console/useGameConsoleAccounts.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import set from "../../stores/ConnectedAccountsStore.tsx";
import { PlatformTypes } from "../../Constants.tsx";

require = fn;
const result = require("obj132").fileFinishedImporting("modules/game_console/useGameConsoleAccounts.tsx");

export default function useGameConsoleAccounts() {
  let items = [closure_2];
  return initialize.useStateFromStoresArray(items, () => {
    const items = [store.getAccount(null, constants.XBOX), store.getAccount(null, constants.PLAYSTATION), store.getAccount(null, constants.PLAYSTATION_STAGING)];
    return items.filter(callback(table[3]).isNotNullish);
  });
};