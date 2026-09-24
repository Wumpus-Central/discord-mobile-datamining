// === Module 9001: IarSettingsUpsellsConfigScFiltersGraphicMedia ===

// Module 9001 (IarSettingsUpsellsConfigScFiltersGraphicMedia)
import util from "util" /* 1115 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1186 */;
import SensitiveMediaGoreRedactionSettingsUtils from "SensitiveMediaGoreRedactionSettingsUtils" /* 7631 */;
import MenuTypes from "MenuTypes" /* 8988 */;
import size from "module_2" /* 2 */;

let obj = {
  getTitle() {
    const intl = util.intl;
    return intl.string(util.t.RVX1zT);
  },
  getDisabledTitle() {
    const intl = util.intl;
    return intl.string(util.t.SYkEBi);
  },
  getDescription() {
    const intl = util.intl;
    return intl.string(util.t.aqlmp8);
  },
  eligibleReportSubtypes: null,
  onApply: null,
  predicate: null
};
const items = [MenuTypes.ReportSubType.SUB_GORE, MenuTypes.ReportSubType.SUB_GLORIFYING_VIOLENCE];
obj.eligibleReportSubtypes = items;
obj.onApply = function onApply() {
  const obj = SensitiveMediaGoreRedactionSettingsUtils;
  const goreContentSettingOrDefault = SensitiveMediaGoreRedactionSettingsUtils.getGoreContentSettingOrDefault();
  const obj3 = {};
  ({ goreContentGuilds, goreContentFriendDm, goreContentNonFriendDm } = goreContentSettingOrDefault);
  if (goreContentGuilds === preloaded_user_settings.ExplicitContentRedaction.SHOW) {
    obj3.goreContentGuilds = preloaded_user_settings.ExplicitContentRedaction.BLUR;
  }
  if (goreContentFriendDm === preloaded_user_settings.ExplicitContentRedaction.SHOW) {
    obj3.goreContentFriendDm = preloaded_user_settings.ExplicitContentRedaction.BLUR;
  }
  if (goreContentNonFriendDm === preloaded_user_settings.ExplicitContentRedaction.SHOW) {
    obj3.goreContentNonFriendDm = preloaded_user_settings.ExplicitContentRedaction.BLUR;
  }
  return obj.updateGoreContentSetting(obj3);
};
obj.predicate = function predicate() {
  const goreContentSettingOrDefault = SensitiveMediaGoreRedactionSettingsUtils.getGoreContentSettingOrDefault();
  ({ goreContentGuilds, goreContentFriendDm, goreContentNonFriendDm } = goreContentSettingOrDefault);
  return goreContentGuilds === preloaded_user_settings.ExplicitContentRedaction.SHOW || goreContentFriendDm === preloaded_user_settings.ExplicitContentRedaction.SHOW || goreContentNonFriendDm === preloaded_user_settings.ExplicitContentRedaction.SHOW;
};
const result = size.fileFinishedImporting("modules/in_app_reports/IarSettingsUpsellsConfigScFiltersGraphicMedia.tsx");

export default obj;