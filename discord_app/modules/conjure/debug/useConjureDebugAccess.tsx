// === Module 18530: useConjureDebugAccess ===

// Module 18530 (useConjureDebugAccess)
import UserSettings from "UserSettings" /* 4837 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/debug/useConjureDebugAccess.tsx");

export function canOpenConjureDebugPane() {
  const DeveloperMode = UserSettings.DeveloperMode;
  return DeveloperMode.getSetting() || false;
}
export function useConjureDebugPaneEnabled() {
  const DeveloperMode = UserSettings.DeveloperMode;
  return DeveloperMode.useSetting() || false;
}
export function useConjureTraceTabEnabled() {
  const DeveloperMode = UserSettings.DeveloperMode;
  return DeveloperMode.useSetting() || false;
}