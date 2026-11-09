// === Module 16187: PremiumPerkGates ===

// Module 16187 (PremiumPerkGates)
import PerksStateUtils from "PerksStateUtils" /* 1391 */;
import user2 from "user" /* 1398 */;
import PremiumTypeUtils from "PremiumTypeUtils" /* 2107 */;
import FileSizeUtils from "FileSizeUtils" /* 6584 */;
import NitroFileUploadExperiments from "NitroFileUploadExperiments" /* 8282 */;
import ProductCatalog from "ProductCatalog" /* 16188 */;
import PremiumConstants from "PremiumConstants" /* 1387 */;
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
  if (TIER_2 === React2.TIER_2) {
    let fileSize = NitroFileUploadExperiments.getNitroFileUploadLimitBytes({ location: "getMaxFileSizeForPremiumType" });
  } else {
    fileSize = React3[TIER_2].fileSize;
  }
  return FileSizeUtils.formatSize(fileSize / 1024, { useKibibytes: true, useSpace: obj.useSpace });
}
export function canUseAnimatedEmojis(currentUser) {
  return ProductCatalog.canUserUse(user2.Perk.ANIMATED_EMOJIS, currentUser);
}
export function canUseEmojisEverywhere(currentUser) {
  return ProductCatalog.canUserUse(user2.Perk.EMOJIS_EVERYWHERE, currentUser);
}
export function canUseSoundboardEverywhere(currentUser) {
  return ProductCatalog.canUserUse(user2.Perk.SOUNDBOARD_EVERYWHERE, currentUser);
}
export function canUseCustomCallSounds(currentUser) {
  return ProductCatalog.canUserUse(user2.Perk.CUSTOM_CALL_SOUNDS, currentUser);
}
export function canUploadLargeFiles(currentUser) {
  return ProductCatalog.canUserUse(user2.Perk.INCREASED_FILE_UPLOAD_SIZE, currentUser);
}
export function canUseBadges(currentUser) {
  return ProductCatalog.canUserUse(user2.Perk.PROFILE_BADGES, currentUser);
}
export function canUseHighVideoUploadQuality(currentUser) {
  return ProductCatalog.canUserUse(user2.Perk.INCREASED_VIDEO_UPLOAD_QUALITY, currentUser);
}
export function canEditDiscriminator(stateFromStores) {
  return ProductCatalog.canUserUse(user2.Perk.CUSTOM_DISCRIMINATOR, stateFromStores);
}
export function hasBoostDiscount(stateFromStores) {
  return ProductCatalog.canUserUse(user2.Perk.BOOST_DISCOUNT, stateFromStores);
}
export function canUseAnimatedAvatar(user) {
  return ProductCatalog.canUserUse(user2.Perk.ANIMATED_AVATAR, user);
}
export function canInstallPremiumApplications(stateFromStores) {
  return ProductCatalog.canUserUse(user2.Perk.INSTALL_PREMIUM_APPLICATIONS, stateFromStores);
}
export function canUseIncreasedMessageLength(currentUser) {
  return ProductCatalog.canUserUse(user2.Perk.INCREASED_MESSAGE_LENGTH, currentUser);
}
export function canUseIncreasedGuildCap(currentUser) {
  return ProductCatalog.canUserUse(user2.Perk.INCREASED_GUILD_LIMIT, currentUser);
}
export function canRedeemPremiumPerks(currentUser) {
  return PremiumTypeUtils.isPremiumExactly(currentUser, React2.TIER_2);
}
export function canUsePremiumProfileCustomization(stateFromStores) {
  return ProductCatalog.canUserUse(user2.Perk.PROFILE_PREMIUM_FEATURES, stateFromStores);
}
export function canUsePremiumAppIcons(currentUser) {
  return ProductCatalog.canUserUse(user2.Perk.APP_ICONS, currentUser);
}
export function canUsePremiumGuildMemberProfile(currentUser) {
  return ProductCatalog.canUserUse(user2.Perk.PREMIUM_GUILD_MEMBER_PROFILE, currentUser);
}
export function canUseClientThemes(currentUser) {
  return ProductCatalog.canUserUse(user2.Perk.CLIENT_THEMES, currentUser);
}
export function canStreamQuality(MID, currentUser) {
  if (MID === obj.HIGH) {
    let canUserUseResult = ProductCatalog.canUserUse(user2.Perk.STREAM_HIGH_QUALITY, currentUser);
  } else {
    obj = ProductCatalog;
    canUserUseResult = obj.canUserUse(user2.Perk.STREAM_MID_QUALITY, currentUser);
  }
  return canUserUseResult;
}
export function canUseQuestOrbMultiplier(isFractionalPremiumWithNoStandardSub) {
  let isPremiumExactlyResult = null != isFractionalPremiumWithNoStandardSub && !isFractionalPremiumWithNoStandardSub.isFractionalPremiumWithNoStandardSub();
  if (isPremiumExactlyResult) {
    isPremiumExactlyResult = PremiumTypeUtils.isPremiumExactly(isFractionalPremiumWithNoStandardSub, React2.TIER_2);
  }
  return isPremiumExactlyResult;
}
export function hasFreeBoosts(stateFromStores) {
  return ProductCatalog.canUserUse(user2.Perk.FREE_BOOSTS, stateFromStores);
}
export function canUseCustomStickersEverywhere(currentUser) {
  return ProductCatalog.canUserUse(user2.Perk.STICKERS_EVERYWHERE, currentUser);
}
export function canUseCustomBackgrounds(currentUser) {
  return ProductCatalog.canUserUse(user2.Perk.VIDEO_FILTER_ASSETS, currentUser);
}
export function canUseCollectibles(user) {
  return ProductCatalog.canUserUse(user2.Perk.PREMIUM_COLLECTIBLES, user);
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
    hasPerkResult = ProductCatalog.canUserUse(user2.Perk.PREMIUM_COLLECTIBLES, currentUser);
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
    let isPremiumExactlyResult = null != perks && !perks.isFractionalPremiumWithNoStandardSub();
    if (isPremiumExactlyResult) {
      isPremiumExactlyResult = PremiumTypeUtils.isPremiumExactly(perks, React2.TIER_2);
      const tmpResult = PremiumTypeUtils;
    }
    hasPerkResult = isPremiumExactlyResult;
  }
  return hasPerkResult;
}