// discord_app/modules/game_console/useGameConsoleAccounts.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import GlobalUtils from "../../utils/GlobalUtils.tsx";
import ConnectedAccountsStore from "../../stores/ConnectedAccountsStore.tsx";

require = fn;
const PlatformTypes = fn(1074).PlatformTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_console/useGameConsoleAccounts.tsx");

export default function useGameConsoleAccounts() {
  let items = [ConnectedAccountsStore];
  return initialize.useStateFromStoresArray(items, () => {
    const items = [
      ConnectedAccountsStore.getAccount(null, constants.XBOX),
      ConnectedAccountsStore.getAccount(null, constants.PLAYSTATION),
      ConnectedAccountsStore.getAccount(null, constants.PLAYSTATION_STAGING),
    ];
    return items.filter(GlobalUtils.isNotNullish);
  });
}
