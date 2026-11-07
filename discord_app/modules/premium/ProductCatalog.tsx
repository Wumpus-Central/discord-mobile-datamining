// === Module 16178: ProductCatalog ===

// Module 16178 (ProductCatalog)
import LoggerDefault from "Logger" /* 3 */;
import PerksStateUtils from "PerksStateUtils" /* 1391 */;
import OverridePremiumTypeStore from "OverridePremiumTypeStore" /* 1386 */;

require = fn;
const PremiumTypes = fn(1387).PremiumTypes;
const logger = new LoggerDefault("ProductCatalog.tsx");
const obj = {};
const items = [fn(1398).Perk.ANIMATED_EMOJIS, fn(1398).Perk.EMOJIS_EVERYWHERE, fn(1398).Perk.STICKERS_EVERYWHERE, fn(1398).Perk.PROFILE_BADGES, fn(1398).Perk.VIDEO_FILTER_ASSETS, fn(1398).Perk.INCREASED_VIDEO_UPLOAD_QUALITY, fn(1398).Perk.INCREASED_FILE_UPLOAD_SIZE, fn(1398).Perk.APP_ICONS];
const tmp2 = new LoggerDefault("ProductCatalog.tsx");
obj[PremiumTypes.TIER_0] = new Set(items);
const items1 = [fn(1398).Perk.ANIMATED_EMOJIS, fn(1398).Perk.EMOJIS_EVERYWHERE, fn(1398).Perk.ANIMATED_AVATAR, fn(1398).Perk.CUSTOM_DISCRIMINATOR, fn(1398).Perk.PROFILE_BADGES, fn(1398).Perk.BOOST_DISCOUNT, fn(1398).Perk.STREAM_MID_QUALITY, fn(1398).Perk.INCREASED_VIDEO_UPLOAD_QUALITY, fn(1398).Perk.INCREASED_FILE_UPLOAD_SIZE, fn(1398).Perk.APP_ICONS];
const set = new Set(items);
obj[PremiumTypes.TIER_1] = new Set(items1);
const items2 = [fn(1398).Perk.ANIMATED_EMOJIS, fn(1398).Perk.EMOJIS_EVERYWHERE, fn(1398).Perk.STICKERS_EVERYWHERE, fn(1398).Perk.SOUNDBOARD_EVERYWHERE, fn(1398).Perk.CUSTOM_CALL_SOUNDS, fn(1398).Perk.ANIMATED_AVATAR, fn(1398).Perk.CUSTOM_DISCRIMINATOR, fn(1398).Perk.PREMIUM_GUILD_MEMBER_PROFILE, fn(1398).Perk.PROFILE_BADGES, fn(1398).Perk.PROFILE_PREMIUM_FEATURES, fn(1398).Perk.CLIENT_THEMES, fn(1398).Perk.BOOST_DISCOUNT, fn(1398).Perk.FREE_BOOSTS, fn(1398).Perk.STREAM_MID_QUALITY, fn(1398).Perk.STREAM_HIGH_QUALITY, fn(1398).Perk.INSTALL_PREMIUM_APPLICATIONS, fn(1398).Perk.VIDEO_FILTER_ASSETS, fn(1398).Perk.INCREASED_GUILD_LIMIT, fn(1398).Perk.INCREASED_MESSAGE_LENGTH, fn(1398).Perk.INCREASED_VIDEO_UPLOAD_QUALITY, fn(1398).Perk.INCREASED_FILE_UPLOAD_SIZE, fn(1398).Perk.APP_ICONS, fn(1398).Perk.PREMIUM_COLLECTIBLES];
const set1 = new Set(items1);
obj[PremiumTypes.TIER_2] = new Set(items2);
const items3 = [fn(1398).Perk.BOOST_DISCOUNT, fn(1398).Perk.FREE_BOOSTS];
const set3 = new Set(items3);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/ProductCatalog.tsx");

export function canUserUse(PREMIUM_COLLECTIBLES, stateFromStores) {
  let warnResult = stateFromStores;
  let tmp = null == stateFromStores || !warnResult.isPremiumWithFractionalPremiumOnly();
  if (!tmp) {
    tmp = !set3.has(PREMIUM_COLLECTIBLES);
  }
  if (!tmp) {
    return tmp;
  } else if (OverridePremiumTypeStore.hasPremiumTypeOverride(warnResult)) {
    let premiumType;
    if (!tmp4) {
      premiumType = warnResult.premiumType;
    }
    if (null == premiumType) {
      let flag = false;
    } else if (null == obj[warnResult.premiumType]) {
      const _HermesInternal2 = HermesInternal;
      warnResult = logger.warn("Cannot find the perks for the user's premium type " + warnResult.premiumType);
      let flag4 = false;
    } else {
      flag4 = obj4.has(PREMIUM_COLLECTIBLES);
    }
  } else {
    let perks;
    if (!tmp4) {
      perks = warnResult.perks;
    }
    if (null != perks) {
      flag = PerksStateUtils.hasUnrestrictedPerk(warnResult.perks, PREMIUM_COLLECTIBLES);
    } else {
      let premiumType1;
      if (warnResult != null) {
        premiumType1 = warnResult.premiumType;
      }
      flag = false;
      if (null != premiumType1) {
        if (null == obj[warnResult.premiumType]) {
          const _HermesInternal = HermesInternal;
          logger.warn("Cannot find the perks for the user's premium type " + warnResult.premiumType);
          let flag2 = false;
        } else {
          flag2 = obj2.has(PREMIUM_COLLECTIBLES);
        }
      }
    }
  }
}