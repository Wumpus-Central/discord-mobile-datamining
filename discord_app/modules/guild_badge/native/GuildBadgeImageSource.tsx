// === Module 9026: GuildBadgeImageSource ===

// Module 9026 (GuildBadgeImageSource)
import shared from "shared" /* 4608 */;
import _modDef5810 from "module_5810" /* 5810 */;
import _modDef5811 from "module_5811" /* 5811 */;
import BadgeCategory from "BadgeCategory" /* 9027 */;
import GuildTraits from "GuildTraits" /* 9028 */;
import _modDef9029 from "module_9029" /* 9029 */;
import _modDef9030 from "module_9030" /* 9030 */;
import _modDef9031 from "module_9031" /* 9031 */;
import _modDef9032 from "module_9032" /* 9032 */;
import _modDef9033 from "module_9033" /* 9033 */;
import _modDef9034 from "module_9034" /* 9034 */;

require = fn;
const badgeVariants = {};
badgeVariants[fn(9027).BadgeCategory.STAFF] = { imageSource: _modDef5810 };
let obj2 = { imageSource: _modDef5810 };
badgeVariants[fn(9027).BadgeCategory.PARTNERED] = { imageSource: _modDef5811 };
const obj3 = { imageSource: _modDef5811 };
badgeVariants[fn(9027).BadgeCategory.VERIFIED] = { imageSource: _modDef5810 };
const obj4 = { imageSource: _modDef5810 };
badgeVariants[fn(9027).BadgeCategory.COMMUNITY] = { imageSource: _modDef9029, imageSourceLight: _modDef9030, premiumImageSource: _modDef9031 };
const obj5 = { imageSource: _modDef9029, imageSourceLight: _modDef9030, premiumImageSource: _modDef9031 };
badgeVariants[fn(9027).BadgeCategory.DISCOVERABLE] = { imageSource: _modDef9032, imageSourceLight: _modDef9033, premiumImageSource: _modDef9034 };
const obj6 = { imageSource: _modDef9032, imageSourceLight: _modDef9033, premiumImageSource: _modDef9034 };
badgeVariants[fn(9027).BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: _modDef5810 };
badgeVariants[fn(9027).BadgeCategory.NONE] = {};
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