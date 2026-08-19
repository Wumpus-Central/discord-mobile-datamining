// === Module 8150: items ===

// Module 8150 (items)
import obj132 from "obj132" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import create from "create" /* 1306 */;
import resolveExplicitContentSettingWithDefaults from "resolveExplicitContentSettingWithDefaults" /* 5023 */;
import ReportNames from "ReportNames" /* 8137 */;

let obj = {
  getTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["Gtck/t"]);
  },
  getDisabledTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.E6UmXa);
  },
  getDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.jcRSp6);
  },
  eligibleReportSubtypes: null,
  onApply: null,
  predicate: null
};
const items = [ReportNames.ReportSubType.SUB_CSAM, ReportNames.ReportSubType.SUB_LOLI, ReportNames.ReportSubType.SUB_NCP, ReportNames.ReportSubType.SUB_SEXUALLY_DEGRADING_CONTENT, ReportNames.ReportSubType.SUB_UNSOLICITED_PORN];
obj[3] = items;
obj[4] = function onApply() {
  const explicitContentSettingOrDefault = resolveExplicitContentSettingWithDefaults.getExplicitContentSettingOrDefault();
  const obj = {};
  ({ explicitContentGuilds, explicitContentFriendDm, explicitContentNonFriendDm } = explicitContentSettingOrDefault);
  if (explicitContentGuilds === create.ExplicitContentRedaction.SHOW) {
    obj.explicitContentGuilds = create.ExplicitContentRedaction.BLUR;
  }
  if (explicitContentFriendDm === create.ExplicitContentRedaction.SHOW) {
    obj.explicitContentFriendDm = create.ExplicitContentRedaction.BLUR;
  }
  if (explicitContentNonFriendDm === create.ExplicitContentRedaction.SHOW) {
    obj.explicitContentNonFriendDm = create.ExplicitContentRedaction.BLUR;
  }
  return obj.updateExplicitContentSetting(obj);
};
obj[5] = function predicate() {
  const explicitContentSettingOrDefault = resolveExplicitContentSettingWithDefaults.getExplicitContentSettingOrDefault();
  ({ explicitContentGuilds, explicitContentFriendDm, explicitContentNonFriendDm } = explicitContentSettingOrDefault);
  return explicitContentGuilds === create.ExplicitContentRedaction.SHOW || explicitContentFriendDm === create.ExplicitContentRedaction.SHOW || explicitContentNonFriendDm === create.ExplicitContentRedaction.SHOW;
};
const result = obj132.fileFinishedImporting("modules/in_app_reports/IarSettingsUpsellsConfigScFiltersSexualMedia.tsx");

export default obj;