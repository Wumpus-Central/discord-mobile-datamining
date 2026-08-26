// === Module 8580: itemNeedsHeicPreConversion ===

// Module 8580 (itemNeedsHeicPreConversion)
import cancel from "cancel" /* 5020 */;
import set from "set" /* 5062 */;
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;

require = arg1;
function itemNeedsHeicPreConversion(file) {
  let isHeicFileResult = file.platform === cancel.UploadPlatform.WEB;
  if (isHeicFileResult) {
    isHeicFileResult = true !== file.heicConversionEvaluated;
  }
  if (isHeicFileResult) {
    isHeicFileResult = null != file.file;
  }
  if (isHeicFileResult) {
    isHeicFileResult = set.isHeicFile(file.file);
    const tmpResult = set;
  }
  return isHeicFileResult;
}
function _maybePreConvertHeicItem() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c6 = 0;
    c7 = 0;
    c5 = 0;
    return (function*(arg0) {
      if (size === 2) {
        size = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
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
          size = 2;
          if (0 === config2) {
            if (arg0 === 1) {
              size = 3;
              throw arg1;
            } else if (arg0 === 2) {
              size = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let config = tmp3;
              let preConvertHeicForUpload = tmp7;
              let table;
              size = undefined;
              preConvertHeicForUpload = undefined;
              config = undefined;
              c5 = undefined;
              config2 = undefined;
              size = undefined;
              closure_8 = undefined;
              closure_9 = undefined;
              let obj13;
              if (closure_1_4(lib)) {
                c5 = 1;
                const items = [lib(closure_1_1[5])(closure_1_1[4], closure_1_1.paths), lib(closure_1_1[5])(closure_1_1[6], closure_1_1.paths), lib(closure_1_1[5])(closure_1_1[7], closure_1_1.paths)];
                config2 = 2;
                size = 1;
                obj1 = { value: null, done: false };
                obj1[0] = Promise.all(items);
                return obj1;
              } else {
                size = 3;
                const obj2 = { value: null, done: true };
                obj2[0] = tmp82;
                return obj2;
              }
              tmp82 = lib;
            }
          } else if (1 === tmp7) {
            c5 = 0;
            size = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = lib;
            return obj3;
          } else if (2 === tmp7) {
            if (arg0 === 1) {
              size = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 0;
              size = 3;
              const obj4 = { value: null, done: true };
              obj4[0] = arg1;
              return obj4;
            } else {
              table = arg1;
              size = size(table, 3);
              preConvertHeicForUpload = size[0].preConvertHeicForUpload;
              config = size[1].HeicUploadConversionExperiment;
              c5 = size[2].default;
              config2 = config.getConfig({ location: "heicPreConvert.maybePreConvertHeicItem" });
              if (config2.enabled) {
                size = tmp81.file;
                config2 = 3;
                size = 1;
                const obj5 = { value: null, done: false };
                obj5[0] = preConvertHeicForUpload(size, config2.quality, config2.maxFileSizeBytes);
                return obj5;
              } else {
                const obj6 = {};
                const merged = Object.assign(tmp81);
                obj6.heicConversionEvaluated = true;
                c5 = 0;
                size = 3;
                const obj7 = { value: null, done: true };
                obj7[0] = obj6;
                return obj7;
              }
            }
          } else if (3 === tmp7) {
            if (arg0 === 1) {
              size = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 0;
              size = 3;
              const obj8 = { value: null, done: true };
              obj8[0] = arg1;
              return obj8;
            } else {
              closure_8 = arg1;
              if (closure_8 === size) {
                const obj9 = {};
                const merged1 = Object.assign(lib);
                obj9.heicConversionEvaluated = true;
                c5 = 0;
                size = 3;
                const obj10 = { value: null, done: true };
                obj10[0] = obj9;
                return obj10;
              } else {
                config2 = 4;
                size = 1;
                const obj11 = { value: null, done: false };
                obj11[0] = c5.fromBlob(size).catch(() => null);
                return obj11;
              }
            }
          } else if (arg0 === 1) {
            size = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 0;
            size = 3;
            const obj12 = { value: null, done: true };
            obj12[0] = arg1;
            return obj12;
          } else {
            table = arg1;
            if (arg1 == null) {
              table = undefined;
            }
            closure_9 = table;
            const compressionMetadata = lib.compressionMetadata;
            let originalContentType;
            if (compressionMetadata != null) {
              originalContentType = compressionMetadata.originalContentType;
            }
            if (null != originalContentType) {
              if ("" !== lib.compressionMetadata.originalContentType) {
                originalContentType = lib.compressionMetadata.originalContentType;
              }
              obj13 = { originalContentType: null, preCompressionSize: null };
              obj13[0] = originalContentType;
              const compressionMetadata2 = lib.compressionMetadata;
              let preCompressionSize;
              if (compressionMetadata2 != null) {
                preCompressionSize = compressionMetadata2.preCompressionSize;
              }
              size = preCompressionSize;
              if (preCompressionSize == null) {
                size = size.size;
              }
              obj13[1] = size;
              const obj14 = {};
              const merged2 = Object.assign(lib);
              obj14.file = closure_8;
              obj14.compressionMetadata = obj13;
              obj14.originalMd5 = closure_9;
              obj14.heicConversionEvaluated = true;
              c5 = 0;
              size = 3;
              const obj15 = { value: null, done: true };
              obj15[0] = obj14;
              return obj15;
            }
            obj = lib(table[3]);
            originalContentType = obj.heicMimeType(size);
          }
        } catch (tmp59) {
          if (tmp4 === c5) {
            size = tmp2;
            throw tmp59;
          } else {
            config2 = tmp;
          }
        }
      }
    })();
  });
  closure_5 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("set").fileFinishedImporting("lib/uploader/heicPreConvert.tsx");

export { itemNeedsHeicPreConversion };
export const maybePreConvertHeicItem = function maybePreConvertHeicItem(file) {
  const self = this;
  const apply = _maybePreConvertHeicItem.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};