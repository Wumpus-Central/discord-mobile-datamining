// === Module 1891: i18n ===

// Module 1891 (i18n)
import _mod580 from "module_580" /* 580 */;
import react_native from "react-native" /* 1348 */;
import _modDef1892 from "module_1892" /* 1892 */;
import _default2 from "_default2" /* 1929 */;
import _mod1933 from "module_1933" /* 1933 */;
import parse from "parse" /* 1934 */;
import module_1901 from "module_1901" /* 1901 */;
import module_1902 from "module_1902" /* 1902 */;
import module_1903 from "module_1903" /* 1903 */;
import module_1904 from "module_1904" /* 1904 */;
import module_1905 from "module_1905" /* 1905 */;
import module_1906 from "module_1906" /* 1906 */;
import module_1907 from "module_1907" /* 1907 */;
import module_1908 from "module_1908" /* 1908 */;
import module_1909 from "module_1909" /* 1909 */;
import module_1910 from "module_1910" /* 1910 */;
import module_1911 from "module_1911" /* 1911 */;
import module_1912 from "module_1912" /* 1912 */;
import module_1913 from "module_1913" /* 1913 */;
import module_1914 from "module_1914" /* 1914 */;
import module_1915 from "module_1915" /* 1915 */;
import module_1916 from "module_1916" /* 1916 */;
import module_1917 from "module_1917" /* 1917 */;
import module_1918 from "module_1918" /* 1918 */;
import module_1919 from "module_1919" /* 1919 */;
import module_1920 from "module_1920" /* 1920 */;
import module_1921 from "module_1921" /* 1921 */;
import module_1922 from "module_1922" /* 1922 */;
import module_1923 from "module_1923" /* 1923 */;
import module_1924 from "module_1924" /* 1924 */;
import module_1925 from "module_1925" /* 1925 */;
import module_1926 from "module_1926" /* 1926 */;
import module_1927 from "module_1927" /* 1927 */;
import module_1928 from "module_1928" /* 1928 */;
import size from "module_2" /* 2 */;

let _instance_members_initializer_I18N_;

global.IntlMessageFormat = _modDef1892;
delete global["IntlMessageFormat"];
if (typeof Intl === "undefined") {
  const _module28 = _default2;
}
const React2 = "en-US";
class Provider {
  constructor(_getParsedMessages) {
    const merged = Object.assign({ _context: null, _parsedMessages: null });
    const obj = { messages: {}, defaultMessages: {}, locale };
    merged[0] = obj;
    merged[1] = {};
    merged._getParsedMessages = _getParsedMessages;
    return merged;
  }
  getMessages() {
    return this._parsedMessages;
  }
}
const prototype = Provider.prototype;
class LazyPropertyProvider extends Provider {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult._refresh = function _refresh(defaultMessages) {
      let closure_0 = defaultMessages;
      let obj = _parsedMessages;
      if (_parsedMessages === undefined) {
        obj = {};
      }
      const keys = Object.keys(defaultMessages.defaultMessages);
      const item = keys.forEach((item) => {
        let closure_0 = item;
        obj = {
          configurable: true,
          get() {
            delete obj[item];
            const _getParsedMessagesResult = applyArgumentsResult._getParsedMessages(item, item, applyArgumentsResult._refresh);
            obj[item] = _getParsedMessagesResult;
            return _getParsedMessagesResult;
          }
        };
        Object.defineProperty(obj, item, obj);
      });
      return obj;
    };
    return applyArgumentsResult;
  }
  refresh(_context) {
    this._context = _context;
    this._refresh(_context, this._parsedMessages);
  }
}
const prototype2 = LazyPropertyProvider.prototype;
class ProxyProvider extends Provider {
  constructor(_getParsedMessages) {
    let tmp;
    const tmp2 = new tmp(_getParsedMessages, new.target);
    let closure_0 = tmp2;
    tmp2._createProxy = function _createProxy() {
      let _context;
      if (_context === undefined) {
        let tmp = _context;
        _context = _context._context;
      }
      const obj = {
        get(arg0, item) {
          let tmp = arg0[item];
          if (!tmp) {
            const _getParsedMessagesResult = _context._getParsedMessages(_context, item, _context._createProxy);
            arg0[item] = _getParsedMessagesResult;
            tmp = _getParsedMessagesResult;
          }
          return tmp;
        }
      };
      const proxy = new Proxy({}, obj);
      return proxy;
    };
    tmp2._parsedMessages = tmp2._createProxy(tmp2._context);
    return tmp2;
  }
  refresh(arg0) {
    const self = this;
    const merged = Object.assign(this._context, arg0);
    const keys = Object.keys(this._parsedMessages);
    const item = keys.forEach((item) => {
      delete self._parsedMessages[item];
    });
  }
}
const prototype3 = ProxyProvider.prototype;
const EventEmitter = _mod580.EventEmitter;
_instance_members_initializer_I18N_ = function() {
  const self = this;
  this.loadPromise = Promise.resolve();
  this.resolveLanguageLoaded = function resolveLanguageLoaded() {

  };
  this._languages = [];
  this._chosenLocale = "";
  this._getParsedMessages = function _getParsedMessages(_context, item, _createProxy) {
    let defaultMessages;
    ({ defaultMessages, locale } = _context);
    if (typeof _context.messages[item] || defaultMessages[item] === "object") {
      const obj3 = { messages: _context.messages[item] || defaultMessages[item], defaultMessages: defaultMessages[item], locale };
      return _createProxy(obj3);
    } else {
      try {
        const obj = self(dependencyMap[32]);
        return obj.getMessage(_context.messages[item] || defaultMessages[item], locale);
      } catch (err) {
        if (typeof defaultMessages[item] === "string") {
          const obj2 = self(dependencyMap[32]);
          return obj2.getMessage(defaultMessages[item], locale);
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
  constructor(initialLocale) {
    let getLanguages;
    let getMessages;
    let tmp12;
    const f85258 = (resolveLanguageLoaded) => {
      obj.resolveLanguageLoaded = resolveLanguageLoaded;
    };
    initialLocale = initialLocale.initialLocale;
    ({ getMessages, getLanguages } = initialLocale);
    const obj = new I18N(tmp5, tmp4, tmp3, tmp2, new.target, this, tmp);
    _instance_members_initializer_I18N_();
    obj.initialLanguageLoad = new Promise(f85258);
    new Promise(f85258);
    if (Intl.__addLocaleData) {
      const _Intl = Intl;
      Intl.__addLocaleData(_mod1933);
    }
    obj._languages = getLanguages();
    if (null != window.Proxy) {
      const self2 = this;
      tmp12 = new ProxyProvider(obj._getParsedMessages);
    } else {
      const self = this;
      tmp12 = new LazyPropertyProvider(obj._getParsedMessages);
    }
    obj._provider = tmp12;
    const _provider = obj._provider;
    obj.Messages = _provider.getMessages();
    obj._getMessages = getMessages;
    try {
      const _Intl2 = Intl;
      const self3 = this;
      const numberFormat = new Intl.NumberFormat(initialLocale, {});
      const setLocale = obj.setLocale;
      if (!initialLocale) {
        initialLocale = obj.getDefaultLocale();
      }
      setLocale(initialLocale);
    } catch (err) {
      obj.setLocale(obj.getDefaultLocale());
    }
    obj.on("newListener", obj._handleNewListener);
    return obj;
  }
  updateMessagesForExperiment(c2, fn) {
    const self = this;
    let closure_1 = c2;
    let closure_0 = fn;
    const _fetchMessagesResult = this._fetchMessages(c2);
    if (_fetchMessagesResult instanceof Promise) {
      _fetchMessagesResult.then((result) => {
        result = self._applyMessagesForLocale(fn(result), closure_1);
      });
    } else {
      let result = self._applyMessagesForLocale(fn(_fetchMessagesResult), c2);
    }
  }
  setLocale(_requestedLocale) {
    const self = this;
    if (this._chosenLocale !== _requestedLocale) {
      self._requestedLocale = _requestedLocale;
      self._chosenLocale = _requestedLocale;
      const _chosenLocale = self._chosenLocale;
      self.loadPromise = self._loadMessagesForLocale(_requestedLocale);
      self.emit("locale", self._chosenLocale, _chosenLocale);
    }
  }
  setUpdateRules(fn) {
    const obj = parse;
    obj.setUpdateRules(fn);
  }
  getLanguages() {
    return this._languages;
  }
  getAvailableLocales() {
    const self = this;
    const _languages = this._languages;
    const found = _languages.filter((enabled) => enabled.enabled);
    const mapped = found.map((item) => {
      let code;
      let name;
      let tmp;
      ({ code, name } = item);
      const obj = { value: code, name, localizedName: tmp };
      tmp = self.Messages[code];
      if (tmp == null) {
        tmp = name;
      }
      return obj;
    });
    return mapped.sort((name, name2) => {
      const str = name.name;
      const str2 = name2.name;
      const formatted = str.toLowerCase();
      const formatted1 = str2.toLowerCase();
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
  }
  getLocale() {
    return this._chosenLocale;
  }
  getLocaleInfo() {
    const self = this;
    const _languages = this._languages;
    return _languages.find((code) => code.code === self._chosenLocale);
  }
  getDefaultLocale() {
    const obj = react_native;
    let str = obj.getSystemLocale();
    if (str == null) {
      str = c2;
    }
    const _languages = this._languages;
    const found = _languages.filter((enabled) => enabled.enabled);
    const mapped = found.map((code) => code.code);
    if (mapped.includes(str)) {
      return str;
    } else {
      let found2;
      const parts = str.split("-");
      const first = parts[0];
      if (mapped.includes(parts[0])) {
        found2 = first;
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
  }
  _loadMessagesForLocale(_requestedLocale) {
    let nextPromise;
    const self = this;
    let closure_0 = _requestedLocale;
    const _fetchMessagesResult = this._fetchMessages(_requestedLocale);
    if (_fetchMessagesResult instanceof Promise) {
      nextPromise = _fetchMessagesResult.then((result) => self._applyMessagesForLocale(result, _requestedLocale));
    } else {
      const result = self._applyMessagesForLocale(_fetchMessagesResult, _requestedLocale);
      nextPromise = Promise.resolve();
    }
    return nextPromise;
  }
  _applyMessagesForLocale(_fetchMessagesResult, locale) {
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
  }
  _findMessages(c2) {
    const _fetchMessagesResult = this._fetchMessages(c2);
    if (_fetchMessagesResult instanceof Promise) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Messages are still loading.");
      throw error;
    } else {
      return _fetchMessagesResult;
    }
  }
  _fetchMessages(c2) {
    const self = this;
    let closure_0 = c2;
    const tmp = c2 === c2 ? (() => {
      const error = new Error("Error Loading " + locale);
      throw error;
    }) : (() => {
      let _fetchMessagesResult;
      if (-1 === closure_0.indexOf("-")) {
        _fetchMessagesResult = self._fetchMessages(c2);
      } else {
        _fetchMessagesResult = self._fetchMessages(closure_0.split("-")[0]);
      }
      return _fetchMessagesResult;
    });
    try {
      let catchPromise;
      const _getMessagesResult = self._getMessages(c2);
      if (_getMessagesResult instanceof Promise) {
        catchPromise = promise.catch(tmp);
      } else {
        catchPromise = promise;
      }
      return catchPromise;
    } catch (err) {
      return tmp();
    }
  }
}
const prototype4 = I18N.prototype;
let result = size.fileFinishedImporting("../discord_common/js/packages/i18n/i18n.tsx");

export const getSystemLocale = react_native.getSystemLocale;
export { I18N };