// === Module 1158: dataFormatterCache ===

// Module 1158 (dataFormatterCache)
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

class FormatterCache {
  constructor() {
    tmp = closure_0(this, FormatterCache);
    map = new Map();
    this.dateTime = map;
    map1 = new Map();
    this.duration = map1;
    map2 = new Map();
    this.list = map2;
    map3 = new Map();
    this.number = map3;
    map4 = new Map();
    this.pluralRules = map4;
    map5 = new Map();
    this.relativeTime = map5;
    return;
  }
}
_classCallCheck = FormatterCache;
const entry = {
  key: "getDateTimeFormatter",
  value: function getDateTimeFormatter() {
    return this._getCached(this.dateTime, HermesBuiltin.copyRestArgs(), (arg0) => Intl.DateTimeFormat(...arg0));
  }
};
const items = [
  entry,
  {
    key: "getDurationFormatter",
    value: function getDurationFormatter() {
      return this._getCached(this.duration, HermesBuiltin.copyRestArgs(), (arg0) => Intl.DurationFormat(...arg0));
    }
  },
  {
    key: "getListFormatter",
    value: function getListFormatter() {
      return this._getCached(this.list, HermesBuiltin.copyRestArgs(), (arg0) => Intl.ListFormat(...arg0));
    }
  },
  {
    key: "getNumberFormatter",
    value: function getNumberFormatter() {
      return this._getCached(this.number, HermesBuiltin.copyRestArgs(), (arg0) => Intl.NumberFormat(...arg0));
    }
  },
  {
    key: "getPluralRules",
    value: function getPluralRules() {
      return this._getCached(this.pluralRules, HermesBuiltin.copyRestArgs(), (arg0) => Intl.PluralRules(...arg0));
    }
  },
  {
    key: "getRelativeTimeFormatter",
    value: function getRelativeTimeFormatter() {
      return this._getCached(this.relativeTime, HermesBuiltin.copyRestArgs(), (arg0) => Intl.RelativeTimeFormat(...arg0));
    }
  },
  {
    key: "_getCached",
    value: function _getCached(dateTime, arg1, fn) {
      const _getKeyResult = this._getKey(arg1);
      value = dateTime.get(_getKeyResult);
      if (value) {
        return value;
      } else {
        const tmp4 = fn(arg1);
        const result = dateTime.set(_getKeyResult, tmp4);
        return tmp4;
      }
    }
  },
  {
    key: "_getKey",
    value: function _getKey() {
      return JSON.stringify(HermesBuiltin.copyRestArgs());
    }
  }
];

export const dataFormatterCache = new _createClass(FormatterCache, items)();