// discord_app/modules/guild_badge/native/GuildBadgeImageSource.tsx
import shared from "../../../design/shared.tsx";
import _modDef7724 from "../../../../_runtime/metro/07724__.js";
import _modDef7725 from "../../../../_runtime/metro/07725__.js";
import BadgeCategory from "../BadgeCategory.tsx";
import GuildTraits from "../GuildTraits.tsx";
import _modDef10397 from "../../../../_runtime/metro/10397__.js";
import _modDef10398 from "../../../../_runtime/metro/10398__.js";
import _modDef10399 from "../../../../_runtime/metro/10399__.js";
import _modDef10400 from "../../../../_runtime/metro/10400__.js";

require = fn;
const badgeVariants = {};
badgeVariants[fn(10391).BadgeCategory.STAFF] = { imageSource: _modDef7724 };
let obj2 = { imageSource: _modDef7724 };
badgeVariants[fn(10391).BadgeCategory.PARTNERED] = { imageSource: _modDef7725 };
const obj3 = { imageSource: _modDef7725 };
badgeVariants[fn(10391).BadgeCategory.VERIFIED] = { imageSource: _modDef7724 };
const obj4 = { imageSource: _modDef7724 };
badgeVariants[fn(10391).BadgeCategory.COMMUNITY] = {
  imageSource: _modDef10397,
  imageSourceLight: _modDef10398,
  premiumImageSource: _modDef10399,
};
const obj5 = { imageSource: _modDef10397, imageSourceLight: _modDef10398, premiumImageSource: _modDef10399 };
badgeVariants[fn(10391).BadgeCategory.DISCOVERABLE] = { imageSource: _modDef10400 };
const obj6 = { imageSource: _modDef10400 };
badgeVariants[fn(10391).BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: _modDef7724 };
badgeVariants[fn(10391).BadgeCategory.NONE] = {};
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
