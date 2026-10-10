// === Module 15030: AccountWebAuthnViewSetting ===

// Module 15030 (AccountWebAuthnViewSetting)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5299 */;
import WebAuthnActionCreators from "WebAuthnActionCreators" /* 5939 */;
import noop from "module_19" /* 19 */;
import WebAuthnStore from "WebAuthnStore" /* 14935 */;
import UserStore from "UserStore" /* 1390 */;

require = fn;
fn(558);
const ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAccountCanUseWebAuthnView() {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      currentUser = currentUser.getCurrentUser();
      let flag;
      if (currentUser != null) {
        flag = currentUser.verified;
      }
      if (flag == null) {
        flag = false;
      }
      if (!flag) {
        const obj2 = { title: null, body: null };
        const intl = util.intl;
        obj2.title = intl.string(util.t.v740sh);
        const intl2 = util.intl;
        obj2.body = intl2.string(util.t.uggF7o);
        AlertActionCreatorsDefault.show(obj2);
      }
      return flag;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function useAccountCanUseWebAuthnView() {
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
      const obj2 = { title: null, body: null };
      const intl = util.intl;
      obj2.title = intl.string(util.t.v740sh);
      const intl2 = util.intl;
      obj2.body = intl2.string(util.t.uggF7o);
      AlertActionCreatorsDefault.show(obj2);
    }
    return flag;
  }, []);
});
const SettingBuilders = fn(10663);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAccountSecurityKeysSettingTrailing() {
  const cResult = c.c(2);
  if (!WebAuthnStore.hasFetchedCredentials()) {
    const webAuthnCredentials = WebAuthnActionCreators.fetchWebAuthnCredentials();
    const tmpResult = WebAuthnActionCreators;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [WebAuthnStore];
    const fn = function s() {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.n8mZ0X, { count: credentials.getCredentials().length });
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp6 = items;
    tmp7 = fn;
  } else {
    [tmp6, tmp7] = cResult;
  }
  return initialize.useStateFromStores(tmp6, tmp7);
}) : (function useAccountSecurityKeysSettingTrailing() {
  if (!WebAuthnStore.hasFetchedCredentials()) {
    const webAuthnCredentials = WebAuthnActionCreators.fetchWebAuthnCredentials();
  }
  const items = [WebAuthnStore];
  return initialize.useStateFromStores(items, () => {
    const intl = util.intl;
    return intl.formatToPlainString(util.t.n8mZ0X, { count: credentials.getCredentials().length });
  });
});
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["0N1s81"]);
  },
  parent: fn(7992).MobileUserSettings.ACCOUNT,
  usePreNavigationAction: tmp2,
  useTrailing: ReactCompilerGating.isReactCompilerEnabled() ? (function useAccountSecurityKeysSettingTrailing() {
    const cResult = c.c(2);
    if (!WebAuthnStore.hasFetchedCredentials()) {
      const webAuthnCredentials = WebAuthnActionCreators.fetchWebAuthnCredentials();
      const tmpResult = WebAuthnActionCreators;
    }
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [WebAuthnStore];
      const fn = function s() {
        const intl = util.intl;
        return intl.formatToPlainString(util.t.n8mZ0X, { count: credentials.getCredentials().length });
      };
      cResult[0] = items;
      cResult[1] = fn;
      tmp6 = items;
      tmp7 = fn;
    } else {
      [tmp6, tmp7] = cResult;
    }
    return initialize.useStateFromStores(tmp6, tmp7);
  }) : (function useAccountSecurityKeysSettingTrailing() {
    if (!WebAuthnStore.hasFetchedCredentials()) {
      const webAuthnCredentials = WebAuthnActionCreators.fetchWebAuthnCredentials();
    }
    const items = [WebAuthnStore];
    return initialize.useStateFromStores(items, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.n8mZ0X, { count: credentials.getCredentials().length });
    });
  }),
  screen: {
    route: fn(1085).UserSettingsSections.WEBAUTHN_VIEW,
    getComponent() {
      return require("PasskeyInitStep").default;
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountWebAuthnViewSetting.tsx");

export default route;