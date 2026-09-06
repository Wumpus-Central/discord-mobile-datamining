// === Module 8741: GuildBadgeImageSource ===

// Module 8741 (GuildBadgeImageSource)
import shared from "shared" /* 4411 */;
import _modDef5591 from "module_5591" /* 5591 */;
import _modDef5592 from "module_5592" /* 5592 */;
import BadgeCategory from "BadgeCategory" /* 8742 */;
import GuildTraits from "GuildTraits" /* 8743 */;
import _modDef8744 from "module_8744" /* 8744 */;
import _modDef8745 from "module_8745" /* 8745 */;
import _modDef8746 from "module_8746" /* 8746 */;
import _modDef8747 from "module_8747" /* 8747 */;
import _modDef8748 from "module_8748" /* 8748 */;
import _modDef8749 from "module_8749" /* 8749 */;

require = fn;
let badgeVariants = {};
badgeVariants = { imageSource: _modDef5591 };
badgeVariants[fn(8742).BadgeCategory.STAFF] = badgeVariants;
badgeVariants = { imageSource: _modDef5592 };
badgeVariants[fn(8742).BadgeCategory.PARTNERED] = badgeVariants;
badgeVariants[fn(8742).BadgeCategory.VERIFIED] = { imageSource: _modDef5591 };
const obj1 = { imageSource: _modDef5591 };
badgeVariants[fn(8742).BadgeCategory.COMMUNITY] = { imageSource: _modDef8744, imageSourceLight: _modDef8745, premiumImageSource: _modDef8746 };
let obj2 = { imageSource: _modDef8744, imageSourceLight: _modDef8745, premiumImageSource: _modDef8746 };
badgeVariants[fn(8742).BadgeCategory.DISCOVERABLE] = { imageSource: _modDef8747, imageSourceLight: _modDef8748, premiumImageSource: _modDef8749 };
const obj3 = { imageSource: _modDef8747, imageSourceLight: _modDef8748, premiumImageSource: _modDef8749 };
badgeVariants[fn(8742).BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: _modDef5591 };
badgeVariants[fn(8742).BadgeCategory.NONE] = {};
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