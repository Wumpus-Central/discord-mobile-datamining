// discord_app/modules/guild_badge/native/GuildBadgeImageSource.tsx
import shared from "../../../design/shared.tsx";
import _modDef7088 from "../../../../_runtime/metro/07088__.js";
import _modDef7089 from "../../../../_runtime/metro/07089__.js";
import GuildTraits from "../GuildTraits.tsx";
import BadgeCategory from "../BadgeCategory.tsx";
import _modDef9439 from "../../../../_runtime/metro/09439__.js";
import _modDef9440 from "../../../../_runtime/metro/09440__.js";
import _modDef9441 from "../../../../_runtime/metro/09441__.js";
import _modDef9442 from "../../../../_runtime/metro/09442__.js";

require = fn;
const badgeVariants = {};
badgeVariants[fn(9433).BadgeCategory.STAFF] = { imageSource: _modDef7088 };
let obj2 = { imageSource: _modDef7088 };
badgeVariants[fn(9433).BadgeCategory.PARTNERED] = { imageSource: _modDef7089 };
const obj3 = { imageSource: _modDef7089 };
badgeVariants[fn(9433).BadgeCategory.VERIFIED] = { imageSource: _modDef7088 };
const obj4 = { imageSource: _modDef7088 };
badgeVariants[fn(9433).BadgeCategory.COMMUNITY] = {
  imageSource: _modDef9439,
  imageSourceLight: _modDef9440,
  premiumImageSource: _modDef9441,
};
const obj5 = { imageSource: _modDef9439, imageSourceLight: _modDef9440, premiumImageSource: _modDef9441 };
badgeVariants[fn(9433).BadgeCategory.DISCOVERABLE] = { imageSource: _modDef9442 };
const obj6 = { imageSource: _modDef9442 };
badgeVariants[fn(9433).BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: _modDef7088 };
badgeVariants[fn(9433).BadgeCategory.NONE] = {};
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
