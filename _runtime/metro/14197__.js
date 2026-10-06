// _runtime/metro/14197__.js
import ArgType from "../14198_ArgType.js";
import react_mod from "../00473_react.js";

let _default2, logger;

let tmp3;
let react = react_mod;
if (!react) {
  let obj = { default: react };
  tmp3 = obj;
} else {
  tmp3 = react;
}
react = tmp3.default;
let closure_5 = { veto: null };
function objectifyError(headers) {
  let closure_0 = headers;
  const obj = {};
  const ownPropertyNames = Object.getOwnPropertyNames(headers);
  const item = ownPropertyNames.forEach((item) => {
    obj[item] = closure_0[item];
  });
  return obj;
}

export default (arg0) => {
  let closure_0 = arg0;
  return (log) => {
    let addException;
    function reportError(stack) {
      logger = stack;
      try {
        const tmp2 = _default;
        if (!tmp2) {
          const tmp3 = logger;
          const tmp5 = logger(veto[2]);
          if (typeof tmp5 === "function") {
            _default = tmp5;
          } else {
            _default = tmp6.default;
          }
        }
        const tmp9 = _default2;
        if (!tmp9) {
          const tmp12 = logger(veto[3]);
          if (typeof tmp12 === "function") {
            _default2 = tmp12;
          } else {
            _default2 = tmp13.default;
          }
        }
        if (_default) {
          if (_default2) {
            if (typeof tmp16 !== "function") {
              logger.error("parseErrorStack is not a function", []);
              const obj2 = { parseErrorStackType: typeof _default, parseErrorStack: _default };
              logger.debug(obj2);
            } else if (typeof tmp18 !== "function") {
              logger.error("symbolicateStackTrace is not a function", []);
              const obj3 = { symbolicateStackTraceType: typeof _default2, symbolicateStackTrace: _default2 };
              logger.debug(obj3);
            } else {
              try {
                const promise = _default2(_default(stack.stack));
                const nextPromise = promise.then((stack) => {
                  stack = stack.stack;
                  const mapped = stack.map((file) => ({
                    fileName: file.file,
                    functionName: file.methodName,
                    lineNumber: file.lineNumber,
                  }));
                  let found = mapped;
                  if (veto.veto) {
                    found = mapped.filter((item) => {
                      let vetoResult;
                      if (veto != null) {
                        vetoResult = veto.veto(item);
                      }
                      return vetoResult;
                    });
                  }
                  stack.error(stack.message, found);
                });
                nextPromise.catch((error) => {
                  stack.error("Unable to symbolicate stack trace from error object", []);
                  if (typeof closure_2_6 === "function") {
                    stack = error;
                    const obj = {};
                    const _Object = Object;
                    const ownPropertyNames = Object.getOwnPropertyNames(error);
                    const item = ownPropertyNames.forEach((item) => {
                      obj[item] = closure_0[item];
                    });
                    tmp3(obj);
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                });
              } catch (tmp32) {
                logger.error("Unable to parse stack trace from error object", []);
                logger.debug(closure_1_6(tmp32));
              }
            }
          }
        }
        logger.error("parseErrorStack or symbolicateStackTrace is not available", []);
        let obj = { parseErrorStackAvailable: _default, symbolicateStackTraceAvailable: _default2 };
        logger.debug(obj);
      } catch (tmp47) {
        logger.error(
          'Unable to load "react-native/Libraries/Core/Devtools/parseErrorStack" or "react-native/Libraries/Core/Devtools/symbolicateStackTrace"',
          [],
        );
        logger.debug(closure_1_6(tmp47));
      }
    }
    let _default = reportError;
    const result = ArgType.assertHasLoggerPlugin(log);
    closure_0 = log;
    let obj = closure_0;
    let _Object = Object;
    if (!closure_0) {
      obj = {};
    }
    let closure_1 = assign({}, closure_5, obj);
    let obj2 = {
      onConnect() {
        const obj = {
          apply(apply, arg1, arg2) {
            _default(arg2[0]);
            return apply.apply(arg1, arg2);
          },
        };
        const proxy = new Proxy(addException.addException, obj);
        addException.addException = proxy;
      },
      features: { reportError },
    };
    return obj2;
  };
};
