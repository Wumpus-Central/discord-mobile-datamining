// discord_app/modules/guild_badge/native/GuildBadgeImageSource.tsx
import shared from "../../../design/shared.tsx";
import _modDef7057 from "../../../../_runtime/metro/07057__.js";
import _modDef7058 from "../../../../_runtime/metro/07058__.js";
import GuildTraits from "../GuildTraits.tsx";
import BadgeCategory from "../BadgeCategory.tsx";
import _modDef8740 from "../../../../_runtime/metro/08740__.js";
import _modDef8741 from "../../../../_runtime/metro/08741__.js";
import _modDef8742 from "../../../../_runtime/metro/08742__.js";
import _modDef8743 from "../../../../_runtime/metro/08743__.js";

require = fn;
const badgeVariants = {};
badgeVariants[fn(8734).BadgeCategory.STAFF] = { imageSource: _modDef7057 };
let obj2 = { imageSource: _modDef7057 };
badgeVariants[fn(8734).BadgeCategory.PARTNERED] = { imageSource: _modDef7058 };
const obj3 = { imageSource: _modDef7058 };
badgeVariants[fn(8734).BadgeCategory.VERIFIED] = { imageSource: _modDef7057 };
const obj4 = { imageSource: _modDef7057 };
badgeVariants[fn(8734).BadgeCategory.COMMUNITY] = {
  imageSource: _modDef8740,
  imageSourceLight: _modDef8741,
  premiumImageSource: _modDef8742,
};
const obj5 = { imageSource: _modDef8740, imageSourceLight: _modDef8741, premiumImageSource: _modDef8742 };
badgeVariants[fn(8734).BadgeCategory.DISCOVERABLE] = { imageSource: _modDef8743 };
const obj6 = { imageSource: _modDef8743 };
badgeVariants[fn(8734).BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: _modDef7057 };
badgeVariants[fn(8734).BadgeCategory.NONE] = {};
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
