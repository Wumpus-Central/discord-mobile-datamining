// _runtime/01183_DEFAULT_LOCALE.js
import DEFAULT_FORMAT_CONFIG2 from "01166_DEFAULT_FORMAT_CONFIG.js";
import _mod1167 from "metro/01167__.js";
import FormatBuilder from "01169_FormatBuilder.js";
import _slicedToArray from "metro/00032__slicedToArray.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";

class IntlManager {
  constructor(initialLocale) {
    const self = this;
    let DEFAULT_LOCALE = initialLocale.initialLocale;
    if (DEFAULT_LOCALE === undefined) {
      DEFAULT_LOCALE = exports.DEFAULT_LOCALE;
    }
    let DEFAULT_LOCALE2 = initialLocale.defaultLocale;
    if (DEFAULT_LOCALE2 === undefined) {
      DEFAULT_LOCALE2 = exports.DEFAULT_LOCALE;
    }
    let DEFAULT_FORMAT_CONFIG = initialLocale.formatConfig;
    if (DEFAULT_FORMAT_CONFIG === undefined) {
      DEFAULT_FORMAT_CONFIG = _mod1167.DEFAULT_FORMAT_CONFIG;
    }
    let flag = initialLocale.forceLookupMatcher;
    if (flag === undefined) {
      flag = false;
    }
    _classCallCheck(self, IntlManager);
    self.onLocaleChange = (arg0) => {
      let closure_0;
      _localeSubscriptions = arg0;
      _localeSubscriptions = _localeSubscriptions._localeSubscriptions;
      _localeSubscriptions.add(arg0);
      return () => {
        _localeSubscriptions = self._localeSubscriptions;
        return _localeSubscriptions.delete(closure_0);
      };
    };
    self.currentLocale = DEFAULT_LOCALE;
    self.defaultLocale = DEFAULT_LOCALE2;
    self.formatConfig = DEFAULT_FORMAT_CONFIG;
    self._forceLookupMatcher = flag;
    const items = [,];
    ({ currentLocale: arr[0], defaultLocale: arr[1] } = self);
    self.data = DEFAULT_FORMAT_CONFIG2.makeDataFormatters(items, self.formatConfig, self._forceLookupMatcher);
    self._localeSubscriptions = new Set();
    new Set();
  }
}
const entry = {
  key: "withFormatters",
  value: function withFormatters(arg0) {
    const self = this;
    const entries = Object.entries(arg0);
    const tmp2 = entries[Symbol.iterator]();
    while (tmp2 !== undefined) {
      let tmp5 = _slicedToArray(tmp3, 2);
      self[tmp5[0]] = self.makeFormatFunction(tmp5[1]);
      continue;
    }
    return self;
  },
};
let items = [
  entry,
  {
    key: "makeFormatFunction",
    value: function makeFormatFunction(arg0) {
      let format;
      const self = this;
      ({ format, builder: exports } = arg0);
      let closure_0 = format.bind(this);
      return (fn, arg1) => {
        let tmp = null;
        if (null != fn) {
          tmp = closure_0(fn(self.currentLocale), arg1, exports);
        }
        return tmp;
      };
    },
  },
  {
    key: "setLocale",
    value: function setLocale(currentLocale) {
      this.currentLocale = currentLocale;
      const items = [,];
      ({ currentLocale: arr[0], defaultLocale: arr[1] } = this);
      this.data = DEFAULT_FORMAT_CONFIG2.makeDataFormatters(items, this.formatConfig, this._forceLookupMatcher);
      this.emitLocaleChange(currentLocale);
    },
  },
  {
    key: "emitLocaleChange",
    value: function emitLocaleChange(currentLocale) {
      const _localeSubscriptions = this._localeSubscriptions;
      for (const item10007 of _localeSubscriptions) {
        let item10007Result = item10007(currentLocale);
        continue;
      }
    },
  },
  {
    key: "string",
    value: function string(fn) {
      let str = "";
      if (null != fn) {
        const self = this;
        const obj = fn(this.currentLocale);
        str = obj.reserialize();
      }
      return str;
    },
  },
  {
    key: "reserialize",
    value: function reserialize(fn) {
      if (null == fn) {
        return "";
      } else {
        const self = this;
        const obj = fn(this.currentLocale);
        let reserializeResult = obj;
        if (typeof obj !== "string") {
          reserializeResult = obj.reserialize();
        }
        return reserializeResult;
      }
    },
  },
  {
    key: "bindFormatValues",
    value: function bindFormatValues(Builder, ast, values) {
      let items;
      const obj = {
        Builder,
        nodes: ast.ast,
        locales: items,
        dataFormatters: this.data,
        formatConfig: this.formatConfig,
        values,
        keyPrefix: "",
      };
      items = [,];
      ({ currentLocale: arr[0], defaultLocale: arr[1] } = this);
      return FormatBuilder.bindFormatValues(obj);
    },
  },
];
const DEFAULT_LOCALE_export = "en-US";
const IntlManager_export = _createClass(IntlManager, items);

export { DEFAULT_LOCALE_export as DEFAULT_LOCALE };
export { IntlManager_export as IntlManager };
