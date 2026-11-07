// === Module 12374: useConjureDebugAccess ===

// Module 12374 (useConjureDebugAccess)
import UserSettings from "UserSettings" /* 4965 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/debug/useConjureDebugAccess.tsx");

export function useConjureDebugPaneEnabled() {
  const DeveloperMode = UserSettings.DeveloperMode;
  return DeveloperMode.useSetting() || false;
}
export function useConjureTraceTabEnabled() {
  const DeveloperMode = UserSettings.DeveloperMode;
  return DeveloperMode.useSetting() || false;
}