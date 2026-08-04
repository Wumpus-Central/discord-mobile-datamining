// discord_app/modules/application_commands/ApplicationCommandFrecencyHooks.tsx
import noop from "noop";
import handleUserSettingsProtoStoreChange from "handleUserSettingsProtoStoreChange";
import closure_5 from "handleUserSettingsProtoStoreChange";
import { UserSettingsTypes } from "MAX_FAVORITES";

let c3;
let c4;
const require = arg1;
({ getFilteredTopCommands: c3, getTopRealCommands: c4 } = handleUserSettingsProtoStoreChange);
const result = require("MAX_FAVORITES").fileFinishedImporting("modules/application_commands/ApplicationCommandFrecencyHooks.tsx");

export const useTopCommands = function useTopCommands(commandContext) {
  const _require = commandContext;
  const effect = React.useEffect(() => {
    const FrecencyUserSettingsActionCreators = commandContext(stateFromStores[3]).FrecencyUserSettingsActionCreators;
    const ifUncached = FrecencyUserSettingsActionCreators.loadIfUncached(constants.FRECENCY_AND_FAVORITES_SETTINGS);
  }, []);
  const items = [closure_5];
  stateFromStores = _require(stateFromStores[4]).useStateFromStores(items, () => topCommandsWithoutLoadingLatest.getTopCommandsWithoutLoadingLatest());
  const items1 = [stateFromStores, commandContext];
  return React.useMemo(() => outer1_3(stateFromStores, closure_0), items1);
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
  return React.useMemo(() => outer1_4(outer1_3(stateFromStores, closure_0)), items1);
};