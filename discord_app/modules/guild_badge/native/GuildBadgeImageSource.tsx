// === Module 8746: GuildBadgeImageSource ===

// Module 8746 (GuildBadgeImageSource)
import shared from "shared" /* 4411 */;
import _modDef5591 from "module_5591" /* 5591 */;
import _modDef5592 from "module_5592" /* 5592 */;
import BadgeCategory from "BadgeCategory" /* 8747 */;
import GuildTraits from "GuildTraits" /* 8748 */;
import _modDef8749 from "module_8749" /* 8749 */;
import _modDef8750 from "module_8750" /* 8750 */;
import _modDef8751 from "module_8751" /* 8751 */;
import _modDef8752 from "module_8752" /* 8752 */;
import _modDef8753 from "module_8753" /* 8753 */;
import _modDef8754 from "module_8754" /* 8754 */;

require = fn;
let badgeVariants = {};
badgeVariants = { imageSource: _modDef5591 };
badgeVariants[fn(8747).BadgeCategory.STAFF] = badgeVariants;
badgeVariants = { imageSource: _modDef5592 };
badgeVariants[fn(8747).BadgeCategory.PARTNERED] = badgeVariants;
badgeVariants[fn(8747).BadgeCategory.VERIFIED] = { imageSource: _modDef5591 };
const obj1 = { imageSource: _modDef5591 };
badgeVariants[fn(8747).BadgeCategory.COMMUNITY] = { imageSource: _modDef8749, imageSourceLight: _modDef8750, premiumImageSource: _modDef8751 };
let obj2 = { imageSource: _modDef8749, imageSourceLight: _modDef8750, premiumImageSource: _modDef8751 };
badgeVariants[fn(8747).BadgeCategory.DISCOVERABLE] = { imageSource: _modDef8752, imageSourceLight: _modDef8753, premiumImageSource: _modDef8754 };
const obj3 = { imageSource: _modDef8752, imageSourceLight: _modDef8753, premiumImageSource: _modDef8754 };
badgeVariants[fn(8747).BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: _modDef5591 };
badgeVariants[fn(8747).BadgeCategory.NONE] = {};
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