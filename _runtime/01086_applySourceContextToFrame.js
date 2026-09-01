// _runtime/01086_applySourceContextToFrame.js
import registerSpanErrorInstrumentation from "00817_registerSpanErrorInstrumentation.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const applySourceContextToFrame = function applySourceContextToFrame(filename) {
  if (filename.filename === arg2) {
    if (filename.lineno) {
      if (arg1.length) {
        registerSpanErrorInstrumentation.addContextToFrame(arg1, filename, arg3);
        const obj = registerSpanErrorInstrumentation;
      }
    }
  }
  return filename;
};
export const contextLinesIntegration = registerSpanErrorInstrumentation.defineIntegration(() => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let num;
  num = 7;
  if (null != obj.frameContextLines) {
    num = obj.frameContextLines;
  }
  obj = {
    name: "ContextLines",
    processEvent(exception) {
      const _document = num(closure_1_1[0]).GLOBAL_OBJ.document;
      let _location = num(closure_1_1[0]).GLOBAL_OBJ.location;
      if (_location) {
        _location = tmp(tmp2[0]).stripUrlQueryAndFragment(tmp(tmp2[0]).GLOBAL_OBJ.location.href);
        const tmpResult = tmp(tmp2[0]);
      }
      if (_document) {
        if (_location) {
          exception = exception.exception;
          let values;
          if (exception != null) {
            values = exception.values;
          }
          let length;
          if (values != null) {
            length = values.length;
          }
          if (length) {
            if (_document.documentElement.innerHTML) {
              const items = ["<!DOCTYPE html>", "<html>"];
              items[HermesBuiltin.arraySpread(str.split("\n"), 2)] = "</html>";
              const item = values.forEach((stacktrace) => {
                stacktrace = stacktrace.stacktrace;
                let frames;
                if (stacktrace != null) {
                  frames = stacktrace.frames;
                }
                if (frames) {
                  const frames1 = stacktrace.frames;
                  stacktrace.frames = frames1.map((filename) => {
                    if (filename.filename === closure_1) {
                      if (filename.lineno) {
                        if (arr.length) {
                          closure_1_0(closure_1_1[0]).addContextToFrame(arr, filename, tmp);
                          const obj = closure_1_0(closure_1_1[0]);
                        }
                      }
                    }
                    return filename;
                  });
                }
              });
            }
          }
        }
      }
      return exception;
    },
  };
  return obj;
});
