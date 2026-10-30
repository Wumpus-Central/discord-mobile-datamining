// === Module 9288: GuildBadgeImageSource ===

// Module 9288 (GuildBadgeImageSource)
import shared from "shared" /* 5016 */;
import _modDef6956 from "module_6956" /* 6956 */;
import _modDef6957 from "module_6957" /* 6957 */;
import GuildTraits from "GuildTraits" /* 9285 */;
import BadgeCategory from "BadgeCategory" /* 9286 */;
import _modDef9289 from "module_9289" /* 9289 */;
import _modDef9290 from "module_9290" /* 9290 */;
import _modDef9291 from "module_9291" /* 9291 */;
import _modDef9292 from "module_9292" /* 9292 */;
import _modDef9293 from "module_9293" /* 9293 */;
import _modDef9294 from "module_9294" /* 9294 */;

require = fn;
const badgeVariants = {};
badgeVariants[fn(9286).BadgeCategory.STAFF] = { imageSource: _modDef6956 };
let obj2 = { imageSource: _modDef6956 };
badgeVariants[fn(9286).BadgeCategory.PARTNERED] = { imageSource: _modDef6957 };
const obj3 = { imageSource: _modDef6957 };
badgeVariants[fn(9286).BadgeCategory.VERIFIED] = { imageSource: _modDef6956 };
const obj4 = { imageSource: _modDef6956 };
badgeVariants[fn(9286).BadgeCategory.COMMUNITY] = { imageSource: _modDef9289, imageSourceLight: _modDef9290, premiumImageSource: _modDef9291 };
const obj5 = { imageSource: _modDef9289, imageSourceLight: _modDef9290, premiumImageSource: _modDef9291 };
badgeVariants[fn(9286).BadgeCategory.DISCOVERABLE] = { imageSource: _modDef9292, imageSourceLight: _modDef9293, premiumImageSource: _modDef9294 };
const obj6 = { imageSource: _modDef9292, imageSourceLight: _modDef9293, premiumImageSource: _modDef9294 };
badgeVariants[fn(9286).BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: _modDef6956 };
badgeVariants[fn(9286).BadgeCategory.NONE] = {};
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