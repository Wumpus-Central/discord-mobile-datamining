import noop from "noop";
import hasFetchedCredentials from "hasFetchedCredentials";
import mergeGuildAvatar from "mergeGuildAvatar";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.y7SXYX);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT,
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
        let obj = callback2(4594);
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
    if (!hasFetchedCredentials.hasFetchedCredentials()) {
      const webAuthnCredentials = require(5711) /* _fetchWebAuthnConditionalChallenge */.fetchWebAuthnCredentials();
      let obj = require(5711) /* _fetchWebAuthnConditionalChallenge */;
    }
    const items = [hasFetchedCredentials];
    return require(589) /* initialize */.useStateFromStores(items, () => {
      const intl = callback(1236).intl;
      const obj = { count: null };
      obj[0] = credentials.getCredentials().length;
      return intl.formatToPlainString(callback(1236).t.n8mZ0X, obj);
    });
  },
  unsearchable: true,
  screen: createToggle
};
createToggle = {
  route: require("ME").UserSettingsSections.WEBAUTHN_VIEW,
  getComponent() {
    return require(13840) /* UserSettingsWebAuthn */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("mergeGuildAvatar").fileFinishedImporting("modules/user_settings/defs/native/AccountWebAuthnViewSetting.tsx");

export default createToggle;