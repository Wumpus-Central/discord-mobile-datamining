// === Module 16173: SyncContactsSetting ===

// Module 16173 (SyncContactsSetting)
import c from "c" /* 576 */;
import util from "util" /* 1125 */;
import ContactSyncUtils from "ContactSyncUtils" /* 13599 */;
import ContactSyncSettings from "ContactSyncSettings" /* 16174 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 6501 */;
import UserStore from "UserStore" /* 1389 */;

require = fn;
const PlatformTypes = fn(1084).PlatformTypes;
const ReactCompilerGating = fn(558);
const SettingBuilders = fn(11212);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useContactSyncSettingValue() {
  const cResult = c.c(2);
  const contactSyncAccount = ContactSyncUtils.useContactSyncAccount();
  if (cResult[0] !== contactSyncAccount) {
    const isContactSyncEnabledResult = ContactSyncUtils.isContactSyncEnabled(contactSyncAccount);
    cResult[0] = contactSyncAccount;
    cResult[1] = isContactSyncEnabledResult;
    let tmp5 = isContactSyncEnabledResult;
    const tmpResult = ContactSyncUtils;
  } else {
    tmp5 = cResult[1];
  }
  return tmp5;
}) : (function useContactSyncSettingValue() {
  const contactSyncAccount = ContactSyncUtils.useContactSyncAccount();
  return ContactSyncUtils.isContactSyncEnabled(contactSyncAccount);
});
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.uSvEy7);
  },
  parent: fn(8331).MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: ReactCompilerGating.isReactCompilerEnabled() ? (function useContactSyncSettingValue() {
    const cResult = c.c(2);
    const contactSyncAccount = ContactSyncUtils.useContactSyncAccount();
    if (cResult[0] !== contactSyncAccount) {
      const isContactSyncEnabledResult = ContactSyncUtils.isContactSyncEnabled(contactSyncAccount);
      cResult[0] = contactSyncAccount;
      cResult[1] = isContactSyncEnabledResult;
      let tmp5 = isContactSyncEnabledResult;
      const tmpResult = ContactSyncUtils;
    } else {
      tmp5 = cResult[1];
    }
    return tmp5;
  }) : (function useContactSyncSettingValue() {
    const contactSyncAccount = ContactSyncUtils.useContactSyncAccount();
    return ContactSyncUtils.isContactSyncEnabled(contactSyncAccount);
  }),
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