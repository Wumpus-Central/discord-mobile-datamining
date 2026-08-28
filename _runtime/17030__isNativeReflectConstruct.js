// _runtime/17030__isNativeReflectConstruct.js
import _createClass from "metro/00042__createClass.js";
import o from "metro/00041__classCallCheck.js";
import closure_2 from "00094__assertThisInitialized.js";
import POSITIVE_INFINITY from "metro/00093__possibleConstructorReturn.js";
import closure_4 from "00095__getPrototypeOf.js";
import _inherits from "00098__inherits.js";
import _wrapNativeSuper from "metro/00158__wrapNativeSuper.js";

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
      o(this, closure_0);
      let str = "Timed out";
      if (null != arg0) {
        const _HermesInternal = HermesInternal;
        str = "Timed out after waiting for " + arg0 + " ms";
      }
      const items = [str];
      const obj = closure_1_4(closure_0);
      if (closure_1_7()) {
        const _Reflect = Reflect;
        let constructResult = Reflect.construct(obj, items, closure_1_4(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      const tmp5Result = POSITIVE_INFINITY(self, constructResult);
      Object.setPrototypeOf(callback(tmp5Result), closure_0.prototype);
      return tmp5Result;
    };
    _moduleResult1 = fn3;
    _inherits(fn3, _wrapNativeSuper(Error));
    const _moduleResult = _createClass(fn3);
    _moduleResult1 = _moduleResult;
    o = function o(arg0, arg1) {

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
    closure_2 = obj;
    const _Number = Number;
    POSITIVE_INFINITY = POSITIVE_INFINITY2;
    const fn4 = function r(arg0, num) {
      closure_0 = arg0;
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
      c3 = false;
      let fn;
      if (num !== c3) {
        fn = () => {
          if (typeof num !== "function") {
            HermesBuiltin.throwTypeError();
          }
          closure_0 = num2;
          return new Promise((arg0, arg1) => {
            try {
              closure_0.schedule(arg0, closure_1);
            } catch (tmp5) {
              arg1(tmp5);
            }
          }).then(() => {
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
                  closure_1 = closure_1_2;
                  const promise = new Promise((arg0, arg1) => {
                    try {
                      closure_0.schedule(arg0, closure_1);
                    } catch (tmp5) {
                      arg1(tmp5);
                    }
                  });
                  promise.then(closure_2).catch(closure_1);
                  const nextPromise = promise.then(closure_2);
                  const tmp2 = r;
                  const tmp3 = closure_1_2;
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
                  closure_1 = closure_1_2;
                  const promise = new Promise((arg0, arg1) => {
                    try {
                      closure_0.schedule(arg0, closure_1);
                    } catch (tmp5) {
                      arg1(tmp5);
                    }
                  });
                  promise.then(closure_2).catch(closure_1);
                  const nextPromise = promise.then(closure_2);
                  const tmp2 = r;
                  const tmp3 = closure_1_2;
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
                closure_1 = closure_1_2;
                const promise = new Promise((arg0, arg1) => {
                  try {
                    closure_0.schedule(arg0, closure_1);
                  } catch (tmp5) {
                    arg1(tmp5);
                  }
                });
                promise.then(closure_2).catch(closure_1);
                const nextPromise = promise.then(closure_2);
                const tmp2 = r;
                const tmp3 = closure_1_2;
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
                closure_1 = closure_1_2;
                const promise = new Promise((arg0, arg1) => {
                  try {
                    closure_0.schedule(arg0, closure_1);
                  } catch (tmp5) {
                    arg1(tmp5);
                  }
                });
                promise.then(closure_2).catch(closure_1);
                const nextPromise = promise.then(closure_2);
                const tmp2 = r;
                const tmp3 = closure_1_2;
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
                  closure_1 = closure_1_2;
                  const promise = new Promise((arg0, arg1) => {
                    try {
                      closure_0.schedule(arg0, closure_1);
                    } catch (tmp5) {
                      arg1(tmp5);
                    }
                  });
                  promise.then(closure_2).catch(closure_1);
                  const nextPromise = promise.then(closure_2);
                  const tmp2 = r;
                  const tmp3 = closure_1_2;
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
                  closure_1 = closure_1_2;
                  const promise = new Promise((arg0, arg1) => {
                    try {
                      closure_0.schedule(arg0, closure_1);
                    } catch (tmp5) {
                      arg1(tmp5);
                    }
                  });
                  promise.then(closure_2).catch(closure_1);
                  const nextPromise = promise.then(closure_2);
                  const tmp2 = r;
                  const tmp3 = closure_1_2;
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
                closure_1 = closure_1_2;
                const promise = new Promise((arg0, arg1) => {
                  try {
                    closure_0.schedule(arg0, closure_1);
                  } catch (tmp5) {
                    arg1(tmp5);
                  }
                });
                promise.then(closure_2).catch(closure_1);
                const nextPromise = promise.then(closure_2);
                const tmp2 = r;
                const tmp3 = closure_1_2;
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
                closure_1 = closure_1_2;
                const promise = new Promise((arg0, arg1) => {
                  try {
                    closure_0.schedule(arg0, closure_1);
                  } catch (tmp5) {
                    arg1(tmp5);
                  }
                });
                promise.then(closure_2).catch(closure_1);
                const nextPromise = promise.then(closure_2);
                const tmp2 = r;
                const tmp3 = closure_1_2;
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
        o(this, closure_0);
        let str = "Timed out";
        if (null != arg0) {
          const _HermesInternal = HermesInternal;
          str = "Timed out after waiting for " + arg0 + " ms";
        }
        const items = [str];
        const obj = closure_1_4(closure_0);
        if (closure_1_7()) {
          const _Reflect = Reflect;
          let constructResult = Reflect.construct(obj, items, closure_1_4(self).constructor);
        } else {
          constructResult = obj.apply(self, items);
        }
        const tmp5Result = POSITIVE_INFINITY(self, constructResult);
        Object.setPrototypeOf(callback(tmp5Result), closure_0.prototype);
        return tmp5Result;
      };
      _moduleResult1 = fn;
      _inherits(fn, _wrapNativeSuper(Error));
      let tmp2 = _moduleResult1(fn);
      _moduleResult1 = tmp2;
      o = function o(arg0, arg1) {

      };
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
      POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
      const fn2 = function r(arg0, num) {
        closure_0 = arg0;
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
        c3 = false;
        let fn;
        if (num !== c3) {
          fn = () => {
            if (typeof num !== "function") {
              HermesBuiltin.throwTypeError();
            }
            closure_0 = num2;
            return new Promise((arg0, arg1) => {
              try {
                closure_0.schedule(arg0, closure_1);
              } catch (tmp5) {
                arg1(tmp5);
              }
            }).then(() => {
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
                    closure_1 = closure_1_2;
                    const promise = new Promise(() => { ... });
                    promise.then(closure_2).catch(closure_1);
                    const nextPromise = promise.then(closure_2);
                    const tmp2 = r;
                    const tmp3 = closure_1_2;
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
                    closure_1 = closure_1_2;
                    const promise = new Promise(() => { ... });
                    promise.then(closure_2).catch(closure_1);
                    const nextPromise = promise.then(closure_2);
                    const tmp2 = r;
                    const tmp3 = closure_1_2;
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
                  closure_1 = closure_1_2;
                  const promise = new Promise((arg0, arg1) => {
                    try {
                      closure_0.schedule(arg0, closure_1);
                    } catch (tmp5) {
                      arg1(tmp5);
                    }
                  });
                  promise.then(closure_2).catch(closure_1);
                  const nextPromise = promise.then(closure_2);
                  const tmp2 = r;
                  const tmp3 = closure_1_2;
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
                  closure_1 = closure_1_2;
                  const promise = new Promise((arg0, arg1) => {
                    try {
                      closure_0.schedule(arg0, closure_1);
                    } catch (tmp5) {
                      arg1(tmp5);
                    }
                  });
                  promise.then(closure_2).catch(closure_1);
                  const nextPromise = promise.then(closure_2);
                  const tmp2 = r;
                  const tmp3 = closure_1_2;
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
                    closure_1 = closure_1_2;
                    const promise = new Promise(() => { ... });
                    promise.then(closure_2).catch(closure_1);
                    const nextPromise = promise.then(closure_2);
                    const tmp2 = r;
                    const tmp3 = closure_1_2;
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
                    closure_1 = closure_1_2;
                    const promise = new Promise(() => { ... });
                    promise.then(closure_2).catch(closure_1);
                    const nextPromise = promise.then(closure_2);
                    const tmp2 = r;
                    const tmp3 = closure_1_2;
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
                  closure_1 = closure_1_2;
                  const promise = new Promise((arg0, arg1) => {
                    try {
                      closure_0.schedule(arg0, closure_1);
                    } catch (tmp5) {
                      arg1(tmp5);
                    }
                  });
                  promise.then(closure_2).catch(closure_1);
                  const nextPromise = promise.then(closure_2);
                  const tmp2 = r;
                  const tmp3 = closure_1_2;
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
                  closure_1 = closure_1_2;
                  const promise = new Promise((arg0, arg1) => {
                    try {
                      closure_0.schedule(arg0, closure_1);
                    } catch (tmp5) {
                      arg1(tmp5);
                    }
                  });
                  promise.then(closure_2).catch(closure_1);
                  const nextPromise = promise.then(closure_2);
                  const tmp2 = r;
                  const tmp3 = closure_1_2;
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
_moduleResult1 = undefined;
o = undefined;
closure_2 = undefined;
POSITIVE_INFINITY = undefined;
let fn = function t(arg0) {
  const self = this;
  o(this, closure_0);
  let str = "Timed out";
  if (null != arg0) {
    const _HermesInternal = HermesInternal;
    str = "Timed out after waiting for " + arg0 + " ms";
  }
  const items = [str];
  const obj = closure_1_4(closure_0);
  if (closure_1_7()) {
    const _Reflect = Reflect;
    let constructResult = Reflect.construct(obj, items, closure_1_4(self).constructor);
  } else {
    constructResult = obj.apply(self, items);
  }
  const tmp5Result = POSITIVE_INFINITY(self, constructResult);
  Object.setPrototypeOf(callback(tmp5Result), closure_0.prototype);
  return tmp5Result;
};
_moduleResult1 = fn;
_inherits(fn, _wrapNativeSuper(Error));
_moduleResult1 = _createClass(fn);
o = function o(arg0, arg1) {

};
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
POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
let fn2 = function r(arg0, num) {
  closure_0 = arg0;
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
  c3 = false;
  let fn;
  if (num !== c3) {
    fn = () => {
      if (typeof num !== "function") {
        HermesBuiltin.throwTypeError();
      }
      closure_0 = num2;
      return new Promise((arg0, arg1) => {
        try {
          closure_0.schedule(arg0, closure_1);
        } catch (tmp5) {
          arg1(tmp5);
        }
      }).then(() => {
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
              closure_1 = closure_1_2;
              const promise = new Promise((arg0, arg1) => {
                try {
                  closure_0.schedule(arg0, closure_1);
                } catch (tmp5) {
                  arg1(tmp5);
                }
              });
              promise.then(closure_2).catch(closure_1);
              const nextPromise = promise.then(closure_2);
              const tmp2 = r;
              const tmp3 = closure_1_2;
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
              closure_1 = closure_1_2;
              const promise = new Promise((arg0, arg1) => {
                try {
                  closure_0.schedule(arg0, closure_1);
                } catch (tmp5) {
                  arg1(tmp5);
                }
              });
              promise.then(closure_2).catch(closure_1);
              const nextPromise = promise.then(closure_2);
              const tmp2 = r;
              const tmp3 = closure_1_2;
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
            closure_1 = closure_1_2;
            const promise = new Promise((arg0, arg1) => {
              try {
                closure_0.schedule(arg0, closure_1);
              } catch (tmp5) {
                arg1(tmp5);
              }
            });
            promise.then(closure_2).catch(closure_1);
            const nextPromise = promise.then(closure_2);
            const tmp2 = r;
            const tmp3 = closure_1_2;
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
            closure_1 = closure_1_2;
            const promise = new Promise((arg0, arg1) => {
              try {
                closure_0.schedule(arg0, closure_1);
              } catch (tmp5) {
                arg1(tmp5);
              }
            });
            promise.then(closure_2).catch(closure_1);
            const nextPromise = promise.then(closure_2);
            const tmp2 = r;
            const tmp3 = closure_1_2;
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
              closure_1 = closure_1_2;
              const promise = new Promise((arg0, arg1) => {
                try {
                  closure_0.schedule(arg0, closure_1);
                } catch (tmp5) {
                  arg1(tmp5);
                }
              });
              promise.then(closure_2).catch(closure_1);
              const nextPromise = promise.then(closure_2);
              const tmp2 = r;
              const tmp3 = closure_1_2;
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
              closure_1 = closure_1_2;
              const promise = new Promise((arg0, arg1) => {
                try {
                  closure_0.schedule(arg0, closure_1);
                } catch (tmp5) {
                  arg1(tmp5);
                }
              });
              promise.then(closure_2).catch(closure_1);
              const nextPromise = promise.then(closure_2);
              const tmp2 = r;
              const tmp3 = closure_1_2;
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
            closure_1 = closure_1_2;
            const promise = new Promise((arg0, arg1) => {
              try {
                closure_0.schedule(arg0, closure_1);
              } catch (tmp5) {
                arg1(tmp5);
              }
            });
            promise.then(closure_2).catch(closure_1);
            const nextPromise = promise.then(closure_2);
            const tmp2 = r;
            const tmp3 = closure_1_2;
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
            closure_1 = closure_1_2;
            const promise = new Promise((arg0, arg1) => {
              try {
                closure_0.schedule(arg0, closure_1);
              } catch (tmp5) {
                arg1(tmp5);
              }
            });
            promise.then(closure_2).catch(closure_1);
            const nextPromise = promise.then(closure_2);
            const tmp2 = r;
            const tmp3 = closure_1_2;
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