// === Module 10379: GuildBadgeImageSource ===

// Module 10379 (GuildBadgeImageSource)
import shared from "shared" /* 5317 */;
import _modDef7734 from "module_7734" /* 7734 */;
import _modDef7735 from "module_7735" /* 7735 */;
import GuildTraits from "GuildTraits" /* 10373 */;
import BadgeCategory from "BadgeCategory" /* 10374 */;
import _modDef10380 from "module_10380" /* 10380 */;
import _modDef10381 from "module_10381" /* 10381 */;
import _modDef10382 from "module_10382" /* 10382 */;
import _modDef10383 from "module_10383" /* 10383 */;

require = fn;
const badgeVariants = {};
badgeVariants[fn(10374).BadgeCategory.STAFF] = { imageSource: _modDef7734 };
let obj2 = { imageSource: _modDef7734 };
badgeVariants[fn(10374).BadgeCategory.PARTNERED] = { imageSource: _modDef7735 };
const obj3 = { imageSource: _modDef7735 };
badgeVariants[fn(10374).BadgeCategory.VERIFIED] = { imageSource: _modDef7734 };
const obj4 = { imageSource: _modDef7734 };
badgeVariants[fn(10374).BadgeCategory.COMMUNITY] = { imageSource: _modDef10380, imageSourceLight: _modDef10381, premiumImageSource: _modDef10382 };
const obj5 = { imageSource: _modDef10380, imageSourceLight: _modDef10381, premiumImageSource: _modDef10382 };
badgeVariants[fn(10374).BadgeCategory.DISCOVERABLE] = { imageSource: _modDef10383 };
const obj6 = { imageSource: _modDef10383 };
badgeVariants[fn(10374).BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: _modDef7734 };
badgeVariants[fn(10374).BadgeCategory.NONE] = {};
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