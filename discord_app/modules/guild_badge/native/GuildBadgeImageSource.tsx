// discord_app/modules/guild_badge/native/GuildBadgeImageSource.tsx
import shared from "../../../design/shared.tsx";
import _modDef5978 from "../../../../_runtime/metro/05978__.js";
import _modDef5979 from "../../../../_runtime/metro/05979__.js";
import BadgeCategory from "../BadgeCategory.tsx";
import GuildTraits from "../GuildTraits.tsx";
import _modDef8398 from "../../../../_runtime/metro/08398__.js";
import _modDef8399 from "../../../../_runtime/metro/08399__.js";
import _modDef8400 from "../../../../_runtime/metro/08400__.js";
import _modDef8401 from "../../../../_runtime/metro/08401__.js";
import _modDef8402 from "../../../../_runtime/metro/08402__.js";
import _modDef8403 from "../../../../_runtime/metro/08403__.js";

require = fn;
const badgeVariants = {};
badgeVariants[fn(8396).BadgeCategory.STAFF] = { imageSource: _modDef5978 };
let obj2 = { imageSource: _modDef5978 };
badgeVariants[fn(8396).BadgeCategory.PARTNERED] = { imageSource: _modDef5979 };
const obj3 = { imageSource: _modDef5979 };
badgeVariants[fn(8396).BadgeCategory.VERIFIED] = { imageSource: _modDef5978 };
const obj4 = { imageSource: _modDef5978 };
badgeVariants[fn(8396).BadgeCategory.COMMUNITY] = {
  imageSource: _modDef8398,
  imageSourceLight: _modDef8399,
  premiumImageSource: _modDef8400,
};
const obj5 = { imageSource: _modDef8398, imageSourceLight: _modDef8399, premiumImageSource: _modDef8400 };
badgeVariants[fn(8396).BadgeCategory.DISCOVERABLE] = {
  imageSource: _modDef8401,
  imageSourceLight: _modDef8402,
  premiumImageSource: _modDef8403,
};
const obj6 = { imageSource: _modDef8401, imageSourceLight: _modDef8402, premiumImageSource: _modDef8403 };
badgeVariants[fn(8396).BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: _modDef5978 };
badgeVariants[fn(8396).BadgeCategory.NONE] = {};
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
