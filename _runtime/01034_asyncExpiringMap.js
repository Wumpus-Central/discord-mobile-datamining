// _runtime/01034_asyncExpiringMap.js
import AsyncExpiringMap from "01028_AsyncExpiringMap.js";

let fn = this;
if (this) {
  fn = this.__awaiter;
}
if (!fn) {
  fn = (arg0, arg1, arg2, arg3) => {
    closure_0 = arg0;
    closure_1 = arg1;
    let _Promise = arg2;
    closure_3 = arg3;
    if (!arg2) {
      _Promise = Promise;
    }
    return new _Promise((fn, arg1) => {
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
          closure_0(done.value);
        } else {
          let tmp1 = done.value;
          closure_0 = tmp1;
          if (!(tmp1 instanceof Promise)) {
            tmp1 = new tmp((fn) => {
              fn(value);
            });
          }
          tmp1.then(fulfilled, iter);
        }
      }
      let items = closure_1;
      if (!closure_1) {
        items = [];
      }
      iter = iter.apply(closure_0, items);
      const iter2 = iter.next();
      value = iter2.value;
      if (iter2.done) {
        fn(value);
      } else {
        closure_0 = value;
        let tmp32 = value;
        if (!(value instanceof fulfilled)) {
          tmp32 = new tmp3((fn) => {
            fn(value);
          });
        }
        tmp32.then(fulfilled, rejected);
      }
    });
  };
}
const asyncExpiringMap = new AsyncExpiringMap.AsyncExpiringMap({ ttl: 60000 });

export const addTimeToInitialDisplayFallback = (spanId, newScreenTimeToDisplay) => {
  const result = asyncExpiringMap.set(spanId, newScreenTimeToDisplay);
};
export const getTimeToInitialDisplayFallback = (arg0) => {
  closure_0 = arg0;
  return closure_0(undefined, undefined, undefined, function* () {
    if (c0 === 2) {
      c0 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
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
          const obj = { value: asyncExpiringMap.get(closure_0), done: true };
          return obj;
        }
      } catch (tmp6) {
        c0 = tmp;
        throw tmp6;
      }
    }
  });
};
