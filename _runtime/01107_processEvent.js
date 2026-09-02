// _runtime/01107_processEvent.js
const require = arg1;
const dependencyMap = arg6;
function processEvent(arg0, arg1, arg2) {
  closure_0 = arg0;
  closure_1 = arg2;
  return fn(this, undefined, undefined, function* () {
    closure_1 = tmp3;
    const options = closure_1_1.getOptions();
    const extra2 = closure_1_0.extra;
    if (null !== extra2) {
      if (undefined !== extra2) {
        const __sentry_release = extra2.__sentry_release;
      }
    }
    if (typeof __sentry_release === "string") {
      const _HermesInternal3 = HermesInternal;
      closure_1_0.release = "" + closure_1_0.extra.__sentry_release;
    } else {
      let release;
      if (null != options) {
        release = options.release;
      }
      if (typeof release === "string") {
        closure_1_0.release = options.release;
      }
    }
    const extra = closure_1_0.extra;
    if (null !== extra) {
      if (undefined !== extra) {
        const __sentry_dist = extra.__sentry_dist;
      }
    }
    if (typeof __sentry_dist === "string") {
      const _HermesInternal4 = HermesInternal;
      closure_1_0.dist = "" + closure_1_0.extra.__sentry_dist;
    } else {
      let dist;
      if (null != options) {
        dist = options.dist;
      }
      if (typeof dist === "string") {
        closure_1_0.dist = options.dist;
      }
    }
    if (closure_1_0.release) {
      if (closure_1_0.dist) {
        c5 = 3;
        obj1 = { value: null, done: true };
        obj1[0] = closure_1_0;
        return obj1;
      }
    }
    c3 = 1;
    const NATIVE = closure_1_0(closure_1_1[0]).NATIVE;
    yield NATIVE.fetchNativeRelease();
    if (1 === tmp7) {
      c3 = 0;
      c5 = 3;
    } else if (arg0 === 1) {
      c5 = 3;
      throw arg1;
    } else if (arg0 !== 2) {
      closure_0 = arg1;
      if (closure_0) {
        if (!closure_0.release) {
          const _HermesInternal = HermesInternal;
          closure_0.release = "" + closure_0.id + "@" + closure_0.version + "+" + closure_0.build;
        }
        if (!closure_0.dist) {
          const _HermesInternal2 = HermesInternal;
          closure_0.dist = "" + closure_0.build;
        }
      }
      c3 = 0;
    }
    c3 = 0;
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
    _Promise = new _Promise((arg0, arg1) => {
      closure_0 = arg0;
      closure_1 = arg1;
      function fulfilled(arg0) {
        try {
          step(iter.next(arg0));
        } catch (tmp5) {
          callback2(tmp5);
        }
      }
      function rejected(arg0) {
        try {
          step(iter.throw(arg0));
        } catch (tmp5) {
          callback2(tmp5);
        }
      }
      let iter = rejected;
      function step(done) {
        if (done.done) {
          callback(done.value);
        } else {
          let tmp = done.value;
          callback = tmp;
          if (!(tmp instanceof fulfilled)) {
            tmp = new tmp((arg0) => {
              arg0(closure_0);
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
      const value = iter2.value;
      if (iter2.done) {
        arg0(value);
      } else {
        closure_0 = value;
        let tmp3 = value;
        if (!(value instanceof fulfilled)) {
          tmp3 = new tmp3((arg0) => {
            arg0(closure_0);
          });
        }
        tmp3.then(fulfilled, rejected);
      }
    });
    return _Promise;
  };
}
arg5.nativeReleaseIntegration = () => ({
  name: "Release",
  setupOnce() {},
  processEvent,
});
