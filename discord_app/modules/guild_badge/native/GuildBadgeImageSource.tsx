// discord_app/modules/guild_badge/native/GuildBadgeImageSource.tsx
import shared from "../../../design/shared.tsx";
import _modDef6836 from "../../../../_runtime/metro/06836__.js";
import _modDef6837 from "../../../../_runtime/metro/06837__.js";
import GuildTraits from "../GuildTraits.tsx";
import BadgeCategory from "../BadgeCategory.tsx";
import _modDef9159 from "../../../../_runtime/metro/09159__.js";
import _modDef9160 from "../../../../_runtime/metro/09160__.js";
import _modDef9161 from "../../../../_runtime/metro/09161__.js";
import _modDef9162 from "../../../../_runtime/metro/09162__.js";
import _modDef9163 from "../../../../_runtime/metro/09163__.js";
import _modDef9164 from "../../../../_runtime/metro/09164__.js";

require = fn;
const badgeVariants = {};
badgeVariants[fn(9156).BadgeCategory.STAFF] = { imageSource: _modDef6836 };
let obj2 = { imageSource: _modDef6836 };
badgeVariants[fn(9156).BadgeCategory.PARTNERED] = { imageSource: _modDef6837 };
const obj3 = { imageSource: _modDef6837 };
badgeVariants[fn(9156).BadgeCategory.VERIFIED] = { imageSource: _modDef6836 };
const obj4 = { imageSource: _modDef6836 };
badgeVariants[fn(9156).BadgeCategory.COMMUNITY] = {
  imageSource: _modDef9159,
  imageSourceLight: _modDef9160,
  premiumImageSource: _modDef9161,
};
const obj5 = { imageSource: _modDef9159, imageSourceLight: _modDef9160, premiumImageSource: _modDef9161 };
badgeVariants[fn(9156).BadgeCategory.DISCOVERABLE] = {
  imageSource: _modDef9162,
  imageSourceLight: _modDef9163,
  premiumImageSource: _modDef9164,
};
const obj6 = { imageSource: _modDef9162, imageSourceLight: _modDef9163, premiumImageSource: _modDef9164 };
badgeVariants[fn(9156).BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: _modDef6836 };
badgeVariants[fn(9156).BadgeCategory.NONE] = {};
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
