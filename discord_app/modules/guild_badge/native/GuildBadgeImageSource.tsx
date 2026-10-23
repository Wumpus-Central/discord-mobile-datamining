// === Module 9236: GuildBadgeImageSource ===

// Module 9236 (GuildBadgeImageSource)
import shared from "shared" /* 4976 */;
import _modDef6886 from "module_6886" /* 6886 */;
import _modDef6887 from "module_6887" /* 6887 */;
import GuildTraits from "GuildTraits" /* 9233 */;
import BadgeCategory from "BadgeCategory" /* 9234 */;
import _modDef9237 from "module_9237" /* 9237 */;
import _modDef9238 from "module_9238" /* 9238 */;
import _modDef9239 from "module_9239" /* 9239 */;
import _modDef9240 from "module_9240" /* 9240 */;
import _modDef9241 from "module_9241" /* 9241 */;
import _modDef9242 from "module_9242" /* 9242 */;

require = fn;
const badgeVariants = {};
badgeVariants[fn(9234).BadgeCategory.STAFF] = { imageSource: _modDef6886 };
let obj2 = { imageSource: _modDef6886 };
badgeVariants[fn(9234).BadgeCategory.PARTNERED] = { imageSource: _modDef6887 };
const obj3 = { imageSource: _modDef6887 };
badgeVariants[fn(9234).BadgeCategory.VERIFIED] = { imageSource: _modDef6886 };
const obj4 = { imageSource: _modDef6886 };
badgeVariants[fn(9234).BadgeCategory.COMMUNITY] = { imageSource: _modDef9237, imageSourceLight: _modDef9238, premiumImageSource: _modDef9239 };
const obj5 = { imageSource: _modDef9237, imageSourceLight: _modDef9238, premiumImageSource: _modDef9239 };
badgeVariants[fn(9234).BadgeCategory.DISCOVERABLE] = { imageSource: _modDef9240, imageSourceLight: _modDef9241, premiumImageSource: _modDef9242 };
const obj6 = { imageSource: _modDef9240, imageSourceLight: _modDef9241, premiumImageSource: _modDef9242 };
badgeVariants[fn(9234).BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: _modDef6886 };
badgeVariants[fn(9234).BadgeCategory.NONE] = {};
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