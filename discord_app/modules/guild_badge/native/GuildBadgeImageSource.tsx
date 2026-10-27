// discord_app/modules/guild_badge/native/GuildBadgeImageSource.tsx
import shared from "../../../design/shared.tsx";
import _modDef6890 from "../../../../_runtime/metro/06890__.js";
import _modDef6891 from "../../../../_runtime/metro/06891__.js";
import GuildTraits from "../GuildTraits.tsx";
import BadgeCategory from "../BadgeCategory.tsx";
import _modDef9238 from "../../../../_runtime/metro/09238__.js";
import _modDef9239 from "../../../../_runtime/metro/09239__.js";
import _modDef9240 from "../../../../_runtime/metro/09240__.js";
import _modDef9241 from "../../../../_runtime/metro/09241__.js";
import _modDef9242 from "../../../../_runtime/metro/09242__.js";
import _modDef9243 from "../../../../_runtime/metro/09243__.js";

require = fn;
const badgeVariants = {};
badgeVariants[fn(9235).BadgeCategory.STAFF] = { imageSource: _modDef6890 };
let obj2 = { imageSource: _modDef6890 };
badgeVariants[fn(9235).BadgeCategory.PARTNERED] = { imageSource: _modDef6891 };
const obj3 = { imageSource: _modDef6891 };
badgeVariants[fn(9235).BadgeCategory.VERIFIED] = { imageSource: _modDef6890 };
const obj4 = { imageSource: _modDef6890 };
badgeVariants[fn(9235).BadgeCategory.COMMUNITY] = {
  imageSource: _modDef9238,
  imageSourceLight: _modDef9239,
  premiumImageSource: _modDef9240,
};
const obj5 = { imageSource: _modDef9238, imageSourceLight: _modDef9239, premiumImageSource: _modDef9240 };
badgeVariants[fn(9235).BadgeCategory.DISCOVERABLE] = {
  imageSource: _modDef9241,
  imageSourceLight: _modDef9242,
  premiumImageSource: _modDef9243,
};
const obj6 = { imageSource: _modDef9241, imageSourceLight: _modDef9242, premiumImageSource: _modDef9243 };
badgeVariants[fn(9235).BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: _modDef6890 };
badgeVariants[fn(9235).BadgeCategory.NONE] = {};
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
