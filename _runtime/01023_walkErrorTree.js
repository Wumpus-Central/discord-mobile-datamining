let require = arg1;
const dependencyMap = arg6;
function walkErrorTree(arg0, arg1, arg2, arg3) {
  let exceptions = arg4;
  if (arg4 === undefined) {
    exceptions = [];
  }
  let debugImages = arg5;
  if (arg5 === undefined) {
    debugImages = [];
  }
  if (arg2[arg3]) {
    if (exceptions.length + 1 < arg1) {
      if (obj12.isString(tmp)) {
        let obj = { value: null };
        obj[0] = tmp;
        let exceptionFromErrorResult = obj;
      } else if ("stackElements" in tmp) {
        let tmp8 = nativePackageName;
        if (null === nativePackageName) {
          const NATIVE2 = tmp28(1001).NATIVE;
          nativePackageName = NATIVE2.fetchNativePackageName();
          tmp8 = nativePackageName;
        }
        const require = tmp8;
        obj = { type: null, value: null, stacktrace: null };
        ({ name: obj8[0], message: obj8[1] } = tmp);
        const obj1 = { frames: null };
        const stackElements = tmp.stackElements;
        const mapped = stackElements.map((className) => {
          const obj = { platform: "java", module: className.className, filename: className.fileName, lineno: null, function: null, in_app: null };
          let lineNumber;
          if (className.lineNumber >= 0) {
            lineNumber = className.lineNumber;
          }
          obj[3] = lineNumber;
          obj[4] = className.methodName;
          let tmp3 = null === closure_0;
          if (!tmp3) {
            className = className.className;
            tmp3 = !className.startsWith(tmp2);
          }
          obj[5] = !tmp3;
          return obj;
        });
        obj1[0] = mapped.reverse();
        obj[2] = obj1;
        exceptionFromErrorResult = obj;
      } else if ("stackReturnAddresses" in tmp) {
        const NATIVE = tmp28(1001).NATIVE;
        const nativeStackFramesBy = NATIVE.fetchNativeStackFramesBy(tmp.stackReturnAddresses);
        const obj2 = { type: null, value: null, stacktrace: null };
        ({ name: obj6[0], message: obj6[1] } = tmp);
        let reversed;
        if (null != nativeStackFramesBy) {
          const frames = nativeStackFramesBy.frames;
          reversed = frames.reverse();
        }
        if (!reversed) {
          reversed = [];
        }
        const obj3 = { frames: null };
        obj3[0] = reversed;
        obj2[2] = obj3;
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
        let tmp28Result = tmp28(817);
        const _Error = Error;
        if (tmp28Result.isInstanceOf(tmp, Error)) {
          tmp28Result = tmp28(1024);
          exceptionFromErrorResult = tmp28Result.exceptionFromError(arg0, arg2[arg3]);
        } else {
          if (tmp28Result1.isPlainObject(tmp)) {
            let name;
            if (typeof tmp.name === "string") {
              name = tmp.name;
            }
            exceptionFromErrorResult = { type: null, value: null };
            exceptionFromErrorResult[0] = name;
            let message;
            if (typeof tmp.message === "string") {
              message = tmp.message;
            }
            exceptionFromErrorResult[1] = message;
          } else {
            const obj4 = { exceptions: null, debugImages: null };
            obj4[0] = exceptions;
            obj4[1] = debugImages;
            return obj4;
          }
          tmp28Result1 = tmp28(817);
        }
      }
      const items2 = [];
      items2[HermesBuiltin.arraySpread(exceptions, 0)] = exceptionFromErrorResult;
      const items3 = [];
      let arraySpreadResult = HermesBuiltin.arraySpread(debugImages, 0);
      if (!items4) {
        items4 = [];
      }
      arraySpreadResult = HermesBuiltin.arraySpread(items4, arraySpreadResult);
      return walkErrorTree(arg0, arg1, tmp, arg3, items2, items3);
    }
  }
  return { exceptions, debugImages };
}
let c3 = null;
arg5.nativeLinkedErrorsIntegration = () => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let closure_0;
  let closure_1;
  closure_0 = obj.key || "cause";
  closure_1 = obj.limit || 5;
  obj = {
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
        if (originalException) {
          const _Error = Error;
          if (obj.isInstanceOf(originalException.originalException, Error)) {
            ({ exceptions, debugImages } = outer1_2(getOptions.getOptions().stackParser, tmp, originalException.originalException, tmp2));
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
            const tmp12 = outer1_2(getOptions.getOptions().stackParser, tmp, originalException.originalException, tmp2);
          }
          obj = callback(table[0]);
        }
      }
    }
  };
  return obj;
};