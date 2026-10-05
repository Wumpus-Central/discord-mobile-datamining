// discord_app/lib/uploader/native/getPreCompressionFileSize.tsx
import utils_UploadUtils from "../../../utils/native/UploadUtils.tsx";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import size from "../../../../_runtime/metro/00002__.js";

let c1, c2;

let obj = function _getPreCompressionFileSize() {
  obj = _asyncToGenerator(async (arg0) => {
    let obj2;
    let closure_0 = arg0;
    if (c1 === 2) {
      c1 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let tmp4;
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
            const preTranscodeSourceSize = closure_0.preTranscodeSourceSize;
            if (null != preTranscodeSourceSize) {
              tmp4 = preTranscodeSourceSize;
            }
            c2 = 1;
            c1 = 1;
            const obj5 = { value: obj2.getFileSize(closure_0.uri), done: false };
            obj2 = utils_UploadUtils;
            return obj5;
          }
        } else if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else {
          tmp4 = value;
          if (arg0 === 2) {
            c1 = 3;
            obj = { value, done: true };
            return obj;
          }
        }
        c1 = 3;
        const obj6 = { value: tmp4, done: true };
        return obj6;
      } catch (tmp9) {
        c1 = 3;
        throw tmp9;
      }
    }
  });
  return obj(...arguments);
};
const result = size.fileFinishedImporting("lib/uploader/native/getPreCompressionFileSize.tsx");

export const getPreCompressionFileSize = function getPreCompressionFileSize() {
  return obj(...arguments);
};
