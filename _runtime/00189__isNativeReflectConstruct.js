// _runtime/00189__isNativeReflectConstruct.js
import replacer from "00048_replacer.js";
import _inheritsDefault from "00098__inherits.js";
import _wrapNativeSuperDefault from "metro/00158__wrapNativeSuper.js";
import parseErrorStack from "00190_parseErrorStack.js";
import ExceptionsManager from "00193_ExceptionsManager.js";
import closure_3 from "metro/00041__classCallCheck.js";
import closure_4 from "metro/00093__possibleConstructorReturn.js";
import closure_5 from "00095__getPrototypeOf.js";
import importDefaultResult from "metro/00042__createClass.js";

let SyntheticError = global;
require = arg1;
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
function reportException(stack) {
  stack = undefined;
  if (stack != null) {
    stack = stack.stack;
  }
  const sum = c11 + 1;
  c11 = sum;
  let str = stack.message;
  if (!str) {
    str = "";
  }
  let sum1 = str;
  if (null != stack.componentStack) {
    const _HermesInternal = HermesInternal;
    sum1 = str + "\n\nThis error is located at:" + stack.componentStack;
  }
  let str3 = "";
  if (null != stack.name) {
    str3 = "";
    if ("" !== stack.name) {
      const _HermesInternal2 = HermesInternal;
      str3 = "" + stack.name + ": ";
    }
  }
  let sum2 = sum1;
  if (!sum1.startsWith(str3)) {
    sum2 = str3 + sum1;
  }
  let obj = {};
  const merged = Object.assign(stack[RN$ErrorExtraDataKey]);
  ({ jsEngine: obj2.jsEngine, stack: obj2.rawStack } = stack);
  if (tmp10) {
    obj.stackSymbols = stack.cause.stackSymbols;
    obj.stackReturnAddresses = stack.cause.stackReturnAddresses;
    obj.stackElements = stack.cause.stackElements;
  }
  obj = { message: sum2, originalMessage: null, name: null, componentStack: null, stack: null, id: null, isFatal: null, extraData: null };
  let tmp11 = null;
  if (sum2 !== str) {
    tmp11 = str;
  }
  obj[1] = tmp11;
  let name = null;
  if (null != stack.name) {
    name = null;
    if ("" !== stack.name) {
      name = stack.name;
    }
  }
  obj[2] = name;
  let componentStack = null;
  if (typeof stack.componentStack === "string") {
    componentStack = stack.componentStack;
  }
  obj[3] = componentStack;
  obj[4] = parseErrorStack.default(stack);
  obj[5] = sum;
  obj[6] = arg1;
  obj[7] = obj;
  const defaultResult = parseErrorStack.default(stack);
  const tmp = require;
  tmp10 = null != stack.cause && typeof stack.cause === "object";
  if (arg2) {
    const _console = console;
    console.error(stack);
  }
  if (arg1) {
    const _default = ExceptionsManager.default;
    if (_default) {
      if (arg1) {
        const RN$hasHandledFatalException = SyntheticError.RN$hasHandledFatalException;
        let result;
        if (RN$hasHandledFatalException != null) {
          result = RN$hasHandledFatalException();
        }
        if (!result) {
          const RN$notifyOfFatalException = tmp17.RN$notifyOfFatalException;
          if (RN$notifyOfFatalException != null) {
            const result1 = RN$notifyOfFatalException();
          }
        }
        tmp17 = SyntheticError;
      }
      _default.reportException(tmp14);
    }
  }
}
function reactConsoleErrorHandler() {
  const items = [...arguments];
  SyntheticError = undefined;
  const items1 = [...items];
  console._errorOriginal.apply(items1);
  if (false !== console.reportErrorsAsExceptions) {
    if (!c13) {
      let result;
      if (SyntheticError.RN$inExceptionHandler != null) {
        result = RN$inExceptionHandler();
      }
      if (!result) {
        error = items[0];
        let stack;
        if (error != null) {
          stack = error.stack;
        }
        if (!stack) {
          SyntheticError = replacer.default;
          const mapped = items.map((str) => {
            let tmp = str;
            if (typeof str !== "string") {
              tmp = callback(str);
            }
            return tmp;
          });
          const tmp10 = new closure_8(mapped.join(" "));
          tmp10.name = "console.error";
          error = tmp10;
        }
        if (!obj.RN$handleException) {
          const message = error.message;
          if (!message.startsWith("Warning: ")) {
            reportException(error, false, false);
          }
        }
      }
    }
  }
}
class SyntheticError {
  constructor() {
    self = this;
    items = [...arguments];
    tmp = closure_3(this, SyntheticError);
    items1 = [...items];
    tmp2 = closure_5;
    obj = closure_5(SyntheticError);
    tmp3 = closure_4;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    tmp3Result.name = "";
    return tmp3Result;
  }
}
_inheritsDefault(SyntheticError, _wrapNativeSuperDefault(Error));
const importDefaultResultResult = importDefaultResult(SyntheticError);
let c9 = false;
const RN$ErrorExtraDataKey = "RN$ErrorExtraDataKey";
let c11 = 0;
let c13 = false;

export default {
  decoratedExtraDataKey: "RN$ErrorExtraDataKey",
  handleException(arg0, arg1) {
    if (!SyntheticError.RN$handleException) {
      const _Error = Error;
      let tmp2 = arg0;
      if (!(arg0 instanceof Error)) {
        tmp2 = new closure_8(arg0);
      }
      try {
        c13 = true;
        reportException(tmp2, arg1, true);
        c13 = false;
      } catch (tmp9) {
        c13 = false;
        throw tmp9;
      }
    }
  },
  installConsoleErrorReporter() {
    if (!console._errorOriginal) {
      const _console = console;
      const _console2 = console;
      error = console.error;
      const _console3 = console;
      console._errorOriginal = error.bind(console);
      const _console4 = console;
      console.error = reactConsoleErrorHandler;
    }
  },
  SyntheticError: importDefaultResultResult,
  unstable_setExceptionDecorator(arg0) {
    closure_7 = arg0;
  }
};
export const SyntheticError = importDefaultResultResult;