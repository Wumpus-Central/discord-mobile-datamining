// === Module 8395: GuildBadgeImageSource ===

// Module 8395 (GuildBadgeImageSource)
import shared from "shared" /* 4729 */;
import _modDef5978 from "module_5978" /* 5978 */;
import _modDef5979 from "module_5979" /* 5979 */;
import BadgeCategory from "BadgeCategory" /* 8396 */;
import GuildTraits from "GuildTraits" /* 8397 */;
import _modDef8398 from "module_8398" /* 8398 */;
import _modDef8399 from "module_8399" /* 8399 */;
import _modDef8400 from "module_8400" /* 8400 */;
import _modDef8401 from "module_8401" /* 8401 */;
import _modDef8402 from "module_8402" /* 8402 */;
import _modDef8403 from "module_8403" /* 8403 */;

require = fn;
const badgeVariants = {};
badgeVariants[fn(8396).BadgeCategory.STAFF] = { imageSource: _modDef5978 };
let obj2 = { imageSource: _modDef5978 };
badgeVariants[fn(8396).BadgeCategory.PARTNERED] = { imageSource: _modDef5979 };
const obj3 = { imageSource: _modDef5979 };
badgeVariants[fn(8396).BadgeCategory.VERIFIED] = { imageSource: _modDef5978 };
const obj4 = { imageSource: _modDef5978 };
badgeVariants[fn(8396).BadgeCategory.COMMUNITY] = { imageSource: _modDef8398, imageSourceLight: _modDef8399, premiumImageSource: _modDef8400 };
const obj5 = { imageSource: _modDef8398, imageSourceLight: _modDef8399, premiumImageSource: _modDef8400 };
badgeVariants[fn(8396).BadgeCategory.DISCOVERABLE] = { imageSource: _modDef8401, imageSourceLight: _modDef8402, premiumImageSource: _modDef8403 };
const obj6 = { imageSource: _modDef8401, imageSourceLight: _modDef8402, premiumImageSource: _modDef8403 };
badgeVariants[fn(8396).BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: _modDef5978 };
badgeVariants[fn(8396).BadgeCategory.NONE] = {};
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