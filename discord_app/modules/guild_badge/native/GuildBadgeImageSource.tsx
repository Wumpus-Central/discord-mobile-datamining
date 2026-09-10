// discord_app/modules/guild_badge/native/GuildBadgeImageSource.tsx
import shared from "../../../design/shared.tsx";
import _modDef5641 from "../../../../_runtime/metro/05641__.js";
import _modDef5642 from "../../../../_runtime/metro/05642__.js";
import BadgeCategory from "../BadgeCategory.tsx";
import GuildTraits from "../GuildTraits.tsx";
import _modDef8814 from "../../../../_runtime/metro/08814__.js";
import _modDef8815 from "../../../../_runtime/metro/08815__.js";
import _modDef8816 from "../../../../_runtime/metro/08816__.js";
import _modDef8817 from "../../../../_runtime/metro/08817__.js";
import _modDef8818 from "../../../../_runtime/metro/08818__.js";
import _modDef8819 from "../../../../_runtime/metro/08819__.js";

require = fn;
let badgeVariants = {};
badgeVariants = { imageSource: _modDef5641 };
badgeVariants[fn(8812).BadgeCategory.STAFF] = badgeVariants;
badgeVariants = { imageSource: _modDef5642 };
badgeVariants[fn(8812).BadgeCategory.PARTNERED] = badgeVariants;
badgeVariants[fn(8812).BadgeCategory.VERIFIED] = { imageSource: _modDef5641 };
const obj1 = { imageSource: _modDef5641 };
badgeVariants[fn(8812).BadgeCategory.COMMUNITY] = {
  imageSource: _modDef8814,
  imageSourceLight: _modDef8815,
  premiumImageSource: _modDef8816,
};
let obj2 = { imageSource: _modDef8814, imageSourceLight: _modDef8815, premiumImageSource: _modDef8816 };
badgeVariants[fn(8812).BadgeCategory.DISCOVERABLE] = {
  imageSource: _modDef8817,
  imageSourceLight: _modDef8818,
  premiumImageSource: _modDef8819,
};
const obj3 = { imageSource: _modDef8817, imageSourceLight: _modDef8818, premiumImageSource: _modDef8819 };
badgeVariants[fn(8812).BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: _modDef5641 };
badgeVariants[fn(8812).BadgeCategory.NONE] = {};
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
