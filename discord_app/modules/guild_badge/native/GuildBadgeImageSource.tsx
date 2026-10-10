// === Module 8870: GuildBadgeImageSource ===

// Module 8870 (GuildBadgeImageSource)
import shared from "shared" /* 4969 */;
import _modDef6163 from "module_6163" /* 6163 */;
import _modDef6164 from "module_6164" /* 6164 */;
import GuildTraits from "GuildTraits" /* 8867 */;
import BadgeCategory from "BadgeCategory" /* 8868 */;
import _modDef8871 from "module_8871" /* 8871 */;
import _modDef8872 from "module_8872" /* 8872 */;
import _modDef8873 from "module_8873" /* 8873 */;
import _modDef8874 from "module_8874" /* 8874 */;
import _modDef8875 from "module_8875" /* 8875 */;
import _modDef8876 from "module_8876" /* 8876 */;

require = fn;
const badgeVariants = {};
badgeVariants[fn(8868).BadgeCategory.STAFF] = { imageSource: _modDef6163 };
let obj2 = { imageSource: _modDef6163 };
badgeVariants[fn(8868).BadgeCategory.PARTNERED] = { imageSource: _modDef6164 };
const obj3 = { imageSource: _modDef6164 };
badgeVariants[fn(8868).BadgeCategory.VERIFIED] = { imageSource: _modDef6163 };
const obj4 = { imageSource: _modDef6163 };
badgeVariants[fn(8868).BadgeCategory.COMMUNITY] = { imageSource: _modDef8871, imageSourceLight: _modDef8872, premiumImageSource: _modDef8873 };
const obj5 = { imageSource: _modDef8871, imageSourceLight: _modDef8872, premiumImageSource: _modDef8873 };
badgeVariants[fn(8868).BadgeCategory.DISCOVERABLE] = { imageSource: _modDef8874, imageSourceLight: _modDef8875, premiumImageSource: _modDef8876 };
const obj6 = { imageSource: _modDef8874, imageSourceLight: _modDef8875, premiumImageSource: _modDef8876 };
badgeVariants[fn(8868).BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: _modDef6163 };
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