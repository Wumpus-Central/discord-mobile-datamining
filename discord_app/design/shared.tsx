// discord_app/design/shared.tsx
import themes from "utils/shared/themes.tsx";
import Colors from "../../discord_common/js/packages/design/components/Colors/shared/Colors.tsx";
import design_shared from "../../discord_common/js/packages/design/shared.tsx";
import size from "../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("design/shared.tsx");

export const AccessibilityAnnouncer = design_shared.AccessibilityAnnouncer;
export const AccessibilityPreferencesContext = design_shared.AccessibilityPreferencesContext;
export const LOW_SATURATION_THRESHOLD = design_shared.LOW_SATURATION_THRESHOLD;
export const ContrastPreference = design_shared.ContrastPreference;
export const ForcedColorsPreference = design_shared.ForcedColorsPreference;
export const MotionPreference = design_shared.MotionPreference;
export const RoleStyle = design_shared.RoleStyle;
export const AccessibilityPreferences = design_shared.AccessibilityPreferences;
export const useThemeContext = design_shared.useThemeContext;
export const ThemeContextType = design_shared.ThemeContextType;
export const isThemeDark = themes.isThemeDark;
export const isThemeLight = themes.isThemeLight;
export const getContrastingColor = Colors.getContrastingColor;
export const darkenColor = Colors.darkenColor;
export const brightenColor = Colors.brightenColor;
export const setColorOpacity = Colors.setColorOpacity;
export const WCAGContrastRatios = Colors.WCAGContrastRatios;
