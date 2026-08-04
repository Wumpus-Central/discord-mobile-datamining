// discord_app/modules/user_settings/FrecencyUserSettingsHooks.tsx
import noop from "noop";
import handleConnectionClosedOrResumed from "handleConnectionClosedOrResumed";

const require = arg1;
const result = require("updateUserGuildSettings").fileFinishedImporting("modules/user_settings/FrecencyUserSettingsHooks.tsx");

export const useFrecencySettings = function useFrecencySettings() {
  const effect = React.useEffect(() => {
    const FrecencyUserSettingsActionCreators = callback(table[2]).FrecencyUserSettingsActionCreators;
    const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
  }, []);
  const items = [handleConnectionClosedOrResumed];
  return require(589) /* initialize */.useStateFromStores(items, () => obj.frecencyWithoutFetchingLatest);
};