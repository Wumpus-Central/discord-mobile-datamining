// discord_app/modules/guild_badge/native/GuildBadgeImageSource.tsx
import shared from "../../../design/shared.tsx";
import _modDef6089 from "../../../../_runtime/metro/06089__.js";
import _modDef6090 from "../../../../_runtime/metro/06090__.js";
import BadgeCategory from "../BadgeCategory.tsx";
import GuildTraits from "../GuildTraits.tsx";
import _modDef8394 from "../../../../_runtime/metro/08394__.js";
import _modDef8395 from "../../../../_runtime/metro/08395__.js";
import _modDef8396 from "../../../../_runtime/metro/08396__.js";
import _modDef8397 from "../../../../_runtime/metro/08397__.js";
import _modDef8398 from "../../../../_runtime/metro/08398__.js";
import _modDef8399 from "../../../../_runtime/metro/08399__.js";

require = fn;
const badgeVariants = {};
badgeVariants[fn(8392).BadgeCategory.STAFF] = { imageSource: _modDef6089 };
let obj2 = { imageSource: _modDef6089 };
badgeVariants[fn(8392).BadgeCategory.PARTNERED] = { imageSource: _modDef6090 };
const obj3 = { imageSource: _modDef6090 };
badgeVariants[fn(8392).BadgeCategory.VERIFIED] = { imageSource: _modDef6089 };
const obj4 = { imageSource: _modDef6089 };
badgeVariants[fn(8392).BadgeCategory.COMMUNITY] = {
  imageSource: _modDef8394,
  imageSourceLight: _modDef8395,
  premiumImageSource: _modDef8396,
};
const obj5 = { imageSource: _modDef8394, imageSourceLight: _modDef8395, premiumImageSource: _modDef8396 };
badgeVariants[fn(8392).BadgeCategory.DISCOVERABLE] = {
  imageSource: _modDef8397,
  imageSourceLight: _modDef8398,
  premiumImageSource: _modDef8399,
};
const obj6 = { imageSource: _modDef8397, imageSourceLight: _modDef8398, premiumImageSource: _modDef8399 };
badgeVariants[fn(8392).BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: _modDef6089 };
badgeVariants[fn(8392).BadgeCategory.NONE] = {};
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
