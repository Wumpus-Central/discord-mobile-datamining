// _runtime/14279_GetOption.js
import closure_2 from "metro/00041__classCallCheck.js";
import closure_3 from "metro/00042__createClass.js";

let require = arg1;
function GetOption(obj, arg1, arg2, arr) {
  if (typeof obj !== "object") {
    const _TypeError2 = TypeError;
    const typeError = new TypeError("Options must be an object");
    throw typeError;
  } else {
    require = tmp19;
    if (undefined !== obj[arg1]) {
      let tmp2 = tmp19;
      if ("boolean" === "string") {
        const _Boolean = Boolean;
        const BooleanResult = Boolean(tmp19);
        require = BooleanResult;
        tmp2 = BooleanResult;
      }
      let tmp5 = tmp2;
      if (typeof tmp2 === "symbol") {
        const _TypeError = TypeError;
        throw TypeError("Cannot convert a Symbol value to a string");
      } else {
        const _String = String;
        const StringResult = String(tmp2);
        require = StringResult;
        tmp5 = StringResult;
      }
      if (arr.filter((arg0) => arg0 == closure_0).length) {
        return tmp5;
      } else {
        const _RangeError = RangeError;
        const _HermesInternal = HermesInternal;
        const rangeError = new RangeError("" + tmp5 + " is not within " + arr.join(", "));
        throw rangeError;
      }
    } else {
      return arg4;
    }
  }
}
function memoize(arg0, cache) {
  return cache.strategy
    ? cache.strategy
    : strategyDefault(arg0, { cache: cache.cache || closure_10, serializer: cache.serializer || serializerDefault });
}
function monadic(call, get, arg2, g_v) {
  let tmp2 = g_v;
  if (!tmp) {
    tmp2 = arg2(g_v);
  }
  const value = get.get(tmp2);
  if (undefined !== value) {
    return value;
  } else {
    const self = this;
    let result = call;
    call = call.call;
    const tmp6 = typeof call === "unknown" ? result(g_v) : call(self, g_v);
    result = get.set(tmp2, tmp6);
  }
}
function variadic(apply, get) {
  const call = slice.call;
  if (typeof call === "unknown") {
    let substr = slice(3);
  } else {
    substr = call(arguments, 3);
  }
  const tmp3 = arg2(substr);
  let value = get.get(tmp3);
  if (undefined === value) {
    const self = this;
    const applyResult = apply.apply(this, substr);
    const result = get.set(tmp3, applyResult);
    value = applyResult;
  }
  return value;
}
function strategyDefault(c165, cache) {
  cache = cache.cache;
  return 1 === c165.length ? monadic : variadic.bind(this, c165, cache.create(), cache.serializer);
}
function isLiteralPart(type) {
  return "literal" === type.type;
}
function invariant(arg0, arg1) {
  {
    let _Error = Error;
  }
  if (!arg0) {
    _Error = new _Error(arg1);
    throw _Error;
  }
}
function validateInstance(arg0, arg1) {
  if (!(arg0 instanceof obj)) {
    const _TypeError = TypeError;
    const _String = String;
    const _HermesInternal = HermesInternal;
    const typeError = new TypeError(
      "Method Intl.ListFormat.prototype." + "format" + " called on incompatible receiver " + String(arg0),
    );
    throw typeError;
  }
}
function stringListFromIterable(obj) {
  if (typeof obj !== "object") {
    return [];
  } else {
    const items = [];
    const _Symbol = Symbol;
    const iter = obj[Symbol.iterator]();
    const iter2 = iter.next();
    let iter3 = iter2;
    if (!iter2.done) {
      while (typeof iter3.value === "string") {
        let arr = items.push(iter3.value);
        let iter4 = iter.next();
        iter3 = iter4;
      }
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Iterable yielded " + iter3.value + " which is not a string");
      throw typeError;
    }
    return items;
  }
}
function createPartsFromList(__INTERNAL_SLOT_MAP__, self) {
  if (0 === arg2.length) {
    return [];
  } else if (2 === length) {
    obj = { 0: null, 1: null };
    obj = { type: "element", value: null };
    obj[1] = arg2[0];
    obj[0] = obj;
    obj1 = { type: "element", value: null };
    obj1[1] = arg2[1];
    obj[1] = obj1;
    return deconstructPattern(
      (function getMultiInternalSlots(__INTERNAL_SLOT_MAP__, self, locale) {
        const substr = [...arguments].slice();
        c0 = undefined;
        const value = __INTERNAL_SLOT_MAP__.get(self);
        c0 = value;
        if (value) {
          const _Object = Object;
          return substr.reduce((arg0, arg1) => {
            arg0[arg1] = _undefined[arg1];
            return arg0;
          }, Object.create(null));
        } else {
          const _TypeError = TypeError;
          const _HermesInternal = HermesInternal;
          const typeError = new TypeError("" + self + " InternalSlot has not been initialized");
          throw typeError;
        }
      })(__INTERNAL_SLOT_MAP__, self, "templatePair").templatePair,
      obj,
    );
  } else {
    const obj2 = { type: "element", value: null };
    obj2[1] = arg2[length - 1];
    let diff = length - 2;
    let tmpResult = obj2;
    let tmp6 = obj2;
    if (0 <= diff) {
      do {
        let tmp2 = diff;
        let tmp3 = tmpResult;
        let str = "templateStart";
        let tmp = deconstructPattern;
        if (0 !== diff) {
          let str2 = "templateEnd";
          if (diff < length - 2) {
            str2 = "templateMiddle";
          }
          str = str2;
        }
        obj = { 0: null, 1: null };
        let obj3 = { type: "element", value: null };
        obj3[1] = arg2[diff];
        obj[0] = obj3;
        obj[1] = tmpResult;
        tmpResult = tmp(
          (function getMultiInternalSlots(__INTERNAL_SLOT_MAP__, self, locale) {
            const substr = [...arguments].slice();
            c0 = undefined;
            const value = __INTERNAL_SLOT_MAP__.get(self);
            c0 = value;
            if (value) {
              const _Object = Object;
              return substr.reduce((arg0, arg1) => {
                arg0[arg1] = _undefined[arg1];
                return arg0;
              }, Object.create(null));
            } else {
              const _TypeError = TypeError;
              const _HermesInternal = HermesInternal;
              const typeError = new TypeError("" + self + " InternalSlot has not been initialized");
              throw typeError;
            }
          })(__INTERNAL_SLOT_MAP__, self, str)[str],
          obj,
        );
        diff = diff - 1;
        tmp6 = tmpResult;
      } while (0 <= diff);
    }
    return tmp6;
  }
}
function deconstructPattern(templatePair, arg1) {
  let items = [];
  const iter = (function PartitionPattern(arr) {
    const items = [];
    let index = arr.indexOf("{");
    let num = 0;
    if (index < arr.length) {
      let num4 = 0;
      num = 0;
      if (index > -1) {
        const index1 = arr.indexOf("}", index);
        const _HermesInternal = HermesInternal;
        const combined = "Invalid pattern " + arr;
        while (tmp4) {
          if (index > num4) {
            obj = { type: "literal", value: null };
            obj[1] = arr.substring(num4, index);
            arr = items.push(obj);
          }
          obj = { type: null, value: "Array" };
          obj[0] = arr.substring(index + 1, index1);
          arr = items.push(obj);
          let sum = index1 + 1;
          let index2 = arr.indexOf("{", sum);
          num = sum;
          if (index2 < arr.length) {
            num4 = sum;
            num = sum;
            index = index2;
          }
        }
        error = new Error(combined);
        throw error;
      }
    }
    if (num < arr.length) {
      obj = { type: "literal", value: null };
      obj[1] = arr.substring(num, length);
      items.push(obj);
    }
    return items;
  })(templatePair)[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let type = nextResult.type;
    let tmp3 = isLiteralPart;
    let iter2 = nextResult;
    if (isLiteralPart(nextResult)) {
      obj = { type: "literal", value: null };
      let tmp19 = nextResult;
      obj[1] = iter2.value;
      let arr = items.push(obj);
    } else {
      let tmp4 = invariant;
      let tmp5 = type;
      let _HermesInternal = HermesInternal;
      let tmp6 = type in arg1;
      let tmp7 = invariant(tmp6, "" + type + " is missing from placables");
      let tmp8 = arg1[type];
      let tmp9 = tmp8;
      let _Array = Array;
      let push = items.push;
      if (Array.isArray(tmp8)) {
        let items1 = [];
        let tmp12 = items1;
        let tmp13 = tmp9;
        let num = 0;
        let arraySpreadResult = HermesBuiltin.arraySpread(tmp10, 0);
        let tmp15 = push;
        let tmp16 = items1;
        let tmp17 = items;
        let applyResult = HermesBuiltin.apply(items1, items);
      } else {
        arr = push(tmp9);
      }
    }
    continue;
  }
  return items;
}
function serializerDefault() {
  return JSON.stringify(arguments);
}
let closure_9 = (() => {
  class ObjectWithoutPrototypeCache {
    constructor() {
      tmp = closure_1_2(this, ObjectWithoutPrototypeCache);
      this.cache = Object.create(null);
      return;
    }
  }
  const items = [
    {
      key: "get",
      value: function get(arg0) {
        return this.cache[arg0];
      },
    },
    {
      key: "set",
      value: function set(arg0, arg1) {
        this.cache[arg0] = arg1;
      },
    },
  ];
  return callback(ObjectWithoutPrototypeCache, items);
})();
let closure_10 = {
  create() {
    return new closure_9();
  },
};
function strategyVariadic(c165, cache) {
  cache = cache.cache;
  return variadic.bind(this, c165, cache.create(), cache.serializer);
}
memoize(() => Intl.NumberFormat(...HermesBuiltin.copyRestArgs()), { strategy: strategyVariadic });
memoize(() => Intl.PluralRules(...HermesBuiltin.copyRestArgs()), { strategy: strategyVariadic });
memoize(() => Intl.Locale(...HermesBuiltin.copyRestArgs()), { strategy: strategyVariadic });
memoize(() => Intl.ListFormat(...HermesBuiltin.copyRestArgs()), { strategy: strategyVariadic });
let obj = (() => {
  class ListFormat {
    constructor(arg0, arg1) {
      self = this;
      tmp = ListFormat;
      tmp2 = closure_1_2(this, ListFormat);
      constructor = undefined;
      if (this) {
        if (self instanceof tmp) {
          constructor = self.constructor;
        }
      }
      if (constructor) {
        __INTERNAL_SLOT_MAP__ = tmp.__INTERNAL_SLOT_MAP__;
        if (!__INTERNAL_SLOT_MAP__.get(self)) {
          tmp9 = globalThis;
          _Object = Object;
          tmp10 = null;
          result = __INTERNAL_SLOT_MAP__.set(self, Object.create(null));
        }
        tmp12 = arg0;
        obj1 = arg1;
        flag = true;
        __INTERNAL_SLOT_MAP__.get(self).initializedListFormat = true;
        tmp14 = globalThis;
        _Intl = Intl;
        canonicalLocales = Intl.getCanonicalLocales(arg0);
        _Object2 = Object;
        tmp16 = null;
        obj = Object.create(null);
        if (undefined === arg1) {
          _Object3 = Object;
          obj1 = Object.create(null);
        } else if (typeof obj1 !== "object") {
          _TypeError2 = TypeError;
          tmp49 = new.target;
          str13 = "Options must be an object";
          tmp50 = new.target;
          typeError = new TypeError("Options must be an object");
          tmp52 = typeError;
          throw typeError;
        }
        tmp18 = closure_1_4;
        str2 = "best fit";
        str3 = "string";
        str4 = "localeMatcher";
        num = 0;
        tmp19 = obj1;
        str5 = "string";
        obj.localeMatcher = closure_1_4(obj1, "localeMatcher", "string", ["best fit", "lookup"], "best fit");
        localeData = tmp.localeData;
        tmp20 = ListFormat;
        tmp21 = closure_1_1;
        obj = ListFormat(closure_1_1[2]);
        tmp22 = obj;
        tmp23 = canonicalLocales;
        tmp24 = obj;
        tmp25 = localeData;
        ResolveLocaleResult = obj.ResolveLocale(
          tmp.availableLocales,
          canonicalLocales,
          obj,
          tmp.relevantExtensionKeys,
          localeData,
          tmp.getDefaultLocale,
        );
        __INTERNAL_SLOT_MAP__2 = tmp.__INTERNAL_SLOT_MAP__;
        tmp27 = obj1;
        if (!__INTERNAL_SLOT_MAP__2.get(self)) {
          _Object4 = Object;
          result1 = __INTERNAL_SLOT_MAP__2.set(self, Object.create(null));
        }
        __INTERNAL_SLOT_MAP__2.get(self).locale = ResolveLocaleResult.locale;
        str6 = "conjunction";
        str7 = "type";
        num2 = 0;
        tmp29 = obj1;
        str8 = "string";
        tmp18Result = tmp18(tmp27, "type", "string", ["conjunction", "disjunction", "unit"], "conjunction");
        __INTERNAL_SLOT_MAP__3 = tmp.__INTERNAL_SLOT_MAP__;
        if (!__INTERNAL_SLOT_MAP__3.get(self)) {
          _Object5 = Object;
          result2 = __INTERNAL_SLOT_MAP__3.set(self, Object.create(null));
        }
        __INTERNAL_SLOT_MAP__3.get(self).type = tmp18Result;
        str9 = "long";
        str10 = "style";
        num3 = 0;
        tmp32 = obj1;
        str11 = "string";
        tmp18Result1 = tmp18(tmp27, "style", "string", ["long", "short", "narrow"], "long");
        __INTERNAL_SLOT_MAP__4 = tmp.__INTERNAL_SLOT_MAP__;
        if (!__INTERNAL_SLOT_MAP__4.get(self)) {
          _Object6 = Object;
          result3 = __INTERNAL_SLOT_MAP__4.set(self, Object.create(null));
        }
        __INTERNAL_SLOT_MAP__4.get(self).style = tmp18Result1;
        dataLocale = ResolveLocaleResult.dataLocale;
        tmp35 = localeData[dataLocale];
        _HermesInternal = HermesInternal;
        str12 = "Missing locale data for ";
        tmp36 = !tmp35;
        combined = "Missing locale data for " + dataLocale;
        if (!tmp36) {
          tmp44 = tmp35[tmp18Result][tmp18Result1];
          __INTERNAL_SLOT_MAP__5 = tmp.__INTERNAL_SLOT_MAP__;
          if (!__INTERNAL_SLOT_MAP__5.get(self)) {
            _Object7 = Object;
            result4 = __INTERNAL_SLOT_MAP__5.set(self, Object.create(null));
          }
          __INTERNAL_SLOT_MAP__5.get(self).templatePair = tmp44.pair;
          __INTERNAL_SLOT_MAP__6 = tmp.__INTERNAL_SLOT_MAP__;
          if (!__INTERNAL_SLOT_MAP__6.get(self)) {
            _Object8 = Object;
            result5 = __INTERNAL_SLOT_MAP__6.set(self, Object.create(null));
          }
          __INTERNAL_SLOT_MAP__6.get(self).templateStart = tmp44.start;
          __INTERNAL_SLOT_MAP__7 = tmp.__INTERNAL_SLOT_MAP__;
          if (!__INTERNAL_SLOT_MAP__7.get(self)) {
            _Object9 = Object;
            result6 = __INTERNAL_SLOT_MAP__7.set(self, Object.create(null));
          }
          __INTERNAL_SLOT_MAP__7.get(self).templateMiddle = tmp44.middle;
          __INTERNAL_SLOT_MAP__8 = tmp.__INTERNAL_SLOT_MAP__;
          if (!__INTERNAL_SLOT_MAP__8.get(self)) {
            _Object10 = Object;
            result7 = __INTERNAL_SLOT_MAP__8.set(self, Object.create(null));
          }
          __INTERNAL_SLOT_MAP__8.get(self).templateEnd = tmp44.end;
          return;
        } else {
          tmp39 = new.target;
          tmp40 = new.target;
          tmp41 = combined;
          tmp38 = new tmp38(combined);
          tmp43 = tmp38;
          throw tmp38;
        }
      } else {
        tmp4 = globalThis;
        _TypeError = TypeError;
        tmp5 = new.target;
        str = "Intl.ListFormat must be called with 'new'";
        tmp6 = new.target;
        typeError1 = new TypeError("Intl.ListFormat must be called with 'new'");
        tmp8 = typeError1;
        throw typeError1;
      }
    }
  }
  obj = {
    key: "format",
    value: function format(arg0) {
      closure_1_13(this, "format");
      let str = "";
      const iter = closure_1_15(ListFormat.__INTERNAL_SLOT_MAP__, this, closure_1_14(arg0));
      if (Array.isArray(iter)) {
        for (const item10023 of iter) {
          let tmp4 = str;
          str = `${item10023.value}`;
          continue;
        }
        return str;
      } else {
        return iter.value;
      }
    },
  };
  let items = [
    obj,
    {
      key: "formatToParts",
      value: function formatToParts(arg0) {
        closure_1_13(this, "format");
        const tmp2 = closure_1_15(ListFormat.__INTERNAL_SLOT_MAP__, this, closure_1_14(arg0));
        if (Array.isArray(tmp2)) {
          const items = [];
          for (const item10022 of tmp2) {
            obj = {};
            let tmp5 = obj;
            let tmp6 = item10022;
            let merged = Object.assign(item10022);
            let arr = items.push(obj);
            continue;
          }
          return items;
        } else {
          const items1 = [tmp2];
          return items1;
        }
      },
    },
    {
      key: "resolvedOptions",
      value: function resolvedOptions() {
        const self = this;
        if (this instanceof closure_1_17) {
          obj = { locale: null, type: null, style: null };
          obj[0] = (function getMultiInternalSlots(__INTERNAL_SLOT_MAP__, self, locale) {
            const substr = [...arguments].slice();
            c0 = undefined;
            const value = __INTERNAL_SLOT_MAP__.get(self);
            c0 = value;
            if (value) {
              const _Object = Object;
              return substr.reduce((arg0, arg1) => {
                arg0[arg1] = _undefined[arg1];
                return arg0;
              }, Object.create(null));
            } else {
              const _TypeError = TypeError;
              const _HermesInternal = HermesInternal;
              const typeError = new TypeError("" + self + " InternalSlot has not been initialized");
              throw typeError;
            }
          })(ListFormat.__INTERNAL_SLOT_MAP__, self, "locale").locale;
          obj[1] = (function getMultiInternalSlots(__INTERNAL_SLOT_MAP__, self, locale) {
            const substr = [...arguments].slice();
            c0 = undefined;
            const value = __INTERNAL_SLOT_MAP__.get(self);
            c0 = value;
            if (value) {
              const _Object = Object;
              return substr.reduce((arg0, arg1) => {
                arg0[arg1] = _undefined[arg1];
                return arg0;
              }, Object.create(null));
            } else {
              const _TypeError = TypeError;
              const _HermesInternal = HermesInternal;
              const typeError = new TypeError("" + self + " InternalSlot has not been initialized");
              throw typeError;
            }
          })(ListFormat.__INTERNAL_SLOT_MAP__, self, "type").type;
          obj[2] = (function getMultiInternalSlots(__INTERNAL_SLOT_MAP__, self, locale) {
            const substr = [...arguments].slice();
            c0 = undefined;
            const value = __INTERNAL_SLOT_MAP__.get(self);
            c0 = value;
            if (value) {
              const _Object = Object;
              return substr.reduce((arg0, arg1) => {
                arg0[arg1] = _undefined[arg1];
                return arg0;
              }, Object.create(null));
            } else {
              const _TypeError = TypeError;
              const _HermesInternal = HermesInternal;
              const typeError = new TypeError("" + self + " InternalSlot has not been initialized");
              throw typeError;
            }
          })(ListFormat.__INTERNAL_SLOT_MAP__, self, "style").style;
          return obj;
        } else {
          let _TypeError = TypeError;
          const _String = String;
          let _HermesInternal = HermesInternal;
          let typeError = new TypeError(
            "Method Intl.ListFormat.prototype." +
              "resolvedOptions" +
              " called on incompatible receiver " +
              String(self),
          );
          throw typeError;
        }
      },
    },
  ];
  obj = {
    key: "supportedLocalesOf",
    value: function supportedLocalesOf(items) {
      const canonicalLocales = Intl.getCanonicalLocales(items);
      if (undefined !== arg1) {
        if (null == arg1) {
          const _TypeError = TypeError;
          const typeError = new TypeError("undefined/null cannot be converted to object");
          throw typeError;
        } else {
          const _Object = Object;
          tmp2(Object(arg1), "localeMatcher", "string", ["lookup", "best fit"], "best fit");
        }
      }
      return ListFormat(closure_1_1[2]).LookupSupportedLocales(
        Array.from(ListFormat.availableLocales),
        canonicalLocales,
      );
    },
  };
  let items1 = [
    obj,
    {
      key: "__addLocaleData",
      value: function __addLocaleData(item10081) {
        const items = [...arguments];
        const iter = items[Symbol.iterator]();
        while (iter !== undefined) {
          ({ data, locale } = nextResult);
          let _Intl = Intl;
          let tmp2 = new.target;
          let tmp3 = new.target;
          let tmp4 = locale;
          locale = new Intl.Locale(locale);
          let tmp5 = locale;
          let str = locale.minimize();
          str = str.toString();
          ListFormat.localeData[str] = data;
          ListFormat.localeData[locale] = data;
          let availableLocales = ListFormat.availableLocales;
          let tmp7 = str;
          let tmp8 = ListFormat;
          let addResult = availableLocales.add(str);
          let availableLocales2 = ListFormat.availableLocales;
          let addResult1 = availableLocales2.add(locale);
          if (!ListFormat.__defaultLocale) {
            let tmp11 = str;
            tmp8.__defaultLocale = tmp7;
          }
          continue;
        }
      },
    },
    {
      key: "getDefaultLocale",
      value: function getDefaultLocale() {
        return ListFormat.__defaultLocale;
      },
    },
  ];
  return callback(ListFormat, items, items1);
})();
obj.localeData = {};
obj.availableLocales = new Set();
obj.__defaultLocale = "";
obj.relevantExtensionKeys = [];
obj.polyfilled = true;
const weakMap = new WeakMap();
obj.__INTERNAL_SLOT_MAP__ = weakMap;
obj.__ = undefined;
try {
  let _Symbol = Symbol;
  if (typeof Symbol !== "undefined") {
    let _Object4 = Object;
    const _Symbol2 = Symbol;
    Object.defineProperty(obj.prototype, Symbol.toStringTag, {
      value: "Intl.ListFormat",
      writable: false,
      enumerable: false,
      configurable: true,
    });
  }
  let _Object = Object;
  Object.defineProperty(obj.prototype.constructor, "length", {
    value: 0,
    writable: false,
    enumerable: false,
    configurable: true,
  });
  let _Object2 = Object;
  Object.defineProperty(obj.supportedLocalesOf, "length", {
    value: 1,
    writable: false,
    enumerable: false,
    configurable: true,
  });
  let _Object3 = Object;
  let _Intl = Intl;
  obj = { value: null, writable: true, enumerable: false, configurable: true };
  obj[0] = obj;
  Object.defineProperty(Intl, "ListFormat", obj);
  const _globalThis = globalThis;
  if (__FORMATJS_LISTFORMAT_DATA__) {
    for (const item10081 of __FORMATJS_LISTFORMAT_DATA__) {
      let __addLocaleDataResult = obj.__addLocaleData(item10081);
      continue;
    }
    const _globalThis2 = globalThis;
    delete tmp2[tmp];
  }
} catch (err) {}
