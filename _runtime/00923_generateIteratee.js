// === Module 923: generateIteratee ===

// Module 923 (generateIteratee)
import setupIntegration from "setupIntegration" /* 887 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const generateIteratee = function generateIteratee(arg0) {
  ({ isBrowser: require, root: dependencyMap, prefix: closure_2 } = arg0);
  return (filename) => {
    if (filename.filename) {
      let isMatch = /^[a-zA-Z]:\\/.test(filename.filename);
      if (!isMatch) {
        filename = filename.filename;
        let hasItem = filename.includes("\\");
        if (hasItem) {
          const filename2 = filename.filename;
          hasItem = !filename2.includes("/");
        }
        isMatch = hasItem;
      }
      if (fn) {
        if (root) {
          filename = filename.filename;
          if (0 === filename.indexOf(tmp13)) {
            filename.filename = filename.replace(tmp13, prefix);
          }
        }
      } else if (isMatch) {
        if (isMatch) {
          let replaced = str3.replace(/^[a-zA-Z]:/, "").replace(/\\/g, "/");
          const str5 = str3.replace(/^[a-zA-Z]:/, "");
        } else {
          replaced = str3;
        }
        const obj2 = fn(root[2]);
        if (root) {
          let relativeResult = obj2.relative(tmp7, replaced);
        } else {
          relativeResult = obj2.basename(replaced);
        }
        const _HermesInternal = HermesInternal;
        filename.filename = "" + prefix + relativeResult;
        tmp7 = root;
      }
      return filename;
    } else {
      return filename;
    }
  };
};
export const rewriteFramesIntegration = setupIntegration.defineIntegration(() => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let fn;
  ({ prefix, root } = obj);
  if (!prefix) {
    prefix = "app:///";
  }
  fn = obj.iteratee;
  if (!fn) {
    fn = tmp3;
    fn = (filename) => {
      if (filename.filename) {
        let isMatch = /^[a-zA-Z]:\\/.test(filename.filename);
        if (!isMatch) {
          filename = filename.filename;
          let hasItem = filename.includes("\\");
          if (hasItem) {
            const filename2 = filename.filename;
            hasItem = !filename2.includes("/");
          }
          isMatch = hasItem;
        }
        if (fn) {
          if (root) {
            filename = filename.filename;
            if (0 === filename.indexOf(tmp13)) {
              filename.filename = filename.replace(tmp13, prefix);
            }
          }
        } else if (isMatch) {
          if (isMatch) {
            let replaced = str3.replace(/^[a-zA-Z]:/, "").replace(/\\/g, "/");
            const str5 = str3.replace(/^[a-zA-Z]:/, "");
          } else {
            replaced = str3;
          }
          const obj2 = fn(root[2]);
          if (root) {
            let relativeResult = obj2.relative(tmp7, replaced);
          } else {
            relativeResult = obj2.basename(replaced);
          }
          const _HermesInternal = HermesInternal;
          filename.filename = "" + prefix + relativeResult;
          tmp7 = root;
        }
        return filename;
      } else {
        return filename;
      }
    };
  }
  obj = {
    name: "RewriteFrames",
    processEvent(exception) {
      exception = exception.exception;
      if (exception) {
        const _Array = Array;
        exception = Array.isArray(exception.exception.values);
      }
      let tmp2 = exception;
      if (exception) {
        tmp2 = (function _processExceptionsEvent(exception) {
          try {
            let obj = {};
            let merged = Object.assign(exception);
            obj = {};
            let merged1 = Object.assign(exception.exception);
            const values = exception.exception.values;
            obj.values = values.map((stacktrace) => {
              let obj = {};
              const merged = Object.assign(stacktrace);
              stacktrace = stacktrace.stacktrace;
              if (stacktrace) {
                const stacktrace2 = stacktrace.stacktrace;
                obj = {};
                const merged1 = Object.assign(stacktrace2);
                let mapped;
                if (stacktrace2 != null) {
                  const frames = stacktrace2.frames;
                  if (frames != null) {
                    mapped = frames.map((arg0) => callback(arg0));
                  }
                }
                obj = { stacktrace: null, frames: mapped };
                obj[0] = obj;
                stacktrace = obj;
              }
              const merged2 = Object.assign(stacktrace);
              return obj;
            });
            obj.exception = obj;
            return obj;
          } catch (err) {
            return tmp;
          }
        })(exception);
      }
      return tmp2;
    }
  };
  return obj;
});