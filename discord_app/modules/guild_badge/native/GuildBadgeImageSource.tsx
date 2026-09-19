// === Module 9020: GuildBadgeImageSource ===

// Module 9020 (GuildBadgeImageSource)
import shared from "shared" /* 4607 */;
import _modDef5803 from "module_5803" /* 5803 */;
import _modDef5804 from "module_5804" /* 5804 */;
import BadgeCategory from "BadgeCategory" /* 9021 */;
import GuildTraits from "GuildTraits" /* 9022 */;
import _modDef9023 from "module_9023" /* 9023 */;
import _modDef9024 from "module_9024" /* 9024 */;
import _modDef9025 from "module_9025" /* 9025 */;
import _modDef9026 from "module_9026" /* 9026 */;
import _modDef9027 from "module_9027" /* 9027 */;
import _modDef9028 from "module_9028" /* 9028 */;

require = fn;
const badgeVariants = {};
badgeVariants[fn(9021).BadgeCategory.STAFF] = { imageSource: _modDef5803 };
let obj2 = { imageSource: _modDef5803 };
badgeVariants[fn(9021).BadgeCategory.PARTNERED] = { imageSource: _modDef5804 };
const obj3 = { imageSource: _modDef5804 };
badgeVariants[fn(9021).BadgeCategory.VERIFIED] = { imageSource: _modDef5803 };
const obj4 = { imageSource: _modDef5803 };
badgeVariants[fn(9021).BadgeCategory.COMMUNITY] = { imageSource: _modDef9023, imageSourceLight: _modDef9024, premiumImageSource: _modDef9025 };
const obj5 = { imageSource: _modDef9023, imageSourceLight: _modDef9024, premiumImageSource: _modDef9025 };
badgeVariants[fn(9021).BadgeCategory.DISCOVERABLE] = { imageSource: _modDef9026, imageSourceLight: _modDef9027, premiumImageSource: _modDef9028 };
const obj6 = { imageSource: _modDef9026, imageSourceLight: _modDef9027, premiumImageSource: _modDef9028 };
badgeVariants[fn(9021).BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: _modDef5803 };
badgeVariants[fn(9021).BadgeCategory.NONE] = {};
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