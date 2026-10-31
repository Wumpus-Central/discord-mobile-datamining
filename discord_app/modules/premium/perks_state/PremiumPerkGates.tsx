// === Module 15871: PremiumPerkGates ===

// Module 15871 (PremiumPerkGates)
import PerksStateUtils from "PerksStateUtils" /* 1389 */;
import user2 from "user" /* 1391 */;
import ProductCatalog from "ProductCatalog" /* 5071 */;
import NitroFileUploadExperiments from "NitroFileUploadExperiments" /* 5075 */;
import FileSizeUtils from "FileSizeUtils" /* 6451 */;
import PremiumConstants from "PremiumConstants" /* 1385 */;
import size from "module_2" /* 2 */;

({ PremiumTypes: c2, PremiumUserLimits: c3 } = PremiumConstants);
const StreamQuality = { MID: "mid", HIGH: "high" };
const result = size.fileFinishedImporting("modules/premium/perks_state/PremiumPerkGates.tsx");

export { StreamQuality };
export function getMaxFileSizeForPremiumType(TIER_2, arg1) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = { useSpace: true };
  }
  if (TIER_2 === TIER_2.TIER_2) {
    let fileSize = NitroFileUploadExperiments.getNitroFileUploadLimitBytes({ location: "getMaxFileSizeForPremiumType" });
  } else {
    fileSize = React3[TIER_2].fileSize;
  }
  return FileSizeUtils.formatSize(fileSize / 1024, { useKibibytes: true, useSpace: obj.useSpace });
}
export function canUseAnimatedEmojis(currentUser) {
  return ProductCatalog.canUserUse(ProductCatalog.ANIMATED_EMOJIS, currentUser);
}
export function canUseEmojisEverywhere(currentUser) {
  return ProductCatalog.canUserUse(ProductCatalog.EMOJIS_EVERYWHERE, currentUser);
}
export function canUseSoundboardEverywhere(currentUser) {
  return ProductCatalog.canUserUse(ProductCatalog.SOUNDBOARD_EVERYWHERE, currentUser);
}
export function canUseCustomCallSounds(currentUser) {
  return ProductCatalog.canUserUse(ProductCatalog.CUSTOM_CALL_SOUNDS, currentUser);
}
export function canUploadLargeFiles(currentUser) {
  return ProductCatalog.canUserUse(ProductCatalog.UPLOAD_LARGE_FILES, currentUser);
}
export function canUseBadges(currentUser) {
  return ProductCatalog.canUserUse(ProductCatalog.PROFILE_BADGES, currentUser);
}
export function canUseHighVideoUploadQuality(currentUser) {
  return ProductCatalog.canUserUse(ProductCatalog.INCREASED_VIDEO_UPLOAD_QUALITY, currentUser);
}
export function canEditDiscriminator(stateFromStores) {
  return ProductCatalog.canUserUse(ProductCatalog.CUSTOM_DISCRIMINATOR, stateFromStores);
}
export function hasBoostDiscount(stateFromStores) {
  return ProductCatalog.canUserUse(ProductCatalog.BOOST_DISCOUNT, stateFromStores);
}
export function canUseAnimatedAvatar(user) {
  return ProductCatalog.canUserUse(ProductCatalog.ANIMATED_AVATAR, user);
}
export function canInstallPremiumApplications(isPremiumWithFractionalPremiumOnly) {
  return ProductCatalog.canUserUse(ProductCatalog.INSTALL_PREMIUM_APPLICATIONS, isPremiumWithFractionalPremiumOnly);
}
export function canUseIncreasedMessageLength(currentUser) {
  return ProductCatalog.canUserUse(ProductCatalog.INCREASED_MESSAGE_LENGTH, currentUser);
}
export function canUseIncreasedGuildCap(currentUser) {
  return ProductCatalog.canUserUse(ProductCatalog.INCREASED_GUILD_LIMIT, currentUser);
}
export function canRedeemPremiumPerks(isPremiumWithFractionalPremiumOnly) {
  return ProductCatalog.canUserUse(ProductCatalog.REDEEM_PREMIUM_PERKS, isPremiumWithFractionalPremiumOnly);
}
export function canUsePremiumProfileCustomization(isPremiumWithFractionalPremiumOnly) {
  return ProductCatalog.canUserUse(ProductCatalog.PROFILE_PREMIUM_FEATURES, isPremiumWithFractionalPremiumOnly);
}
export function canUsePremiumAppIcons(currentUser) {
  return ProductCatalog.canUserUse(ProductCatalog.APP_ICONS, currentUser);
}
export function canUsePremiumGuildMemberProfile(currentUser) {
  return ProductCatalog.canUserUse(ProductCatalog.PREMIUM_GUILD_MEMBER_PROFILE, currentUser);
}
export function canUseClientThemes(currentUser) {
  return ProductCatalog.canUserUse(ProductCatalog.CLIENT_THEMES, currentUser);
}
export function canStreamQuality(MID, currentUser) {
  if (MID === obj.HIGH) {
    let canUserUseResult = ProductCatalog.canUserUse(ProductCatalog.STREAM_HIGH_QUALITY, currentUser);
  } else {
    obj = ProductCatalog;
    canUserUseResult = obj.canUserUse(ProductCatalog.STREAM_MID_QUALITY, currentUser);
  }
  return canUserUseResult;
}
export function canUseQuestOrbMultiplier(perks) {
  return ProductCatalog.canUserUse(ProductCatalog.QUEST_ORB_MULTIPLIER, perks);
}
export function hasFreeBoosts(stateFromStores) {
  return ProductCatalog.canUserUse(ProductCatalog.FREE_BOOSTS, stateFromStores);
}
export function canUseCustomStickersEverywhere(currentUser) {
  return ProductCatalog.canUserUse(ProductCatalog.STICKERS_EVERYWHERE, currentUser);
}
export function canUseCustomBackgrounds(currentUser) {
  return ProductCatalog.canUserUse(ProductCatalog.VIDEO_FILTER_ASSETS, currentUser);
}
export function canUseCollectibles(user) {
  return ProductCatalog.canUserUse(ProductCatalog.COLLECTIBLES, user);
}
export function canUseMonthlyOrbs(stateFromStores) {
  let perks;
  if (stateFromStores != null) {
    perks = stateFromStores.perks;
  }
  return PerksStateUtils.hasPerk(perks, user2.Perk.MONTHLY_ORBS);
}
export function canUseShopDiscounts(currentUser) {
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
}
export function canUseMoreQuestOrbs(perks) {
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
}