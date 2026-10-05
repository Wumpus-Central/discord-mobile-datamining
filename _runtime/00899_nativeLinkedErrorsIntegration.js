// === Module 899: nativeLinkedErrorsIntegration ===

// Module 899 (nativeLinkedErrorsIntegration)
import _mod693 from "module_693" /* 693 */;
import _mod877 from "module_877" /* 877 */;
import feedbackAsyncIntegration from "feedbackAsyncIntegration" /* 900 */;

let className;

function walkErrorTree(stackParser, arg1, originalException, arg3) {
  let items2;
  let items3;
  let mapped;
  let message;
  let obj3;
  let obj5;
  let exceptions = items2;
  if (items2 === undefined) {
    exceptions = [];
  }
  let debugImages = items3;
  if (items3 === undefined) {
    debugImages = [];
  }
  const tmp2 = originalException[arg3];
  if (tmp2) {
    let tmp3 = arg1;
    if (exceptions.length + 1 < arg1) {
      let exceptionFromErrorResult;
      let items4;
      const obj12 = _mod693;
      if (obj12.isString(tmp2)) {
        let obj = { value: tmp2 };
        exceptionFromErrorResult = obj;
      } else if ("stackElements" in tmp2) {
        let tmp9 = nativePackageName;
        if (null === nativePackageName) {
          const NATIVE2 = _mod877.NATIVE;
          nativePackageName = NATIVE2.fetchNativePackageName();
          tmp9 = nativePackageName;
        }
        nativePackageName = tmp9;
        const obj2 = { type: null, value: null, stacktrace: obj3 };
        ({ name: obj8.type, message: obj8.value } = tmp2);
        const stackElements = tmp2.stackElements;
        obj3 = { frames: mapped.reverse() };
        mapped = stackElements.map((className) => {
          let lineNumber;
          const obj = { platform: "java", module: className.className, filename: className.fileName, lineno: lineNumber, function: className.methodName, in_app: tmp4 };
          lineNumber = undefined;
          if (className.lineNumber >= 0) {
            lineNumber = className.lineNumber;
          }
          let tmp3 = null === nativePackageName;
          if (!tmp3) {
            className = className.className;
            tmp3 = !className.startsWith(tmp2);
          }
          return obj;
        });
        exceptionFromErrorResult = obj2;
      } else if ("stackReturnAddresses" in tmp2) {
        const stackReturnAddresses = tmp2.stackReturnAddresses;
        const NATIVE = _mod877.NATIVE;
        const nativeStackFramesBy = NATIVE.fetchNativeStackFramesBy(stackReturnAddresses);
        const obj4 = { type: null, value: null, stacktrace: obj5 };
        ({ name: obj6.type, message: obj6.value } = tmp2);
        let reversed;
        if (null != nativeStackFramesBy) {
          const frames = nativeStackFramesBy.frames;
          reversed = frames.reverse();
        }
        if (!reversed) {
          reversed = [];
        }
        let debugMetaImages;
        obj5 = { frames: reversed };
        if (null != nativeStackFramesBy) {
          debugMetaImages = nativeStackFramesBy.debugMetaImages;
        }
        if (!debugMetaImages) {
          debugMetaImages = [];
        }
        items4 = debugMetaImages;
        exceptionFromErrorResult = obj4;
      } else {
        const tmp4 = globalThis;
        const _Error = Error;
        const tmp29Result = _mod693;
        if (tmp29Result.isInstanceOf(tmp2, Error)) {
          const tmp29Result3 = feedbackAsyncIntegration;
          exceptionFromErrorResult = tmp29Result3.exceptionFromError(stackParser, originalException[arg3]);
        } else {
          const tmp29Result4 = _mod693;
          if (tmp29Result4.isPlainObject(tmp2)) {
            let name;
            if (typeof tmp2.name === "string") {
              name = tmp2.name;
            }
            exceptionFromErrorResult = { type: name, value: message };
            message = undefined;
            if (typeof tmp2.message === "string") {
              message = tmp2.message;
            }
          } else {
            return { exceptions, debugImages };
          }
        }
      }
      items2 = [];
      items2[HermesBuiltin.arraySpread(items2, exceptions, 0)] = exceptionFromErrorResult;
      items3 = [];
      const arraySpreadResult = HermesBuiltin.arraySpread(items3, debugImages, 0);
      if (!items4) {
        items4 = [];
      }
      HermesBuiltin.arraySpread(items3, items4, arraySpreadResult);
      return walkErrorTree(stackParser, arg1, tmp2, arg3, items2, items3);
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
  let closure_0 = obj.key || "cause";
  let closure_1 = obj.limit || 5;
  return {
    name: "NativeLinkedErrors",
    setupOnce() {

    },
    preprocessEvent(exception, originalException, getOptions) {
      let debugImages;
      let exceptions;
      exception = exception.exception;
      let values;
      if (null !== exception) {
        if (undefined !== exception) {
          values = exception.values;
        }
      }
      if (values) {
        const tmp4 = originalException;
        if (tmp4) {
          const _Error = Error;
          const obj = _mod693;
          if (obj.isInstanceOf(originalException.originalException, Error)) {
            ({ exceptions, debugImages } = walkErrorTree(getOptions.getOptions().stackParser, closure_1, originalException.originalException, closure_0));
            const items = [];
            const exception2 = exception.exception;
            walkErrorTree(getOptions.getOptions().stackParser, closure_1, originalException.originalException, closure_0);
            HermesBuiltin.arraySpread(items, exceptions, HermesBuiltin.arraySpread(items, exception.exception.values, 0));
            exception2.values = items;
            exception.debug_meta = exception.debug_meta || {};
            let images = exception.debug_meta.images;
            const debug_meta = exception.debug_meta;
            if (!images) {
              images = [];
            }
            debug_meta.images = images;
            const images1 = exception.debug_meta.images;
            const push = images1.push;
            if (!debugImages) {
              debugImages = [];
            }
            const items1 = [];
            HermesBuiltin.arraySpread(items1, debugImages, 0);
            HermesBuiltin.apply(push, items1, images1);
          }
        }
      }
    }
  };
};