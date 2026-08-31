// === Module 8123: useTopCommands ===

// Module 8123 (useTopCommands)
import closure_2 from "noop" /* 19 */;
import handleUserSettingsProtoStoreChange from "handleUserSettingsProtoStoreChange" /* 8116 */;
import closure_5 from "handleUserSettingsProtoStoreChange" /* 8116 */;
import { UserSettingsTypes } from "MAX_FAVORITES" /* 685 */;

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