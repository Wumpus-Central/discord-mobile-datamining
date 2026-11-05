// === Module 9463: GuildBadgeImageSource ===

// Module 9463 (GuildBadgeImageSource)
import shared from "shared" /* 5150 */;
import _modDef7106 from "module_7106" /* 7106 */;
import _modDef7107 from "module_7107" /* 7107 */;
import GuildTraits from "GuildTraits" /* 9457 */;
import BadgeCategory from "BadgeCategory" /* 9458 */;
import _modDef9464 from "module_9464" /* 9464 */;
import _modDef9465 from "module_9465" /* 9465 */;
import _modDef9466 from "module_9466" /* 9466 */;
import _modDef9467 from "module_9467" /* 9467 */;

require = fn;
const badgeVariants = {};
badgeVariants[fn(9458).BadgeCategory.STAFF] = { imageSource: _modDef7106 };
let obj2 = { imageSource: _modDef7106 };
badgeVariants[fn(9458).BadgeCategory.PARTNERED] = { imageSource: _modDef7107 };
const obj3 = { imageSource: _modDef7107 };
badgeVariants[fn(9458).BadgeCategory.VERIFIED] = { imageSource: _modDef7106 };
const obj4 = { imageSource: _modDef7106 };
badgeVariants[fn(9458).BadgeCategory.COMMUNITY] = { imageSource: _modDef9464, imageSourceLight: _modDef9465, premiumImageSource: _modDef9466 };
const obj5 = { imageSource: _modDef9464, imageSourceLight: _modDef9465, premiumImageSource: _modDef9466 };
badgeVariants[fn(9458).BadgeCategory.DISCOVERABLE] = { imageSource: _modDef9467 };
const obj6 = { imageSource: _modDef9467 };
badgeVariants[fn(9458).BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: _modDef7106 };
badgeVariants[fn(9458).BadgeCategory.NONE] = {};
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