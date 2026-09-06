// === Module 8641: IarSettingsUpsellsConfigDmSpamFilter ===

// Module 8641 (IarSettingsUpsellsConfigDmSpamFilter)
import ChannelTypes from "ChannelTypes" /* 1094 */;
import util from "util" /* 1114 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1187 */;
import UserSettings from "UserSettings" /* 1935 */;
import MenuTypes from "MenuTypes" /* 8630 */;
import size from "module_2" /* 2 */;

const obj = {
  getTitle() {
    const intl = util.intl;
    return intl.string(util.t.vJOqMB);
  },
  getDisabledTitle() {
    const intl = util.intl;
    return intl.string(util.t["B5ZvY+"]);
  },
  getDescription() {
    const intl = util.intl;
    return intl.string(util.t["43UEUh"]);
  },
  eligibleReportSubtypes: null,
  eligibleChannelTypes: null,
  onApply: null,
  predicate: null
};
const items = [MenuTypes.ReportSubType.SUB_SPAM];
obj.eligibleReportSubtypes = items;
const items1 = [ChannelTypes.ChannelTypes.DM, ChannelTypes.ChannelTypes.GROUP_DM];
obj.eligibleChannelTypes = items1;
obj.onApply = function onApply() {
  const DmSpamFilterV2 = UserSettings.DmSpamFilterV2;
  return DmSpamFilterV2.updateSetting(preloaded_user_settings.DmSpamFilterV2.NON_FRIENDS);
};
obj.predicate = function predicate() {
  const DmSpamFilterV2 = UserSettings.DmSpamFilterV2;
  const setting = DmSpamFilterV2.getSetting();
  return setting === preloaded_user_settings.DmSpamFilterV2.DISABLED;
};
const result = size.fileFinishedImporting("modules/in_app_reports/IarSettingsUpsellsConfigDmSpamFilter.tsx");

export default obj;