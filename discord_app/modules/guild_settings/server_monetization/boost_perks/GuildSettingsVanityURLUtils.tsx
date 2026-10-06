// === Module 17705: GuildSettingsVanityURLUtils ===

// Module 17705 (GuildSettingsVanityURLUtils)
import intl8 from "intl" /* 1126 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
({ AbortCodes: c2, GuildFeatures: c3 } = Constants);
const result = size.fileFinishedImporting("modules/guild_settings/server_monetization/boost_perks/GuildSettingsVanityURLUtils.tsx");

export const getErrorMessageFromErrorCode = function getErrorMessageFromErrorCode(code) {
  if (constants.UNKNOWN_CHANNEL === code) {
    const intl7 = intl8.intl;
    return intl7.string(intl8.t.ETCmRa);
  } else if (constants.INVALID_PERMISSIONS === code) {
    const intl6 = intl8.intl;
    return intl6.string(intl8.t.lXtut1);
  } else if (constants.INVALID_ACCESS === code) {
    const intl5 = intl8.intl;
    return intl5.string(intl8.t.TAXOKw);
  } else if (constants.VANITY_URL_REQUIRED_FOR_PUBLISHED_GUILDS === code) {
    const intl4 = intl8.intl;
    return intl4.string(intl8.t.ZpuxVs);
  } else if (constants.VANITY_URL_EMPLOYEE_ONLY_GUILD_DISABLED === code) {
    const intl3 = intl8.intl;
    return intl3.string(intl8.t.tSBmIv);
  } else if (constants.VANITY_URL_REQUIREMENTS_NOT_MET === code) {
    const intl2 = intl8.intl;
    return intl2.string(intl8.t["w+yGQT"]);
  } else {
    const intl = intl8.intl;
    return intl.string(intl8.t.ckQidX);
  }
};
export const canSeeVanityUrlSettings = function canSeeVanityUrlSettings(guild) {
  const features = guild.features;
  let hasItem = features.has(constants2.VANITY_URL);
  if (!hasItem) {
    const features2 = guild.features;
    const hasItem1 = features2.has(constants2.GUILD_WEB_PAGE_VANITY_URL) && null != guild.vanityURLCode;
    hasItem = hasItem1;
  }
  return hasItem;
};