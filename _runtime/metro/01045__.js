// === Module 1045: ? ===

// Module 1045
import AsyncExpiringMap from "AsyncExpiringMap" /* 1039 */;

let c0;

const fn = this && this.__awaiter || ((arg0, arg1, arg2, arg3) => {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let _Promise = arg2;
  const Promise = arg2;
  let closure_3 = arg3;
  if (!arg2) {
    let tmp = globalThis;
    _Promise = Promise;
  }
  const _Promise1 = new _Promise(function(fn, arg1) {
    closure_0 = fn;
    closure_1 = arg1;
    function fulfilled(result) {
      try {
        step(iter.next(result));
      } catch (tmp5) {
        closure_1(tmp5);
      }
    }
    function rejected(arg0) {
      try {
        step(iter.throw(arg0));
      } catch (tmp5) {
        closure_1(tmp5);
      }
    }
    let iter = rejected;
    function step(done) {
      if (done.done) {
        fn(done.value);
      } else {
        let tmp1 = done.value;
        const value = tmp1;
        if (!(tmp1 instanceof Promise)) {
          const self = this;
          const self2 = this;
          tmp1 = new tmp((fn) => {
            fn(value);
          });
        }
        tmp1.then(fulfilled, iter);
      }
    }
    let items = closure_1;
    const tmp = iter;
    const apply = iter.apply;
    const tmp2 = closure_0;
    if (!closure_1) {
      items = [];
    }
    iter = apply(tmp2, items);
    const iter2 = iter.next();
    let value = iter2.value;
    if (iter2.done) {
      const tmp5 = fn(value);
    } else {
      let tmp32 = value;
      if (!(value instanceof fulfilled)) {
        let self = this;
        let self2 = this;
        tmp32 = new tmp3((fn) => {
          fn(value);
        });
      }
      tmp32.then(fulfilled, rejected);
    }
  });
  return _Promise1;
});
const asyncExpiringMap = new AsyncExpiringMap.AsyncExpiringMap({ ttl: 60000 });

export const addTimeToInitialDisplayFallback = (spanId, newScreenTimeToDisplay) => {
  const result = asyncExpiringMap.set(spanId, newScreenTimeToDisplay);
};
export const getTimeToInitialDisplayFallback = (parent_span_id) => {
  let closure_0 = parent_span_id;
  return closure_0(undefined, undefined, undefined, function*() {
    if (c0 === 2) {
      c0 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c0 = 2;
        if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          c0 = 3;
          const obj = { value: asyncExpiringMap.get(parent_span_id), done: true };
          return obj;
        }
      } catch (tmp5) {
        c0 = 3;
        throw tmp5;
      }
    }
  });
};