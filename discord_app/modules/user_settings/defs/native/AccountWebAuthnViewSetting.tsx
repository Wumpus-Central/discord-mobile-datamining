// === Module 14628: route ===

// Module 14628 (route)
import initialize from "initialize" /* 586 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import _fetchWebAuthnConditionalChallenge from "_fetchWebAuthnConditionalChallenge" /* 6064 */;
import closure_3 from "noop" /* 19 */;
import closure_4 from "hasFetchedCredentials" /* 14533 */;
import closure_5 from "mergeGuildAvatar" /* 1921 */;
import createToggle from "createToggle" /* 11288 */;

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
        let obj = callback2(4857);
        obj = { title: null, body: null };
        const intl = callback(1233).intl;
        obj[0] = intl.string(callback(1233).t.v740sh);
        const intl2 = callback(1233).intl;
        obj[1] = intl2.string(callback(1233).t.uggF7o);
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
      const intl = callback(1233).intl;
      return intl.formatToPlainString(callback(1233).t.n8mZ0X, { count: credentials.getCredentials().length });
    });
  },
  unsearchable: true,
  screen: createToggle
};
createToggle = {
  route: require("ME").UserSettingsSections.WEBAUTHN_VIEW,
  getComponent() {
    return require(14536) /* UserSettingsWebAuthn */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/AccountWebAuthnViewSetting.tsx");

export default createToggle;