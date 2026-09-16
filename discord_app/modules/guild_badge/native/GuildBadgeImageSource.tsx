// === Module 8881: GuildBadgeImageSource ===

// Module 8881 (GuildBadgeImageSource)
import shared from "shared" /* 4489 */;
import _modDef5677 from "module_5677" /* 5677 */;
import _modDef5678 from "module_5678" /* 5678 */;
import BadgeCategory from "BadgeCategory" /* 8882 */;
import GuildTraits from "GuildTraits" /* 8883 */;
import _modDef8884 from "module_8884" /* 8884 */;
import _modDef8885 from "module_8885" /* 8885 */;
import _modDef8886 from "module_8886" /* 8886 */;
import _modDef8887 from "module_8887" /* 8887 */;
import _modDef8888 from "module_8888" /* 8888 */;
import _modDef8889 from "module_8889" /* 8889 */;

require = fn;
const badgeVariants = {};
badgeVariants[fn(8882).BadgeCategory.STAFF] = { imageSource: _modDef5677 };
let obj2 = { imageSource: _modDef5677 };
badgeVariants[fn(8882).BadgeCategory.PARTNERED] = { imageSource: _modDef5678 };
const obj3 = { imageSource: _modDef5678 };
badgeVariants[fn(8882).BadgeCategory.VERIFIED] = { imageSource: _modDef5677 };
const obj4 = { imageSource: _modDef5677 };
badgeVariants[fn(8882).BadgeCategory.COMMUNITY] = { imageSource: _modDef8884, imageSourceLight: _modDef8885, premiumImageSource: _modDef8886 };
const obj5 = { imageSource: _modDef8884, imageSourceLight: _modDef8885, premiumImageSource: _modDef8886 };
badgeVariants[fn(8882).BadgeCategory.DISCOVERABLE] = { imageSource: _modDef8887, imageSourceLight: _modDef8888, premiumImageSource: _modDef8889 };
const obj6 = { imageSource: _modDef8887, imageSourceLight: _modDef8888, premiumImageSource: _modDef8889 };
badgeVariants[fn(8882).BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: _modDef5677 };
badgeVariants[fn(8882).BadgeCategory.NONE] = {};
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