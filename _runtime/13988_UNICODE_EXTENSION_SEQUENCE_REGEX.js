// === Module 13988: UNICODE_EXTENSION_SEQUENCE_REGEX ===

// Module 13988 (UNICODE_EXTENSION_SEQUENCE_REGEX)
import _mod1172 from "module_1172" /* 1172 */;
import strategies from "strategies" /* 13989 */;

function getMultiInternalSlots(get, arg1) {
  let length;
  const items = [];
  let num = 2;
  if (2 < arguments.length) {
    do {
      items[num - 2] = arguments[num];
      num = num + 1;
      length = arguments.length;
    } while (num < length);
  }
  const value = get.get(arg1);
  require = value;
  if (require) {
    const _Object = Object;
    return items.reduce((acc, item) => {
      acc[item] = require[item];
      return acc;
    }, Object.create(null));
  } else {
    const _TypeError = TypeError;
    const concat = "".concat;
    const self = this;
    const self2 = this;
    const typeError = new TypeError("".concat(arg1, " InternalSlot has not been initialized"));
    throw typeError;
  }
}
let obj = { strategy: strategies.strategies.variadic };
const memoize = strategies.memoize;
const obj2 = { strategy: strategies.strategies.variadic };
const memoize2 = strategies.memoize;
const obj3 = { strategy: strategies.strategies.variadic };
const memoize3 = strategies.memoize;
const obj4 = { strategy: strategies.strategies.variadic };
const memoize4 = strategies.memoize;
const obj5 = { strategy: strategies.strategies.variadic };
const memoize5 = strategies.memoize;

export const repeat = function repeat(str, arg1) {
  let length;
  if (typeof str.repeat === "function") {
    return str.repeat(arg1);
  } else {
    const _Array = Array;
    const self = this;
    const self2 = this;
    const arr = new Array(arg1);
    let num = 0;
    if (0 < arr.length) {
      do {
        arr[num] = str;
        num = num + 1;
        length = arr.length;
      } while (num < length);
    }
    return arr.join("");
  }
};
export const setInternalSlot = function setInternalSlot(get, arg1, arg2, arg3) {
  if (!get.get(arg1)) {
    const _Object = Object;
    const result = get.set(arg1, Object.create(null));
  }
  get.get(arg1)[arg2] = arg3;
};
export const setMultiInternalSlots = function setMultiInternalSlots(get, arg1, arg2) {
  let num;
  const keys = Object.keys(arg2);
  for (let num = 0; num < keys.length; num = num + 1) {
    let tmp = keys[num];
    let tmp2 = arg2[tmp];
    if (!get.get(arg1)) {
      let _Object = Object;
      let result = get.set(arg1, Object.create(null));
    }
    get.get(arg1)[tmp] = tmp2;
  }
};
export const getInternalSlot = function getInternalSlot(arg0, arg1, arg2) {
  return getMultiInternalSlots(arg0, arg1, arg2)[arg2];
};
export { getMultiInternalSlots };
export const isLiteralPart = function isLiteralPart(type) {
  return "literal" === type.type;
};
export const defineProperty = function defineProperty(arg0, arg1, value) {
  const obj = { configurable: true, enumerable: false, writable: true, value: value.value };
  Object.defineProperty(arg0, arg1, obj);
};
export const createDataProperty = function createDataProperty(arg0, direction, firstDay) {
  const obj = { configurable: true, enumerable: true, writable: true, value: firstDay };
  Object.defineProperty(arg0, direction, obj);
};
export const invariant = function invariant(arg0, arg1, arg2) {
  let _Error = arg2;
  if (undefined === arg2) {
    _Error = Error;
  }
  const tmp2 = arg0;
  if (!tmp2) {
    const self = this;
    const self2 = this;
    const _Error1 = new _Error(arg1);
    throw _Error1;
  }
};
export const UNICODE_EXTENSION_SEQUENCE_REGEX = /-u(?:-[0-9a-z]{2,8})+/gi;
export const createMemoizedNumberFormat = memoize(function() {
  let length;
  const items = [];
  let num = 0;
  if (0 < arguments.length) {
    do {
      items[num] = arguments[num];
      num = num + 1;
      length = arguments.length;
    } while (num < length);
  }
  const bind = NumberFormat.bind;
  const apply = bind.apply;
  const items1 = [undefined];
  const obj = _mod1172;
  const tmp = new apply(NumberFormat, obj.__spreadArray(items1, items, false))();
  return tmp;
}, obj);
export const createMemoizedDateTimeFormat = memoize2(function() {
  let length;
  const items = [];
  let num = 0;
  if (0 < arguments.length) {
    do {
      items[num] = arguments[num];
      num = num + 1;
      length = arguments.length;
    } while (num < length);
  }
  const bind = DateTimeFormat.bind;
  const apply = bind.apply;
  const items1 = [undefined];
  const obj = _mod1172;
  const tmp = new apply(DateTimeFormat, obj.__spreadArray(items1, items, false))();
  return tmp;
}, obj2);
export const createMemoizedPluralRules = memoize3(function() {
  let length;
  const items = [];
  let num = 0;
  if (0 < arguments.length) {
    do {
      items[num] = arguments[num];
      num = num + 1;
      length = arguments.length;
    } while (num < length);
  }
  const bind = PluralRules.bind;
  const apply = bind.apply;
  const items1 = [undefined];
  const obj = _mod1172;
  const tmp = new apply(PluralRules, obj.__spreadArray(items1, items, false))();
  return tmp;
}, obj3);
export const createMemoizedLocale = memoize4(function() {
  let length;
  const items = [];
  let num = 0;
  if (0 < arguments.length) {
    do {
      items[num] = arguments[num];
      num = num + 1;
      length = arguments.length;
    } while (num < length);
  }
  const bind = Locale.bind;
  const apply = bind.apply;
  const items1 = [undefined];
  const obj = _mod1172;
  const tmp = new apply(Locale, obj.__spreadArray(items1, items, false))();
  return tmp;
}, obj4);
export const createMemoizedListFormat = memoize5(function() {
  let length;
  const items = [];
  let num = 0;
  if (0 < arguments.length) {
    do {
      items[num] = arguments[num];
      num = num + 1;
      length = arguments.length;
    } while (num < length);
  }
  const bind = ListFormat.bind;
  const apply = bind.apply;
  const items1 = [undefined];
  const obj = _mod1172;
  const tmp = new apply(ListFormat, obj.__spreadArray(items1, items, false))();
  return tmp;
}, obj5);