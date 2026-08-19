// discord_app/modules/in_app_reports/IarSettingsUpsellsConfigScFiltersGraphicMedia.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import getSystemLocale from "../../intl/index.native.tsx";
import create from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import resolveGoreSettingWithDefaults from "../explicit_media_redaction/SensitiveMediaGoreRedactionSettingsUtils.tsx";
import ReportNames from "MenuTypes.tsx";

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
  const goreContentSettingOrDefault = resolveGoreSettingWithDefaults.getGoreContentSettingOrDefault();
  const obj = {};
  ({ goreContentGuilds, goreContentFriendDm, goreContentNonFriendDm } = goreContentSettingOrDefault);
  if (goreContentGuilds === create.ExplicitContentRedaction.SHOW) {
    obj.goreContentGuilds = create.ExplicitContentRedaction.BLUR;
  }
  if (goreContentFriendDm === create.ExplicitContentRedaction.SHOW) {
    obj.goreContentFriendDm = create.ExplicitContentRedaction.BLUR;
  }
  if (goreContentNonFriendDm === create.ExplicitContentRedaction.SHOW) {
    obj.goreContentNonFriendDm = create.ExplicitContentRedaction.BLUR;
  }
  return obj.updateGoreContentSetting(obj);
};
obj[5] = function predicate() {
  const goreContentSettingOrDefault = resolveGoreSettingWithDefaults.getGoreContentSettingOrDefault();
  ({ goreContentGuilds, goreContentFriendDm, goreContentNonFriendDm } = goreContentSettingOrDefault);
  return goreContentGuilds === create.ExplicitContentRedaction.SHOW || goreContentFriendDm === create.ExplicitContentRedaction.SHOW || goreContentNonFriendDm === create.ExplicitContentRedaction.SHOW;
};
const result = obj132.fileFinishedImporting("modules/in_app_reports/IarSettingsUpsellsConfigScFiltersGraphicMedia.tsx");

export default obj;