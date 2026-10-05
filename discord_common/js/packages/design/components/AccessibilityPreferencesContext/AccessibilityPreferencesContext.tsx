// discord_common/js/packages/design/components/AccessibilityPreferencesContext/AccessibilityPreferencesContext.tsx
import react from "../../../../../../_runtime/00019_react.js";
import size from "../../../../../../_runtime/metro/00002__.js";

const context = react.createContext({
  reducedMotion: { enabled: false, rawValue: "no-preference" },
  prefersCrossfades: false,
  forcedColors: { enabled: false, rawValue: "none" },
  alwaysShowLinkDecorations: false,
  highContrastModeEnabled: false,
  keyboardModeEnabled: true,
  switchIconsEnabled: false,
  minToastDurationMs: 0,
});
const result = size.fileFinishedImporting(
  "../discord_common/js/packages/design/components/AccessibilityPreferencesContext/AccessibilityPreferencesContext.tsx",
);

export const AccessibilityPreferencesContext = context;
