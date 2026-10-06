// _runtime/08640__parse.js
import NEVER2 from "08639_NEVER.js";
import $ZodError2 from "08641__ZodError.js";
import captureStackTrace2 from "08642_captureStackTrace.js";
import _asyncToGenerator from "metro/00005__asyncToGenerator.js";

let c3, closure_4, closure_5, closure_6, hasOwnProperty;

let self = this;
let tmp = this && self.__createBinding;
if (!tmp) {
  const tmp2 = globalThis;
  let _Object = Object;
  tmp = Object.create
    ? (arg0, __esModule, arg2, arg3) => {
        function get() {
          return __esModule[closure_1];
        }
        let closure_0 = __esModule;
        let closure_1 = arg2;
        let tmp = arg3;
        if (undefined === arg3) {
          tmp = arg2;
        }
        let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(__esModule, arg2);
        let tmp3 = ownPropertyDescriptor;
        if (tmp3) {
          let tmp4;
          if ("get" in ownPropertyDescriptor) {
            tmp4 = !__esModule.__esModule;
          } else {
            tmp4 = ownPropertyDescriptor.writable || ownPropertyDescriptor.configurable;
          }
          tmp3 = !tmp4;
        }
        if (!tmp3) {
          ownPropertyDescriptor = { enumerable: true, get };
          const obj = { enumerable: true, get };
        }
        Object.defineProperty(arg0, tmp, ownPropertyDescriptor);
      }
    : (arg0, arg1, arg2, arg3) => {
        let tmp = arg3;
        if (undefined === arg3) {
          tmp = arg2;
        }
        arg0[tmp] = arg1[arg2];
      };
}
let closure_2 = tmp;
let tmp3 = self && self.__setModuleDefault;
if (!tmp3) {
  let tmp4 = globalThis;
  const _Object2 = Object;
  tmp3 = Object.create
    ? (arg0, value) => {
        const obj = { enumerable: true, value };
        Object.defineProperty(arg0, "default", obj);
      }
    : (arg0, arg1) => {
        arg0.default = arg1;
      };
}
let closure_3 = tmp3;
const tmp5 =
  (self && self.__importStar) ||
  ((__esModule) => {
    const tmp = __esModule;
    if (tmp) {
      if (__esModule.__esModule) {
        return __esModule;
      }
    }
    const obj = {};
    if (null != __esModule) {
      for (const key10009 in __esModule) {
        let callResult = "default" !== key10009;
        if (callResult) {
          let _Object = Object;
          hasOwnProperty = Object.prototype.hasOwnProperty;
          callResult = hasOwnProperty.call(__esModule, key10009);
        }
        if (!callResult) {
          continue;
        } else {
          let tmp6 = closure_2(obj, __esModule, key10009);
          continue;
        }
        continue;
      }
    }
    closure_3(obj, __esModule);
    return obj;
  });
const NEVER = tmp5(NEVER2);
let $ZodError = tmp5($ZodError2);
let captureStackTrace = tmp5(captureStackTrace2);

export const _parse = (arg0) => {
  let closure_0 = arg0;
  return function (_zod, value, arg2, Err) {
    let merged;
    const obj = { async: false };
    if (arg2) {
      const _Object = Object;
      merged = Object.assign(arg2, obj);
    } else {
      merged = obj;
    }
    _zod = _zod._zod;
    const obj2 = { value, issues: [] };
    const iter = _zod.run(obj2, merged);
    if (iter instanceof Promise) {
      const self3 = this;
      const self4 = this;
      const ZodAsyncError = new NEVER.$ZodAsyncError();
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
      const self = this;
      const self2 = this;
      const err = new Err(issues.map((item) => closure_2_6.finalizeIssue(item, merged, closure_2_4.config())));
      let callee;
      captureStackTrace = captureStackTrace.captureStackTrace;
      if (Err != null) {
        callee = Err.callee;
      }
      captureStackTrace(err, callee);
      throw err;
    } else {
      return iter.value;
    }
  };
};
export const parse = exports._parse($ZodError.$ZodRealError);
export const _parseAsync = ($ZodRealError) => {
  let closure_0 = _asyncToGenerator(async (arg0, arg1, value, arg3) => {
    closure_0 = arg0;
    value = arg1;
    closure_3 = arg3;
    let c7 = 0;
    let c8 = 0;
    return (async function (arg0, value, arg2, arg3) {
      const f154769 = (item) => closure_6.finalizeIssue(item, closure_1_1, closure_4.config());
      if (c8 === 2) {
        c8 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              return { value, done: true };
            } else {
              closure_6 = tmp3;
              closure_5 = tmp3;
              closure_0 = closure_3;
              let merged;
              value = undefined;
              closure_3 = undefined;
              const obj4 = { async: true };
              const tmp33 = closure_0;
              if (value) {
                const _Object = Object;
                merged = Object.assign(tmp35, obj4);
              } else {
                merged = obj4;
              }
              const _zod = tmp33._zod;
              const obj5 = { value, issues: [] };
              value = _zod.run(obj5, merged);
              if (value instanceof Promise) {
                c7 = 1;
                c8 = 1;
                return { value, done: false };
              }
            }
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            return { value, done: true };
          }
          if (value.issues.length) {
            let Err;
            if (closure_0 != null) {
              Err = closure_0.Err;
            }
            closure_4 = Err;
            if (Err == null) {
              closure_4 = closure_0;
            }
            const issues = value.issues;
            const self = this;
            const self2 = this;
            closure_3 = new closure_4(issues.map(f154769));
            let callee;
            captureStackTrace = captureStackTrace.captureStackTrace;
            const tmp21 = new closure_4(issues.map(f154769));
            const tmp24 = closure_3;
            if (closure_0 != null) {
              callee = closure_0.callee;
            }
            captureStackTrace(tmp24, callee);
            throw closure_3;
          } else {
            c8 = 3;
            return { value: value.value, done: true };
          }
        } catch (tmp29) {
          c8 = 3;
          throw tmp29;
        }
      }
    })();
  });
  return function (arg0, arg1, arg2, arg3) {
    return closure_0(...arguments);
  };
};
export const parseAsync = exports._parseAsync($ZodError.$ZodRealError);
export const _safeParse = ($ZodRealError) => {
  let closure_0 = $ZodRealError;
  return function (_zod, value, arg2) {
    let ZodError;
    let obj;
    const tmp = arg2;
    if (tmp) {
      const obj2 = { async: false };
      const merged = Object.assign(arg2);
      obj = obj2;
    } else {
      obj = { async: false };
    }
    _zod = _zod._zod;
    const obj3 = { value, issues: [] };
    const iter = _zod.run(obj3, obj);
    if (iter instanceof Promise) {
      const self3 = this;
      const self4 = this;
      const ZodAsyncError = new NEVER.$ZodAsyncError();
      throw ZodAsyncError;
    } else {
      let obj5;
      if (iter.issues.length) {
        $ZodError = $ZodRealError;
        if ($ZodRealError == null) {
          $ZodError = $ZodError.$ZodError;
        }
        const issues = iter.issues;
        const self = this;
        const self2 = this;
        const obj4 = { success: false, error: ZodError };
        ZodError = new $ZodError(issues.map((item) => closure_2_6.finalizeIssue(item, obj, closure_2_4.config())));
        obj5 = obj4;
      } else {
        obj5 = { success: true, data: iter.value };
      }
      return obj5;
    }
  };
};
export const safeParse = exports._safeParse($ZodError.$ZodRealError);
export const _safeParseAsync = ($ZodRealError) => {
  let closure_0 = _asyncToGenerator(async (arg0, value, arg2) => {
    let _zod = arg0;
    closure_2 = arg2;
    let c5 = 0;
    let c6 = 0;
    return (async function (arg0, value, arg2) {
      let tmp16;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let obj8;
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              closure_4 = tmp3;
              closure_3 = tmp3;
              let merged;
              value = undefined;
              const obj4 = { async: true };
              const tmp23 = value;
              if (closure_2) {
                const _Object = Object;
                merged = Object.assign(tmp24, obj4);
              } else {
                merged = obj4;
              }
              _zod = _zod._zod;
              const obj5 = { value: tmp23, issues: [] };
              value = _zod.run(obj5, merged);
              if (value instanceof Promise) {
                c5 = 1;
                c6 = 1;
                return { value, done: false };
              }
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            return { value, done: true };
          }
          if (value.issues.length) {
            const issues = value.issues;
            const self = this;
            const self2 = this;
            const obj7 = { success: false, error: tmp16 };
            obj8 = obj7;
            tmp16 = new _zod(issues.map((item) => c6.finalizeIssue(item, _zod, closure_4.config())));
          } else {
            obj8 = { success: true, data: value.value };
          }
          c6 = 3;
          return { value: obj8, done: true };
        } catch (tmp18) {
          c6 = 3;
          throw tmp18;
        }
      }
    })();
  });
  return function (arg0, arg1, arg2) {
    return closure_0(...arguments);
  };
};
export const safeParseAsync = exports._safeParseAsync($ZodError.$ZodRealError);
export const _encode = ($ZodRealError) => {
  let closure_0 = $ZodRealError;
  return (arg0, arg1, arg2) => {
    let merged;
    const obj = { direction: "backward" };
    if (arg2) {
      const _Object = Object;
      merged = Object.assign(arg2, obj);
    } else {
      merged = obj;
    }
    return exports._parse($ZodRealError)(arg0, arg1, merged);
  };
};
export const encode = exports._encode($ZodError.$ZodRealError);
export const _decode = ($ZodRealError) => {
  let closure_0 = $ZodRealError;
  return (arg0, arg1, arg2) => exports._parse($ZodRealError)(arg0, arg1, arg2);
};
export const decode = exports._decode($ZodError.$ZodRealError);
export const _encodeAsync = ($ZodRealError) => {
  let closure_0 = _asyncToGenerator(async (arg0, arg1, arg2) => {
    closure_0 = arg0;
    let closure_1 = arg1;
    closure_2 = arg2;
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
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
          let merged;
          const obj = { direction: "backward" };
          if (closure_2) {
            const _Object = Object;
            merged = Object.assign(tmp5, obj);
          } else {
            merged = obj;
          }
          c3 = 3;
          const obj4 = { value: closure_0._parseAsync(closure_0)(closure_0, closure_1, merged), done: true };
          return obj4;
        }
      } catch (tmp10) {
        c3 = 3;
        throw tmp10;
      }
    }
  });
  return function (arg0, arg1, arg2) {
    return closure_0(...arguments);
  };
};
export const encodeAsync = exports._encodeAsync($ZodError.$ZodRealError);
export const _decodeAsync = ($ZodRealError) => {
  let closure_0 = _asyncToGenerator(async (arg0, arg1, arg2) => {
    closure_0 = arg0;
    let closure_1 = arg1;
    closure_2 = arg2;
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
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
          const obj = { value: closure_0._parseAsync(closure_0)(closure_0, closure_1, closure_2), done: true };
          return obj;
        }
      } catch (tmp8) {
        c3 = 3;
        throw tmp8;
      }
    }
  });
  return function (arg0, arg1, arg2) {
    return closure_0(...arguments);
  };
};
export const decodeAsync = exports._decodeAsync($ZodError.$ZodRealError);
export const _safeEncode = ($ZodRealError) => {
  let closure_0 = $ZodRealError;
  return (arg0, arg1, arg2) => {
    let merged;
    const obj = { direction: "backward" };
    if (arg2) {
      const _Object = Object;
      merged = Object.assign(arg2, obj);
    } else {
      merged = obj;
    }
    return exports._safeParse($ZodRealError)(arg0, arg1, merged);
  };
};
export const safeEncode = exports._safeEncode($ZodError.$ZodRealError);
export const _safeDecode = ($ZodRealError) => {
  let closure_0 = $ZodRealError;
  return (arg0, arg1, arg2) => exports._safeParse($ZodRealError)(arg0, arg1, arg2);
};
export const safeDecode = exports._safeDecode($ZodError.$ZodRealError);
export const _safeEncodeAsync = ($ZodRealError) => {
  let closure_0 = _asyncToGenerator(async (arg0, arg1, arg2) => {
    closure_0 = arg0;
    let closure_1 = arg1;
    closure_2 = arg2;
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
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
          let merged;
          const obj = { direction: "backward" };
          if (closure_2) {
            const _Object = Object;
            merged = Object.assign(tmp5, obj);
          } else {
            merged = obj;
          }
          c3 = 3;
          const obj4 = { value: closure_0._safeParseAsync(closure_0)(closure_0, closure_1, merged), done: true };
          return obj4;
        }
      } catch (tmp10) {
        c3 = 3;
        throw tmp10;
      }
    }
  });
  return function (arg0, arg1, arg2) {
    return closure_0(...arguments);
  };
};
export const safeEncodeAsync = exports._safeEncodeAsync($ZodError.$ZodRealError);
export const _safeDecodeAsync = ($ZodRealError) => {
  let closure_0 = _asyncToGenerator(async (arg0, arg1, arg2) => {
    closure_0 = arg0;
    let closure_1 = arg1;
    closure_2 = arg2;
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
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
      } catch (tmp8) {
        c3 = 3;
        throw tmp8;
      }
    }
  });
  return function (arg0, arg1, arg2) {
    return closure_0(...arguments);
  };
};
export const safeDecodeAsync = exports._safeDecodeAsync($ZodError.$ZodRealError);
