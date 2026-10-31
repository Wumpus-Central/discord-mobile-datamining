// === Module 5690: DismissibleContentFrameworkActionCreators ===

// Module 5690 (DismissibleContentFrameworkActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import DismissibleContentShownStateStore from "DismissibleContentShownStateStore" /* 4855 */;
import size from "module_2" /* 2 */;

const resetFatigueCooldown = DismissibleContentShownStateStore.resetFatigueCooldown;
const result = size.fileFinishedImporting("modules/dismissible_content/DismissibleContentFrameworkActionCreators.tsx");

export function handleDCShownToUser(dismissibleContent, guildId) {
  DispatcherDefault.dispatch({ type: "DCF_HANDLE_DC_SHOWN", dismissibleContent, guildId });
}
export function handleDCDismissed(dismissibleContent, guildId) {
  DispatcherDefault.dispatch({ type: "DCF_HANDLE_DC_DISMISSED", dismissibleContent, guildId });
}
export function handleDCActioned(dismissibleContent) {
  DispatcherDefault.dispatch({ type: "DCF_HANDLE_DC_ACTIONED", dismissibleContent });
}
export function resetDismissibleContentFrameworkStore() {
  DispatcherDefault.dispatch({ type: "DCF_RESET" });
}
export function overrideDismissibleContentFramework(value) {
  DispatcherDefault.dispatch({ type: "DCF_DAILY_CAP_OVERRIDE", value });
}
export function overrideNewUserMinAgeRequired(value) {
  DispatcherDefault.dispatch({ type: "DCF_NEW_USER_MIN_AGE_REQUIRED_OVERRIDE", value });
}
export function overrideUpsellBackoff(value) {
  DispatcherDefault.dispatch({ type: "DCF_UPSELL_BACKOFF_OVERRIDE", value });
  if (value) {
    resetFatigueCooldown();
  }
  const obj2 = { type: "DCF_UPSELL_BACKOFF_OVERRIDE", value };
}
export function overrideDCFLastDCDismissed(dismissibleContent, stateFromStores) {
  DispatcherDefault.dispatch({ type: "DCF_OVERRIDE_LAST_DC_DISMISSED", dismissibleContent, guildId: stateFromStores });
}