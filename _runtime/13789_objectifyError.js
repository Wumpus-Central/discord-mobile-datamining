// _runtime/13789_objectifyError.js
import install from "00473_install.js";

if (!install) {
  let obj = { default: null };
  obj[0] = install;
  let tmp3 = obj;
} else {
  tmp3 = install;
}
install = tmp3.default;
let closure_5 = { veto: null };
function objectifyError(headers) {
  closure_0 = headers;
  const obj = {};
  const ownPropertyNames = Object.getOwnPropertyNames(headers);
  const item = ownPropertyNames.forEach((item, index) => {
    obj[item] = error[item];
  });
  return obj;
}

export default (arg0) => {
  closure_0 = arg0;
  return (arg0) => {
    function reportError(stack) {
      const logger = stack;
      try {
        if (_default) {
          if (_default2) {
            if (_default) {
              if (_default2) {
                if (typeof tmp16 !== "function") {
                  logger.error("parseErrorStack is not a function", []);
                  let obj = { parseErrorStackType: null, parseErrorStack: null };
                  obj[0] = typeof _default;
                  obj[1] = _default;
                  logger.debug(obj);
                } else if (typeof tmp18 !== "function") {
                  logger.error("symbolicateStackTrace is not a function", []);
                  obj = { symbolicateStackTraceType: null, symbolicateStackTrace: null };
                  obj[0] = typeof _default2;
                  obj[1] = _default2;
                  logger.debug(obj);
                } else {
                  try {
                    const promise = _default2(_default(stack.stack));
                    _default2(_default(stack.stack)).then((result) => {
                      stack = result.stack;
                      const mapped = stack.map((item, index) => ({ fileName: item.file, functionName: item.methodName, lineNumber: item.lineNumber }));
                      let found = mapped;
                      if (closure_1_1.veto) {
                        found = mapped.filter((item, index) => {
                          let vetoResult;
                          if (closure_1 != null) {
                            vetoResult = closure_1.veto(item);
                          }
                          return vetoResult;
                        });
                      }
                      stack.error(stack.message, found);
                    }).catch((error) => {
                      stack.error("Unable to symbolicate stack trace from error object", []);
                      if (typeof closure_1_6 !== "function") {
                        HermesBuiltin.throwTypeError();
                      }
                      stack = error;
                      const obj = {};
                      const ownPropertyNames = Object.getOwnPropertyNames(error);
                      const item = ownPropertyNames.forEach((item, index) => {
                        obj[item] = error[item];
                      });
                      stack.debug(obj);
                    });
                    const nextPromise = _default2(_default(stack.stack)).then((result) => {
                      stack = result.stack;
                      const mapped = stack.map((item, index) => ({ fileName: item.file, functionName: item.methodName, lineNumber: item.lineNumber }));
                      let found = mapped;
                      if (closure_1_1.veto) {
                        found = mapped.filter((item, index) => {
                          let vetoResult;
                          if (closure_1 != null) {
                            vetoResult = closure_1.veto(item);
                          }
                          return vetoResult;
                        });
                      }
                      stack.error(stack.message, found);
                    });
                  } catch (tmp32) {
                    logger.error("Unable to parse stack trace from error object", []);
                    logger.debug(closure_1_6(tmp32));
                  }
                }
              }
            }
            logger.error("parseErrorStack or symbolicateStackTrace is not available", []);
            obj = { parseErrorStackAvailable: null, symbolicateStackTraceAvailable: null };
            obj[0] = _default;
            obj[1] = _default2;
            logger.debug(obj);
          } else {
            const tmp12 = logger(998);
            if (typeof tmp12 === "function") {
              _default2 = tmp12;
            } else {
              _default2 = tmp13.default;
            }
          }
        } else {
          const tmp5 = logger(190);
          if (typeof tmp5 === "function") {
            _default = tmp5;
          } else {
            _default = tmp6.default;
          }
        }
      } catch (tmp47) {
        logger.error("Unable to load \"react-native/Libraries/Core/Devtools/parseErrorStack\" or \"react-native/Libraries/Core/Devtools/symbolicateStackTrace\"", []);
        logger.debug(closure_1_6(tmp47));
      }
    }
    const result = callback(dependencyMap[1]).assertHasLoggerPlugin(arg0);
    callback = arg0;
    let obj = callback;
    if (!callback) {
      obj = {};
    }
    closure_1 = Object.assign({}, closure_1_5, obj);
    obj = {
      onConnect() {
        const proxy = new Proxy(closure_1_4.addException, {
          apply(apply) {
            callback(arg2[0]);
            return apply.apply(arg1, arg2);
          }
        });
        closure_1_4.addException = proxy;
      },
      features: { reportError }
    };
    return obj;
  };
};