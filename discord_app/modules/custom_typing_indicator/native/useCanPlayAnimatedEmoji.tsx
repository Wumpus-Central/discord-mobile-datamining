// === Module 13955: useCanPlayAnimatedEmoji ===

// Module 13955 (useCanPlayAnimatedEmoji)
import UserSettings from "UserSettings" /* 4995 */;
import AccessibilityPreferencesContext from "AccessibilityPreferencesContext" /* 5184 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/custom_typing_indicator/native/useCanPlayAnimatedEmoji.tsx");

export default function useCanPlayAnimatedEmoji() {
  const AnimateEmoji = UserSettings.AnimateEmoji;
  return AnimateEmoji.useSetting() && !noop.useContext(AccessibilityPreferencesContext.AccessibilityPreferencesContext).reducedMotion.enabled;
};