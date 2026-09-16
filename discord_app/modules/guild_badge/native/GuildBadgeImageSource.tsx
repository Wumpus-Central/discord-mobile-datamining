// discord_app/modules/guild_badge/native/GuildBadgeImageSource.tsx
import shared from "../../../design/shared.tsx";
import _modDef5677 from "../../../../_runtime/metro/05677__.js";
import _modDef5678 from "../../../../_runtime/metro/05678__.js";
import BadgeCategory from "../BadgeCategory.tsx";
import GuildTraits from "../GuildTraits.tsx";
import _modDef8884 from "../../../../_runtime/metro/08884__.js";
import _modDef8885 from "../../../../_runtime/metro/08885__.js";
import _modDef8886 from "../../../../_runtime/metro/08886__.js";
import _modDef8887 from "../../../../_runtime/metro/08887__.js";
import _modDef8888 from "../../../../_runtime/metro/08888__.js";
import _modDef8889 from "../../../../_runtime/metro/08889__.js";

require = fn;
const badgeVariants = {};
badgeVariants[fn(8882).BadgeCategory.STAFF] = { imageSource: _modDef5677 };
let obj2 = { imageSource: _modDef5677 };
badgeVariants[fn(8882).BadgeCategory.PARTNERED] = { imageSource: _modDef5678 };
const obj3 = { imageSource: _modDef5678 };
badgeVariants[fn(8882).BadgeCategory.VERIFIED] = { imageSource: _modDef5677 };
const obj4 = { imageSource: _modDef5677 };
badgeVariants[fn(8882).BadgeCategory.COMMUNITY] = {
  imageSource: _modDef8884,
  imageSourceLight: _modDef8885,
  premiumImageSource: _modDef8886,
};
const obj5 = { imageSource: _modDef8884, imageSourceLight: _modDef8885, premiumImageSource: _modDef8886 };
badgeVariants[fn(8882).BadgeCategory.DISCOVERABLE] = {
  imageSource: _modDef8887,
  imageSourceLight: _modDef8888,
  premiumImageSource: _modDef8889,
};
const obj6 = { imageSource: _modDef8887, imageSourceLight: _modDef8888, premiumImageSource: _modDef8889 };
badgeVariants[fn(8882).BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: _modDef5677 };
badgeVariants[fn(8882).BadgeCategory.NONE] = {};
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
