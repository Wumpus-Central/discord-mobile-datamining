// discord_app/modules/premium/native/usePremiumPrimaryGradientColors.tsx
const result = require("set").fileFinishedImporting("modules/premium/native/usePremiumPrimaryGradientColors.tsx");

export default function usePremiumPrimaryGradientColors() {
  const items = [require("../../../design/tokens/native/useToken.tsx") /* map */.useToken(require("../../../../discord_common/js/packages/tokens/native.tsx").colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT), , ];
  const obj = require("../../../design/tokens/native/useToken.tsx") /* map */;
  items[1] = require("../../../design/tokens/native/useToken.tsx") /* map */.useToken(require("../../../../discord_common/js/packages/tokens/native.tsx").colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2);
  const obj2 = require("../../../design/tokens/native/useToken.tsx") /* map */;
  items[2] = require("../../../design/tokens/native/useToken.tsx") /* map */.useToken(require("../../../../discord_common/js/packages/tokens/native.tsx").colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PINK_FOR_GRADIENT);
  return items;
};