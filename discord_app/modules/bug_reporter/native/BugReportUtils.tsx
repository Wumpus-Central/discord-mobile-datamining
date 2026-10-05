// === Module 12526: BugReportUtils ===

// Module 12526 (BugReportUtils)
import LoggerDefault from "Logger" /* 3 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let closure_1, error, file, name, value;

function uriScheme(str) {
  if (null == str) {
    return "none";
  } else {
    const match = str.match(/^([a-z][a-z0-9+.-]*):/i);
    str = "unknown";
    if (null != match) {
      const str2 = match[1];
      str = str2.toLowerCase();
    }
    return str;
  }
}
let obj = function _getAttachments() {
  obj = _asyncToGenerator(async (value) => {
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    return (async function(arg0) {
      let obj7;
      if (c8 === 2) {
        c8 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        while (true) {
          let c1;
          let tmp;
          c8 = 2;
          let tmp5 = c7;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              let obj3 = { value, done: true };
              return obj3;
            } else {
              c1 = undefined;
              file = undefined;
              tmp = undefined;
              error = undefined;
              value = [];
              name = value;
              closure_1 = value[Symbol.iterator]();
            }
          } else if (1 === tmp5) {
            let c6 = 0;
            closure_1.return();
            throw closure_1_5;
          } else if (2 === tmp5) {
            c6 = 1;
            error = closure_1_5;
            let uri;
            if ("uri" in c1.item) {
              uri = c1.item.uri;
            }
            tmp = closure_132_5(uri);
            let obj5 = { scheme: tmp, filename: c1.filename, mimeType: c1.mimeType, isImage: c1.isImage, error };
            let errorResult = closure_132_4.error("Failed to resolve bug report attachment", obj5);
            let _Error = Error;
            if (!(error instanceof Error)) {
              let _Error2 = Error;
              let _String = String;
              let self = this;
              let self2 = this;
              error = new Error(String(error));
            }
            let obj4 = closure_132_1(closure_132_2[4]);
            let obj6 = { tags: obj7 };
            obj7 = { feature: "bug_reporter", attachment_uri_scheme: tmp };
            let captureExceptionResult = obj4.captureException(error, obj6);
            c6 = 0;
            closure_1.return();
            c8 = 3;
            let obj10 = { value: undefined, done: true };
            return obj10;
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            closure_1.return();
            c8 = 3;
            let obj11 = { value, done: true };
            return obj11;
          } else {
            file = value;
            obj = { file, name, filename: file.name };
            let arr = value.push(obj);
            c6 = 0;
          }
          if (closure_1 === undefined) {
            c8 = 3;
            let obj12 = { value, done: true };
            return obj12;
          } else {
            c1 = tmp48;
            c6 = 2;
            let obj8 = closure_132_0(closure_132_2[2]);
            name = obj8.v4();
            let obj9 = closure_132_0(closure_132_2[3]);
            c7 = 3;
            c8 = 1;
            let obj13 = { value: obj9.getFileInfo(c1), done: false };
            return obj13;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
const tmp2 = new LoggerDefault("BugReportUtils.tsx");
let closure_4 = tmp2;
const result = size.fileFinishedImporting("modules/bug_reporter/native/BugReportUtils.tsx");

export const getAttachments = function getAttachments() {
  return obj(...arguments);
};