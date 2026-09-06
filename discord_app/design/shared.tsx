// === Module 4411: AccessibilityAnnouncer ===

// Module 4411 (AccessibilityAnnouncer)
import set from "set" /* 2 */;
import isThemeLight from "isThemeLight" /* 4269 */;
import WCAGContrastRatios from "WCAGContrastRatios" /* 4376 */;
import _mod4412 from "module_4412" /* 4412 */;

const result = set.fileFinishedImporting("design/shared.tsx");

export const AccessibilityAnnouncer = _mod4412.AccessibilityAnnouncer;
export const AccessibilityPreferencesContext = _mod4412.AccessibilityPreferencesContext;
export const LOW_SATURATION_THRESHOLD = _mod4412.LOW_SATURATION_THRESHOLD;
export const ContrastPreference = _mod4412.ContrastPreference;
export const ForcedColorsPreference = _mod4412.ForcedColorsPreference;
export const MotionPreference = _mod4412.MotionPreference;
export const RoleStyle = _mod4412.RoleStyle;
export const AccessibilityPreferences = _mod4412.AccessibilityPreferences;
export const useThemeContext = _mod4412.useThemeContext;
export const ThemeContextType = _mod4412.ThemeContextType;
export const isThemeDark = isThemeLight.isThemeDark;
export const isThemeLight = isThemeLight.isThemeLight;
export const getContrastingColor = WCAGContrastRatios.getContrastingColor;
export const darkenColor = WCAGContrastRatios.darkenColor;
export const brightenColor = WCAGContrastRatios.brightenColor;
export const setColorOpacity = WCAGContrastRatios.setColorOpacity;
export const WCAGContrastRatios = WCAGContrastRatios.WCAGContrastRatios;