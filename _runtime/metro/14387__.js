// === Module 14387: ? ===

// Module 14387
import _createClassDefault from "_createClass" /* 42 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

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
function serializerDefault() {
  return JSON.stringify(arguments);
}
class ObjectWithoutPrototypeCache {
  constructor() {
    tmp = closure_0(this, ObjectWithoutPrototypeCache);
    this.cache = Object.create(null);
    return;
  }
}
_classCallCheck = ObjectWithoutPrototypeCache;
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
let closure_5 = _createClassDefault(ObjectWithoutPrototypeCache, items);
let closure_6 = {
  create() {
    return new closure_5();
  }
};

export const memoize = function memoize(arg0, cache) {
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
        const obj = { cache, serializer };
        return strategy(arg0, obj);
      }
      strategy = strategyDefault;
    }
    serializer = serializerDefault;
  }
  cache = closure_6;
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