// discord_app/modules/in_app_reports/IarSettingsUpsellsConfigDmSpamFilter.tsx
import ChannelTypes from "../../../discord_common/js/shared/shared-constants/ChannelTypes.tsx";
import util from "../../intl/index.native.tsx";
import preloaded_user_settings from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import UserSettings from "../user_settings/UserSettings.tsx";
import MenuTypes from "MenuTypes.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
  predicate: null,
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
