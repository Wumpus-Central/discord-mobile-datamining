// === Module 5081: useBadgeTextVariant ===

// Module 5081 (useBadgeTextVariant)
import ThemeContext from "ThemeContext" /* 5031 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/design/hooks/useBadgeTextVariant.native.tsx");

export function useBadgeTextVariant() {
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