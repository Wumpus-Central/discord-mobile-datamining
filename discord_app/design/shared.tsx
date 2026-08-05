// discord_app/design/shared.tsx
const result = require("isThemeLight").fileFinishedImporting("design/shared.tsx");

export const AccessibilityAnnouncer = require("module_4070").AccessibilityAnnouncer;
export const AccessibilityPreferencesContext = require("module_4070").AccessibilityPreferencesContext;
export const LOW_SATURATION_THRESHOLD = require("module_4070").LOW_SATURATION_THRESHOLD;
export const ContrastPreference = require("module_4070").ContrastPreference;
export const ForcedColorsPreference = require("module_4070").ForcedColorsPreference;
export const MotionPreference = require("module_4070").MotionPreference;
export const RoleStyle = require("module_4070").RoleStyle;
export const AccessibilityPreferences = require("module_4070").AccessibilityPreferences;
export const useThemeContext = require("module_4070").useThemeContext;
export const ThemeContextType = require("module_4070").ThemeContextType;
export const isThemeDark = require("isThemeLight").isThemeDark;
export const isThemeLight = require("isThemeLight").isThemeLight;
export const getContrastingColor = require("WCAGContrastRatios").getContrastingColor;
export const darkenColor = require("WCAGContrastRatios").darkenColor;
export const brightenColor = require("WCAGContrastRatios").brightenColor;
export const setColorOpacity = require("WCAGContrastRatios").setColorOpacity;
export const WCAGContrastRatios = require("WCAGContrastRatios").WCAGContrastRatios;