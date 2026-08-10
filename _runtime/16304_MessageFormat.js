// _runtime/16304_MessageFormat.js
import extend from "extend";
import extend from "extend";
import extend from "extend";
import extend from "extend";
import extend from "extend";
import extend from "extend";

class MessageFormat {
  constructor(arg0, arg1, arg2) {
    __parseResult = global;
    if (typeof global === "string") {
      tmp3 = MessageFormat;
      __parseResult = MessageFormat.__parse(global);
    }
    if (__parseResult) {
      str = "messageFormatPattern";
      if ("messageFormatPattern" === __parseResult.type) {
        self = this;
        tmp4 = require;
        tmp5 = importDefault;
        tmp6 = MessageFormat;
        _mergeFormatsResult = this._mergeFormats(MessageFormat.formats, importDefault);
        tmp8 = _compilePattern;
        tmp9 = self;
        obj = require("extend");
        obj = { value: null };
        obj[0] = this._resolveLocale(require);
        str2 = "_locale";
        definePropertyResult = obj.defineProperty(this, "_locale", obj);
        self2 = this;
        tmp11 = __parseResult;
        tmp12 = require;
        tmp13 = _mergeFormatsResult;
        _compilePattern = this._compilePattern(__parseResult, require, _mergeFormatsResult, this._findPluralRuleFunction(this._locale));
        self = this;
        this.format = (arg0) => self._format(closure_0, arg0);
        return;
      }
    }
    typeError = new TypeError("A message must be provided as a String or AST.");
    throw typeError;
  }
  resolvedOptions() {
    obj = { locale: this._locale };
    return obj;
  }
  _compilePattern(arg0, arg1, arg2, arg3) {
    _default = new require("StringFormat").default(require, importDefault, importAll);
    return _default.compile(global);
  }
  _findPluralRuleFunction(arg0) {
    __localeData__ = MessageFormat.__localeData__;
    tmp = __localeData__[global.toLowerCase(global)];
    if (tmp) {
      tmp2 = tmp;
      while (!tmp.pluralRuleFunction) {
        parentLocale = tmp.parentLocale;
        if (parentLocale) {
          str = tmp.parentLocale;
          parentLocale = __localeData__[str.toLowerCase(str)];
        }
        tmp = parentLocale;
      }
      return tmp.pluralRuleFunction;
    }
    error = new Error("Locale data added to IntlMessageFormat is missing a `pluralRuleFunction` for :" + global);
    throw error;
  }
  _format(arg0, arg1) {
    self = this;
    length = global.length;
    num = 0;
    str = "";
    str2 = "";
    if (0 < length) {
      while (true) {
        obj = global[num];
        tmp = str;
        tmp2 = num;
        if (typeof obj !== "string") {
          id = obj.id;
          if (!require) {
            break;
          } else {
            tmp3 = closure_0;
            tmp4 = closure_1;
            hop = require("extend").hop;
            call = hop.call;
            if (!(typeof call === "unknown" ? hop(id) : call(require, id))) {
              break;
            } else {
              tmp10 = require[id];
              if (obj.options) {
                text = `${tmp12(obj.getOption(tmp10), require)}`;
              } else {
                text = `${obj.format(tmp10)}`;
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
      tmp5 = globalThis;
      _Error = Error;
      str3 = "A value must be provided for: ";
      tmp6 = new.target;
      tmp7 = new.target;
      error = new Error("A value must be provided for: " + id);
      tmp9 = error;
      throw error;
    }
    return str2;
  }
  _mergeFormats(arg0, arg1) {
    obj = {};
    for (const key10006 in arg0) {
      tmp7 = key10006;
      tmp8 = closure_0;
      tmp9 = closure_1;
      hop2 = require("extend").hop;
      call2 = hop2.call;
      if (typeof call2 === "unknown") {
        hop2Result = hop2(key10006);
      } else {
        hop2Result = call2(arg0, key10006);
      }
      if (!hop2Result) {
        continue;
      } else {
        tmp8Result = require("extend");
        objCreateResult = tmp8Result.objCreate(arg0[key10006]);
        obj[key10006] = objCreateResult;
        tmp3 = arg1;
        if (!arg1) {
          if (!arg1) {
            continue;
          } else {
            tmp8Result1 = require("extend");
            extendResult = tmp8Result1.extend(objCreateResult, arg1[key10006]);
            continue;
          }
          continue;
        } else {
          hop = require("extend").hop;
          call = hop.call;
          if (typeof call === "unknown") {
            hopResult = hop(key10006);
          } else {
            hopResult = call(arg1, key10006);
          }
          tmp5 = hopResult;
        }
      }
      continue;
    }
    return obj;
  }
  _resolveLocale(arg0) {
    items1 = global;
    if (typeof global === "string") {
      items = [];
      items[0] = global;
      items1 = items;
    }
    if (!items1) {
      items1 = [];
    }
    combined = items1.concat(MessageFormat.defaultLocale);
    length = combined.length;
    num = 0;
    if (0 < length) {
      while (true) {
        str = combined[num];
        str2 = str.toLowerCase();
        parts = str2.split("-");
        tmp2 = num;
        if (parts.length) {
          tmp3 = tmp[parts.join(parts, "-")];
          while (!tmp3) {
            arr = parts.pop();
            continue;
          }
          return tmp3.locale;
        }
        num = num + 1;
      }
    }
    arr1 = combined.pop();
    error = new Error("No locale data has been added to IntlMessageFormat for: " + combined.join(", ") + ", or the default locale: " + arr1);
    throw error;
  }
}
extend.defineProperty(MessageFormat, "formats", { enumerable: true, value: { number: { currency: { style: "currency" }, percent: { style: "percent" } }, date: { short: { month: "numeric", day: "numeric", year: "2-digit" }, medium: { month: "short", day: "numeric", year: "numeric" }, long: { month: "long", day: "numeric", year: "numeric" }, full: { weekday: "long", month: "long", day: "numeric", year: "numeric" } }, time: { short: { hour: "numeric", minute: "numeric" }, medium: { hour: "numeric", minute: "numeric", second: "numeric" }, long: { hour: "numeric", minute: "numeric", second: "numeric", timeZoneName: "short" }, full: { hour: "numeric", minute: "numeric", second: "numeric", timeZoneName: "short" } } } });
let obj = { value: null };
obj[0] = extend.objCreate(null);
extend.defineProperty(MessageFormat, "__localeData__", obj);
obj = {
  value(locale) {
    if (locale) {
      if (locale.locale) {
        MessageFormat.__localeData__[locale.locale.toLowerCase()] = locale;
      }
    }
    const error = new Error("Locale data provided to IntlMessageFormat is missing a `locale` property");
    throw error;
  }
};
extend.defineProperty(MessageFormat, "__addLocaleData", obj);
extend.defineProperty(MessageFormat, "__parse", { value: require("SyntaxError").default.parse });
extend.defineProperty(MessageFormat, "defaultLocale", { enumerable: true, writable: true, value: "sa" });

export default MessageFormat;