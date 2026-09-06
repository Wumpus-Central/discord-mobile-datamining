// === Module 951: applySourceContextToFrame ===

// Module 951 (applySourceContextToFrame)
import registerSpanErrorInstrumentation from "module_682" /* 682 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const applySourceContextToFrame = function applySourceContextToFrame(filename, arg1, arg2, arg3) {
  if (filename.filename === arg2) {
    if (filename.lineno) {
      if (arg1.length) {
        registerSpanErrorInstrumentation.addContextToFrame(arg1, filename, arg3);
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
  obj = {
    name: "ContextLines",
    processEvent(exception) {
      closure_0 = num;
      const _document = registerSpanErrorInstrumentation.GLOBAL_OBJ.document;
      let _location = registerSpanErrorInstrumentation.GLOBAL_OBJ.location;
      if (_location) {
        _location = registerSpanErrorInstrumentation.stripUrlQueryAndFragment(registerSpanErrorInstrumentation.GLOBAL_OBJ.location.href);
        const tmpResult = registerSpanErrorInstrumentation;
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
                    if (filename.filename === closure_1_1) {
                      if (filename.lineno) {
                        if (items.length) {
                          closure_0(_location[0]).addContextToFrame(items, filename, tmp);
                          const obj = closure_0(_location[0]);
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
    }
  };
  return obj;
});