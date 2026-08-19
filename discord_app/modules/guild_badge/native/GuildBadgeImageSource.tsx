// === Module 9153: badgeVariants ===

// Module 9153 (badgeVariants)
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1363 */;
import registerAssetDefault from "registerAsset" /* 8549 */;
import registerAssetDefault2 from "registerAsset" /* 8550 */;
import BadgeCategory from "BadgeCategory" /* 9154 */;
import GuildVisibility from "GuildVisibility" /* 9155 */;
import registerAssetDefault3 from "registerAsset" /* 9156 */;
import registerAssetDefault4 from "registerAsset" /* 9157 */;
import registerAssetDefault5 from "registerAsset" /* 9158 */;
import registerAssetDefault6 from "registerAsset" /* 9159 */;
import registerAssetDefault7 from "registerAsset" /* 9160 */;
import registerAssetDefault8 from "registerAsset" /* 9161 */;

require = fn;
let obj = { imageSource: registerAssetDefault };
obj[require("BadgeCategory").BadgeCategory.STAFF] = obj;
obj = { imageSource: registerAssetDefault2 };
obj[require("BadgeCategory").BadgeCategory.PARTNERED] = obj;
obj[require("BadgeCategory").BadgeCategory.VERIFIED] = { imageSource: registerAssetDefault };
obj[require("BadgeCategory").BadgeCategory.COMMUNITY] = { imageSource: registerAssetDefault3, imageSourceLight: registerAssetDefault4, premiumImageSource: registerAssetDefault5 };
obj[require("BadgeCategory").BadgeCategory.DISCOVERABLE] = { imageSource: registerAssetDefault6, imageSourceLight: registerAssetDefault7, premiumImageSource: registerAssetDefault8 };
obj[require("BadgeCategory").BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: registerAssetDefault };
obj[require("BadgeCategory").BadgeCategory.NONE] = {};
const result = require("obj132").fileFinishedImporting("modules/guild_badge/native/GuildBadgeImageSource.tsx");

export const badgeVariants = obj;
export const resolveImageSource = function resolveImageSource(premiumImageSource, guildTraits, arg2) {
  if (guildTraits.premium) {
    if (null != premiumImageSource.premiumImageSource) {
      let imageSource = premiumImageSource.premiumImageSource;
    }
    return imageSource;
  }
  if (obj.isThemeLight(arg2)) {
    if (null != premiumImageSource.imageSourceLight) {
      imageSource = premiumImageSource.imageSourceLight;
    }
  }
  imageSource = premiumImageSource.imageSource;
};
export const getGuildBadgeImageSource = function getGuildBadgeImageSource(guild, closure_2) {
  obj = GuildVisibility;
  const guildTraits = obj.getGuildTraits(guild);
  const obj2 = BadgeCategory;
  const tmp4 = obj[obj2.getBadgeCategory(obj2, guildTraits)];
  if (null == tmp4) {
    return null;
  } else {
    if (!guildTraits.premium) {
      if (tmpResult.isThemeLight(closure_2)) {
        if (null != tmp4.imageSourceLight) {
          let premiumImageSource = tmp4.imageSourceLight;
        }
      }
      premiumImageSource = tmp4.imageSource;
      tmpResult = AccessibilityAnnouncer;
    }
    premiumImageSource = tmp4.premiumImageSource;
  }
};