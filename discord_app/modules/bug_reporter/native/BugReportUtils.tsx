// === Module 10129: uriScheme ===

// Module 10129 (uriScheme)
import timestampDefault from "timestamp" /* 3 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = fn;
function uriScheme(str) {
  if (null == str) {
    return "none";
  } else {
    const match = str.match(/^([a-z][a-z0-9+.-]*):/i);
    str = "unknown";
    if (null != match) {
      str = match[1].toLowerCase();
    }
    return str;
  }
}
function _getAttachments() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c7 = 0;
    c8 = 0;
    c6 = 0;
    return (function*(arg0) {
      if (c8 === 2) {
        c8 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        while (true) {
          c8 = 2;
          let tmp5 = c7;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c8 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let name;
              let logger;
              error = undefined;
              let arr = [];
              dependencyMap = arr;
              let lib = arr[Symbol.iterator]();
            }
          } else if (1 === tmp5) {
            c6 = 0;
            lib.return();
            throw error;
          } else if (2 === tmp5) {
            c6 = error;
            let uri;
            let tmp17 = error;
            if ("uri" in lib.item) {
              uri = lib.item.uri;
            }
            logger = tmp17(uri);
            obj1 = { scheme: null, filename: null, mimeType: null, isImage: null, error: null };
            obj1[0] = logger;
            obj1[1] = lib.filename;
            obj1[2] = lib.mimeType;
            obj1[3] = lib.isImage;
            obj1[4] = c6;
            let errorResult = logger.error("Failed to resolve bug report attachment", obj1);
            let _Error = Error;
            if (c6 instanceof Error) {
              error = c6;
            } else {
              let _Error2 = Error;
              let _String = String;
              error = new Error(String(c6));
            }
            lib(1208);
            let obj2 = { tags: null };
            let obj3 = { feature: "bug_reporter", attachment_uri_scheme: null };
            obj3[1] = logger;
            obj2[0] = obj3;
            let captureExceptionResult = obj3.captureException(error, obj2);
            c6 = 0;
            lib.return();
            c8 = 3;
          } else if (arg0 === 1) {
            c8 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 0;
            lib.return();
            c8 = 3;
            let obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          } else {
            name = arg1;
            obj = { file: null, name: null, filename: null };
            obj[0] = name;
            obj[1] = dependencyMap;
            obj[2] = name.name;
            arr = arr.push(obj);
            c6 = 0;
          }
          if (lib === undefined) {
            c8 = 3;
            let obj5 = { value: null, done: true };
            obj5[0] = arr;
            return obj5;
          } else {
            lib = tmp50;
            c6 = 2;
            let obj6 = arr(514);
            dependencyMap = obj6.v4();
            let obj8 = arr(4838);
            c7 = 3;
            c8 = 1;
            obj6 = { value: null, done: false };
            obj6[0] = obj8.getFileInfo(lib);
            return obj6;
          }
        }
      }
    })();
  });
  closure_6 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_4 = new timestampDefault("BugReportUtils.tsx");
const tmp2 = new timestampDefault("BugReportUtils.tsx");
const result = require("obj132").fileFinishedImporting("modules/bug_reporter/native/BugReportUtils.tsx");

export const getAttachments = function getAttachments(closure_1_7) {
  const self = this;
  const apply = _getAttachments.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};