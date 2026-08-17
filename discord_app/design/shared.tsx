// discord_app/design/shared.tsx
import set from "set" /* 2 */;
import _mod1350 from "module_1350" /* 1350 */;
import isThemeLight from "isThemeLight" /* 1364 */;
import WCAGContrastRatios from "WCAGContrastRatios" /* 1365 */;

const result = set.fileFinishedImporting("design/shared.tsx");

export const AccessibilityAnnouncer = _mod1350.AccessibilityAnnouncer;
export const AccessibilityPreferencesContext = _mod1350.AccessibilityPreferencesContext;
export const LOW_SATURATION_THRESHOLD = _mod1350.LOW_SATURATION_THRESHOLD;
export const ContrastPreference = _mod1350.ContrastPreference;
export const ForcedColorsPreference = _mod1350.ForcedColorsPreference;
export const MotionPreference = _mod1350.MotionPreference;
export const RoleStyle = _mod1350.RoleStyle;
export const AccessibilityPreferences = _mod1350.AccessibilityPreferences;
export const useThemeContext = _mod1350.useThemeContext;
export const ThemeContextType = _mod1350.ThemeContextType;
export const isThemeDark = isThemeLight.isThemeDark;
export const isThemeLight = isThemeLight.isThemeLight;
export const getContrastingColor = WCAGContrastRatios.getContrastingColor;
export const darkenColor = WCAGContrastRatios.darkenColor;
export const brightenColor = WCAGContrastRatios.brightenColor;
export const setColorOpacity = WCAGContrastRatios.setColorOpacity;
export const WCAGContrastRatios = WCAGContrastRatios.WCAGContrastRatios;