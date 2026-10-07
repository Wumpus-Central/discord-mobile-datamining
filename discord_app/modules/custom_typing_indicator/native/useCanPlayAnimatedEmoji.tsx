// discord_app/modules/custom_typing_indicator/native/useCanPlayAnimatedEmoji.tsx
import UserSettings from "../../user_settings/UserSettings.tsx";
import AccessibilityPreferencesContext from "../../../../discord_common/js/packages/design/components/AccessibilityPreferencesContext/AccessibilityPreferencesContext.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/custom_typing_indicator/native/useCanPlayAnimatedEmoji.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const AnimateEmoji = UserSettings.AnimateEmoji;
      return (
        AnimateEmoji.useSetting() &&
        !noop.useContext(AccessibilityPreferencesContext.AccessibilityPreferencesContext).reducedMotion.enabled
      );
    }
  : () => {
      const AnimateEmoji = UserSettings.AnimateEmoji;
      return (
        AnimateEmoji.useSetting() &&
        !noop.useContext(AccessibilityPreferencesContext.AccessibilityPreferencesContext).reducedMotion.enabled
      );
    };
