// _runtime/metro/00975__.js
const require = arg1;
const dependencyMap = arg6;
function processEvent(arg0, arg1, arg2) {
  closure_0 = arg0;
  closure_1 = arg2;
  return fn(this, undefined, undefined, function*() {
    const options = tmp3.getOptions();
    const extra2 = value.extra;
    if (null !== extra2) {
      if (undefined !== extra2) {
        const __sentry_release = extra2.__sentry_release;
      }
    }
    if (typeof __sentry_release === "string") {
      const _HermesInternal3 = HermesInternal;
      value.release = "" + value.extra.__sentry_release;
    } else {
      let release;
      if (null != options) {
        release = options.release;
      }
      if (typeof release === "string") {
        value.release = options.release;
      }
    }
    const extra = value.extra;
    if (null !== extra) {
      if (undefined !== extra) {
        const __sentry_dist = extra.__sentry_dist;
      }
    }
    if (typeof __sentry_dist === "string") {
      const _HermesInternal4 = HermesInternal;
      value.dist = "" + value.extra.__sentry_dist;
    } else {
      let dist;
      if (null != options) {
        dist = options.dist;
      }
      if (typeof dist === "string") {
        value.dist = options.dist;
      }
    }
    if (value.release) {
      if (value.dist) {
        c5 = 3;
        return { value, done: true };
      }
    }
    const NATIVE = value(tmp3[0]).NATIVE;
    yield NATIVE.fetchNativeRelease();
    if (1 === tmp7) {
      c3 = 0;
      c5 = 3;
    } else if (arg0 === 1) {
      c5 = 3;
      throw arg1;
    } else if (arg0 !== 2) {
      closure_128_0 = arg1;
      if (closure_128_0) {
        if (!closure_129_0.release) {
          const _HermesInternal = HermesInternal;
          closure_129_0.release = "" + closure_128_0.id + "@" + closure_128_0.version + "+" + closure_128_0.build;
        }
        if (!closure_129_0.dist) {
          const _HermesInternal2 = HermesInternal;
          closure_129_0.dist = "" + closure_128_0.build;
        }
      }
      c3 = 0;
    }
    return arg1;
  });
}
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
    _Promise = new _Promise((fn, arg1) => {
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
          let tmp = done.value;
          closure_0 = tmp;
          if (!(tmp instanceof Promise)) {
            tmp = new tmp((fn) => {
              fn(value);
            });
          }
          tmp.then(fulfilled, iter);
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
        let tmp3 = value;
        if (!(value instanceof fulfilled)) {
          tmp3 = new tmp3((fn) => {
            fn(value);
          });
        }
        tmp3.then(fulfilled, rejected);
      }
    });
    return _Promise;
  };
}

export () => ({
  name: "Release",
  setupOnce() {

  },
  processEvent
})