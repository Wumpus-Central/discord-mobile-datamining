// === Module 8832: GuildBadgeImageSource ===

// Module 8832 (GuildBadgeImageSource)
import shared from "shared" /* 4458 */;
import _modDef5642 from "module_5642" /* 5642 */;
import _modDef5643 from "module_5643" /* 5643 */;
import BadgeCategory from "BadgeCategory" /* 8833 */;
import GuildTraits from "GuildTraits" /* 8834 */;
import _modDef8835 from "module_8835" /* 8835 */;
import _modDef8836 from "module_8836" /* 8836 */;
import _modDef8837 from "module_8837" /* 8837 */;
import _modDef8838 from "module_8838" /* 8838 */;
import _modDef8839 from "module_8839" /* 8839 */;
import _modDef8840 from "module_8840" /* 8840 */;

require = fn;
let badgeVariants = {};
badgeVariants = { imageSource: _modDef5642 };
badgeVariants[fn(8833).BadgeCategory.STAFF] = badgeVariants;
badgeVariants = { imageSource: _modDef5643 };
badgeVariants[fn(8833).BadgeCategory.PARTNERED] = badgeVariants;
badgeVariants[fn(8833).BadgeCategory.VERIFIED] = { imageSource: _modDef5642 };
const obj1 = { imageSource: _modDef5642 };
badgeVariants[fn(8833).BadgeCategory.COMMUNITY] = { imageSource: _modDef8835, imageSourceLight: _modDef8836, premiumImageSource: _modDef8837 };
let obj2 = { imageSource: _modDef8835, imageSourceLight: _modDef8836, premiumImageSource: _modDef8837 };
badgeVariants[fn(8833).BadgeCategory.DISCOVERABLE] = { imageSource: _modDef8838, imageSourceLight: _modDef8839, premiumImageSource: _modDef8840 };
const obj3 = { imageSource: _modDef8838, imageSourceLight: _modDef8839, premiumImageSource: _modDef8840 };
badgeVariants[fn(8833).BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: _modDef5642 };
badgeVariants[fn(8833).BadgeCategory.NONE] = {};
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