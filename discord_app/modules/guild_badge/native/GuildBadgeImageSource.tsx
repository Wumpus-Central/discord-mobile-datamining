// discord_app/modules/guild_badge/native/GuildBadgeImageSource.tsx
import shared from "../../../design/shared.tsx";
import _modDef5605 from "../../../../_runtime/metro/05605__.js";
import _modDef5606 from "../../../../_runtime/metro/05606__.js";
import BadgeCategory from "../BadgeCategory.tsx";
import GuildTraits from "../GuildTraits.tsx";
import _modDef8777 from "../../../../_runtime/metro/08777__.js";
import _modDef8778 from "../../../../_runtime/metro/08778__.js";
import _modDef8779 from "../../../../_runtime/metro/08779__.js";
import _modDef8780 from "../../../../_runtime/metro/08780__.js";
import _modDef8781 from "../../../../_runtime/metro/08781__.js";
import _modDef8782 from "../../../../_runtime/metro/08782__.js";

require = fn;
let badgeVariants = {};
badgeVariants = { imageSource: _modDef5605 };
badgeVariants[fn(8775).BadgeCategory.STAFF] = badgeVariants;
badgeVariants = { imageSource: _modDef5606 };
badgeVariants[fn(8775).BadgeCategory.PARTNERED] = badgeVariants;
badgeVariants[fn(8775).BadgeCategory.VERIFIED] = { imageSource: _modDef5605 };
const obj1 = { imageSource: _modDef5605 };
badgeVariants[fn(8775).BadgeCategory.COMMUNITY] = {
  imageSource: _modDef8777,
  imageSourceLight: _modDef8778,
  premiumImageSource: _modDef8779,
};
let obj2 = { imageSource: _modDef8777, imageSourceLight: _modDef8778, premiumImageSource: _modDef8779 };
badgeVariants[fn(8775).BadgeCategory.DISCOVERABLE] = {
  imageSource: _modDef8780,
  imageSourceLight: _modDef8781,
  premiumImageSource: _modDef8782,
};
const obj3 = { imageSource: _modDef8780, imageSourceLight: _modDef8781, premiumImageSource: _modDef8782 };
badgeVariants[fn(8775).BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: _modDef5605 };
badgeVariants[fn(8775).BadgeCategory.NONE] = {};
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
