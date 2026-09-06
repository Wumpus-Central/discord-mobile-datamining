// discord_app/modules/in_app_reports/IarSettingsUpsellsConfigScFiltersGraphicMedia.tsx
import util from "../../intl/index.native.tsx";
import preloaded_user_settings from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import SensitiveMediaGoreRedactionSettingsUtils from "../explicit_media_redaction/SensitiveMediaGoreRedactionSettingsUtils.tsx";
import MenuTypes from "MenuTypes.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
  predicate: null,
};
const items = [MenuTypes.ReportSubType.SUB_GORE, MenuTypes.ReportSubType.SUB_GLORIFYING_VIOLENCE];
obj.eligibleReportSubtypes = items;
obj.onApply = function onApply() {
  const goreContentSettingOrDefault = SensitiveMediaGoreRedactionSettingsUtils.getGoreContentSettingOrDefault();
  const obj = {};
  ({ goreContentGuilds, goreContentFriendDm, goreContentNonFriendDm } = goreContentSettingOrDefault);
  if (goreContentGuilds === preloaded_user_settings.ExplicitContentRedaction.SHOW) {
    obj.goreContentGuilds = preloaded_user_settings.ExplicitContentRedaction.BLUR;
  }
  if (goreContentFriendDm === preloaded_user_settings.ExplicitContentRedaction.SHOW) {
    obj.goreContentFriendDm = preloaded_user_settings.ExplicitContentRedaction.BLUR;
  }
  if (goreContentNonFriendDm === preloaded_user_settings.ExplicitContentRedaction.SHOW) {
    obj.goreContentNonFriendDm = preloaded_user_settings.ExplicitContentRedaction.BLUR;
  }
  return obj.updateGoreContentSetting(obj);
};
obj.predicate = function predicate() {
  const goreContentSettingOrDefault = SensitiveMediaGoreRedactionSettingsUtils.getGoreContentSettingOrDefault();
  ({ goreContentGuilds, goreContentFriendDm, goreContentNonFriendDm } = goreContentSettingOrDefault);
  return (
    goreContentGuilds === preloaded_user_settings.ExplicitContentRedaction.SHOW ||
    goreContentFriendDm === preloaded_user_settings.ExplicitContentRedaction.SHOW ||
    goreContentNonFriendDm === preloaded_user_settings.ExplicitContentRedaction.SHOW
  );
};
const result = size.fileFinishedImporting("modules/in_app_reports/IarSettingsUpsellsConfigScFiltersGraphicMedia.tsx");

export default obj;
