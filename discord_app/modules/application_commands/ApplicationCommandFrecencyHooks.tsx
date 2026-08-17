// discord_app/modules/application_commands/ApplicationCommandFrecencyHooks.tsx
import closure_2 from "../../../_runtime/00019_noop.js";
import handleUserSettingsProtoStoreChange from "ApplicationCommandFrecencyStore.tsx";
import closure_5 from "ApplicationCommandFrecencyStore.tsx";
import { UserSettingsTypes } from "../user_settings/UserSettingsConstants.tsx";

const require = arg1;
({ getFilteredTopCommands: c3, getTopRealCommands: c4 } = handleUserSettingsProtoStoreChange);
const result = require("set").fileFinishedImporting("modules/application_commands/ApplicationCommandFrecencyHooks.tsx");

export const useTopCommands = function useTopCommands(commandContext) {
  const _require = commandContext;
  const effect = React.useEffect(() => {
    const FrecencyUserSettingsActionCreators = commandContext(stateFromStores[3]).FrecencyUserSettingsActionCreators;
    const ifUncached = FrecencyUserSettingsActionCreators.loadIfUncached(constants.FRECENCY_AND_FAVORITES_SETTINGS);
  }, []);
  const items = [closure_5];
  stateFromStores = _require(stateFromStores[4]).useStateFromStores(items, () => topCommandsWithoutLoadingLatest.getTopCommandsWithoutLoadingLatest());
  const items1 = [stateFromStores, commandContext];
  return React.useMemo(() => closure_1_3(stateFromStores, closure_0), items1);
};
export const useTopRealCommands = function useTopRealCommands(arg0) {
  const _require = arg0;
  const effect = React.useEffect(() => {
    const FrecencyUserSettingsActionCreators = callback(stateFromStores[3]).FrecencyUserSettingsActionCreators;
    const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
  }, []);
  const items = [closure_5];
  stateFromStores = _require(stateFromStores[4]).useStateFromStores(items, () => topCommandsWithoutLoadingLatest.getTopCommandsWithoutLoadingLatest());
  const items1 = [stateFromStores, arg0];
  return React.useMemo(() => closure_1_4(closure_1_3(stateFromStores, closure_0)), items1);
};