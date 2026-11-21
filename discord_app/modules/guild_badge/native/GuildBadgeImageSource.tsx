// discord_app/modules/guild_badge/native/GuildBadgeImageSource.tsx
import shared from "../../../design/shared.tsx";
import _modDef7326 from "../../../../_runtime/metro/07326__.js";
import _modDef7327 from "../../../../_runtime/metro/07327__.js";
import GuildTraits from "../GuildTraits.tsx";
import BadgeCategory from "../BadgeCategory.tsx";
import _modDef9760 from "../../../../_runtime/metro/09760__.js";
import _modDef9761 from "../../../../_runtime/metro/09761__.js";
import _modDef9762 from "../../../../_runtime/metro/09762__.js";
import _modDef9763 from "../../../../_runtime/metro/09763__.js";

require = fn;
const badgeVariants = {};
badgeVariants[fn(9754).BadgeCategory.STAFF] = { imageSource: _modDef7326 };
let obj2 = { imageSource: _modDef7326 };
badgeVariants[fn(9754).BadgeCategory.PARTNERED] = { imageSource: _modDef7327 };
const obj3 = { imageSource: _modDef7327 };
badgeVariants[fn(9754).BadgeCategory.VERIFIED] = { imageSource: _modDef7326 };
const obj4 = { imageSource: _modDef7326 };
badgeVariants[fn(9754).BadgeCategory.COMMUNITY] = {
  imageSource: _modDef9760,
  imageSourceLight: _modDef9761,
  premiumImageSource: _modDef9762,
};
const obj5 = { imageSource: _modDef9760, imageSourceLight: _modDef9761, premiumImageSource: _modDef9762 };
badgeVariants[fn(9754).BadgeCategory.DISCOVERABLE] = { imageSource: _modDef9763 };
const obj6 = { imageSource: _modDef9763 };
badgeVariants[fn(9754).BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: _modDef7326 };
badgeVariants[fn(9754).BadgeCategory.NONE] = {};
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
