// discord_app/modules/guild_badge/native/GuildBadgeImageSource.tsx
import shared from "../../../design/shared.tsx";
import _modDef6962 from "../../../../_runtime/metro/06962__.js";
import _modDef6963 from "../../../../_runtime/metro/06963__.js";
import GuildTraits from "../GuildTraits.tsx";
import BadgeCategory from "../BadgeCategory.tsx";
import _modDef9311 from "../../../../_runtime/metro/09311__.js";
import _modDef9312 from "../../../../_runtime/metro/09312__.js";
import _modDef9313 from "../../../../_runtime/metro/09313__.js";
import _modDef9314 from "../../../../_runtime/metro/09314__.js";

require = fn;
const badgeVariants = {};
badgeVariants[fn(9305).BadgeCategory.STAFF] = { imageSource: _modDef6962 };
let obj2 = { imageSource: _modDef6962 };
badgeVariants[fn(9305).BadgeCategory.PARTNERED] = { imageSource: _modDef6963 };
const obj3 = { imageSource: _modDef6963 };
badgeVariants[fn(9305).BadgeCategory.VERIFIED] = { imageSource: _modDef6962 };
const obj4 = { imageSource: _modDef6962 };
badgeVariants[fn(9305).BadgeCategory.COMMUNITY] = {
  imageSource: _modDef9311,
  imageSourceLight: _modDef9312,
  premiumImageSource: _modDef9313,
};
const obj5 = { imageSource: _modDef9311, imageSourceLight: _modDef9312, premiumImageSource: _modDef9313 };
badgeVariants[fn(9305).BadgeCategory.DISCOVERABLE] = { imageSource: _modDef9314 };
const obj6 = { imageSource: _modDef9314 };
badgeVariants[fn(9305).BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: _modDef6962 };
badgeVariants[fn(9305).BadgeCategory.NONE] = {};
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
