// === Module 9391: GuildBadgeImageSource ===

// Module 9391 (GuildBadgeImageSource)
import shared from "shared" /* 5147 */;
import _modDef7025 from "module_7025" /* 7025 */;
import _modDef7026 from "module_7026" /* 7026 */;
import GuildTraits from "GuildTraits" /* 9385 */;
import BadgeCategory from "BadgeCategory" /* 9386 */;
import _modDef9392 from "module_9392" /* 9392 */;
import _modDef9393 from "module_9393" /* 9393 */;
import _modDef9394 from "module_9394" /* 9394 */;
import _modDef9395 from "module_9395" /* 9395 */;

require = fn;
const badgeVariants = {};
badgeVariants[fn(9386).BadgeCategory.STAFF] = { imageSource: _modDef7025 };
let obj2 = { imageSource: _modDef7025 };
badgeVariants[fn(9386).BadgeCategory.PARTNERED] = { imageSource: _modDef7026 };
const obj3 = { imageSource: _modDef7026 };
badgeVariants[fn(9386).BadgeCategory.VERIFIED] = { imageSource: _modDef7025 };
const obj4 = { imageSource: _modDef7025 };
badgeVariants[fn(9386).BadgeCategory.COMMUNITY] = { imageSource: _modDef9392, imageSourceLight: _modDef9393, premiumImageSource: _modDef9394 };
const obj5 = { imageSource: _modDef9392, imageSourceLight: _modDef9393, premiumImageSource: _modDef9394 };
badgeVariants[fn(9386).BadgeCategory.DISCOVERABLE] = { imageSource: _modDef9395 };
const obj6 = { imageSource: _modDef9395 };
badgeVariants[fn(9386).BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: _modDef7025 };
badgeVariants[fn(9386).BadgeCategory.NONE] = {};
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