// discord_app/modules/user_settings/defs/native/SyncContactsSetting.tsx
import getSystemLocale from "../../../../intl/index.native.tsx";
import _uploadContacts from "../../../contact_sync/native/ContactSyncUtils.tsx";
import syncContacts from "../../../contact_sync/native/components/ContactSyncSettings.tsx";
import closure_2 from "../../../../stores/ConnectedAccountsStore.tsx";
import closure_3 from "../../../../stores/UserStore.tsx";
import { PlatformTypes } from "../../../../Constants.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";

require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.uSvEy7);
  },
  parent: require("MobileUserSettings").MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: function useContactSyncSettingValue() {
    const contactSyncAccount = _uploadContacts.useContactSyncAccount();
    const obj = _uploadContacts;
    return _uploadContacts.isContactSyncEnabled(contactSyncAccount);
  },
  onValueChange: function onContactSyncSettingValueChange(arg0) {
    localAccount = localAccount.getLocalAccount(PlatformTypes.CONTACTS);
    currentUser = currentUser.getCurrentUser();
    let phone;
    if (currentUser != null) {
      phone = currentUser.phone;
    }
    syncContacts.handleSyncContacts(localAccount, phone, arg0);
  }
};
createToggle = createToggle.createToggle(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/SyncContactsSetting.tsx");

export default createToggle;