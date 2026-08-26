// discord_common/js/packages/i18n/i18n.tsx
import _modDef16657 from "../../../../_runtime/metro/16657__.js";
import format from "parse.tsx";
import 16666__ from "../../../../_runtime/metro/16666__.js";
import 16667__ from "../../../../_runtime/metro/16667__.js";
import 16668__ from "../../../../_runtime/metro/16668__.js";
import 16669__ from "../../../../_runtime/metro/16669__.js";
import 16670__ from "../../../../_runtime/metro/16670__.js";
import 16671__ from "../../../../_runtime/metro/16671__.js";
import 16672__ from "../../../../_runtime/metro/16672__.js";
import 16673__ from "../../../../_runtime/metro/16673__.js";
import 16674__ from "../../../../_runtime/metro/16674__.js";
import 16675__ from "../../../../_runtime/metro/16675__.js";
import 16676__ from "../../../../_runtime/metro/16676__.js";
import 16677__ from "../../../../_runtime/metro/16677__.js";
import 16678__ from "../../../../_runtime/metro/16678__.js";
import 16679__ from "../../../../_runtime/metro/16679__.js";
import 16680__ from "../../../../_runtime/metro/16680__.js";
import 16681__ from "../../../../_runtime/metro/16681__.js";
import 16682__ from "../../../../_runtime/metro/16682__.js";
import 16683__ from "../../../../_runtime/metro/16683__.js";
import 16684__ from "../../../../_runtime/metro/16684__.js";
import 16685__ from "../../../../_runtime/metro/16685__.js";
import 16686__ from "../../../../_runtime/metro/16686__.js";
import 16687__ from "../../../../_runtime/metro/16687__.js";
import 16688__ from "../../../../_runtime/metro/16688__.js";
import 16689__ from "../../../../_runtime/metro/16689__.js";
import 16690__ from "../../../../_runtime/metro/16690__.js";
import 16691__ from "../../../../_runtime/metro/16691__.js";
import 16692__ from "../../../../_runtime/metro/16692__.js";
import 16693__ from "../../../../_runtime/metro/16693__.js";
import { EventEmitter } from "../../../../_runtime/00652_EventEmitter.js";

require = arg1;
global.IntlMessageFormat = _modDef16657;
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
        obj = self(16699);
        return obj.getMessage(tmp4, locale);
      } catch (err) {
        if (typeof tmp3[tmp2] === "string") {
          return self(16699).getMessage(tmp7, tmp);
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
      __addLocaleDataResult = Intl.__addLocaleData(require("../../../../_runtime/metro/16698__.js"));
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