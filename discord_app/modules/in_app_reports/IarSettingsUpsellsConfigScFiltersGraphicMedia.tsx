import { create } from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import { getSystemLocale } from "../../intl/index.native.tsx";
import { resolveGoreSettingWithDefaults } from "../explicit_media_redaction/SensitiveMediaGoreRedactionSettingsUtils.tsx";
// discord_app/modules/in_app_reports/IarSettingsUpsellsConfigScFiltersGraphicMedia.tsx
let obj = {
  getTitle() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t.RVX1zT);
  },
  getDisabledTitle() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t.SYkEBi);
  },
  getDescription() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t.aqlmp8);
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
  let obj = resolveGoreSettingWithDefaults /* resolveGoreSettingWithDefaults */;
  const goreContentSettingOrDefault = resolveGoreSettingWithDefaults /* resolveGoreSettingWithDefaults */.getGoreContentSettingOrDefault();
  obj = {};
  ({ goreContentGuilds, goreContentFriendDm, goreContentNonFriendDm } = goreContentSettingOrDefault);
  if (goreContentGuilds === create /* create */.ExplicitContentRedaction.SHOW) {
    obj.goreContentGuilds = tmp(1306).ExplicitContentRedaction.BLUR;
  }
  if (goreContentFriendDm === create /* create */.ExplicitContentRedaction.SHOW) {
    obj.goreContentFriendDm = tmp(1306).ExplicitContentRedaction.BLUR;
  }
  if (goreContentNonFriendDm === create /* create */.ExplicitContentRedaction.SHOW) {
    obj.goreContentNonFriendDm = tmp(1306).ExplicitContentRedaction.BLUR;
  }
  return obj.updateGoreContentSetting(obj);
};
obj[5] = function predicate() {
  let goreContentFriendDm;
  let goreContentGuilds;
  let goreContentNonFriendDm;
  const goreContentSettingOrDefault = resolveGoreSettingWithDefaults /* resolveGoreSettingWithDefaults */.getGoreContentSettingOrDefault();
  ({ goreContentGuilds, goreContentFriendDm, goreContentNonFriendDm } = goreContentSettingOrDefault);
  const obj = resolveGoreSettingWithDefaults /* resolveGoreSettingWithDefaults */;
  return goreContentGuilds === create /* create */.ExplicitContentRedaction.SHOW || goreContentFriendDm === create /* create */.ExplicitContentRedaction.SHOW || goreContentNonFriendDm === create /* create */.ExplicitContentRedaction.SHOW;
};
const result = require("getSystemLocale").fileFinishedImporting("modules/in_app_reports/IarSettingsUpsellsConfigScFiltersGraphicMedia.tsx");

export default obj;