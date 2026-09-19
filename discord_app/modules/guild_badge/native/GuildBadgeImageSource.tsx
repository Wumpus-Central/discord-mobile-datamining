// discord_app/modules/guild_badge/native/GuildBadgeImageSource.tsx
import shared from "../../../design/shared.tsx";
import _modDef5803 from "../../../../_runtime/metro/05803__.js";
import _modDef5804 from "../../../../_runtime/metro/05804__.js";
import BadgeCategory from "../BadgeCategory.tsx";
import GuildTraits from "../GuildTraits.tsx";
import _modDef9023 from "../../../../_runtime/metro/09023__.js";
import _modDef9024 from "../../../../_runtime/metro/09024__.js";
import _modDef9025 from "../../../../_runtime/metro/09025__.js";
import _modDef9026 from "../../../../_runtime/metro/09026__.js";
import _modDef9027 from "../../../../_runtime/metro/09027__.js";
import _modDef9028 from "../../../../_runtime/metro/09028__.js";

require = fn;
const badgeVariants = {};
badgeVariants[fn(9021).BadgeCategory.STAFF] = { imageSource: _modDef5803 };
let obj2 = { imageSource: _modDef5803 };
badgeVariants[fn(9021).BadgeCategory.PARTNERED] = { imageSource: _modDef5804 };
const obj3 = { imageSource: _modDef5804 };
badgeVariants[fn(9021).BadgeCategory.VERIFIED] = { imageSource: _modDef5803 };
const obj4 = { imageSource: _modDef5803 };
badgeVariants[fn(9021).BadgeCategory.COMMUNITY] = {
  imageSource: _modDef9023,
  imageSourceLight: _modDef9024,
  premiumImageSource: _modDef9025,
};
const obj5 = { imageSource: _modDef9023, imageSourceLight: _modDef9024, premiumImageSource: _modDef9025 };
badgeVariants[fn(9021).BadgeCategory.DISCOVERABLE] = {
  imageSource: _modDef9026,
  imageSourceLight: _modDef9027,
  premiumImageSource: _modDef9028,
};
const obj6 = { imageSource: _modDef9026, imageSourceLight: _modDef9027, premiumImageSource: _modDef9028 };
badgeVariants[fn(9021).BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: _modDef5803 };
badgeVariants[fn(9021).BadgeCategory.NONE] = {};
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
