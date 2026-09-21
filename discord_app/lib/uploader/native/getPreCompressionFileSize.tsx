// === Module 8083: getPreCompressionFileSize ===

// Module 8083 (getPreCompressionFileSize)
import utils_UploadUtils from "utils/UploadUtils" /* 5354 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
let closure_3 = async function _getPreCompressionFileSize(arg0) {
  if (c1 === 2) {
    c1 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c1 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          const preTranscodeSourceSize = _require.preTranscodeSourceSize;
          if (null != preTranscodeSourceSize) {
            let tmp5 = preTranscodeSourceSize;
          }
          c2 = 1;
          c1 = 1;
          const obj5 = { value: utils_UploadUtils.getFileSize(_require.uri), done: false };
          return obj5;
        }
      } else if (arg0 === 1) {
        c1 = 3;
        throw value;
      } else {
        tmp5 = value;
        if (arg0 === 2) {
          c1 = 3;
          const obj = { value, done: true };
          return obj;
        }
      }
      c1 = 3;
      const obj6 = { value: tmp5, done: true };
      return obj6;
    } catch (tmp10) {
      c1 = tmp;
      throw tmp10;
    }
  }
};
const size = fn(2);
const result = size.fileFinishedImporting("lib/uploader/native/getPreCompressionFileSize.tsx");

export const getPreCompressionFileSize = function getPreCompressionFileSize() {
  const self = this;
  const apply = closure_3.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};