// === Module 9101: GuildBadgeImageSource ===

// Module 9101 (GuildBadgeImageSource)
import shared from "shared" /* 4680 */;
import _modDef5896 from "module_5896" /* 5896 */;
import _modDef5897 from "module_5897" /* 5897 */;
import BadgeCategory from "BadgeCategory" /* 9102 */;
import GuildTraits from "GuildTraits" /* 9103 */;
import _modDef9104 from "module_9104" /* 9104 */;
import _modDef9105 from "module_9105" /* 9105 */;
import _modDef9106 from "module_9106" /* 9106 */;
import _modDef9107 from "module_9107" /* 9107 */;
import _modDef9108 from "module_9108" /* 9108 */;
import _modDef9109 from "module_9109" /* 9109 */;

require = fn;
const badgeVariants = {};
badgeVariants[fn(9102).BadgeCategory.STAFF] = { imageSource: _modDef5896 };
let obj2 = { imageSource: _modDef5896 };
badgeVariants[fn(9102).BadgeCategory.PARTNERED] = { imageSource: _modDef5897 };
const obj3 = { imageSource: _modDef5897 };
badgeVariants[fn(9102).BadgeCategory.VERIFIED] = { imageSource: _modDef5896 };
const obj4 = { imageSource: _modDef5896 };
badgeVariants[fn(9102).BadgeCategory.COMMUNITY] = { imageSource: _modDef9104, imageSourceLight: _modDef9105, premiumImageSource: _modDef9106 };
const obj5 = { imageSource: _modDef9104, imageSourceLight: _modDef9105, premiumImageSource: _modDef9106 };
badgeVariants[fn(9102).BadgeCategory.DISCOVERABLE] = { imageSource: _modDef9107, imageSourceLight: _modDef9108, premiumImageSource: _modDef9109 };
const obj6 = { imageSource: _modDef9107, imageSourceLight: _modDef9108, premiumImageSource: _modDef9109 };
badgeVariants[fn(9102).BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: _modDef5896 };
badgeVariants[fn(9102).BadgeCategory.NONE] = {};
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_badge/native/GuildBadgeImageSource.tsx");

export { badgeVariants };
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
export const getGuildBadgeImageSource = function getGuildBadgeImageSource(guild, theme) {
  const obj = GuildTraits;
  const guildTraits = obj.getGuildTraits(guild);
  const obj2 = BadgeCategory;
  const tmp4 = obj[obj2.getBadgeCategory(obj2, guildTraits)];
  if (null == tmp4) {
    return null;
  } else {
    if (!guildTraits.premium) {
      if (tmpResult.isThemeLight(theme)) {
        if (null != tmp4.imageSourceLight) {
          let premiumImageSource = tmp4.imageSourceLight;
        }
      }
      premiumImageSource = tmp4.imageSource;
      tmpResult = shared;
    }
    premiumImageSource = tmp4.premiumImageSource;
  }
};