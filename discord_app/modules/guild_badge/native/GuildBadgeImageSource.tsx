// === Module 9087: GuildBadgeImageSource ===

// Module 9087 (GuildBadgeImageSource)
import shared from "shared" /* 5025 */;
import _modDef6384 from "module_6384" /* 6384 */;
import _modDef6385 from "module_6385" /* 6385 */;
import GuildTraits from "GuildTraits" /* 9084 */;
import BadgeCategory from "BadgeCategory" /* 9085 */;
import _modDef9088 from "module_9088" /* 9088 */;
import _modDef9089 from "module_9089" /* 9089 */;
import _modDef9090 from "module_9090" /* 9090 */;
import _modDef9091 from "module_9091" /* 9091 */;
import _modDef9092 from "module_9092" /* 9092 */;
import _modDef9093 from "module_9093" /* 9093 */;

require = fn;
const badgeVariants = {};
badgeVariants[fn(9085).BadgeCategory.STAFF] = { imageSource: _modDef6384 };
let obj2 = { imageSource: _modDef6384 };
badgeVariants[fn(9085).BadgeCategory.PARTNERED] = { imageSource: _modDef6385 };
const obj3 = { imageSource: _modDef6385 };
badgeVariants[fn(9085).BadgeCategory.VERIFIED] = { imageSource: _modDef6384 };
const obj4 = { imageSource: _modDef6384 };
badgeVariants[fn(9085).BadgeCategory.COMMUNITY] = { imageSource: _modDef9088, imageSourceLight: _modDef9089, premiumImageSource: _modDef9090 };
const obj5 = { imageSource: _modDef9088, imageSourceLight: _modDef9089, premiumImageSource: _modDef9090 };
badgeVariants[fn(9085).BadgeCategory.DISCOVERABLE] = { imageSource: _modDef9091, imageSourceLight: _modDef9092, premiumImageSource: _modDef9093 };
const obj6 = { imageSource: _modDef9091, imageSourceLight: _modDef9092, premiumImageSource: _modDef9093 };
badgeVariants[fn(9085).BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: _modDef6384 };
badgeVariants[fn(9085).BadgeCategory.NONE] = {};
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