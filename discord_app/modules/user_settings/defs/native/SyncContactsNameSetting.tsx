// === Module 14203: pressable ===

// Module 14203 (pressable)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2007 */;
import _modDef5260 from "module_5260" /* 5260 */;
import MobileUserSettings from "MobileUserSettings" /* 8198 */;
import _uploadContacts from "_uploadContacts" /* 11853 */;
import createToggle from "createToggle" /* 10669 */;

const AnalyticEvents = ME.AnalyticEvents;
const pressable = createToggle.createPressable({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.nAsWKy);
  },
  parent: MobileUserSettings.MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  onPress: function onContactSyncNamePress() {
    expandEventPropertiesDefault.track(AnalyticEvents.OPEN_MODAL, { type: "Change Name", location: { page: "User Settings" } });
    _modDef5260.pushLazy(asyncRequireImpl(14202, dependencyMap.paths), "Contact Sync Name Update Modal");
  },
  withArrow: true,
  usePredicate: function useHasContactSyncAccount() {
    return null != _uploadContacts.useContactSyncAccount();
  }
});
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/SyncContactsNameSetting.tsx");

export default pressable;