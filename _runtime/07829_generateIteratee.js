// _runtime/07829_generateIteratee.js
import setupIntegration from "07794_setupIntegration.js";


export const generateIteratee = function generateIteratee(arg0) {
  ({ isBrowser: require, root: dependencyMap, prefix: closure_2 } = arg0);
  return (root) => {
    if (root.filename) {
      let isMatch = /^[a-zA-Z]:\\/.test(root.filename);
      if (!isMatch) {
        let filename = root.filename;
        let hasItem = filename.includes("\\");
        if (hasItem) {
          const filename2 = root.filename;
          hasItem = !filename2.includes("/");
        }
        isMatch = hasItem;
      }
      if (fn) {
        if (root) {
          filename = root.filename;
          if (0 === filename.indexOf(root)) {
            root.filename = filename.replace(root, prefix);
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
          let relativeResult = obj2.relative(root, replaced);
        } else {
          relativeResult = obj2.basename(replaced);
        }
        const _HermesInternal = HermesInternal;
        root.filename = "" + prefix + relativeResult;
      }
      return root;
    } else {
      return root;
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
    fn = (root) => {
      if (root.filename) {
        let isMatch = /^[a-zA-Z]:\\/.test(root.filename);
        if (!isMatch) {
          let filename = root.filename;
          let hasItem = filename.includes("\\");
          if (hasItem) {
            const filename2 = root.filename;
            hasItem = !filename2.includes("/");
          }
          isMatch = hasItem;
        }
        if (fn) {
          if (root) {
            filename = root.filename;
            if (0 === filename.indexOf(root)) {
              root.filename = filename.replace(root, prefix);
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
            let relativeResult = obj2.relative(root, replaced);
          } else {
            relativeResult = obj2.basename(replaced);
          }
          const _HermesInternal = HermesInternal;
          root.filename = "" + prefix + relativeResult;
        }
        return root;
      } else {
        return root;
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
            obj.values = values.map((item, index) => {
              let obj = {};
              const merged = Object.assign(item);
              let stacktrace = item.stacktrace;
              if (stacktrace) {
                const stacktrace2 = item.stacktrace;
                obj = {};
                const merged1 = Object.assign(stacktrace2);
                let frames = stacktrace2;
                if (stacktrace2) {
                  frames = stacktrace2.frames;
                }
                if (frames) {
                  frames = stacktrace2.frames;
                  frames = frames.map((item, index) => callback(item));
                }
                obj = { stacktrace: null, frames };
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