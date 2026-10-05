// discord_app/modules/dismissible_content/DismissibleContentFrameworkActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/dismissible_content/DismissibleContentFrameworkActionCreators.tsx");

export const handleDCShownToUser = function handleDCShownToUser(dismissibleContent, guildId) {
  const obj = DispatcherDefault;
  const obj2 = { type: "DCF_HANDLE_DC_SHOWN", dismissibleContent, guildId };
  obj.dispatch(obj2);
};
export const handleDCDismissed = function handleDCDismissed(dismissibleContent, guildId) {
  const obj = DispatcherDefault;
  const obj2 = { type: "DCF_HANDLE_DC_DISMISSED", dismissibleContent, guildId };
  obj.dispatch(obj2);
};
export const resetDismissibleContentFrameworkStore = function resetDismissibleContentFrameworkStore() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "DCF_RESET" });
};
export const overrideDismissibleContentFramework = function overrideDismissibleContentFramework(value) {
  const obj = DispatcherDefault;
  const obj2 = { type: "DCF_DAILY_CAP_OVERRIDE", value };
  obj.dispatch(obj2);
};
export const overrideNewUserMinAgeRequired = function overrideNewUserMinAgeRequired(value) {
  const obj = DispatcherDefault;
  const obj2 = { type: "DCF_NEW_USER_MIN_AGE_REQUIRED_OVERRIDE", value };
  obj.dispatch(obj2);
};
export const overrideDCFLastDCDismissed = function overrideDCFLastDCDismissed(dismissibleContent, guildId) {
  const obj = DispatcherDefault;
  const obj2 = { type: "DCF_OVERRIDE_LAST_DC_DISMISSED", dismissibleContent, guildId };
  obj.dispatch(obj2);
};
