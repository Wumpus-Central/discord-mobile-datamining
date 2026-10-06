// === Module 13989: strategies ===

// Module 13989 (strategies)
function monadic(call, get, fn, num) {
  let tmp2 = num;
  const tmp = null == num || typeof num === "number" || typeof num === "boolean";
  if (!tmp) {
    tmp2 = fn(num);
  }
  let value = get.get(tmp2);
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
  let value = get.get(tmp2);
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
function serializerDefault() {
  return JSON.stringify(arguments);
}
class ObjectWithoutPrototypeCache {
  constructor() {
    this.cache = Object.create(null);
  }
  get(arg0) {
    return this.cache[arg0];
  }
  set(arg0, arg1) {
    this.cache[arg0] = arg1;
  }
}
let closure_5 = {
  create() {
    const self = this;
    if (typeof ObjectWithoutPrototypeCache === "function") {
      const _Object = Object;
      self.cache = Object.create(null);
      return self;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
};

export const memoize = function memoize(arg0, cache) {
  const tmp = cache;
  if (tmp) {
    if (cache.cache) {
      cache = cache.cache;
    }
    if (cache) {
      let serializer;
      if (cache.serializer) {
        serializer = cache.serializer;
      }
      if (cache) {
        let strategy;
        if (cache.strategy) {
          strategy = cache.strategy;
        }
        const obj = { cache, serializer };
        return strategy(arg0, obj);
      }
      strategy = strategyDefault;
    }
    serializer = serializerDefault;
  }
  cache = closure_5;
};
export const strategies = {
  variadic: function strategyVariadic(c165, cache) {
    cache = cache.cache;
    return variadic.bind(this, c165, cache.create(), cache.serializer);
  },
  monadic: function strategyMonadic(c165, cache) {
    cache = cache.cache;
    return monadic.bind(this, c165, cache.create(), cache.serializer);
  }
};