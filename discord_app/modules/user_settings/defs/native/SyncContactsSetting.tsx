// discord_app/modules/user_settings/defs/native/SyncContactsSetting.tsx
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import ContactSyncUtils from "../../../contact_sync/native/ContactSyncUtils.tsx";
import ContactSyncSettings from "../../../contact_sync/native/components/ContactSyncSettings.tsx";
import ConnectedAccountsStore from "../../../../stores/ConnectedAccountsStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
const PlatformTypes = fn(1085).PlatformTypes;
const ReactCompilerGating = fn(558);
const SettingBuilders = fn(11142);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
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
    }
  : () => {
      const contactSyncAccount = ContactSyncUtils.useContactSyncAccount();
      return ContactSyncUtils.isContactSyncEnabled(contactSyncAccount);
    };
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.uSvEy7);
  },
  parent: fn(7645).MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
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
      }
    : () => {
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
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/SyncContactsSetting.tsx");

export default toggle;
