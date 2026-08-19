// === Module 7403: items ===

// Module 7403 (items)
import obj132 from "obj132" /* 2 */;
import ThemesDefault from "Themes" /* 712 */;
import GuildFeatures from "GuildFeatures" /* 1924 */;

const PremiumTypes = GuildFeatures.PremiumTypes;
const obj = { PREMIUM_TIER_0: null, PREMIUM_TIER_1: null, PREMIUM_TIER_2: null, PREMIUM_TIER_2_TRI_COLOR: null, PREMIUM_GUILD: null, PREMIUM_TIER_0_PERK_CARD: null, PREMIUM_TIER_2_OFFER_COLOR: null };
const items = [ThemesDefault.unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS, ThemesDefault.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS];
obj[0] = items;
const items1 = [ThemesDefault.unsafe_rawColors.PREMIUM_TIER_1_DARK_BLUE_FOR_GRADIENTS, ThemesDefault.unsafe_rawColors.PREMIUM_TIER_1_BLUE_FOR_GRADIENTS];
obj[1] = items1;
const items2 = [ThemesDefault.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS, ThemesDefault.unsafe_rawColors.PREMIUM_TIER_2_PINK_FOR_GRADIENTS];
obj[2] = items2;
const items3 = [ThemesDefault.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS, ThemesDefault.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2, ThemesDefault.unsafe_rawColors.PREMIUM_TIER_2_PINK_FOR_GRADIENTS];
obj[3] = items3;
const items4 = [ThemesDefault.unsafe_rawColors.GUILD_BOOSTING_BLUE_FOR_GRADIENTS, ThemesDefault.unsafe_rawColors.GUILD_BOOSTING_PURPLE_FOR_GRADIENTS];
obj[4] = items4;
obj[5] = ["#3736BB", "#4670E8", "#8377EB", "#E782F1", "#DF90AF"];
const items5 = [ThemesDefault.unsafe_rawColors.BLURPLE_50, ThemesDefault.unsafe_rawColors.PINK_60];
obj[6] = items5;
const result = obj132.fileFinishedImporting("modules/colors/native/ColorConstants.tsx");

export const Gradients = obj;
export const getPremiumGradientColor = function getPremiumGradientColor(premiumType) {
  if (PremiumTypes.TIER_0 === premiumType) {
    return obj.PREMIUM_TIER_0;
  } else if (PremiumTypes.TIER_1 === premiumType) {
    return obj.PREMIUM_TIER_1;
  } else if (PremiumTypes.TIER_2 === premiumType) {
    return obj.PREMIUM_TIER_2;
  }
};