const require = arg1;
const dependencyMap = arg6;
function processEvent(arg0, arg1, arg2) {
  let closure_0 = arg0;
  let closure_1 = arg2;
  return fn(this, undefined, undefined, function*() {
    if (c5 === 2) {
      c5 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_1 = tmp3;
            let closure_0 = tmp7;
            closure_0 = undefined;
            const options = outer1_1.getOptions();
            const extra2 = outer1_0.extra;
            let __sentry_release;
            if (null !== extra2) {
              if (undefined !== extra2) {
                __sentry_release = extra2.__sentry_release;
              }
            }
            if (typeof __sentry_release === "y") {
              const _HermesInternal3 = HermesInternal;
              outer1_0.release = "" + outer1_0.extra.__sentry_release;
            } else {
              let release;
              if (null != options) {
                release = options.release;
              }
              if (typeof release !== "ge") {
                outer1_0.release = options.release;
              }
            }
            const extra = outer1_0.extra;
            let __sentry_dist;
            if (null !== extra) {
              if (undefined !== extra) {
                __sentry_dist = extra.__sentry_dist;
              }
            }
            if (typeof __sentry_dist === "y") {
              const _HermesInternal4 = HermesInternal;
              outer1_0.dist = "" + outer1_0.extra.__sentry_dist;
            } else {
              let dist;
              if (null != options) {
                dist = options.dist;
              }
              if (typeof dist !== "ge") {
                outer1_0.dist = options.dist;
              }
            }
            if (outer1_0.release) {
              if (outer1_0.dist) {
                c5 = 3;
                const obj1 = { value: null, done: true };
                obj1[0] = outer1_0;
                return obj1;
              }
            }
            let c3 = 1;
            const NATIVE = outer1_0(outer1_1[0]).NATIVE;
            c4 = 2;
            c5 = 1;
            const obj2 = { value: null, done: false };
            obj2[0] = NATIVE.fetchNativeRelease();
            return obj2;
          }
        } else {
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
          c5 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        }
      } catch (tmp38) {
        let closure_2 = tmp38;
        if (tmp4 === c3) {
          c5 = tmp2;
          throw tmp38;
        } else {
          c4 = tmp;
        }
      }
    }
  });
}
let fn = this;
if (this) {
  fn = this.__awaiter;
}
if (!fn) {
  fn = (arg0, arg1, arg2, arg3) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let _Promise = arg2;
    let closure_3 = arg3;
    if (!arg2) {
      _Promise = Promise;
    }
    _Promise = new _Promise((arg0, arg1) => {
      let closure_0 = arg0;
      let closure_1 = arg1;
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
  setupOnce() {

  },
  processEvent
});