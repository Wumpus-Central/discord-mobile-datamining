// discord_app/modules/guild_badge/native/GuildBadgeImageSource.tsx
import shared from "../../../design/shared.tsx";
import _modDef5898 from "../../../../_runtime/metro/05898__.js";
import _modDef5899 from "../../../../_runtime/metro/05899__.js";
import BadgeCategory from "../BadgeCategory.tsx";
import GuildTraits from "../GuildTraits.tsx";
import _modDef8198 from "../../../../_runtime/metro/08198__.js";
import _modDef8199 from "../../../../_runtime/metro/08199__.js";
import _modDef8200 from "../../../../_runtime/metro/08200__.js";
import _modDef8201 from "../../../../_runtime/metro/08201__.js";
import _modDef8202 from "../../../../_runtime/metro/08202__.js";
import _modDef8203 from "../../../../_runtime/metro/08203__.js";

require = fn;
const badgeVariants = {};
badgeVariants[fn(8196).BadgeCategory.STAFF] = { imageSource: _modDef5898 };
let obj2 = { imageSource: _modDef5898 };
badgeVariants[fn(8196).BadgeCategory.PARTNERED] = { imageSource: _modDef5899 };
const obj3 = { imageSource: _modDef5899 };
badgeVariants[fn(8196).BadgeCategory.VERIFIED] = { imageSource: _modDef5898 };
const obj4 = { imageSource: _modDef5898 };
badgeVariants[fn(8196).BadgeCategory.COMMUNITY] = {
  imageSource: _modDef8198,
  imageSourceLight: _modDef8199,
  premiumImageSource: _modDef8200,
};
const obj5 = { imageSource: _modDef8198, imageSourceLight: _modDef8199, premiumImageSource: _modDef8200 };
badgeVariants[fn(8196).BadgeCategory.DISCOVERABLE] = {
  imageSource: _modDef8201,
  imageSourceLight: _modDef8202,
  premiumImageSource: _modDef8203,
};
const obj6 = { imageSource: _modDef8201, imageSourceLight: _modDef8202, premiumImageSource: _modDef8203 };
badgeVariants[fn(8196).BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: _modDef5898 };
badgeVariants[fn(8196).BadgeCategory.NONE] = {};
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
