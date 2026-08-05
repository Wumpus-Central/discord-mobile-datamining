// _runtime/13386_getMultiInternalSlots.js
function getMultiInternalSlots(get) {
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
  const require = value;
  if (value) {
    const _Object = Object;
    return items.reduce((arg0, arg1) => {
      arg0[arg1] = value[arg1];
      return arg0;
    }, Object.create(null));
  } else {
    const _TypeError = TypeError;
    const concat = "".concat;
    const typeError = new TypeError("".concat(arg1, " InternalSlot has not been initialized"));
    throw typeError;
  }
}
let obj = { strategy: null };
obj[0] = require("monadic").strategies.variadic;
obj = { strategy: null };
obj[0] = require("monadic").strategies.variadic;
obj = { strategy: null };
obj[0] = require("monadic").strategies.variadic;
const obj1 = { strategy: null };
obj1[0] = require("monadic").strategies.variadic;
const obj2 = { strategy: null };
obj2[0] = require("monadic").strategies.variadic;

export const repeat = function repeat(str) {
  let length;
  if (typeof str.repeat === "function") {
    return str.repeat(arg1);
  } else {
    const _Array = Array;
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
export const setInternalSlot = function setInternalSlot(get) {
  if (!get.get(arg1)) {
    const _Object = Object;
    const result = get.set(arg1, Object.create(null));
  }
  get.get(arg1)[arg2] = arg3;
};
export const setMultiInternalSlots = function setMultiInternalSlots(get) {
  const keys = Object.keys(arg2);
  for (let num = 0; num < keys.length; num = num + 1) {
    let tmp = keys[num];
    let tmp2 = num;
    if (!get.get(arg1)) {
      let _Object = Object;
      let result = get.set(arg1, Object.create(null));
    }
    get.get(arg1)[tmp] = arg2[tmp];
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
  Object.defineProperty(arg0, arg1, { configurable: true, enumerable: false, writable: true, value: value.value });
};
export const createDataProperty = function createDataProperty(arg0, direction, firstDay) {
  Object.defineProperty(arg0, direction, { configurable: true, enumerable: true, writable: true, value: firstDay });
};
export const invariant = function invariant(arg0, arg1, arg2) {
  let _Error = arg2;
  if (undefined === arg2) {
    _Error = Error;
  }
  if (!arg0) {
    _Error = new _Error(arg1);
    throw _Error;
  }
};
export const UNICODE_EXTENSION_SEQUENCE_REGEX = /-u(?:-[0-9a-z]{2,8})+/gi;
export const createMemoizedNumberFormat = require("monadic").memoize(() => {
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
  const items1 = [undefined];
  const obj = require(1281) /* e */;
  return new bind.apply(NumberFormat, require(1281) /* e */.__spreadArray(items1, items, false))();
}, obj);
export const createMemoizedDateTimeFormat = require("monadic").memoize(() => {
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
  const items1 = [undefined];
  const obj = require(1281) /* e */;
  return new bind.apply(DateTimeFormat, require(1281) /* e */.__spreadArray(items1, items, false))();
}, obj);
export const createMemoizedPluralRules = require("monadic").memoize(() => {
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
  const items1 = [undefined];
  const obj = require(1281) /* e */;
  return new bind.apply(PluralRules, require(1281) /* e */.__spreadArray(items1, items, false))();
}, obj);
export const createMemoizedLocale = require("monadic").memoize(() => {
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
  const items1 = [undefined];
  const obj = require(1281) /* e */;
  return new bind.apply(Locale, require(1281) /* e */.__spreadArray(items1, items, false))();
}, obj1);
export const createMemoizedListFormat = require("monadic").memoize(() => {
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
  const items1 = [undefined];
  const obj = require(1281) /* e */;
  return new bind.apply(ListFormat, require(1281) /* e */.__spreadArray(items1, items, false))();
}, obj2);