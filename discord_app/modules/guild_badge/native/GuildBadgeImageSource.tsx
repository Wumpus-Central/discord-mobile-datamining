// === Module 9206: GuildBadgeImageSource ===

// Module 9206 (GuildBadgeImageSource)
import shared from "shared" /* 4976 */;
import _modDef6874 from "module_6874" /* 6874 */;
import _modDef6875 from "module_6875" /* 6875 */;
import GuildTraits from "GuildTraits" /* 9203 */;
import BadgeCategory from "BadgeCategory" /* 9204 */;
import _modDef9207 from "module_9207" /* 9207 */;
import _modDef9208 from "module_9208" /* 9208 */;
import _modDef9209 from "module_9209" /* 9209 */;
import _modDef9210 from "module_9210" /* 9210 */;
import _modDef9211 from "module_9211" /* 9211 */;
import _modDef9212 from "module_9212" /* 9212 */;

require = fn;
const badgeVariants = {};
badgeVariants[fn(9204).BadgeCategory.STAFF] = { imageSource: _modDef6874 };
let obj2 = { imageSource: _modDef6874 };
badgeVariants[fn(9204).BadgeCategory.PARTNERED] = { imageSource: _modDef6875 };
const obj3 = { imageSource: _modDef6875 };
badgeVariants[fn(9204).BadgeCategory.VERIFIED] = { imageSource: _modDef6874 };
const obj4 = { imageSource: _modDef6874 };
badgeVariants[fn(9204).BadgeCategory.COMMUNITY] = { imageSource: _modDef9207, imageSourceLight: _modDef9208, premiumImageSource: _modDef9209 };
const obj5 = { imageSource: _modDef9207, imageSourceLight: _modDef9208, premiumImageSource: _modDef9209 };
badgeVariants[fn(9204).BadgeCategory.DISCOVERABLE] = { imageSource: _modDef9210, imageSourceLight: _modDef9211, premiumImageSource: _modDef9212 };
const obj6 = { imageSource: _modDef9210, imageSourceLight: _modDef9211, premiumImageSource: _modDef9212 };
badgeVariants[fn(9204).BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: _modDef6874 };
badgeVariants[fn(9204).BadgeCategory.NONE] = {};
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