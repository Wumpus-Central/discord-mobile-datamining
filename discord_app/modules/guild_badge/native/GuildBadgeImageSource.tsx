// discord_app/modules/guild_badge/native/GuildBadgeImageSource.tsx
import shared from "../../../design/shared.tsx";
import _modDef7026 from "../../../../_runtime/metro/07026__.js";
import _modDef7027 from "../../../../_runtime/metro/07027__.js";
import GuildTraits from "../GuildTraits.tsx";
import BadgeCategory from "../BadgeCategory.tsx";
import _modDef8698 from "../../../../_runtime/metro/08698__.js";
import _modDef8699 from "../../../../_runtime/metro/08699__.js";
import _modDef8700 from "../../../../_runtime/metro/08700__.js";
import _modDef8701 from "../../../../_runtime/metro/08701__.js";

require = fn;
const badgeVariants = {};
badgeVariants[fn(8692).BadgeCategory.STAFF] = { imageSource: _modDef7026 };
let obj2 = { imageSource: _modDef7026 };
badgeVariants[fn(8692).BadgeCategory.PARTNERED] = { imageSource: _modDef7027 };
const obj3 = { imageSource: _modDef7027 };
badgeVariants[fn(8692).BadgeCategory.VERIFIED] = { imageSource: _modDef7026 };
const obj4 = { imageSource: _modDef7026 };
badgeVariants[fn(8692).BadgeCategory.COMMUNITY] = {
  imageSource: _modDef8698,
  imageSourceLight: _modDef8699,
  premiumImageSource: _modDef8700,
};
const obj5 = { imageSource: _modDef8698, imageSourceLight: _modDef8699, premiumImageSource: _modDef8700 };
badgeVariants[fn(8692).BadgeCategory.DISCOVERABLE] = { imageSource: _modDef8701 };
const obj6 = { imageSource: _modDef8701 };
badgeVariants[fn(8692).BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: _modDef7026 };
badgeVariants[fn(8692).BadgeCategory.NONE] = {};
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_badge/native/GuildBadgeImageSource.tsx");

export { badgeVariants };
export function resolveImageSource(premiumImageSource, guildTraits, arg2) {
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
}
export function getGuildBadgeImageSource(guild, theme) {
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
}
