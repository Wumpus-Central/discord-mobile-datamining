// === Module 8151: items ===

// Module 8151 (items)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import create from "create" /* 1306 */;
import resolveGoreSettingWithDefaults from "resolveGoreSettingWithDefaults" /* 5025 */;
import ReportNames from "ReportNames" /* 8137 */;

let obj = {
  getTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.RVX1zT);
  },
  getDisabledTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.SYkEBi);
  },
  getDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.aqlmp8);
  },
  eligibleReportSubtypes: null,
  onApply: null,
  predicate: null
};
const items = [ReportNames.ReportSubType.SUB_GORE, ReportNames.ReportSubType.SUB_GLORIFYING_VIOLENCE];
obj[3] = items;
obj[4] = function onApply() {
  let obj = resolveGoreSettingWithDefaults;
  const goreContentSettingOrDefault = resolveGoreSettingWithDefaults.getGoreContentSettingOrDefault();
  obj = {};
  ({ goreContentGuilds, goreContentFriendDm, goreContentNonFriendDm } = goreContentSettingOrDefault);
  if (goreContentGuilds === create.ExplicitContentRedaction.SHOW) {
    obj.goreContentGuilds = tmp(1306).ExplicitContentRedaction.BLUR;
  }
  if (goreContentFriendDm === create.ExplicitContentRedaction.SHOW) {
    obj.goreContentFriendDm = tmp(1306).ExplicitContentRedaction.BLUR;
  }
  if (goreContentNonFriendDm === create.ExplicitContentRedaction.SHOW) {
    obj.goreContentNonFriendDm = tmp(1306).ExplicitContentRedaction.BLUR;
  }
  return obj.updateGoreContentSetting(obj);
};
obj[5] = function predicate() {
  const goreContentSettingOrDefault = resolveGoreSettingWithDefaults.getGoreContentSettingOrDefault();
  ({ goreContentGuilds, goreContentFriendDm, goreContentNonFriendDm } = goreContentSettingOrDefault);
  const obj = resolveGoreSettingWithDefaults;
  return goreContentGuilds === create.ExplicitContentRedaction.SHOW || goreContentFriendDm === create.ExplicitContentRedaction.SHOW || goreContentNonFriendDm === create.ExplicitContentRedaction.SHOW;
};
const result = set.fileFinishedImporting("modules/in_app_reports/IarSettingsUpsellsConfigScFiltersGraphicMedia.tsx");

export default obj;