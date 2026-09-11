// discord_app/modules/guild_badge/native/GuildBadgeImageSource.tsx
import shared from "../../../design/shared.tsx";
import _modDef5642 from "../../../../_runtime/metro/05642__.js";
import _modDef5643 from "../../../../_runtime/metro/05643__.js";
import BadgeCategory from "../BadgeCategory.tsx";
import GuildTraits from "../GuildTraits.tsx";
import _modDef8835 from "../../../../_runtime/metro/08835__.js";
import _modDef8836 from "../../../../_runtime/metro/08836__.js";
import _modDef8837 from "../../../../_runtime/metro/08837__.js";
import _modDef8838 from "../../../../_runtime/metro/08838__.js";
import _modDef8839 from "../../../../_runtime/metro/08839__.js";
import _modDef8840 from "../../../../_runtime/metro/08840__.js";

require = fn;
let badgeVariants = {};
badgeVariants = { imageSource: _modDef5642 };
badgeVariants[fn(8833).BadgeCategory.STAFF] = badgeVariants;
badgeVariants = { imageSource: _modDef5643 };
badgeVariants[fn(8833).BadgeCategory.PARTNERED] = badgeVariants;
badgeVariants[fn(8833).BadgeCategory.VERIFIED] = { imageSource: _modDef5642 };
const obj1 = { imageSource: _modDef5642 };
badgeVariants[fn(8833).BadgeCategory.COMMUNITY] = {
  imageSource: _modDef8835,
  imageSourceLight: _modDef8836,
  premiumImageSource: _modDef8837,
};
let obj2 = { imageSource: _modDef8835, imageSourceLight: _modDef8836, premiumImageSource: _modDef8837 };
badgeVariants[fn(8833).BadgeCategory.DISCOVERABLE] = {
  imageSource: _modDef8838,
  imageSourceLight: _modDef8839,
  premiumImageSource: _modDef8840,
};
const obj3 = { imageSource: _modDef8838, imageSourceLight: _modDef8839, premiumImageSource: _modDef8840 };
badgeVariants[fn(8833).BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: _modDef5642 };
badgeVariants[fn(8833).BadgeCategory.NONE] = {};
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
