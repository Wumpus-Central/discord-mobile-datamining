// discord_app/modules/premium/perks_state/PremiumPerkGates.tsx
import PerksStateUtils from "PerksStateUtils.tsx";
import user2 from "../../../../discord_common/js/packages/protos/discord_protos/users/v1/user.tsx";
import ProductCatalog from "../ProductCatalog.tsx";
import NitroFileUploadExperiments from "../experiments/NitroFileUploadExperiments.tsx";
import FileSizeUtils from "../../../utils/FileSizeUtils.tsx";
import PremiumConstants from "../PremiumConstants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

({ PremiumTypes: c2, PremiumUserLimits: c3 } = PremiumConstants);
const StreamQuality = { MID: "mid", HIGH: "high" };
const result = size.fileFinishedImporting("modules/premium/perks_state/PremiumPerkGates.tsx");

export { StreamQuality };
export const getMaxFileSizeForPremiumType = function getMaxFileSizeForPremiumType(TIER_2, arg1) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = { useSpace: true };
  }
  if (TIER_2 === TIER_2.TIER_2) {
    let fileSize = NitroFileUploadExperiments.getNitroFileUploadLimitBytes({
      location: "getMaxFileSizeForPremiumType",
    });
  } else {
    fileSize = React3[TIER_2].fileSize;
  }
  return FileSizeUtils.formatSize(fileSize / 1024, { useKibibytes: true, useSpace: obj.useSpace });
};
export const canUseAnimatedEmojis = function canUseAnimatedEmojis(currentUser) {
  return ProductCatalog.canUserUse(ProductCatalog.ANIMATED_EMOJIS, currentUser);
};
export const canUseEmojisEverywhere = function canUseEmojisEverywhere(currentUser) {
  return ProductCatalog.canUserUse(ProductCatalog.EMOJIS_EVERYWHERE, currentUser);
};
export const canUseSoundboardEverywhere = function canUseSoundboardEverywhere(currentUser) {
  return ProductCatalog.canUserUse(ProductCatalog.SOUNDBOARD_EVERYWHERE, currentUser);
};
export const canUseCustomCallSounds = function canUseCustomCallSounds(stateFromStores) {
  return ProductCatalog.canUserUse(ProductCatalog.CUSTOM_CALL_SOUNDS, stateFromStores);
};
export const canUploadLargeFiles = function canUploadLargeFiles(currentUser) {
  return ProductCatalog.canUserUse(ProductCatalog.UPLOAD_LARGE_FILES, currentUser);
};
export const canUseBadges = function canUseBadges(currentUser) {
  return ProductCatalog.canUserUse(ProductCatalog.PROFILE_BADGES, currentUser);
};
export const canUseHighVideoUploadQuality = function canUseHighVideoUploadQuality(currentUser) {
  return ProductCatalog.canUserUse(ProductCatalog.INCREASED_VIDEO_UPLOAD_QUALITY, currentUser);
};
export const canEditDiscriminator = function canEditDiscriminator(stateFromStores) {
  return ProductCatalog.canUserUse(ProductCatalog.CUSTOM_DISCRIMINATOR, stateFromStores);
};
export const hasBoostDiscount = function hasBoostDiscount(stateFromStores) {
  return ProductCatalog.canUserUse(ProductCatalog.BOOST_DISCOUNT, stateFromStores);
};
export const canUseAnimatedAvatar = function canUseAnimatedAvatar(user) {
  return ProductCatalog.canUserUse(ProductCatalog.ANIMATED_AVATAR, user);
};
export const canInstallPremiumApplications = function canInstallPremiumApplications(
  isPremiumWithFractionalPremiumOnly,
) {
  return ProductCatalog.canUserUse(ProductCatalog.INSTALL_PREMIUM_APPLICATIONS, isPremiumWithFractionalPremiumOnly);
};
export const canUseIncreasedMessageLength = function canUseIncreasedMessageLength(currentUser) {
  return ProductCatalog.canUserUse(ProductCatalog.INCREASED_MESSAGE_LENGTH, currentUser);
};
export const canUseIncreasedGuildCap = function canUseIncreasedGuildCap(currentUser) {
  return ProductCatalog.canUserUse(ProductCatalog.INCREASED_GUILD_LIMIT, currentUser);
};
export const canRedeemPremiumPerks = function canRedeemPremiumPerks(isPremiumWithFractionalPremiumOnly) {
  return ProductCatalog.canUserUse(ProductCatalog.REDEEM_PREMIUM_PERKS, isPremiumWithFractionalPremiumOnly);
};
export const canUsePremiumProfileCustomization = function canUsePremiumProfileCustomization(
  isPremiumWithFractionalPremiumOnly,
) {
  return ProductCatalog.canUserUse(ProductCatalog.PROFILE_PREMIUM_FEATURES, isPremiumWithFractionalPremiumOnly);
};
export const canUsePremiumAppIcons = function canUsePremiumAppIcons(currentUser) {
  return ProductCatalog.canUserUse(ProductCatalog.APP_ICONS, currentUser);
};
export const canUsePremiumGuildMemberProfile = function canUsePremiumGuildMemberProfile(currentUser) {
  return ProductCatalog.canUserUse(ProductCatalog.PREMIUM_GUILD_MEMBER_PROFILE, currentUser);
};
export const canUseClientThemes = function canUseClientThemes(currentUser) {
  return ProductCatalog.canUserUse(ProductCatalog.CLIENT_THEMES, currentUser);
};
export const canStreamQuality = function canStreamQuality(MID, user) {
  if (MID === obj.HIGH) {
    let canUserUseResult = ProductCatalog.canUserUse(ProductCatalog.STREAM_HIGH_QUALITY, user);
  } else {
    obj = ProductCatalog;
    canUserUseResult = obj.canUserUse(ProductCatalog.STREAM_MID_QUALITY, user);
  }
  return canUserUseResult;
};
export const canUseQuestOrbMultiplier = function canUseQuestOrbMultiplier(perks) {
  return ProductCatalog.canUserUse(ProductCatalog.QUEST_ORB_MULTIPLIER, perks);
};
export const hasFreeBoosts = function hasFreeBoosts(stateFromStores) {
  return ProductCatalog.canUserUse(ProductCatalog.FREE_BOOSTS, stateFromStores);
};
export const canUseCustomStickersEverywhere = function canUseCustomStickersEverywhere(currentUser) {
  return ProductCatalog.canUserUse(ProductCatalog.STICKERS_EVERYWHERE, currentUser);
};
export const canUseCustomBackgrounds = function canUseCustomBackgrounds(currentUser) {
  return ProductCatalog.canUserUse(ProductCatalog.VIDEO_FILTER_ASSETS, currentUser);
};
export const canUseCollectibles = function canUseCollectibles(user) {
  return ProductCatalog.canUserUse(ProductCatalog.COLLECTIBLES, user);
};
export const canUseMonthlyOrbs = function canUseMonthlyOrbs(stateFromStores) {
  let perks;
  if (stateFromStores != null) {
    perks = stateFromStores.perks;
  }
  return PerksStateUtils.hasPerk(perks, user2.Perk.MONTHLY_ORBS);
};
export const canUseShopDiscounts = function canUseShopDiscounts(currentUser) {
  let perks;
  if (currentUser != null) {
    perks = currentUser.perks;
  }
  let hasPerkResult = PerksStateUtils.hasPerk(perks, user2.Perk.SHOP_DISCOUNTS);
  if (!hasPerkResult) {
    hasPerkResult = ProductCatalog.canUserUse(ProductCatalog.COLLECTIBLES, currentUser);
    const tmpResult = ProductCatalog;
  }
  return hasPerkResult;
};
export const canUseMoreQuestOrbs = function canUseMoreQuestOrbs(perks) {
  perks = undefined;
  if (perks != null) {
    perks = perks.perks;
  }
  let hasPerkResult = PerksStateUtils.hasPerk(perks, user2.Perk.MORE_QUEST_ORBS);
  if (!hasPerkResult) {
    hasPerkResult = ProductCatalog.canUserUse(ProductCatalog.QUEST_ORB_MULTIPLIER, perks);
    const tmpResult = ProductCatalog;
  }
  return hasPerkResult;
};
