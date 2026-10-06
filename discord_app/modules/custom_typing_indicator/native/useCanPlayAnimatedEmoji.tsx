// discord_app/modules/custom_typing_indicator/native/useCanPlayAnimatedEmoji.tsx
import UserSettings from "../../user_settings/UserSettings.tsx";
import react2 from "../../../../discord_common/js/packages/design/components/AccessibilityPreferencesContext/AccessibilityPreferencesContext.tsx";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const enabled = react.useContext(react2.AccessibilityPreferencesContext).reducedMotion.enabled;
      const AnimateEmoji = UserSettings.AnimateEmoji;
      const tmp = AnimateEmoji.useSetting() && !enabled;
      return tmp;
    }
  : () => {
      const enabled = react.useContext(react2.AccessibilityPreferencesContext).reducedMotion.enabled;
      const AnimateEmoji = UserSettings.AnimateEmoji;
      const tmp = AnimateEmoji.useSetting() && !enabled;
      return tmp;
    };
const result = size.fileFinishedImporting("modules/custom_typing_indicator/native/useCanPlayAnimatedEmoji.tsx");

export default tmp2;
