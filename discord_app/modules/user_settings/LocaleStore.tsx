// discord_app/modules/user_settings/LocaleStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import DiscordNativeDefault from "../../lib/DiscordNative.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import UserSettingsProtoStore from "UserSettingsProtoStore.tsx";

const require = fn;
let closure_6 = async function _getSystemLocale() {
  if (c3 === 2) {
    c3 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp5 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
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
          obj = { value, done: true };
          return obj;
        } else {
          closure_1 = tmp2;
          closure_0 = tmp3;
          closure_128_0 = undefined;
          const tmp24 = DiscordNativeDefault;
          let prop;
          if (tmp24 != null) {
            const app = tmp24.app;
            if (app != null) {
              prop = app.getPreferredSystemLanguages;
            }
          }
          if (null != prop) {
            const app2 = DiscordNativeDefault.app;
            const preferredSystemLanguages = app2.getPreferredSystemLanguages();
            c2 = 1;
            c3 = 1;
            const obj1 = { value: preferredSystemLanguages.then((result) => result[0]), done: false };
            return obj1;
          }
        }
      } else if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 3;
        const obj2 = { value, done: true };
        return obj2;
      } else {
        closure_128_0 = value;
        if (null != closure_128_0) {
          if ("" !== closure_128_0) {
            c3 = 3;
            obj = { value: closure_128_0, done: true };
            return obj;
          }
        }
      }
      c3 = 3;
      const obj3 = { value: closure_129_0(closure_129_2[4]).systemLocale, done: true };
      return obj3;
    } catch (tmp15) {
      c3 = tmp;
      throw tmp15;
    }
  }
};
function handleUpdate() {
  const localization = UserSettingsProtoStore.settings.localization;
  value = undefined;
  if (localization != null) {
    if (localization.locale != null) {
      value = iter.value;
    }
  }
  let flag = null != value;
  if (flag) {
    flag = "" !== value;
  }
  if (flag) {
    flag = value !== locale;
  }
  if (flag) {
    locale = value;
    setAppLocale(value);
    flag = true;
  }
  return flag;
}
const setAppLocale = fn(2026).setAppLocale;
let locale = fn(1114).intl.currentLocale;
let global = fn(1114).systemLocale;
(function getSystemLocale() {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
})().then((result) => {
  global = result;
});
const Store = initializeDefault.Store;
class LocaleStore extends Store {}
const prototype = LocaleStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(UserSettingsProtoStore);
  const localization = UserSettingsProtoStore.settings.localization;
  value = undefined;
  if (localization != null) {
    if (localization.locale != null) {
      value = iter.value;
    }
  }
  let tmp3 = null != value;
  if (tmp3) {
    tmp3 = "" !== value;
  }
  if (tmp3) {
    tmp3 = value !== locale;
  }
  if (tmp3) {
    locale = value;
    setAppLocale(value);
  }
  setAppLocale(locale);
};
Object.defineProperty(prototype, "locale", {
  get: function locale() {
    return locale;
  },
  set: undefined,
});
Object.defineProperty(prototype, "systemLocale", {
  get: function systemLocale() {
    return global;
  },
  set: undefined,
});
LocaleStore.displayName = "LocaleStore";
const localeStore = new LocaleStore(DispatcherDefault, {
  OVERLAY_INITIALIZE: handleUpdate,
  CACHE_LOADED: handleUpdate,
  CONNECTION_OPEN: handleUpdate,
  USER_SETTINGS_PROTO_UPDATE: handleUpdate,
  USER_SETTINGS_LOCALE_OVERRIDE: function handleLocaleOverride(locale) {
    locale = locale.locale;
    setAppLocale(locale);
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/LocaleStore.tsx");

export default localeStore;
