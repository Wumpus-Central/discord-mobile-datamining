// === Module 189: ? ===

// Module 189
import replacer from "replacer" /* 48 */;
import _possibleConstructorReturnDefault from "_possibleConstructorReturn" /* 93 */;
import _wrapNativeSuperDefault from "_wrapNativeSuper" /* 158 */;
import _mod190 from "module_190" /* 190 */;
import _createClass from "_createClass" /* 42 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

const ExceptionsManager = tmp(193);
const SyntheticError = global;
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
function reportException(stack, isFatal, arg2) {
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
  const obj = {};
  const merged = Object.assign(stack[RN$ErrorExtraDataKey]);
  ({ jsEngine: obj2.jsEngine, stack: obj2.rawStack } = stack);
  if (tmp10) {
    obj.stackSymbols = stack.cause.stackSymbols;
    obj.stackReturnAddresses = stack.cause.stackReturnAddresses;
    obj.stackElements = stack.cause.stackElements;
  }
  const error = { message: sum2, originalMessage: null, name: null, componentStack: null, stack: null, id: null, isFatal: null, extraData: null };
  let tmp11 = null;
  if (sum2 !== str) {
    tmp11 = str;
  }
  error.originalMessage = tmp11;
  let name = null;
  if (null != stack.name) {
    name = null;
    if ("" !== stack.name) {
      name = stack.name;
    }
  }
  error.name = name;
  let componentStack = null;
  if (typeof stack.componentStack === "string") {
    componentStack = stack.componentStack;
  }
  error.componentStack = componentStack;
  error.stack = _mod190.default(stack);
  error.id = sum;
  error.isFatal = isFatal;
  error.extraData = obj;
  const defaultResult = _mod190.default(stack);
  tmp10 = null != stack.cause && typeof stack.cause === "object";
  if (arg2) {
    const _console = console;
    console.error(stack);
  }
  if (isFatal) {
    const _default = ExceptionsManager.default;
    if (_default) {
      if (isFatal) {
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
  closure_0 = undefined;
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
          closure_0 = replacer.default;
          const mapped = items.map((item) => {
            let tmp = item;
            if (typeof item !== "string") {
              tmp = closure_0(item);
            }
            return tmp;
          });
          const tmp10 = new importDefaultResultResult(mapped.join(" "));
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
_possibleConstructorReturnDefault;
class SyntheticError {
  constructor() {
    self = this;
    items = [...arguments];
    tmp = closure_3(this, SyntheticError);
    items1 = [...items];
    tmp2 = hasOwnProperty;
    obj = hasOwnProperty(SyntheticError);
    tmp3 = closure_4;
    if (metroRequire()) {
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
_inherits(SyntheticError, _wrapNativeSuperDefault(Error));
const importDefaultResultResult = _createClass(SyntheticError);
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
        tmp2 = new importDefaultResultResult(arg0);
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
      const _console3 = console;
      console._errorOriginal = error.bind(console);
      const _console4 = console;
      console.error = reactConsoleErrorHandler;
    }
  },
  SyntheticError: importDefaultResultResult,
  unstable_setExceptionDecorator(arg0) {
    global = arg0;
  }
};
export const SyntheticError = importDefaultResultResult;