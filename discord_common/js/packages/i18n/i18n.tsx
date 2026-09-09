// discord_common/js/packages/i18n/i18n.tsx
import getSystemLocale from "getSystemLocale.tsx";
import _modDef17266 from "../../../../_runtime/metro/17266__.js";
import _mod17307 from "../../../../_runtime/metro/17307__.js";
import parse from "parse.tsx";

require = fn;
global.IntlMessageFormat = _modDef17266;
const module_17275 = fn(17275);
const module_17276 = fn(17276);
const module_17277 = fn(17277);
const module_17278 = fn(17278);
const module_17279 = fn(17279);
const module_17280 = fn(17280);
const module_17281 = fn(17281);
const module_17282 = fn(17282);
const module_17283 = fn(17283);
const module_17284 = fn(17284);
const module_17285 = fn(17285);
const module_17286 = fn(17286);
const module_17287 = fn(17287);
const module_17288 = fn(17288);
const module_17289 = fn(17289);
const module_17290 = fn(17290);
const module_17291 = fn(17291);
const module_17292 = fn(17292);
const module_17293 = fn(17293);
const module_17294 = fn(17294);
const module_17295 = fn(17295);
const module_17296 = fn(17296);
const module_17297 = fn(17297);
const module_17298 = fn(17298);
const module_17299 = fn(17299);
const module_17300 = fn(17300);
const module_17301 = fn(17301);
const module_17302 = fn(17302);
delete tmp2[tmp];
if (typeof Intl === "undefined") {
  fn(17303);
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
            const _getParsedMessagesResult = applyArgumentsResult._getParsedMessages(
              closure_0,
              closure_0,
              applyArgumentsResult._refresh,
            );
            obj[closure_0] = _getParsedMessagesResult;
            return _getParsedMessagesResult;
          },
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
    tmp = new tmp(global, new.target);
    closure_0 = tmp;
    tmp._createProxy = function _createProxy() {
      if (_context === undefined) {
        _context = _context._context;
      }
      const proxy = new Proxy(
        {},
        {
          get(arg0, arg1) {
            let tmp = arg0[arg1];
            if (!tmp) {
              const _getParsedMessagesResult = _context._getParsedMessages(_context, arg1, _context._createProxy);
              arg0[arg1] = _getParsedMessagesResult;
              tmp = _getParsedMessagesResult;
            }
            return tmp;
          },
        },
      );
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
  const item = keys.forEach((item) => {
    delete tmp2[tmp];
  });
};
const EventEmitter = fn(568).EventEmitter;
_instance_members_initializer_I18N_ = function () {
  const self = this;
  this.loadPromise = Promise.resolve();
  this.resolveLanguageLoaded = function resolveLanguageLoaded() {};
  this._languages = [];
  this._chosenLocale = "";
  this._getParsedMessages = function _getParsedMessages(_context, arg1, _createProxy) {
    ({ defaultMessages, locale } = _context);
    if (typeof _context.messages[arg1] || defaultMessages[arg1] === "object") {
      let obj = { messages: tmp4, defaultMessages: defaultMessages[arg1], locale };
      return _createProxy(obj);
    } else {
      try {
        obj = self(17308);
        return obj.getMessage(tmp4, locale);
      } catch (err) {
        if (typeof tmp3[tmp2] === "string") {
          return self(17308).getMessage(tmp7, tmp);
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

export const getSystemLocale = fn(1338).getSystemLocale;
export { I18N };
