// discord_app/modules/guild_badge/native/GuildBadgeImageSource.tsx
import shared from "../../../design/shared.tsx";
import _modDef6168 from "../../../../_runtime/metro/06168__.js";
import _modDef6169 from "../../../../_runtime/metro/06169__.js";
import GuildTraits from "../GuildTraits.tsx";
import BadgeCategory from "../BadgeCategory.tsx";
import _modDef8876 from "../../../../_runtime/metro/08876__.js";
import _modDef8877 from "../../../../_runtime/metro/08877__.js";
import _modDef8878 from "../../../../_runtime/metro/08878__.js";
import _modDef8879 from "../../../../_runtime/metro/08879__.js";
import _modDef8880 from "../../../../_runtime/metro/08880__.js";
import _modDef8881 from "../../../../_runtime/metro/08881__.js";

require = fn;
const badgeVariants = {};
badgeVariants[fn(8873).BadgeCategory.STAFF] = { imageSource: _modDef6168 };
let obj2 = { imageSource: _modDef6168 };
badgeVariants[fn(8873).BadgeCategory.PARTNERED] = { imageSource: _modDef6169 };
const obj3 = { imageSource: _modDef6169 };
badgeVariants[fn(8873).BadgeCategory.VERIFIED] = { imageSource: _modDef6168 };
const obj4 = { imageSource: _modDef6168 };
badgeVariants[fn(8873).BadgeCategory.COMMUNITY] = {
  imageSource: _modDef8876,
  imageSourceLight: _modDef8877,
  premiumImageSource: _modDef8878,
};
const obj5 = { imageSource: _modDef8876, imageSourceLight: _modDef8877, premiumImageSource: _modDef8878 };
badgeVariants[fn(8873).BadgeCategory.DISCOVERABLE] = {
  imageSource: _modDef8879,
  imageSourceLight: _modDef8880,
  premiumImageSource: _modDef8881,
};
const obj6 = { imageSource: _modDef8879, imageSourceLight: _modDef8880, premiumImageSource: _modDef8881 };
badgeVariants[fn(8873).BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: _modDef6168 };
badgeVariants[fn(8873).BadgeCategory.NONE] = {};
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
