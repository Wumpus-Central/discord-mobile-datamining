// === Module 8741: badgeVariants ===

// Module 8741 (badgeVariants)
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 4411 */;
import registerAssetDefault from "registerAsset" /* 5591 */;
import registerAssetDefault2 from "registerAsset" /* 5592 */;
import BadgeCategory from "BadgeCategory" /* 8742 */;
import GuildVisibility from "GuildVisibility" /* 8743 */;
import registerAssetDefault3 from "registerAsset" /* 8744 */;
import registerAssetDefault4 from "registerAsset" /* 8745 */;
import registerAssetDefault5 from "registerAsset" /* 8746 */;
import registerAssetDefault6 from "registerAsset" /* 8747 */;
import registerAssetDefault7 from "registerAsset" /* 8748 */;
import registerAssetDefault8 from "registerAsset" /* 8749 */;

require = arg1;
let obj = {};
obj = { imageSource: registerAssetDefault };
obj[require("BadgeCategory").BadgeCategory.STAFF] = obj;
obj = { imageSource: registerAssetDefault2 };
obj[require("BadgeCategory").BadgeCategory.PARTNERED] = obj;
obj[require("BadgeCategory").BadgeCategory.VERIFIED] = { imageSource: registerAssetDefault };
const obj1 = { imageSource: registerAssetDefault };
obj[require("BadgeCategory").BadgeCategory.COMMUNITY] = { imageSource: registerAssetDefault3, imageSourceLight: registerAssetDefault4, premiumImageSource: registerAssetDefault5 };
let obj2 = { imageSource: registerAssetDefault3, imageSourceLight: registerAssetDefault4, premiumImageSource: registerAssetDefault5 };
obj[require("BadgeCategory").BadgeCategory.DISCOVERABLE] = { imageSource: registerAssetDefault6, imageSourceLight: registerAssetDefault7, premiumImageSource: registerAssetDefault8 };
const obj3 = { imageSource: registerAssetDefault6, imageSourceLight: registerAssetDefault7, premiumImageSource: registerAssetDefault8 };
obj[require("BadgeCategory").BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: registerAssetDefault };
obj[require("BadgeCategory").BadgeCategory.NONE] = {};
const obj4 = { imageSource: registerAssetDefault };
const result = require("set").fileFinishedImporting("modules/guild_badge/native/GuildBadgeImageSource.tsx");

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