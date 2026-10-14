// === Module 8875: GuildBadgeImageSource ===

// Module 8875 (GuildBadgeImageSource)
import shared from "shared" /* 4971 */;
import _modDef6168 from "module_6168" /* 6168 */;
import _modDef6169 from "module_6169" /* 6169 */;
import GuildTraits from "GuildTraits" /* 8872 */;
import BadgeCategory from "BadgeCategory" /* 8873 */;
import _modDef8876 from "module_8876" /* 8876 */;
import _modDef8877 from "module_8877" /* 8877 */;
import _modDef8878 from "module_8878" /* 8878 */;
import _modDef8879 from "module_8879" /* 8879 */;
import _modDef8880 from "module_8880" /* 8880 */;
import _modDef8881 from "module_8881" /* 8881 */;

require = fn;
const badgeVariants = {};
badgeVariants[fn(8873).BadgeCategory.STAFF] = { imageSource: _modDef6168 };
let obj2 = { imageSource: _modDef6168 };
badgeVariants[fn(8873).BadgeCategory.PARTNERED] = { imageSource: _modDef6169 };
const obj3 = { imageSource: _modDef6169 };
badgeVariants[fn(8873).BadgeCategory.VERIFIED] = { imageSource: _modDef6168 };
const obj4 = { imageSource: _modDef6168 };
badgeVariants[fn(8873).BadgeCategory.COMMUNITY] = { imageSource: _modDef8876, imageSourceLight: _modDef8877, premiumImageSource: _modDef8878 };
const obj5 = { imageSource: _modDef8876, imageSourceLight: _modDef8877, premiumImageSource: _modDef8878 };
badgeVariants[fn(8873).BadgeCategory.DISCOVERABLE] = { imageSource: _modDef8879, imageSourceLight: _modDef8880, premiumImageSource: _modDef8881 };
const obj6 = { imageSource: _modDef8879, imageSourceLight: _modDef8880, premiumImageSource: _modDef8881 };
badgeVariants[fn(8873).BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: _modDef6168 };
badgeVariants[fn(8873).BadgeCategory.NONE] = {};
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