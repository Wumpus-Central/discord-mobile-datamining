// === Module 10186: BugReportUtils ===

// Module 10186 (BugReportUtils)
import LoggerDefault from "Logger" /* 3 */;
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
let closure_6 = async function _getAttachments(arg0) {
  dependencyMap = arg0;
  c7 = 0;
  c8 = 0;
  c6 = 0;
  return (async (arg0) => {
    if (c8 === 2) {
      c8 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      while (true) {
        c8 = 2;
        let tmp5 = c7;
        if (0 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_4 = tmp;
            closure_3 = tmp2;
            closure_131_1 = undefined;
            closure_131_2 = undefined;
            closure_131_3 = undefined;
            closure_131_4 = undefined;
            closure_131_5 = undefined;
            closure_131_0 = [];
            closure_2 = dependencyMap;
            closure_1 = dependencyMap[Symbol.iterator]();
          }
        } else if (1 === tmp5) {
          c6 = 0;
          closure_1.return();
          throw closure_1_5;
        } else if (2 === tmp5) {
          c6 = 1;
          closure_131_6 = closure_1_5;
          let uri;
          if ("uri" in closure_131_1.item) {
            uri = closure_131_1.item.uri;
          }
          closure_131_4 = closure_132_5(uri);
          let obj1 = { scheme: null, filename: null, mimeType: null, isImage: null, error: null };
          obj1.scheme = closure_131_4;
          obj1.filename = closure_131_1.filename;
          obj1.mimeType = closure_131_1.mimeType;
          obj1.isImage = closure_131_1.isImage;
          obj1.error = closure_131_6;
          let errorResult = closure_132_4.error("Failed to resolve bug report attachment", obj1);
          let _Error = Error;
          if (closure_131_6 instanceof Error) {
            let error = closure_131_6;
          } else {
            let _Error2 = Error;
            let _String = String;
            let tmp34 = new.target;
            let tmp35 = new.target;
            error = new Error(String(closure_131_6));
          }
          closure_131_5 = error;
          closure_132_1(closure_132_2[4]);
          let obj2 = { tags: null };
          let obj3 = { feature: "bug_reporter", attachment_uri_scheme: null };
          obj3.attachment_uri_scheme = closure_131_4;
          obj2.tags = obj3;
          let captureExceptionResult = obj3.captureException(closure_131_5, obj2);
          c6 = 0;
          closure_1.return();
          c8 = 3;
        } else if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 0;
          closure_1.return();
          c8 = 3;
          let obj4 = { value, done: true };
          return obj4;
        } else {
          closure_131_3 = value;
          obj = { file: null, name: null, filename: null };
          obj.file = closure_131_3;
          obj.name = closure_131_2;
          obj.filename = closure_131_3.name;
          let arr = closure_131_0.push(obj);
          c6 = 0;
        }
        if (closure_1 === undefined) {
          c8 = 3;
          let obj5 = { value: closure_131_0, done: true };
          return obj5;
        } else {
          closure_131_1 = tmp50;
          c6 = 2;
          let obj6 = closure_132_0(closure_132_2[2]);
          closure_131_2 = obj6.v4();
          let obj8 = closure_132_0(closure_132_2[3]);
          c7 = 3;
          c8 = 1;
          obj6 = { value: obj8.getFileInfo(closure_131_1), done: false };
          return obj6;
        }
      }
    }
  })();
};
let closure_4 = new LoggerDefault("BugReportUtils.tsx");
const size = fn(2);
const result = size.fileFinishedImporting("modules/bug_reporter/native/BugReportUtils.tsx");

export const getAttachments = function getAttachments() {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};