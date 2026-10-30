// discord_app/modules/conjure/debug/useConjureDebugAccess.tsx
import UserSettings from "../../user_settings/UserSettings.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/conjure/debug/useConjureDebugAccess.tsx");

export function useConjureDebugPaneEnabled() {
  const DeveloperMode = UserSettings.DeveloperMode;
  return DeveloperMode.useSetting() || false;
}
export function useConjureTraceTabEnabled() {
  const DeveloperMode = UserSettings.DeveloperMode;
  return DeveloperMode.useSetting() || false;
}
