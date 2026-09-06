// === Module 17523: GuildSettingsVanityURLUtils ===

// Module 17523 (GuildSettingsVanityURLUtils)
import util from "util" /* 1114 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

({ AbortCodes: c2, GuildFeatures: c3 } = Constants);
const result = size.fileFinishedImporting("modules/guild_settings/server_monetization/boost_perks/GuildSettingsVanityURLUtils.tsx");

export const getErrorMessageFromErrorCode = function getErrorMessageFromErrorCode(code) {
  if (constants.UNKNOWN_CHANNEL === code) {
    const intl7 = util.intl;
    return intl7.string(util.t.ETCmRa);
  } else if (tmp.INVALID_PERMISSIONS === code) {
    const intl6 = util.intl;
    return intl6.string(util.t.lXtut1);
  } else if (tmp.INVALID_ACCESS === code) {
    const intl5 = util.intl;
    return intl5.string(util.t.TAXOKw);
  } else if (tmp.VANITY_URL_REQUIRED_FOR_PUBLISHED_GUILDS === code) {
    const intl4 = util.intl;
    return intl4.string(util.t.ZpuxVs);
  } else if (tmp.VANITY_URL_EMPLOYEE_ONLY_GUILD_DISABLED === code) {
    const intl3 = util.intl;
    return intl3.string(util.t.tSBmIv);
  } else if (tmp.VANITY_URL_REQUIREMENTS_NOT_MET === code) {
    const intl2 = util.intl;
    return intl2.string(util.t["w+yGQT"]);
  } else {
    const intl = util.intl;
    return intl.string(util.t.ckQidX);
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