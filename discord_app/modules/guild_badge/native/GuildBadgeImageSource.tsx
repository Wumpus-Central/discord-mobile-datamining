// === Module 9409: GuildBadgeImageSource ===

// Module 9409 (GuildBadgeImageSource)
import shared from "shared" /* 5177 */;
import _modDef7050 from "module_7050" /* 7050 */;
import _modDef7051 from "module_7051" /* 7051 */;
import GuildTraits from "GuildTraits" /* 9403 */;
import BadgeCategory from "BadgeCategory" /* 9404 */;
import _modDef9410 from "module_9410" /* 9410 */;
import _modDef9411 from "module_9411" /* 9411 */;
import _modDef9412 from "module_9412" /* 9412 */;
import _modDef9413 from "module_9413" /* 9413 */;

require = fn;
const badgeVariants = {};
badgeVariants[fn(9404).BadgeCategory.STAFF] = { imageSource: _modDef7050 };
let obj2 = { imageSource: _modDef7050 };
badgeVariants[fn(9404).BadgeCategory.PARTNERED] = { imageSource: _modDef7051 };
const obj3 = { imageSource: _modDef7051 };
badgeVariants[fn(9404).BadgeCategory.VERIFIED] = { imageSource: _modDef7050 };
const obj4 = { imageSource: _modDef7050 };
badgeVariants[fn(9404).BadgeCategory.COMMUNITY] = { imageSource: _modDef9410, imageSourceLight: _modDef9411, premiumImageSource: _modDef9412 };
const obj5 = { imageSource: _modDef9410, imageSourceLight: _modDef9411, premiumImageSource: _modDef9412 };
badgeVariants[fn(9404).BadgeCategory.DISCOVERABLE] = { imageSource: _modDef9413 };
const obj6 = { imageSource: _modDef9413 };
badgeVariants[fn(9404).BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: _modDef7050 };
badgeVariants[fn(9404).BadgeCategory.NONE] = {};
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