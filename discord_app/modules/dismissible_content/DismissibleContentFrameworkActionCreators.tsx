// discord_app/modules/dismissible_content/DismissibleContentFrameworkActionCreators.tsx
import { dispatcher } from "../../Dispatcher.tsx";
const result = require("set").fileFinishedImporting("modules/dismissible_content/DismissibleContentFrameworkActionCreators.tsx");

export const handleDCShownToUser = function handleDCShownToUser(dismissibleContent, guildId) {
  let obj = dispatcher;
  obj = { type: "DCF_HANDLE_DC_SHOWN", dismissibleContent, guildId };
  obj.dispatch(obj);
};
export const handleDCDismissed = function handleDCDismissed(dismissibleContent, guildId) {
  let obj = dispatcher;
  obj = { type: "DCF_HANDLE_DC_DISMISSED", dismissibleContent, guildId };
  obj.dispatch(obj);
};
export const resetDismissibleContentFrameworkStore = function resetDismissibleContentFrameworkStore() {
  dispatcher.dispatch({ type: "DCF_RESET" });
};
export const overrideDismissibleContentFramework = function overrideDismissibleContentFramework(value) {
  let obj = dispatcher;
  obj = { type: "DCF_DAILY_CAP_OVERRIDE", value };
  obj.dispatch(obj);
};
export const overrideNewUserMinAgeRequired = function overrideNewUserMinAgeRequired(value) {
  let obj = dispatcher;
  obj = { type: "DCF_NEW_USER_MIN_AGE_REQUIRED_OVERRIDE", value };
  obj.dispatch(obj);
};
export const overrideDCFLastDCDismissed = function overrideDCFLastDCDismissed(dismissibleContent, guildId) {
  let obj = dispatcher;
  obj = { type: "DCF_OVERRIDE_LAST_DC_DISMISSED", dismissibleContent, guildId };
  obj.dispatch(obj);
};