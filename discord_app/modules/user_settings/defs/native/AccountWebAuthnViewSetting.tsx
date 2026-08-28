// discord_app/modules/user_settings/defs/native/AccountWebAuthnViewSetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import _fetchWebAuthnConditionalChallenge from "../../../webauthn/WebAuthnActionCreators.tsx";
import closure_3 from "../../../../../_runtime/00019_noop.js";
import closure_4 from "../../../webauthn/WebAuthnStore.tsx";
import closure_5 from "../../../../stores/UserStore.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";
import { UserSettingsWebAuthn } from "../../../webauthn/native/UserSettingsWebAuthn.tsx";

require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.y7SXYX);
  },
  parent: require("MobileUserSettings").MobileUserSettings.ACCOUNT,
  usePreNavigationAction: function useAccountCanUseWebAuthnView() {
    return React.useCallback(() => {
      currentUser = currentUser.getCurrentUser();
      let flag;
      if (currentUser != null) {
        flag = currentUser.verified;
      }
      if (flag == null) {
        flag = false;
      }
      if (!flag) {
        let obj = callback2(4822);
        obj = { title: null, body: null };
        const intl = callback(1236).intl;
        obj[0] = intl.string(callback(1236).t.v740sh);
        const intl2 = callback(1236).intl;
        obj[1] = intl2.string(callback(1236).t.uggF7o);
        obj.show(obj);
      }
      return flag;
    }, []);
  },
  useTrailing: function useAccountSecurityKeysSettingTrailing() {
    if (!closure_4.hasFetchedCredentials()) {
      const webAuthnCredentials = _fetchWebAuthnConditionalChallenge.fetchWebAuthnCredentials();
      const obj = _fetchWebAuthnConditionalChallenge;
    }
    const items = [closure_4];
    return initialize.useStateFromStores(items, () => {
      const intl = callback(1236).intl;
      return intl.formatToPlainString(callback(1236).t.n8mZ0X, { count: credentials.getCredentials().length });
    });
  },
  unsearchable: true,
  screen: createToggle
};
createToggle = {
  route: require("ME").UserSettingsSections.WEBAUTHN_VIEW,
  getComponent() {
    return UserSettingsWebAuthn /* UserSettingsWebAuthn */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/AccountWebAuthnViewSetting.tsx");

export default createToggle;