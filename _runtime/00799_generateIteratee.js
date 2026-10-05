// === Module 799: generateIteratee ===

// Module 799 (generateIteratee)
import basename from "basename" /* 800 */;
import module_763 from "module_763" /* 763 */;

const require = globalThis.__r;
let _require, stacktrace;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const generateIteratee = function generateIteratee(arg0) {
  let closure_2;
  let require;
  ({ isBrowser: require, root: dependencyMap, prefix: closure_2 } = arg0);
  return (filename) => {
    if (filename.filename) {
      const obj = /^[a-zA-Z]:\\/;
      let isMatch = obj.test(filename.filename);
      if (!isMatch) {
        filename = filename.filename;
        let hasItem = filename.includes("\\");
        if (hasItem) {
          const filename2 = filename.filename;
          hasItem = !filename2.includes("/");
        }
        isMatch = hasItem;
      }
      if (closure_0) {
        if (root) {
          const filename1 = filename.filename;
          if (0 === filename1.indexOf(root)) {
            filename.filename = filename1.replace(root, prefix);
          }
        }
      } else if (isMatch) {
        let replaced;
        let relativeResult;
        if (isMatch) {
          const str5 = filename.filename.replace(/^[a-zA-Z]:/, "");
          replaced = str5.replace(/\\/g, "/");
        } else {
          replaced = str3;
        }
        const obj2 = basename;
        if (root) {
          relativeResult = obj2.relative(root, replaced);
        } else {
          relativeResult = obj2.basename(replaced);
        }
        const _HermesInternal = HermesInternal;
        filename.filename = "" + prefix + relativeResult;
      }
      return filename;
    } else {
      return filename;
    }
  };
};
export const rewriteFramesIntegration = module_763.defineIntegration(() => {
  let closure_0;
  let prefix;
  let root;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let fn;
  ({ prefix, root } = obj);
  if (!prefix) {
    prefix = "app:///";
  }
  const tmp = _require;
  let tmp2 = root;
  fn = obj.iteratee;
  const tmp3 = "window" in require("module_697").GLOBAL_OBJ && tmp(tmp2[1]).GLOBAL_OBJ.window;
  if (!fn) {
    _require = tmp3;
    fn = (filename) => {
      if (filename.filename) {
        const obj = /^[a-zA-Z]:\\/;
        let isMatch = obj.test(filename.filename);
        if (!isMatch) {
          filename = filename.filename;
          let hasItem = filename.includes("\\");
          if (hasItem) {
            const filename2 = filename.filename;
            hasItem = !filename2.includes("/");
          }
          isMatch = hasItem;
        }
        if (closure_0) {
          if (root) {
            const filename1 = filename.filename;
            if (0 === filename1.indexOf(root)) {
              filename.filename = filename1.replace(root, prefix);
            }
          }
        } else if (isMatch) {
          let replaced;
          let relativeResult;
          if (isMatch) {
            const str5 = filename.filename.replace(/^[a-zA-Z]:/, "");
            replaced = str5.replace(/\\/g, "/");
          } else {
            replaced = str3;
          }
          const obj2 = basename;
          if (root) {
            relativeResult = obj2.relative(root, replaced);
          } else {
            relativeResult = obj2.basename(replaced);
          }
          const _HermesInternal = HermesInternal;
          filename.filename = "" + prefix + relativeResult;
        }
        return filename;
      } else {
        return filename;
      }
    };
  }
  let obj2 = {
    name: "RewriteFrames",
    processEvent(exception) {
      function _processExceptionsEvent(exception) {
        let obj2;
        let values;
        try {
          let obj = { exception: obj2 };
          let merged = Object.assign(exception);
          obj2 = {
            values: values.map((stacktrace) => {
                let mapped;
                const obj = {};
                const merged = Object.assign(stacktrace);
                stacktrace = stacktrace.stacktrace;
                if (stacktrace) {
                  const stacktrace2 = stacktrace.stacktrace;
                  const obj2 = { frames: mapped };
                  const merged1 = Object.assign(stacktrace2);
                  mapped = undefined;
                  if (stacktrace2 != null) {
                    const frames = stacktrace2.frames;
                    if (frames != null) {
                      mapped = frames.map((item) => closure_1_0(item));
                    }
                  }
                  stacktrace = { stacktrace: obj2 };
                  const obj3 = { stacktrace: obj2 };
                }
                const merged2 = Object.assign(stacktrace);
                return obj;
              })
          };
          let merged1 = Object.assign(exception.exception);
          values = exception.exception.values;
          return obj;
        } catch (err) {
          return exception;
        }
      }
      exception = exception.exception;
      if (exception) {
        const _Array = Array;
        exception = Array.isArray(exception.exception.values);
      }
      const tmp2 = exception && _processExceptionsEvent(exception);
      return tmp2;
    }
  };
  return obj2;
});