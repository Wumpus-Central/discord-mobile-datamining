// discord_app/modules/user_settings/defs/native/AccountWebAuthnViewSetting.tsx
import get_initialized from "../../../../../discord_common/js/packages/flux/index.tsx";
import react2 from "../../../../../_runtime/00576_react.js";
import Constants from "../../../../Constants.tsx";
import intl3 from "../../../../intl/index.native.tsx";
import AlertActionCreatorsDefault from "../../../../actions/AlertActionCreators.tsx";
import WebAuthnActionCreators from "../../../webauthn/WebAuthnActionCreators.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import react from "../../../../../_runtime/00019_react.js";
import WebAuthnStore from "../../../webauthn/WebAuthnStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let currentUser;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let obj = react2;
      const cResult = obj.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function t() {
          let intl;
          let intl2;
          currentUser = currentUser.getCurrentUser();
          let flag;
          if (currentUser != null) {
            flag = currentUser.verified;
          }
          if (flag == null) {
            flag = false;
          }
          if (!flag) {
            const obj = { title: intl.string(intl3.t.v740sh), body: intl2.string(intl3.t.uggF7o) };
            const show = AlertActionCreatorsDefault.show;
            AlertActionCreatorsDefault;
            intl = intl3.intl;
            intl2 = intl3.intl;
            show(obj);
          }
          return flag;
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : () =>
      react.useCallback(() => {
        let intl;
        let intl2;
        currentUser = currentUser.getCurrentUser();
        let flag;
        if (currentUser != null) {
          flag = currentUser.verified;
        }
        if (flag == null) {
          flag = false;
        }
        if (!flag) {
          const obj = { title: intl.string(intl3.t.v740sh), body: intl2.string(intl3.t.uggF7o) };
          const show = AlertActionCreatorsDefault.show;
          AlertActionCreatorsDefault;
          intl = intl3.intl;
          intl2 = intl3.intl;
          show(obj);
        }
        return flag;
      }, []);
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let credentials;
      let tmp6;
      let tmp7;
      let obj = react2;
      const cResult = obj.c(2);
      if (!WebAuthnStore.hasFetchedCredentials()) {
        const tmpResult = WebAuthnActionCreators;
        const webAuthnCredentials = tmpResult.fetchWebAuthnCredentials();
      }
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [WebAuthnStore];
        const fn = function s() {
          const intl = intl3.intl;
          const formatToPlainString = intl.formatToPlainString;
          const obj = { count: credentials.getCredentials().length };
          const n8mZ0X = intl3.t.n8mZ0X;
          return formatToPlainString(n8mZ0X, obj);
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp6 = items;
        tmp7 = fn;
      } else {
        [tmp6, tmp7] = cResult;
      }
      const tmpResult2 = get_initialized;
      return tmpResult2.useStateFromStores(tmp6, tmp7);
    }
  : () => {
      let credentials;
      if (!WebAuthnStore.hasFetchedCredentials()) {
        let obj = WebAuthnActionCreators;
        const webAuthnCredentials = obj.fetchWebAuthnCredentials();
      }
      const items = [WebAuthnStore];
      const obj2 = get_initialized;
      return obj2.useStateFromStores(items, () => {
        const intl = intl3.intl;
        const formatToPlainString = intl.formatToPlainString;
        const obj = { count: credentials.getCredentials().length };
        const n8mZ0X = intl3.t.n8mZ0X;
        return formatToPlainString(n8mZ0X, obj);
      });
    };
let obj = {
  useTitle() {
    const intl = intl3.intl;
    return intl.string(intl3.t["0N1s81"]);
  },
  parent: MobileUserSettings.ACCOUNT,
  usePreNavigationAction: tmp2,
  useTrailing: tmp3,
  screen: {
    route: UserSettingsSections.WEBAUTHN_VIEW,
    getComponent() {
      return require("PasskeyInitStep").default;
    },
  },
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountWebAuthnViewSetting.tsx");

export default route;
