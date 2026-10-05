// === Module 17653: ? ===

// Module 17653
import _createClass_mod from "_createClass" /* 42 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _assertThisInitialized from "_assertThisInitialized" /* 94 */;
import c3_mod from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import _wrapNativeSuper from "_wrapNativeSuper" /* 158 */;

let c1;

let POSITIVE_INFINITY;
let _moduleResult1;
let fn2;
const o2 = function o(arg0, arg1) {

};
function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

    }));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
let _createClass = _createClass_mod;
let c3 = c3_mod;
if (typeof exports === "object") {
  if (undefined !== module) {
    const _Error = Error;
    const fn3 = function t(arg0) {
      let constructResult;
      const self = this;
      o(this, fn);
      let str = "Timed out";
      if (null != arg0) {
        const _HermesInternal = HermesInternal;
        str = "Timed out after waiting for " + arg0 + " ms";
      }
      const items = [str];
      const obj = _getPrototypeOf(fn);
      if (_isNativeReflectConstruct()) {
        const _Reflect = Reflect;
        constructResult = Reflect.construct(obj, items, _getPrototypeOf(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      const tmp5Result = POSITIVE_INFINITY(self, constructResult);
      Object.setPrototypeOf(closure_2(tmp5Result), fn.prototype);
      return tmp5Result;
    };
    _inherits(fn3, _wrapNativeSuper(Error));
    let o = o2;
    const _Number = Number;
    const POSITIVE_INFINITY2 = Number.POSITIVE_INFINITY;
    const fn4 = function r(arg0, timeout, arg2) {
      let raceResult;
      const f153811 = function(arg0, arg1) {
        const f155559 = (fn, fn2) => {
          try {
            fn(closure_1_0());
          } catch (tmp4) {
            fn2(tmp4);
          }
        };
        closure_0 = arg0;
        let closure_1 = arg1;
        function r() {
          if (!c3) {
            let self = this;
            let self2 = this;
            let promise = new Promise(f155559);
            const tmp3 = promise;
            let nextPromise = promise.then(function(result) {
              const tmp = result;
              if (tmp) {
                closure_1_0(result);
              } else if (typeof num === "function") {
                closure_0 = num2;
                closure_1 = tmp3;
                const self = this;
                const self2 = this;
                const promise = new Promise((dependencyMap, fn) => {
                  try {
                    closure_0.schedule(dependencyMap, closure_1);
                  } catch (tmp5) {
                    fn(tmp5);
                  }
                });
                const tmp5 = promise;
                const nextPromise = promise.then(closure_1_2);
                nextPromise.catch(closure_1_1);
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            });
            nextPromise.catch(closure_1);
          }
        }
        if (!c3) {
          const _Promise = Promise;
          let self = this;
          let self2 = this;
          let promise = new Promise(f155559);
          let tmp3 = promise;
          let nextPromise = promise.then(function(result) {
            const tmp = result;
            if (tmp) {
              closure_1_0(result);
            } else if (typeof num === "function") {
              closure_0 = num2;
              closure_1 = tmp3;
              const self = this;
              const self2 = this;
              const promise = new Promise((dependencyMap, fn) => {
                try {
                  closure_0.schedule(dependencyMap, closure_1);
                } catch (tmp5) {
                  fn(tmp5);
                }
              });
              const tmp5 = promise;
              const nextPromise = promise.then(closure_1_2);
              nextPromise.catch(closure_1_1);
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          });
          const catchPromise = nextPromise.catch(arg1);
        }
      };
      closure_0 = arg0;
      let tmp = timeout;
      if (typeof timeout !== "number") {
        timeout = undefined;
        if (null != timeout) {
          timeout = timeout.timeout;
        }
        tmp = timeout;
      }
      let num = 5000;
      if (null !== tmp) {
        num = 5000;
        if (undefined !== tmp) {
          num = tmp;
        }
      }
      let tmp3 = arg2;
      if (typeof timeout !== "number") {
        let prop;
        if (null != timeout) {
          prop = timeout.intervalBetweenAttempts;
        }
        tmp3 = prop;
      }
      let num2 = 50;
      if (null !== tmp3) {
        num2 = 50;
        if (undefined !== tmp3) {
          num2 = tmp3;
        }
      }
      let c3 = false;
      let fn;
      if (num !== c3) {
        fn = function() {
          let tmp;
          if (typeof o === "function") {
            closure_0 = closure_2;
            let closure_1 = tmp;
            const self = this;
            const self2 = this;
            const promise = new Promise((dependencyMap, fn) => {
              try {
                closure_0.schedule(dependencyMap, closure_1);
              } catch (tmp5) {
                fn(tmp5);
              }
            });
            return promise.then(() => {
              c3 = true;
              const tmp = new closure_0(num);
              throw tmp;
            });
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        };
      }
      if (null != fn) {
        const self3 = this;
        const self4 = this;
        let promise = new Promise(f153811);
        const items = [promise, fn()];
        raceResult = race(items);
      } else {
        let tmp5 = globalThis;
        let _Promise = Promise;
        let self = this;
        let self2 = this;
        raceResult = new Promise(f153811);
      }
      return raceResult;
    };
    let num = 50;
    exports.DEFAULT_INTERVAL_BETWEEN_ATTEMPTS_IN_MS = 50;
    let num2 = 5000;
    exports.DEFAULT_TIMEOUT_IN_MS = 5000;
    exports.TimeoutError = _createClass(fn3);
    exports.WAIT_FOREVER = POSITIVE_INFINITY2;
    exports.default = fn4;
    exports.waitUntil = fn4;
    const _Object = Object;
    let str = "__esModule";
    _createClass(fn3);
  }
}
if (typeof globalThis.define === "function") {
  const define2 = globalThis.define;
  if (globalThis.define.amd) {
    globalThis.define(["exports"], function i(arg0) {
      let fn = function t(arg0) {
        let constructResult;
        const self = this;
        o(this, fn);
        let str = "Timed out";
        if (null != arg0) {
          const _HermesInternal = HermesInternal;
          str = "Timed out after waiting for " + arg0 + " ms";
        }
        const items = [str];
        const obj = _getPrototypeOf(fn);
        if (_isNativeReflectConstruct()) {
          const _Reflect = Reflect;
          constructResult = Reflect.construct(obj, items, _getPrototypeOf(self).constructor);
        } else {
          constructResult = obj.apply(self, items);
        }
        const tmp5Result = POSITIVE_INFINITY(self, constructResult);
        Object.setPrototypeOf(closure_2(tmp5Result), fn.prototype);
        return tmp5Result;
      };
      let tmp = _inherits(fn, _wrapNativeSuper(Error));
      const tmp2 = _createClass(fn);
      _createClass = tmp2;
      const o = o2;
      let closure_2 = {
        schedule(dependencyMap, arg1) {
          const timeout = setTimeout(() => {
            if (null != c1) {
              const _clearTimeout = clearTimeout;
              clearTimeout(tmp);
            }
            c1 = undefined;
            dependencyMap();
          }, arg1);
          return {
            cancel() {
              if (null != c1) {
                const _clearTimeout = clearTimeout;
                clearTimeout(tmp);
              }
              c1 = undefined;
            }
          };
        }
      };
      const fn2 = function r(arg0, timeout, arg2) {
        let raceResult;
        const f153811 = function(arg0, arg1) {
          const f155559 = (fn, fn2) => {
            try {
              fn(closure_1_0());
            } catch (tmp4) {
              fn2(tmp4);
            }
          };
          closure_0 = arg0;
          let closure_1 = arg1;
          function r() {
            if (!c3) {
              let self = this;
              let self2 = this;
              let promise = new Promise(f155559);
              const tmp3 = promise;
              let nextPromise = promise.then(function(result) {
                const tmp = result;
                if (tmp) {
                  closure_1_0(result);
                } else if (typeof num === "function") {
                  closure_0 = num2;
                  closure_1 = tmp3;
                  const self = this;
                  const self2 = this;
                  const promise = new Promise((dependencyMap, fn) => {
                    try {
                      closure_0.schedule(dependencyMap, closure_1);
                    } catch (tmp5) {
                      fn(tmp5);
                    }
                  });
                  const tmp5 = promise;
                  const nextPromise = promise.then(closure_1_2);
                  nextPromise.catch(closure_1_1);
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              });
              nextPromise.catch(closure_1);
            }
          }
          if (!c3) {
            const _Promise = Promise;
            let self = this;
            let self2 = this;
            let promise = new Promise(f155559);
            let tmp3 = promise;
            let nextPromise = promise.then(function(result) {
              const tmp = result;
              if (tmp) {
                closure_1_0(result);
              } else if (typeof num === "function") {
                closure_0 = num2;
                closure_1 = tmp3;
                const self = this;
                const self2 = this;
                const promise = new Promise((dependencyMap, fn) => {
                  try {
                    closure_0.schedule(dependencyMap, closure_1);
                  } catch (tmp5) {
                    fn(tmp5);
                  }
                });
                const tmp5 = promise;
                const nextPromise = promise.then(closure_1_2);
                nextPromise.catch(closure_1_1);
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            });
            const catchPromise = nextPromise.catch(arg1);
          }
        };
        closure_0 = arg0;
        let tmp = timeout;
        if (typeof timeout !== "number") {
          timeout = undefined;
          if (null != timeout) {
            timeout = timeout.timeout;
          }
          tmp = timeout;
        }
        let num = 5000;
        if (null !== tmp) {
          num = 5000;
          if (undefined !== tmp) {
            num = tmp;
          }
        }
        let tmp3 = arg2;
        if (typeof timeout !== "number") {
          let prop;
          if (null != timeout) {
            prop = timeout.intervalBetweenAttempts;
          }
          tmp3 = prop;
        }
        let num2 = 50;
        if (null !== tmp3) {
          num2 = 50;
          if (undefined !== tmp3) {
            num2 = tmp3;
          }
        }
        let c3 = false;
        let fn;
        if (num !== c3) {
          fn = function() {
            let tmp;
            if (typeof o === "function") {
              closure_0 = closure_2;
              let closure_1 = tmp;
              const self = this;
              const self2 = this;
              const promise = new Promise((dependencyMap, fn) => {
                try {
                  closure_0.schedule(dependencyMap, closure_1);
                } catch (tmp5) {
                  fn(tmp5);
                }
              });
              return promise.then(() => {
                c3 = true;
                const tmp = new closure_0(num);
                throw tmp;
              });
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          };
        }
        if (null != fn) {
          const self3 = this;
          const self4 = this;
          let promise = new Promise(f153811);
          const items = [promise, fn()];
          raceResult = race(items);
        } else {
          let tmp5 = globalThis;
          let _Promise = Promise;
          let self = this;
          let self2 = this;
          raceResult = new Promise(f153811);
        }
        return raceResult;
      };
      arg0.DEFAULT_INTERVAL_BETWEEN_ATTEMPTS_IN_MS = 50;
      arg0.DEFAULT_TIMEOUT_IN_MS = 5000;
      arg0.TimeoutError = tmp2;
      arg0.WAIT_FOREVER = POSITIVE_INFINITY;
      arg0.default = fn2;
      arg0.waitUntil = fn2;
    });
  }
}
let self = this;
if (typeof globalThis !== "undefined") {
  self = globalThis;
}
let obj = { DEFAULT_INTERVAL_BETWEEN_ATTEMPTS_IN_MS: 50, DEFAULT_TIMEOUT_IN_MS: 5000, TimeoutError: _moduleResult1, WAIT_FOREVER: POSITIVE_INFINITY, default: fn2, waitUntil: fn2 };
self["async-wait-until"] = obj;
let fn = function t(arg0) {
  let constructResult;
  const self = this;
  o(this, fn);
  let str = "Timed out";
  if (null != arg0) {
    const _HermesInternal = HermesInternal;
    str = "Timed out after waiting for " + arg0 + " ms";
  }
  const items = [str];
  const obj = _getPrototypeOf(fn);
  if (_isNativeReflectConstruct()) {
    const _Reflect = Reflect;
    constructResult = Reflect.construct(obj, items, _getPrototypeOf(self).constructor);
  } else {
    constructResult = obj.apply(self, items);
  }
  const tmp5Result = POSITIVE_INFINITY(self, constructResult);
  Object.setPrototypeOf(closure_2(tmp5Result), fn.prototype);
  return tmp5Result;
};
_inherits(fn, _wrapNativeSuper(Error));
_moduleResult1 = _createClass(fn);
o = o2;
let closure_2 = {
  schedule(dependencyMap, arg1) {
    const timeout = setTimeout(() => {
      if (null != c1) {
        const _clearTimeout = clearTimeout;
        clearTimeout(tmp);
      }
      c1 = undefined;
      dependencyMap();
    }, arg1);
    return {
      cancel() {
        if (null != c1) {
          const _clearTimeout = clearTimeout;
          clearTimeout(tmp);
        }
        c1 = undefined;
      }
    };
  }
};
POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
fn2 = function r(arg0, timeout, arg2) {
  let raceResult;
  const f153811 = function(arg0, arg1) {
    const f155559 = (fn, fn2) => {
      try {
        fn(closure_1_0());
      } catch (tmp4) {
        fn2(tmp4);
      }
    };
    closure_0 = arg0;
    let closure_1 = arg1;
    function r() {
      if (!c3) {
        let self = this;
        let self2 = this;
        let promise = new Promise(f155559);
        const tmp3 = promise;
        let nextPromise = promise.then(function(result) {
          const tmp = result;
          if (tmp) {
            closure_1_0(result);
          } else if (typeof num === "function") {
            closure_0 = num2;
            closure_1 = tmp3;
            const self = this;
            const self2 = this;
            const promise = new Promise((dependencyMap, fn) => {
              try {
                closure_0.schedule(dependencyMap, closure_1);
              } catch (tmp5) {
                fn(tmp5);
              }
            });
            const tmp5 = promise;
            const nextPromise = promise.then(closure_1_2);
            nextPromise.catch(closure_1_1);
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        });
        nextPromise.catch(closure_1);
      }
    }
    if (!c3) {
      const _Promise = Promise;
      let self = this;
      let self2 = this;
      let promise = new Promise(f155559);
      let tmp3 = promise;
      let nextPromise = promise.then(function(result) {
        const tmp = result;
        if (tmp) {
          closure_1_0(result);
        } else if (typeof num === "function") {
          closure_0 = num2;
          closure_1 = tmp3;
          const self = this;
          const self2 = this;
          const promise = new Promise((dependencyMap, fn) => {
            try {
              closure_0.schedule(dependencyMap, closure_1);
            } catch (tmp5) {
              fn(tmp5);
            }
          });
          const tmp5 = promise;
          const nextPromise = promise.then(closure_1_2);
          nextPromise.catch(closure_1_1);
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      });
      const catchPromise = nextPromise.catch(arg1);
    }
  };
  closure_0 = arg0;
  let tmp = timeout;
  if (typeof timeout !== "number") {
    timeout = undefined;
    if (null != timeout) {
      timeout = timeout.timeout;
    }
    tmp = timeout;
  }
  let num = 5000;
  if (null !== tmp) {
    num = 5000;
    if (undefined !== tmp) {
      num = tmp;
    }
  }
  let tmp3 = arg2;
  if (typeof timeout !== "number") {
    let prop;
    if (null != timeout) {
      prop = timeout.intervalBetweenAttempts;
    }
    tmp3 = prop;
  }
  let num2 = 50;
  if (null !== tmp3) {
    num2 = 50;
    if (undefined !== tmp3) {
      num2 = tmp3;
    }
  }
  let c3 = false;
  let fn;
  if (num !== c3) {
    fn = function() {
      let tmp;
      if (typeof o === "function") {
        closure_0 = closure_2;
        let closure_1 = tmp;
        const self = this;
        const self2 = this;
        const promise = new Promise((dependencyMap, fn) => {
          try {
            closure_0.schedule(dependencyMap, closure_1);
          } catch (tmp5) {
            fn(tmp5);
          }
        });
        return promise.then(() => {
          c3 = true;
          const tmp = new closure_0(num);
          throw tmp;
        });
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
  }
  if (null != fn) {
    const self3 = this;
    const self4 = this;
    let promise = new Promise(f153811);
    const items = [promise, fn()];
    raceResult = race(items);
  } else {
    let tmp5 = globalThis;
    let _Promise = Promise;
    let self = this;
    let self2 = this;
    raceResult = new Promise(f153811);
  }
  return raceResult;
};