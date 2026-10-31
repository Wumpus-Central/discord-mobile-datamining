// === Module 13733: useCanPlayAnimatedEmoji ===

// Module 13733 (useCanPlayAnimatedEmoji)
import UserSettings from "UserSettings" /* 4839 */;
import AccessibilityPreferencesContext from "AccessibilityPreferencesContext" /* 5028 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/custom_typing_indicator/native/useCanPlayAnimatedEmoji.tsx");

export default function useCanPlayAnimatedEmoji() {
  const AnimateEmoji = UserSettings.AnimateEmoji;
  return AnimateEmoji.useSetting() && !noop.useContext(AccessibilityPreferencesContext.AccessibilityPreferencesContext).reducedMotion.enabled;
};