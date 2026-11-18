// === Module 9660: GuildBadgeImageSource ===

// Module 9660 (GuildBadgeImageSource)
import shared from "shared" /* 4830 */;
import _modDef7237 from "module_7237" /* 7237 */;
import _modDef7238 from "module_7238" /* 7238 */;
import GuildTraits from "GuildTraits" /* 9654 */;
import BadgeCategory from "BadgeCategory" /* 9655 */;
import _modDef9661 from "module_9661" /* 9661 */;
import _modDef9662 from "module_9662" /* 9662 */;
import _modDef9663 from "module_9663" /* 9663 */;
import _modDef9664 from "module_9664" /* 9664 */;

require = fn;
const badgeVariants = {};
badgeVariants[fn(9655).BadgeCategory.STAFF] = { imageSource: _modDef7237 };
let obj2 = { imageSource: _modDef7237 };
badgeVariants[fn(9655).BadgeCategory.PARTNERED] = { imageSource: _modDef7238 };
const obj3 = { imageSource: _modDef7238 };
badgeVariants[fn(9655).BadgeCategory.VERIFIED] = { imageSource: _modDef7237 };
const obj4 = { imageSource: _modDef7237 };
badgeVariants[fn(9655).BadgeCategory.COMMUNITY] = { imageSource: _modDef9661, imageSourceLight: _modDef9662, premiumImageSource: _modDef9663 };
const obj5 = { imageSource: _modDef9661, imageSourceLight: _modDef9662, premiumImageSource: _modDef9663 };
badgeVariants[fn(9655).BadgeCategory.DISCOVERABLE] = { imageSource: _modDef9664 };
const obj6 = { imageSource: _modDef9664 };
badgeVariants[fn(9655).BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: _modDef7237 };
badgeVariants[fn(9655).BadgeCategory.NONE] = {};
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