// === Module 1291: DEFAULT_LOCALE ===

// Module 1291 (DEFAULT_LOCALE)
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

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
      tmp3 = IntlManager;
      tmp4 = closure_2;
      DEFAULT_FORMAT_CONFIG = require("resolveFormatConfigOptions").DEFAULT_FORMAT_CONFIG;
    }
    flag = global.forceLookupMatcher;
    if (flag === undefined) {
      flag = false;
    }
    tmp5 = closure_4(self, self);
    self.onLocaleChange = (arg0) => {
      const _self = arg0;
      let _localeSubscriptions = _self._localeSubscriptions;
      _localeSubscriptions.add(arg0);
      return () => {
        _localeSubscriptions = _localeSubscriptions._localeSubscriptions;
        return _localeSubscriptions.delete(_localeSubscriptions);
      };
    };
    self.currentLocale = DEFAULT_LOCALE;
    self.defaultLocale = DEFAULT_LOCALE2;
    self.formatConfig = DEFAULT_FORMAT_CONFIG;
    self._forceLookupMatcher = flag;
    items = [, ];
    ({ currentLocale: arr[0], defaultLocale: arr[1] } = self);
    self.data = require("makeDataFormatters").makeDataFormatters(items, self.formatConfig, self._forceLookupMatcher);
    set = new Set();
    self._localeSubscriptions = set;
    return;
  }
}
let items = [
  {
    key: "withFormatters",
    value: function withFormatters(set) {
      const self = this;
      const entries = Object.entries(set);
      while (tmp2 !== undefined) {
        let tmp4 = callback;
        let tmp5 = callback(tmp3, 2);
        self[tmp5[0]] = self.makeFormatFunction(tmp5[1]);
        continue;
      }
      return self;
    }
  },
  {
    key: "makeFormatFunction",
    value: function makeFormatFunction(arg0) {
      const self = this;
      ({ format, builder: exports } = arg0);
      closure_0 = format.bind(this);
      return (arg0, arg1) => {
        let tmp = null;
        if (null != arg0) {
          tmp = callback(arg0(self.currentLocale), arg1, closure_1);
        }
        return tmp;
      };
    }
  },
  {
    key: "setLocale",
    value: function setLocale(currentLocale) {
      this.currentLocale = currentLocale;
      const items = [, ];
      ({ currentLocale: arr[0], defaultLocale: arr[1] } = this);
      this.data = IntlManager(1274).makeDataFormatters(items, this.formatConfig, this._forceLookupMatcher);
      this.emitLocaleChange(currentLocale);
    }
  },
  {
    key: "emitLocaleChange",
    value: function emitLocaleChange(currentLocale) {
      for (const item10007 of tmp) {
        let item10007Result = item10007(arg0);
        continue;
      }
    }
  },
  {
    key: "string",
    value: function string(arg0) {
      let str = "";
      if (null != arg0) {
        const self = this;
        str = arg0(this.currentLocale).reserialize();
        const obj = arg0(this.currentLocale);
      }
      return str;
    }
  },
  {
    key: "reserialize",
    value: function reserialize(arg0) {
      if (null == arg0) {
        return "";
      } else {
        const self = this;
        const obj = arg0(this.currentLocale);
        let reserializeResult = obj;
        if (typeof obj !== "string") {
          reserializeResult = obj.reserialize();
        }
        return reserializeResult;
      }
    }
  },
  {
    key: "bindFormatValues",
    value: function bindFormatValues(Builder, ast, values) {
      const items = [, ];
      ({ currentLocale: arr[0], defaultLocale: arr[1] } = this);
      return IntlManager(1277).bindFormatValues({ Builder, nodes: ast.ast, locales: items, dataFormatters: this.data, formatConfig: this.formatConfig, values, keyPrefix: "" });
    }
  }
];

export const DEFAULT_LOCALE = "en-US";
export const IntlManager = _createClass(IntlManager, items);