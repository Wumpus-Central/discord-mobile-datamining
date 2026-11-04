// discord_app/modules/guild_badge/native/GuildBadgeImageSource.tsx
import shared from "../../../design/shared.tsx";
import _modDef7103 from "../../../../_runtime/metro/07103__.js";
import _modDef7104 from "../../../../_runtime/metro/07104__.js";
import GuildTraits from "../GuildTraits.tsx";
import BadgeCategory from "../BadgeCategory.tsx";
import _modDef9457 from "../../../../_runtime/metro/09457__.js";
import _modDef9458 from "../../../../_runtime/metro/09458__.js";
import _modDef9459 from "../../../../_runtime/metro/09459__.js";
import _modDef9460 from "../../../../_runtime/metro/09460__.js";

require = fn;
const badgeVariants = {};
badgeVariants[fn(9451).BadgeCategory.STAFF] = { imageSource: _modDef7103 };
let obj2 = { imageSource: _modDef7103 };
badgeVariants[fn(9451).BadgeCategory.PARTNERED] = { imageSource: _modDef7104 };
const obj3 = { imageSource: _modDef7104 };
badgeVariants[fn(9451).BadgeCategory.VERIFIED] = { imageSource: _modDef7103 };
const obj4 = { imageSource: _modDef7103 };
badgeVariants[fn(9451).BadgeCategory.COMMUNITY] = {
  imageSource: _modDef9457,
  imageSourceLight: _modDef9458,
  premiumImageSource: _modDef9459,
};
const obj5 = { imageSource: _modDef9457, imageSourceLight: _modDef9458, premiumImageSource: _modDef9459 };
badgeVariants[fn(9451).BadgeCategory.DISCOVERABLE] = { imageSource: _modDef9460 };
const obj6 = { imageSource: _modDef9460 };
badgeVariants[fn(9451).BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: _modDef7103 };
badgeVariants[fn(9451).BadgeCategory.NONE] = {};
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
