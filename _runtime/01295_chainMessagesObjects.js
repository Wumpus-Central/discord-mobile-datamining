// _runtime/01295_chainMessagesObjects.js
arg5.chainMessagesObjects = function chainMessagesObjects(importDefaultResult, $$loader2) {
  let tmp2 = "IntlMessagesProxy" === $$loader2[Symbol.toStringTag];
  if ("IntlMessagesProxy" === importDefaultResult[Symbol.toStringTag]) {
    if (tmp2) {
      const $$loader = importDefaultResult.$$loader;
      $$loader.fallbackWith($$loader2.$$loader);
      let merged = importDefaultResult;
    }
    return merged;
  }
  if ("IntlMessagesProxy" !== importDefaultResult[Symbol.toStringTag]) {
    if (!tmp2) {
      const _Object = Object;
      const _Object2 = Object;
      merged = Object.assign(Object.assign({}, $$loader2), importDefaultResult);
    }
  }
  if ("IntlMessagesProxy" === importDefaultResult[Symbol.toStringTag]) {
    if (!tmp2) {
      const _Object3 = Object;
      merged = Object.assign(importDefaultResult.$$baseObject, $$loader2);
    }
  }
  if (tmp2) {
    tmp2 = !tmp;
  }
  merged = importDefaultResult;
  if (tmp2) {
    const _Object4 = Object;
    merged = Object.assign($$loader2.$$baseObject, importDefaultResult);
  }
};
arg5.makeMessagesProxy = function makeMessagesProxy(loader) {
  closure_0 = loader;
  let obj = {};
  obj = {
    ownKeys(arg0) {
      return Reflect.ownKeys(arg0);
    },
    getOwnPropertyDescriptor(arg0, arg1) {
      if (!arg0[arg1]) {
        closure_0 = arg1;
        arg0[arg1] = (arg0) => closure_0.get(closure_0, arg0);
      }
      return Reflect.getOwnPropertyDescriptor(arg0, arg1);
    },
    get(arg0, arg1) {
      let str = "object";
      if ("$$typeof" !== arg1) {
        const _Symbol = Symbol;
        let str2 = "IntlMessagesProxy";
        if (arg1 !== Symbol.toStringTag) {
          if (!arg0[arg1]) {
            closure_0 = arg1;
            arg0[arg1] = (arg0) => closure_0.get(closure_0, arg0);
          }
          str2 = arg0[arg1];
        }
        str = str2;
      }
      return str;
    }
  };
  const proxy = new Proxy(obj, obj);
  Object.defineProperty(proxy, "$$baseObject", { value: obj, enumerable: false, configurable: false, writable: false });
  obj = { value: loader, enumerable: false, configurable: false, writable: false };
  Object.defineProperty(proxy, "$$loader", obj);
  return proxy;
};