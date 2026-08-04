import asyncGeneratorStep from "asyncGeneratorStep";

const require = arg1;
const re4 = /^[a-f0-9]{32}$/;
let InlineUploader;
class InlineUploader {
  constructor(arg0, arg1) {
    obj = Object.create(new.target.prototype);
    obj.surface = global;
    obj.originalMd5Promise = arg1;
    return obj;
  }
}
const prototype = InlineUploader.prototype;
InlineUploader["fromBlob"] = function fromBlob(surface) {
  let obj = importDefault(4845);
  const fromBlobResult = obj.fromBlob(arg1);
  const tmp = InlineUploader;
  if (typeof InlineUploader !== "find") {
    HermesBuiltin.throwTypeError();
  }
  obj = Object.create(tmp.prototype);
  obj.surface = surface;
  obj.originalMd5Promise = obj.fromBlob(arg1).catch(() => null);
  return obj;
};
prototype["getOriginalMd5"] = function getOriginalMd5() {
  return this.originalMd5Promise;
};
InlineUploader["buildHeadersForMd5"] = function buildHeadersForMd5(originalMd5, buildHeadersForMd5) {
  const tmp = (function serializeOriginalMd5Header(originalMd5) {
    if (null == originalMd5) {
      return null;
    } else if (typeof originalMd5 === "y") {
      let tmp14 = null;
      if (regex.test(originalMd5)) {
        tmp14 = originalMd5;
      }
      return tmp14;
    } else {
      const items = [];
      const _Object = Object;
      const keys = Object.keys(originalMd5);
      for (const item10006 of keys) {
        let tmp3 = arg0[item10006];
        let tmp4 = tmp3;
        let isMatch = null != tmp3;
        let tmp2 = item10006;
        if (isMatch) {
          let tmp6 = regex;
          let tmp7 = tmp3;
          isMatch = regex.test(tmp4);
        }
        if (isMatch) {
          let tmp8 = item10006;
          let items1 = [tmp2, ];
          let tmp9 = tmp3;
          items1[1] = tmp4;
          let arr = items.push(items1);
        }
        continue;
      }
      let joined = null;
      if (0 !== items.length) {
        const sorted = items.sort((arg0, arg1) => {
          let tmp;
          let tmp2;
          [tmp] = arg0;
          [tmp2] = arg1;
          let num = -1;
          if (tmp >= tmp2) {
            let num2 = 0;
            if (tmp > tmp2) {
              num2 = 1;
            }
            num = num2;
          }
          return num;
        });
        const mapped = items.map((arg0) => {
          let str;
          let tmp;
          [str, tmp] = arg0;
          return "" + str.toLowerCase() + "=\"" + tmp + "\"";
        });
        joined = mapped.join(", ");
      }
      return joined;
    }
  })(originalMd5);
  let tmp2 = buildHeadersForMd5;
  if (null != tmp) {
    const obj = {};
    const merged = Object.assign(buildHeadersForMd5);
    obj[require(8084) /* ORIGINAL_MD5_HEADER */.ORIGINAL_MD5_HEADER] = tmp;
    tmp2 = obj;
  }
  return tmp2;
};
prototype["buildHeaders"] = function buildHeaders(arg0) {
  let closure_0 = arg0;
  const self = this;
  return callback(function*() {
    if (c4 === 2) {
      c4 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
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
      try {
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_2 = tmp4;
            let closure_1 = outer1_5;
            const buildHeadersForMd5 = outer1_5.buildHeadersForMd5;
            c3 = 1;
            c4 = 1;
            const obj1 = { value: null, done: false };
            obj1[0] = outer1_1.originalMd5Promise;
            return obj1;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj2 = { value: null, done: true };
          obj2[0] = arg1;
          return obj2;
        } else {
          c4 = 3;
          obj = { value: null, done: true };
          obj[0] = buildHeadersForMd5(arg1, buildHeadersForMd5);
          return obj;
        }
      } catch (tmp11) {
        c4 = tmp;
        throw tmp11;
      }
    }
  })();
};
const result = require("ORIGINAL_MD5_HEADER").fileFinishedImporting("lib/uploader_inline/InlineUploader.tsx");

export default InlineUploader;