// discord_app/modules/in_app_reports/IarSettingsUpsellsConfigScFiltersSexualMedia.tsx
let obj = {
  getTitle() {
    const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t["Gtck/t"]);
  },
  getDisabledTitle() {
    const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t.E6UmXa);
  },
  getDescription() {
    const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t.jcRSp6);
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
  let obj = require("../explicit_media_redaction/SensitiveMediaExplicitRedactionSettingsUtils.tsx") /* resolveExplicitContentSettingWithDefaults */;
  const explicitContentSettingOrDefault = require("../explicit_media_redaction/SensitiveMediaExplicitRedactionSettingsUtils.tsx") /* resolveExplicitContentSettingWithDefaults */.getExplicitContentSettingOrDefault();
  obj = {};
  ({ explicitContentGuilds, explicitContentFriendDm, explicitContentNonFriendDm } = explicitContentSettingOrDefault);
  if (explicitContentGuilds === require("../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx") /* create */.ExplicitContentRedaction.SHOW) {
    obj.explicitContentGuilds = tmp(1306).ExplicitContentRedaction.BLUR;
  }
  if (explicitContentFriendDm === require("../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx") /* create */.ExplicitContentRedaction.SHOW) {
    obj.explicitContentFriendDm = tmp(1306).ExplicitContentRedaction.BLUR;
  }
  if (explicitContentNonFriendDm === require("../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx") /* create */.ExplicitContentRedaction.SHOW) {
    obj.explicitContentNonFriendDm = tmp(1306).ExplicitContentRedaction.BLUR;
  }
  return obj.updateExplicitContentSetting(obj);
};
obj[5] = function predicate() {
  let explicitContentFriendDm;
  let explicitContentGuilds;
  let explicitContentNonFriendDm;
  const explicitContentSettingOrDefault = require("../explicit_media_redaction/SensitiveMediaExplicitRedactionSettingsUtils.tsx") /* resolveExplicitContentSettingWithDefaults */.getExplicitContentSettingOrDefault();
  ({ explicitContentGuilds, explicitContentFriendDm, explicitContentNonFriendDm } = explicitContentSettingOrDefault);
  const obj = require("../explicit_media_redaction/SensitiveMediaExplicitRedactionSettingsUtils.tsx") /* resolveExplicitContentSettingWithDefaults */;
  return explicitContentGuilds === require("../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx") /* create */.ExplicitContentRedaction.SHOW || explicitContentFriendDm === require("../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx") /* create */.ExplicitContentRedaction.SHOW || explicitContentNonFriendDm === require("../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx") /* create */.ExplicitContentRedaction.SHOW;
};
const result = require("getSystemLocale").fileFinishedImporting("modules/in_app_reports/IarSettingsUpsellsConfigScFiltersSexualMedia.tsx");

export default obj;