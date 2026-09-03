// discord_app/modules/guild_badge/native/GuildBadgeImageSource.tsx
import AccessibilityAnnouncer from "../../../design/shared.tsx";
import registerAssetDefault from "../../../../_runtime/07686_registerAsset.js";
import registerAssetDefault2 from "../../../../_runtime/07687_registerAsset.js";
import BadgeCategory from "../BadgeCategory.tsx";
import GuildVisibility from "../GuildTraits.tsx";
import registerAssetDefault3 from "../../../../_runtime/08889_registerAsset.js";
import registerAssetDefault4 from "../../../../_runtime/08890_registerAsset.js";
import registerAssetDefault5 from "../../../../_runtime/08891_registerAsset.js";
import registerAssetDefault6 from "../../../../_runtime/08892_registerAsset.js";
import registerAssetDefault7 from "../../../../_runtime/08893_registerAsset.js";
import registerAssetDefault8 from "../../../../_runtime/08894_registerAsset.js";

require = arg1;
let obj = {};
obj = { imageSource: registerAssetDefault };
obj[require("BadgeCategory").BadgeCategory.STAFF] = obj;
obj = { imageSource: registerAssetDefault2 };
obj[require("BadgeCategory").BadgeCategory.PARTNERED] = obj;
obj[require("BadgeCategory").BadgeCategory.VERIFIED] = { imageSource: registerAssetDefault };
const obj1 = { imageSource: registerAssetDefault };
obj[require("BadgeCategory").BadgeCategory.COMMUNITY] = {
  imageSource: registerAssetDefault3,
  imageSourceLight: registerAssetDefault4,
  premiumImageSource: registerAssetDefault5,
};
let obj2 = {
  imageSource: registerAssetDefault3,
  imageSourceLight: registerAssetDefault4,
  premiumImageSource: registerAssetDefault5,
};
obj[require("BadgeCategory").BadgeCategory.DISCOVERABLE] = {
  imageSource: registerAssetDefault6,
  imageSourceLight: registerAssetDefault7,
  premiumImageSource: registerAssetDefault8,
};
const obj3 = {
  imageSource: registerAssetDefault6,
  imageSourceLight: registerAssetDefault7,
  premiumImageSource: registerAssetDefault8,
};
obj[require("BadgeCategory").BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: registerAssetDefault };
obj[require("BadgeCategory").BadgeCategory.NONE] = {};
const obj4 = { imageSource: registerAssetDefault };
const result = require("set").fileFinishedImporting("modules/guild_badge/native/GuildBadgeImageSource.tsx");

export const badgeVariants = obj;
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
export const getGuildBadgeImageSource = function getGuildBadgeImageSource(guild, closure_2) {
  obj = GuildVisibility;
  const guildTraits = obj.getGuildTraits(guild);
  const obj2 = BadgeCategory;
  const tmp4 = obj[obj2.getBadgeCategory(obj2, guildTraits)];
  if (null == tmp4) {
    return null;
  } else {
    if (!guildTraits.premium) {
      if (tmpResult.isThemeLight(closure_2)) {
        if (null != tmp4.imageSourceLight) {
          let premiumImageSource = tmp4.imageSourceLight;
        }
      }
      premiumImageSource = tmp4.imageSource;
      tmpResult = AccessibilityAnnouncer;
    }
    premiumImageSource = tmp4.premiumImageSource;
  }
};
