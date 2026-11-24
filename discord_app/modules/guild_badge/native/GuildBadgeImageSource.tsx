// === Module 8598: GuildBadgeImageSource ===

// Module 8598 (GuildBadgeImageSource)
import shared from "shared" /* 4924 */;
import _modDef6931 from "module_6931" /* 6931 */;
import _modDef6932 from "module_6932" /* 6932 */;
import GuildTraits from "GuildTraits" /* 8592 */;
import BadgeCategory from "BadgeCategory" /* 8593 */;
import _modDef8599 from "module_8599" /* 8599 */;
import _modDef8600 from "module_8600" /* 8600 */;
import _modDef8601 from "module_8601" /* 8601 */;
import _modDef8602 from "module_8602" /* 8602 */;

require = fn;
const badgeVariants = {};
badgeVariants[fn(8593).BadgeCategory.STAFF] = { imageSource: _modDef6931 };
let obj2 = { imageSource: _modDef6931 };
badgeVariants[fn(8593).BadgeCategory.PARTNERED] = { imageSource: _modDef6932 };
const obj3 = { imageSource: _modDef6932 };
badgeVariants[fn(8593).BadgeCategory.VERIFIED] = { imageSource: _modDef6931 };
const obj4 = { imageSource: _modDef6931 };
badgeVariants[fn(8593).BadgeCategory.COMMUNITY] = { imageSource: _modDef8599, imageSourceLight: _modDef8600, premiumImageSource: _modDef8601 };
const obj5 = { imageSource: _modDef8599, imageSourceLight: _modDef8600, premiumImageSource: _modDef8601 };
badgeVariants[fn(8593).BadgeCategory.DISCOVERABLE] = { imageSource: _modDef8602 };
const obj6 = { imageSource: _modDef8602 };
badgeVariants[fn(8593).BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: _modDef6931 };
badgeVariants[fn(8593).BadgeCategory.NONE] = {};
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_badge/native/GuildBadgeImageSource.tsx");

export { badgeVariants };
export function resolveImageSource(premiumImageSource, guildTraits, arg2) {
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
}
export function getGuildBadgeImageSource(guild, theme) {
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
}