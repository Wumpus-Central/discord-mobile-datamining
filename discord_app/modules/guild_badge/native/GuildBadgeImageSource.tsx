// === Module 8870: GuildBadgeImageSource ===

// Module 8870 (GuildBadgeImageSource)
import shared from "shared" /* 4491 */;
import _modDef5676 from "module_5676" /* 5676 */;
import _modDef5677 from "module_5677" /* 5677 */;
import BadgeCategory from "BadgeCategory" /* 8871 */;
import GuildTraits from "GuildTraits" /* 8872 */;
import _modDef8873 from "module_8873" /* 8873 */;
import _modDef8874 from "module_8874" /* 8874 */;
import _modDef8875 from "module_8875" /* 8875 */;
import _modDef8876 from "module_8876" /* 8876 */;
import _modDef8877 from "module_8877" /* 8877 */;
import _modDef8878 from "module_8878" /* 8878 */;

require = fn;
const badgeVariants = {};
badgeVariants[fn(8871).BadgeCategory.STAFF] = { imageSource: _modDef5676 };
let obj2 = { imageSource: _modDef5676 };
badgeVariants[fn(8871).BadgeCategory.PARTNERED] = { imageSource: _modDef5677 };
const obj3 = { imageSource: _modDef5677 };
badgeVariants[fn(8871).BadgeCategory.VERIFIED] = { imageSource: _modDef5676 };
const obj4 = { imageSource: _modDef5676 };
badgeVariants[fn(8871).BadgeCategory.COMMUNITY] = { imageSource: _modDef8873, imageSourceLight: _modDef8874, premiumImageSource: _modDef8875 };
const obj5 = { imageSource: _modDef8873, imageSourceLight: _modDef8874, premiumImageSource: _modDef8875 };
badgeVariants[fn(8871).BadgeCategory.DISCOVERABLE] = { imageSource: _modDef8876, imageSourceLight: _modDef8877, premiumImageSource: _modDef8878 };
const obj6 = { imageSource: _modDef8876, imageSourceLight: _modDef8877, premiumImageSource: _modDef8878 };
badgeVariants[fn(8871).BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: _modDef5676 };
badgeVariants[fn(8871).BadgeCategory.NONE] = {};
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