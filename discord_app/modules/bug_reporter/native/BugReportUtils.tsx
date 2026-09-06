// discord_app/modules/bug_reporter/native/BugReportUtils.tsx
import timestampDefault from "../../debug/Logger.tsx";
import closure_3 from "../../../../_runtime/00005_asyncGeneratorStep.js";

const require = arg1;
function uriScheme(str) {
  if (null == str) {
    return "none";
  } else {
    const match = str.match(/^([a-z][a-z0-9+.-]*):/i);
    str = "unknown";
    if (null != match) {
      str = match[1].toLowerCase();
      const str2 = match[1];
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
    return (function* (arg0) {
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
          return { value: "HermesInternal", done: null };
        }
      } else {
        while (true) {
          let num = 2;
          c8 = 2;
          let tmp5 = c7;
          if (0 === c7) {
            if (arg0 === 1) {
              let num8 = 3;
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              let num7 = 3;
              c8 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let logger = tmp;
              let name = tmp2;
              let tmp63 = arr;
              let lib;
              dependencyMap = undefined;
              name = undefined;
              logger = undefined;
              error = undefined;
              arr = [];
              dependencyMap = arr;
              let tmp64 = arr;
              dependencyMap = arr;
              lib = arr[Symbol.iterator]();
            }
          } else if (1 === tmp5) {
            let tmp45 = error;
            let tmp46 = error;
            c6 = 0;
            let tmp47 = lib;
            lib.return();
            throw error;
          } else if (2 === tmp5) {
            let tmp13 = name;
            let tmp14 = logger;
            let tmp15 = error;
            let tmp16 = error;
            c6 = 1;
            c6 = error;
            let tmp18 = lib;
            let uri;
            let tmp17 = error;
            if ("uri" in lib.item) {
              let tmp20 = name;
              let tmp21 = lib;
              uri = lib.item.uri;
            }
            let tmp22 = name;
            let tmp23 = logger;
            logger = tmp17(uri);
            let tmp24 = logger;
            obj1 = { scheme: null, filename: null, mimeType: null, isImage: null, error: null };
            let tmp25 = logger;
            obj1[0] = logger;
            let tmp26 = lib;
            obj1[1] = lib.filename;
            let tmp27 = lib;
            obj1[2] = lib.mimeType;
            let tmp28 = lib;
            obj1[3] = lib.isImage;
            let tmp29 = c6;
            obj1[4] = c6;
            let errorResult = logger.error("Failed to resolve bug report attachment", obj1);
            let tmp31 = c6;
            let _Error = Error;
            let tmp32 = name;
            if (c6 instanceof Error) {
              error = c6;
            } else {
              let _Error2 = Error;
              let _String = String;
              let tmp33 = c6;
              let tmp34 = new.target;
              let tmp35 = new.target;
              error = new Error(String(c6));
            }
            let tmp37 = name;
            let tmp38 = logger;
            let tmp39 = lib;
            let tmp40 = dependencyMap;
            let obj3 = lib(1232);
            let tmp41 = error;
            let obj2 = { tags: null };
            obj3 = { feature: "bug_reporter", attachment_uri_scheme: null };
            let tmp42 = logger;
            obj3[1] = logger;
            obj2[0] = obj3;
            let captureExceptionResult = obj3.captureException(error, obj2);
            c6 = 0;
            let tmp44 = lib;
            lib.return();
            let num4 = 3;
            c8 = 3;
          } else if (arg0 === 1) {
            let num3 = 3;
            c8 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 0;
            let tmp12 = lib;
            lib.return();
            let num2 = 3;
            c8 = 3;
            let obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          } else {
            let tmp6 = name;
            name = arg1;
            let tmp7 = arr;
            obj = { file: null, name: null, filename: null };
            let tmp8 = name;
            obj[0] = name;
            let tmp9 = dependencyMap;
            obj[1] = dependencyMap;
            let tmp10 = name;
            obj[2] = name.name;
            arr = arr.push(obj);
            c6 = 0;
          }
          let tmp48 = dependencyMap;
          let tmp49 = lib;
          if (lib === undefined) {
            let tmp57 = name;
            let num6 = 3;
            c8 = 3;
            let obj5 = { value: null, done: true };
            obj5[0] = arr;
            return obj5;
          } else {
            let tmp51 = name;
            lib = tmp50;
            let tmp52 = logger;
            c6 = 2;
            let tmp53 = arr;
            let tmp54 = dependencyMap;
            let obj6 = arr(1256);
            dependencyMap = obj6.v4();
            let tmp55 = dependencyMap;
            let obj8 = arr(5138);
            let tmp56 = lib;
            c7 = 3;
            let num5 = 1;
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
const result = require("set").fileFinishedImporting("modules/bug_reporter/native/BugReportUtils.tsx");

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
