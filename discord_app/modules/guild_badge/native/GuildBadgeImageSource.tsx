// discord_app/modules/guild_badge/native/GuildBadgeImageSource.tsx
import shared from "../../../design/shared.tsx";
import _modDef6168 from "../../../../_runtime/metro/06168__.js";
import _modDef6169 from "../../../../_runtime/metro/06169__.js";
import GuildTraits from "../GuildTraits.tsx";
import BadgeCategory from "../BadgeCategory.tsx";
import _modDef8843 from "../../../../_runtime/metro/08843__.js";
import _modDef8844 from "../../../../_runtime/metro/08844__.js";
import _modDef8845 from "../../../../_runtime/metro/08845__.js";
import _modDef8846 from "../../../../_runtime/metro/08846__.js";
import _modDef8847 from "../../../../_runtime/metro/08847__.js";
import _modDef8848 from "../../../../_runtime/metro/08848__.js";

require = fn;
const badgeVariants = {};
badgeVariants[fn(8840).BadgeCategory.STAFF] = { imageSource: _modDef6168 };
let obj2 = { imageSource: _modDef6168 };
badgeVariants[fn(8840).BadgeCategory.PARTNERED] = { imageSource: _modDef6169 };
const obj3 = { imageSource: _modDef6169 };
badgeVariants[fn(8840).BadgeCategory.VERIFIED] = { imageSource: _modDef6168 };
const obj4 = { imageSource: _modDef6168 };
badgeVariants[fn(8840).BadgeCategory.COMMUNITY] = {
  imageSource: _modDef8843,
  imageSourceLight: _modDef8844,
  premiumImageSource: _modDef8845,
};
const obj5 = { imageSource: _modDef8843, imageSourceLight: _modDef8844, premiumImageSource: _modDef8845 };
badgeVariants[fn(8840).BadgeCategory.DISCOVERABLE] = {
  imageSource: _modDef8846,
  imageSourceLight: _modDef8847,
  premiumImageSource: _modDef8848,
};
const obj6 = { imageSource: _modDef8846, imageSourceLight: _modDef8847, premiumImageSource: _modDef8848 };
badgeVariants[fn(8840).BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: _modDef6168 };
badgeVariants[fn(8840).BadgeCategory.NONE] = {};
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
