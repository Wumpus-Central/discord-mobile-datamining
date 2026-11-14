// _runtime/12161_finalizeParams.js
import _mod12159 from "metro/12159__.js";
import _mod12160 from "metro/12160__.js";
import node from "12162_node.js";
import asyncGeneratorStep from "00005_asyncGeneratorStep.js";

let self = this;
function finalizeParams(arg0, callee) {
  callee = undefined;
  if (callee != null) {
    callee = callee.callee;
  }
  if (callee == null) {
    callee = arg0;
  }
  const obj = { callee, Err: null };
  let Err;
  if (callee != null) {
    Err = callee.Err;
  }
  obj.Err = Err;
  return obj;
}
function failure(arg0, arg1, arg2) {
  closure_0 = arg0;
  closure_1 = arg1;
  closure_2 = arg2;
  const obj = { success: false };
  Object.defineProperty(obj, "error", {
    get: () => {
      let tmp = closure_3;
      if (!closure_3) {
        const tmp6 = new closure_0(_undefined.map((item) => closure_2_5.finalizeIssue(item, closure_1_2, ZodAsyncError.config())));
        closure_3 = tmp6;
        _undefined = undefined;
        c2 = undefined;
        tmp = tmp6;
      }
      return tmp;
    },
    set: (arg0) => {
      closure_3 = arg0;
      c1 = undefined;
      c2 = undefined;
    }
  });
  return obj;
}
let self2 = this;
if (this) {
  self2 = self.__createBinding;
}
if (self2) {
  let __setModuleDefault = self;
  if (self) {
    __setModuleDefault = self.__setModuleDefault;
  }
  if (__setModuleDefault) {
    let fn = self;
    if (self) {
      fn = self.__importStar;
    }
    if (!fn) {
      fn = (__esModule) => {
        if (__esModule) {
          if (__esModule.__esModule) {
            return __esModule;
          }
        }
        const obj = {};
        if (null != __esModule) {
          for (const key10009 in arg0) {
            let tmp9 = "default" !== key10009;
            if (!tmp9) {
              if (!tmp9) {
                continue;
              } else {
                let tmp6 = self2(obj, arg0, key10009);
                continue;
              }
              continue;
            } else {
              let _Object = Object;
              hasOwnProperty = Object.prototype.hasOwnProperty;
              let call = hasOwnProperty.call;
              if (typeof call === "unknown") {
                let hasOwnPropertyResult = hasOwnProperty(key10009);
              } else {
                hasOwnPropertyResult = call(arg0, key10009);
              }
            }
          }
        }
        __setModuleDefault(obj, __esModule);
        return obj;
      };
    }
    const _Object3 = Object;
    exports._parse = undefined;
    exports.parse = undefined;
    exports._parseAsync = undefined;
    exports.parseAsync = undefined;
    exports._safeParse = undefined;
    exports.safeParse = undefined;
    exports._safeParseAsync = undefined;
    exports.safeParseAsync = undefined;
    exports.validate = undefined;
    exports.validateAsync = undefined;
    exports._encode = undefined;
    exports.encode = undefined;
    exports._decode = undefined;
    exports.decode = undefined;
    exports._encodeAsync = undefined;
    exports.encodeAsync = undefined;
    exports._decodeAsync = undefined;
    exports.decodeAsync = undefined;
    exports._safeEncode = undefined;
    exports.safeEncode = undefined;
    exports._safeDecode = undefined;
    exports.safeDecode = undefined;
    exports._safeEncodeAsync = undefined;
    exports.safeEncodeAsync = undefined;
    exports._safeDecodeAsync = undefined;
    exports.safeDecodeAsync = undefined;
    let ZodAsyncError = fn(_mod12159);
    const fnResult = fn(node);
    let closure_5 = fn(_mod12160);
    exports._parse = (arg0) => {
      closure_0 = arg0;
      function fn(_zod, value, arg2, Err) {
        if (arg2) {
          const obj2 = {};
          const merged = Object.assign(arg2);
          obj2.async = false;
          let obj = obj2;
        } else {
          obj = { async: false };
        }
        _zod = _zod._zod;
        const iter = _zod.run({ value, issues: [] }, obj);
        if (iter instanceof Promise) {
          ZodAsyncError = new ZodAsyncError.$ZodAsyncError();
          throw ZodAsyncError;
        } else if (iter.issues.length) {
          Err = undefined;
          if (Err != null) {
            Err = Err.Err;
          }
          if (Err == null) {
            Err = closure_0;
          }
          const issues = iter.issues;
          const err = new Err(issues.map((item) => closure_2_5.finalizeIssue(item, obj, ZodAsyncError.config())));
          let callee;
          if (Err != null) {
            callee = Err.callee;
          }
          if (callee == null) {
            callee = fn;
          }
          closure_5.captureStackTrace(err, callee);
          throw err;
        } else {
          return iter.value;
        }
        const obj3 = { value, issues: [] };
      }
      return fn;
    };
    exports.parse = exports._parse(fnResult.$ZodRealError);
    exports._parseAsync = (arg0) => {
      closure_0 = fn((arg0, value, arg2, arg3) => {
        let _zod = arg0;
        closure_2 = arg2;
        closure_3 = arg3;
        c8 = 0;
        c9 = 0;
        return (function*(arg0, value, arg2, arg3) {
          if (c9 === 2) {
            c9 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "HermesInternal", done: null };
            }
          } else {
            try {
              c9 = 2;
              if (0 === c8) {
                if (arg0 === 1) {
                  c9 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c9 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  closure_7 = tmp4;
                  closure_6 = tmp4;
                  closure_134_0 = closure_3;
                  closure_134_1 = undefined;
                  closure_134_2 = undefined;
                  closure_134_3 = undefined;
                  if (closure_2) {
                    const obj4 = {};
                    const merged = Object.assign(closure_2);
                    obj4.async = true;
                    let obj5 = obj4;
                  } else {
                    obj5 = { async: true };
                  }
                  closure_134_1 = obj5;
                  _zod = _zod._zod;
                  const obj6 = { value, issues: [] };
                  closure_134_2 = _zod.run(obj6, obj5);
                  if (closure_134_2 instanceof Promise) {
                    c8 = 1;
                    c9 = 1;
                    const obj7 = { value: closure_134_2, done: false };
                    return obj7;
                  }
                }
              } else if (arg0 === 1) {
                c9 = 3;
                throw value;
              } else if (arg0 === 2) {
                c9 = 3;
                const obj = { value, done: true };
                return obj;
              } else {
                closure_134_2 = value;
              }
              if (closure_134_2.issues.length) {
                let Err;
                if (closure_134_0 != null) {
                  Err = closure_134_0.Err;
                }
                closure_4 = Err;
                if (Err == null) {
                  closure_4 = _zod;
                }
                const issues = closure_134_2.issues;
                const tmp25 = new closure_4(issues.map((item) => closure_5.finalizeIssue(item, closure_1_1, closure_4.config())));
                closure_134_3 = tmp25;
                let callee;
                if (closure_134_0 != null) {
                  callee = closure_134_0.callee;
                }
                closure_5 = callee;
                if (callee == null) {
                  closure_5 = value;
                }
                closure_2_5.captureStackTrace(closure_134_3, closure_5);
                throw closure_134_3;
              } else {
                c9 = 3;
                const obj8 = { value: closure_134_2.value, done: true };
                return obj8;
              }
            } catch (tmp36) {
              c9 = tmp;
              throw tmp36;
            }
          }
        })();
      });
      fn = function fn(arg0, arg1, arg2, arg3) {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      };
      return fn;
    };
    exports.parseAsync = exports._parseAsync(fnResult.$ZodRealError);
    exports._safeParse = (arg0) => {
      closure_0 = arg0;
      return (_zod, value, arg2) => {
        if (arg2) {
          const obj2 = {};
          const merged = Object.assign(arg2);
          obj2.async = false;
          let obj = obj2;
        } else {
          obj = { async: false };
        }
        _zod = _zod._zod;
        const iter = _zod.run({ value, issues: [] }, obj);
        if (iter instanceof Promise) {
          ZodAsyncError = new ZodAsyncError.$ZodAsyncError();
          throw ZodAsyncError;
        } else {
          if (iter.issues.length) {
            const issues = iter.issues;
            c2 = obj;
            closure_3 = undefined;
            const obj4 = { success: false };
            Object.defineProperty(obj4, "error", {
              get: () => {
                    let tmp = closure_3;
                    if (!closure_3) {
                      const tmp6 = new closure_0(_undefined.map((item) => closure_2_5.finalizeIssue(item, closure_1_2, ZodAsyncError.config())));
                      closure_3 = tmp6;
                      _undefined = undefined;
                      c2 = undefined;
                      tmp = tmp6;
                    }
                    return tmp;
                  },
              set: (arg0) => {
                    closure_3 = arg0;
                    c1 = undefined;
                    c2 = undefined;
                  }
            });
            let obj5 = obj4;
          } else {
            obj5 = { success: true, data: iter.value };
          }
          return obj5;
        }
        const obj3 = { value, issues: [] };
      };
    };
    exports.safeParse = exports._safeParse(fnResult.$ZodRealError);
    exports._safeParseAsync = (arg0) => {
      closure_0 = asyncGeneratorStep(async (arg0, value, arg2) => {
        let _zod = arg0;
        closure_2 = arg2;
        c5 = 0;
        c6 = 0;
        return (async (arg0, value, arg2) => {
          if (c6 === 2) {
            c6 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp4 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "HermesInternal", done: null };
            }
          } else {
            try {
              c6 = 2;
              if (0 === c5) {
                if (arg0 === 1) {
                  c6 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c6 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  closure_4 = tmp2;
                  closure_3 = tmp2;
                  closure_131_0 = undefined;
                  closure_131_1 = undefined;
                  if (closure_2) {
                    const obj4 = {};
                    const merged = Object.assign(closure_2);
                    obj4.async = true;
                    let obj5 = obj4;
                  } else {
                    obj5 = { async: true };
                  }
                  closure_131_0 = obj5;
                  _zod = _zod._zod;
                  const obj6 = { value, issues: [] };
                  closure_131_1 = _zod.run(obj6, obj5);
                  if (closure_131_1 instanceof Promise) {
                    c5 = 1;
                    c6 = 1;
                    const obj7 = { value: closure_131_1, done: false };
                    return obj7;
                  }
                }
              } else if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 3;
                const obj = { value, done: true };
                return obj;
              } else {
                closure_131_1 = value;
              }
              if (closure_131_1.issues.length) {
                failure(_zod, closure_131_1.issues, closure_131_0);
              } else {
                { success: true, data: null }[1] = closure_131_1.value;
              }
              c6 = 3;
            } catch (tmp22) {
              c6 = tmp;
              throw tmp22;
            }
          }
        })();
      });
      return function(arg0, arg1, arg2) {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      };
    };
    exports.safeParseAsync = exports._safeParseAsync(fnResult.$ZodRealError);
    const _Symbol = Symbol;
    let closure_8 = Symbol.for("zod.compile.invalid");
    const _Symbol2 = Symbol;
    let closure_9 = Symbol.for("zod.compile.fallback");
    exports.validate = (_zod, value, arg2) => {
      const validator = _zod._zod.bag.validator;
      if (undefined !== validator) {
        if (validator(value) !== closure_8) {
          return true;
        } else if (true === validator.definite) {
          if (undefined === arg2) {
            return false;
          }
        }
      }
      if (arg2) {
        const obj2 = {};
        const merged = Object.assign(arg2);
        obj2.async = false;
        obj2.abortEarly = true;
        let obj = obj2;
      } else {
        obj = { async: false, abortEarly: true };
      }
      const fallbackRun = _zod._zod.bag.fallbackRun;
      if (fallbackRun) {
        obj[closure_9] = true;
        const obj3 = { value, issues: [] };
        let fallbackRunResult = fallbackRun(obj3, obj);
      } else {
        _zod = _zod._zod;
        const obj4 = { value, issues: [] };
        fallbackRunResult = _zod.run(obj4, obj);
      }
      if (fallbackRunResult instanceof Promise) {
        ZodAsyncError = new ZodAsyncError.$ZodAsyncError();
        throw ZodAsyncError;
      } else {
        return 0 === fallbackRunResult.issues.length;
      }
    };
    let closure_129_0 = asyncGeneratorStep(async (arg0, value, arg2) => {
      let _zod = arg0;
      closure_2 = arg2;
      c4 = 0;
      c5 = 0;
      return (async (arg0, value, arg2) => {
        if (c5 === 2) {
          c5 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
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
                const obj3 = { value, done: true };
                return obj3;
              } else {
                closure_3 = tmp2;
                closure_131_0 = undefined;
                if (closure_2) {
                  const obj4 = {};
                  const merged = Object.assign(closure_2);
                  obj4.async = true;
                  obj4.abortEarly = true;
                  let obj5 = obj4;
                } else {
                  obj5 = { async: true, abortEarly: true };
                }
                _zod = _zod._zod;
                const obj6 = { value, issues: [] };
                closure_131_0 = _zod.run(obj6, obj5);
                if (closure_131_0 instanceof Promise) {
                  c4 = 1;
                  c5 = 1;
                  const obj7 = { value: closure_131_0, done: false };
                  return obj7;
                } else {
                  c5 = 3;
                }
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 !== 2) {
              closure_131_0 = value;
            }
            c5 = 3;
            const obj = { value, done: true };
            return obj;
          } catch (tmp14) {
            c5 = tmp;
            throw tmp14;
          }
        }
      })();
    });
    exports.validateAsync = function validateAsync(arg0, arg1, arg2) {
      const self = this;
      const apply = exports.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    exports._encode = (arg0) => {
      closure_0 = exports._parse(arg0);
      function fn(arg0, arg1, arg2, callee) {
        if (arg2) {
          const obj2 = {};
          const merged = Object.assign(arg2);
          obj2.direction = "backward";
          let obj = obj2;
        } else {
          obj = { direction: "backward" };
        }
        callee = undefined;
        if (callee != null) {
          callee = callee.callee;
        }
        if (callee == null) {
          callee = fn;
        }
        const obj3 = { callee, Err: null };
        let Err;
        if (callee != null) {
          Err = callee.Err;
        }
        obj3.Err = Err;
        return closure_0(arg0, arg1, obj, obj3);
      }
      return fn;
    };
    exports.encode = exports._encode(fnResult.$ZodRealError);
    exports._decode = (arg0) => {
      closure_0 = exports._parse(arg0);
      function fn(arg0, arg1, arg2, callee) {
        callee = undefined;
        if (callee != null) {
          callee = callee.callee;
        }
        if (callee == null) {
          callee = fn;
        }
        const obj = { callee, Err: null };
        let Err;
        if (callee != null) {
          Err = callee.Err;
        }
        obj.Err = Err;
        return closure_0(arg0, arg1, arg2, obj);
      }
      return fn;
    };
    exports.decode = exports._decode(fnResult.$ZodRealError);
    exports._encodeAsync = (arg0) => {
      _exports._parseAsync(arg0);
      _exports = fn(function*(arg0, arg1, arg2, arg3) {
        if (c4 === 2) {
          c4 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c4 = 2;
            if (0 === c5) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                let tmp9 = closure_2;
                if (closure_2) {
                  const obj4 = {};
                  const merged = Object.assign(tmp9);
                  obj4.direction = "backward";
                  let obj5 = obj4;
                } else {
                  obj5 = { direction: "backward" };
                }
                tmp9 = finalizeParams;
                closure_0(closure_0, closure_1, obj5, finalizeParams(closure_1, closure_3));
                c5 = 1;
                c4 = 1;
              }
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              c4 = 3;
              const obj = { value, done: true };
              return obj;
            }
          } catch (tmp15) {
            c4 = tmp;
            throw tmp15;
          }
        }
      });
      fn = function fn(arg0, arg1, arg2, arg3) {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      };
      return fn;
    };
    exports.encodeAsync = exports._encodeAsync(fnResult.$ZodRealError);
    exports._decodeAsync = (arg0) => {
      _exports._parseAsync(arg0);
      _exports = fn(function*(arg0, arg1, arg2, arg3) {
        yield closure_0(closure_0, closure_1, closure_2, finalizeParams(closure_1, closure_3));
        return value;
      });
      fn = function fn(arg0, arg1, arg2, arg3) {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      };
      return fn;
    };
    exports.decodeAsync = exports._decodeAsync(fnResult.$ZodRealError);
    exports._safeEncode = (arg0) => {
      closure_0 = arg0;
      return (arg0, arg1, arg2) => {
        if (arg2) {
          const obj2 = {};
          const merged = Object.assign(arg2);
          obj2.direction = "backward";
          let obj = obj2;
        } else {
          obj = { direction: "backward" };
        }
        return exports._safeParse(closure_0)(arg0, arg1, obj);
      };
    };
    exports.safeEncode = exports._safeEncode(fnResult.$ZodRealError);
    exports._safeDecode = (arg0) => {
      closure_0 = arg0;
      return (arg0, arg1, arg2) => exports._safeParse(closure_0)(arg0, arg1, arg2);
    };
    exports.safeDecode = exports._safeDecode(fnResult.$ZodRealError);
    exports._safeEncodeAsync = (arg0) => {
      closure_0 = asyncGeneratorStep(async (arg0, arg1, arg2) => {
        if (c3 === 2) {
          c3 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c3 = 2;
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let tmp6 = closure_2;
              if (closure_2) {
                const obj4 = {};
                const merged = Object.assign(tmp6);
                obj4.direction = "backward";
                let obj = obj4;
              } else {
                obj = { direction: "backward" };
              }
              tmp6 = closure_0._safeParseAsync(closure_0)(closure_0, closure_1, obj);
              c3 = 3;
            }
          } catch (tmp12) {
            c3 = tmp;
            throw tmp12;
          }
        }
      });
      return function(arg0, arg1, arg2) {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      };
    };
    exports.safeEncodeAsync = exports._safeEncodeAsync(fnResult.$ZodRealError);
    exports._safeDecodeAsync = (arg0) => {
      closure_0 = asyncGeneratorStep(async (arg0, arg1, arg2) => {
        if (c3 === 2) {
          c3 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c3 = 2;
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              c3 = 3;
              const obj = { value: closure_0._safeParseAsync(closure_0)(closure_0, closure_1, closure_2), done: true };
              return obj;
            }
          } catch (tmp9) {
            c3 = tmp;
            throw tmp9;
          }
        }
      });
      return function(arg0, arg1, arg2) {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      };
    };
    exports.safeDecodeAsync = exports._safeDecodeAsync(fnResult.$ZodRealError);
    (() => {
      let tmp = exports;
      const ownPropertyNames = Object.getOwnPropertyNames(exports);
      let num = 0;
      if (0 < ownPropertyNames.length) {
        const _Object = Object;
        const ownPropertyDescriptor = Object.getOwnPropertyDescriptor(exports, ownPropertyNames[num]);
        if (ownPropertyDescriptor) {
          if (ownPropertyDescriptor.get) {
            if (ownPropertyDescriptor.configurable) {
              try {
                value = ownPropertyDescriptor.get();
                if (undefined !== value) {
                  const _Object2 = Object;
                  const obj = { value, writable: false, enumerable: ownPropertyDescriptor.enumerable, configurable: false };
                  Object.defineProperty(exports, ownPropertyNames[num], obj);
                }
              } catch (err) {
              }
            }
          }
        }
        num = num + 1;
        tmp = exports;
      }
      const frozen = Object.freeze(tmp);
    })();
  } else {
    let _Object2 = Object;
  }
} else {
  let _Object = Object;
}