import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { syncContacts } from "../../../contact_sync/native/components/ContactSyncSettings.tsx";
import { _uploadContacts } from "../../../contact_sync/native/ContactSyncUtils.tsx";
// discord_app/modules/user_settings/defs/native/SyncContactsSetting.tsx
import set from "set";
import mergeGuildAvatar from "mergeGuildAvatar";
import { PlatformTypes } from "ME";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t.uSvEy7);
  },
  parent: require("MobileSetting").MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  useValue: function useContactSyncSettingValue() {
    const contactSyncAccount = _uploadContacts /* _uploadContacts */.useContactSyncAccount();
    const obj = _uploadContacts /* _uploadContacts */;
    return _uploadContacts /* _uploadContacts */.isContactSyncEnabled(contactSyncAccount);
  },
  onValueChange: function onContactSyncSettingValueChange(arg0) {
    localAccount = localAccount.getLocalAccount(PlatformTypes.CONTACTS);
    currentUser = currentUser.getCurrentUser();
    let phone;
    if (currentUser != null) {
      phone = currentUser.phone;
    }
    syncContacts /* syncContacts */.handleSyncContacts(localAccount, phone, arg0);
  }
};
createToggle = createToggle.createToggle(createToggle);
const result = require("MobileSetting").fileFinishedImporting("modules/user_settings/defs/native/SyncContactsSetting.tsx");

export default createToggle;