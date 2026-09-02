// === Module 5121: fromBlob ===

// Module 5121 (fromBlob)
import fromBlobDefault from "fromBlob" /* 5109 */;
import ORIGINAL_MD5_HEADER from "ORIGINAL_MD5_HEADER" /* 5122 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;

require = arg1;
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
  let obj = fromBlobDefault;
  const fromBlobResult = obj.fromBlob(arg1);
  const tmp = InlineUploader;
  if (typeof InlineUploader !== "function") {
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
    } else if (typeof originalMd5 === "string") {
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
    obj[ORIGINAL_MD5_HEADER.ORIGINAL_MD5_HEADER] = tmp;
    tmp2 = obj;
  }
  return tmp2;
};
prototype["buildHeaders"] = function buildHeaders(arg0) {
  closure_0 = arg0;
  const self = this;
  return callback(function*() {
    closure_2 = tmp4;
    closure_1 = closure_1_5;
    const buildHeadersForMd5 = closure_1_5.buildHeadersForMd5;
    yield closure_1_1.originalMd5Promise;
    return buildHeadersForMd5(arg1, buildHeadersForMd5);
  })();
};
const result = require("set").fileFinishedImporting("lib/uploader_inline/InlineUploader.tsx");

export default InlineUploader;