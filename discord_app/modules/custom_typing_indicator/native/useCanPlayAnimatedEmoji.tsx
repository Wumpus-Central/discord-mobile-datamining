// === Module 11656: useCanPlayAnimatedEmoji ===

// Module 11656 (useCanPlayAnimatedEmoji)
import UserSettings from "UserSettings" /* 2041 */;
import AccessibilityPreferencesContext from "AccessibilityPreferencesContext" /* 4834 */;
import noop from "module_19" /* 19 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/custom_typing_indicator/native/useCanPlayAnimatedEmoji.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useCanPlayAnimatedEmoji() {
  const AnimateEmoji = UserSettings.AnimateEmoji;
  return AnimateEmoji.useSetting() && !noop.useContext(AccessibilityPreferencesContext.AccessibilityPreferencesContext).reducedMotion.enabled;
}) : (function useCanPlayAnimatedEmoji() {
  const AnimateEmoji = UserSettings.AnimateEmoji;
  return AnimateEmoji.useSetting() && !noop.useContext(AccessibilityPreferencesContext.AccessibilityPreferencesContext).reducedMotion.enabled;
});