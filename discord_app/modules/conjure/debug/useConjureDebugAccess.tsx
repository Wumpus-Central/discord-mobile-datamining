// === Module 12011: useConjureDebugAccess ===

// Module 12011 (useConjureDebugAccess)
import UserSettings from "UserSettings" /* 2041 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c2 = false;
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
function useConjureDebugPaneEnabled() {
  const DeveloperMode = UserSettings.DeveloperMode;
  return DeveloperMode.useSetting() || c2;
}
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result2 = size.fileFinishedImporting("modules/conjure/debug/useConjureDebugAccess.tsx");

export { useConjureDebugPaneEnabled };
export const useConjureTraceTabEnabled = function useConjureTraceTabEnabled() {
  if (typeof useConjureDebugPaneEnabled === "function") {
    const DeveloperMode = UserSettings.DeveloperMode;
    return DeveloperMode.useSetting() || c2;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};