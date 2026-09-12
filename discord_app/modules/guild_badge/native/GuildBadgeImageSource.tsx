// === Module 8867: GuildBadgeImageSource ===

// Module 8867 (GuildBadgeImageSource)
import shared from "shared" /* 4488 */;
import _modDef5672 from "module_5672" /* 5672 */;
import _modDef5673 from "module_5673" /* 5673 */;
import BadgeCategory from "BadgeCategory" /* 8868 */;
import GuildTraits from "GuildTraits" /* 8869 */;
import _modDef8870 from "module_8870" /* 8870 */;
import _modDef8871 from "module_8871" /* 8871 */;
import _modDef8872 from "module_8872" /* 8872 */;
import _modDef8873 from "module_8873" /* 8873 */;
import _modDef8874 from "module_8874" /* 8874 */;
import _modDef8875 from "module_8875" /* 8875 */;

require = fn;
let badgeVariants = {};
badgeVariants = { imageSource: _modDef5672 };
badgeVariants[fn(8868).BadgeCategory.STAFF] = badgeVariants;
badgeVariants = { imageSource: _modDef5673 };
badgeVariants[fn(8868).BadgeCategory.PARTNERED] = badgeVariants;
badgeVariants[fn(8868).BadgeCategory.VERIFIED] = { imageSource: _modDef5672 };
const obj1 = { imageSource: _modDef5672 };
badgeVariants[fn(8868).BadgeCategory.COMMUNITY] = { imageSource: _modDef8870, imageSourceLight: _modDef8871, premiumImageSource: _modDef8872 };
let obj2 = { imageSource: _modDef8870, imageSourceLight: _modDef8871, premiumImageSource: _modDef8872 };
badgeVariants[fn(8868).BadgeCategory.DISCOVERABLE] = { imageSource: _modDef8873, imageSourceLight: _modDef8874, premiumImageSource: _modDef8875 };
const obj3 = { imageSource: _modDef8873, imageSourceLight: _modDef8874, premiumImageSource: _modDef8875 };
badgeVariants[fn(8868).BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: _modDef5672 };
badgeVariants[fn(8868).BadgeCategory.NONE] = {};
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