// === Module 8391: GuildBadgeImageSource ===

// Module 8391 (GuildBadgeImageSource)
import shared from "shared" /* 4714 */;
import _modDef6089 from "module_6089" /* 6089 */;
import _modDef6090 from "module_6090" /* 6090 */;
import BadgeCategory from "BadgeCategory" /* 8392 */;
import GuildTraits from "GuildTraits" /* 8393 */;
import _modDef8394 from "module_8394" /* 8394 */;
import _modDef8395 from "module_8395" /* 8395 */;
import _modDef8396 from "module_8396" /* 8396 */;
import _modDef8397 from "module_8397" /* 8397 */;
import _modDef8398 from "module_8398" /* 8398 */;
import _modDef8399 from "module_8399" /* 8399 */;

require = fn;
const badgeVariants = {};
badgeVariants[fn(8392).BadgeCategory.STAFF] = { imageSource: _modDef6089 };
let obj2 = { imageSource: _modDef6089 };
badgeVariants[fn(8392).BadgeCategory.PARTNERED] = { imageSource: _modDef6090 };
const obj3 = { imageSource: _modDef6090 };
badgeVariants[fn(8392).BadgeCategory.VERIFIED] = { imageSource: _modDef6089 };
const obj4 = { imageSource: _modDef6089 };
badgeVariants[fn(8392).BadgeCategory.COMMUNITY] = { imageSource: _modDef8394, imageSourceLight: _modDef8395, premiumImageSource: _modDef8396 };
const obj5 = { imageSource: _modDef8394, imageSourceLight: _modDef8395, premiumImageSource: _modDef8396 };
badgeVariants[fn(8392).BadgeCategory.DISCOVERABLE] = { imageSource: _modDef8397, imageSourceLight: _modDef8398, premiumImageSource: _modDef8399 };
const obj6 = { imageSource: _modDef8397, imageSourceLight: _modDef8398, premiumImageSource: _modDef8399 };
badgeVariants[fn(8392).BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: _modDef6089 };
badgeVariants[fn(8392).BadgeCategory.NONE] = {};
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