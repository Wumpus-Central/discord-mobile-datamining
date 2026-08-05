import { AccessibilityAnnouncer } from "../../../design/shared.tsx";
import { BadgeCategory } from "../BadgeCategory.tsx";
import { GuildVisibility } from "../GuildTraits.tsx";
// discord_app/modules/guild_badge/native/GuildBadgeImageSource.tsx
const require = arg1;
let obj = {};
obj = { imageSource: null };
obj[0] = require("registerAsset");
obj[require("BadgeCategory").BadgeCategory.STAFF] = obj;
obj = { imageSource: null };
obj[0] = require("registerAsset");
obj[require("BadgeCategory").BadgeCategory.PARTNERED] = obj;
const obj1 = { imageSource: null };
obj1[0] = require("registerAsset");
obj[require("BadgeCategory").BadgeCategory.VERIFIED] = obj1;
let obj2 = { imageSource: null, imageSourceLight: null, premiumImageSource: null };
obj2[0] = require("registerAsset");
obj2[1] = require("registerAsset");
obj2[2] = require("registerAsset");
obj[require("BadgeCategory").BadgeCategory.COMMUNITY] = obj2;
const obj3 = { imageSource: null, imageSourceLight: null, premiumImageSource: null };
obj3[0] = require("registerAsset");
obj3[1] = require("registerAsset");
obj3[2] = require("registerAsset");
obj[require("BadgeCategory").BadgeCategory.DISCOVERABLE] = obj3;
const obj4 = { imageSource: null };
obj4[0] = require("registerAsset");
obj[require("BadgeCategory").BadgeCategory.VERIFIED_AND_PARTNERED] = obj4;
obj[require("BadgeCategory").BadgeCategory.NONE] = {};
const result = require("registerAsset").fileFinishedImporting("modules/guild_badge/native/GuildBadgeImageSource.tsx");

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
  const obj = GuildVisibility /* GuildVisibility */;
  const guildTraits = obj.getGuildTraits(guild);
  const obj2 = BadgeCategory /* BadgeCategory */;
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
      tmpResult = AccessibilityAnnouncer /* AccessibilityAnnouncer */;
    }
    premiumImageSource = tmp4.premiumImageSource;
  }
};