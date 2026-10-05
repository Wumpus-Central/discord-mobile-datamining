// _runtime/metro/14149__.js
import _mod14150 from "14150__.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";

function getMultiInternalSlots(__INTERNAL_SLOT_MAP__, self) {
  let _undefined;
  const substr = [...arguments].slice();
  value = __INTERNAL_SLOT_MAP__.get(self);
  let c0 = value;
  if (c0) {
    const _Object = Object;
    return substr.reduce((acc, item) => {
      acc[item] = c0[item];
      return acc;
    }, Object.create(null));
  } else {
    const _TypeError = TypeError;
    const _HermesInternal = HermesInternal;
    self = this;
    const self2 = this;
    const typeError = new TypeError("" + self + " InternalSlot has not been initialized");
    throw typeError;
  }
}
function GetOption(obj, arg1, arg2, join, arg4) {
  if (typeof obj !== "object") {
    const _TypeError2 = TypeError;
    const self3 = this;
    const self4 = this;
    const typeError = new TypeError("Options must be an object");
    throw typeError;
  } else {
    let require = tmp15;
    if (undefined !== obj[arg1]) {
      let tmp2 = tmp15;
      if ("boolean" === "string") {
        const _Boolean = Boolean;
        const BooleanResult = Boolean(obj[arg1]);
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
      if (join.filter((item) => item == require).length) {
        return tmp5;
      } else {
        const _RangeError = RangeError;
        const _HermesInternal = HermesInternal;
        const self = this;
        const self2 = this;
        const rangeError = new RangeError("" + tmp5 + " is not within " + join.join(", "));
        throw rangeError;
      }
    } else {
      return arg4;
    }
  }
}
function memoize(arg0, cache) {
  const obj = { cache: cache.cache || closure_10, serializer: cache.serializer || serializerDefault };
  return cache.strategy ? cache.strategy : strategyDefault(arg0, obj);
}
function monadic(call, get, fn, num) {
  let tmp2 = num;
  const tmp = null == num || typeof num === "number" || typeof num === "boolean";
  if (!tmp) {
    tmp2 = fn(num);
  }
  value = get.get(tmp2);
  if (undefined === value) {
    const callResult = call.call(this, num);
    const result = get.set(tmp2, callResult);
    value = callResult;
  }
  return value;
}
function variadic(apply, get, fn) {
  const callResult = slice.call(arguments, 3);
  const tmp2 = fn(callResult);
  value = get.get(tmp2);
  if (undefined === value) {
    const self = this;
    const applyResult = apply.apply(this, callResult);
    const result = get.set(tmp2, applyResult);
    value = applyResult;
  }
  return value;
}
function strategyDefault(c165, cache) {
  cache = cache.cache;
  const obj = 1 === length.length ? monadic : variadic;
  return obj.bind(this, length, cache.create(), cache.serializer);
}
function isLiteralPart(type) {
  return "literal" === type.type;
}
function invariant(arg0, arg1) {
  let _Error;
  {
    _Error = Error;
  }
  const tmp2 = arg0;
  if (!tmp2) {
    const self = this;
    const self2 = this;
    const _Error1 = new _Error(arg1);
    throw _Error1;
  }
}
function validateInstance(arg0, format) {
  if (!(arg0 instanceof obj)) {
    const _TypeError = TypeError;
    const _String = String;
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
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
      const self = this;
      const self2 = this;
      const typeError = new TypeError("Iterable yielded " + iter3.value + " which is not a string");
      throw typeError;
    }
    return items;
  }
}
function createPartsFromList(__INTERNAL_SLOT_MAP__, self, arg2) {
  if (0 === arg2.length) {
    return [];
  } else if (2 === arg2.length) {
    const obj2 = { 0: null, 1: null };
    const obj3 = { type: "element", value: arg2[0] };
    obj2[0] = obj3;
    const obj4 = { type: "element", value: arg2[1] };
    obj2[1] = obj4;
    return deconstructPattern(getMultiInternalSlots(__INTERNAL_SLOT_MAP__, self, "templatePair").templatePair, obj2);
  } else {
    const obj5 = { type: "element", value: arg2[arg2.length - 1] };
    let diff = length - 2;
    let tmpResult = obj5;
    let tmp6 = obj5;
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
        let obj = { 0: null, 1: null };
        let obj6 = { type: "element", value: arg2[diff] };
        obj[0] = obj6;
        obj[1] = tmpResult;
        tmpResult = deconstructPattern(getMultiInternalSlots(__INTERNAL_SLOT_MAP__, self, str)[str], obj);
        diff = diff - 1;
        tmp6 = tmpResult;
      } while (0 <= diff);
    }
    return tmp6;
  }
}
function deconstructPattern(templatePair, arg1) {
  function PartitionPattern(arr) {
    const items = [];
    let index = arr.indexOf("{");
    let num = 0;
    if (index < arr.length) {
      let num4 = 0;
      num = 0;
      if (index > -1) {
        const index1 = arr.indexOf("}", index);
        const _HermesInternal = HermesInternal;
        const tmp4 = index1 > index;
        const combined = "Invalid pattern " + arr;
        const _Error = Error;
        while (tmp4) {
          if (index > num4) {
            let obj = { type: "literal", value: arr.substring(num4, index) };
            let push = items.push;
            arr = push(obj);
          }
          let obj2 = { type: arr.substring(index + 1, index1), value: "r" };
          let push2 = items.push;
          let push2Result = push2(obj2);
          let sum = index1 + 1;
          let index2 = arr.indexOf("{", sum);
          num = sum;
          if (index2 < arr.length) {
            num4 = sum;
            num = sum;
            index = index2;
          }
        }
        const self = this;
        const self2 = this;
        const _Error1 = new _Error(combined);
        throw _Error1;
      }
    }
    if (num < arr.length) {
      const push3 = items.push;
      const obj3 = { type: "literal", value: arr.substring(num, arr.length) };
      push3(obj3);
    }
    return items;
  }
  let items = [];
  const tmp2 = PartitionPattern(templatePair);
  const iter = tmp2[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let type = nextResult.type;
    let iter2 = nextResult;
    if (isLiteralPart(nextResult)) {
      let obj = { type: "literal", value: iter2.value };
      let arr = items.push(obj);
    } else {
      let _HermesInternal = HermesInternal;
      let tmp7 = type in arg1;
      let tmp8 = invariant(tmp7, "" + type + " is missing from placables");
      let tmp9 = arg1[type];
      let tmp10 = tmp9;
      let _Array = Array;
      let push = items.push;
      if (Array.isArray(tmp9)) {
        let items1 = [];
        let num = 0;
        let arraySpreadResult = HermesBuiltin.arraySpread(items1, tmp11, 0);
        let applyResult = HermesBuiltin.apply(push, items1, items);
      } else {
        let arr2 = push(tmp10);
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
      _classCallCheck(this, ObjectWithoutPrototypeCache);
      this.cache = Object.create(null);
    }
  }
  const entry = {
    key: "get",
    value: function get(arg0) {
      return this.cache[arg0];
    },
  };
  const items = [
    entry,
    {
      key: "set",
      value: function set(arg0, arg1) {
        this.cache[arg0] = arg1;
      },
    },
  ];
  return _createClass(ObjectWithoutPrototypeCache, items);
})();
let closure_10 = {
  create() {
    const tmp = new closure_9();
    return tmp;
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
let value = (() => {
  class ListFormat {
    constructor(locale, arg1) {
      const self = this;
      _classCallCheck(this, ListFormat);
      let constructor;
      if (this) {
        if (self instanceof ListFormat) {
          constructor = self.constructor;
        }
      }
      if (constructor) {
        const __INTERNAL_SLOT_MAP__ = ListFormat.__INTERNAL_SLOT_MAP__;
        if (!__INTERNAL_SLOT_MAP__.get(self)) {
          const _Object = Object;
          const result = __INTERNAL_SLOT_MAP__.set(self, Object.create(null));
        }
        let obj4 = arg1;
        __INTERNAL_SLOT_MAP__.get(self).initializedListFormat = true;
        const _Intl = Intl;
        const canonicalLocales = Intl.getCanonicalLocales(locale);
        const _Object2 = Object;
        const obj3 = Object.create(null);
        if (undefined === arg1) {
          const _Object3 = Object;
          obj4 = Object.create(null);
        } else if (typeof obj4 !== "object") {
          const _TypeError2 = TypeError;
          const self6 = this;
          const self7 = this;
          const typeError = new TypeError("Options must be an object");
          throw typeError;
        }
        obj3.localeMatcher = GetOption(obj4, "localeMatcher", "string", ["best fit", "lookup"], "best fit");
        const localeData = ListFormat.localeData;
        const obj = _mod14150;
        const ResolveLocaleResult = obj.ResolveLocale(
          ListFormat.availableLocales,
          canonicalLocales,
          obj3,
          ListFormat.relevantExtensionKeys,
          localeData,
          ListFormat.getDefaultLocale,
        );
        const __INTERNAL_SLOT_MAP__2 = ListFormat.__INTERNAL_SLOT_MAP__;
        locale = ResolveLocaleResult.locale;
        if (!__INTERNAL_SLOT_MAP__2.get(self)) {
          const _Object4 = Object;
          const result1 = __INTERNAL_SLOT_MAP__2.set(self, Object.create(null));
        }
        __INTERNAL_SLOT_MAP__2.get(self).locale = locale;
        const __INTERNAL_SLOT_MAP__3 = ListFormat.__INTERNAL_SLOT_MAP__;
        const tmp16Result = GetOption(obj4, "type", "string", ["conjunction", "disjunction", "unit"], "conjunction");
        if (!__INTERNAL_SLOT_MAP__3.get(self)) {
          const _Object5 = Object;
          const result2 = __INTERNAL_SLOT_MAP__3.set(self, Object.create(null));
        }
        __INTERNAL_SLOT_MAP__3.get(self).type = tmp16Result;
        const __INTERNAL_SLOT_MAP__4 = ListFormat.__INTERNAL_SLOT_MAP__;
        const tmp16Result2 = GetOption(obj4, "style", "string", ["long", "short", "narrow"], "long");
        if (!__INTERNAL_SLOT_MAP__4.get(self)) {
          const _Object6 = Object;
          const result3 = __INTERNAL_SLOT_MAP__4.set(self, Object.create(null));
        }
        __INTERNAL_SLOT_MAP__4.get(self).style = tmp16Result2;
        const dataLocale = ResolveLocaleResult.dataLocale;
        const _HermesInternal = HermesInternal;
        const tmp34 = !localeData[dataLocale];
        const combined = "Missing locale data for " + dataLocale;
        if (!tmp34) {
          const __INTERNAL_SLOT_MAP__5 = ListFormat.__INTERNAL_SLOT_MAP__;
          const pair = tmp40.pair;
          if (!__INTERNAL_SLOT_MAP__5.get(self)) {
            const _Object7 = Object;
            const result4 = __INTERNAL_SLOT_MAP__5.set(self, Object.create(null));
          }
          __INTERNAL_SLOT_MAP__5.get(self).templatePair = pair;
          const __INTERNAL_SLOT_MAP__6 = ListFormat.__INTERNAL_SLOT_MAP__;
          const start = tmp40.start;
          if (!__INTERNAL_SLOT_MAP__6.get(self)) {
            const _Object8 = Object;
            const result5 = __INTERNAL_SLOT_MAP__6.set(self, Object.create(null));
          }
          __INTERNAL_SLOT_MAP__6.get(self).templateStart = start;
          const __INTERNAL_SLOT_MAP__7 = ListFormat.__INTERNAL_SLOT_MAP__;
          const middle = tmp40.middle;
          if (!__INTERNAL_SLOT_MAP__7.get(self)) {
            const _Object9 = Object;
            const result6 = __INTERNAL_SLOT_MAP__7.set(self, Object.create(null));
          }
          __INTERNAL_SLOT_MAP__7.get(self).templateMiddle = middle;
          const __INTERNAL_SLOT_MAP__8 = ListFormat.__INTERNAL_SLOT_MAP__;
          const end = tmp40.end;
          if (!__INTERNAL_SLOT_MAP__8.get(self)) {
            const _Object10 = Object;
            const result7 = __INTERNAL_SLOT_MAP__8.set(self, Object.create(null));
          }
          __INTERNAL_SLOT_MAP__8.get(self).templateEnd = end;
        } else {
          const self4 = this;
          const self5 = this;
          const tmp362 = new tmp36(combined);
          throw tmp362;
        }
      } else {
        const _TypeError = TypeError;
        const self2 = this;
        const self3 = this;
        const typeError1 = new TypeError("Intl.ListFormat must be called with 'new'");
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
    },
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
            let push = items.push;
            let merged = Object.assign(item10022);
            let arr = push(obj);
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
        let obj;
        let self = this;
        if (this instanceof obj) {
          obj = {
            locale: getMultiInternalSlots(ListFormat.__INTERNAL_SLOT_MAP__, self, "locale").locale,
            type: getMultiInternalSlots(ListFormat.__INTERNAL_SLOT_MAP__, self, "type").type,
            style: getMultiInternalSlots(ListFormat.__INTERNAL_SLOT_MAP__, self, "style").style,
          };
          return obj;
        } else {
          let _TypeError = TypeError;
          const _String = String;
          let _HermesInternal = HermesInternal;
          let self2 = this;
          const self3 = this;
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
  const entry1 = {
    key: "supportedLocalesOf",
    value: function supportedLocalesOf(items, arg1) {
      const availableLocales = ListFormat.availableLocales;
      const canonicalLocales = Intl.getCanonicalLocales(items);
      if (undefined !== arg1) {
        if (null == arg1) {
          const _TypeError = TypeError;
          const self = this;
          const self2 = this;
          const typeError = new TypeError("undefined/null cannot be converted to object");
          throw typeError;
        } else {
          const _Object = Object;
          tmp2(Object(arg1), "localeMatcher", "string", ["lookup", "best fit"], "best fit");
        }
      }
      const obj = _mod14150;
      return obj.LookupSupportedLocales(Array.from(availableLocales), canonicalLocales);
    },
  };
  let items1 = [
    entry1,
    {
      key: "__addLocaleData",
      value: function __addLocaleData() {
        let data;
        let locale;
        const items = [...arguments];
        const iter = items[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          ({ data, locale } = nextResult);
          let _Intl = Intl;
          let self = this;
          let self2 = this;
          let locale1 = new Intl.Locale(locale);
          let str = locale1.minimize();
          let str1 = str.toString();
          ListFormat.localeData[str1] = data;
          ListFormat.localeData[locale] = data;
          let availableLocales = ListFormat.availableLocales;
          let tmp5 = str1;
          let addResult = availableLocales.add(str1);
          let availableLocales2 = ListFormat.availableLocales;
          let addResult1 = availableLocales2.add(locale);
          if (!ListFormat.__defaultLocale) {
            ListFormat.__defaultLocale = tmp5;
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
  return _createClass(ListFormat, items, items1);
})();
value.localeData = {};
value.availableLocales = new Set();
value.__defaultLocale = "";
value.relevantExtensionKeys = [];
value.polyfilled = true;
new Set();
const weakMap = new WeakMap();
value.__INTERNAL_SLOT_MAP__ = weakMap;
value.__ = undefined;
try {
  let _Symbol = Symbol;
  if (typeof Symbol !== "undefined") {
    let _Object4 = Object;
    const _Symbol2 = Symbol;
    Object.defineProperty(value.prototype, Symbol.toStringTag, {
      value: "Intl.ListFormat",
      writable: false,
      enumerable: false,
      configurable: true,
    });
  }
  let _Object = Object;
  let str = "length";
  Object.defineProperty(value.prototype.constructor, "length", {
    value: 0,
    writable: false,
    enumerable: false,
    configurable: true,
  });
  let _Object2 = Object;
  Object.defineProperty(value.supportedLocalesOf, "length", {
    value: 1,
    writable: false,
    enumerable: false,
    configurable: true,
  });
  let _Object3 = Object;
  let _Intl = Intl;
  let obj2 = { value, writable: true, enumerable: false, configurable: true };
  let str2 = "ListFormat";
  Object.defineProperty(Intl, "ListFormat", obj2);
  const _globalThis = globalThis;
  if (__FORMATJS_LISTFORMAT_DATA__) {
    let tmp10 = __FORMATJS_LISTFORMAT_DATA__;
    const tmp11 = __FORMATJS_LISTFORMAT_DATA__;
    for (const item10081 of __FORMATJS_LISTFORMAT_DATA__) {
      let __addLocaleDataResult = value.__addLocaleData(item10081);
      continue;
    }
    delete globalThis["__FORMATJS_LISTFORMAT_DATA__"];
  }
} catch (err) {}
