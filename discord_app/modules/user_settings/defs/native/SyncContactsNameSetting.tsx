// === Module 14650: SyncContactsNameSetting ===

// Module 14650 (SyncContactsNameSetting)
import Constants from "Constants" /* 1085 */;
import util from "util" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1987 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5093 */;
import SettingsConstants from "SettingsConstants" /* 7634 */;
import ContactSyncUtils from "ContactSyncUtils" /* 12329 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11129 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const pressable = SettingBuilders.createPressable({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.nAsWKy);
  },
  parent: SettingsConstants.MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  onPress: function onContactSyncNamePress() {
    AnalyticsUtilsDefault.track(AnalyticEvents.OPEN_MODAL, { type: "Change Name", location: { page: "User Settings" } });
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(14649, dependencyMap.paths), "Contact Sync Name Update Modal");
  },
  withArrow: true,
  usePredicate: () => null != ContactSyncUtils.useContactSyncAccount()
});
const result1 = size.fileFinishedImporting("modules/user_settings/defs/native/SyncContactsNameSetting.tsx");

export default pressable;