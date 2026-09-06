// discord_app/modules/guild_badge/native/GuildBadgeImageSource.tsx
import shared from "../../../design/shared.tsx";
import _modDef5591 from "../../../../_runtime/metro/05591__.js";
import _modDef5592 from "../../../../_runtime/metro/05592__.js";
import BadgeCategory from "../BadgeCategory.tsx";
import GuildTraits from "../GuildTraits.tsx";
import _modDef8744 from "../../../../_runtime/metro/08744__.js";
import _modDef8745 from "../../../../_runtime/metro/08745__.js";
import _modDef8746 from "../../../../_runtime/metro/08746__.js";
import _modDef8747 from "../../../../_runtime/metro/08747__.js";
import _modDef8748 from "../../../../_runtime/metro/08748__.js";
import _modDef8749 from "../../../../_runtime/metro/08749__.js";

require = fn;
let badgeVariants = {};
badgeVariants = { imageSource: _modDef5591 };
badgeVariants[fn(8742).BadgeCategory.STAFF] = badgeVariants;
badgeVariants = { imageSource: _modDef5592 };
badgeVariants[fn(8742).BadgeCategory.PARTNERED] = badgeVariants;
badgeVariants[fn(8742).BadgeCategory.VERIFIED] = { imageSource: _modDef5591 };
const obj1 = { imageSource: _modDef5591 };
badgeVariants[fn(8742).BadgeCategory.COMMUNITY] = {
  imageSource: _modDef8744,
  imageSourceLight: _modDef8745,
  premiumImageSource: _modDef8746,
};
let obj2 = { imageSource: _modDef8744, imageSourceLight: _modDef8745, premiumImageSource: _modDef8746 };
badgeVariants[fn(8742).BadgeCategory.DISCOVERABLE] = {
  imageSource: _modDef8747,
  imageSourceLight: _modDef8748,
  premiumImageSource: _modDef8749,
};
const obj3 = { imageSource: _modDef8747, imageSourceLight: _modDef8748, premiumImageSource: _modDef8749 };
badgeVariants[fn(8742).BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: _modDef5591 };
badgeVariants[fn(8742).BadgeCategory.NONE] = {};
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
