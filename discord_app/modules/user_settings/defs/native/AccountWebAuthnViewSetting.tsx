// === Module 14799: AccountWebAuthnViewSetting ===

// Module 14799 (AccountWebAuthnViewSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 4904 */;
import WebAuthnActionCreators from "WebAuthnActionCreators" /* 6597 */;
import noop from "module_19" /* 19 */;
import WebAuthnStore from "WebAuthnStore" /* 14656 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
fn(11468);
let SettingBuilders = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.y7SXYX);
  },
  parent: fn(7975).MobileUserSettings.ACCOUNT,
  usePreNavigationAction: function useAccountCanUseWebAuthnView() {
    return noop.useCallback(() => {
      currentUser = currentUser.getCurrentUser();
      let flag;
      if (currentUser != null) {
        flag = currentUser.verified;
      }
      if (flag == null) {
        flag = false;
      }
      if (!flag) {
        const obj = { title: null, body: null };
        const intl = util.intl;
        obj.title = intl.string(util.t.v740sh);
        const intl2 = util.intl;
        obj.body = intl2.string(util.t.uggF7o);
        obj.show(obj);
      }
      return flag;
    }, []);
  },
  useTrailing: function useAccountSecurityKeysSettingTrailing() {
    if (!WebAuthnStore.hasFetchedCredentials()) {
      const webAuthnCredentials = WebAuthnActionCreators.fetchWebAuthnCredentials();
    }
    const items = [WebAuthnStore];
    return initialize.useStateFromStores(items, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.n8mZ0X, { count: credentials.getCredentials().length });
    });
  },
  unsearchable: true,
  screen: {
    route: fn(1074).UserSettingsSections.WEBAUTHN_VIEW,
    getComponent() {
      return require("UserSettingsWebAuthn").default;
    }
  }
};
SettingBuilders = SettingBuilders.createRoute(SettingBuilders);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountWebAuthnViewSetting.tsx");

export default SettingBuilders;