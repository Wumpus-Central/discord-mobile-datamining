// discord_app/modules/dismissible_content/DismissibleContentFrameworkActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
