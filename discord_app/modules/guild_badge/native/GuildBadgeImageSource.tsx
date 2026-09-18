// === Module 8981: GuildBadgeImageSource ===

// Module 8981 (GuildBadgeImageSource)
import shared from "shared" /* 4573 */;
import _modDef5761 from "module_5761" /* 5761 */;
import _modDef5762 from "module_5762" /* 5762 */;
import BadgeCategory from "BadgeCategory" /* 8982 */;
import GuildTraits from "GuildTraits" /* 8983 */;
import _modDef8984 from "module_8984" /* 8984 */;
import _modDef8985 from "module_8985" /* 8985 */;
import _modDef8986 from "module_8986" /* 8986 */;
import _modDef8987 from "module_8987" /* 8987 */;
import _modDef8988 from "module_8988" /* 8988 */;
import _modDef8989 from "module_8989" /* 8989 */;

require = fn;
const badgeVariants = {};
badgeVariants[fn(8982).BadgeCategory.STAFF] = { imageSource: _modDef5761 };
let obj2 = { imageSource: _modDef5761 };
badgeVariants[fn(8982).BadgeCategory.PARTNERED] = { imageSource: _modDef5762 };
const obj3 = { imageSource: _modDef5762 };
badgeVariants[fn(8982).BadgeCategory.VERIFIED] = { imageSource: _modDef5761 };
const obj4 = { imageSource: _modDef5761 };
badgeVariants[fn(8982).BadgeCategory.COMMUNITY] = { imageSource: _modDef8984, imageSourceLight: _modDef8985, premiumImageSource: _modDef8986 };
const obj5 = { imageSource: _modDef8984, imageSourceLight: _modDef8985, premiumImageSource: _modDef8986 };
badgeVariants[fn(8982).BadgeCategory.DISCOVERABLE] = { imageSource: _modDef8987, imageSourceLight: _modDef8988, premiumImageSource: _modDef8989 };
const obj6 = { imageSource: _modDef8987, imageSourceLight: _modDef8988, premiumImageSource: _modDef8989 };
badgeVariants[fn(8982).BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: _modDef5761 };
badgeVariants[fn(8982).BadgeCategory.NONE] = {};
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