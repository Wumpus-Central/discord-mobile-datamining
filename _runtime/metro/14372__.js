// _runtime/metro/14372__.js
const SymbolResult = Symbol("wrapper");
const SymbolResult1 = Symbol("impl");
let closure_2 = Symbol("SameObject caches");
const items = [];
const forResult = Symbol.for("[webidl2js]  constructor registry");
const prototypeOf = Object.getPrototypeOf(Object.getPrototypeOf(items[Symbol.iterator]()));
const get = Object.getOwnPropertyDescriptor(ArrayBuffer.prototype, "byteLength").get;
const SymbolResult2 = Symbol("internal");
const SymbolResult3 = Symbol("supports property index");
const SymbolResult4 = Symbol("supported property indices");
const SymbolResult5 = Symbol("supports property name");
const SymbolResult6 = Symbol("supported property names");
const SymbolResult7 = Symbol("indexed property get");
const SymbolResult8 = Symbol("indexed property set new");
const SymbolResult9 = Symbol("indexed property set existing");
const SymbolResult10 = Symbol("named property get");
const SymbolResult11 = Symbol("named property set new");
const SymbolResult12 = Symbol("named property set existing");

export default {
  isObject(obj) {
    let tmp = typeof obj === "object";
    if (typeof obj === "object") {
      tmp = null !== obj;
    }
    if (!tmp) {
      tmp = typeof obj === "function";
    }
    return tmp;
  },
  hasOwn(arg0, key10009) {
    hasOwnProperty = Object.prototype.hasOwnProperty;
    const call = hasOwnProperty.call;
    return typeof call === "unknown" ? hasOwnProperty(key10009) : call(arg0, key10009);
  },
  wrapperSymbol: SymbolResult,
  implSymbol: SymbolResult1,
  getSameObject(self, searchParams, fn) {
    if (!self[closure_2]) {
      const _Object = Object;
      self[closure_2] = Object.create(null);
    }
    if (!(searchParams in self[closure_2])) {
      self[closure_2][searchParams] = fn();
    }
    return self[closure_2][searchParams];
  },
  ctorRegistrySymbol: forResult,
  wrapperForImpl(arg0) {
    let tmp = null;
    if (arg0) {
      tmp = arg0[SymbolResult];
    }
    return tmp;
  },
  implForWrapper(arg0) {
    let tmp = null;
    if (arg0) {
      tmp = arg0[SymbolResult1];
    }
    return tmp;
  },
  tryWrapperForImpl(searchParams) {
    let tmp = null;
    if (searchParams) {
      tmp = searchParams[SymbolResult];
    }
    if (!tmp) {
      tmp = searchParams;
    }
    return tmp;
  },
  tryImplForWrapper(arg0) {
    let tmp = null;
    if (arg0) {
      tmp = arg0[SymbolResult1];
    }
    if (!tmp) {
      tmp = arg0;
    }
    return tmp;
  },
  iterInternalSymbol: SymbolResult2,
  IteratorPrototype: prototypeOf,
  isArrayBuffer(arg0) {
    try {
      const call = get.call;
      if (typeof call === "unknown") {
        get();
      } else {
        call(arg0);
      }
      return true;
    } catch (err) {
      return false;
    }
  },
  isArrayIndexPropName(str) {
    if (typeof str !== "string") {
      return false;
    } else {
      const _Math = Math;
      const diff = Math.pow(2, 32) - 1;
      let tmp = tmp2 !== diff;
      if (str >>> 0 !== diff) {
        const _HermesInternal = HermesInternal;
        tmp = str === "" + tmp2;
      }
      return tmp;
    }
  },
  supportsPropertyIndex: SymbolResult3,
  supportedPropertyIndices: SymbolResult4,
  supportsPropertyName: SymbolResult5,
  supportedPropertyNames: SymbolResult6,
  indexedGet: SymbolResult7,
  indexedSetNew: SymbolResult8,
  indexedSetExisting: SymbolResult9,
  namedGet: SymbolResult10,
  namedSetNew: SymbolResult11,
  namedSetExisting: Symbol("named property set existing"),
  namedDelete: Symbol("named property delete"),
};
