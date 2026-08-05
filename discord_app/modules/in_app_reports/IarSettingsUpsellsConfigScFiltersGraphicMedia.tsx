// discord_app/modules/in_app_reports/IarSettingsUpsellsConfigScFiltersGraphicMedia.tsx
import { create } from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import { getSystemLocale } from "../../intl/index.native.tsx";
import { resolveGoreSettingWithDefaults } from "../explicit_media_redaction/SensitiveMediaGoreRedactionSettingsUtils.tsx";
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
const items = [require("ReportNames").ReportSubType.SUB_GORE, require("ReportNames").ReportSubType.SUB_GLORIFYING_VIOLENCE];
obj[3] = items;
obj[4] = function onApply() {
  let goreContentFriendDm;
  let goreContentGuilds;
  let goreContentNonFriendDm;
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
  let goreContentFriendDm;
  let goreContentGuilds;
  let goreContentNonFriendDm;
  const goreContentSettingOrDefault = resolveGoreSettingWithDefaults.getGoreContentSettingOrDefault();
  ({ goreContentGuilds, goreContentFriendDm, goreContentNonFriendDm } = goreContentSettingOrDefault);
  const obj = resolveGoreSettingWithDefaults;
  return goreContentGuilds === create.ExplicitContentRedaction.SHOW || goreContentFriendDm === create.ExplicitContentRedaction.SHOW || goreContentNonFriendDm === create.ExplicitContentRedaction.SHOW;
};
const result = require("getSystemLocale").fileFinishedImporting("modules/in_app_reports/IarSettingsUpsellsConfigScFiltersGraphicMedia.tsx");

export default obj;