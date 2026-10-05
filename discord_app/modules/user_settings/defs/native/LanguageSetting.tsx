// discord_app/modules/user_settings/defs/native/LanguageSetting.tsx
import util from "../../../../intl/index.native.tsx";
import LocaleStore from "../../LocaleStore.tsx";

require = fn;
const ReactCompilerGating = fn(558);
const SettingBuilders = fn(11129);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = stateFromStores(576).c(4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [LocaleStore];
        const fn = function l() {
          return locale.locale;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const obj = stateFromStores(576);
      stateFromStores = stateFromStores(504).useStateFromStores(tmp4, tmp5);
      if (cResult[2] !== stateFromStores) {
        const availableLocales = tmp(1126).getAvailableLocales();
        const found = availableLocales.find((value) => value.value === stateFromStores);
        let stringResult = null;
        if (null != found) {
          const intl = tmp(1126).intl;
          stringResult = intl.string(found.localizedName);
        }
        cResult[2] = stateFromStores;
        cResult[3] = stringResult;
        let tmp8 = stringResult;
        const tmpResult2 = tmp(1126);
      } else {
        tmp8 = cResult[3];
      }
      return tmp8;
    }
  : () => {
      const items = [LocaleStore];
      _require = require("initialize").useStateFromStores(items, () => locale.locale);
      const obj = require("initialize");
      const tmp = _require;
      const availableLocales = require("util").getAvailableLocales();
      const found = availableLocales.find((value) => value.value === closure_0);
      let stringResult = null;
      if (null != found) {
        const intl = tmp(1126).intl;
        stringResult = intl.string(found.localizedName);
      }
      return stringResult;
    };
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.IHMsPn);
  },
  parent: null,
  IconComponent: fn(15243).LanguageIcon,
  useTrailing: ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        const cResult = stateFromStores(576).c(4);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [LocaleStore];
          const fn = function l() {
            return locale.locale;
          };
          cResult[0] = items;
          cResult[1] = fn;
          tmp4 = items;
          tmp5 = fn;
        } else {
          [tmp4, tmp5] = cResult;
        }
        const obj = stateFromStores(576);
        stateFromStores = stateFromStores(504).useStateFromStores(tmp4, tmp5);
        if (cResult[2] !== stateFromStores) {
          const availableLocales = tmp(1126).getAvailableLocales();
          const found = availableLocales.find((value) => value.value === stateFromStores);
          let stringResult = null;
          if (null != found) {
            const intl = tmp(1126).intl;
            stringResult = intl.string(found.localizedName);
          }
          cResult[2] = stateFromStores;
          cResult[3] = stringResult;
          let tmp8 = stringResult;
          const tmpResult2 = tmp(1126);
        } else {
          tmp8 = cResult[3];
        }
        return tmp8;
      }
    : () => {
        const items = [LocaleStore];
        _require = require("initialize").useStateFromStores(items, () => locale.locale);
        const obj = require("initialize");
        const tmp = _require;
        const availableLocales = require("util").getAvailableLocales();
        const found = availableLocales.find((value) => value.value === closure_0);
        let stringResult = null;
        if (null != found) {
          const intl = tmp(1126).intl;
          stringResult = intl.string(found.localizedName);
        }
        return stringResult;
      },
  screen: {
    route: fn(1085).UserSettingsSections.LANGUAGE,
    getComponent() {
      return require("UserSettingsLocale").default;
    },
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/LanguageSetting.tsx");

export default route;
