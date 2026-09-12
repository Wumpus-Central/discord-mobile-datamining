// === Module 9437: imagePreConvert ===

// Module 9437 (imagePreConvert)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import Upload from "Upload" /* 5209 */;
import imageFilename from "imageFilename" /* 5252 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
function preConversionFormat(platform) {
  let tmp3 = null;
  if (platform.platform === Upload.UploadPlatform.WEB) {
    tmp3 = null;
    if (true !== platform.imageConversionEvaluated) {
      tmp3 = null;
      if (null != platform.file) {
        let tmpResult = imageFilename;
        let str = "heic";
        if (!tmpResult.isHeicFile(platform.file)) {
          tmpResult = imageFilename;
          let str2 = null;
          if (tmpResult.isJxrFile(platform.file)) {
            str2 = "jxr";
          }
          str = str2;
        }
        tmp3 = str;
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
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
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
            obj = { value, done: true };
            return obj;
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
            closure_131_7 = undefined;
            closure_131_8 = undefined;
            let experiment;
            let sourceMimeType;
            let file;
            closure_131_12 = undefined;
            let config;
            closure_131_14 = undefined;
            closure_131_15 = undefined;
            const tmp94 = preConversionFormat(value);
            closure_131_1 = tmp94;
            if (null != tmp94) {
              if (value.platform === Upload.UploadPlatform.WEB) {
                c5 = 1;
                const items = [asyncRequireImpl(dependencyMap[4], dependencyMap.paths), asyncRequireImpl(dependencyMap[6], dependencyMap.paths), asyncRequireImpl(dependencyMap[7], dependencyMap.paths), asyncRequireImpl(dependencyMap[8], dependencyMap.paths)];
                c6 = 2;
                c7 = 1;
                const obj1 = { value: Promise.all(items), done: false };
                return obj1;
              }
            }
            c7 = 3;
            const obj2 = { value, done: true };
            return obj2;
          }
        } else if (1 === tmp8) {
          c5 = 0;
          c7 = 3;
          const obj3 = { value: closure_131_0, done: true };
          return obj3;
        } else if (2 === tmp8) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_131_2 = value;
            closure_131_3 = closure_132_2(closure_131_2, 4);
            convertFileToJpeg = closure_131_3[0].convertFileToJpeg;
            closure_131_5 = closure_131_3[1].HeicUploadConversionExperiment;
            closure_131_6 = closure_131_3[2].JxrUploadConversionExperiment;
            closure_131_7 = closure_131_3[3].default;
            if ("heic" === closure_131_1) {
              const obj5 = { experiment: closure_131_5, sourceMimeType: closure_132_0(closure_132_1[3]).heicMimeType };
              let obj6 = obj5;
            } else {
              obj6 = { experiment: closure_131_6, sourceMimeType: closure_132_0(closure_132_1[3]).jxrMimeType };
            }
            closure_131_8 = obj6;
            experiment = closure_131_8.experiment;
            sourceMimeType = closure_131_8.sourceMimeType;
            file = closure_131_0.file;
            const compressionMetadata = closure_131_0.compressionMetadata;
            let originalContentType;
            if (compressionMetadata != null) {
              originalContentType = compressionMetadata.originalContentType;
            }
            if (null != originalContentType) {
              if ("" !== closure_131_0.compressionMetadata.originalContentType) {
                originalContentType = closure_131_0.compressionMetadata.originalContentType;
              }
              const obj7 = { originalContentType, preCompressionSize: null };
              const compressionMetadata2 = closure_131_0.compressionMetadata;
              let preCompressionSize;
              if (compressionMetadata2 != null) {
                preCompressionSize = compressionMetadata2.preCompressionSize;
              }
              size = preCompressionSize;
              if (preCompressionSize == null) {
                size = file.size;
              }
              obj7.preCompressionSize = size;
              closure_131_12 = obj7;
              const obj8 = { location: null };
              const _HermesInternal = HermesInternal;
              obj8.location = "imagePreConvert.maybePreConvertImageItem." + closure_131_1;
              config = experiment.getConfig(obj8);
              if (config.enabled) {
                c6 = 3;
                c7 = 1;
                const obj9 = { value: convertFileToJpeg(file, closure_131_1, config.quality, config.maxFileSizeBytes), done: false };
                return obj9;
              } else {
                const obj10 = {};
                const merged = Object.assign(closure_131_0);
                obj10.compressionMetadata = closure_131_12;
                obj10.imageConversionEvaluated = true;
                c5 = 0;
                c7 = 3;
                const obj11 = { value: obj10, done: true };
                return obj11;
              }
            }
            originalContentType = sourceMimeType(file);
          }
        } else if (3 === tmp8) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            const obj12 = { value, done: true };
            return obj12;
          } else {
            closure_131_14 = value;
            if (null != closure_131_14) {
              if (null != closure_131_14.convertedFile) {
                c6 = 4;
                c7 = 1;
                const obj13 = { value: closure_131_7.fromBlob(file).catch(() => null), done: false };
                return obj13;
              }
            }
            const obj14 = {};
            const merged1 = Object.assign(closure_131_0);
            obj14.compressionMetadata = closure_131_12;
            obj14.imageConversionEvaluated = true;
            let analytics;
            if (closure_131_14 != null) {
              analytics = closure_131_14.analytics;
            }
            obj14.imageConversionAnalytics = analytics;
            c5 = 0;
            c7 = 3;
            const obj15 = { value: obj14, done: true };
            return obj15;
          }
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c7 = 3;
          const obj16 = { value, done: true };
          return obj16;
        } else {
          c2 = value;
          if (value == null) {
            c2 = undefined;
          }
          closure_131_15 = c2;
          obj = {};
          const merged2 = Object.assign(closure_131_0);
          obj.file = closure_131_14.convertedFile;
          obj.compressionMetadata = closure_131_12;
          obj.originalMd5 = closure_131_15;
          obj.imageConversionEvaluated = true;
          obj.imageConversionAnalytics = closure_131_14.analytics;
          c5 = 0;
          c7 = 3;
          const obj17 = { value: obj, done: true };
          return obj17;
        }
      } catch (tmp73) {
        if (tmp4 === c5) {
          c7 = tmp2;
          throw tmp73;
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
  if (file.platform === Upload.UploadPlatform.WEB) {
    tmp3 = null;
    if (true !== file.imageConversionEvaluated) {
      tmp3 = null;
      if (null != file.file) {
        let tmpResult = imageFilename;
        let str = "heic";
        if (!tmpResult.isHeicFile(file.file)) {
          tmpResult = imageFilename;
          let str2 = null;
          if (tmpResult.isJxrFile(file.file)) {
            str2 = "jxr";
          }
          str = str2;
        }
        tmp3 = str;
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