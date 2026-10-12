// === Module 8871: GuildBadgeImageSource ===

// Module 8871 (GuildBadgeImageSource)
import shared from "shared" /* 4969 */;
import _modDef6164 from "module_6164" /* 6164 */;
import _modDef6165 from "module_6165" /* 6165 */;
import GuildTraits from "GuildTraits" /* 8868 */;
import BadgeCategory from "BadgeCategory" /* 8869 */;
import _modDef8872 from "module_8872" /* 8872 */;
import _modDef8873 from "module_8873" /* 8873 */;
import _modDef8874 from "module_8874" /* 8874 */;
import _modDef8875 from "module_8875" /* 8875 */;
import _modDef8876 from "module_8876" /* 8876 */;
import _modDef8877 from "module_8877" /* 8877 */;

require = fn;
const badgeVariants = {};
badgeVariants[fn(8869).BadgeCategory.STAFF] = { imageSource: _modDef6164 };
let obj2 = { imageSource: _modDef6164 };
badgeVariants[fn(8869).BadgeCategory.PARTNERED] = { imageSource: _modDef6165 };
const obj3 = { imageSource: _modDef6165 };
badgeVariants[fn(8869).BadgeCategory.VERIFIED] = { imageSource: _modDef6164 };
const obj4 = { imageSource: _modDef6164 };
badgeVariants[fn(8869).BadgeCategory.COMMUNITY] = { imageSource: _modDef8872, imageSourceLight: _modDef8873, premiumImageSource: _modDef8874 };
const obj5 = { imageSource: _modDef8872, imageSourceLight: _modDef8873, premiumImageSource: _modDef8874 };
badgeVariants[fn(8869).BadgeCategory.DISCOVERABLE] = { imageSource: _modDef8875, imageSourceLight: _modDef8876, premiumImageSource: _modDef8877 };
const obj6 = { imageSource: _modDef8875, imageSourceLight: _modDef8876, premiumImageSource: _modDef8877 };
badgeVariants[fn(8869).BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: _modDef6164 };
badgeVariants[fn(8869).BadgeCategory.NONE] = {};
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