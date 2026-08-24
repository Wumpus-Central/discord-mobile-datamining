// === Module 16444: getMessages ===

// Module 16444 (getMessages)
import _modDef16445 from "module_16445" /* 16445 */;
import format from "format" /* 16487 */;
import module_16454 from "module_16454" /* 16454 */;
import module_16455 from "module_16455" /* 16455 */;
import module_16456 from "module_16456" /* 16456 */;
import module_16457 from "module_16457" /* 16457 */;
import module_16458 from "module_16458" /* 16458 */;
import module_16459 from "module_16459" /* 16459 */;
import module_16460 from "module_16460" /* 16460 */;
import module_16461 from "module_16461" /* 16461 */;
import module_16462 from "module_16462" /* 16462 */;
import module_16463 from "module_16463" /* 16463 */;
import module_16464 from "module_16464" /* 16464 */;
import module_16465 from "module_16465" /* 16465 */;
import module_16466 from "module_16466" /* 16466 */;
import module_16467 from "module_16467" /* 16467 */;
import module_16468 from "module_16468" /* 16468 */;
import module_16469 from "module_16469" /* 16469 */;
import module_16470 from "module_16470" /* 16470 */;
import module_16471 from "module_16471" /* 16471 */;
import module_16472 from "module_16472" /* 16472 */;
import module_16473 from "module_16473" /* 16473 */;
import module_16474 from "module_16474" /* 16474 */;
import module_16475 from "module_16475" /* 16475 */;
import module_16476 from "module_16476" /* 16476 */;
import module_16477 from "module_16477" /* 16477 */;
import module_16478 from "module_16478" /* 16478 */;
import module_16479 from "module_16479" /* 16479 */;
import module_16480 from "module_16480" /* 16480 */;
import module_16481 from "module_16481" /* 16481 */;
import { EventEmitter } from "EventEmitter" /* 652 */;

require = arg1;
global.IntlMessageFormat = _modDef16445;
delete tmp2[tmp];
if (typeof Intl === "undefined") {
  require("_default2");
}
let c2 = "en-US";
class Provider {
  constructor(arg0) {
    obj = Object.create(new.target.prototype);
    obj = { messages: {}, defaultMessages: {}, locale: c2 };
    obj[0] = obj;
    obj[1] = {};
    obj._getParsedMessages = global;
    return obj;
  }
}
Provider.prototype["getMessages"] = function getMessages() {
  return this._parsedMessages;
};
class LazyPropertyProvider extends Provider {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult._refresh = function _refresh(defaultMessages, _parsedMessages) {
      closure_0 = defaultMessages;
      let obj = _parsedMessages;
      if (_parsedMessages === undefined) {
        obj = {};
      }
      const keys = Object.keys(defaultMessages.defaultMessages);
      const item = keys.forEach((arg0) => {
        closure_0 = arg0;
        obj = {
          configurable: true,
          get() {
            delete tmp2[tmp];
            const _getParsedMessagesResult = closure_0._getParsedMessages(closure_0, closure_0, closure_0._refresh);
            closure_1_1[closure_0] = _getParsedMessagesResult;
            return _getParsedMessagesResult;
          }
        };
        Object.defineProperty(obj, arg0, obj);
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
    tmp = new tmp(global, new.target);
    // ThrowIfThisInitialized (0x7c)
    closure_0 = tmp;
    tmp._createProxy = function _createProxy(_context) {
      if (_context === undefined) {
        _context = _context._context;
      }
      const proxy = new Proxy({}, {
        get(arg0, closure_0) {
          let tmp = arg0[closure_0];
          if (!tmp) {
            const _getParsedMessagesResult = _context._getParsedMessages(_context, closure_0, _context._createProxy);
            arg0[closure_0] = _getParsedMessagesResult;
            tmp = _getParsedMessagesResult;
          }
          return tmp;
        }
      });
      return proxy;
    };
    tmp._parsedMessages = tmp._createProxy(tmp._context);
    return tmp;
  }
}
ProxyProvider.prototype["refresh"] = function refresh(arg0) {
  const self = this;
  const merged = Object.assign(this._context, arg0);
  const keys = Object.keys(this._parsedMessages);
  const item = keys.forEach((arg0) => {
    delete tmp2[tmp];
  });
};
_instance_members_initializer_I18N_ = function() {
  const self = this;
  this.loadPromise = Promise.resolve();
  this.resolveLanguageLoaded = function resolveLanguageLoaded() {

  };
  this._languages = [];
  this._chosenLocale = "";
  this._getParsedMessages = function _getParsedMessages(_context, closure_0, _createProxy) {
    ({ defaultMessages, locale } = _context);
    if (typeof _context.messages[closure_0] || defaultMessages[closure_0] === "object") {
      let obj = { messages: null, defaultMessages: null, locale: null };
      obj[0] = tmp4;
      obj[1] = defaultMessages[closure_0];
      obj[2] = locale;
      return _createProxy(obj);
    } else {
      try {
        obj = self(16487);
        return obj.getMessage(tmp4, locale);
      } catch (err) {
        if (typeof tmp3[tmp2] === "string") {
          return self(16487).getMessage(tmp7, tmp);
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
    // ThrowIfThisInitialized (0x7c)
    closure_0 = tmp6;
    tmp7 = _instance_members_initializer_I18N_();
    promise = new Promise((resolveLanguageLoaded) => {
      tmp.resolveLanguageLoaded = resolveLanguageLoaded;
    });
    tmp6.initialLanguageLoad = promise;
    if (Intl.__addLocaleData) {
      _Intl = Intl;
      tmp9 = closure_0;
      tmp10 = closure_1;
      __addLocaleDataResult = Intl.__addLocaleData(require("module_16486"));
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
prototype["updateMessagesForExperiment"] = function updateMessagesForExperiment(closure_1_2) {
  let self = this;
  self = this;
  closure_1 = closure_1_2;
  closure_0 = arg1;
  const _fetchMessagesResult = this._fetchMessages(closure_1_2);
  if (_fetchMessagesResult instanceof Promise) {
    _fetchMessagesResult.then((arg0) => {
      const result = self._applyMessagesForLocale(callback(arg0), closure_1);
    });
  } else {
    let result = self._applyMessagesForLocale(arg1(_fetchMessagesResult), closure_1_2);
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
prototype["setUpdateRules"] = function setUpdateRules(arg0) {
  format.setUpdateRules(arg0);
};
prototype["getLanguages"] = function getLanguages() {
  return this._languages;
};
prototype["getAvailableLocales"] = function getAvailableLocales() {
  const self = this;
  const _languages = this._languages;
  const found = _languages.filter((enabled) => enabled.enabled);
  const mapped = found.map((arg0) => {
    ({ code, name } = arg0);
    const obj = { value: code, name, localizedName: null };
    let tmp = self.Messages[code];
    if (tmp == null) {
      tmp = name;
    }
    obj[2] = tmp;
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
  let str = parts(665).getSystemLocale();
  if (str == null) {
    str = c2;
  }
  const _languages = this._languages;
  const found = _languages.filter((enabled) => enabled.enabled);
  const mapped = found.map((code) => code.code);
  if (mapped.includes(str)) {
    return str;
  } else {
    parts = str.split("-");
    const first = parts[0];
    if (mapped.includes(parts[0])) {
      let found2 = first;
    } else {
      if ("zh" === first) {
        if (parts.length > 1) {
          if ("Hant" === parts[1]) {
            let found1 = mapped.find((arg0) => "zh-TW" === arg0);
            if (found1 == null) {
              found1 = c2;
            }
            found2 = found1;
          }
        }
      }
      found2 = mapped.find((arg0) => arg0.split("-")[0] === parts[0]);
      if (found2 == null) {
        found2 = c2;
      }
    }
    return found2;
  }
  const obj = parts(665);
};
prototype["_loadMessagesForLocale"] = function _loadMessagesForLocale(_requestedLocale) {
  let self = this;
  self = this;
  closure_0 = _requestedLocale;
  const _fetchMessagesResult = this._fetchMessages(_requestedLocale);
  if (_fetchMessagesResult instanceof Promise) {
    let nextPromise = _fetchMessagesResult.then((_fetchMessagesResult) => self._applyMessagesForLocale(_fetchMessagesResult, closure_0));
  } else {
    const result = self._applyMessagesForLocale(_fetchMessagesResult, _requestedLocale);
    nextPromise = Promise.resolve();
  }
  return nextPromise;
};
prototype["_applyMessagesForLocale"] = function _applyMessagesForLocale(_fetchMessagesResult, closure_0) {
  const self = this;
  let _findMessagesResult = arg2;
  if (arg2 === undefined) {
    _findMessagesResult = self._findMessages(c2);
  }
  if (self._requestedLocale === closure_0) {
    const _provider = self._provider;
    const obj = { messages: null, defaultMessages: null, locale: null };
    obj[0] = _fetchMessagesResult;
    obj[1] = _findMessagesResult;
    obj[2] = closure_0;
    _provider.refresh(obj);
    const languageLoaded = self.resolveLanguageLoaded();
  }
};
prototype["_findMessages"] = function _findMessages(c2) {
  const _fetchMessagesResult = this._fetchMessages(c2);
  if (_fetchMessagesResult instanceof Promise) {
    const _Error = Error;
    error = new Error("Messages are still loading.");
    throw error;
  } else {
    return _fetchMessagesResult;
  }
};
prototype["_fetchMessages"] = function _fetchMessages(closure_1_2) {
  let self = this;
  self = this;
  closure_0 = closure_1_2;
  try {
    const _getMessagesResult = self._getMessages(closure_1_2);
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
let result = require("set").fileFinishedImporting("../discord_common/js/packages/i18n/i18n.tsx");

export const getSystemLocale = require("getSystemLocale").getSystemLocale;
export { I18N };