// _runtime/01112_modulesLoaderIntegration.js
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
arg5.modulesLoaderIntegration = () => {
  c0 = false;
  c1 = null;
  return {
    name: "ModulesLoader",
    setupOnce() {},
    processEvent: (arg0) => {
      closure_0 = arg0;
      return closure_1_2(undefined, undefined, undefined, function* () {
        if (c5 === 2) {
          c5 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp7 === 3) {
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
                closure_1 = tmp3;
                let _true = tmp5;
                if (!_true) {
                  c3 = 1;
                  const NATIVE = _true(closure_2_1[0]).NATIVE;
                  c4 = 2;
                  c5 = 1;
                  obj1 = { value: null, done: false };
                  obj1[0] = NATIVE.fetchModules();
                  return obj1;
                }
              }
            } else {
              if (1 === tmp8) {
                c3 = 0;
                _true = closure_2;
                const debug = _true(closure_2_1[1]).debug;
                const _HermesInternal = HermesInternal;
                debug.log("Failed to get modules from native: " + _true);
              } else if (arg0 === 1) {
                c5 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c3 = 0;
                c5 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                closure_1 = arg1;
                c3 = 0;
              }
              _true = true;
            }
            if (closure_1) {
              const _Object = Object;
              const _Object2 = Object;
              _true.modules = Object.assign(Object.assign({}, closure_1), _true.modules);
            }
            c5 = 3;
            const obj2 = { value: null, done: true };
            obj2[0] = _true;
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
    },
  };
};
