// === Module 980: modulesLoaderIntegration ===

// Module 980 (modulesLoaderIntegration)
const require = arg1;
const dependencyMap = arg6;
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

export () => {
  c0 = false;
  c1 = null;
  return {
    name: "ModulesLoader",
    setupOnce() {

    },
    processEvent: (arg0) => {
      closure_0 = arg0;
      return fn(undefined, undefined, undefined, function*() {
        if (c5 === 2) {
          c5 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp7 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            let obj = { value, done: true };
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
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                closure_1 = tmp3;
                c0 = tmp5;
                if (!c0) {
                  c3 = 1;
                  const NATIVE = _true(866).NATIVE;
                  c4 = 2;
                  c5 = 1;
                  const obj1 = { value: NATIVE.fetchModules(), done: false };
                  return obj1;
                }
              }
            } else {
              if (1 === tmp8) {
                c3 = 0;
                closure_128_0 = closure_2;
                const debug = _true(682).debug;
                const _HermesInternal = HermesInternal;
                debug.log("Failed to get modules from native: " + closure_128_0);
              } else if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                c5 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                closure_1 = value;
                c3 = 0;
              }
              c0 = true;
            }
            if (closure_1) {
              const _Object = Object;
              const _Object2 = Object;
              _true.modules = Object.assign(Object.assign({}, closure_1), _true.modules);
            }
            c5 = 3;
            const obj2 = { value: closure_129_0, done: true };
            return obj2;
          } catch (tmp26) {
            closure_2 = tmp26;
            if (tmp4 === c3) {
              c5 = tmp2;
              throw tmp26;
            } else {
              c4 = tmp;
            }
          }
        }
      });
    }
  };
}