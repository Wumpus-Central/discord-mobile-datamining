// === Module 17107: getErrorMessageFromErrorCode ===

// Module 17107 (getErrorMessageFromErrorCode)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import ME from "ME" /* 676 */;

({ AbortCodes: obj1, GuildFeatures: c3 } = ME);
const result = set.fileFinishedImporting("modules/guild_settings/server_monetization/boost_perks/GuildSettingsVanityURLUtils.tsx");

export const getErrorMessageFromErrorCode = function getErrorMessageFromErrorCode(code) {
  if (constants.UNKNOWN_CHANNEL === code) {
    const intl7 = getSystemLocale.intl;
    return intl7.string(getSystemLocale.t.ETCmRa);
  } else if (tmp.INVALID_PERMISSIONS === code) {
    const intl6 = getSystemLocale.intl;
    return intl6.string(getSystemLocale.t.lXtut1);
  } else if (tmp.INVALID_ACCESS === code) {
    const intl5 = getSystemLocale.intl;
    return intl5.string(getSystemLocale.t.TAXOKw);
  } else if (tmp.VANITY_URL_REQUIRED_FOR_PUBLISHED_GUILDS === code) {
    const intl4 = getSystemLocale.intl;
    return intl4.string(getSystemLocale.t.ZpuxVs);
  } else if (tmp.VANITY_URL_EMPLOYEE_ONLY_GUILD_DISABLED === code) {
    const intl3 = getSystemLocale.intl;
    return intl3.string(getSystemLocale.t.tSBmIv);
  } else if (tmp.VANITY_URL_REQUIREMENTS_NOT_MET === code) {
    const intl2 = getSystemLocale.intl;
    return intl2.string(getSystemLocale.t["w+yGQT"]);
  } else {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.ckQidX);
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