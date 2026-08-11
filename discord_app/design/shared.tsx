// discord_app/design/shared.tsx
const result = require("isThemeLight").fileFinishedImporting("design/shared.tsx");

export const AccessibilityAnnouncer = require("module_1350").AccessibilityAnnouncer;
export const AccessibilityPreferencesContext = require("module_1350").AccessibilityPreferencesContext;
export const LOW_SATURATION_THRESHOLD = require("module_1350").LOW_SATURATION_THRESHOLD;
export const ContrastPreference = require("module_1350").ContrastPreference;
export const ForcedColorsPreference = require("module_1350").ForcedColorsPreference;
export const MotionPreference = require("module_1350").MotionPreference;
export const RoleStyle = require("module_1350").RoleStyle;
export const AccessibilityPreferences = require("module_1350").AccessibilityPreferences;
export const useThemeContext = require("module_1350").useThemeContext;
export const ThemeContextType = require("module_1350").ThemeContextType;
export const isThemeDark = require("isThemeLight").isThemeDark;
export const isThemeLight = require("isThemeLight").isThemeLight;
export const getContrastingColor = require("WCAGContrastRatios").getContrastingColor;
export const darkenColor = require("WCAGContrastRatios").darkenColor;
export const brightenColor = require("WCAGContrastRatios").brightenColor;
export const setColorOpacity = require("WCAGContrastRatios").setColorOpacity;
export const WCAGContrastRatios = require("WCAGContrastRatios").WCAGContrastRatios;