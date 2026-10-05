// _runtime/00189_SyntheticError.js
import stringifySafe from "00048_stringifySafe.js";
import _wrapNativeSuperDefault from "metro/00158__wrapNativeSuper.js";
import parseErrorStack from "00190_parseErrorStack.js";
import ExceptionsManager from "00193_ExceptionsManager.js";
import _createClass from "metro/00042__createClass.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import _possibleConstructorReturn from "metro/00093__possibleConstructorReturn.js";
import _getPrototypeOf from "00095__getPrototypeOf.js";
import _inherits from "00098__inherits.js";

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {}));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {}
}
function reportException(stack, isFatal, arg2) {
  let componentStack;
  let name;
  let tmp11;
  function preprocessException(error) {
    if (closure_1_7) {
      const tmp2 = c9;
      if (!tmp2) {
        c9 = true;
        try {
          c9 = false;
          return closure_1_7(error);
        } catch (tmp4) {
          c9 = false;
          throw tmp4;
        }
      }
    }
    return error;
  }
  stack = undefined;
  const _default = parseErrorStack.default;
  if (stack != null) {
    stack = stack.stack;
  }
  unpackModuleId = unpackModuleId + 1;
  let str = stack.message;
  const _defaultResult = _default(stack);
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
  const tmp10 = null != stack.cause && typeof stack.cause === "object";
  if (tmp10) {
    obj.stackSymbols = stack.cause.stackSymbols;
    obj.stackReturnAddresses = stack.cause.stackReturnAddresses;
    obj.stackElements = stack.cause.stackElements;
  }
  const error = {
    message: sum2,
    originalMessage: tmp11,
    name,
    componentStack,
    stack: _defaultResult,
    id: unpackModuleId,
    isFatal,
    extraData: obj,
  };
  tmp11 = null;
  if (sum2 !== str) {
    tmp11 = str;
  }
  name = null;
  if (null != stack.name) {
    name = null;
    if ("" !== stack.name) {
      name = stack.name;
    }
  }
  componentStack = null;
  if (typeof stack.componentStack === "string") {
    componentStack = stack.componentStack;
  }
  const tmp14 = preprocessException(error);
  if (arg2) {
    const _console = console;
    console.error(stack);
  }
  if (isFatal) {
    const _default2 = ExceptionsManager.default;
    if (_default2) {
      if (isFatal) {
        const RN$hasHandledFatalException = global.RN$hasHandledFatalException;
        let result;
        if (RN$hasHandledFatalException != null) {
          result = RN$hasHandledFatalException();
        }
        if (!result) {
          const RN$notifyOfFatalException = global.RN$notifyOfFatalException;
          if (RN$notifyOfFatalException != null) {
            const result1 = RN$notifyOfFatalException();
          }
        }
      }
      _default2.reportException(tmp14);
    }
  }
}
function reactConsoleErrorHandler() {
  const items = [...arguments];
  let closure_0;
  const items1 = [...items];
  console._errorOriginal.apply(items1);
  if (false !== console.reportErrorsAsExceptions) {
    if (!c13) {
      let result;
      if (global.RN$inExceptionHandler != null) {
        result = RN$inExceptionHandler();
      }
      if (!result) {
        let error = items[0];
        let stack;
        if (error != null) {
          stack = error.stack;
        }
        if (!stack) {
          closure_0 = stringifySafe.default;
          const mapped = items.map((item) => {
            let tmp = item;
            if (typeof item !== "string") {
              tmp = closure_0(item);
            }
            return tmp;
          });
          const self = this;
          const self2 = this;
          const tmp8 = new metroImportAll(mapped.join(" "));
          tmp8.name = "console.error";
          error = tmp8;
        }
        if (!global.RN$handleException) {
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
    let constructResult;
    const self = this;
    const items = [...arguments];
    _classCallCheck(this, SyntheticError);
    const items1 = [...items];
    const obj = _getPrototypeOf(SyntheticError);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    const tmp3Result = _possibleConstructorReturn(self, constructResult);
    tmp3Result.name = "";
    return tmp3Result;
  }
}
_inherits(SyntheticError, _wrapNativeSuperDefault(Error));
const importDefaultResultResult = _createClass(SyntheticError);
const metroImportAll = importDefaultResultResult;
let c9 = false;
const RN$ErrorExtraDataKey = "RN$ErrorExtraDataKey";
let unpackModuleId = 0;
let c13 = false;
const SyntheticError_export = importDefaultResultResult;

export default {
  decoratedExtraDataKey: "RN$ErrorExtraDataKey",
  handleException(View, arg1) {
    if (!global.RN$handleException) {
      const _Error = Error;
      let tmp2 = View;
      if (!(View instanceof Error)) {
        const self = this;
        const self2 = this;
        tmp2 = new metroImportAll(View);
      }
      try {
        reportException(tmp2, arg1, true);
        c13 = false;
      } catch (tmp7) {
        c13 = false;
        throw tmp7;
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
    let closure_1_7 = arg0;
  },
};
export { SyntheticError_export as SyntheticError };
