// discord_app/modules/guild_badge/native/GuildBadgeImageSource.tsx
import shared from "../../../design/shared.tsx";
import _modDef6069 from "../../../../_runtime/metro/06069__.js";
import _modDef6070 from "../../../../_runtime/metro/06070__.js";
import BadgeCategory from "../BadgeCategory.tsx";
import GuildTraits from "../GuildTraits.tsx";
import _modDef8371 from "../../../../_runtime/metro/08371__.js";
import _modDef8372 from "../../../../_runtime/metro/08372__.js";
import _modDef8373 from "../../../../_runtime/metro/08373__.js";
import _modDef8374 from "../../../../_runtime/metro/08374__.js";
import _modDef8375 from "../../../../_runtime/metro/08375__.js";
import _modDef8376 from "../../../../_runtime/metro/08376__.js";

require = fn;
const badgeVariants = {};
badgeVariants[fn(8369).BadgeCategory.STAFF] = { imageSource: _modDef6069 };
let obj2 = { imageSource: _modDef6069 };
badgeVariants[fn(8369).BadgeCategory.PARTNERED] = { imageSource: _modDef6070 };
const obj3 = { imageSource: _modDef6070 };
badgeVariants[fn(8369).BadgeCategory.VERIFIED] = { imageSource: _modDef6069 };
const obj4 = { imageSource: _modDef6069 };
badgeVariants[fn(8369).BadgeCategory.COMMUNITY] = {
  imageSource: _modDef8371,
  imageSourceLight: _modDef8372,
  premiumImageSource: _modDef8373,
};
const obj5 = { imageSource: _modDef8371, imageSourceLight: _modDef8372, premiumImageSource: _modDef8373 };
badgeVariants[fn(8369).BadgeCategory.DISCOVERABLE] = {
  imageSource: _modDef8374,
  imageSourceLight: _modDef8375,
  premiumImageSource: _modDef8376,
};
const obj6 = { imageSource: _modDef8374, imageSourceLight: _modDef8375, premiumImageSource: _modDef8376 };
badgeVariants[fn(8369).BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: _modDef6069 };
badgeVariants[fn(8369).BadgeCategory.NONE] = {};
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
