// === Module 4592: useBadgeTextVariant ===

// Module 4592 (useBadgeTextVariant)
import ThemeContext from "ThemeContext" /* 4593 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const obj = ThemeContext;
  const themeContext = obj.useThemeContext();
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
}) : (() => {
  const obj = ThemeContext;
  const themeContext = obj.useThemeContext();
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
});
const result = size.fileFinishedImporting("../discord_common/js/packages/design/hooks/useBadgeTextVariant.native.tsx");

export const useBadgeTextVariant = tmp2;