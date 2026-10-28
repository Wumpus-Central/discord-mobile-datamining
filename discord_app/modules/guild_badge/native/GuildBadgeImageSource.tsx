// === Module 9270: GuildBadgeImageSource ===

// Module 9270 (GuildBadgeImageSource)
import shared from "shared" /* 5011 */;
import _modDef6924 from "module_6924" /* 6924 */;
import _modDef6925 from "module_6925" /* 6925 */;
import GuildTraits from "GuildTraits" /* 9267 */;
import BadgeCategory from "BadgeCategory" /* 9268 */;
import _modDef9271 from "module_9271" /* 9271 */;
import _modDef9272 from "module_9272" /* 9272 */;
import _modDef9273 from "module_9273" /* 9273 */;
import _modDef9274 from "module_9274" /* 9274 */;
import _modDef9275 from "module_9275" /* 9275 */;
import _modDef9276 from "module_9276" /* 9276 */;

require = fn;
const badgeVariants = {};
badgeVariants[fn(9268).BadgeCategory.STAFF] = { imageSource: _modDef6924 };
let obj2 = { imageSource: _modDef6924 };
badgeVariants[fn(9268).BadgeCategory.PARTNERED] = { imageSource: _modDef6925 };
const obj3 = { imageSource: _modDef6925 };
badgeVariants[fn(9268).BadgeCategory.VERIFIED] = { imageSource: _modDef6924 };
const obj4 = { imageSource: _modDef6924 };
badgeVariants[fn(9268).BadgeCategory.COMMUNITY] = { imageSource: _modDef9271, imageSourceLight: _modDef9272, premiumImageSource: _modDef9273 };
const obj5 = { imageSource: _modDef9271, imageSourceLight: _modDef9272, premiumImageSource: _modDef9273 };
badgeVariants[fn(9268).BadgeCategory.DISCOVERABLE] = { imageSource: _modDef9274, imageSourceLight: _modDef9275, premiumImageSource: _modDef9276 };
const obj6 = { imageSource: _modDef9274, imageSourceLight: _modDef9275, premiumImageSource: _modDef9276 };
badgeVariants[fn(9268).BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: _modDef6924 };
badgeVariants[fn(9268).BadgeCategory.NONE] = {};
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