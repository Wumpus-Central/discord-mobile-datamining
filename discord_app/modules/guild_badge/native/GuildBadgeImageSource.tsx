// discord_app/modules/guild_badge/native/GuildBadgeImageSource.tsx
import shared from "../../../design/shared.tsx";
import _modDef6388 from "../../../../_runtime/metro/06388__.js";
import _modDef6389 from "../../../../_runtime/metro/06389__.js";
import GuildTraits from "../GuildTraits.tsx";
import BadgeCategory from "../BadgeCategory.tsx";
import _modDef9097 from "../../../../_runtime/metro/09097__.js";
import _modDef9098 from "../../../../_runtime/metro/09098__.js";
import _modDef9099 from "../../../../_runtime/metro/09099__.js";
import _modDef9100 from "../../../../_runtime/metro/09100__.js";
import _modDef9101 from "../../../../_runtime/metro/09101__.js";
import _modDef9102 from "../../../../_runtime/metro/09102__.js";

require = fn;
const badgeVariants = {};
badgeVariants[fn(9094).BadgeCategory.STAFF] = { imageSource: _modDef6388 };
let obj2 = { imageSource: _modDef6388 };
badgeVariants[fn(9094).BadgeCategory.PARTNERED] = { imageSource: _modDef6389 };
const obj3 = { imageSource: _modDef6389 };
badgeVariants[fn(9094).BadgeCategory.VERIFIED] = { imageSource: _modDef6388 };
const obj4 = { imageSource: _modDef6388 };
badgeVariants[fn(9094).BadgeCategory.COMMUNITY] = {
  imageSource: _modDef9097,
  imageSourceLight: _modDef9098,
  premiumImageSource: _modDef9099,
};
const obj5 = { imageSource: _modDef9097, imageSourceLight: _modDef9098, premiumImageSource: _modDef9099 };
badgeVariants[fn(9094).BadgeCategory.DISCOVERABLE] = {
  imageSource: _modDef9100,
  imageSourceLight: _modDef9101,
  premiumImageSource: _modDef9102,
};
const obj6 = { imageSource: _modDef9100, imageSourceLight: _modDef9101, premiumImageSource: _modDef9102 };
badgeVariants[fn(9094).BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: _modDef6388 };
badgeVariants[fn(9094).BadgeCategory.NONE] = {};
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
