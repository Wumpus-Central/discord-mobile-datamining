// === Module 8176: itemNeedsHeicPreConversion ===

// Module 8176 (itemNeedsHeicPreConversion)
import cancel from "cancel" /* 5082 */;
import set from "set" /* 5124 */;
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
  let tmp = callback((arg0) => {
    closure_0 = arg0;
    c7 = 0;
    c8 = 0;
    c6 = 0;
    return (function*(arg0) {
      if (c8 === 2) {
        c8 = 3;
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
          c8 = 2;
          if (0 === config) {
            if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c8 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let renameToJpegExtension = tmp3;
              let maybeConvertHeicToJpeg = tmp7;
              let table;
              let UNKNOWN_ERROR;
              let size;
              maybeConvertHeicToJpeg = undefined;
              renameToJpegExtension = undefined;
              let constants;
              config = undefined;
              c8 = undefined;
              let config2;
              let file;
              closure_11 = undefined;
              let obj11;
              file = undefined;
              closure_14 = undefined;
              let obj15;
              let tmp = closure_1_4;
              tmp = lib;
              if (closure_1_4(lib)) {
                constants = 1;
                const items = [lib(closure_1_1[5])(closure_1_1[4], closure_1_1.paths), lib(closure_1_1[5])(closure_1_1[6], closure_1_1.paths), lib(closure_1_1[5])(closure_1_1[7], closure_1_1.paths)];
                config = 2;
                c8 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = Promise.all(items);
                return obj1;
              } else {
                c8 = 3;
                const obj2 = { value: null, done: true };
                obj2[0] = tmp;
                return obj2;
              }
            }
          } else if (1 === tmp7) {
            constants = 0;
            c8 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = lib;
            return obj3;
          } else if (2 === tmp7) {
            if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              constants = 0;
              c8 = 3;
              const obj4 = { value: null, done: true };
              obj4[0] = arg1;
              return obj4;
            } else {
              table = arg1;
              tmp = UNKNOWN_ERROR;
              tmp = table;
              UNKNOWN_ERROR = UNKNOWN_ERROR(table, 3);
              tmp = UNKNOWN_ERROR;
              size = UNKNOWN_ERROR[0];
              tmp = size;
              maybeConvertHeicToJpeg = size.maybeConvertHeicToJpeg;
              tmp = size;
              renameToJpegExtension = size.renameToJpegExtension;
              tmp = size;
              constants = size.HeicConversionFailureReason;
              tmp = UNKNOWN_ERROR;
              config = UNKNOWN_ERROR[1].HeicUploadConversionExperiment;
              tmp = UNKNOWN_ERROR;
              c8 = UNKNOWN_ERROR[2].default;
              tmp = config;
              config2 = config.getConfig({ location: "heicPreConvert.maybePreConvertHeicItem" });
              tmp = config2;
              tmp = maybeConvertHeicToJpeg;
              tmp = lib;
              if (config2.enabled) {
                file = tmp.file;
                config = 3;
                c8 = 1;
                const obj5 = { value: null, done: false };
                obj5[0] = maybeConvertHeicToJpeg(file, config2.quality, config2.maxFileSizeBytes);
                return obj5;
              } else {
                const obj6 = {};
                const merged = Object.assign(tmp);
                obj6.heicConversionEvaluated = true;
                constants = 0;
                c8 = 3;
                const obj7 = { value: null, done: true };
                obj7[0] = obj6;
                return obj7;
              }
            }
          } else if (3 === tmp7) {
            if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              constants = 0;
              c8 = 3;
              const obj8 = { value: null, done: true };
              obj8[0] = arg1;
              return obj8;
            } else {
              closure_11 = arg1;
              if (null != closure_11) {
                if (closure_11.success) {
                  if (null != closure_11.convertedBlob) {
                    const _File = File;
                    const items1 = [closure_11.convertedBlob];
                    const obj9 = { type: "image/jpeg", lastModified: null };
                    obj9[1] = file.lastModified;
                    file = new File(items1, renameToJpegExtension(file.name), obj9);
                    config = 4;
                    c8 = 1;
                    const obj10 = { value: null, done: false };
                    obj10[0] = c8.fromBlob(file).catch(() => null);
                    return obj10;
                  }
                }
              }
              let tmp39;
              if (null != closure_11) {
                const reason = closure_11.reason;
                UNKNOWN_ERROR = reason;
                if (reason == null) {
                  UNKNOWN_ERROR = constants.UNKNOWN_ERROR;
                }
                obj11 = { convertedMimeType: null, conversionFailureReason: null, compressTimeMs: null };
                obj11[1] = UNKNOWN_ERROR;
                obj11[2] = closure_11.compressTimeMs;
                tmp39 = obj11;
              }
              obj11 = tmp39;
              const obj12 = {};
              const merged1 = Object.assign(lib);
              obj12.heicConversionEvaluated = true;
              obj12.heicConversionAnalytics = obj11;
              constants = 0;
              c8 = 3;
              const obj13 = { value: null, done: true };
              obj13[0] = obj12;
              return obj13;
            }
          } else if (arg0 === 1) {
            c8 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            constants = 0;
            c8 = 3;
            const obj14 = { value: null, done: true };
            obj14[0] = arg1;
            return obj14;
          } else {
            table = arg1;
            if (arg1 == null) {
              table = undefined;
            }
            closure_14 = table;
            const compressionMetadata = lib.compressionMetadata;
            let originalContentType;
            if (compressionMetadata != null) {
              originalContentType = compressionMetadata.originalContentType;
            }
            if (null != originalContentType) {
              if ("" !== lib.compressionMetadata.originalContentType) {
                originalContentType = lib.compressionMetadata.originalContentType;
              }
              obj15 = { originalContentType: null, preCompressionSize: null };
              obj15[0] = originalContentType;
              const compressionMetadata2 = lib.compressionMetadata;
              let preCompressionSize;
              if (compressionMetadata2 != null) {
                preCompressionSize = compressionMetadata2.preCompressionSize;
              }
              size = preCompressionSize;
              if (preCompressionSize == null) {
                size = file.size;
              }
              obj15[1] = size;
              const obj16 = {};
              const merged2 = Object.assign(lib);
              obj16.file = file;
              obj16.compressionMetadata = obj15;
              obj16.originalMd5 = closure_14;
              obj16.heicConversionEvaluated = true;
              const obj17 = { convertedMimeType: "image/jpeg", compressTimeMs: null };
              obj17[1] = closure_11.compressTimeMs;
              obj16.heicConversionAnalytics = obj17;
              constants = 0;
              c8 = 3;
              const obj18 = { value: null, done: true };
              obj18[0] = obj16;
              return obj18;
            }
            obj = lib(table[3]);
            originalContentType = obj.heicMimeType(file);
          }
        } catch (tmp72) {
          if (tmp4 === constants) {
            c8 = tmp2;
            throw tmp72;
          } else {
            config = tmp;
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