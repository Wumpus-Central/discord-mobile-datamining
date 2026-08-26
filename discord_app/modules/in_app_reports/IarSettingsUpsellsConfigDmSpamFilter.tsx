// === Module 8251: items ===

// Module 8251 (items)
import set from "set" /* 2 */;
import set2 from "set" /* 692 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import create from "create" /* 1306 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4134 */;
import ReportNames from "ReportNames" /* 8239 */;

const obj = {
  getTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.vJOqMB);
  },
  getDisabledTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["B5ZvY+"]);
  },
  getDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["43UEUh"]);
  },
  eligibleReportSubtypes: null,
  eligibleChannelTypes: null,
  onApply: null,
  predicate: null
};
const items = [ReportNames.ReportSubType.SUB_SPAM];
obj[3] = items;
const items1 = [set2.ChannelTypes.DM, set2.ChannelTypes.GROUP_DM];
obj[4] = items1;
obj[5] = function onApply() {
  const DmSpamFilterV2 = explicitContentFromProto.DmSpamFilterV2;
  return DmSpamFilterV2.updateSetting(create.DmSpamFilterV2.NON_FRIENDS);
};
obj[6] = function predicate() {
  const DmSpamFilterV2 = explicitContentFromProto.DmSpamFilterV2;
  const setting = DmSpamFilterV2.getSetting();
  return setting === create.DmSpamFilterV2.DISABLED;
};
const result = set.fileFinishedImporting("modules/in_app_reports/IarSettingsUpsellsConfigDmSpamFilter.tsx");

export default obj;