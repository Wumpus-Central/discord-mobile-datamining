import { create } from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import { getSystemLocale } from "../../intl/index.native.tsx";
import { resolveExplicitContentSettingWithDefaults } from "../explicit_media_redaction/SensitiveMediaExplicitRedactionSettingsUtils.tsx";
// discord_app/modules/in_app_reports/IarSettingsUpsellsConfigScFiltersSexualMedia.tsx
let obj = {
  getTitle() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t["Gtck/t"]);
  },
  getDisabledTitle() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t.E6UmXa);
  },
  getDescription() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t.jcRSp6);
  },
  eligibleReportSubtypes: null,
  onApply: null,
  predicate: null
};
const items = [require("ReportNames").ReportSubType.SUB_CSAM, require("ReportNames").ReportSubType.SUB_LOLI, require("ReportNames").ReportSubType.SUB_NCP, require("ReportNames").ReportSubType.SUB_SEXUALLY_DEGRADING_CONTENT, require("ReportNames").ReportSubType.SUB_UNSOLICITED_PORN];
obj[3] = items;
obj[4] = function onApply() {
  let explicitContentFriendDm;
  let explicitContentGuilds;
  let explicitContentNonFriendDm;
  let obj = resolveExplicitContentSettingWithDefaults /* resolveExplicitContentSettingWithDefaults */;
  const explicitContentSettingOrDefault = resolveExplicitContentSettingWithDefaults /* resolveExplicitContentSettingWithDefaults */.getExplicitContentSettingOrDefault();
  obj = {};
  ({ explicitContentGuilds, explicitContentFriendDm, explicitContentNonFriendDm } = explicitContentSettingOrDefault);
  if (explicitContentGuilds === create /* create */.ExplicitContentRedaction.SHOW) {
    obj.explicitContentGuilds = tmp(1306).ExplicitContentRedaction.BLUR;
  }
  if (explicitContentFriendDm === create /* create */.ExplicitContentRedaction.SHOW) {
    obj.explicitContentFriendDm = tmp(1306).ExplicitContentRedaction.BLUR;
  }
  if (explicitContentNonFriendDm === create /* create */.ExplicitContentRedaction.SHOW) {
    obj.explicitContentNonFriendDm = tmp(1306).ExplicitContentRedaction.BLUR;
  }
  return obj.updateExplicitContentSetting(obj);
};
obj[5] = function predicate() {
  let explicitContentFriendDm;
  let explicitContentGuilds;
  let explicitContentNonFriendDm;
  const explicitContentSettingOrDefault = resolveExplicitContentSettingWithDefaults /* resolveExplicitContentSettingWithDefaults */.getExplicitContentSettingOrDefault();
  ({ explicitContentGuilds, explicitContentFriendDm, explicitContentNonFriendDm } = explicitContentSettingOrDefault);
  const obj = resolveExplicitContentSettingWithDefaults /* resolveExplicitContentSettingWithDefaults */;
  return explicitContentGuilds === create /* create */.ExplicitContentRedaction.SHOW || explicitContentFriendDm === create /* create */.ExplicitContentRedaction.SHOW || explicitContentNonFriendDm === create /* create */.ExplicitContentRedaction.SHOW;
};
const result = require("getSystemLocale").fileFinishedImporting("modules/in_app_reports/IarSettingsUpsellsConfigScFiltersSexualMedia.tsx");

export default obj;