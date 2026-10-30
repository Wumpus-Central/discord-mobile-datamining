// === Module 16692: SyncContactsSetting ===

// Module 16692 (SyncContactsSetting)
import util from "util" /* 1114 */;
import ContactSyncUtils from "ContactSyncUtils" /* 14198 */;
import ContactSyncSettings from "ContactSyncSettings" /* 16693 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 6566 */;
import UserStore from "UserStore" /* 1384 */;

require = fn;
const PlatformTypes = fn(1072).PlatformTypes;
const SettingBuilders = fn(11505);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.uSvEy7);
  },
  parent: fn(8424).MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: function useContactSyncSettingValue() {
    const contactSyncAccount = ContactSyncUtils.useContactSyncAccount();
    return ContactSyncUtils.isContactSyncEnabled(contactSyncAccount);
  },
  onValueChange: function onContactSyncSettingValueChange(arg0) {
    const localAccount = ConnectedAccountsStore.getLocalAccount(PlatformTypes.CONTACTS);
    const currentUser = UserStore.getCurrentUser();
    let phone;
    if (currentUser != null) {
      phone = currentUser.phone;
    }
    ContactSyncSettings.handleSyncContacts(localAccount, phone, arg0);
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/SyncContactsSetting.tsx");

export default toggle;