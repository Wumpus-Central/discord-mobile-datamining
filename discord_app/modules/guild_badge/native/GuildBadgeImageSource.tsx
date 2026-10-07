// === Module 8428: GuildBadgeImageSource ===

// Module 8428 (GuildBadgeImageSource)
import shared from "shared" /* 4735 */;
import _modDef5985 from "module_5985" /* 5985 */;
import _modDef5986 from "module_5986" /* 5986 */;
import BadgeCategory from "BadgeCategory" /* 8429 */;
import GuildTraits from "GuildTraits" /* 8430 */;
import _modDef8431 from "module_8431" /* 8431 */;
import _modDef8432 from "module_8432" /* 8432 */;
import _modDef8433 from "module_8433" /* 8433 */;
import _modDef8434 from "module_8434" /* 8434 */;
import _modDef8435 from "module_8435" /* 8435 */;
import _modDef8436 from "module_8436" /* 8436 */;

require = fn;
const badgeVariants = {};
badgeVariants[fn(8429).BadgeCategory.STAFF] = { imageSource: _modDef5985 };
let obj2 = { imageSource: _modDef5985 };
badgeVariants[fn(8429).BadgeCategory.PARTNERED] = { imageSource: _modDef5986 };
const obj3 = { imageSource: _modDef5986 };
badgeVariants[fn(8429).BadgeCategory.VERIFIED] = { imageSource: _modDef5985 };
const obj4 = { imageSource: _modDef5985 };
badgeVariants[fn(8429).BadgeCategory.COMMUNITY] = { imageSource: _modDef8431, imageSourceLight: _modDef8432, premiumImageSource: _modDef8433 };
const obj5 = { imageSource: _modDef8431, imageSourceLight: _modDef8432, premiumImageSource: _modDef8433 };
badgeVariants[fn(8429).BadgeCategory.DISCOVERABLE] = { imageSource: _modDef8434, imageSourceLight: _modDef8435, premiumImageSource: _modDef8436 };
const obj6 = { imageSource: _modDef8434, imageSourceLight: _modDef8435, premiumImageSource: _modDef8436 };
badgeVariants[fn(8429).BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: _modDef5985 };
badgeVariants[fn(8429).BadgeCategory.NONE] = {};
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