// discord_app/modules/guild_badge/native/GuildBadgeImageSource.tsx
import shared from "../../../design/shared.tsx";
import _modDef6956 from "../../../../_runtime/metro/06956__.js";
import _modDef6957 from "../../../../_runtime/metro/06957__.js";
import GuildTraits from "../GuildTraits.tsx";
import BadgeCategory from "../BadgeCategory.tsx";
import _modDef9289 from "../../../../_runtime/metro/09289__.js";
import _modDef9290 from "../../../../_runtime/metro/09290__.js";
import _modDef9291 from "../../../../_runtime/metro/09291__.js";
import _modDef9292 from "../../../../_runtime/metro/09292__.js";
import _modDef9293 from "../../../../_runtime/metro/09293__.js";
import _modDef9294 from "../../../../_runtime/metro/09294__.js";

require = fn;
const badgeVariants = {};
badgeVariants[fn(9286).BadgeCategory.STAFF] = { imageSource: _modDef6956 };
let obj2 = { imageSource: _modDef6956 };
badgeVariants[fn(9286).BadgeCategory.PARTNERED] = { imageSource: _modDef6957 };
const obj3 = { imageSource: _modDef6957 };
badgeVariants[fn(9286).BadgeCategory.VERIFIED] = { imageSource: _modDef6956 };
const obj4 = { imageSource: _modDef6956 };
badgeVariants[fn(9286).BadgeCategory.COMMUNITY] = {
  imageSource: _modDef9289,
  imageSourceLight: _modDef9290,
  premiumImageSource: _modDef9291,
};
const obj5 = { imageSource: _modDef9289, imageSourceLight: _modDef9290, premiumImageSource: _modDef9291 };
badgeVariants[fn(9286).BadgeCategory.DISCOVERABLE] = {
  imageSource: _modDef9292,
  imageSourceLight: _modDef9293,
  premiumImageSource: _modDef9294,
};
const obj6 = { imageSource: _modDef9292, imageSourceLight: _modDef9293, premiumImageSource: _modDef9294 };
badgeVariants[fn(9286).BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: _modDef6956 };
badgeVariants[fn(9286).BadgeCategory.NONE] = {};
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
