// discord_app/modules/guild_badge/native/GuildBadgeImageSource.tsx
import shared from "../../../design/shared.tsx";
import _modDef6384 from "../../../../_runtime/metro/06384__.js";
import _modDef6385 from "../../../../_runtime/metro/06385__.js";
import GuildTraits from "../GuildTraits.tsx";
import BadgeCategory from "../BadgeCategory.tsx";
import _modDef9088 from "../../../../_runtime/metro/09088__.js";
import _modDef9089 from "../../../../_runtime/metro/09089__.js";
import _modDef9090 from "../../../../_runtime/metro/09090__.js";
import _modDef9091 from "../../../../_runtime/metro/09091__.js";
import _modDef9092 from "../../../../_runtime/metro/09092__.js";
import _modDef9093 from "../../../../_runtime/metro/09093__.js";

require = fn;
const badgeVariants = {};
badgeVariants[fn(9085).BadgeCategory.STAFF] = { imageSource: _modDef6384 };
let obj2 = { imageSource: _modDef6384 };
badgeVariants[fn(9085).BadgeCategory.PARTNERED] = { imageSource: _modDef6385 };
const obj3 = { imageSource: _modDef6385 };
badgeVariants[fn(9085).BadgeCategory.VERIFIED] = { imageSource: _modDef6384 };
const obj4 = { imageSource: _modDef6384 };
badgeVariants[fn(9085).BadgeCategory.COMMUNITY] = {
  imageSource: _modDef9088,
  imageSourceLight: _modDef9089,
  premiumImageSource: _modDef9090,
};
const obj5 = { imageSource: _modDef9088, imageSourceLight: _modDef9089, premiumImageSource: _modDef9090 };
badgeVariants[fn(9085).BadgeCategory.DISCOVERABLE] = {
  imageSource: _modDef9091,
  imageSourceLight: _modDef9092,
  premiumImageSource: _modDef9093,
};
const obj6 = { imageSource: _modDef9091, imageSourceLight: _modDef9092, premiumImageSource: _modDef9093 };
badgeVariants[fn(9085).BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: _modDef6384 };
badgeVariants[fn(9085).BadgeCategory.NONE] = {};
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
