// discord_app/modules/guild_badge/native/GuildBadgeImageSource.tsx
import shared from "../../../design/shared.tsx";
import _modDef6867 from "../../../../_runtime/metro/06867__.js";
import _modDef6868 from "../../../../_runtime/metro/06868__.js";
import GuildTraits from "../GuildTraits.tsx";
import BadgeCategory from "../BadgeCategory.tsx";
import _modDef9198 from "../../../../_runtime/metro/09198__.js";
import _modDef9199 from "../../../../_runtime/metro/09199__.js";
import _modDef9200 from "../../../../_runtime/metro/09200__.js";
import _modDef9201 from "../../../../_runtime/metro/09201__.js";
import _modDef9202 from "../../../../_runtime/metro/09202__.js";
import _modDef9203 from "../../../../_runtime/metro/09203__.js";

require = fn;
const badgeVariants = {};
badgeVariants[fn(9195).BadgeCategory.STAFF] = { imageSource: _modDef6867 };
let obj2 = { imageSource: _modDef6867 };
badgeVariants[fn(9195).BadgeCategory.PARTNERED] = { imageSource: _modDef6868 };
const obj3 = { imageSource: _modDef6868 };
badgeVariants[fn(9195).BadgeCategory.VERIFIED] = { imageSource: _modDef6867 };
const obj4 = { imageSource: _modDef6867 };
badgeVariants[fn(9195).BadgeCategory.COMMUNITY] = {
  imageSource: _modDef9198,
  imageSourceLight: _modDef9199,
  premiumImageSource: _modDef9200,
};
const obj5 = { imageSource: _modDef9198, imageSourceLight: _modDef9199, premiumImageSource: _modDef9200 };
badgeVariants[fn(9195).BadgeCategory.DISCOVERABLE] = {
  imageSource: _modDef9201,
  imageSourceLight: _modDef9202,
  premiumImageSource: _modDef9203,
};
const obj6 = { imageSource: _modDef9201, imageSourceLight: _modDef9202, premiumImageSource: _modDef9203 };
badgeVariants[fn(9195).BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: _modDef6867 };
badgeVariants[fn(9195).BadgeCategory.NONE] = {};
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_badge/native/GuildBadgeImageSource.tsx");

export { badgeVariants };
export const resolveImageSource = function resolveImageSource(premiumImageSource, guildTraits, arg2) {
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
};
export const getGuildBadgeImageSource = function getGuildBadgeImageSource(guild, theme) {
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
};
