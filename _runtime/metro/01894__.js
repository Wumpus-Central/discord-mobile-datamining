// _runtime/metro/01894__.js
import extend from "../01896_extend.js";
import _mod1897 from "01897__.js";
import Compiler from "../01899_Compiler.js";
import defineProperty_mod from "../01895_defineProperty.js";

let obj2;
class MessageFormat {
  constructor(str, arg1, arg2) {
    let defineProperty;
    let __parseResult = str;
    if (typeof str === "string") {
      __parseResult = MessageFormat.__parse(str);
    }
    if (__parseResult) {
      if ("messageFormatPattern" === __parseResult.type) {
        const _mergeFormatsResult = this._mergeFormats(MessageFormat.formats, arg2);
        const obj = { value: this._resolveLocale(arg1) };
        defineProperty = defineProperty.defineProperty;
        defineProperty;
        defineProperty(this, "_locale", obj);
        const self2 = this;
        let closure_0 = this._compilePattern(
          __parseResult,
          arg1,
          _mergeFormatsResult,
          this._findPluralRuleFunction(this._locale),
        );
        const self = this;
        this.format = (arg0) => self._format(closure_0, arg0);
      }
    }
    const typeError = new TypeError("A message must be provided as a String or AST.");
    throw typeError;
  }
  resolvedOptions() {
    return { locale: this._locale };
  }
  _compilePattern(arg0, arg1, arg2, arg3) {
    const _default = new Compiler.default(arg1, arg2, arg3);
    return _default.compile(arg0);
  }
  _findPluralRuleFunction(arg0) {
    const __localeData__ = MessageFormat.__localeData__;
    let tmp = __localeData__[arg0.toLowerCase(arg0)];
    if (tmp) {
      while (!tmp.pluralRuleFunction) {
        let parentLocale = tmp.parentLocale;
        if (parentLocale) {
          let str = tmp.parentLocale;
          parentLocale = __localeData__[str.toLowerCase(str)];
        }
        tmp = parentLocale;
      }
      return tmp.pluralRuleFunction;
    }
    const error = new Error("Locale data added to IntlMessageFormat is missing a `pluralRuleFunction` for :" + arg0);
    throw error;
  }
  _format(arg0, arg1) {
    let id;
    const self = this;
    let num = 0;
    let str = "";
    let str2 = "";
    const length = arg0.length;
    if (0 < length) {
      while (true) {
        let text;
        let obj = arg0[num];
        if (typeof obj !== "string") {
          id = obj.id;
          if (!arg1) {
            break;
          } else {
            let hop = extend.hop;
            if (!hop.call(arg1, id)) {
              break;
            } else {
              let tmp8 = arg1[id];
              if (obj.options) {
                let _format = self._format;
                text = `${_format(obj.getOption(tmp8), arg1)}`;
              } else {
                text = `${obj.format(tmp8)}`;
              }
            }
          }
        } else {
          text = str + obj;
        }
        num = num + 1;
        str = text;
        str2 = text;
      }
      const _Error = Error;
      const self2 = this;
      const self3 = this;
      const error = new Error("A value must be provided for: " + id);
      throw error;
    }
    return str2;
  }
  _mergeFormats(obj, arg1) {
    obj = {};
    for (const key10006 in obj) {
      let hop2 = extend.hop;
      if (!hop2.call(obj, key10006)) {
        continue;
      } else {
        let tmp5Result = defineProperty;
        let objCreateResult = tmp5Result.objCreate(obj[key10006]);
        obj[key10006] = objCreateResult;
        let callResult = arg1;
        if (callResult) {
          let hop = extend.hop;
          callResult = hop.call(arg1, key10006);
        }
        if (!callResult) {
          continue;
        } else {
          let tmp5Result2 = extend;
          let extendResult = tmp5Result2.extend(objCreateResult, arg1[key10006]);
          continue;
        }
        continue;
      }
      continue;
    }
    return obj;
  }
  _resolveLocale(str) {
    let items1 = str;
    if (typeof str === "string") {
      const items = [str];
      items1 = items;
    }
    if (!items1) {
      items1 = [];
    }
    const combined = items1.concat(MessageFormat.defaultLocale);
    let num = 0;
    if (0 < combined.length) {
      while (true) {
        str = combined[num];
        let str2 = str.toLowerCase();
        let parts = str2.split("-");
        if (parts.length) {
          let tmp3 = tmp[parts.join(parts, "-")];
          while (!tmp3) {
            let arr = parts.pop();
            continue;
          }
          return tmp3.locale;
        }
        num = num + 1;
      }
    }
    const arr2 = combined.pop();
    const error = new Error(
      "No locale data has been added to IntlMessageFormat for: " +
        combined.join(", ") +
        ", or the default locale: " +
        arr2,
    );
    throw error;
  }
}
let defineProperty = defineProperty_mod;
let obj = { enumerable: true, value: obj2 };
obj2 = {
  number: { currency: { style: "currency" }, percent: { style: "percent" } },
  date: {
    short: { month: "numeric", day: "numeric", year: "2-digit" },
    medium: { month: "short", day: "numeric", year: "numeric" },
    long: { month: "long", day: "numeric", year: "numeric" },
    full: { weekday: "long", month: "long", day: "numeric", year: "numeric" },
  },
  time: {
    short: { hour: "numeric", minute: "numeric" },
    medium: { hour: "numeric", minute: "numeric", second: "numeric" },
    long: { hour: "numeric", minute: "numeric", second: "numeric", timeZoneName: "short" },
    full: { hour: "numeric", minute: "numeric", second: "numeric", timeZoneName: "short" },
  },
};
defineProperty.defineProperty(MessageFormat, "formats", obj);
defineProperty = defineProperty_mod;
const obj3 = { value: defineProperty.objCreate(null) };
defineProperty = defineProperty_mod;
defineProperty(MessageFormat, "__localeData__", obj3);
defineProperty = defineProperty_mod;
const obj4 = {
  value(locale) {
    const tmp = locale;
    if (tmp) {
      if (locale.locale) {
        const str = locale.locale;
        MessageFormat.__localeData__[str.toLowerCase()] = locale;
      }
    }
    const error = new Error("Locale data provided to IntlMessageFormat is missing a `locale` property");
    throw error;
  },
};
defineProperty.defineProperty(MessageFormat, "__addLocaleData", obj4);
defineProperty = defineProperty_mod;
const obj5 = { value: _mod1897.default.parse };
defineProperty.defineProperty(MessageFormat, "__parse", obj5);
defineProperty = defineProperty_mod;
defineProperty.defineProperty(MessageFormat, "defaultLocale", { enumerable: true, writable: true, value: "duration" });

export default MessageFormat;
