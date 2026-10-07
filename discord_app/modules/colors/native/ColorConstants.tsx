// discord_app/modules/colors/native/ColorConstants.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import PremiumConstants from "../../premium/PremiumConstants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const PremiumTypes = PremiumConstants.PremiumTypes;
const Gradients = {
  PREMIUM_TIER_0: null,
  PREMIUM_TIER_1: null,
  PREMIUM_TIER_2: null,
  PREMIUM_TIER_2_TRI_COLOR: null,
  PREMIUM_GUILD: null,
  PREMIUM_TIER_0_PERK_CARD: null,
  PREMIUM_TIER_2_OFFER_COLOR: null,
};
const items = [
  nativeDefault.unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS,
  nativeDefault.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS,
];
Gradients.PREMIUM_TIER_0 = items;
const items1 = [
  nativeDefault.unsafe_rawColors.PREMIUM_TIER_1_DARK_BLUE_FOR_GRADIENTS,
  nativeDefault.unsafe_rawColors.PREMIUM_TIER_1_BLUE_FOR_GRADIENTS,
];
Gradients.PREMIUM_TIER_1 = items1;
const items2 = [
  nativeDefault.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS,
  nativeDefault.unsafe_rawColors.PREMIUM_TIER_2_PINK_FOR_GRADIENTS,
];
Gradients.PREMIUM_TIER_2 = items2;
const items3 = [
  nativeDefault.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS,
  nativeDefault.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2,
  nativeDefault.unsafe_rawColors.PREMIUM_TIER_2_PINK_FOR_GRADIENTS,
];
Gradients.PREMIUM_TIER_2_TRI_COLOR = items3;
const items4 = [
  nativeDefault.unsafe_rawColors.GUILD_BOOSTING_BLUE_FOR_GRADIENTS,
  nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PURPLE_FOR_GRADIENTS,
];
Gradients.PREMIUM_GUILD = items4;
Gradients.PREMIUM_TIER_0_PERK_CARD = ["#3736BB", "#4670E8", "#8377EB", "#E782F1", "#DF90AF"];
const items5 = [nativeDefault.unsafe_rawColors.BLURPLE_50, nativeDefault.unsafe_rawColors.PINK_60];
Gradients.PREMIUM_TIER_2_OFFER_COLOR = items5;
const result = size.fileFinishedImporting("modules/colors/native/ColorConstants.tsx");

export { Gradients };
export const getPremiumGradientColor = function getPremiumGradientColor(premiumType) {
  if (PremiumTypes.TIER_0 === premiumType) {
    return obj.PREMIUM_TIER_0;
  } else if (PremiumTypes.TIER_1 === premiumType) {
    return obj.PREMIUM_TIER_1;
  } else if (PremiumTypes.TIER_2 === premiumType) {
    return obj.PREMIUM_TIER_2;
  }
};
