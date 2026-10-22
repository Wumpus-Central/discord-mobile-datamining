// discord_app/modules/guild_badge/native/GuildBadgeImageSource.tsx
import shared from "../../../design/shared.tsx";
import _modDef6874 from "../../../../_runtime/metro/06874__.js";
import _modDef6875 from "../../../../_runtime/metro/06875__.js";
import GuildTraits from "../GuildTraits.tsx";
import BadgeCategory from "../BadgeCategory.tsx";
import _modDef9207 from "../../../../_runtime/metro/09207__.js";
import _modDef9208 from "../../../../_runtime/metro/09208__.js";
import _modDef9209 from "../../../../_runtime/metro/09209__.js";
import _modDef9210 from "../../../../_runtime/metro/09210__.js";
import _modDef9211 from "../../../../_runtime/metro/09211__.js";
import _modDef9212 from "../../../../_runtime/metro/09212__.js";

require = fn;
const badgeVariants = {};
badgeVariants[fn(9204).BadgeCategory.STAFF] = { imageSource: _modDef6874 };
let obj2 = { imageSource: _modDef6874 };
badgeVariants[fn(9204).BadgeCategory.PARTNERED] = { imageSource: _modDef6875 };
const obj3 = { imageSource: _modDef6875 };
badgeVariants[fn(9204).BadgeCategory.VERIFIED] = { imageSource: _modDef6874 };
const obj4 = { imageSource: _modDef6874 };
badgeVariants[fn(9204).BadgeCategory.COMMUNITY] = {
  imageSource: _modDef9207,
  imageSourceLight: _modDef9208,
  premiumImageSource: _modDef9209,
};
const obj5 = { imageSource: _modDef9207, imageSourceLight: _modDef9208, premiumImageSource: _modDef9209 };
badgeVariants[fn(9204).BadgeCategory.DISCOVERABLE] = {
  imageSource: _modDef9210,
  imageSourceLight: _modDef9211,
  premiumImageSource: _modDef9212,
};
const obj6 = { imageSource: _modDef9210, imageSourceLight: _modDef9211, premiumImageSource: _modDef9212 };
badgeVariants[fn(9204).BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: _modDef6874 };
badgeVariants[fn(9204).BadgeCategory.NONE] = {};
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
