// discord_app/modules/guild_badge/native/GuildBadgeImageSource.tsx
import shared from "../../../design/shared.tsx";
import _modDef6386 from "../../../../_runtime/metro/06386__.js";
import _modDef6387 from "../../../../_runtime/metro/06387__.js";
import GuildTraits from "../GuildTraits.tsx";
import BadgeCategory from "../BadgeCategory.tsx";
import _modDef9096 from "../../../../_runtime/metro/09096__.js";
import _modDef9097 from "../../../../_runtime/metro/09097__.js";
import _modDef9098 from "../../../../_runtime/metro/09098__.js";
import _modDef9099 from "../../../../_runtime/metro/09099__.js";
import _modDef9100 from "../../../../_runtime/metro/09100__.js";
import _modDef9101 from "../../../../_runtime/metro/09101__.js";

require = fn;
const badgeVariants = {};
badgeVariants[fn(9093).BadgeCategory.STAFF] = { imageSource: _modDef6386 };
let obj2 = { imageSource: _modDef6386 };
badgeVariants[fn(9093).BadgeCategory.PARTNERED] = { imageSource: _modDef6387 };
const obj3 = { imageSource: _modDef6387 };
badgeVariants[fn(9093).BadgeCategory.VERIFIED] = { imageSource: _modDef6386 };
const obj4 = { imageSource: _modDef6386 };
badgeVariants[fn(9093).BadgeCategory.COMMUNITY] = {
  imageSource: _modDef9096,
  imageSourceLight: _modDef9097,
  premiumImageSource: _modDef9098,
};
const obj5 = { imageSource: _modDef9096, imageSourceLight: _modDef9097, premiumImageSource: _modDef9098 };
badgeVariants[fn(9093).BadgeCategory.DISCOVERABLE] = {
  imageSource: _modDef9099,
  imageSourceLight: _modDef9100,
  premiumImageSource: _modDef9101,
};
const obj6 = { imageSource: _modDef9099, imageSourceLight: _modDef9100, premiumImageSource: _modDef9101 };
badgeVariants[fn(9093).BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: _modDef6386 };
badgeVariants[fn(9093).BadgeCategory.NONE] = {};
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
