// discord_app/modules/in_app_reports/IarSettingsUpsellsConfigScFiltersGraphicMedia.tsx
let obj = {
  getTitle() {
    const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t.RVX1zT);
  },
  getDisabledTitle() {
    const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t.SYkEBi);
  },
  getDescription() {
    const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t.aqlmp8);
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
  let obj = require("../explicit_media_redaction/SensitiveMediaGoreRedactionSettingsUtils.tsx") /* resolveGoreSettingWithDefaults */;
  const goreContentSettingOrDefault = require("../explicit_media_redaction/SensitiveMediaGoreRedactionSettingsUtils.tsx") /* resolveGoreSettingWithDefaults */.getGoreContentSettingOrDefault();
  obj = {};
  ({ goreContentGuilds, goreContentFriendDm, goreContentNonFriendDm } = goreContentSettingOrDefault);
  if (goreContentGuilds === require("../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx") /* create */.ExplicitContentRedaction.SHOW) {
    obj.goreContentGuilds = tmp(1306).ExplicitContentRedaction.BLUR;
  }
  if (goreContentFriendDm === require("../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx") /* create */.ExplicitContentRedaction.SHOW) {
    obj.goreContentFriendDm = tmp(1306).ExplicitContentRedaction.BLUR;
  }
  if (goreContentNonFriendDm === require("../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx") /* create */.ExplicitContentRedaction.SHOW) {
    obj.goreContentNonFriendDm = tmp(1306).ExplicitContentRedaction.BLUR;
  }
  return obj.updateGoreContentSetting(obj);
};
obj[5] = function predicate() {
  let goreContentFriendDm;
  let goreContentGuilds;
  let goreContentNonFriendDm;
  const goreContentSettingOrDefault = require("../explicit_media_redaction/SensitiveMediaGoreRedactionSettingsUtils.tsx") /* resolveGoreSettingWithDefaults */.getGoreContentSettingOrDefault();
  ({ goreContentGuilds, goreContentFriendDm, goreContentNonFriendDm } = goreContentSettingOrDefault);
  const obj = require("../explicit_media_redaction/SensitiveMediaGoreRedactionSettingsUtils.tsx") /* resolveGoreSettingWithDefaults */;
  return goreContentGuilds === require("../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx") /* create */.ExplicitContentRedaction.SHOW || goreContentFriendDm === require("../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx") /* create */.ExplicitContentRedaction.SHOW || goreContentNonFriendDm === require("../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx") /* create */.ExplicitContentRedaction.SHOW;
};
const result = require("getSystemLocale").fileFinishedImporting("modules/in_app_reports/IarSettingsUpsellsConfigScFiltersGraphicMedia.tsx");

export default obj;