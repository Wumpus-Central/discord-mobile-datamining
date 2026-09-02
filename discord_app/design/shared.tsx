// discord_app/design/shared.tsx
import set from "../../_runtime/00002_set.js";
import _mod1349 from "../../discord_common/js/packages/design/shared.tsx";
import isThemeLight from "utils/shared/themes.tsx";
import WCAGContrastRatios from "../../discord_common/js/packages/design/components/Colors/shared/Colors.tsx";

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
