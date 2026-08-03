let obj = {
  getTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.RVX1zT);
  },
  getDisabledTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.SYkEBi);
  },
  getDescription() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.aqlmp8);
  },
  eligibleReportSubtypes: null,
  onApply: null,
  predicate: null
};
const items = [require("ReportNames").ReportSubType.SUB_GORE, require("ReportNames").ReportSubType.SUB_GLORIFYING_VIOLENCE];
obj[3] = items;
obj[4] = function onApply() {
  let goreContentFriendDm;
  let goreContentGuilds;
  let goreContentNonFriendDm;
  let obj = require(5886) /* resolveGoreSettingWithDefaults */;
  const goreContentSettingOrDefault = require(5886) /* resolveGoreSettingWithDefaults */.getGoreContentSettingOrDefault();
  obj = {};
  ({ goreContentGuilds, goreContentFriendDm, goreContentNonFriendDm } = goreContentSettingOrDefault);
  if (goreContentGuilds === require(1306) /* create */.ExplicitContentRedaction.SHOW) {
    obj.goreContentGuilds = tmp(1306).ExplicitContentRedaction.BLUR;
  }
  if (goreContentFriendDm === require(1306) /* create */.ExplicitContentRedaction.SHOW) {
    obj.goreContentFriendDm = tmp(1306).ExplicitContentRedaction.BLUR;
  }
  if (goreContentNonFriendDm === require(1306) /* create */.ExplicitContentRedaction.SHOW) {
    obj.goreContentNonFriendDm = tmp(1306).ExplicitContentRedaction.BLUR;
  }
  return obj.updateGoreContentSetting(obj);
};
obj[5] = function predicate() {
  let goreContentFriendDm;
  let goreContentGuilds;
  let goreContentNonFriendDm;
  const goreContentSettingOrDefault = require(5886) /* resolveGoreSettingWithDefaults */.getGoreContentSettingOrDefault();
  ({ goreContentGuilds, goreContentFriendDm, goreContentNonFriendDm } = goreContentSettingOrDefault);
  const obj = require(5886) /* resolveGoreSettingWithDefaults */;
  return goreContentGuilds === require(1306) /* create */.ExplicitContentRedaction.SHOW || goreContentFriendDm === require(1306) /* create */.ExplicitContentRedaction.SHOW || goreContentNonFriendDm === require(1306) /* create */.ExplicitContentRedaction.SHOW;
};
const result = require("getSystemLocale").fileFinishedImporting("modules/in_app_reports/IarSettingsUpsellsConfigScFiltersGraphicMedia.tsx");

export default obj;