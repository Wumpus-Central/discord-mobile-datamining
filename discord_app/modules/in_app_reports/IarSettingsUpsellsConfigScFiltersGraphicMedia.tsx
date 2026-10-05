// discord_app/modules/in_app_reports/IarSettingsUpsellsConfigScFiltersGraphicMedia.tsx
import intl2 from "../../intl/index.native.tsx";
import preloaded_user_settings from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import SensitiveMediaGoreRedactionSettingsUtils from "../explicit_media_redaction/SensitiveMediaGoreRedactionSettingsUtils.tsx";
import MenuTypes from "MenuTypes.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
    const tmp4 =
      goreContentGuilds === preloaded_user_settings.ExplicitContentRedaction.SHOW ||
      goreContentFriendDm === preloaded_user_settings.ExplicitContentRedaction.SHOW ||
      goreContentNonFriendDm === preloaded_user_settings.ExplicitContentRedaction.SHOW;
    return tmp4;
  },
};
items = [MenuTypes.ReportSubType.SUB_GORE, MenuTypes.ReportSubType.SUB_GLORIFYING_VIOLENCE];
const result = size.fileFinishedImporting("modules/in_app_reports/IarSettingsUpsellsConfigScFiltersGraphicMedia.tsx");

export default obj;
