// === Module 7831: items ===

// Module 7831 (items)
const obj = {
  getTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.vJOqMB);
  },
  getDisabledTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["B5ZvY+"]);
  },
  getDescription() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["43UEUh"]);
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
  const DmSpamFilterV2 = require(3928) /* explicitContentFromProto */.DmSpamFilterV2;
  return DmSpamFilterV2.updateSetting(require(1306) /* create */.DmSpamFilterV2.NON_FRIENDS);
};
obj[6] = function predicate() {
  const DmSpamFilterV2 = require(3928) /* explicitContentFromProto */.DmSpamFilterV2;
  const setting = DmSpamFilterV2.getSetting();
  return setting === require(1306) /* create */.DmSpamFilterV2.DISABLED;
};
const result = require("set").fileFinishedImporting("modules/in_app_reports/IarSettingsUpsellsConfigDmSpamFilter.tsx");

export default obj;