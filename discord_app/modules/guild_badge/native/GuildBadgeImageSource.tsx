// discord_app/modules/guild_badge/native/GuildBadgeImageSource.tsx
import shared from "../../../design/shared.tsx";
import _modDef6099 from "../../../../_runtime/metro/06099__.js";
import _modDef6100 from "../../../../_runtime/metro/06100__.js";
import BadgeCategory from "../BadgeCategory.tsx";
import GuildTraits from "../GuildTraits.tsx";
import _modDef8402 from "../../../../_runtime/metro/08402__.js";
import _modDef8403 from "../../../../_runtime/metro/08403__.js";
import _modDef8404 from "../../../../_runtime/metro/08404__.js";
import _modDef8405 from "../../../../_runtime/metro/08405__.js";
import _modDef8406 from "../../../../_runtime/metro/08406__.js";
import _modDef8407 from "../../../../_runtime/metro/08407__.js";

require = fn;
const badgeVariants = {};
badgeVariants[fn(8400).BadgeCategory.STAFF] = { imageSource: _modDef6099 };
let obj2 = { imageSource: _modDef6099 };
badgeVariants[fn(8400).BadgeCategory.PARTNERED] = { imageSource: _modDef6100 };
const obj3 = { imageSource: _modDef6100 };
badgeVariants[fn(8400).BadgeCategory.VERIFIED] = { imageSource: _modDef6099 };
const obj4 = { imageSource: _modDef6099 };
badgeVariants[fn(8400).BadgeCategory.COMMUNITY] = {
  imageSource: _modDef8402,
  imageSourceLight: _modDef8403,
  premiumImageSource: _modDef8404,
};
const obj5 = { imageSource: _modDef8402, imageSourceLight: _modDef8403, premiumImageSource: _modDef8404 };
badgeVariants[fn(8400).BadgeCategory.DISCOVERABLE] = {
  imageSource: _modDef8405,
  imageSourceLight: _modDef8406,
  premiumImageSource: _modDef8407,
};
const obj6 = { imageSource: _modDef8405, imageSourceLight: _modDef8406, premiumImageSource: _modDef8407 };
badgeVariants[fn(8400).BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: _modDef6099 };
badgeVariants[fn(8400).BadgeCategory.NONE] = {};
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
