// === Module 10237: DismissibleContentFrameworkActionCreators ===

// Module 10237 (DismissibleContentFrameworkActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/dismissible_content/DismissibleContentFrameworkActionCreators.tsx");

export const handleDCShownToUser = function handleDCShownToUser(dismissibleContent, guildId) {
  const obj = { type: "DCF_HANDLE_DC_SHOWN", dismissibleContent, guildId };
  obj.dispatch(obj);
};
export const handleDCDismissed = function handleDCDismissed(dismissibleContent, guildId) {
  const obj = { type: "DCF_HANDLE_DC_DISMISSED", dismissibleContent, guildId };
  obj.dispatch(obj);
};
export const resetDismissibleContentFrameworkStore = function resetDismissibleContentFrameworkStore() {
  DispatcherDefault.dispatch({ type: "DCF_RESET" });
};
export const overrideDismissibleContentFramework = function overrideDismissibleContentFramework(value) {
  const obj = { type: "DCF_DAILY_CAP_OVERRIDE", value };
  obj.dispatch(obj);
};
export const overrideNewUserMinAgeRequired = function overrideNewUserMinAgeRequired(value) {
  const obj = { type: "DCF_NEW_USER_MIN_AGE_REQUIRED_OVERRIDE", value };
  obj.dispatch(obj);
};
export const overrideDCFLastDCDismissed = function overrideDCFLastDCDismissed(dismissibleContent, stateFromStores) {
  const obj = { type: "DCF_OVERRIDE_LAST_DC_DISMISSED", dismissibleContent, guildId: stateFromStores };
  obj.dispatch(obj);
};