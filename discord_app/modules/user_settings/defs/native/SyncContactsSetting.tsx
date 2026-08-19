// === Module 14200: toggle ===

// Module 14200 (toggle)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import _uploadContacts from "_uploadContacts" /* 11853 */;
import syncContacts from "syncContacts" /* 14201 */;
import set from "set" /* 5221 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import { PlatformTypes } from "ME" /* 676 */;
import "createToggle";

require = fn;
let createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.uSvEy7);
  },
  parent: require("MobileUserSettings").MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: function useContactSyncSettingValue() {
    const contactSyncAccount = _uploadContacts.useContactSyncAccount();
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
const result = require("obj132").fileFinishedImporting("modules/user_settings/defs/native/SyncContactsSetting.tsx");

export default createToggle;