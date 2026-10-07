// === Module 11610: useCanPlayAnimatedEmoji ===

// Module 11610 (useCanPlayAnimatedEmoji)
import UserSettings from "UserSettings" /* 2028 */;
import AccessibilityPreferencesContext from "AccessibilityPreferencesContext" /* 4602 */;
import noop from "module_19" /* 19 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/custom_typing_indicator/native/useCanPlayAnimatedEmoji.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const AnimateEmoji = UserSettings.AnimateEmoji;
  return AnimateEmoji.useSetting() && !noop.useContext(AccessibilityPreferencesContext.AccessibilityPreferencesContext).reducedMotion.enabled;
}) : (() => {
  const AnimateEmoji = UserSettings.AnimateEmoji;
  return AnimateEmoji.useSetting() && !noop.useContext(AccessibilityPreferencesContext.AccessibilityPreferencesContext).reducedMotion.enabled;
});