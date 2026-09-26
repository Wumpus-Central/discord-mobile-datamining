// discord_app/modules/guild_badge/native/GuildBadgeImageSource.tsx
import shared from "../../../design/shared.tsx";
import _modDef5903 from "../../../../_runtime/metro/05903__.js";
import _modDef5904 from "../../../../_runtime/metro/05904__.js";
import BadgeCategory from "../BadgeCategory.tsx";
import GuildTraits from "../GuildTraits.tsx";
import _modDef8206 from "../../../../_runtime/metro/08206__.js";
import _modDef8207 from "../../../../_runtime/metro/08207__.js";
import _modDef8208 from "../../../../_runtime/metro/08208__.js";
import _modDef8209 from "../../../../_runtime/metro/08209__.js";
import _modDef8210 from "../../../../_runtime/metro/08210__.js";
import _modDef8211 from "../../../../_runtime/metro/08211__.js";

require = fn;
const badgeVariants = {};
badgeVariants[fn(8204).BadgeCategory.STAFF] = { imageSource: _modDef5903 };
let obj2 = { imageSource: _modDef5903 };
badgeVariants[fn(8204).BadgeCategory.PARTNERED] = { imageSource: _modDef5904 };
const obj3 = { imageSource: _modDef5904 };
badgeVariants[fn(8204).BadgeCategory.VERIFIED] = { imageSource: _modDef5903 };
const obj4 = { imageSource: _modDef5903 };
badgeVariants[fn(8204).BadgeCategory.COMMUNITY] = {
  imageSource: _modDef8206,
  imageSourceLight: _modDef8207,
  premiumImageSource: _modDef8208,
};
const obj5 = { imageSource: _modDef8206, imageSourceLight: _modDef8207, premiumImageSource: _modDef8208 };
badgeVariants[fn(8204).BadgeCategory.DISCOVERABLE] = {
  imageSource: _modDef8209,
  imageSourceLight: _modDef8210,
  premiumImageSource: _modDef8211,
};
const obj6 = { imageSource: _modDef8209, imageSourceLight: _modDef8210, premiumImageSource: _modDef8211 };
badgeVariants[fn(8204).BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: _modDef5903 };
badgeVariants[fn(8204).BadgeCategory.NONE] = {};
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
