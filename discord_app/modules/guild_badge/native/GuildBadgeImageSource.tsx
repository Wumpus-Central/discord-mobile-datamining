// discord_app/modules/guild_badge/native/GuildBadgeImageSource.tsx
import shared from "../../../design/shared.tsx";
import _modDef5894 from "../../../../_runtime/metro/05894__.js";
import _modDef5895 from "../../../../_runtime/metro/05895__.js";
import BadgeCategory from "../BadgeCategory.tsx";
import GuildTraits from "../GuildTraits.tsx";
import _modDef9100 from "../../../../_runtime/metro/09100__.js";
import _modDef9101 from "../../../../_runtime/metro/09101__.js";
import _modDef9102 from "../../../../_runtime/metro/09102__.js";
import _modDef9103 from "../../../../_runtime/metro/09103__.js";
import _modDef9104 from "../../../../_runtime/metro/09104__.js";
import _modDef9105 from "../../../../_runtime/metro/09105__.js";

require = fn;
const badgeVariants = {};
badgeVariants[fn(9098).BadgeCategory.STAFF] = { imageSource: _modDef5894 };
let obj2 = { imageSource: _modDef5894 };
badgeVariants[fn(9098).BadgeCategory.PARTNERED] = { imageSource: _modDef5895 };
const obj3 = { imageSource: _modDef5895 };
badgeVariants[fn(9098).BadgeCategory.VERIFIED] = { imageSource: _modDef5894 };
const obj4 = { imageSource: _modDef5894 };
badgeVariants[fn(9098).BadgeCategory.COMMUNITY] = {
  imageSource: _modDef9100,
  imageSourceLight: _modDef9101,
  premiumImageSource: _modDef9102,
};
const obj5 = { imageSource: _modDef9100, imageSourceLight: _modDef9101, premiumImageSource: _modDef9102 };
badgeVariants[fn(9098).BadgeCategory.DISCOVERABLE] = {
  imageSource: _modDef9103,
  imageSourceLight: _modDef9104,
  premiumImageSource: _modDef9105,
};
const obj6 = { imageSource: _modDef9103, imageSourceLight: _modDef9104, premiumImageSource: _modDef9105 };
badgeVariants[fn(9098).BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: _modDef5894 };
badgeVariants[fn(9098).BadgeCategory.NONE] = {};
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
