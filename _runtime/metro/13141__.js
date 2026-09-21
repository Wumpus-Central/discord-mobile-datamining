// _runtime/metro/13141__.js
import _mod13142 from "13142__.js";
import setupIntegration from "13106__.js";

export const generateIteratee = function generateIteratee(arg0) {
  ({ isBrowser: require, root: dependencyMap, prefix: closure_2 } = arg0);
  return (root) => {
    if (root.filename) {
      let isMatch = /^[a-zA-Z]:\\/.test(root.filename);
      if (!isMatch) {
        const filename = root.filename;
        let hasItem = filename.includes("\\");
        if (hasItem) {
          const filename2 = root.filename;
          hasItem = !filename2.includes("/");
        }
        isMatch = hasItem;
      }
      if (fn) {
        if (root) {
          const filename1 = root.filename;
          if (0 === filename1.indexOf(root)) {
            root.filename = filename1.replace(root, prefix);
          }
        }
      } else if (isMatch) {
        if (isMatch) {
          let replaced = str3.replace(/^[a-zA-Z]:/, "").replace(/\\/g, "/");
          const str5 = str3.replace(/^[a-zA-Z]:/, "");
        } else {
          replaced = str3;
        }
        const obj2 = _mod13142;
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
          const filename = root.filename;
          let hasItem = filename.includes("\\");
          if (hasItem) {
            const filename2 = root.filename;
            hasItem = !filename2.includes("/");
          }
          isMatch = hasItem;
        }
        if (fn) {
          if (root) {
            const filename1 = root.filename;
            if (0 === filename1.indexOf(root)) {
              root.filename = filename1.replace(root, prefix);
            }
          }
        } else if (isMatch) {
          if (isMatch) {
            let replaced = str3.replace(/^[a-zA-Z]:/, "").replace(/\\/g, "/");
            const str5 = str3.replace(/^[a-zA-Z]:/, "");
          } else {
            replaced = str3;
          }
          const obj2 = _mod13142;
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
  return {
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
            const obj = {};
            let merged = Object.assign(exception);
            let obj2 = {};
            let merged1 = Object.assign(exception.exception);
            const values = exception.exception.values;
            obj2.values = values.map((stacktrace) => {
              const merged = Object.assign(stacktrace);
              stacktrace = stacktrace.stacktrace;
              if (stacktrace) {
                const stacktrace2 = stacktrace.stacktrace;
                const obj2 = {};
                const merged1 = Object.assign(stacktrace2);
                let frames = stacktrace2;
                if (stacktrace2) {
                  frames = stacktrace2.frames;
                }
                if (frames) {
                  const frames1 = stacktrace2.frames;
                  frames = frames1.map((item) => closure_1_0(item));
                }
                const obj3 = { stacktrace: null };
                obj2.frames = frames;
                obj3.stacktrace = obj2;
                stacktrace = obj3;
              }
              const merged2 = Object.assign(stacktrace);
              return {};
            });
            obj.exception = obj2;
            return obj;
          } catch (err) {
            return tmp;
          }
        })(exception);
      }
      return tmp2;
    },
  };
});
