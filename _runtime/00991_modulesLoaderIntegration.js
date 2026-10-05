// _runtime/00991_modulesLoaderIntegration.js
let c4, c5, closure_2;

const fn =
  (this && this.__awaiter) ||
  ((arg0, arg1, arg2, arg3) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let _Promise = arg2;
    const Promise = arg2;
    let closure_3 = arg3;
    if (!arg2) {
      let tmp = globalThis;
      _Promise = Promise;
    }
    const _Promise1 = new _Promise(function (fn, arg1) {
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

export const modulesLoaderIntegration = () => {
  let _null;
  let obj = {
    name: "ModulesLoader",
    setupOnce() {},
    processEvent: (arg0) => {
      let closure_0 = arg0;
      return fn(undefined, undefined, undefined, function* () {
        let _true;
        let tmp12;
        if (c5 === 2) {
          c5 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          let c3;
          try {
            let closure_1;
            c5 = 2;
            if (0 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                closure_1 = tmp;
                c0 = tmp12;
                tmp12 = c0;
                if (!tmp12) {
                  c3 = 1;
                  const NATIVE = _true(_null[0]).NATIVE;
                  c4 = 2;
                  c5 = 1;
                  const obj4 = { value: NATIVE.fetchModules(), done: false };
                  return obj4;
                }
              }
            } else {
              if (1 === tmp4) {
                c3 = 0;
                _true = closure_2;
                const debug = _true(_null[1]).debug;
                const _HermesInternal = HermesInternal;
                debug.log("Failed to get modules from native: " + _true);
              } else if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                c5 = 3;
                const obj = { value, done: true };
                return obj;
              } else {
                closure_1 = value;
                c3 = 0;
              }
              c0 = true;
            }
            tmp12 = closure_1;
            if (tmp12) {
              tmp12 = _true;
              const _Object = Object;
              const _Object2 = Object;
              _true.modules = Object.assign(Object.assign({}, closure_1), _true.modules);
            }
            tmp12 = closure_129_0;
            c5 = 3;
            const obj5 = { value: tmp12, done: true };
            return obj5;
          } catch (tmp21) {
            closure_2 = tmp21;
            if (0 === c3) {
              c5 = 3;
              throw tmp21;
            } else {
              c4 = 1;
            }
          }
        }
      });
    },
  };
  let c0 = false;
  let c1 = null;
  return obj;
};
