// discord_app/modules/guild_settings/server_monetization/boost_perks/GuildSettingsVanityURLUtils.tsx
import ME from "ME";

let c3;
let obj1;
({ AbortCodes: obj1, GuildFeatures: c3 } = ME);
const result = require("set").fileFinishedImporting("modules/guild_settings/server_monetization/boost_perks/GuildSettingsVanityURLUtils.tsx");

export const getErrorMessageFromErrorCode = function getErrorMessageFromErrorCode(code) {
  if (constants.UNKNOWN_CHANNEL === code) {
    const intl7 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl7.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.ETCmRa);
  } else if (tmp.INVALID_PERMISSIONS === code) {
    const intl6 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl6.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.lXtut1);
  } else if (tmp.INVALID_ACCESS === code) {
    const intl5 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl5.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.TAXOKw);
  } else if (tmp.VANITY_URL_REQUIRED_FOR_PUBLISHED_GUILDS === code) {
    const intl4 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl4.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.ZpuxVs);
  } else if (tmp.VANITY_URL_EMPLOYEE_ONLY_GUILD_DISABLED === code) {
    const intl3 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl3.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.tSBmIv);
  } else if (tmp.VANITY_URL_REQUIREMENTS_NOT_MET === code) {
    const intl2 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl2.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["w+yGQT"]);
  } else {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.ckQidX);
  }
};
export const canSeeVanityUrlSettings = function canSeeVanityUrlSettings(guild) {
  const features = guild.features;
  let hasItem = features.has(constants2.VANITY_URL);
  if (!hasItem) {
    const features2 = guild.features;
    let hasItem1 = features2.has(constants2.GUILD_WEB_PAGE_VANITY_URL);
    if (hasItem1) {
      hasItem1 = null != guild.vanityURLCode;
    }
    hasItem = hasItem1;
  }
  return hasItem;
};