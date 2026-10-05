// discord_app/modules/user_settings/LocaleStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import intl from "../../intl/index.native.tsx";
import IntlLoaderStore from "../../intl/IntlLoaderStore.tsx";
import DiscordNativeDefault from "../../lib/DiscordNative.tsx";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import UserSettingsProtoStore from "UserSettingsProtoStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

let c2, c3;

function getSystemLocale() {
  return obj(...arguments);
}
let obj = function _getSystemLocale() {
  obj = _asyncToGenerator(async () => {
    let value;
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_1 = tmp;
            value = undefined;
            const tmp22 = DiscordNativeDefault;
            let prop;
            if (tmp22 != null) {
              const app = tmp22.app;
              if (app != null) {
                prop = app.getPreferredSystemLanguages;
              }
            }
            if (null != prop) {
              const app2 = DiscordNativeDefault.app;
              const preferredSystemLanguages = app2.getPreferredSystemLanguages();
              c2 = 1;
              c3 = 1;
              const obj4 = { value: preferredSystemLanguages.then((result) => result[0]), done: false };
              return obj4;
            }
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else if (null != value) {
          if ("" !== value) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          }
        }
        c3 = 3;
        const obj6 = { value: closure_129_0(closure_129_2[4]).systemLocale, done: true };
        return obj6;
      } catch (tmp14) {
        c3 = 3;
        throw tmp14;
      }
    }
  });
  return obj(...arguments);
};
function handleUpdate() {
  const localization = UserSettingsProtoStore.settings.localization;
  let value;
  if (localization != null) {
    if (localization.locale != null) {
      value = iter.value;
    }
  }
  let flag = null != value && "" !== value && value !== locale;
  if (flag) {
    locale = value;
    setAppLocale(value);
    flag = true;
  }
  return flag;
}
const setAppLocale = IntlLoaderStore.setAppLocale;
let locale = intl.intl.currentLocale;
let systemLocale = intl.systemLocale;
const promise = getSystemLocale();
promise.then((result) => {
  systemLocale = result;
});
const Store = get_initializedDefault.Store;
class LocaleStore extends Store {
  initialize() {
    this.waitFor(UserSettingsProtoStore);
    const localization = UserSettingsProtoStore.settings.localization;
    let value;
    if (localization != null) {
      if (localization.locale != null) {
        value = iter.value;
      }
    }
    const tmp3 = null != value && "" !== value && value !== locale;
    if (tmp3) {
      locale = value;
      setAppLocale(value);
    }
    setAppLocale(locale);
  }
}
const prototype = LocaleStore.prototype;
Object.defineProperty(prototype, "locale", {
  get: function locale() {
    return locale;
  },
  set: undefined,
});
Object.defineProperty(prototype, "systemLocale", {
  get: function systemLocale() {
    return systemLocale;
  },
  set: undefined,
});
LocaleStore.displayName = "LocaleStore";
obj = {
  OVERLAY_INITIALIZE: handleUpdate,
  CACHE_LOADED: handleUpdate,
  CONNECTION_OPEN: handleUpdate,
  USER_SETTINGS_PROTO_UPDATE: handleUpdate,
  USER_SETTINGS_LOCALE_OVERRIDE: function handleLocaleOverride(locale) {
    locale = locale.locale;
    setAppLocale(locale);
  },
};
const localeStore = new LocaleStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/user_settings/LocaleStore.tsx");

export default localeStore;
