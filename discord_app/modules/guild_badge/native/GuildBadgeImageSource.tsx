// === Module 9639: GuildBadgeImageSource ===

// Module 9639 (GuildBadgeImageSource)
import shared from "shared" /* 4801 */;
import _modDef7206 from "module_7206" /* 7206 */;
import _modDef7207 from "module_7207" /* 7207 */;
import GuildTraits from "GuildTraits" /* 9633 */;
import BadgeCategory from "BadgeCategory" /* 9634 */;
import _modDef9640 from "module_9640" /* 9640 */;
import _modDef9641 from "module_9641" /* 9641 */;
import _modDef9642 from "module_9642" /* 9642 */;
import _modDef9643 from "module_9643" /* 9643 */;

require = fn;
const badgeVariants = {};
badgeVariants[fn(9634).BadgeCategory.STAFF] = { imageSource: _modDef7206 };
let obj2 = { imageSource: _modDef7206 };
badgeVariants[fn(9634).BadgeCategory.PARTNERED] = { imageSource: _modDef7207 };
const obj3 = { imageSource: _modDef7207 };
badgeVariants[fn(9634).BadgeCategory.VERIFIED] = { imageSource: _modDef7206 };
const obj4 = { imageSource: _modDef7206 };
badgeVariants[fn(9634).BadgeCategory.COMMUNITY] = { imageSource: _modDef9640, imageSourceLight: _modDef9641, premiumImageSource: _modDef9642 };
const obj5 = { imageSource: _modDef9640, imageSourceLight: _modDef9641, premiumImageSource: _modDef9642 };
badgeVariants[fn(9634).BadgeCategory.DISCOVERABLE] = { imageSource: _modDef9643 };
const obj6 = { imageSource: _modDef9643 };
badgeVariants[fn(9634).BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: _modDef7206 };
badgeVariants[fn(9634).BadgeCategory.NONE] = {};
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