// _runtime/01173_DEFAULT_LOCALE.js
import _slicedToArray from "metro/00032__.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";

const IntlManager = require;
class IntlManager {
  constructor(arg0) {
    self = this;
    self = this;
    DEFAULT_LOCALE = global.initialLocale;
    if (DEFAULT_LOCALE === undefined) {
      tmp = closure_1;
      DEFAULT_LOCALE = closure_1.DEFAULT_LOCALE;
    }
    DEFAULT_LOCALE2 = global.defaultLocale;
    if (DEFAULT_LOCALE2 === undefined) {
      tmp2 = closure_1;
      DEFAULT_LOCALE2 = closure_1.DEFAULT_LOCALE;
    }
    DEFAULT_FORMAT_CONFIG = global.formatConfig;
    if (DEFAULT_FORMAT_CONFIG === undefined) {
      tmp3 = closure_0;
      tmp4 = c2;
      DEFAULT_FORMAT_CONFIG = closure_0(c2[3]).DEFAULT_FORMAT_CONFIG;
    }
    flag = global.forceLookupMatcher;
    if (flag === undefined) {
      flag = false;
    }
    tmp5 = closure_4(self, IntlManager);
    self.onLocaleChange = (arg0) => {
      _self = arg0;
      let _localeSubscriptions = _self._localeSubscriptions;
      _localeSubscriptions.add(arg0);
      return () => {
        const _localeSubscriptions = self._localeSubscriptions;
        return _localeSubscriptions.delete(closure_0);
      };
    };
    self.currentLocale = DEFAULT_LOCALE;
    self.defaultLocale = DEFAULT_LOCALE2;
    self.formatConfig = DEFAULT_FORMAT_CONFIG;
    self._forceLookupMatcher = flag;
    items = [,];
    ({ currentLocale: arr[0], defaultLocale: arr[1] } = self);
    self.data = closure_0(c2[4]).makeDataFormatters(items, self.formatConfig, self._forceLookupMatcher);
    set = new Set();
    self._localeSubscriptions = set;
    return;
  }
}
const entry = {
  key: "withFormatters",
  value: function withFormatters(PlatformUtils) {
    const self = this;
    const entries = Object.entries(PlatformUtils);
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
      const self = this;
      ({ format, builder: exports } = arg0);
      closure_0 = format.bind(this);
      return (fn, arg1) => {
        let tmp = null;
        if (null != fn) {
          tmp = closure_0(fn(self.currentLocale), arg1, _exports);
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
      this.data = IntlManager(1156).makeDataFormatters(items, this.formatConfig, this._forceLookupMatcher);
      this.emitLocaleChange(currentLocale);
    },
  },
  {
    key: "emitLocaleChange",
    value: function emitLocaleChange(currentLocale) {
      for (const item10007 of tmp) {
        let item10007Result = item10007(arg0);
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
        str = fn(this.currentLocale).reserialize();
        const obj = fn(this.currentLocale);
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
      const obj = {
        Builder,
        nodes: ast.ast,
        locales: null,
        dataFormatters: this.data,
        formatConfig: this.formatConfig,
        values,
        keyPrefix: "",
      };
      const items = [,];
      ({ currentLocale: arr[0], defaultLocale: arr[1] } = this);
      obj.locales = items;
      return IntlManager(1159).bindFormatValues(obj);
    },
  },
];

export const DEFAULT_LOCALE = "en-US";
export const IntlManager = _createClass(IntlManager, items);
