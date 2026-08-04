// discord_app/modules/in_app_reports/IarSettingsUpsellsConfigScFiltersSexualMedia.tsx
let obj = {
  getTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["Gtck/t"]);
  },
  getDisabledTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.E6UmXa);
  },
  getDescription() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.jcRSp6);
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
  let obj = require(5884) /* resolveExplicitContentSettingWithDefaults */;
  const explicitContentSettingOrDefault = require(5884) /* resolveExplicitContentSettingWithDefaults */.getExplicitContentSettingOrDefault();
  obj = {};
  ({ explicitContentGuilds, explicitContentFriendDm, explicitContentNonFriendDm } = explicitContentSettingOrDefault);
  if (explicitContentGuilds === require(1306) /* create */.ExplicitContentRedaction.SHOW) {
    obj.explicitContentGuilds = tmp(1306).ExplicitContentRedaction.BLUR;
  }
  if (explicitContentFriendDm === require(1306) /* create */.ExplicitContentRedaction.SHOW) {
    obj.explicitContentFriendDm = tmp(1306).ExplicitContentRedaction.BLUR;
  }
  if (explicitContentNonFriendDm === require(1306) /* create */.ExplicitContentRedaction.SHOW) {
    obj.explicitContentNonFriendDm = tmp(1306).ExplicitContentRedaction.BLUR;
  }
  return obj.updateExplicitContentSetting(obj);
};
obj[5] = function predicate() {
  let explicitContentFriendDm;
  let explicitContentGuilds;
  let explicitContentNonFriendDm;
  const explicitContentSettingOrDefault = require(5884) /* resolveExplicitContentSettingWithDefaults */.getExplicitContentSettingOrDefault();
  ({ explicitContentGuilds, explicitContentFriendDm, explicitContentNonFriendDm } = explicitContentSettingOrDefault);
  const obj = require(5884) /* resolveExplicitContentSettingWithDefaults */;
  return explicitContentGuilds === require(1306) /* create */.ExplicitContentRedaction.SHOW || explicitContentFriendDm === require(1306) /* create */.ExplicitContentRedaction.SHOW || explicitContentNonFriendDm === require(1306) /* create */.ExplicitContentRedaction.SHOW;
};
const result = require("getSystemLocale").fileFinishedImporting("modules/in_app_reports/IarSettingsUpsellsConfigScFiltersSexualMedia.tsx");

export default obj;