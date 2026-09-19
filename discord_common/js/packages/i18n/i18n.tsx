// === Module 1884: i18n/i18n ===

// Module 1884 (i18n/i18n)
import getSystemLocale from "getSystemLocale" /* 1337 */;
import _modDef1885 from "module_1885" /* 1885 */;
import _mod1926 from "module_1926" /* 1926 */;
import parse from "parse" /* 1927 */;

require = fn;
global.IntlMessageFormat = _modDef1885;
const module_1894 = fn(1894);
const module_1895 = fn(1895);
const module_1896 = fn(1896);
const module_1897 = fn(1897);
const module_1898 = fn(1898);
const module_1899 = fn(1899);
const module_1900 = fn(1900);
const module_1901 = fn(1901);
const module_1902 = fn(1902);
const module_1903 = fn(1903);
const module_1904 = fn(1904);
const module_1905 = fn(1905);
const module_1906 = fn(1906);
const module_1907 = fn(1907);
const module_1908 = fn(1908);
const module_1909 = fn(1909);
const module_1910 = fn(1910);
const module_1911 = fn(1911);
const module_1912 = fn(1912);
const module_1913 = fn(1913);
const module_1914 = fn(1914);
const module_1915 = fn(1915);
const module_1916 = fn(1916);
const module_1917 = fn(1917);
const module_1918 = fn(1918);
const module_1919 = fn(1919);
const module_1920 = fn(1920);
const module_1921 = fn(1921);
delete tmp2[tmp];
if (typeof Intl === "undefined") {
  fn(1922);
}
const React2 = "en-US";
class Provider {
  constructor(arg0) {
    merged = Object.assign({ _context: null, _parsedMessages: null });
    obj = { messages: {}, defaultMessages: {}, locale: c2 };
    merged[0] = obj;
    merged[1] = {};
    merged._getParsedMessages = global;
    return merged;
  }
}
Provider.prototype["getMessages"] = function getMessages() {
  return this._parsedMessages;
};
class LazyPropertyProvider extends Provider {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult._refresh = function _refresh(defaultMessages) {
      closure_0 = defaultMessages;
      let obj = _parsedMessages;
      if (_parsedMessages === undefined) {
        obj = {};
      }
      const keys = Object.keys(defaultMessages.defaultMessages);
      const item = keys.forEach((item) => {
        closure_0 = item;
        obj = {
          configurable: true,
          get() {
            delete tmp2[tmp];
            const _getParsedMessagesResult = applyArgumentsResult._getParsedMessages(closure_0, closure_0, applyArgumentsResult._refresh);
            obj[closure_0] = _getParsedMessagesResult;
            return _getParsedMessagesResult;
          }
        };
        Object.defineProperty(obj, item, obj);
      });
      return obj;
    };
    return applyArgumentsResult;
  }
}
LazyPropertyProvider.prototype["refresh"] = function refresh(_context) {
  this._context = _context;
  this._refresh(_context, this._parsedMessages);
};
class ProxyProvider extends Provider {
  constructor(arg0) {
    tmp1 = new tmp(global, new.target);
    closure_0 = tmp1;
    tmp1._createProxy = function _createProxy() {
      if (_context === undefined) {
        _context = _context._context;
      }
      const proxy = new Proxy({}, {
        get(arg0, arg1) {
          let tmp = arg0[arg1];
          if (!tmp) {
            const _getParsedMessagesResult = _context._getParsedMessages(_context, arg1, _context._createProxy);
            arg0[arg1] = _getParsedMessagesResult;
            tmp = _getParsedMessagesResult;
          }
          return tmp;
        }
      });
      return proxy;
    };
    tmp1._parsedMessages = tmp1._createProxy(tmp1._context);
    return tmp1;
  }
}
ProxyProvider.prototype["refresh"] = function refresh(arg0) {
  const self = this;
  const merged = Object.assign(this._context, arg0);
  const keys = Object.keys(this._parsedMessages);
  const item = keys.forEach((item) => {
    delete tmp2[tmp];
  });
};
const EventEmitter = fn(568).EventEmitter;
_instance_members_initializer_I18N_ = function() {
  const self = this;
  this.loadPromise = Promise.resolve();
  this.resolveLanguageLoaded = function resolveLanguageLoaded() {

  };
  this._languages = [];
  this._chosenLocale = "";
  this._getParsedMessages = function _getParsedMessages(_context, arg1, _createProxy) {
    ({ defaultMessages, locale } = _context);
    if (typeof _context.messages[arg1] || defaultMessages[arg1] === "object") {
      const obj3 = { messages: tmp4, defaultMessages: defaultMessages[arg1], locale };
      return _createProxy(obj3);
    } else {
      try {
        return self(1927).getMessage(tmp4, locale);
      } catch (err) {
        if (typeof tmp3[tmp2] === "string") {
          return self(1927).getMessage(tmp7, tmp);
        } else {
          return "";
        }
      }
    }
  };
  this._handleNewListener = function _handleNewListener(arg0) {
    if ("locale" === arg0) {
      self.emit(arg0, self._chosenLocale);
    }
  };
};
class I18N extends EventEmitter {
  constructor(arg0) {
    closure_0 = undefined;
    ({ getMessages, getLanguages } = global);
    tmp6 = new I18N(tmp5, tmp4, tmp3, tmp2, new.target, new.target, tmp);
    closure_0 = tmp6;
    tmp7 = _instance_members_initializer_I18N_();
    promise = new Promise((resolveLanguageLoaded) => {
      closure_0.resolveLanguageLoaded = resolveLanguageLoaded;
    });
    tmp6.initialLanguageLoad = promise;
    if (Intl.__addLocaleData) {
      _Intl = Intl;
      tmp9 = closure_0;
      tmp10 = closure_1;
      __addLocaleDataResult = Intl.__addLocaleData(closure_0(closure_1[31]));
    }
    tmp6._languages = getLanguages();
    if (null != window.Proxy) {
      tmp15 = ProxyProvider;
      tmp16 = new.target;
      tmp14 = new ProxyProvider(tmp6._getParsedMessages);
    } else {
      tmp12 = LazyPropertyProvider;
      tmp13 = new.target;
      tmp14 = new LazyPropertyProvider(tmp6._getParsedMessages);
    }
    tmp6._provider = tmp14;
    _provider = tmp6._provider;
    tmp6.Messages = _provider.getMessages();
    tmp6._getMessages = getMessages;
    return;
  }
}
const prototype = I18N.prototype;
prototype["updateMessagesForExperiment"] = function updateMessagesForExperiment(c2, fn) {
  const self = this;
  closure_1 = c2;
  closure_0 = fn;
  const _fetchMessagesResult = this._fetchMessages(c2);
  if (_fetchMessagesResult instanceof Promise) {
    _fetchMessagesResult.then((result) => {
      result = self._applyMessagesForLocale(closure_0(result), closure_1);
    });
  } else {
    let result = self._applyMessagesForLocale(fn(_fetchMessagesResult), c2);
  }
};
prototype["setLocale"] = function setLocale(_requestedLocale) {
  const self = this;
  if (this._chosenLocale !== _requestedLocale) {
    self._requestedLocale = _requestedLocale;
    self._chosenLocale = _requestedLocale;
    self.loadPromise = self._loadMessagesForLocale(_requestedLocale);
    self.emit("locale", self._chosenLocale, self._chosenLocale);
  }
};
prototype["setUpdateRules"] = function setUpdateRules(fn) {
  parse.setUpdateRules(fn);
};
prototype["getLanguages"] = function getLanguages() {
  return this._languages;
};
prototype["getAvailableLocales"] = function getAvailableLocales() {
  const self = this;
  const _languages = this._languages;
  const found = _languages.filter((enabled) => enabled.enabled);
  const mapped = found.map((item) => {
    ({ code, name } = item);
    const obj = { value: code, name, localizedName: null };
    let tmp = self.Messages[code];
    if (tmp == null) {
      tmp = name;
    }
    obj.localizedName = tmp;
    return obj;
  });
  return mapped.sort((name, name2) => {
    const formatted = name.name.toLowerCase();
    const formatted1 = name2.name.toLowerCase();
    let num = -1;
    if (formatted >= formatted1) {
      let num2 = 0;
      if (formatted > formatted1) {
        num2 = 1;
      }
      num = num2;
    }
    return num;
  });
};
prototype["getLocale"] = function getLocale() {
  return this._chosenLocale;
};
prototype["getLocaleInfo"] = function getLocaleInfo() {
  const self = this;
  const _languages = this._languages;
  return _languages.find((code) => code.code === self._chosenLocale);
};
prototype["getDefaultLocale"] = function getDefaultLocale() {
  let str = getSystemLocale.getSystemLocale();
  if (str == null) {
    str = c2;
  }
  const _languages = this._languages;
  const found = _languages.filter((enabled) => enabled.enabled);
  const mapped = found.map((code) => code.code);
  if (mapped.includes(str)) {
    return str;
  } else {
    const parts = str.split("-");
    const first = parts[0];
    if (mapped.includes(parts[0])) {
      let found2 = first;
    } else {
      if ("zh" === first) {
        if (parts.length > 1) {
          if ("Hant" === parts[1]) {
            let found1 = mapped.find((item) => "zh-TW" === item);
            if (found1 == null) {
              found1 = c2;
            }
            found2 = found1;
          }
        }
      }
      found2 = mapped.find((item) => item.split("-")[0] === parts[0]);
      if (found2 == null) {
        found2 = c2;
      }
    }
    return found2;
  }
};
prototype["_loadMessagesForLocale"] = function _loadMessagesForLocale(_requestedLocale) {
  const self = this;
  closure_0 = _requestedLocale;
  const _fetchMessagesResult = this._fetchMessages(_requestedLocale);
  if (_fetchMessagesResult instanceof Promise) {
    let nextPromise = _fetchMessagesResult.then((result) => self._applyMessagesForLocale(result, closure_0));
  } else {
    const result = self._applyMessagesForLocale(_fetchMessagesResult, _requestedLocale);
    nextPromise = Promise.resolve();
  }
  return nextPromise;
};
prototype["_applyMessagesForLocale"] = function _applyMessagesForLocale(_fetchMessagesResult, locale) {
  const self = this;
  let _findMessagesResult = arg2;
  if (arg2 === undefined) {
    _findMessagesResult = self._findMessages(c2);
  }
  if (self._requestedLocale === locale) {
    const _provider = self._provider;
    const obj = { messages: _fetchMessagesResult, defaultMessages: _findMessagesResult, locale };
    _provider.refresh(obj);
    const languageLoaded = self.resolveLanguageLoaded();
  }
};
prototype["_findMessages"] = function _findMessages(c2) {
  const _fetchMessagesResult = this._fetchMessages(c2);
  if (_fetchMessagesResult instanceof Promise) {
    const _Error = Error;
    const error = new Error("Messages are still loading.");
    throw error;
  } else {
    return _fetchMessagesResult;
  }
};
prototype["_fetchMessages"] = function _fetchMessages(c2) {
  const self = this;
  closure_0 = c2;
  try {
    const _getMessagesResult = self._getMessages(c2);
    if (_getMessagesResult instanceof Promise) {
      let catchPromise = promise.catch(tmp3);
    } else {
      catchPromise = promise;
    }
    return catchPromise;
  } catch (err) {
    return tmp();
  }
};
const size = fn(2);
let result = size.fileFinishedImporting("../discord_common/js/packages/i18n/i18n.tsx");

export const getSystemLocale = fn(1337).getSystemLocale;
export { I18N };