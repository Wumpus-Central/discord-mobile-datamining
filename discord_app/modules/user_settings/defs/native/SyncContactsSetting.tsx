// === Module 14967: SyncContactsSetting ===

// Module 14967 (SyncContactsSetting)
import util from "util" /* 1115 */;
import ContactSyncUtils from "ContactSyncUtils" /* 12831 */;
import ContactSyncSettings from "ContactSyncSettings" /* 14968 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 5369 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const PlatformTypes = fn(1074).PlatformTypes;
const SettingBuilders = fn(11622);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.uSvEy7);
  },
  parent: fn(8111).MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
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