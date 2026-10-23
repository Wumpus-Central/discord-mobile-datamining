// === Module 9213: GuildBadgeImageSource ===

// Module 9213 (GuildBadgeImageSource)
import shared from "shared" /* 4976 */;
import _modDef6873 from "module_6873" /* 6873 */;
import _modDef6874 from "module_6874" /* 6874 */;
import GuildTraits from "GuildTraits" /* 9210 */;
import BadgeCategory from "BadgeCategory" /* 9211 */;
import _modDef9214 from "module_9214" /* 9214 */;
import _modDef9215 from "module_9215" /* 9215 */;
import _modDef9216 from "module_9216" /* 9216 */;
import _modDef9217 from "module_9217" /* 9217 */;
import _modDef9218 from "module_9218" /* 9218 */;
import _modDef9219 from "module_9219" /* 9219 */;

require = fn;
const badgeVariants = {};
badgeVariants[fn(9211).BadgeCategory.STAFF] = { imageSource: _modDef6873 };
let obj2 = { imageSource: _modDef6873 };
badgeVariants[fn(9211).BadgeCategory.PARTNERED] = { imageSource: _modDef6874 };
const obj3 = { imageSource: _modDef6874 };
badgeVariants[fn(9211).BadgeCategory.VERIFIED] = { imageSource: _modDef6873 };
const obj4 = { imageSource: _modDef6873 };
badgeVariants[fn(9211).BadgeCategory.COMMUNITY] = { imageSource: _modDef9214, imageSourceLight: _modDef9215, premiumImageSource: _modDef9216 };
const obj5 = { imageSource: _modDef9214, imageSourceLight: _modDef9215, premiumImageSource: _modDef9216 };
badgeVariants[fn(9211).BadgeCategory.DISCOVERABLE] = { imageSource: _modDef9217, imageSourceLight: _modDef9218, premiumImageSource: _modDef9219 };
const obj6 = { imageSource: _modDef9217, imageSourceLight: _modDef9218, premiumImageSource: _modDef9219 };
badgeVariants[fn(9211).BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: _modDef6873 };
badgeVariants[fn(9211).BadgeCategory.NONE] = {};
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