// === Module 986: nativeReleaseIntegration ===

// Module 986 (nativeReleaseIntegration)
function processEvent(arg0, arg1, arg2) {
  let closure_0 = arg0;
  let closure_1 = arg2;
  return fn(this, undefined, undefined, function*() {
    let __sentry_dist;
    let __sentry_release;
    let closure_2;
    let options = tmp;
    const value = tmp4;
    options = options.getOptions();
    const extra2 = value.extra;
    if (null !== extra2) {
      if (undefined !== extra2) {
        __sentry_release = extra2.__sentry_release;
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
        __sentry_dist = extra.__sentry_dist;
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
        let c5 = 3;
        const obj4 = { value, done: true };
        return obj4;
      }
    }
    const NATIVE = value(options[0]).NATIVE;
    yield NATIVE.fetchNativeRelease();
    if (1 === c4) {
      let c3 = 0;
    } else if (arg0 === 1) {
      c5 = 3;
      throw value;
    } else if (arg0 === 2) {
      c3 = 0;
      c5 = 3;
      const obj = { value, done: true };
      return obj;
    } else {
      const tmp43 = value;
      if (tmp43) {
        if (!closure_129_0.release) {
          const _HermesInternal = HermesInternal;
          closure_129_0.release = "" + value.id + "@" + value.version + "+" + value.build;
        }
        if (!closure_129_0.dist) {
          const _HermesInternal2 = HermesInternal;
          closure_129_0.dist = "" + value.build;
        }
      }
      c3 = 0;
    }
    return closure_129_0;
  });
}
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

export const nativeReleaseIntegration = () => ({
  name: "Release",
  setupOnce() {

  },
  processEvent
});