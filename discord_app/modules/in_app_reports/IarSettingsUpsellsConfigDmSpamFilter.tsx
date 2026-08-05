// discord_app/modules/in_app_reports/IarSettingsUpsellsConfigDmSpamFilter.tsx
const obj = {
  getTitle() {
    const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t.vJOqMB);
  },
  getDisabledTitle() {
    const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t["B5ZvY+"]);
  },
  getDescription() {
    const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t["43UEUh"]);
  },
  eligibleReportSubtypes: null,
  eligibleChannelTypes: null,
  onApply: null,
  predicate: null
};
const items = [require("ReportNames").ReportSubType.SUB_SPAM];
obj[3] = items;
const items1 = [require("set").ChannelTypes.DM, require("set").ChannelTypes.GROUP_DM];
obj[4] = items1;
obj[5] = function onApply() {
  const DmSpamFilterV2 = require("../user_settings/UserSettings.tsx") /* explicitContentFromProto */.DmSpamFilterV2;
  return DmSpamFilterV2.updateSetting(require("../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx") /* create */.DmSpamFilterV2.NON_FRIENDS);
};
obj[6] = function predicate() {
  const DmSpamFilterV2 = require("../user_settings/UserSettings.tsx") /* explicitContentFromProto */.DmSpamFilterV2;
  const setting = DmSpamFilterV2.getSetting();
  return setting === require("../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx") /* create */.DmSpamFilterV2.DISABLED;
};
const result = require("set").fileFinishedImporting("modules/in_app_reports/IarSettingsUpsellsConfigDmSpamFilter.tsx");

export default obj;