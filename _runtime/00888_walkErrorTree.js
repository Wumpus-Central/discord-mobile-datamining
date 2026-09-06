// _runtime/00888_walkErrorTree.js
import _mod682 from "metro/00682__.js";
import NativeModules from "00866_NativeModules.js";
import feedbackAsyncIntegration from "00889_feedbackAsyncIntegration.js";

require = arg1;
const dependencyMap = arg6;
function walkErrorTree(stackParser, arg1, originalException, arg3) {
  let exceptions = items2;
  if (items2 === undefined) {
    exceptions = [];
  }
  let debugImages = items3;
  if (items3 === undefined) {
    debugImages = [];
  }
  if (originalException[arg3]) {
    if (exceptions.length + 1 < arg1) {
      if (obj12.isString(tmp)) {
        let obj = { value: tmp };
        let exceptionFromErrorResult = obj;
      } else if ("stackElements" in tmp) {
        let tmp8 = nativePackageName;
        if (null === nativePackageName) {
          const NATIVE2 = NativeModules.NATIVE;
          nativePackageName = NATIVE2.fetchNativePackageName();
          tmp8 = nativePackageName;
        }
        nativePackageName = tmp8;
        obj = { type: null, value: null, stacktrace: null };
        ({ name: obj8.type, message: obj8.value } = tmp);
        const obj1 = { frames: null };
        const stackElements = tmp.stackElements;
        const mapped = stackElements.map((className) => {
          const obj = {
            platform: "java",
            module: className.className,
            filename: className.fileName,
            lineno: null,
            function: null,
            in_app: null,
          };
          let lineNumber;
          if (className.lineNumber >= 0) {
            lineNumber = className.lineNumber;
          }
          obj.lineno = lineNumber;
          obj.function = className.methodName;
          let tmp3 = null === nativePackageName;
          if (!tmp3) {
            className = className.className;
            tmp3 = !className.startsWith(tmp2);
          }
          obj.in_app = !tmp3;
          return obj;
        });
        obj1.frames = mapped.reverse();
        obj.stacktrace = obj1;
        exceptionFromErrorResult = obj;
      } else if ("stackReturnAddresses" in tmp) {
        const NATIVE = NativeModules.NATIVE;
        const nativeStackFramesBy = NATIVE.fetchNativeStackFramesBy(tmp.stackReturnAddresses);
        const obj2 = { type: null, value: null, stacktrace: null };
        ({ name: obj6.type, message: obj6.value } = tmp);
        let reversed;
        if (null != nativeStackFramesBy) {
          const frames = nativeStackFramesBy.frames;
          reversed = frames.reverse();
        }
        if (!reversed) {
          reversed = [];
        }
        const obj3 = { frames: reversed };
        obj2.stacktrace = obj3;
        let debugMetaImages;
        if (null != nativeStackFramesBy) {
          debugMetaImages = nativeStackFramesBy.debugMetaImages;
        }
        if (!debugMetaImages) {
          debugMetaImages = [];
        }
        let items4 = debugMetaImages;
        exceptionFromErrorResult = obj2;
      } else {
        let tmp28Result = _mod682;
        const _Error = Error;
        if (tmp28Result.isInstanceOf(tmp, Error)) {
          tmp28Result = feedbackAsyncIntegration;
          exceptionFromErrorResult = tmp28Result.exceptionFromError(stackParser, originalException[arg3]);
        } else {
          if (tmp28Result1.isPlainObject(tmp)) {
            let name;
            if (typeof tmp.name === "string") {
              name = tmp.name;
            }
            exceptionFromErrorResult = { type: name, value: null };
            let message;
            if (typeof tmp.message === "string") {
              message = tmp.message;
            }
            exceptionFromErrorResult.value = message;
          } else {
            const obj4 = { exceptions, debugImages };
            return obj4;
          }
          tmp28Result1 = _mod682;
        }
      }
      items2 = [];
      items2[HermesBuiltin.arraySpread(exceptions, 0)] = exceptionFromErrorResult;
      items3 = [];
      let arraySpreadResult = HermesBuiltin.arraySpread(debugImages, 0);
      if (!items4) {
        items4 = [];
      }
      arraySpreadResult = HermesBuiltin.arraySpread(items4, arraySpreadResult);
      return walkErrorTree(stackParser, arg1, tmp, arg3, items2, items3);
    }
  }
  return { exceptions, debugImages };
}
let nativePackageName = null;

export const nativeLinkedErrorsIntegration = () => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  closure_0 = obj.key || "cause";
  closure_1 = obj.limit || 5;
  obj = {
    name: "NativeLinkedErrors",
    setupOnce() {},
    preprocessEvent(exception, originalException, getOptions) {
      exception = exception.exception;
      let values;
      if (null !== exception) {
        if (undefined !== exception) {
          values = exception.values;
        }
      }
      if (values) {
        if (originalException) {
          const _Error = Error;
          if (obj.isInstanceOf(originalException.originalException, Error)) {
            ({ exceptions, debugImages } = walkErrorTree(
              getOptions.getOptions().stackParser,
              closure_1,
              originalException.originalException,
              closure_0,
            ));
            const items = [];
            HermesBuiltin.arraySpread(exceptions, HermesBuiltin.arraySpread(exception.exception.values, 0));
            exception.exception.values = items;
            exception.debug_meta = exception.debug_meta || {};
            let images = exception.debug_meta.images;
            if (!images) {
              images = [];
            }
            exception.debug_meta.images = images;
            const images1 = exception.debug_meta.images;
            const push = images1.push;
            if (!debugImages) {
              debugImages = [];
            }
            const items1 = [];
            HermesBuiltin.arraySpread(debugImages, 0);
            HermesBuiltin.apply(items1, images1);
            const tmp12 = walkErrorTree(
              getOptions.getOptions().stackParser,
              closure_1,
              originalException.originalException,
              closure_0,
            );
          }
          obj = _mod682;
        }
      }
    },
  };
  return obj;
};
