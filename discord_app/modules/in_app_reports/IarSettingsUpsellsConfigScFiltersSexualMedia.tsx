// discord_app/modules/in_app_reports/IarSettingsUpsellsConfigScFiltersSexualMedia.tsx
import intl2 from "../../intl/index.native.tsx";
import preloaded_user_settings from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import SensitiveMediaExplicitRedactionSettingsUtils from "../explicit_media_redaction/SensitiveMediaExplicitRedactionSettingsUtils.tsx";
import MenuTypes from "MenuTypes.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
    const tmp4 =
      explicitContentGuilds === preloaded_user_settings.ExplicitContentRedaction.SHOW ||
      explicitContentFriendDm === preloaded_user_settings.ExplicitContentRedaction.SHOW ||
      explicitContentNonFriendDm === preloaded_user_settings.ExplicitContentRedaction.SHOW;
    return tmp4;
  },
};
items = [
  MenuTypes.ReportSubType.SUB_CSAM,
  MenuTypes.ReportSubType.SUB_LOLI,
  MenuTypes.ReportSubType.SUB_NCP,
  MenuTypes.ReportSubType.SUB_SEXUALLY_DEGRADING_CONTENT,
  MenuTypes.ReportSubType.SUB_UNSOLICITED_PORN,
];
const result = size.fileFinishedImporting("modules/in_app_reports/IarSettingsUpsellsConfigScFiltersSexualMedia.tsx");

export default obj;
