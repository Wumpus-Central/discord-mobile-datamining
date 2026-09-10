// discord_app/lib/uploader/imagePreConvert.tsx
import asyncRequireImpl from "../../../_runtime/01896_asyncRequireImpl.js";
import Upload from "Upload.tsx";
import imageFilename from "imageFilename.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";

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
  c7 = 0;
  c8 = 0;
  c6 = 0;
  return (async (arg0) => {
    if (c8 === 2) {
      c8 = 3;
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
        c8 = 2;
        if (0 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_5 = tmp3;
            closure_4 = tmp5;
            closure_132_0 = value;
            closure_132_1 = undefined;
            closure_132_2 = undefined;
            closure_132_3 = undefined;
            closure_132_4 = undefined;
            closure_132_5 = undefined;
            closure_132_6 = undefined;
            closure_132_7 = undefined;
            closure_132_8 = undefined;
            closure_132_9 = undefined;
            closure_132_10 = undefined;
            closure_132_11 = undefined;
            closure_132_12 = undefined;
            let experiment;
            let convert;
            let sourceMimeType;
            let file2;
            closure_132_17 = undefined;
            let config;
            closure_132_19 = undefined;
            closure_132_20 = undefined;
            closure_132_21 = undefined;
            closure_132_22 = undefined;
            const tmp122 = preConversionFormat(value);
            closure_132_1 = tmp122;
            if (null != tmp122) {
              if (value.platform === Upload.UploadPlatform.WEB) {
                c6 = 1;
                const items = [
                  asyncRequireImpl(dependencyMap[4], dependencyMap.paths),
                  asyncRequireImpl(dependencyMap[6], dependencyMap.paths),
                  asyncRequireImpl(dependencyMap[7], dependencyMap.paths),
                  asyncRequireImpl(dependencyMap[8], dependencyMap.paths),
                ];
                c7 = 2;
                c8 = 1;
                const obj1 = { value: Promise.all(items), done: false };
                return obj1;
              }
            }
            c8 = 3;
            const obj2 = { value, done: true };
            return obj2;
          }
        } else if (1 === tmp8) {
          c6 = 0;
          c8 = 3;
          const obj3 = { value: closure_132_0, done: true };
          return obj3;
        } else if (2 === tmp8) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_132_2 = value;
            closure_132_3 = closure_133_2(closure_132_2, 4);
            closure_132_4 = closure_132_3[0];
            closure_132_5 = closure_132_4.maybeConvertHeicToJpeg;
            closure_132_6 = closure_132_4.maybeConvertJxrToJpeg;
            closure_132_7 = closure_132_4.renameToJpegExtension;
            closure_132_8 = closure_132_4.ImageConversionFailureReason;
            closure_132_9 = closure_132_3[1].HeicUploadConversionExperiment;
            closure_132_10 = closure_132_3[2].JxrUploadConversionExperiment;
            closure_132_11 = closure_132_3[3].default;
            if ("heic" === closure_132_1) {
              const obj5 = {
                experiment: closure_132_9,
                convert: closure_132_5,
                sourceMimeType: closure_133_0(closure_133_1[3]).heicMimeType,
              };
              let obj6 = obj5;
            } else {
              obj6 = {
                experiment: closure_132_10,
                convert: closure_132_6,
                sourceMimeType: closure_133_0(closure_133_1[3]).jxrMimeType,
              };
            }
            closure_132_12 = obj6;
            experiment = closure_132_12.experiment;
            convert = closure_132_12.convert;
            sourceMimeType = closure_132_12.sourceMimeType;
            file2 = closure_132_0.file;
            const compressionMetadata = closure_132_0.compressionMetadata;
            let originalContentType;
            if (compressionMetadata != null) {
              originalContentType = compressionMetadata.originalContentType;
            }
            if (null != originalContentType) {
              if ("" !== closure_132_0.compressionMetadata.originalContentType) {
                originalContentType = closure_132_0.compressionMetadata.originalContentType;
              }
              const obj7 = { originalContentType, preCompressionSize: null };
              const compressionMetadata2 = closure_132_0.compressionMetadata;
              let preCompressionSize;
              if (compressionMetadata2 != null) {
                preCompressionSize = compressionMetadata2.preCompressionSize;
              }
              size = preCompressionSize;
              if (preCompressionSize == null) {
                size = file2.size;
              }
              obj7.preCompressionSize = size;
              closure_132_17 = obj7;
              const obj8 = { location: null };
              const _HermesInternal = HermesInternal;
              obj8.location = "imagePreConvert.maybePreConvertImageItem." + closure_132_1;
              config = experiment.getConfig(obj8);
              if (config.enabled) {
                c7 = 3;
                c8 = 1;
                const obj9 = { value: convert(file2, config.quality, config.maxFileSizeBytes), done: false };
                return obj9;
              } else {
                const obj10 = {};
                const merged = Object.assign(closure_132_0);
                obj10.compressionMetadata = closure_132_17;
                obj10.imageConversionEvaluated = true;
                c6 = 0;
                c8 = 3;
                const obj11 = { value: obj10, done: true };
                return obj11;
              }
            }
            originalContentType = sourceMimeType(file2);
          }
        } else if (3 === tmp8) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            const obj12 = { value, done: true };
            return obj12;
          } else {
            closure_132_19 = value;
            if (null != closure_132_19) {
              if (closure_132_19.success) {
                if (null != closure_132_19.convertedBlob) {
                  const _File = File;
                  const items1 = [closure_132_19.convertedBlob];
                  const obj13 = { type: "image/jpeg", lastModified: file2.lastModified };
                  const file = new File(items1, closure_132_7(file2.name), obj13);
                  closure_132_21 = file;
                  c7 = 4;
                  c8 = 1;
                  const obj14 = { value: closure_132_11.fromBlob(file2).catch(() => null), done: false };
                  return obj14;
                }
              }
            }
            let tmp22;
            if (null != closure_132_19) {
              const reason = closure_132_19.reason;
              UNKNOWN_ERROR = reason;
              if (reason == null) {
                UNKNOWN_ERROR = closure_132_8.UNKNOWN_ERROR;
              }
              const obj15 = {
                convertedMimeType: null,
                conversionFailureReason: UNKNOWN_ERROR,
                compressTimeMs: closure_132_19.compressTimeMs,
              };
              tmp22 = obj15;
            }
            closure_132_20 = tmp22;
            const obj16 = {};
            const merged1 = Object.assign(closure_132_0);
            obj16.compressionMetadata = closure_132_17;
            obj16.imageConversionEvaluated = true;
            obj16.imageConversionAnalytics = closure_132_20;
            c6 = 0;
            c8 = 3;
            const obj17 = { value: obj16, done: true };
            return obj17;
          }
        } else if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 0;
          c8 = 3;
          const obj18 = { value, done: true };
          return obj18;
        } else {
          c2 = value;
          if (value == null) {
            c2 = undefined;
          }
          closure_132_22 = c2;
          obj = {};
          const merged2 = Object.assign(closure_132_0);
          obj.file = closure_132_21;
          obj.compressionMetadata = closure_132_17;
          obj.originalMd5 = closure_132_22;
          obj.imageConversionEvaluated = true;
          const obj19 = { convertedMimeType: "image/jpeg", compressTimeMs: closure_132_19.compressTimeMs };
          obj.imageConversionAnalytics = obj19;
          c6 = 0;
          c8 = 3;
          const obj20 = { value: obj, done: true };
          return obj20;
        }
      } catch (tmp82) {
        if (tmp4 === c6) {
          c8 = tmp2;
          throw tmp82;
        } else {
          c7 = tmp;
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
