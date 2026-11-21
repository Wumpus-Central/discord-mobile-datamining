// === Module 9759: GuildBadgeImageSource ===

// Module 9759 (GuildBadgeImageSource)
import shared from "shared" /* 4920 */;
import _modDef7326 from "module_7326" /* 7326 */;
import _modDef7327 from "module_7327" /* 7327 */;
import GuildTraits from "GuildTraits" /* 9753 */;
import BadgeCategory from "BadgeCategory" /* 9754 */;
import _modDef9760 from "module_9760" /* 9760 */;
import _modDef9761 from "module_9761" /* 9761 */;
import _modDef9762 from "module_9762" /* 9762 */;
import _modDef9763 from "module_9763" /* 9763 */;

require = fn;
const badgeVariants = {};
badgeVariants[fn(9754).BadgeCategory.STAFF] = { imageSource: _modDef7326 };
let obj2 = { imageSource: _modDef7326 };
badgeVariants[fn(9754).BadgeCategory.PARTNERED] = { imageSource: _modDef7327 };
const obj3 = { imageSource: _modDef7327 };
badgeVariants[fn(9754).BadgeCategory.VERIFIED] = { imageSource: _modDef7326 };
const obj4 = { imageSource: _modDef7326 };
badgeVariants[fn(9754).BadgeCategory.COMMUNITY] = { imageSource: _modDef9760, imageSourceLight: _modDef9761, premiumImageSource: _modDef9762 };
const obj5 = { imageSource: _modDef9760, imageSourceLight: _modDef9761, premiumImageSource: _modDef9762 };
badgeVariants[fn(9754).BadgeCategory.DISCOVERABLE] = { imageSource: _modDef9763 };
const obj6 = { imageSource: _modDef9763 };
badgeVariants[fn(9754).BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: _modDef7326 };
badgeVariants[fn(9754).BadgeCategory.NONE] = {};
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