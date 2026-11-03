// === Module 9438: GuildBadgeImageSource ===

// Module 9438 (GuildBadgeImageSource)
import shared from "shared" /* 5148 */;
import _modDef7088 from "module_7088" /* 7088 */;
import _modDef7089 from "module_7089" /* 7089 */;
import GuildTraits from "GuildTraits" /* 9432 */;
import BadgeCategory from "BadgeCategory" /* 9433 */;
import _modDef9439 from "module_9439" /* 9439 */;
import _modDef9440 from "module_9440" /* 9440 */;
import _modDef9441 from "module_9441" /* 9441 */;
import _modDef9442 from "module_9442" /* 9442 */;

require = fn;
const badgeVariants = {};
badgeVariants[fn(9433).BadgeCategory.STAFF] = { imageSource: _modDef7088 };
let obj2 = { imageSource: _modDef7088 };
badgeVariants[fn(9433).BadgeCategory.PARTNERED] = { imageSource: _modDef7089 };
const obj3 = { imageSource: _modDef7089 };
badgeVariants[fn(9433).BadgeCategory.VERIFIED] = { imageSource: _modDef7088 };
const obj4 = { imageSource: _modDef7088 };
badgeVariants[fn(9433).BadgeCategory.COMMUNITY] = { imageSource: _modDef9439, imageSourceLight: _modDef9440, premiumImageSource: _modDef9441 };
const obj5 = { imageSource: _modDef9439, imageSourceLight: _modDef9440, premiumImageSource: _modDef9441 };
badgeVariants[fn(9433).BadgeCategory.DISCOVERABLE] = { imageSource: _modDef9442 };
const obj6 = { imageSource: _modDef9442 };
badgeVariants[fn(9433).BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: _modDef7088 };
badgeVariants[fn(9433).BadgeCategory.NONE] = {};
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