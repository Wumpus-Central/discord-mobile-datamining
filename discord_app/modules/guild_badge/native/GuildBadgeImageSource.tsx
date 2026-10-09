// === Module 8851: GuildBadgeImageSource ===

// Module 8851 (GuildBadgeImageSource)
import shared from "shared" /* 4930 */;
import _modDef6170 from "module_6170" /* 6170 */;
import _modDef6171 from "module_6171" /* 6171 */;
import GuildTraits from "GuildTraits" /* 8848 */;
import BadgeCategory from "BadgeCategory" /* 8849 */;
import _modDef8852 from "module_8852" /* 8852 */;
import _modDef8853 from "module_8853" /* 8853 */;
import _modDef8854 from "module_8854" /* 8854 */;
import _modDef8855 from "module_8855" /* 8855 */;
import _modDef8856 from "module_8856" /* 8856 */;
import _modDef8857 from "module_8857" /* 8857 */;

require = fn;
const badgeVariants = {};
badgeVariants[fn(8849).BadgeCategory.STAFF] = { imageSource: _modDef6170 };
let obj2 = { imageSource: _modDef6170 };
badgeVariants[fn(8849).BadgeCategory.PARTNERED] = { imageSource: _modDef6171 };
const obj3 = { imageSource: _modDef6171 };
badgeVariants[fn(8849).BadgeCategory.VERIFIED] = { imageSource: _modDef6170 };
const obj4 = { imageSource: _modDef6170 };
badgeVariants[fn(8849).BadgeCategory.COMMUNITY] = { imageSource: _modDef8852, imageSourceLight: _modDef8853, premiumImageSource: _modDef8854 };
const obj5 = { imageSource: _modDef8852, imageSourceLight: _modDef8853, premiumImageSource: _modDef8854 };
badgeVariants[fn(8849).BadgeCategory.DISCOVERABLE] = { imageSource: _modDef8855, imageSourceLight: _modDef8856, premiumImageSource: _modDef8857 };
const obj6 = { imageSource: _modDef8855, imageSourceLight: _modDef8856, premiumImageSource: _modDef8857 };
badgeVariants[fn(8849).BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: _modDef6170 };
badgeVariants[fn(8849).BadgeCategory.NONE] = {};
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