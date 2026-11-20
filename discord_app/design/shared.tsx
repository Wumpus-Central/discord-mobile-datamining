// === Module 4801: shared ===

// Module 4801 (shared)
import design_shared from "design/shared" /* 4802 */;
import StickerTypes from "StickerTypes" /* 4815 */;
import themes from "themes" /* 4816 */;
import shared_Colors from "shared/Colors" /* 4817 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("design/shared.tsx");

export const AccessibilityAnnouncer = design_shared.AccessibilityAnnouncer;
export const StickerFormat = StickerTypes.StickerFormat;
export const MetaStickerType = StickerTypes.MetaStickerType;
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
export const getContrastingColor = shared_Colors.getContrastingColor;
export const darkenColor = shared_Colors.darkenColor;
export const brightenColor = shared_Colors.brightenColor;
export const setColorOpacity = shared_Colors.setColorOpacity;
export const WCAGContrastRatios = shared_Colors.WCAGContrastRatios;