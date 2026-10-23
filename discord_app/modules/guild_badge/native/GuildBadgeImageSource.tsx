// discord_app/modules/guild_badge/native/GuildBadgeImageSource.tsx
import shared from "../../../design/shared.tsx";
import _modDef6873 from "../../../../_runtime/metro/06873__.js";
import _modDef6874 from "../../../../_runtime/metro/06874__.js";
import GuildTraits from "../GuildTraits.tsx";
import BadgeCategory from "../BadgeCategory.tsx";
import _modDef9214 from "../../../../_runtime/metro/09214__.js";
import _modDef9215 from "../../../../_runtime/metro/09215__.js";
import _modDef9216 from "../../../../_runtime/metro/09216__.js";
import _modDef9217 from "../../../../_runtime/metro/09217__.js";
import _modDef9218 from "../../../../_runtime/metro/09218__.js";
import _modDef9219 from "../../../../_runtime/metro/09219__.js";

require = fn;
const badgeVariants = {};
badgeVariants[fn(9211).BadgeCategory.STAFF] = { imageSource: _modDef6873 };
let obj2 = { imageSource: _modDef6873 };
badgeVariants[fn(9211).BadgeCategory.PARTNERED] = { imageSource: _modDef6874 };
const obj3 = { imageSource: _modDef6874 };
badgeVariants[fn(9211).BadgeCategory.VERIFIED] = { imageSource: _modDef6873 };
const obj4 = { imageSource: _modDef6873 };
badgeVariants[fn(9211).BadgeCategory.COMMUNITY] = {
  imageSource: _modDef9214,
  imageSourceLight: _modDef9215,
  premiumImageSource: _modDef9216,
};
const obj5 = { imageSource: _modDef9214, imageSourceLight: _modDef9215, premiumImageSource: _modDef9216 };
badgeVariants[fn(9211).BadgeCategory.DISCOVERABLE] = {
  imageSource: _modDef9217,
  imageSourceLight: _modDef9218,
  premiumImageSource: _modDef9219,
};
const obj6 = { imageSource: _modDef9217, imageSourceLight: _modDef9218, premiumImageSource: _modDef9219 };
badgeVariants[fn(9211).BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: _modDef6873 };
badgeVariants[fn(9211).BadgeCategory.NONE] = {};
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
