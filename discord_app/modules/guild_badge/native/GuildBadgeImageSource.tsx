// discord_app/modules/guild_badge/native/GuildBadgeImageSource.tsx
import shared from "../../../design/shared.tsx";
import _modDef5672 from "../../../../_runtime/metro/05672__.js";
import _modDef5673 from "../../../../_runtime/metro/05673__.js";
import BadgeCategory from "../BadgeCategory.tsx";
import GuildTraits from "../GuildTraits.tsx";
import _modDef8870 from "../../../../_runtime/metro/08870__.js";
import _modDef8871 from "../../../../_runtime/metro/08871__.js";
import _modDef8872 from "../../../../_runtime/metro/08872__.js";
import _modDef8873 from "../../../../_runtime/metro/08873__.js";
import _modDef8874 from "../../../../_runtime/metro/08874__.js";
import _modDef8875 from "../../../../_runtime/metro/08875__.js";

require = fn;
let badgeVariants = {};
badgeVariants = { imageSource: _modDef5672 };
badgeVariants[fn(8868).BadgeCategory.STAFF] = badgeVariants;
badgeVariants = { imageSource: _modDef5673 };
badgeVariants[fn(8868).BadgeCategory.PARTNERED] = badgeVariants;
badgeVariants[fn(8868).BadgeCategory.VERIFIED] = { imageSource: _modDef5672 };
const obj1 = { imageSource: _modDef5672 };
badgeVariants[fn(8868).BadgeCategory.COMMUNITY] = {
  imageSource: _modDef8870,
  imageSourceLight: _modDef8871,
  premiumImageSource: _modDef8872,
};
let obj2 = { imageSource: _modDef8870, imageSourceLight: _modDef8871, premiumImageSource: _modDef8872 };
badgeVariants[fn(8868).BadgeCategory.DISCOVERABLE] = {
  imageSource: _modDef8873,
  imageSourceLight: _modDef8874,
  premiumImageSource: _modDef8875,
};
const obj3 = { imageSource: _modDef8873, imageSourceLight: _modDef8874, premiumImageSource: _modDef8875 };
badgeVariants[fn(8868).BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: _modDef5672 };
badgeVariants[fn(8868).BadgeCategory.NONE] = {};
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
