// discord_app/modules/user_settings/defs/native/SyncContactsSetting.tsx
import util from "../../../../intl/index.native.tsx";
import ContactSyncUtils from "../../../contact_sync/native/ContactSyncUtils.tsx";
import ContactSyncSettings from "../../../contact_sync/native/components/ContactSyncSettings.tsx";
import ConnectedAccountsStore from "../../../../stores/ConnectedAccountsStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
const PlatformTypes = fn(1074).PlatformTypes;
fn(11468);
let SettingBuilders = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.uSvEy7);
  },
  parent: fn(7975).MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
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
  },
};
SettingBuilders = SettingBuilders.createToggle(SettingBuilders);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/SyncContactsSetting.tsx");

export default SettingBuilders;
