// discord_app/modules/guild_badge/native/GuildBadgeImageSource.tsx
import shared from "../../../design/shared.tsx";
import _modDef5985 from "../../../../_runtime/metro/05985__.js";
import _modDef5986 from "../../../../_runtime/metro/05986__.js";
import BadgeCategory from "../BadgeCategory.tsx";
import GuildTraits from "../GuildTraits.tsx";
import _modDef8431 from "../../../../_runtime/metro/08431__.js";
import _modDef8432 from "../../../../_runtime/metro/08432__.js";
import _modDef8433 from "../../../../_runtime/metro/08433__.js";
import _modDef8434 from "../../../../_runtime/metro/08434__.js";
import _modDef8435 from "../../../../_runtime/metro/08435__.js";
import _modDef8436 from "../../../../_runtime/metro/08436__.js";

require = fn;
const badgeVariants = {};
badgeVariants[fn(8429).BadgeCategory.STAFF] = { imageSource: _modDef5985 };
let obj2 = { imageSource: _modDef5985 };
badgeVariants[fn(8429).BadgeCategory.PARTNERED] = { imageSource: _modDef5986 };
const obj3 = { imageSource: _modDef5986 };
badgeVariants[fn(8429).BadgeCategory.VERIFIED] = { imageSource: _modDef5985 };
const obj4 = { imageSource: _modDef5985 };
badgeVariants[fn(8429).BadgeCategory.COMMUNITY] = {
  imageSource: _modDef8431,
  imageSourceLight: _modDef8432,
  premiumImageSource: _modDef8433,
};
const obj5 = { imageSource: _modDef8431, imageSourceLight: _modDef8432, premiumImageSource: _modDef8433 };
badgeVariants[fn(8429).BadgeCategory.DISCOVERABLE] = {
  imageSource: _modDef8434,
  imageSourceLight: _modDef8435,
  premiumImageSource: _modDef8436,
};
const obj6 = { imageSource: _modDef8434, imageSourceLight: _modDef8435, premiumImageSource: _modDef8436 };
badgeVariants[fn(8429).BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: _modDef5985 };
badgeVariants[fn(8429).BadgeCategory.NONE] = {};
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
