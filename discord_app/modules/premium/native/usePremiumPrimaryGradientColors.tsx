// === Module 12872: usePremiumPrimaryGradientColors ===

// Module 12872 (usePremiumPrimaryGradientColors)
import obj132 from "obj132" /* 2 */;
import ThemesDefault from "Themes" /* 712 */;
import map from "map" /* 4097 */;

const result = obj132.fileFinishedImporting("modules/premium/native/usePremiumPrimaryGradientColors.tsx");

export default function usePremiumPrimaryGradientColors() {
  const items = [map.useToken(ThemesDefault.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT), , ];
  items[1] = map.useToken(ThemesDefault.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2);
  items[2] = map.useToken(ThemesDefault.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PINK_FOR_GRADIENT);
  return items;
};