// === Module 10494: DismissibleContentFrameworkActionCreators ===

// Module 10494 (DismissibleContentFrameworkActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/dismissible_content/DismissibleContentFrameworkActionCreators.tsx");

export const handleDCShownToUser = function handleDCShownToUser(dismissibleContent, guildId) {
  DispatcherDefault.dispatch({ type: "DCF_HANDLE_DC_SHOWN", dismissibleContent, guildId });
};
export const handleDCDismissed = function handleDCDismissed(dismissibleContent, guildId) {
  DispatcherDefault.dispatch({ type: "DCF_HANDLE_DC_DISMISSED", dismissibleContent, guildId });
};
export const resetDismissibleContentFrameworkStore = function resetDismissibleContentFrameworkStore() {
  DispatcherDefault.dispatch({ type: "DCF_RESET" });
};
export const overrideDismissibleContentFramework = function overrideDismissibleContentFramework(value) {
  DispatcherDefault.dispatch({ type: "DCF_DAILY_CAP_OVERRIDE", value });
};
export const overrideNewUserMinAgeRequired = function overrideNewUserMinAgeRequired(value) {
  DispatcherDefault.dispatch({ type: "DCF_NEW_USER_MIN_AGE_REQUIRED_OVERRIDE", value });
};
export const overrideDCFLastDCDismissed = function overrideDCFLastDCDismissed(dismissibleContent, stateFromStores) {
  DispatcherDefault.dispatch({ type: "DCF_OVERRIDE_LAST_DC_DISMISSED", dismissibleContent, guildId: stateFromStores });
};