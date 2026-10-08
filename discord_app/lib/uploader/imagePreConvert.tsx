// === Module 9202: imagePreConvert ===

// Module 9202 (imagePreConvert)
import asyncRequireImpl from "asyncRequireImpl" /* 1999 */;
import UploadPlatform from "UploadPlatform" /* 7731 */;
import imageFilename from "imageFilename" /* 7760 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
function preConversionFormat(platform) {
  let tmp3 = null;
  if (platform.platform === UploadPlatform.UploadPlatform.WEB) {
    tmp3 = null;
    if (true !== platform.imageConversionEvaluated) {
      tmp3 = null;
      if (null != platform.file) {
        let str = "heic";
        if (!tmpResult.isHeicFile(platform.file)) {
          let str2 = null;
          if (tmpResult2.isJxrFile(platform.file)) {
            str2 = "jxr";
          }
          str = str2;
          tmpResult2 = imageFilename;
        }
        tmp3 = str;
        tmpResult = imageFilename;
      }
    }
  }
  return tmp3;
}
let closure_5 = async function _maybePreConvertImageItem() {
  c6 = 0;
  c7 = 0;
  c5 = 0;
  return (async (arg0) => {
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_4 = tmp3;
            closure_3 = tmp5;
            closure_131_0 = value;
            closure_131_1 = undefined;
            closure_131_2 = undefined;
            closure_131_3 = undefined;
            let convertFileToJpeg;
            closure_131_5 = undefined;
            closure_131_6 = undefined;
            let file;
            closure_131_8 = undefined;
            closure_131_9 = undefined;
            closure_131_10 = undefined;
            const tmp76 = preConversionFormat(value);
            closure_131_1 = tmp76;
            if (null != tmp76) {
              if (value.platform === UploadPlatform.UploadPlatform.WEB) {
                c5 = 1;
                const items = [asyncRequireImpl(dependencyMap[4], dependencyMap.paths), asyncRequireImpl(dependencyMap[6], dependencyMap.paths)];
                c6 = 2;
                c7 = 1;
                const obj4 = { value: Promise.all(items), done: false };
                return obj4;
              }
            }
            c7 = 3;
            const obj5 = { value, done: true };
            return obj5;
          }
        } else if (1 === tmp8) {
          c5 = 0;
          c7 = 3;
          const obj6 = { value: closure_131_0, done: true };
          return obj6;
        } else if (2 === tmp8) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            closure_131_2 = value;
            closure_131_3 = closure_132_2(closure_131_2, 2);
            convertFileToJpeg = closure_131_3[0].convertFileToJpeg;
            closure_131_5 = closure_131_3[1].default;
            if ("heic" === closure_131_1) {
              let jxrMimeType = closure_132_0(closure_132_1[3]).heicMimeType;
            } else {
              jxrMimeType = closure_132_0(closure_132_1[3]).jxrMimeType;
            }
            closure_131_6 = jxrMimeType;
            file = closure_131_0.file;
            const compressionMetadata = closure_131_0.compressionMetadata;
            let originalContentType1;
            if (compressionMetadata != null) {
              originalContentType1 = compressionMetadata.originalContentType;
            }
            if (null != originalContentType1) {
              if ("" !== closure_131_0.compressionMetadata.originalContentType) {
                let originalContentType = closure_131_0.compressionMetadata.originalContentType;
              }
              const obj8 = { originalContentType, preCompressionSize: null };
              const compressionMetadata2 = closure_131_0.compressionMetadata;
              let preCompressionSize;
              if (compressionMetadata2 != null) {
                preCompressionSize = compressionMetadata2.preCompressionSize;
              }
              size = preCompressionSize;
              if (preCompressionSize == null) {
                size = file.size;
              }
              obj8.preCompressionSize = size;
              closure_131_8 = obj8;
              c6 = 3;
              c7 = 1;
              const obj9 = { value: convertFileToJpeg(file, closure_131_1), done: false };
              return obj9;
            }
            originalContentType = closure_131_6(file);
          }
        } else if (3 === tmp8) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            const obj10 = { value, done: true };
            return obj10;
          } else {
            closure_131_9 = value;
            if (null != closure_131_9) {
              if (null != closure_131_9.convertedFile) {
                c6 = 4;
                c7 = 1;
                const obj11 = { value: closure_131_5.fromBlob(file).catch(() => null), done: false };
                return obj11;
              }
            }
            const obj12 = {};
            const merged = Object.assign(closure_131_0);
            obj12.compressionMetadata = closure_131_8;
            obj12.imageConversionEvaluated = true;
            let analytics;
            if (closure_131_9 != null) {
              analytics = closure_131_9.analytics;
            }
            obj12.imageConversionAnalytics = analytics;
            c5 = 0;
            c7 = 3;
            const obj13 = { value: obj12, done: true };
            return obj13;
          }
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c7 = 3;
          const obj14 = { value, done: true };
          return obj14;
        } else {
          c2 = value;
          if (value == null) {
            c2 = undefined;
          }
          closure_131_10 = c2;
          const obj = {};
          const merged1 = Object.assign(closure_131_0);
          obj.file = closure_131_9.convertedFile;
          obj.compressionMetadata = closure_131_8;
          obj.originalMd5 = closure_131_10;
          obj.imageConversionEvaluated = true;
          obj.imageConversionAnalytics = closure_131_9.analytics;
          c5 = 0;
          c7 = 3;
          const obj15 = { value: obj, done: true };
          return obj15;
        }
      } catch (tmp57) {
        if (tmp4 === c5) {
          c7 = tmp2;
          throw tmp57;
        } else {
          c6 = tmp;
        }
      }
    }
  })();
};
let size = fn(2);
const result = size.fileFinishedImporting("lib/uploader/imagePreConvert.tsx");

export const itemNeedsImagePreConversion = function itemNeedsImagePreConversion(file) {
  let tmp3 = null;
  if (file.platform === UploadPlatform.UploadPlatform.WEB) {
    tmp3 = null;
    if (true !== file.imageConversionEvaluated) {
      tmp3 = null;
      if (null != file.file) {
        let str = "heic";
        if (!tmpResult.isHeicFile(file.file)) {
          let str2 = null;
          if (tmpResult2.isJxrFile(file.file)) {
            str2 = "jxr";
          }
          str = str2;
          tmpResult2 = imageFilename;
        }
        tmp3 = str;
        tmpResult = imageFilename;
      }
    }
  }
  return null != tmp3;
};
export const maybePreConvertImageItem = function maybePreConvertImageItem() {
  const self = this;
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};