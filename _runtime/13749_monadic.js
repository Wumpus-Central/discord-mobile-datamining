// === Module 13749: monadic ===

// Module 13749 (monadic)
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
arg5.strategies = undefined;
arg5.memoize = function memoize(arg0, cache) {
  if (cache) {
    if (cache.cache) {
      cache = cache.cache;
    }
    if (cache) {
      if (cache.serializer) {
        let serializer = cache.serializer;
      }
      if (cache) {
        if (cache.strategy) {
          let strategy = cache.strategy;
        }
        const obj = { cache: null, serializer: null };
        obj[0] = cache;
        obj[1] = serializer;
        return strategy(arg0, obj);
      }
      strategy = strategyDefault;
    }
    serializer = serializerDefault;
  }
  cache = closure_5;
};
function serializerDefault() {
  return JSON.stringify(arguments);
}
class ObjectWithoutPrototypeCache {
  constructor() {
    this.cache = Object.create(null);
    return;
  }
  get(arg0) {
    return this.cache[arg0];
  }
  set(arg0, arg1) {
    this.cache[arg0] = arg1;
    return;
  }
}
let closure_5 = {
  create() {
    if (typeof ObjectWithoutPrototypeCache !== "function") {
      HermesBuiltin.throwTypeError();
    }
    new.target.cache = Object.create(null);
    return new.target;
  }
};
arg5.strategies = {
  variadic: function strategyVariadic(c165, cache) {
    cache = cache.cache;
    return variadic.bind(this, c165, cache.create(), cache.serializer);
  },
  monadic: function strategyMonadic(c165, cache) {
    cache = cache.cache;
    return monadic.bind(this, c165, cache.create(), cache.serializer);
  }
};