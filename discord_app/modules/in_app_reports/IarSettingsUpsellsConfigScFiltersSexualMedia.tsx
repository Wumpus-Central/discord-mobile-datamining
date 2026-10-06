// === Module 8325: IarSettingsUpsellsConfigScFiltersSexualMedia ===

// Module 8325 (IarSettingsUpsellsConfigScFiltersSexualMedia)
import intl2 from "intl" /* 1126 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1197 */;
import SensitiveMediaExplicitRedactionSettingsUtils from "SensitiveMediaExplicitRedactionSettingsUtils" /* 6811 */;
import MenuTypes from "MenuTypes" /* 8313 */;
import size from "module_2" /* 2 */;

let items;
let obj = {
  getTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["Gtck/t"]);
  },
  getDisabledTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.E6UmXa);
  },
  getDescription() {
    const intl = intl2.intl;
    return intl.string(intl2.t.jcRSp6);
  },
  eligibleReportSubtypes: items,
  onApply() {
    let explicitContentFriendDm;
    let explicitContentGuilds;
    let explicitContentNonFriendDm;
    const updateExplicitContentSetting = SensitiveMediaExplicitRedactionSettingsUtils.updateExplicitContentSetting;
    SensitiveMediaExplicitRedactionSettingsUtils;
    const obj = SensitiveMediaExplicitRedactionSettingsUtils;
    const explicitContentSettingOrDefault = obj.getExplicitContentSettingOrDefault();
    const obj2 = {};
    ({ explicitContentGuilds, explicitContentFriendDm, explicitContentNonFriendDm } = explicitContentSettingOrDefault);
    if (explicitContentGuilds === preloaded_user_settings.ExplicitContentRedaction.SHOW) {
      obj2.explicitContentGuilds = preloaded_user_settings.ExplicitContentRedaction.BLUR;
    }
    if (explicitContentFriendDm === preloaded_user_settings.ExplicitContentRedaction.SHOW) {
      obj2.explicitContentFriendDm = preloaded_user_settings.ExplicitContentRedaction.BLUR;
    }
    if (explicitContentNonFriendDm === preloaded_user_settings.ExplicitContentRedaction.SHOW) {
      obj2.explicitContentNonFriendDm = preloaded_user_settings.ExplicitContentRedaction.BLUR;
    }
    return updateExplicitContentSetting(obj2);
  },
  predicate() {
    let explicitContentFriendDm;
    let explicitContentGuilds;
    let explicitContentNonFriendDm;
    const obj = SensitiveMediaExplicitRedactionSettingsUtils;
    const explicitContentSettingOrDefault = obj.getExplicitContentSettingOrDefault();
    ({ explicitContentGuilds, explicitContentFriendDm, explicitContentNonFriendDm } = explicitContentSettingOrDefault);
    const tmp4 = explicitContentGuilds === preloaded_user_settings.ExplicitContentRedaction.SHOW || explicitContentFriendDm === preloaded_user_settings.ExplicitContentRedaction.SHOW || explicitContentNonFriendDm === preloaded_user_settings.ExplicitContentRedaction.SHOW;
    return tmp4;
  }
};
items = [MenuTypes.ReportSubType.SUB_CSAM, MenuTypes.ReportSubType.SUB_LOLI, MenuTypes.ReportSubType.SUB_NCP, MenuTypes.ReportSubType.SUB_SEXUALLY_DEGRADING_CONTENT, MenuTypes.ReportSubType.SUB_UNSOLICITED_PORN];
const result = size.fileFinishedImporting("modules/in_app_reports/IarSettingsUpsellsConfigScFiltersSexualMedia.tsx");

export default obj;