// === Module 14385: ? ===

// Module 14385
import _mod14386 from "module_14386" /* 14386 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

require = arg1;
function GetOption(obj, arg1, arg2, join, arg4) {
  if (typeof obj !== "object") {
    const _TypeError2 = TypeError;
    const typeError = new TypeError("Options must be an object");
    throw typeError;
  } else {
    let require = tmp19;
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
      if (join.filter((item) => item == StringResult).length) {
        return tmp5;
      } else {
        const _RangeError = RangeError;
        const _HermesInternal = HermesInternal;
        const rangeError = new RangeError("" + tmp5 + " is not within " + join.join(", "));
        throw rangeError;
      }
    } else {
      return arg4;
    }
  }
}
function memoize(arg0, cache) {
  return cache.strategy ? cache.strategy : strategyDefault(arg0, { cache: cache.cache || closure_10, serializer: cache.serializer || serializerDefault });
}
function monadic(call, get, fn, g_v) {
  let tmp2 = g_v;
  if (!tmp) {
    tmp2 = fn(g_v);
  }
  value = get.get(tmp2);
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
function variadic(apply, get, fn) {
  const call = slice.call;
  if (typeof call === "unknown") {
    let substr = slice(3);
  } else {
    substr = call(arguments, 3);
  }
  const tmp3 = fn(substr);
  value = get.get(tmp3);
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
  return 1 === length.length ? monadic : variadic.bind(this, length, cache.create(), cache.serializer);
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
function validateInstance(arg0, format) {
  if (!(arg0 instanceof obj)) {
    const _TypeError = TypeError;
    const _String = String;
    const _HermesInternal = HermesInternal;
    const typeError = new TypeError("Method Intl.ListFormat.prototype." + "format" + " called on incompatible receiver " + String(arg0));
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
function createPartsFromList(__INTERNAL_SLOT_MAP__, self, arg2) {
  if (0 === arg2.length) {
    return [];
  } else if (2 === length) {
    let obj = { 0: null, 1: null };
    obj = { type: "element", value: arg2[0] };
    obj.type = obj;
    const obj1 = { type: "element", value: arg2[1] };
    obj.value = obj1;
    return deconstructPattern((function getMultiInternalSlots(__INTERNAL_SLOT_MAP__, self) {
      const substr = [...arguments].slice();
      value = __INTERNAL_SLOT_MAP__.get(self);
      c0 = value;
      if (value) {
        const _Object = Object;
        return substr.reduce((acc, item) => {
          acc[item] = _undefined[item];
          return acc;
        }, Object.create(null));
      } else {
        const _TypeError = TypeError;
        const _HermesInternal = HermesInternal;
        const typeError = new TypeError("" + self + " InternalSlot has not been initialized");
        throw typeError;
      }
    })(__INTERNAL_SLOT_MAP__, self, "templatePair").templatePair, obj);
  } else {
    const obj2 = { type: "element", value: arg2[length - 1] };
    let diff = length - 2;
    let tmpResult = obj2;
    let tmp6 = obj2;
    if (0 <= diff) {
      do {
        let str = "templateStart";
        if (0 !== diff) {
          let str2 = "templateEnd";
          if (diff < length - 2) {
            str2 = "templateMiddle";
          }
          str = str2;
        }
        obj = { 0: null, 1: null };
        let obj3 = { type: "element", value: arg2[diff] };
        obj[0] = obj3;
        obj[1] = tmpResult;
        tmpResult = deconstructPattern((function getMultiInternalSlots(__INTERNAL_SLOT_MAP__, self) {
          const substr = [...arguments].slice();
          value = __INTERNAL_SLOT_MAP__.get(self);
          c0 = value;
          if (value) {
            const _Object = Object;
            return substr.reduce((acc, item) => {
              acc[item] = _undefined[item];
              return acc;
            }, Object.create(null));
          } else {
            const _TypeError = TypeError;
            const _HermesInternal = HermesInternal;
            const typeError = new TypeError("" + self + " InternalSlot has not been initialized");
            throw typeError;
          }
        })(__INTERNAL_SLOT_MAP__, self, str)[str], obj);
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
            let obj = { type: "literal", value: arr.substring(num4, index) };
            arr = items.push(obj);
          }
          obj = { type: arr.substring(index + 1, index1), value: "a" };
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
        const error = new Error(combined);
        throw error;
      }
    }
    if (num < arr.length) {
      obj = { type: "literal", value: arr.substring(num, length) };
      items.push(obj);
    }
    return items;
  })(templatePair)[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let type = nextResult.type;
    let iter2 = nextResult;
    if (isLiteralPart(nextResult)) {
      let obj = { type: "literal", value: null };
      obj.value = iter2.value;
      let arr = items.push(obj);
    } else {
      let _HermesInternal = HermesInternal;
      let tmp6 = type in arg1;
      let tmp7 = invariant(tmp6, "" + type + " is missing from placables");
      let tmp8 = arg1[type];
      let tmp9 = tmp8;
      let _Array = Array;
      let push = items.push;
      if (Array.isArray(tmp8)) {
        let items1 = [];
        let arraySpreadResult = HermesBuiltin.arraySpread(tmp10, 0);
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
      tmp = closure_2(this, ObjectWithoutPrototypeCache);
      this.cache = Object.create(null);
      return;
    }
  }
  const entry = {
    key: "get",
    value: function get(arg0) {
      return this.cache[arg0];
    }
  };
  const items = [
    entry,
    {
      key: "set",
      value: function set(arg0, arg1) {
        this.cache[arg0] = arg1;
      }
    }
  ];
  return _createClass(ObjectWithoutPrototypeCache, items);
})();
let closure_10 = {
  create() {
    return new closure_9();
  }
};
function strategyVariadic(c165, cache) {
  cache = cache.cache;
  return variadic.bind(this, c165, cache.create(), cache.serializer);
}
memoize(() => Intl.NumberFormat(...HermesBuiltin.copyRestArgs()), { strategy: strategyVariadic });
memoize(() => Intl.PluralRules(...HermesBuiltin.copyRestArgs()), { strategy: strategyVariadic });
memoize(() => Intl.Locale(...HermesBuiltin.copyRestArgs()), { strategy: strategyVariadic });
memoize(() => Intl.ListFormat(...HermesBuiltin.copyRestArgs()), { strategy: strategyVariadic });
let value = (() => {
  class ListFormat {
    constructor(arg0, arg1) {
      self = this;
      tmp = ListFormat;
      tmp2 = closure_2(this, ListFormat);
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
        tmp18 = GetOption;
        str2 = "best fit";
        str3 = "string";
        str4 = "localeMatcher";
        num = 0;
        tmp19 = obj1;
        str5 = "string";
        obj.localeMatcher = GetOption(obj1, "localeMatcher", "string", ["best fit", "lookup"], "best fit");
        localeData = tmp.localeData;
        tmp20 = closure_0;
        tmp21 = closure_1;
        obj = closure_0(closure_1[2]);
        tmp22 = obj;
        tmp23 = canonicalLocales;
        tmp24 = obj;
        tmp25 = localeData;
        ResolveLocaleResult = obj.ResolveLocale(tmp.availableLocales, canonicalLocales, obj, tmp.relevantExtensionKeys, localeData, tmp.getDefaultLocale);
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
  const entry = {
    key: "format",
    value: function format(arg0) {
      validateInstance(this, "format");
      let str = "";
      const iter = createPartsFromList(ListFormat.__INTERNAL_SLOT_MAP__, this, stringListFromIterable(arg0));
      if (Array.isArray(iter)) {
        for (const item10023 of iter) {
          str = `${item10023.value}`;
          continue;
        }
        return str;
      } else {
        return iter.value;
      }
    }
  };
  let items = [
    entry,
    {
      key: "formatToParts",
      value: function formatToParts(arg0) {
        validateInstance(this, "format");
        const tmp2 = createPartsFromList(ListFormat.__INTERNAL_SLOT_MAP__, this, stringListFromIterable(arg0));
        if (Array.isArray(tmp2)) {
          const items = [];
          for (const item10022 of tmp2) {
            let obj = {};
            let merged = Object.assign(item10022);
            let arr = items.push(obj);
            continue;
          }
          return items;
        } else {
          const items1 = [tmp2];
          return items1;
        }
      }
    },
    {
      key: "resolvedOptions",
      value: function resolvedOptions() {
        const self = this;
        if (this instanceof obj) {
          obj = {
            locale: (function getMultiInternalSlots(__INTERNAL_SLOT_MAP__, self) {
                const substr = [...arguments].slice();
                value = __INTERNAL_SLOT_MAP__.get(self);
                c0 = value;
                if (value) {
                  const _Object = Object;
                  return substr.reduce((acc, item) => {
                    acc[item] = _undefined[item];
                    return acc;
                  }, Object.create(null));
                } else {
                  const _TypeError = TypeError;
                  const _HermesInternal = HermesInternal;
                  const typeError = new TypeError("" + self + " InternalSlot has not been initialized");
                  throw typeError;
                }
              })(ListFormat.__INTERNAL_SLOT_MAP__, self, "locale").locale,
            type: (function getMultiInternalSlots(__INTERNAL_SLOT_MAP__, self) {
                const substr = [...arguments].slice();
                value = __INTERNAL_SLOT_MAP__.get(self);
                c0 = value;
                if (value) {
                  const _Object = Object;
                  return substr.reduce((acc, item) => {
                    acc[item] = _undefined[item];
                    return acc;
                  }, Object.create(null));
                } else {
                  const _TypeError = TypeError;
                  const _HermesInternal = HermesInternal;
                  const typeError = new TypeError("" + self + " InternalSlot has not been initialized");
                  throw typeError;
                }
              })(ListFormat.__INTERNAL_SLOT_MAP__, self, "type").type,
            style: (function getMultiInternalSlots(__INTERNAL_SLOT_MAP__, self) {
                const substr = [...arguments].slice();
                value = __INTERNAL_SLOT_MAP__.get(self);
                c0 = value;
                if (value) {
                  const _Object = Object;
                  return substr.reduce((acc, item) => {
                    acc[item] = _undefined[item];
                    return acc;
                  }, Object.create(null));
                } else {
                  const _TypeError = TypeError;
                  const _HermesInternal = HermesInternal;
                  const typeError = new TypeError("" + self + " InternalSlot has not been initialized");
                  throw typeError;
                }
              })(ListFormat.__INTERNAL_SLOT_MAP__, self, "style").style
          };
          return obj;
        } else {
          let _TypeError = TypeError;
          const _String = String;
          let _HermesInternal = HermesInternal;
          let typeError = new TypeError("Method Intl.ListFormat.prototype." + "resolvedOptions" + " called on incompatible receiver " + String(self));
          throw typeError;
        }
      }
    }
  ];
  const entry1 = {
    key: "supportedLocalesOf",
    value: function supportedLocalesOf(items, arg1) {
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
      return _mod14386.LookupSupportedLocales(Array.from(ListFormat.availableLocales), canonicalLocales);
    }
  };
  let items1 = [
    entry1,
    {
      key: "__addLocaleData",
      value: function __addLocaleData() {
        const items = [...arguments];
        const iter = items[Symbol.iterator]();
        while (iter !== undefined) {
          ({ data, locale } = nextResult);
          let _Intl = Intl;
          let tmp2 = new.target;
          let tmp3 = new.target;
          locale = new Intl.Locale(locale);
          let str = locale.minimize();
          str = str.toString();
          ListFormat.localeData[str] = data;
          ListFormat.localeData[locale] = data;
          let availableLocales = ListFormat.availableLocales;
          let tmp7 = str;
          let addResult = availableLocales.add(str);
          let availableLocales2 = ListFormat.availableLocales;
          let addResult1 = availableLocales2.add(locale);
          if (!ListFormat.__defaultLocale) {
            ListFormat.__defaultLocale = tmp7;
          }
          continue;
        }
        nextResult = iter.next();
      }
    },
    {
      key: "getDefaultLocale",
      value: function getDefaultLocale() {
        return ListFormat.__defaultLocale;
      }
    }
  ];
  return _createClass(ListFormat, items, items1);
})();
value.localeData = {};
value.availableLocales = new Set();
value.__defaultLocale = "";
value.relevantExtensionKeys = [];
value.polyfilled = true;
const weakMap = new WeakMap();
value.__INTERNAL_SLOT_MAP__ = weakMap;
value.__ = undefined;
try {
  let _Symbol = Symbol;
  if (typeof Symbol !== "undefined") {
    let _Object4 = Object;
    const _Symbol2 = Symbol;
    Object.defineProperty(value.prototype, Symbol.toStringTag, { value: "Intl.ListFormat", writable: false, enumerable: false, configurable: true });
  }
  let _Object = Object;
  Object.defineProperty(value.prototype.constructor, "length", { value: 0, writable: false, enumerable: false, configurable: true });
  let _Object2 = Object;
  Object.defineProperty(value.supportedLocalesOf, "length", { value: 1, writable: false, enumerable: false, configurable: true });
  let _Object3 = Object;
  let _Intl = Intl;
  value = { value: null, writable: true, enumerable: false, configurable: true };
  value.value = value;
  Object.defineProperty(Intl, "ListFormat", value);
  const _globalThis = globalThis;
  if (__FORMATJS_LISTFORMAT_DATA__) {
    for (const item10081 of __FORMATJS_LISTFORMAT_DATA__) {
      let __addLocaleDataResult = value.__addLocaleData(item10081);
      continue;
    }
    const _globalThis2 = globalThis;
    delete tmp2[tmp];
  }
} catch (err) {
}