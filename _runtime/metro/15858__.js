// _runtime/metro/15858__.js
import _mod15859 from "15859__.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import c3 from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";
import _wrapNativeSuper from "00158__wrapNativeSuper.js";

const ZodError = require;
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
const util = _mod15859.util;
class ZodError {
  constructor(arg0) {
    self = this;
    tmp = c2(this, ZodError);
    tmp2 = closure_4;
    obj = closure_4(ZodError);
    tmp3 = closure_3;
    if (hasOwnProperty()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, [], tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, undefined);
    }
    tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.issues = [];
    tmp3Result.addIssue = (arg0) => {
      items = [];
      items[HermesBuiltin.arraySpread(issues.issues, 0)] = arg0;
      issues.issues = items;
    };
    tmp3Result.addIssues = () => {
      items = arg0;
      if (arg0 === undefined) {
        items = [];
      }
      const items1 = [...items];
      closure_0.issues = items1;
    };
    prototype = new.target.prototype;
    if (Object.setPrototypeOf) {
      _Object = Object;
      setPrototypeOfResult = Object.setPrototypeOf(tmp3Result, prototype);
    } else {
      tmp3Result.__proto__ = prototype;
    }
    tmp3Result.name = "ZodError";
    tmp3Result.issues = global;
    return tmp3Result;
  }
}
_inherits(ZodError, _wrapNativeSuper(Error));
let items = [
  {
    key: "errors",
    get() {
      return this.issues;
    }
  },
  {
    key: "format",
    value: function format(arg0) {
      let fn = arg0;
      if (!arg0) {
        fn = (message) => message.message;
      }
      let obj = { _errors: [] };
      function processError(arg0) {
        const iter = arg0.issues[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp2 = nextResult;
          if ("invalid_union" === nextResult.code) {
            let unionErrors = tmp2.unionErrors;
            let mapped = unionErrors.map(processError);
          } else if ("invalid_return_type" === tmp2.code) {
            let tmp32 = processError(tmp2.returnTypeError);
          } else if ("invalid_arguments" === tmp2.code) {
            let tmp29 = processError(tmp2.argumentsError);
          } else if (0 === tmp2.path.length) {
            let _errors = obj._errors;
            let arr = _errors.push(fn(tmp2));
          } else {
            let tmp19 = obj;
            let num = 0;
            if (0 < tmp2.path.length) {
              do {
                let tmp5 = tmp2.path[num];
                if (num === tmp2.path.length - 1) {
                  let tmp11 = tmp19[tmp5];
                  if (!tmp11) {
                    let obj2 = { _errors: [] };
                    tmp11 = obj2;
                  }
                  tmp19[tmp5] = tmp11;
                  let _errors1 = tmp19[tmp5]._errors;
                  let arr2 = _errors1.push(fn(tmp2));
                } else {
                  let tmp8 = tmp19[tmp5];
                  if (!tmp8) {
                    obj = { _errors: [] };
                    tmp8 = obj;
                  }
                  tmp19[tmp5] = tmp8;
                }
                tmp19 = tmp19[tmp5];
                sum = num + 1;
                num = sum;
              } while (sum < tmp2.path.length);
            }
          }
          continue;
        }
      }
      processError(this);
      return obj;
    }
  },
  {
    key: "toString",
    value: function toString() {
      return this.message;
    }
  },
  {
    key: "message",
    get() {
      return JSON.stringify(this.issues, ZodError(15859).util.jsonStringifyReplacer, 2);
    }
  },
  {
    key: "isEmpty",
    get() {
      return 0 === this.issues.length;
    }
  },
  {
    key: "flatten",
    value: function flatten() {
      let fn = arg0;
      if (arg0 === undefined) {
        fn = function e(message) {
          return message.message;
        };
      }
      const fieldErrors = {};
      const formErrors = [];
      const iter = this.issues[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp2 = nextResult;
        if (nextResult.path.length > 0) {
          let items1 = fieldErrors[tmp2.path[0]];
          if (!items1) {
            items1 = [];
          }
          fieldErrors[tmp2.path[0]] = items1;
          let arr3 = fieldErrors[tmp2.path[0]];
          let arr = arr3.push(fn(tmp2));
        } else {
          let arr2 = formErrors.push(fn(tmp2));
        }
        continue;
      }
      return { formErrors, fieldErrors };
    }
  },
  {
    key: "formErrors",
    get() {
      return this.flatten();
    }
  }
];
const entry = {
  key: "assert",
  value: function assert(arg0) {
    if (!(arg0 instanceof ZodError)) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const error = new Error("Not a ZodError: " + arg0);
      throw error;
    }
  }
};
let items1 = [entry];
const _moduleResult = _createClass(ZodError, items, items1);
_moduleResult.create = (arg0) => new _moduleResult(arg0);

export const ZodIssueCode = util.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
export (arg0) => JSON.stringify(arg0, null, 2).replace(/"([^"]+)":/g, "$1:")
export const ZodError = _moduleResult;