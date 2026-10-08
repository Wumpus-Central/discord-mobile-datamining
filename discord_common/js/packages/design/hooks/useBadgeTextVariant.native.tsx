// discord_common/js/packages/design/hooks/useBadgeTextVariant.native.tsx
import ThemeContext from "../components/ThemeContextProvider/ThemeContext.tsx";
import ReactCompilerGating from "../../../../../discord_app/modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("../discord_common/js/packages/design/hooks/useBadgeTextVariant.native.tsx");

export const useBadgeTextVariant = ReactCompilerGating.isReactCompilerEnabled()
  ? function useBadgeTextVariant() {
      const themeContext = ThemeContext.useThemeContext();
      let enabledExperiments;
      if (themeContext != null) {
        enabledExperiments = themeContext.enabledExperiments;
      }
      let hasItem;
      if (enabledExperiments != null) {
        hasItem = enabledExperiments.includes("mana-type-consolidation");
      }
      let str2 = "eyebrow";
      if (true === hasItem) {
        str2 = "experimental/body-xs/semibold";
      }
      return str2;
    }
  : function useBadgeTextVariant() {
      const themeContext = ThemeContext.useThemeContext();
      let enabledExperiments;
      if (themeContext != null) {
        enabledExperiments = themeContext.enabledExperiments;
      }
      let hasItem;
      if (enabledExperiments != null) {
        hasItem = enabledExperiments.includes("mana-type-consolidation");
      }
      let str2 = "eyebrow";
      if (true === hasItem) {
        str2 = "experimental/body-xs/semibold";
      }
      return str2;
    };
