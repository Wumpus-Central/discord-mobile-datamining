// === Module 14843: toggle ===

// Module 14843 (toggle)
import getSystemLocale from "getSystemLocale" /* 1114 */;
import _uploadContacts from "_uploadContacts" /* 12680 */;
import syncContacts from "syncContacts" /* 14844 */;
import closure_2 from "set" /* 5281 */;
import closure_3 from "mergeGuildAvatar" /* 1371 */;
import { PlatformTypes } from "ME" /* 1074 */;
import createToggle from "createToggle" /* 11468 */;

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