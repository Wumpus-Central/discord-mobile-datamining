// === Module 10327: GuildBadgeImageSource ===

// Module 10327 (GuildBadgeImageSource)
import shared from "shared" /* 5250 */;
import _modDef7658 from "module_7658" /* 7658 */;
import _modDef7659 from "module_7659" /* 7659 */;
import BadgeCategory from "BadgeCategory" /* 10322 */;
import GuildTraits from "GuildTraits" /* 10323 */;
import _modDef10328 from "module_10328" /* 10328 */;
import _modDef10329 from "module_10329" /* 10329 */;
import _modDef10330 from "module_10330" /* 10330 */;
import _modDef10331 from "module_10331" /* 10331 */;

require = fn;
const badgeVariants = {};
badgeVariants[fn(10322).BadgeCategory.STAFF] = { imageSource: _modDef7658 };
let obj2 = { imageSource: _modDef7658 };
badgeVariants[fn(10322).BadgeCategory.PARTNERED] = { imageSource: _modDef7659 };
const obj3 = { imageSource: _modDef7659 };
badgeVariants[fn(10322).BadgeCategory.VERIFIED] = { imageSource: _modDef7658 };
const obj4 = { imageSource: _modDef7658 };
badgeVariants[fn(10322).BadgeCategory.COMMUNITY] = { imageSource: _modDef10328, imageSourceLight: _modDef10329, premiumImageSource: _modDef10330 };
const obj5 = { imageSource: _modDef10328, imageSourceLight: _modDef10329, premiumImageSource: _modDef10330 };
badgeVariants[fn(10322).BadgeCategory.DISCOVERABLE] = { imageSource: _modDef10331 };
const obj6 = { imageSource: _modDef10331 };
badgeVariants[fn(10322).BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: _modDef7658 };
badgeVariants[fn(10322).BadgeCategory.NONE] = {};
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