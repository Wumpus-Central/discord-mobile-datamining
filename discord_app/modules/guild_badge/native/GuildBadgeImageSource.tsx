// === Module 8811: GuildBadgeImageSource ===

// Module 8811 (GuildBadgeImageSource)
import shared from "shared" /* 4456 */;
import _modDef5641 from "module_5641" /* 5641 */;
import _modDef5642 from "module_5642" /* 5642 */;
import BadgeCategory from "BadgeCategory" /* 8812 */;
import GuildTraits from "GuildTraits" /* 8813 */;
import _modDef8814 from "module_8814" /* 8814 */;
import _modDef8815 from "module_8815" /* 8815 */;
import _modDef8816 from "module_8816" /* 8816 */;
import _modDef8817 from "module_8817" /* 8817 */;
import _modDef8818 from "module_8818" /* 8818 */;
import _modDef8819 from "module_8819" /* 8819 */;

require = fn;
let badgeVariants = {};
badgeVariants = { imageSource: _modDef5641 };
badgeVariants[fn(8812).BadgeCategory.STAFF] = badgeVariants;
badgeVariants = { imageSource: _modDef5642 };
badgeVariants[fn(8812).BadgeCategory.PARTNERED] = badgeVariants;
badgeVariants[fn(8812).BadgeCategory.VERIFIED] = { imageSource: _modDef5641 };
const obj1 = { imageSource: _modDef5641 };
badgeVariants[fn(8812).BadgeCategory.COMMUNITY] = { imageSource: _modDef8814, imageSourceLight: _modDef8815, premiumImageSource: _modDef8816 };
let obj2 = { imageSource: _modDef8814, imageSourceLight: _modDef8815, premiumImageSource: _modDef8816 };
badgeVariants[fn(8812).BadgeCategory.DISCOVERABLE] = { imageSource: _modDef8817, imageSourceLight: _modDef8818, premiumImageSource: _modDef8819 };
const obj3 = { imageSource: _modDef8817, imageSourceLight: _modDef8818, premiumImageSource: _modDef8819 };
badgeVariants[fn(8812).BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: _modDef5641 };
badgeVariants[fn(8812).BadgeCategory.NONE] = {};
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