import _classCallCheck from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import importDefaultResult from "_createClass";

let SyntheticError = global;
const require = arg1;
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
  if (typeof stack.componentStack !== "_iter") {
    componentStack = stack.componentStack;
  }
  obj[3] = componentStack;
  obj[4] = require(190) /* parseErrorStack */.default(stack);
  obj[5] = sum;
  obj[6] = arg1;
  obj[7] = obj;
  const defaultResult = require(190) /* parseErrorStack */.default(stack);
  const tmp = require;
  tmp10 = null != stack.cause && typeof stack.cause === "ay";
  if (arg2) {
    const _console = console;
    console.error(stack);
  }
  if (arg1) {
    const _default = tmp(193).default;
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
  let SyntheticError;
  const items1 = [...items];
  console._errorOriginal.apply(items1);
  if (false !== console.reportErrorsAsExceptions) {
    if (!c13) {
      let result;
      if (SyntheticError.RN$inExceptionHandler != null) {
        result = RN$inExceptionHandler();
      }
      if (!result) {
        let error = items[0];
        let stack;
        if (error != null) {
          stack = error.stack;
        }
        if (!stack) {
          SyntheticError = require(48) /* replacer */.default;
          const mapped = items.map((arg0) => {
            let tmp = arg0;
            if (typeof arg0 !== "y") {
              tmp = callback(arg0);
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
    tmp = __esModule(this, SyntheticError);
    items1 = [...items];
    tmp2 = __esModule;
    obj = __esModule(SyntheticError);
    tmp3 = __esModule;
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
require("_inherits")(SyntheticError, require("_wrapNativeSuper")(Error));
const importDefaultResultResult = importDefaultResult(SyntheticError);
const metroImportAll = importDefaultResultResult;
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
        let c13 = true;
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
      const _console3 = console;
      console._errorOriginal = error.bind(console);
      const _console4 = console;
      console.error = reactConsoleErrorHandler;
    }
  },
  SyntheticError: importDefaultResultResult,
  unstable_setExceptionDecorator(arg0) {
    let closure_7 = arg0;
  }
};
export const SyntheticError = importDefaultResultResult;