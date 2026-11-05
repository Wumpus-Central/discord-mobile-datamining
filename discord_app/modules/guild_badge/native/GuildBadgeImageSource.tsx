// discord_app/modules/guild_badge/native/GuildBadgeImageSource.tsx
import shared from "../../../design/shared.tsx";
import _modDef7106 from "../../../../_runtime/metro/07106__.js";
import _modDef7107 from "../../../../_runtime/metro/07107__.js";
import GuildTraits from "../GuildTraits.tsx";
import BadgeCategory from "../BadgeCategory.tsx";
import _modDef9464 from "../../../../_runtime/metro/09464__.js";
import _modDef9465 from "../../../../_runtime/metro/09465__.js";
import _modDef9466 from "../../../../_runtime/metro/09466__.js";
import _modDef9467 from "../../../../_runtime/metro/09467__.js";

require = fn;
const badgeVariants = {};
badgeVariants[fn(9458).BadgeCategory.STAFF] = { imageSource: _modDef7106 };
let obj2 = { imageSource: _modDef7106 };
badgeVariants[fn(9458).BadgeCategory.PARTNERED] = { imageSource: _modDef7107 };
const obj3 = { imageSource: _modDef7107 };
badgeVariants[fn(9458).BadgeCategory.VERIFIED] = { imageSource: _modDef7106 };
const obj4 = { imageSource: _modDef7106 };
badgeVariants[fn(9458).BadgeCategory.COMMUNITY] = {
  imageSource: _modDef9464,
  imageSourceLight: _modDef9465,
  premiumImageSource: _modDef9466,
};
const obj5 = { imageSource: _modDef9464, imageSourceLight: _modDef9465, premiumImageSource: _modDef9466 };
badgeVariants[fn(9458).BadgeCategory.DISCOVERABLE] = { imageSource: _modDef9467 };
const obj6 = { imageSource: _modDef9467 };
badgeVariants[fn(9458).BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: _modDef7106 };
badgeVariants[fn(9458).BadgeCategory.NONE] = {};
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
