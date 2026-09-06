// === Module 9299: ApplicationCommandFrecencyHooks ===

// Module 9299 (ApplicationCommandFrecencyHooks)
import noop from "module_19" /* 19 */;
import ApplicationCommandFrecencyStore from "ApplicationCommandFrecencyStore" /* 9292 */;

const require = fn;
let ApplicationCommandFrecencyStore = fn(9292);
({ getFilteredTopCommands: c3, getTopRealCommands: closure_4 } = ApplicationCommandFrecencyStore);
const UserSettingsTypes = fn(1084).UserSettingsTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/application_commands/ApplicationCommandFrecencyHooks.tsx");

export const useTopCommands = function useTopCommands(commandContext) {
  _require = commandContext;
  const effect = noop.useEffect(() => {
    const FrecencyUserSettingsActionCreators = commandContext(stateFromStores[3]).FrecencyUserSettingsActionCreators;
    const ifUncached = FrecencyUserSettingsActionCreators.loadIfUncached(constants.FRECENCY_AND_FAVORITES_SETTINGS);
  }, []);
  const items = [ApplicationCommandFrecencyStore];
  stateFromStores = require("initialize").useStateFromStores(items, () => topCommandsWithoutLoadingLatest.getTopCommandsWithoutLoadingLatest());
  const items1 = [stateFromStores, commandContext];
  return noop.useMemo(() => React3(stateFromStores, closure_0), items1);
};
export const useTopRealCommands = function useTopRealCommands(arg0) {
  _require = arg0;
  const effect = noop.useEffect(() => {
    const FrecencyUserSettingsActionCreators = closure_0(stateFromStores[3]).FrecencyUserSettingsActionCreators;
    const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
  }, []);
  const items = [ApplicationCommandFrecencyStore];
  stateFromStores = require("initialize").useStateFromStores(items, () => topCommandsWithoutLoadingLatest.getTopCommandsWithoutLoadingLatest());
  const items1 = [stateFromStores, arg0];
  return noop.useMemo(() => React4(React3(stateFromStores, closure_0)), items1);
};