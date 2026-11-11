// discord_app/modules/guild_badge/native/GuildBadgeImageSource.tsx
import shared from "../../../design/shared.tsx";
import _modDef7658 from "../../../../_runtime/metro/07658__.js";
import _modDef7659 from "../../../../_runtime/metro/07659__.js";
import BadgeCategory from "../BadgeCategory.tsx";
import GuildTraits from "../GuildTraits.tsx";
import _modDef10330 from "../../../../_runtime/metro/10330__.js";
import _modDef10331 from "../../../../_runtime/metro/10331__.js";
import _modDef10332 from "../../../../_runtime/metro/10332__.js";
import _modDef10333 from "../../../../_runtime/metro/10333__.js";

require = fn;
const badgeVariants = {};
badgeVariants[fn(10324).BadgeCategory.STAFF] = { imageSource: _modDef7658 };
let obj2 = { imageSource: _modDef7658 };
badgeVariants[fn(10324).BadgeCategory.PARTNERED] = { imageSource: _modDef7659 };
const obj3 = { imageSource: _modDef7659 };
badgeVariants[fn(10324).BadgeCategory.VERIFIED] = { imageSource: _modDef7658 };
const obj4 = { imageSource: _modDef7658 };
badgeVariants[fn(10324).BadgeCategory.COMMUNITY] = {
  imageSource: _modDef10330,
  imageSourceLight: _modDef10331,
  premiumImageSource: _modDef10332,
};
const obj5 = { imageSource: _modDef10330, imageSourceLight: _modDef10331, premiumImageSource: _modDef10332 };
badgeVariants[fn(10324).BadgeCategory.DISCOVERABLE] = { imageSource: _modDef10333 };
const obj6 = { imageSource: _modDef10333 };
badgeVariants[fn(10324).BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: _modDef7658 };
badgeVariants[fn(10324).BadgeCategory.NONE] = {};
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
