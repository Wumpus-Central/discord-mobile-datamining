// === Module 1362: AccessibilityAnnouncer ===

// Module 1362 (AccessibilityAnnouncer)
import set from "set" /* 2 */;
import _mod1349 from "module_1349" /* 1349 */;
import isThemeLight from "isThemeLight" /* 1363 */;
import WCAGContrastRatios from "WCAGContrastRatios" /* 1364 */;

const result = set.fileFinishedImporting("design/shared.tsx");

export const AccessibilityAnnouncer = _mod1349.AccessibilityAnnouncer;
export const AccessibilityPreferencesContext = _mod1349.AccessibilityPreferencesContext;
export const LOW_SATURATION_THRESHOLD = _mod1349.LOW_SATURATION_THRESHOLD;
export const ContrastPreference = _mod1349.ContrastPreference;
export const ForcedColorsPreference = _mod1349.ForcedColorsPreference;
export const MotionPreference = _mod1349.MotionPreference;
export const RoleStyle = _mod1349.RoleStyle;
export const AccessibilityPreferences = _mod1349.AccessibilityPreferences;
export const useThemeContext = _mod1349.useThemeContext;
export const ThemeContextType = _mod1349.ThemeContextType;
export const isThemeDark = isThemeLight.isThemeDark;
export const isThemeLight = isThemeLight.isThemeLight;
export const getContrastingColor = WCAGContrastRatios.getContrastingColor;
export const darkenColor = WCAGContrastRatios.darkenColor;
export const brightenColor = WCAGContrastRatios.brightenColor;
export const setColorOpacity = WCAGContrastRatios.setColorOpacity;
export const WCAGContrastRatios = WCAGContrastRatios.WCAGContrastRatios;