// === Module 9274: GuildBadgeImageSource ===

// Module 9274 (GuildBadgeImageSource)
import shared from "shared" /* 5012 */;
import _modDef6948 from "module_6948" /* 6948 */;
import _modDef6949 from "module_6949" /* 6949 */;
import GuildTraits from "GuildTraits" /* 9271 */;
import BadgeCategory from "BadgeCategory" /* 9272 */;
import _modDef9275 from "module_9275" /* 9275 */;
import _modDef9276 from "module_9276" /* 9276 */;
import _modDef9277 from "module_9277" /* 9277 */;
import _modDef9278 from "module_9278" /* 9278 */;
import _modDef9279 from "module_9279" /* 9279 */;
import _modDef9280 from "module_9280" /* 9280 */;

require = fn;
const badgeVariants = {};
badgeVariants[fn(9272).BadgeCategory.STAFF] = { imageSource: _modDef6948 };
let obj2 = { imageSource: _modDef6948 };
badgeVariants[fn(9272).BadgeCategory.PARTNERED] = { imageSource: _modDef6949 };
const obj3 = { imageSource: _modDef6949 };
badgeVariants[fn(9272).BadgeCategory.VERIFIED] = { imageSource: _modDef6948 };
const obj4 = { imageSource: _modDef6948 };
badgeVariants[fn(9272).BadgeCategory.COMMUNITY] = { imageSource: _modDef9275, imageSourceLight: _modDef9276, premiumImageSource: _modDef9277 };
const obj5 = { imageSource: _modDef9275, imageSourceLight: _modDef9276, premiumImageSource: _modDef9277 };
badgeVariants[fn(9272).BadgeCategory.DISCOVERABLE] = { imageSource: _modDef9278, imageSourceLight: _modDef9279, premiumImageSource: _modDef9280 };
const obj6 = { imageSource: _modDef9278, imageSourceLight: _modDef9279, premiumImageSource: _modDef9280 };
badgeVariants[fn(9272).BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: _modDef6948 };
badgeVariants[fn(9272).BadgeCategory.NONE] = {};
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_badge/native/GuildBadgeImageSource.tsx");

export { badgeVariants };
export function resolveImageSource(premiumImageSource, guildTraits, arg2) {
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
}
export function getGuildBadgeImageSource(guild, theme) {
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
}