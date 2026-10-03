// === Module 11713: useClickOnHomeActivityOpensAppDetails ===

// Module 11713 (useClickOnHomeActivityOpensAppDetails)
import UserSettings from "UserSettings" /* 2028 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/app_launcher/hooks/useClickOnHomeActivityOpensAppDetails.tsx");

export const useClickOnHomeActivityOpensAppDetails = () => {
  const DeveloperMode = UserSettings.DeveloperMode;
  return DeveloperMode.useSetting();
};