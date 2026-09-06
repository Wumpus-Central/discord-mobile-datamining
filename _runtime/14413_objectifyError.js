// === Module 14413: objectifyError ===

// Module 14413 (objectifyError)
import emptyPromise from "emptyPromise" /* 14414 */;
import install from "install" /* 473 */;

if (!install) {
  let obj = { default: install };
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
  const item = ownPropertyNames.forEach((item) => {
    obj[item] = error[item];
  });
  return obj;
}

export default (arg0) => {
  closure_0 = arg0;
  return (log) => {
    function reportError(stack) {
      log = stack;
      try {
        if (_default) {
          if (_default2) {
            if (_default) {
              if (_default2) {
                if (typeof tmp16 !== "function") {
                  log.error("parseErrorStack is not a function", []);
                  let obj = { parseErrorStackType: typeof _default, parseErrorStack: _default };
                  log.debug(obj);
                } else if (typeof tmp18 !== "function") {
                  log.error("symbolicateStackTrace is not a function", []);
                  obj = { symbolicateStackTraceType: typeof _default2, symbolicateStackTrace: _default2 };
                  log.debug(obj);
                } else {
                  try {
                    const promise = _default2(_default(stack.stack));
                    _default2(_default(stack.stack)).then((stack) => {
                      stack = stack.stack;
                      const mapped = stack.map((file) => ({ fileName: file.file, functionName: file.methodName, lineNumber: file.lineNumber }));
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
                    }).catch((error) => {
                      stack.error("Unable to symbolicate stack trace from error object", []);
                      if (typeof closure_2_6 === "function") {
                        stack = error;
                        const obj = {};
                        const _Object = Object;
                        const ownPropertyNames = Object.getOwnPropertyNames(error);
                        const item = ownPropertyNames.forEach((item) => {
                          obj[item] = error[item];
                        });
                        tmp3(obj);
                      } else {
                        throw new TypeError("Trying to call a non-function");
                      }
                    });
                    const nextPromise = _default2(_default(stack.stack)).then((stack) => {
                      stack = stack.stack;
                      const mapped = stack.map((file) => ({ fileName: file.file, functionName: file.methodName, lineNumber: file.lineNumber }));
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
                  } catch (tmp32) {
                    log.error("Unable to parse stack trace from error object", []);
                    log.debug(closure_1_6(tmp32));
                  }
                }
              }
            }
            log.error("parseErrorStack or symbolicateStackTrace is not available", []);
            obj = { parseErrorStackAvailable: _default, symbolicateStackTraceAvailable: _default2 };
            log.debug(obj);
          } else {
            const tmp12 = log(863);
            if (typeof tmp12 === "function") {
              _default2 = tmp12;
            } else {
              _default2 = tmp13.default;
            }
          }
        } else {
          const tmp5 = log(190);
          if (typeof tmp5 === "function") {
            _default = tmp5;
          } else {
            _default = tmp6.default;
          }
        }
      } catch (tmp47) {
        log.error("Unable to load \"react-native/Libraries/Core/Devtools/parseErrorStack\" or \"react-native/Libraries/Core/Devtools/symbolicateStackTrace\"", []);
        log.debug(closure_1_6(tmp47));
      }
    }
    const result = emptyPromise.assertHasLoggerPlugin(log);
    let obj = log;
    if (!log) {
      obj = {};
    }
    dependencyMap = Object.assign({}, closure_5, obj);
    obj = {
      onConnect() {
        const proxy = new Proxy(addException.addException, {
          apply(apply, arg1, arg2) {
            _default(arg2[0]);
            return apply.apply(arg1, arg2);
          }
        });
        addException.addException = proxy;
      },
      features: { reportError }
    };
    return obj;
  };
};