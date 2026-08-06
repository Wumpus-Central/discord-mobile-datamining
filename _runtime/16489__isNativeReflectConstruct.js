// _runtime/16489__isNativeReflectConstruct.js
import _createClass from "_createClass";
import _classCallCheck from "_classCallCheck";
import _assertThisInitialized from "_assertThisInitialized";
import c3 from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _wrapNativeSuper from "_wrapNativeSuper";

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
    let closure_0 = !callResult;
    function _isNativeReflectConstruct() {
      return closure_0;
    }
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
if (typeof exports === "object") {
  if (undefined !== module) {
    const _Error = Error;
    const fn3 = function t(fn) {
      const self = this;
      o(this, fn);
      let str = "Timed out";
      if (null != fn) {
        const _HermesInternal = HermesInternal;
        str = "Timed out after waiting for " + fn + " ms";
      }
      const items = [str];
      const obj = outer1_4(fn);
      if (outer1_7()) {
        const _Reflect = Reflect;
        let constructResult = Reflect.construct(obj, items, outer1_4(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      const tmp5Result = POSITIVE_INFINITY(self, constructResult);
      Object.setPrototypeOf(callback(tmp5Result), fn.prototype);
      return tmp5Result;
    };
    _createClass = fn3;
    _inherits(fn3, _wrapNativeSuper(Error));
    const _moduleResult = _createClass(fn3);
    _createClass = _moduleResult;
    _classCallCheck = function o(arg0, arg1) {

    };
    let obj = { schedule: null };
    obj[0] = function schedule(arg0, arg1) {
      let closure_0 = arg0;
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
    const fn4 = function r(arg0, num) {
      let closure_0 = arg0;
      let tmp = num;
      if (typeof num !== "number") {
        let timeout;
        if (null != num) {
          timeout = num.timeout;
        }
        tmp = timeout;
      }
      num = 5000;
      if (null !== tmp) {
        num = 5000;
        if (undefined !== tmp) {
          num = tmp;
        }
      }
      let tmp3 = arg2;
      if (typeof num !== "number") {
        let prop;
        if (null != num) {
          prop = num.intervalBetweenAttempts;
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
        fn = () => {
          if (typeof num !== "function") {
            HermesBuiltin.throwTypeError();
          }
          let closure_0 = num2;
          return new Promise((arg0, arg1) => {
            try {
              tmp2.schedule(arg0, closure_1);
            } catch (tmp5) {
              arg1(tmp5);
            }
          }).then(() => {
            let c3 = true;
            throw new closure_0(closure_1);
          });
        };
      }
      if (null != fn) {
        let promise = new Promise((arg0, arg1) => {
          let closure_0 = arg0;
          let closure_1 = arg1;
          function r() {
            if (!outer1_3) {
              let promise = new Promise((arg0, arg1) => {
                try {
                  arg0(callback());
                } catch (tmp4) {
                  arg1(tmp4);
                }
              });
              promise.then((arg0) => {
                if (arg0) {
                  callback(arg0);
                } else {
                  if (typeof closure_1 !== "function") {
                    HermesBuiltin.throwTypeError();
                  }
                  callback = r;
                  closure_1 = outer1_2;
                  const promise = new Promise((arg0, arg1) => {
                    try {
                      tmp2.schedule(arg0, closure_1);
                    } catch (tmp5) {
                      arg1(tmp5);
                    }
                  });
                  promise.then(closure_2).catch(closure_1);
                  const nextPromise = promise.then(closure_2);
                  const tmp2 = r;
                  const tmp3 = outer1_2;
                }
              }).catch(closure_1);
              let nextPromise = promise.then((arg0) => {
                if (arg0) {
                  callback(arg0);
                } else {
                  if (typeof closure_1 !== "function") {
                    HermesBuiltin.throwTypeError();
                  }
                  callback = r;
                  closure_1 = outer1_2;
                  const promise = new Promise((arg0, arg1) => {
                    try {
                      tmp2.schedule(arg0, closure_1);
                    } catch (tmp5) {
                      arg1(tmp5);
                    }
                  });
                  promise.then(closure_2).catch(closure_1);
                  const nextPromise = promise.then(closure_2);
                  const tmp2 = r;
                  const tmp3 = outer1_2;
                }
              });
            }
          }
          if (!c3) {
            let promise = new Promise((arg0, arg1) => {
              try {
                arg0(callback());
              } catch (tmp4) {
                arg1(tmp4);
              }
            });
            promise.then((arg0) => {
              if (arg0) {
                callback(arg0);
              } else {
                if (typeof closure_1 !== "function") {
                  HermesBuiltin.throwTypeError();
                }
                callback = r;
                closure_1 = outer1_2;
                const promise = new Promise((arg0, arg1) => {
                  try {
                    tmp2.schedule(arg0, closure_1);
                  } catch (tmp5) {
                    arg1(tmp5);
                  }
                });
                promise.then(closure_2).catch(closure_1);
                const nextPromise = promise.then(closure_2);
                const tmp2 = r;
                const tmp3 = outer1_2;
              }
            }).catch(arg1);
            let nextPromise = promise.then((arg0) => {
              if (arg0) {
                callback(arg0);
              } else {
                if (typeof closure_1 !== "function") {
                  HermesBuiltin.throwTypeError();
                }
                callback = r;
                closure_1 = outer1_2;
                const promise = new Promise((arg0, arg1) => {
                  try {
                    tmp2.schedule(arg0, closure_1);
                  } catch (tmp5) {
                    arg1(tmp5);
                  }
                });
                promise.then(closure_2).catch(closure_1);
                const nextPromise = promise.then(closure_2);
                const tmp2 = r;
                const tmp3 = outer1_2;
              }
            });
          }
        });
        const items = [promise, fn()];
        let racePromise = Promise.race(items);
      } else {
        racePromise = new Promise((arg0, arg1) => {
          let closure_0 = arg0;
          let closure_1 = arg1;
          function r() {
            if (!outer1_3) {
              let promise = new Promise((arg0, arg1) => {
                try {
                  arg0(callback());
                } catch (tmp4) {
                  arg1(tmp4);
                }
              });
              promise.then((arg0) => {
                if (arg0) {
                  callback(arg0);
                } else {
                  if (typeof closure_1 !== "function") {
                    HermesBuiltin.throwTypeError();
                  }
                  callback = r;
                  closure_1 = outer1_2;
                  const promise = new Promise((arg0, arg1) => {
                    try {
                      tmp2.schedule(arg0, closure_1);
                    } catch (tmp5) {
                      arg1(tmp5);
                    }
                  });
                  promise.then(closure_2).catch(closure_1);
                  const nextPromise = promise.then(closure_2);
                  const tmp2 = r;
                  const tmp3 = outer1_2;
                }
              }).catch(closure_1);
              let nextPromise = promise.then((arg0) => {
                if (arg0) {
                  callback(arg0);
                } else {
                  if (typeof closure_1 !== "function") {
                    HermesBuiltin.throwTypeError();
                  }
                  callback = r;
                  closure_1 = outer1_2;
                  const promise = new Promise((arg0, arg1) => {
                    try {
                      tmp2.schedule(arg0, closure_1);
                    } catch (tmp5) {
                      arg1(tmp5);
                    }
                  });
                  promise.then(closure_2).catch(closure_1);
                  const nextPromise = promise.then(closure_2);
                  const tmp2 = r;
                  const tmp3 = outer1_2;
                }
              });
            }
          }
          if (!c3) {
            let promise = new Promise((arg0, arg1) => {
              try {
                arg0(callback());
              } catch (tmp4) {
                arg1(tmp4);
              }
            });
            promise.then((arg0) => {
              if (arg0) {
                callback(arg0);
              } else {
                if (typeof closure_1 !== "function") {
                  HermesBuiltin.throwTypeError();
                }
                callback = r;
                closure_1 = outer1_2;
                const promise = new Promise((arg0, arg1) => {
                  try {
                    tmp2.schedule(arg0, closure_1);
                  } catch (tmp5) {
                    arg1(tmp5);
                  }
                });
                promise.then(closure_2).catch(closure_1);
                const nextPromise = promise.then(closure_2);
                const tmp2 = r;
                const tmp3 = outer1_2;
              }
            }).catch(arg1);
            let nextPromise = promise.then((arg0) => {
              if (arg0) {
                callback(arg0);
              } else {
                if (typeof closure_1 !== "function") {
                  HermesBuiltin.throwTypeError();
                }
                callback = r;
                closure_1 = outer1_2;
                const promise = new Promise((arg0, arg1) => {
                  try {
                    tmp2.schedule(arg0, closure_1);
                  } catch (tmp5) {
                    arg1(tmp5);
                  }
                });
                promise.then(closure_2).catch(closure_1);
                const nextPromise = promise.then(closure_2);
                const tmp2 = r;
                const tmp3 = outer1_2;
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
      let fn = function t(fn) {
        const self = this;
        o(this, fn);
        let str = "Timed out";
        if (null != fn) {
          const _HermesInternal = HermesInternal;
          str = "Timed out after waiting for " + fn + " ms";
        }
        const items = [str];
        const obj = outer1_4(fn);
        if (outer1_7()) {
          const _Reflect = Reflect;
          let constructResult = Reflect.construct(obj, items, outer1_4(self).constructor);
        } else {
          constructResult = obj.apply(self, items);
        }
        const tmp5Result = POSITIVE_INFINITY(self, constructResult);
        Object.setPrototypeOf(callback(tmp5Result), fn.prototype);
        return tmp5Result;
      };
      _inherits(fn, _wrapNativeSuper(Error));
      let tmp2 = fn(fn);
      fn = tmp2;
      function o(arg0, arg1) {

      }
      let closure_2 = {
        schedule(arg0, arg1) {
          let closure_0 = arg0;
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
      const fn2 = function r(arg0, num) {
        let closure_0 = arg0;
        let tmp = num;
        if (typeof num !== "number") {
          let timeout;
          if (null != num) {
            timeout = num.timeout;
          }
          tmp = timeout;
        }
        num = 5000;
        if (null !== tmp) {
          num = 5000;
          if (undefined !== tmp) {
            num = tmp;
          }
        }
        let tmp3 = arg2;
        if (typeof num !== "number") {
          let prop;
          if (null != num) {
            prop = num.intervalBetweenAttempts;
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
          fn = () => {
            if (typeof num !== "function") {
              HermesBuiltin.throwTypeError();
            }
            let closure_0 = num2;
            return new Promise((arg0, arg1) => {
              try {
                tmp2.schedule(arg0, closure_1);
              } catch (tmp5) {
                arg1(tmp5);
              }
            }).then(() => {
              let c3 = true;
              throw new closure_0(closure_1);
            });
          };
        }
        if (null != fn) {
          let promise = new Promise((arg0, arg1) => {
            let closure_0 = arg0;
            let closure_1 = arg1;
            function r() {
              if (!outer1_3) {
                let promise = new Promise((arg0, arg1) => {
                  try {
                    arg0(callback());
                  } catch (tmp4) {
                    arg1(tmp4);
                  }
                });
                promise.then((arg0) => {
                  if (arg0) {
                    callback(arg0);
                  } else {
                    if (typeof closure_1 !== "function") {
                      HermesBuiltin.throwTypeError();
                    }
                    callback = r;
                    closure_1 = outer1_2;
                    const promise = new Promise(() => { ... });
                    promise.then(closure_2).catch(closure_1);
                    const nextPromise = promise.then(closure_2);
                    const tmp2 = r;
                    const tmp3 = outer1_2;
                  }
                }).catch(closure_1);
                let nextPromise = promise.then((arg0) => {
                  if (arg0) {
                    callback(arg0);
                  } else {
                    if (typeof closure_1 !== "function") {
                      HermesBuiltin.throwTypeError();
                    }
                    callback = r;
                    closure_1 = outer1_2;
                    const promise = new Promise(() => { ... });
                    promise.then(closure_2).catch(closure_1);
                    const nextPromise = promise.then(closure_2);
                    const tmp2 = r;
                    const tmp3 = outer1_2;
                  }
                });
              }
            }
            if (!c3) {
              let promise = new Promise((arg0, arg1) => {
                try {
                  arg0(callback());
                } catch (tmp4) {
                  arg1(tmp4);
                }
              });
              promise.then((arg0) => {
                if (arg0) {
                  callback(arg0);
                } else {
                  if (typeof closure_1 !== "function") {
                    HermesBuiltin.throwTypeError();
                  }
                  callback = r;
                  closure_1 = outer1_2;
                  const promise = new Promise((arg0, arg1) => {
                    try {
                      tmp2.schedule(arg0, closure_1);
                    } catch (tmp5) {
                      arg1(tmp5);
                    }
                  });
                  promise.then(closure_2).catch(closure_1);
                  const nextPromise = promise.then(closure_2);
                  const tmp2 = r;
                  const tmp3 = outer1_2;
                }
              }).catch(arg1);
              let nextPromise = promise.then((arg0) => {
                if (arg0) {
                  callback(arg0);
                } else {
                  if (typeof closure_1 !== "function") {
                    HermesBuiltin.throwTypeError();
                  }
                  callback = r;
                  closure_1 = outer1_2;
                  const promise = new Promise((arg0, arg1) => {
                    try {
                      tmp2.schedule(arg0, closure_1);
                    } catch (tmp5) {
                      arg1(tmp5);
                    }
                  });
                  promise.then(closure_2).catch(closure_1);
                  const nextPromise = promise.then(closure_2);
                  const tmp2 = r;
                  const tmp3 = outer1_2;
                }
              });
            }
          });
          const items = [promise, fn()];
          let racePromise = Promise.race(items);
        } else {
          racePromise = new Promise((arg0, arg1) => {
            let closure_0 = arg0;
            let closure_1 = arg1;
            function r() {
              if (!outer1_3) {
                let promise = new Promise((arg0, arg1) => {
                  try {
                    arg0(callback());
                  } catch (tmp4) {
                    arg1(tmp4);
                  }
                });
                promise.then((arg0) => {
                  if (arg0) {
                    callback(arg0);
                  } else {
                    if (typeof closure_1 !== "function") {
                      HermesBuiltin.throwTypeError();
                    }
                    callback = r;
                    closure_1 = outer1_2;
                    const promise = new Promise(() => { ... });
                    promise.then(closure_2).catch(closure_1);
                    const nextPromise = promise.then(closure_2);
                    const tmp2 = r;
                    const tmp3 = outer1_2;
                  }
                }).catch(closure_1);
                let nextPromise = promise.then((arg0) => {
                  if (arg0) {
                    callback(arg0);
                  } else {
                    if (typeof closure_1 !== "function") {
                      HermesBuiltin.throwTypeError();
                    }
                    callback = r;
                    closure_1 = outer1_2;
                    const promise = new Promise(() => { ... });
                    promise.then(closure_2).catch(closure_1);
                    const nextPromise = promise.then(closure_2);
                    const tmp2 = r;
                    const tmp3 = outer1_2;
                  }
                });
              }
            }
            if (!c3) {
              let promise = new Promise((arg0, arg1) => {
                try {
                  arg0(callback());
                } catch (tmp4) {
                  arg1(tmp4);
                }
              });
              promise.then((arg0) => {
                if (arg0) {
                  callback(arg0);
                } else {
                  if (typeof closure_1 !== "function") {
                    HermesBuiltin.throwTypeError();
                  }
                  callback = r;
                  closure_1 = outer1_2;
                  const promise = new Promise((arg0, arg1) => {
                    try {
                      tmp2.schedule(arg0, closure_1);
                    } catch (tmp5) {
                      arg1(tmp5);
                    }
                  });
                  promise.then(closure_2).catch(closure_1);
                  const nextPromise = promise.then(closure_2);
                  const tmp2 = r;
                  const tmp3 = outer1_2;
                }
              }).catch(arg1);
              let nextPromise = promise.then((arg0) => {
                if (arg0) {
                  callback(arg0);
                } else {
                  if (typeof closure_1 !== "function") {
                    HermesBuiltin.throwTypeError();
                  }
                  callback = r;
                  closure_1 = outer1_2;
                  const promise = new Promise((arg0, arg1) => {
                    try {
                      tmp2.schedule(arg0, closure_1);
                    } catch (tmp5) {
                      arg1(tmp5);
                    }
                  });
                  promise.then(closure_2).catch(closure_1);
                  const nextPromise = promise.then(closure_2);
                  const tmp2 = r;
                  const tmp3 = outer1_2;
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
_createClass = undefined;
_classCallCheck = undefined;
_assertThisInitialized = undefined;
c3 = undefined;
let fn = function t(fn) {
  const self = this;
  o(this, fn);
  let str = "Timed out";
  if (null != fn) {
    const _HermesInternal = HermesInternal;
    str = "Timed out after waiting for " + fn + " ms";
  }
  const items = [str];
  const obj = outer1_4(fn);
  if (outer1_7()) {
    const _Reflect = Reflect;
    let constructResult = Reflect.construct(obj, items, outer1_4(self).constructor);
  } else {
    constructResult = obj.apply(self, items);
  }
  const tmp5Result = POSITIVE_INFINITY(self, constructResult);
  Object.setPrototypeOf(callback(tmp5Result), fn.prototype);
  return tmp5Result;
};
_createClass = fn;
_inherits(fn, _wrapNativeSuper(Error));
const _moduleResult1 = _createClass(fn);
_createClass = _moduleResult1;
_classCallCheck = function o(arg0, arg1) {

};
_assertThisInitialized = {
  schedule(arg0, arg1) {
    let closure_0 = arg0;
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
let fn2 = function r(arg0, num) {
  let closure_0 = arg0;
  let tmp = num;
  if (typeof num !== "number") {
    let timeout;
    if (null != num) {
      timeout = num.timeout;
    }
    tmp = timeout;
  }
  num = 5000;
  if (null !== tmp) {
    num = 5000;
    if (undefined !== tmp) {
      num = tmp;
    }
  }
  let tmp3 = arg2;
  if (typeof num !== "number") {
    let prop;
    if (null != num) {
      prop = num.intervalBetweenAttempts;
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
    fn = () => {
      if (typeof num !== "function") {
        HermesBuiltin.throwTypeError();
      }
      let closure_0 = num2;
      return new Promise((arg0, arg1) => {
        try {
          tmp2.schedule(arg0, closure_1);
        } catch (tmp5) {
          arg1(tmp5);
        }
      }).then(() => {
        let c3 = true;
        throw new closure_0(closure_1);
      });
    };
  }
  if (null != fn) {
    let promise = new Promise((arg0, arg1) => {
      let closure_0 = arg0;
      let closure_1 = arg1;
      function r() {
        if (!outer1_3) {
          let promise = new Promise((arg0, arg1) => {
            try {
              arg0(callback());
            } catch (tmp4) {
              arg1(tmp4);
            }
          });
          promise.then((arg0) => {
            if (arg0) {
              callback(arg0);
            } else {
              if (typeof closure_1 !== "function") {
                HermesBuiltin.throwTypeError();
              }
              callback = r;
              closure_1 = outer1_2;
              const promise = new Promise((arg0, arg1) => {
                try {
                  tmp2.schedule(arg0, closure_1);
                } catch (tmp5) {
                  arg1(tmp5);
                }
              });
              promise.then(closure_2).catch(closure_1);
              const nextPromise = promise.then(closure_2);
              const tmp2 = r;
              const tmp3 = outer1_2;
            }
          }).catch(closure_1);
          let nextPromise = promise.then((arg0) => {
            if (arg0) {
              callback(arg0);
            } else {
              if (typeof closure_1 !== "function") {
                HermesBuiltin.throwTypeError();
              }
              callback = r;
              closure_1 = outer1_2;
              const promise = new Promise((arg0, arg1) => {
                try {
                  tmp2.schedule(arg0, closure_1);
                } catch (tmp5) {
                  arg1(tmp5);
                }
              });
              promise.then(closure_2).catch(closure_1);
              const nextPromise = promise.then(closure_2);
              const tmp2 = r;
              const tmp3 = outer1_2;
            }
          });
        }
      }
      if (!c3) {
        let promise = new Promise((arg0, arg1) => {
          try {
            arg0(callback());
          } catch (tmp4) {
            arg1(tmp4);
          }
        });
        promise.then((arg0) => {
          if (arg0) {
            callback(arg0);
          } else {
            if (typeof closure_1 !== "function") {
              HermesBuiltin.throwTypeError();
            }
            callback = r;
            closure_1 = outer1_2;
            const promise = new Promise((arg0, arg1) => {
              try {
                tmp2.schedule(arg0, closure_1);
              } catch (tmp5) {
                arg1(tmp5);
              }
            });
            promise.then(closure_2).catch(closure_1);
            const nextPromise = promise.then(closure_2);
            const tmp2 = r;
            const tmp3 = outer1_2;
          }
        }).catch(arg1);
        let nextPromise = promise.then((arg0) => {
          if (arg0) {
            callback(arg0);
          } else {
            if (typeof closure_1 !== "function") {
              HermesBuiltin.throwTypeError();
            }
            callback = r;
            closure_1 = outer1_2;
            const promise = new Promise((arg0, arg1) => {
              try {
                tmp2.schedule(arg0, closure_1);
              } catch (tmp5) {
                arg1(tmp5);
              }
            });
            promise.then(closure_2).catch(closure_1);
            const nextPromise = promise.then(closure_2);
            const tmp2 = r;
            const tmp3 = outer1_2;
          }
        });
      }
    });
    const items = [promise, fn()];
    let racePromise = Promise.race(items);
  } else {
    racePromise = new Promise((arg0, arg1) => {
      let closure_0 = arg0;
      let closure_1 = arg1;
      function r() {
        if (!outer1_3) {
          let promise = new Promise((arg0, arg1) => {
            try {
              arg0(callback());
            } catch (tmp4) {
              arg1(tmp4);
            }
          });
          promise.then((arg0) => {
            if (arg0) {
              callback(arg0);
            } else {
              if (typeof closure_1 !== "function") {
                HermesBuiltin.throwTypeError();
              }
              callback = r;
              closure_1 = outer1_2;
              const promise = new Promise((arg0, arg1) => {
                try {
                  tmp2.schedule(arg0, closure_1);
                } catch (tmp5) {
                  arg1(tmp5);
                }
              });
              promise.then(closure_2).catch(closure_1);
              const nextPromise = promise.then(closure_2);
              const tmp2 = r;
              const tmp3 = outer1_2;
            }
          }).catch(closure_1);
          let nextPromise = promise.then((arg0) => {
            if (arg0) {
              callback(arg0);
            } else {
              if (typeof closure_1 !== "function") {
                HermesBuiltin.throwTypeError();
              }
              callback = r;
              closure_1 = outer1_2;
              const promise = new Promise((arg0, arg1) => {
                try {
                  tmp2.schedule(arg0, closure_1);
                } catch (tmp5) {
                  arg1(tmp5);
                }
              });
              promise.then(closure_2).catch(closure_1);
              const nextPromise = promise.then(closure_2);
              const tmp2 = r;
              const tmp3 = outer1_2;
            }
          });
        }
      }
      if (!c3) {
        let promise = new Promise((arg0, arg1) => {
          try {
            arg0(callback());
          } catch (tmp4) {
            arg1(tmp4);
          }
        });
        promise.then((arg0) => {
          if (arg0) {
            callback(arg0);
          } else {
            if (typeof closure_1 !== "function") {
              HermesBuiltin.throwTypeError();
            }
            callback = r;
            closure_1 = outer1_2;
            const promise = new Promise((arg0, arg1) => {
              try {
                tmp2.schedule(arg0, closure_1);
              } catch (tmp5) {
                arg1(tmp5);
              }
            });
            promise.then(closure_2).catch(closure_1);
            const nextPromise = promise.then(closure_2);
            const tmp2 = r;
            const tmp3 = outer1_2;
          }
        }).catch(arg1);
        let nextPromise = promise.then((arg0) => {
          if (arg0) {
            callback(arg0);
          } else {
            if (typeof closure_1 !== "function") {
              HermesBuiltin.throwTypeError();
            }
            callback = r;
            closure_1 = outer1_2;
            const promise = new Promise((arg0, arg1) => {
              try {
                tmp2.schedule(arg0, closure_1);
              } catch (tmp5) {
                arg1(tmp5);
              }
            });
            promise.then(closure_2).catch(closure_1);
            const nextPromise = promise.then(closure_2);
            const tmp2 = r;
            const tmp3 = outer1_2;
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