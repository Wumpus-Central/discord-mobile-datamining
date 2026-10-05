// === Module 8293: IarSettingsUpsellsConfigScFiltersGraphicMedia ===

// Module 8293 (IarSettingsUpsellsConfigScFiltersGraphicMedia)
import intl2 from "intl" /* 1126 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1197 */;
import SensitiveMediaGoreRedactionSettingsUtils from "SensitiveMediaGoreRedactionSettingsUtils" /* 6804 */;
import MenuTypes from "MenuTypes" /* 8280 */;
import size from "module_2" /* 2 */;

let items;
let obj = {
  getTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.RVX1zT);
  },
  getDisabledTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.SYkEBi);
  },
  getDescription() {
    const intl = intl2.intl;
    return intl.string(intl2.t.aqlmp8);
  },
  eligibleReportSubtypes: items,
  onApply() {
    let goreContentFriendDm;
    let goreContentGuilds;
    let goreContentNonFriendDm;
    const updateGoreContentSetting = SensitiveMediaGoreRedactionSettingsUtils.updateGoreContentSetting;
    SensitiveMediaGoreRedactionSettingsUtils;
    const obj = SensitiveMediaGoreRedactionSettingsUtils;
    const goreContentSettingOrDefault = obj.getGoreContentSettingOrDefault();
    const obj2 = {};
    ({ goreContentGuilds, goreContentFriendDm, goreContentNonFriendDm } = goreContentSettingOrDefault);
    if (goreContentGuilds === preloaded_user_settings.ExplicitContentRedaction.SHOW) {
      obj2.goreContentGuilds = preloaded_user_settings.ExplicitContentRedaction.BLUR;
    }
    if (goreContentFriendDm === preloaded_user_settings.ExplicitContentRedaction.SHOW) {
      obj2.goreContentFriendDm = preloaded_user_settings.ExplicitContentRedaction.BLUR;
    }
    if (goreContentNonFriendDm === preloaded_user_settings.ExplicitContentRedaction.SHOW) {
      obj2.goreContentNonFriendDm = preloaded_user_settings.ExplicitContentRedaction.BLUR;
    }
    return updateGoreContentSetting(obj2);
  },
  predicate() {
    let goreContentFriendDm;
    let goreContentGuilds;
    let goreContentNonFriendDm;
    const obj = SensitiveMediaGoreRedactionSettingsUtils;
    const goreContentSettingOrDefault = obj.getGoreContentSettingOrDefault();
    ({ goreContentGuilds, goreContentFriendDm, goreContentNonFriendDm } = goreContentSettingOrDefault);
    const tmp4 = goreContentGuilds === preloaded_user_settings.ExplicitContentRedaction.SHOW || goreContentFriendDm === preloaded_user_settings.ExplicitContentRedaction.SHOW || goreContentNonFriendDm === preloaded_user_settings.ExplicitContentRedaction.SHOW;
    return tmp4;
  }
};
items = [MenuTypes.ReportSubType.SUB_GORE, MenuTypes.ReportSubType.SUB_GLORIFYING_VIOLENCE];
const result = size.fileFinishedImporting("modules/in_app_reports/IarSettingsUpsellsConfigScFiltersGraphicMedia.tsx");

export default obj;