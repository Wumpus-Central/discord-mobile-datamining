// discord_app/modules/guild_badge/native/GuildBadgeImageSource.tsx
import shared from "../../../design/shared.tsx";
import _modDef6839 from "../../../../_runtime/metro/06839__.js";
import _modDef6840 from "../../../../_runtime/metro/06840__.js";
import GuildTraits from "../GuildTraits.tsx";
import BadgeCategory from "../BadgeCategory.tsx";
import _modDef9171 from "../../../../_runtime/metro/09171__.js";
import _modDef9172 from "../../../../_runtime/metro/09172__.js";
import _modDef9173 from "../../../../_runtime/metro/09173__.js";
import _modDef9174 from "../../../../_runtime/metro/09174__.js";
import _modDef9175 from "../../../../_runtime/metro/09175__.js";
import _modDef9176 from "../../../../_runtime/metro/09176__.js";

require = fn;
const badgeVariants = {};
badgeVariants[fn(9168).BadgeCategory.STAFF] = { imageSource: _modDef6839 };
let obj2 = { imageSource: _modDef6839 };
badgeVariants[fn(9168).BadgeCategory.PARTNERED] = { imageSource: _modDef6840 };
const obj3 = { imageSource: _modDef6840 };
badgeVariants[fn(9168).BadgeCategory.VERIFIED] = { imageSource: _modDef6839 };
const obj4 = { imageSource: _modDef6839 };
badgeVariants[fn(9168).BadgeCategory.COMMUNITY] = {
  imageSource: _modDef9171,
  imageSourceLight: _modDef9172,
  premiumImageSource: _modDef9173,
};
const obj5 = { imageSource: _modDef9171, imageSourceLight: _modDef9172, premiumImageSource: _modDef9173 };
badgeVariants[fn(9168).BadgeCategory.DISCOVERABLE] = {
  imageSource: _modDef9174,
  imageSourceLight: _modDef9175,
  premiumImageSource: _modDef9176,
};
const obj6 = { imageSource: _modDef9174, imageSourceLight: _modDef9175, premiumImageSource: _modDef9176 };
badgeVariants[fn(9168).BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: _modDef6839 };
badgeVariants[fn(9168).BadgeCategory.NONE] = {};
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
