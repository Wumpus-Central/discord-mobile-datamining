import initialize from "initialize";
import { setAppLocale } from "_setAppLocale";
import handleConnectionClosedOrResumed from "handleConnectionClosedOrResumed";
import { systemLocale } from "getSystemLocale";
import { Store } from "initialize";

const require = arg1;
function _getSystemLocale() {
  const self = this;
  const tmp = callback(function*() {
    if (c3 === 2) {
      c3 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp5 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === dependencyMap) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_1 = tmp2;
            let callback = tmp3;
            callback = undefined;
            const tmp25 = outer1_1(3804);
            let prop;
            if (tmp25 != null) {
              const app = tmp25.app;
              if (app != null) {
                prop = app.getPreferredSystemLanguages;
              }
            }
            if (null != prop) {
              const app2 = tmp23(3804).app;
              const preferredSystemLanguages = app2.getPreferredSystemLanguages();
              dependencyMap = 1;
              c3 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = preferredSystemLanguages.then((arg0) => arg0[0]);
              return obj1;
            }
            tmp23 = outer1_1;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj2 = { value: null, done: true };
          obj2[0] = arg1;
          return obj2;
        } else {
          callback = arg1;
          if (null != callback) {
            if ("" !== callback) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = callback;
              return obj;
            }
          }
        }
        c3 = 3;
        const obj3 = { value: null, done: true };
        obj3[0] = callback(1236).systemLocale;
        return obj3;
      } catch (tmp15) {
        c3 = tmp;
        throw tmp15;
      }
    }
  });
  const _getSystemLocale = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function handleUpdate() {
  const localization = handleConnectionClosedOrResumed.settings.localization;
  let value;
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
    flag = value !== currentLocale;
  }
  if (flag) {
    currentLocale = value;
    setAppLocale(value);
    flag = true;
  }
  return flag;
}
let currentLocale = require("getSystemLocale").intl.currentLocale;
(function getSystemLocale() {
  const self = this;
  const apply = _getSystemLocale.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
})().then((arg0) => {
  let closure_8 = arg0;
});
class LocaleStore extends Store {
}
const prototype = LocaleStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(handleConnectionClosedOrResumed);
  const localization = handleConnectionClosedOrResumed.settings.localization;
  let value;
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
    tmp3 = value !== currentLocale;
  }
  if (tmp3) {
    currentLocale = value;
    setAppLocale(value);
  }
  setAppLocale(currentLocale);
};
Object.defineProperty(prototype, "locale", {
  get: function locale() {
    return currentLocale;
  },
  set: undefined
});
Object.defineProperty(prototype, "systemLocale", {
  get: function systemLocale() {
    return systemLocale;
  },
  set: undefined
});
LocaleStore.displayName = "LocaleStore";
const localeStore = new LocaleStore(require("dispatcher"), {
  OVERLAY_INITIALIZE: handleUpdate,
  CACHE_LOADED: handleUpdate,
  CONNECTION_OPEN: handleUpdate,
  USER_SETTINGS_PROTO_UPDATE: handleUpdate,
  USER_SETTINGS_LOCALE_OVERRIDE: function handleLocaleOverride(locale) {
    locale = locale.locale;
    setAppLocale(locale);
  }
});
let obj = {
  OVERLAY_INITIALIZE: handleUpdate,
  CACHE_LOADED: handleUpdate,
  CONNECTION_OPEN: handleUpdate,
  USER_SETTINGS_PROTO_UPDATE: handleUpdate,
  USER_SETTINGS_LOCALE_OVERRIDE: function handleLocaleOverride(locale) {
    locale = locale.locale;
    setAppLocale(locale);
  }
};
const promise = (function getSystemLocale() {
  const self = this;
  const apply = _getSystemLocale.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
})();
const result = require("handleConnectionClosedOrResumed").fileFinishedImporting("modules/user_settings/LocaleStore.tsx");

export default localeStore;