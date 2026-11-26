// === Module 8739: GuildBadgeImageSource ===

// Module 8739 (GuildBadgeImageSource)
import shared from "shared" /* 5050 */;
import _modDef7057 from "module_7057" /* 7057 */;
import _modDef7058 from "module_7058" /* 7058 */;
import GuildTraits from "GuildTraits" /* 8733 */;
import BadgeCategory from "BadgeCategory" /* 8734 */;
import _modDef8740 from "module_8740" /* 8740 */;
import _modDef8741 from "module_8741" /* 8741 */;
import _modDef8742 from "module_8742" /* 8742 */;
import _modDef8743 from "module_8743" /* 8743 */;

require = fn;
const badgeVariants = {};
badgeVariants[fn(8734).BadgeCategory.STAFF] = { imageSource: _modDef7057 };
let obj2 = { imageSource: _modDef7057 };
badgeVariants[fn(8734).BadgeCategory.PARTNERED] = { imageSource: _modDef7058 };
const obj3 = { imageSource: _modDef7058 };
badgeVariants[fn(8734).BadgeCategory.VERIFIED] = { imageSource: _modDef7057 };
const obj4 = { imageSource: _modDef7057 };
badgeVariants[fn(8734).BadgeCategory.COMMUNITY] = { imageSource: _modDef8740, imageSourceLight: _modDef8741, premiumImageSource: _modDef8742 };
const obj5 = { imageSource: _modDef8740, imageSourceLight: _modDef8741, premiumImageSource: _modDef8742 };
badgeVariants[fn(8734).BadgeCategory.DISCOVERABLE] = { imageSource: _modDef8743 };
const obj6 = { imageSource: _modDef8743 };
badgeVariants[fn(8734).BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: _modDef7057 };
badgeVariants[fn(8734).BadgeCategory.NONE] = {};
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