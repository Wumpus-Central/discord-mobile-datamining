// === Module 16736: _isNativeReflectConstruct ===

// Module 16736 (_isNativeReflectConstruct)
import _createClass from "_createClass" /* 42 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _assertThisInitialized from "_assertThisInitialized" /* 94 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import _wrapNativeSuper from "_wrapNativeSuper" /* 158 */;

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const call = valueOf.call;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    if (typeof call === "unknown") {
      let callResult = valueOf();
    } else {
      callResult = call(constructResult);
    }
    closure_0 = !callResult;
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
let _moduleResult1 = _createClass;
if (typeof exports === "object") {
  if (undefined !== module) {
    const _Error = Error;
    const fn3 = function t(arg0) {
      const self = this;
      o(this, ctor);
      let str = "Timed out";
      if (null != arg0) {
        const _HermesInternal = HermesInternal;
        str = "Timed out after waiting for " + arg0 + " ms";
      }
      const items = [str];
      const obj = _getPrototypeOf(ctor);
      if (_isNativeReflectConstruct()) {
        const _Reflect = Reflect;
        let constructResult = Reflect.construct(obj, items, _getPrototypeOf(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      const tmp5Result = POSITIVE_INFINITY(self, constructResult);
      Object.setPrototypeOf(callback(tmp5Result), ctor.prototype);
      return tmp5Result;
    };
    _inherits(fn3, _wrapNativeSuper(Error));
    const _moduleResult = _createClass(fn3);
    _moduleResult1 = _moduleResult;
    _classCallCheck = function o(arg0, arg1) {

    };
    let obj = { schedule: null };
    obj[0] = function schedule(arg0, arg1) {
      closure_0 = arg0;
      const timeout = setTimeout(() => {
        if (null != c1) {
          const _clearTimeout = clearTimeout;
          clearTimeout(tmp);
        }
        c1 = undefined;
        callback();
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
    };
    _assertThisInitialized = obj;
    const _Number = Number;
    c3 = POSITIVE_INFINITY2;
    const fn4 = function r(arg0, timeout) {
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
      if (null !== tmp3) {
      }
      c3 = false;
      let fn;
      if (num !== c3) {
        fn = () => {
          if (typeof num !== "function") {
            HermesBuiltin.throwTypeError();
          }
          closure_0 = num2;
          return new Promise((arg0, fn) => {
            try {
              closure_0.schedule(arg0, closure_1);
            } catch (tmp5) {
              fn(tmp5);
            }
          }).then((result) => {
            c3 = true;
            throw new closure_0(closure_1);
          });
        };
      }
      if (null != fn) {
        let promise = new Promise((arg0, arg1) => {
          closure_0 = arg0;
          closure_1 = arg1;
          function r() {
            if (!closure_1_3) {
              let promise = new Promise((fn, fn2) => {
                try {
                  fn(callback());
                } catch (tmp4) {
                  fn2(tmp4);
                }
              });
              promise.then((result) => {
                if (result) {
                  callback(result);
                } else {
                  if (typeof closure_1 !== "function") {
                    HermesBuiltin.throwTypeError();
                  }
                  callback = r;
                  closure_1 = closure_1_2;
                  const promise = new Promise((arg0, fn) => {
                    try {
                      closure_0.schedule(arg0, closure_1);
                    } catch (tmp5) {
                      fn(tmp5);
                    }
                  });
                  promise.then(closure_2).catch(closure_1);
                  const nextPromise = promise.then(closure_2);
                }
              }).catch(closure_1);
              let nextPromise = promise.then((result) => {
                if (result) {
                  callback(result);
                } else {
                  if (typeof closure_1 !== "function") {
                    HermesBuiltin.throwTypeError();
                  }
                  callback = r;
                  closure_1 = closure_1_2;
                  const promise = new Promise((arg0, fn) => {
                    try {
                      closure_0.schedule(arg0, closure_1);
                    } catch (tmp5) {
                      fn(tmp5);
                    }
                  });
                  promise.then(closure_2).catch(closure_1);
                  const nextPromise = promise.then(closure_2);
                }
              });
            }
          }
          if (!c3) {
            let promise = new Promise((fn, fn2) => {
              try {
                fn(callback());
              } catch (tmp4) {
                fn2(tmp4);
              }
            });
            promise.then((result) => {
              if (result) {
                callback(result);
              } else {
                if (typeof closure_1 !== "function") {
                  HermesBuiltin.throwTypeError();
                }
                callback = r;
                closure_1 = closure_1_2;
                const promise = new Promise((arg0, fn) => {
                  try {
                    closure_0.schedule(arg0, closure_1);
                  } catch (tmp5) {
                    fn(tmp5);
                  }
                });
                promise.then(closure_2).catch(closure_1);
                const nextPromise = promise.then(closure_2);
              }
            }).catch(arg1);
            let nextPromise = promise.then((result) => {
              if (result) {
                callback(result);
              } else {
                if (typeof closure_1 !== "function") {
                  HermesBuiltin.throwTypeError();
                }
                callback = r;
                closure_1 = closure_1_2;
                const promise = new Promise((arg0, fn) => {
                  try {
                    closure_0.schedule(arg0, closure_1);
                  } catch (tmp5) {
                    fn(tmp5);
                  }
                });
                promise.then(closure_2).catch(closure_1);
                const nextPromise = promise.then(closure_2);
              }
            });
          }
        });
        const items = [promise, fn()];
        let racePromise = Promise.race(items);
      } else {
        racePromise = new Promise((arg0, arg1) => {
          closure_0 = arg0;
          closure_1 = arg1;
          function r() {
            if (!closure_1_3) {
              let promise = new Promise((fn, fn2) => {
                try {
                  fn(callback());
                } catch (tmp4) {
                  fn2(tmp4);
                }
              });
              promise.then((result) => {
                if (result) {
                  callback(result);
                } else {
                  if (typeof closure_1 !== "function") {
                    HermesBuiltin.throwTypeError();
                  }
                  callback = r;
                  closure_1 = closure_1_2;
                  const promise = new Promise((arg0, fn) => {
                    try {
                      closure_0.schedule(arg0, closure_1);
                    } catch (tmp5) {
                      fn(tmp5);
                    }
                  });
                  promise.then(closure_2).catch(closure_1);
                  const nextPromise = promise.then(closure_2);
                }
              }).catch(closure_1);
              let nextPromise = promise.then((result) => {
                if (result) {
                  callback(result);
                } else {
                  if (typeof closure_1 !== "function") {
                    HermesBuiltin.throwTypeError();
                  }
                  callback = r;
                  closure_1 = closure_1_2;
                  const promise = new Promise((arg0, fn) => {
                    try {
                      closure_0.schedule(arg0, closure_1);
                    } catch (tmp5) {
                      fn(tmp5);
                    }
                  });
                  promise.then(closure_2).catch(closure_1);
                  const nextPromise = promise.then(closure_2);
                }
              });
            }
          }
          if (!c3) {
            let promise = new Promise((fn, fn2) => {
              try {
                fn(callback());
              } catch (tmp4) {
                fn2(tmp4);
              }
            });
            promise.then((result) => {
              if (result) {
                callback(result);
              } else {
                if (typeof closure_1 !== "function") {
                  HermesBuiltin.throwTypeError();
                }
                callback = r;
                closure_1 = closure_1_2;
                const promise = new Promise((arg0, fn) => {
                  try {
                    closure_0.schedule(arg0, closure_1);
                  } catch (tmp5) {
                    fn(tmp5);
                  }
                });
                promise.then(closure_2).catch(closure_1);
                const nextPromise = promise.then(closure_2);
              }
            }).catch(arg1);
            let nextPromise = promise.then((result) => {
              if (result) {
                callback(result);
              } else {
                if (typeof closure_1 !== "function") {
                  HermesBuiltin.throwTypeError();
                }
                callback = r;
                closure_1 = closure_1_2;
                const promise = new Promise((arg0, fn) => {
                  try {
                    closure_0.schedule(arg0, closure_1);
                  } catch (tmp5) {
                    fn(tmp5);
                  }
                });
                promise.then(closure_2).catch(closure_1);
                const nextPromise = promise.then(closure_2);
              }
            });
          }
        });
      }
      return racePromise;
    };
    exports.DEFAULT_INTERVAL_BETWEEN_ATTEMPTS_IN_MS = 50;
    exports.DEFAULT_TIMEOUT_IN_MS = 5000;
    exports.TimeoutError = _moduleResult;
    exports.WAIT_FOREVER = POSITIVE_INFINITY2;
    exports.default = fn4;
    exports.waitUntil = fn4;
    const _Object = Object;
  }
}
if (typeof globalThis.define === "function") {
  if (globalThis.define.amd) {
    globalThis.define(["exports"], function i(arg0) {
      let fn = function t(arg0) {
        const self = this;
        o(this, ctor);
        let str = "Timed out";
        if (null != arg0) {
          const _HermesInternal = HermesInternal;
          str = "Timed out after waiting for " + arg0 + " ms";
        }
        const items = [str];
        const obj = _getPrototypeOf(ctor);
        if (_isNativeReflectConstruct()) {
          const _Reflect = Reflect;
          let constructResult = Reflect.construct(obj, items, _getPrototypeOf(self).constructor);
        } else {
          constructResult = obj.apply(self, items);
        }
        const tmp5Result = POSITIVE_INFINITY(self, constructResult);
        Object.setPrototypeOf(callback(tmp5Result), ctor.prototype);
        return tmp5Result;
      };
      _moduleResult1 = fn;
      _inherits(fn, _wrapNativeSuper(Error));
      const tmp2 = _moduleResult1(fn);
      _moduleResult1 = tmp2;
      function o(arg0, arg1) {

      }
      closure_2 = {
        schedule(arg0, arg1) {
          closure_0 = arg0;
          const timeout = setTimeout(() => {
            if (null != c1) {
              const _clearTimeout = clearTimeout;
              clearTimeout(tmp);
            }
            c1 = undefined;
            callback();
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
      const fn2 = function r(arg0, timeout) {
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
        if (null !== tmp3) {
        }
        c3 = false;
        let fn;
        if (num !== c3) {
          fn = () => {
            if (typeof num !== "function") {
              HermesBuiltin.throwTypeError();
            }
            closure_0 = num2;
            return new Promise((arg0, fn) => {
              try {
                closure_0.schedule(arg0, closure_1);
              } catch (tmp5) {
                fn(tmp5);
              }
            }).then((result) => {
              c3 = true;
              throw new closure_0(closure_1);
            });
          };
        }
        if (null != fn) {
          let promise = new Promise((arg0, arg1) => {
            closure_0 = arg0;
            closure_1 = arg1;
            function r() {
              if (!closure_1_3) {
                let promise = new Promise((fn, fn2) => {
                  try {
                    fn(callback());
                  } catch (tmp4) {
                    fn2(tmp4);
                  }
                });
                promise.then((result) => {
                  if (result) {
                    callback(result);
                  } else {
                    if (typeof closure_1 !== "function") {
                      HermesBuiltin.throwTypeError();
                    }
                    callback = r;
                    closure_1 = closure_1_2;
                    const promise = new Promise(() => { ... });
                    promise.then(closure_2).catch(closure_1);
                    const nextPromise = promise.then(closure_2);
                  }
                }).catch(closure_1);
                let nextPromise = promise.then((result) => {
                  if (result) {
                    callback(result);
                  } else {
                    if (typeof closure_1 !== "function") {
                      HermesBuiltin.throwTypeError();
                    }
                    callback = r;
                    closure_1 = closure_1_2;
                    const promise = new Promise(() => { ... });
                    promise.then(closure_2).catch(closure_1);
                    const nextPromise = promise.then(closure_2);
                  }
                });
              }
            }
            if (!c3) {
              let promise = new Promise((fn, fn2) => {
                try {
                  fn(callback());
                } catch (tmp4) {
                  fn2(tmp4);
                }
              });
              promise.then((result) => {
                if (result) {
                  callback(result);
                } else {
                  if (typeof closure_1 !== "function") {
                    HermesBuiltin.throwTypeError();
                  }
                  callback = r;
                  closure_1 = closure_1_2;
                  const promise = new Promise((arg0, fn) => {
                    try {
                      closure_0.schedule(arg0, closure_1);
                    } catch (tmp5) {
                      fn(tmp5);
                    }
                  });
                  promise.then(closure_2).catch(closure_1);
                  const nextPromise = promise.then(closure_2);
                }
              }).catch(arg1);
              let nextPromise = promise.then((result) => {
                if (result) {
                  callback(result);
                } else {
                  if (typeof closure_1 !== "function") {
                    HermesBuiltin.throwTypeError();
                  }
                  callback = r;
                  closure_1 = closure_1_2;
                  const promise = new Promise((arg0, fn) => {
                    try {
                      closure_0.schedule(arg0, closure_1);
                    } catch (tmp5) {
                      fn(tmp5);
                    }
                  });
                  promise.then(closure_2).catch(closure_1);
                  const nextPromise = promise.then(closure_2);
                }
              });
            }
          });
          const items = [promise, fn()];
          let racePromise = Promise.race(items);
        } else {
          racePromise = new Promise((arg0, arg1) => {
            closure_0 = arg0;
            closure_1 = arg1;
            function r() {
              if (!closure_1_3) {
                let promise = new Promise((fn, fn2) => {
                  try {
                    fn(callback());
                  } catch (tmp4) {
                    fn2(tmp4);
                  }
                });
                promise.then((result) => {
                  if (result) {
                    callback(result);
                  } else {
                    if (typeof closure_1 !== "function") {
                      HermesBuiltin.throwTypeError();
                    }
                    callback = r;
                    closure_1 = closure_1_2;
                    const promise = new Promise(() => { ... });
                    promise.then(closure_2).catch(closure_1);
                    const nextPromise = promise.then(closure_2);
                  }
                }).catch(closure_1);
                let nextPromise = promise.then((result) => {
                  if (result) {
                    callback(result);
                  } else {
                    if (typeof closure_1 !== "function") {
                      HermesBuiltin.throwTypeError();
                    }
                    callback = r;
                    closure_1 = closure_1_2;
                    const promise = new Promise(() => { ... });
                    promise.then(closure_2).catch(closure_1);
                    const nextPromise = promise.then(closure_2);
                  }
                });
              }
            }
            if (!c3) {
              let promise = new Promise((fn, fn2) => {
                try {
                  fn(callback());
                } catch (tmp4) {
                  fn2(tmp4);
                }
              });
              promise.then((result) => {
                if (result) {
                  callback(result);
                } else {
                  if (typeof closure_1 !== "function") {
                    HermesBuiltin.throwTypeError();
                  }
                  callback = r;
                  closure_1 = closure_1_2;
                  const promise = new Promise((arg0, fn) => {
                    try {
                      closure_0.schedule(arg0, closure_1);
                    } catch (tmp5) {
                      fn(tmp5);
                    }
                  });
                  promise.then(closure_2).catch(closure_1);
                  const nextPromise = promise.then(closure_2);
                }
              }).catch(arg1);
              let nextPromise = promise.then((result) => {
                if (result) {
                  callback(result);
                } else {
                  if (typeof closure_1 !== "function") {
                    HermesBuiltin.throwTypeError();
                  }
                  callback = r;
                  closure_1 = closure_1_2;
                  const promise = new Promise((arg0, fn) => {
                    try {
                      closure_0.schedule(arg0, closure_1);
                    } catch (tmp5) {
                      fn(tmp5);
                    }
                  });
                  promise.then(closure_2).catch(closure_1);
                  const nextPromise = promise.then(closure_2);
                }
              });
            }
          });
        }
        return racePromise;
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
obj = {};
self["async-wait-until"] = obj;
let fn = function t(arg0) {
  const self = this;
  o(this, ctor);
  let str = "Timed out";
  if (null != arg0) {
    const _HermesInternal = HermesInternal;
    str = "Timed out after waiting for " + arg0 + " ms";
  }
  const items = [str];
  const obj = _getPrototypeOf(ctor);
  if (_isNativeReflectConstruct()) {
    const _Reflect = Reflect;
    let constructResult = Reflect.construct(obj, items, _getPrototypeOf(self).constructor);
  } else {
    constructResult = obj.apply(self, items);
  }
  const tmp5Result = POSITIVE_INFINITY(self, constructResult);
  Object.setPrototypeOf(callback(tmp5Result), ctor.prototype);
  return tmp5Result;
};
_inherits(fn, _wrapNativeSuper(Error));
_moduleResult1 = _createClass(fn);
_classCallCheck = function o(arg0, arg1) {

};
_assertThisInitialized = {
  schedule(arg0, arg1) {
    closure_0 = arg0;
    const timeout = setTimeout(() => {
      if (null != c1) {
        const _clearTimeout = clearTimeout;
        clearTimeout(tmp);
      }
      c1 = undefined;
      callback();
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
c3 = POSITIVE_INFINITY;
let fn2 = function r(arg0, timeout) {
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
  if (null !== tmp3) {
  }
  c3 = false;
  let fn;
  if (num !== c3) {
    fn = () => {
      if (typeof num !== "function") {
        HermesBuiltin.throwTypeError();
      }
      closure_0 = num2;
      return new Promise((arg0, fn) => {
        try {
          closure_0.schedule(arg0, closure_1);
        } catch (tmp5) {
          fn(tmp5);
        }
      }).then((result) => {
        c3 = true;
        throw new closure_0(closure_1);
      });
    };
  }
  if (null != fn) {
    let promise = new Promise((arg0, arg1) => {
      closure_0 = arg0;
      closure_1 = arg1;
      function r() {
        if (!closure_1_3) {
          let promise = new Promise((fn, fn2) => {
            try {
              fn(callback());
            } catch (tmp4) {
              fn2(tmp4);
            }
          });
          promise.then((result) => {
            if (result) {
              callback(result);
            } else {
              if (typeof closure_1 !== "function") {
                HermesBuiltin.throwTypeError();
              }
              callback = r;
              closure_1 = closure_1_2;
              const promise = new Promise((arg0, fn) => {
                try {
                  closure_0.schedule(arg0, closure_1);
                } catch (tmp5) {
                  fn(tmp5);
                }
              });
              promise.then(closure_2).catch(closure_1);
              const nextPromise = promise.then(closure_2);
            }
          }).catch(closure_1);
          let nextPromise = promise.then((result) => {
            if (result) {
              callback(result);
            } else {
              if (typeof closure_1 !== "function") {
                HermesBuiltin.throwTypeError();
              }
              callback = r;
              closure_1 = closure_1_2;
              const promise = new Promise((arg0, fn) => {
                try {
                  closure_0.schedule(arg0, closure_1);
                } catch (tmp5) {
                  fn(tmp5);
                }
              });
              promise.then(closure_2).catch(closure_1);
              const nextPromise = promise.then(closure_2);
            }
          });
        }
      }
      if (!c3) {
        let promise = new Promise((fn, fn2) => {
          try {
            fn(callback());
          } catch (tmp4) {
            fn2(tmp4);
          }
        });
        promise.then((result) => {
          if (result) {
            callback(result);
          } else {
            if (typeof closure_1 !== "function") {
              HermesBuiltin.throwTypeError();
            }
            callback = r;
            closure_1 = closure_1_2;
            const promise = new Promise((arg0, fn) => {
              try {
                closure_0.schedule(arg0, closure_1);
              } catch (tmp5) {
                fn(tmp5);
              }
            });
            promise.then(closure_2).catch(closure_1);
            const nextPromise = promise.then(closure_2);
          }
        }).catch(arg1);
        let nextPromise = promise.then((result) => {
          if (result) {
            callback(result);
          } else {
            if (typeof closure_1 !== "function") {
              HermesBuiltin.throwTypeError();
            }
            callback = r;
            closure_1 = closure_1_2;
            const promise = new Promise((arg0, fn) => {
              try {
                closure_0.schedule(arg0, closure_1);
              } catch (tmp5) {
                fn(tmp5);
              }
            });
            promise.then(closure_2).catch(closure_1);
            const nextPromise = promise.then(closure_2);
          }
        });
      }
    });
    const items = [promise, fn()];
    let racePromise = Promise.race(items);
  } else {
    racePromise = new Promise((arg0, arg1) => {
      closure_0 = arg0;
      closure_1 = arg1;
      function r() {
        if (!closure_1_3) {
          let promise = new Promise((fn, fn2) => {
            try {
              fn(callback());
            } catch (tmp4) {
              fn2(tmp4);
            }
          });
          promise.then((result) => {
            if (result) {
              callback(result);
            } else {
              if (typeof closure_1 !== "function") {
                HermesBuiltin.throwTypeError();
              }
              callback = r;
              closure_1 = closure_1_2;
              const promise = new Promise((arg0, fn) => {
                try {
                  closure_0.schedule(arg0, closure_1);
                } catch (tmp5) {
                  fn(tmp5);
                }
              });
              promise.then(closure_2).catch(closure_1);
              const nextPromise = promise.then(closure_2);
            }
          }).catch(closure_1);
          let nextPromise = promise.then((result) => {
            if (result) {
              callback(result);
            } else {
              if (typeof closure_1 !== "function") {
                HermesBuiltin.throwTypeError();
              }
              callback = r;
              closure_1 = closure_1_2;
              const promise = new Promise((arg0, fn) => {
                try {
                  closure_0.schedule(arg0, closure_1);
                } catch (tmp5) {
                  fn(tmp5);
                }
              });
              promise.then(closure_2).catch(closure_1);
              const nextPromise = promise.then(closure_2);
            }
          });
        }
      }
      if (!c3) {
        let promise = new Promise((fn, fn2) => {
          try {
            fn(callback());
          } catch (tmp4) {
            fn2(tmp4);
          }
        });
        promise.then((result) => {
          if (result) {
            callback(result);
          } else {
            if (typeof closure_1 !== "function") {
              HermesBuiltin.throwTypeError();
            }
            callback = r;
            closure_1 = closure_1_2;
            const promise = new Promise((arg0, fn) => {
              try {
                closure_0.schedule(arg0, closure_1);
              } catch (tmp5) {
                fn(tmp5);
              }
            });
            promise.then(closure_2).catch(closure_1);
            const nextPromise = promise.then(closure_2);
          }
        }).catch(arg1);
        let nextPromise = promise.then((result) => {
          if (result) {
            callback(result);
          } else {
            if (typeof closure_1 !== "function") {
              HermesBuiltin.throwTypeError();
            }
            callback = r;
            closure_1 = closure_1_2;
            const promise = new Promise((arg0, fn) => {
              try {
                closure_0.schedule(arg0, closure_1);
              } catch (tmp5) {
                fn(tmp5);
              }
            });
            promise.then(closure_2).catch(closure_1);
            const nextPromise = promise.then(closure_2);
          }
        });
      }
    });
  }
  return racePromise;
};
obj.DEFAULT_INTERVAL_BETWEEN_ATTEMPTS_IN_MS = 50;
obj.DEFAULT_TIMEOUT_IN_MS = 5000;
obj.TimeoutError = _moduleResult1;
obj.WAIT_FOREVER = POSITIVE_INFINITY;
obj.default = fn2;
obj.waitUntil = fn2;