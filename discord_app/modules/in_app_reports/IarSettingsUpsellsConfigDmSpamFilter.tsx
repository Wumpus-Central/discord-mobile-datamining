// discord_app/modules/in_app_reports/IarSettingsUpsellsConfigDmSpamFilter.tsx
import set from "../../../_runtime/00002_set.js";
import set2 from "../../../discord_common/js/shared/shared-constants/ChannelTypes.tsx";
import getSystemLocale from "../../intl/index.native.tsx";
import create from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import explicitContentFromProto from "../user_settings/UserSettings.tsx";
import ReportNames from "MenuTypes.tsx";

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
  predicate: null,
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
