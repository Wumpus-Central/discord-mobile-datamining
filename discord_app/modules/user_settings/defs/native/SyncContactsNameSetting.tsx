// === Module 16302: SyncContactsNameSetting ===

// Module 16302 (SyncContactsNameSetting)
import Constants from "Constants" /* 1071 */;
import util from "util" /* 1112 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1255 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2119 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6099 */;
import SettingsConstants from "SettingsConstants" /* 9513 */;
import ContactSyncUtils from "ContactSyncUtils" /* 13622 */;
import SettingBuilders from "SettingBuilders" /* 11914 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const pressable = SettingBuilders.createPressable({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.nAsWKy);
  },
  parent: SettingsConstants.MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  onPress: function onContactSyncNamePress() {
    AnalyticsUtilsDefault.track(AnalyticEvents.OPEN_MODAL, { type: "Change Name", location: { page: "User Settings" } });
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(16301, dependencyMap.paths), "Contact Sync Name Update Modal");
  },
  withArrow: true,
  usePredicate: function useHasContactSyncAccount() {
    return null != ContactSyncUtils.useContactSyncAccount();
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/SyncContactsNameSetting.tsx");

export default pressable;