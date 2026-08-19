// === Module 1086: applySourceContextToFrame ===

// Module 1086 (applySourceContextToFrame)
import registerSpanErrorInstrumentation from "registerSpanErrorInstrumentation" /* 817 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const applySourceContextToFrame = function applySourceContextToFrame(filename) {
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
      const _document = num(dependencyMap[0]).GLOBAL_OBJ.document;
      let _location = num(dependencyMap[0]).GLOBAL_OBJ.location;
      if (_location) {
        _location = tmp(dependencyMap[0]).stripUrlQueryAndFragment(tmp(dependencyMap[0]).GLOBAL_OBJ.location.href);
        const tmpResult = tmp(dependencyMap[0]);
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
              const item = values.forEach((item, index) => {
                const stacktrace = item.stacktrace;
                let frames;
                if (stacktrace != null) {
                  frames = stacktrace.frames;
                }
                if (frames) {
                  const frames1 = stacktrace.frames;
                  stacktrace.frames = frames1.map((item, index) => {
                    if (item.filename === closure_1) {
                      if (item.lineno) {
                        if (length.length) {
                          closure_1_0(_location[0]).addContextToFrame(length, item, tmp);
                          const obj = closure_1_0(_location[0]);
                        }
                      }
                    }
                    return item;
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