// _runtime/metro/12593__.js
import _isNativeReflectConstruct from "../12592__isNativeReflectConstruct.js";
import toDotPath from "../12594_toDotPath.js";
import mergeDefs from "../12595_mergeDefs.js";
import closure_1 from "../00005_asyncGeneratorStep.js";

let self = this;
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
            let tmp8 = key10009;
            let tmp9 = "default" !== key10009;
            if (!tmp9) {
              if (!tmp9) {
                continue;
              } else {
                let tmp5 = self2;
                let tmp6 = self2(obj, arg0, key10009);
                continue;
              }
              continue;
            } else {
              let _Object = Object;
              let call = hasOwnProperty.call;
              if (typeof call === "unknown") {
                let hasOwnPropertyResult = hasOwnProperty(key10009);
              } else {
                hasOwnPropertyResult = call(arg0, key10009);
              }
              let tmp4 = hasOwnPropertyResult;
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
    let closure_4 = fn(_isNativeReflectConstruct);
    const fnResult = fn(toDotPath);
    let c5 = fnResult;
    let closure_6 = fn(mergeDefs);
    exports._parse = (arg0) => {
      closure_0 = arg0;
      return (_zod, value, arg2, Err) => {
        let obj = { async: false };
        if (arg2) {
          const _Object = Object;
          let merged = Object.assign(arg2, obj);
        } else {
          merged = obj;
        }
        _zod = _zod._zod;
        obj = { value, issues: [] };
        const iter = _zod.run(obj, merged);
        if (iter instanceof Promise) {
          const ZodAsyncError = new closure_1_4.$ZodAsyncError();
          throw ZodAsyncError;
        } else if (iter.issues.length) {
          Err = undefined;
          if (Err != null) {
            Err = Err.Err;
          }
          if (Err == null) {
            Err = merged;
          }
          const issues = iter.issues;
          const err = new Err(issues.map((path) => closure_1_6.finalizeIssue(path, merged, closure_1_4.config())));
          let callee;
          if (Err != null) {
            callee = Err.callee;
          }
          closure_1_6.captureStackTrace(err, callee);
          throw err;
        } else {
          return iter.value;
        }
      };
    };
    exports.parse = exports._parse(fnResult.$ZodRealError);
    exports._parseAsync = (arg0) => {
      closure_0 = arg0;
      closure_0 = callback((arg0, arg1, arg2, arg3) => {
        closure_0 = arg0;
        closure_1 = arg1;
        closure_2 = arg2;
        closure_3 = arg3;
        c7 = 0;
        c8 = 0;
        return (function*(arg0, arg1, arg2, arg3) {
          if (c8 === 2) {
            c8 = 3;
            HermesBuiltin.throwTypeError();
          } else if (tmp3 === 3) {
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
              c8 = 2;
              if (0 === c7) {
                if (arg0 === 1) {
                  c8 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c8 = 3;
                  obj = { value: null, done: true };
                  obj[0] = arg1;
                  return obj;
                } else {
                  closure_6 = tmp4;
                  closure_5 = tmp4;
                  closure_0 = c3;
                  let merged;
                  closure_2 = undefined;
                  c3 = undefined;
                  obj1 = { async: true };
                  if (closure_2) {
                    const _Object = Object;
                    merged = Object.assign(tmp40, obj1);
                  } else {
                    merged = obj1;
                  }
                  const _zod = closure_0._zod;
                  const obj2 = { value: null, issues: null };
                  obj2[0] = merged;
                  obj2[1] = [];
                  closure_2 = _zod.run(obj2, merged);
                  if (closure_2 instanceof Promise) {
                    c7 = 1;
                    c8 = 1;
                    const obj3 = { value: null, done: false };
                    obj3[0] = closure_2;
                    return obj3;
                  }
                  const tmp38 = closure_0;
                  const tmp39 = merged;
                }
              } else if (arg0 === 1) {
                c8 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c8 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                closure_2 = arg1;
              }
              if (closure_2.issues.length) {
                let Err;
                if (closure_0 != null) {
                  Err = closure_0.Err;
                }
                closure_4 = Err;
                if (Err == null) {
                  closure_4 = closure_0;
                }
                const issues = closure_2.issues;
                const tmp24 = new closure_4(issues.map((path) => closure_6.finalizeIssue(path, merged, closure_4.config())));
                closure_3 = tmp24;
                let callee;
                if (closure_0 != null) {
                  callee = closure_0.callee;
                }
                closure_2_6.captureStackTrace(closure_3, callee);
                throw closure_3;
              } else {
                c8 = 3;
                const obj4 = { value: null, done: true };
                obj4[0] = closure_2.value;
                return obj4;
              }
            } catch (tmp32) {
              c8 = tmp;
              throw tmp32;
            }
          }
        })();
      });
      return function(arg0, arg1, arg2, arg3) {
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
    exports.parseAsync = exports._parseAsync(fnResult.$ZodRealError);
    exports._safeParse = (arg0) => {
      closure_0 = arg0;
      return (_zod, value) => {
        if (arg2) {
          let obj = {};
          const merged = Object.assign(arg2);
          obj.async = false;
        } else {
          obj = { async: false };
        }
        _zod = _zod._zod;
        obj = { value, issues: [] };
        const iter = _zod.run(obj, obj);
        if (iter instanceof Promise) {
          const ZodAsyncError = new closure_1_4.$ZodAsyncError();
          throw ZodAsyncError;
        } else {
          if (iter.issues.length) {
            let $ZodError = obj;
            if (obj == null) {
              $ZodError = closure_1_5.$ZodError;
            }
            obj1 = { success: false, error: null };
            const issues = iter.issues;
            const ZodError = new $ZodError(issues.map((path) => closure_1_6.finalizeIssue(path, obj, closure_1_4.config())));
            obj1[1] = ZodError;
            let obj2 = obj1;
          } else {
            obj2 = { success: true, data: null };
            obj2[1] = iter.value;
          }
          return obj2;
        }
      };
    };
    exports.safeParse = exports._safeParse(fnResult.$ZodRealError);
    exports._safeParseAsync = (arg0) => {
      closure_0 = arg0;
      closure_0 = callback((arg0, arg1, arg2) => {
        closure_0 = arg0;
        closure_1 = arg1;
        closure_2 = arg2;
        c5 = 0;
        c6 = 0;
        return (function*(arg0, arg1, arg2) {
          if (c6 === 2) {
            c6 = 3;
            HermesBuiltin.throwTypeError();
          } else if (tmp3 === 3) {
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
              c6 = 2;
              if (0 === c5) {
                if (arg0 === 1) {
                  c6 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c6 = 3;
                  obj = { value: null, done: true };
                  obj[0] = arg1;
                  return obj;
                } else {
                  closure_4 = tmp4;
                  closure_3 = tmp4;
                  let merged;
                  closure_1 = undefined;
                  obj1 = { async: true };
                  if (closure_2) {
                    const _Object = Object;
                    merged = Object.assign(tmp30, obj1);
                  } else {
                    merged = obj1;
                  }
                  const _zod = merged._zod;
                  const obj2 = { value: null, issues: null };
                  obj2[0] = closure_1;
                  obj2[1] = [];
                  closure_1 = _zod.run(obj2, merged);
                  if (closure_1 instanceof Promise) {
                    c5 = 1;
                    c6 = 1;
                    const obj3 = { value: null, done: false };
                    obj3[0] = closure_1;
                    return obj3;
                  }
                  const tmp28 = merged;
                  const tmp29 = closure_1;
                }
              } else if (arg0 === 1) {
                c6 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c6 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                closure_1 = arg1;
              }
              if (closure_1.issues.length) {
                const obj4 = { success: false, error: null };
                const issues = closure_1.issues;
                const tmp19 = new closure_0(issues.map((path) => c6.finalizeIssue(path, merged, closure_4.config())));
                obj4[1] = tmp19;
              } else {
                { success: true, data: null }[1] = closure_1.value;
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
    exports._encode = (arg0) => {
      closure_0 = arg0;
      return (arg0, arg1, arg2) => {
        const obj = { direction: "backward" };
        if (arg2) {
          const _Object = Object;
          let merged = Object.assign(arg2, obj);
        } else {
          merged = obj;
        }
        return closure_0._parse(closure_0)(arg0, arg1, merged);
      };
    };
    exports.encode = exports._encode(fnResult.$ZodRealError);
    exports._decode = (arg0) => {
      closure_0 = arg0;
      return (arg0, arg1, arg2) => closure_0._parse(closure_0)(arg0, arg1, arg2);
    };
    exports.decode = exports._decode(fnResult.$ZodRealError);
    exports._encodeAsync = (arg0) => {
      closure_0 = arg0;
      closure_0 = callback((arg0, arg1, arg2) => {
        closure_0 = arg0;
        closure_1 = arg1;
        closure_2 = arg2;
        c3 = 0;
        return (function*(arg0, arg1, arg2) {
          if (c3 === 2) {
            c3 = 3;
            HermesBuiltin.throwTypeError();
          } else if (tmp3 === 3) {
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
              c3 = 2;
              if (arg0 === 1) {
                c3 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c3 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                let _parseAsync = { direction: "backward" };
                if (closure_2) {
                  const _Object = Object;
                  let merged = Object.assign(tmp6, _parseAsync);
                } else {
                  merged = _parseAsync;
                }
                _parseAsync = _parseAsync._parseAsync;
                _parseAsync(_parseAsync)(_parseAsync, closure_1, merged);
                c3 = 3;
                const tmp4 = _parseAsync;
                const tmp5 = closure_1;
              }
            } catch (tmp12) {
              c3 = tmp;
              throw tmp12;
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
    exports.encodeAsync = exports._encodeAsync(fnResult.$ZodRealError);
    exports._decodeAsync = (arg0) => {
      closure_0 = arg0;
      closure_0 = callback((arg0, arg1, arg2) => {
        closure_0 = arg0;
        closure_1 = arg1;
        closure_2 = arg2;
        c3 = 0;
        return (function*(arg0, arg1, arg2) {
          if (c3 === 2) {
            c3 = 3;
            HermesBuiltin.throwTypeError();
          } else if (tmp3 === 3) {
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
              c3 = 2;
              if (arg0 === 1) {
                c3 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c3 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                c3 = 3;
                obj = { value: null, done: true };
                obj[0] = closure_0._parseAsync(closure_0)(closure_0, closure_1, closure_2);
                return obj;
              }
            } catch (tmp9) {
              c3 = tmp;
              throw tmp9;
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
    exports.decodeAsync = exports._decodeAsync(fnResult.$ZodRealError);
    exports._safeEncode = (arg0) => {
      closure_0 = arg0;
      return (arg0, arg1, arg2) => {
        const obj = { direction: "backward" };
        if (arg2) {
          const _Object = Object;
          let merged = Object.assign(arg2, obj);
        } else {
          merged = obj;
        }
        return closure_0._safeParse(closure_0)(arg0, arg1, merged);
      };
    };
    exports.safeEncode = exports._safeEncode(fnResult.$ZodRealError);
    exports._safeDecode = (arg0) => {
      closure_0 = arg0;
      return (arg0, arg1, arg2) => closure_0._safeParse(closure_0)(arg0, arg1, arg2);
    };
    exports.safeDecode = exports._safeDecode(fnResult.$ZodRealError);
    exports._safeEncodeAsync = (arg0) => {
      closure_0 = arg0;
      closure_0 = callback((arg0, arg1, arg2) => {
        closure_0 = arg0;
        closure_1 = arg1;
        closure_2 = arg2;
        c3 = 0;
        return (function*(arg0, arg1, arg2) {
          if (c3 === 2) {
            c3 = 3;
            HermesBuiltin.throwTypeError();
          } else if (tmp3 === 3) {
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
              c3 = 2;
              if (arg0 === 1) {
                c3 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c3 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                let _safeParseAsync = { direction: "backward" };
                if (closure_2) {
                  const _Object = Object;
                  let merged = Object.assign(tmp6, _safeParseAsync);
                } else {
                  merged = _safeParseAsync;
                }
                _safeParseAsync = _safeParseAsync._safeParseAsync;
                _safeParseAsync(_safeParseAsync)(_safeParseAsync, closure_1, merged);
                c3 = 3;
                const tmp4 = _safeParseAsync;
                const tmp5 = closure_1;
              }
            } catch (tmp12) {
              c3 = tmp;
              throw tmp12;
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
    exports.safeEncodeAsync = exports._safeEncodeAsync(fnResult.$ZodRealError);
    exports._safeDecodeAsync = (arg0) => {
      closure_0 = arg0;
      closure_0 = callback((arg0, arg1, arg2) => {
        closure_0 = arg0;
        closure_1 = arg1;
        closure_2 = arg2;
        c3 = 0;
        return (function*(arg0, arg1, arg2) {
          if (c3 === 2) {
            c3 = 3;
            HermesBuiltin.throwTypeError();
          } else if (tmp3 === 3) {
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
              c3 = 2;
              if (arg0 === 1) {
                c3 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c3 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                c3 = 3;
                obj = { value: null, done: true };
                obj[0] = closure_0._safeParseAsync(closure_0)(closure_0, closure_1, closure_2);
                return obj;
              }
            } catch (tmp9) {
              c3 = tmp;
              throw tmp9;
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
    exports.safeDecodeAsync = exports._safeDecodeAsync(fnResult.$ZodRealError);
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}