// discord_app/modules/guild_badge/native/GuildBadgeImageSource.tsx
import shared from "../../../design/shared.tsx";
import _modDef7050 from "../../../../_runtime/metro/07050__.js";
import _modDef7051 from "../../../../_runtime/metro/07051__.js";
import GuildTraits from "../GuildTraits.tsx";
import BadgeCategory from "../BadgeCategory.tsx";
import _modDef9410 from "../../../../_runtime/metro/09410__.js";
import _modDef9411 from "../../../../_runtime/metro/09411__.js";
import _modDef9412 from "../../../../_runtime/metro/09412__.js";
import _modDef9413 from "../../../../_runtime/metro/09413__.js";

require = fn;
const badgeVariants = {};
badgeVariants[fn(9404).BadgeCategory.STAFF] = { imageSource: _modDef7050 };
let obj2 = { imageSource: _modDef7050 };
badgeVariants[fn(9404).BadgeCategory.PARTNERED] = { imageSource: _modDef7051 };
const obj3 = { imageSource: _modDef7051 };
badgeVariants[fn(9404).BadgeCategory.VERIFIED] = { imageSource: _modDef7050 };
const obj4 = { imageSource: _modDef7050 };
badgeVariants[fn(9404).BadgeCategory.COMMUNITY] = {
  imageSource: _modDef9410,
  imageSourceLight: _modDef9411,
  premiumImageSource: _modDef9412,
};
const obj5 = { imageSource: _modDef9410, imageSourceLight: _modDef9411, premiumImageSource: _modDef9412 };
badgeVariants[fn(9404).BadgeCategory.DISCOVERABLE] = { imageSource: _modDef9413 };
const obj6 = { imageSource: _modDef9413 };
badgeVariants[fn(9404).BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: _modDef7050 };
badgeVariants[fn(9404).BadgeCategory.NONE] = {};
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
