// discord_common/js/packages/design/components/AccessibilityPreferencesContext/AccessibilityPreferencesContext.tsx
import importAllResult from "noop" /* 19 */;

const context = importAllResult.createContext({ reducedMotion: { enabled: false, rawValue: "no-preference" }, prefersCrossfades: false, forcedColors: { enabled: false, rawValue: "none" }, alwaysShowLinkDecorations: false, highContrastModeEnabled: false, keyboardModeEnabled: true, switchIconsEnabled: false });
const result = require("set").fileFinishedImporting("../discord_common/js/packages/design/components/AccessibilityPreferencesContext/AccessibilityPreferencesContext.tsx");

export const AccessibilityPreferencesContext = context;