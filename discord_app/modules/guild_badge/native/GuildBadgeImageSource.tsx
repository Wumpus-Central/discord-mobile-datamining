// === Module 8774: GuildBadgeImageSource ===

// Module 8774 (GuildBadgeImageSource)
import shared from "shared" /* 4425 */;
import _modDef5605 from "module_5605" /* 5605 */;
import _modDef5606 from "module_5606" /* 5606 */;
import BadgeCategory from "BadgeCategory" /* 8775 */;
import GuildTraits from "GuildTraits" /* 8776 */;
import _modDef8777 from "module_8777" /* 8777 */;
import _modDef8778 from "module_8778" /* 8778 */;
import _modDef8779 from "module_8779" /* 8779 */;
import _modDef8780 from "module_8780" /* 8780 */;
import _modDef8781 from "module_8781" /* 8781 */;
import _modDef8782 from "module_8782" /* 8782 */;

require = fn;
let badgeVariants = {};
badgeVariants = { imageSource: _modDef5605 };
badgeVariants[fn(8775).BadgeCategory.STAFF] = badgeVariants;
badgeVariants = { imageSource: _modDef5606 };
badgeVariants[fn(8775).BadgeCategory.PARTNERED] = badgeVariants;
badgeVariants[fn(8775).BadgeCategory.VERIFIED] = { imageSource: _modDef5605 };
const obj1 = { imageSource: _modDef5605 };
badgeVariants[fn(8775).BadgeCategory.COMMUNITY] = { imageSource: _modDef8777, imageSourceLight: _modDef8778, premiumImageSource: _modDef8779 };
let obj2 = { imageSource: _modDef8777, imageSourceLight: _modDef8778, premiumImageSource: _modDef8779 };
badgeVariants[fn(8775).BadgeCategory.DISCOVERABLE] = { imageSource: _modDef8780, imageSourceLight: _modDef8781, premiumImageSource: _modDef8782 };
const obj3 = { imageSource: _modDef8780, imageSourceLight: _modDef8781, premiumImageSource: _modDef8782 };
badgeVariants[fn(8775).BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: _modDef5605 };
badgeVariants[fn(8775).BadgeCategory.NONE] = {};
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