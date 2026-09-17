// discord_app/modules/guild_badge/native/GuildBadgeImageSource.tsx
import shared from "../../../design/shared.tsx";
import _modDef5679 from "../../../../_runtime/metro/05679__.js";
import _modDef5680 from "../../../../_runtime/metro/05680__.js";
import BadgeCategory from "../BadgeCategory.tsx";
import GuildTraits from "../GuildTraits.tsx";
import _modDef8900 from "../../../../_runtime/metro/08900__.js";
import _modDef8901 from "../../../../_runtime/metro/08901__.js";
import _modDef8902 from "../../../../_runtime/metro/08902__.js";
import _modDef8903 from "../../../../_runtime/metro/08903__.js";
import _modDef8904 from "../../../../_runtime/metro/08904__.js";
import _modDef8905 from "../../../../_runtime/metro/08905__.js";

require = fn;
const badgeVariants = {};
badgeVariants[fn(8898).BadgeCategory.STAFF] = { imageSource: _modDef5679 };
let obj2 = { imageSource: _modDef5679 };
badgeVariants[fn(8898).BadgeCategory.PARTNERED] = { imageSource: _modDef5680 };
const obj3 = { imageSource: _modDef5680 };
badgeVariants[fn(8898).BadgeCategory.VERIFIED] = { imageSource: _modDef5679 };
const obj4 = { imageSource: _modDef5679 };
badgeVariants[fn(8898).BadgeCategory.COMMUNITY] = {
  imageSource: _modDef8900,
  imageSourceLight: _modDef8901,
  premiumImageSource: _modDef8902,
};
const obj5 = { imageSource: _modDef8900, imageSourceLight: _modDef8901, premiumImageSource: _modDef8902 };
badgeVariants[fn(8898).BadgeCategory.DISCOVERABLE] = {
  imageSource: _modDef8903,
  imageSourceLight: _modDef8904,
  premiumImageSource: _modDef8905,
};
const obj6 = { imageSource: _modDef8903, imageSourceLight: _modDef8904, premiumImageSource: _modDef8905 };
badgeVariants[fn(8898).BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: _modDef5679 };
badgeVariants[fn(8898).BadgeCategory.NONE] = {};
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
