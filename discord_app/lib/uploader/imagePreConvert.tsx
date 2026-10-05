// discord_app/lib/uploader/imagePreConvert.tsx
import asyncRequire from "../../../_runtime/01987_asyncRequire.js";
import UploadPlatform from "../../modules/media_uploads/UploadPlatform.tsx";
import imageFilename from "imageFilename.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import size_mod from "../../../_runtime/metro/00002__.js";

let c2, closure_4, experiment, experiment2, originalContentType1, originalMd5;

function preConversionFormat(platform) {
  let tmp3 = null;
  if (platform.platform === UploadPlatform.UploadPlatform.WEB) {
    tmp3 = null;
    if (true !== platform.imageConversionEvaluated) {
      tmp3 = null;
      if (null != platform.file) {
        let str = "heic";
        const tmpResult = imageFilename;
        if (!tmpResult.isHeicFile(platform.file)) {
          let str2 = null;
          const tmpResult2 = imageFilename;
          if (tmpResult2.isJxrFile(platform.file)) {
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
let value = function _maybePreConvertImageItem() {
  const obj = _asyncToGenerator(async (value) => {
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (async (arg0) => {
      let analytics;
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c5;
        try {
          let closure_2;
          let convertFileToJpeg;
          let closure_7;
          let obj9;
          let sourceMimeType;
          let file;
          let obj10;
          let closure_13;
          let closure_14;
          let closure_1;
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              closure_4 = tmp;
              closure_2 = undefined;
              originalContentType1 = undefined;
              convertFileToJpeg = undefined;
              experiment2 = undefined;
              closure_7 = undefined;
              obj9 = undefined;
              experiment = undefined;
              sourceMimeType = undefined;
              file = undefined;
              obj10 = undefined;
              closure_13 = undefined;
              closure_14 = undefined;
              originalMd5 = undefined;
              const tmp86 = preConversionFormat(value);
              closure_1 = tmp86;
              if (null != tmp86) {
                if (value.platform === UploadPlatform.UploadPlatform.WEB) {
                  c5 = 1;
                  const items = [
                    asyncRequire(dependencyMap[4], dependencyMap.paths),
                    asyncRequire(dependencyMap[6], dependencyMap.paths),
                    asyncRequire(dependencyMap[7], dependencyMap.paths),
                    asyncRequire(dependencyMap[8], dependencyMap.paths),
                  ];
                  c6 = 2;
                  c7 = 1;
                  const obj4 = { value: all(items), done: false };
                  return obj4;
                }
              }
              c7 = 3;
              return { value, done: true };
            }
          } else if (1 === c6) {
            c5 = 0;
            c7 = 3;
            return { value, done: true };
          } else if (2 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              c7 = 3;
              return { value, done: true };
            } else {
              closure_2 = value;
              originalContentType1 = closure_132_2(closure_2, 4);
              convertFileToJpeg = originalContentType1[0].convertFileToJpeg;
              experiment = originalContentType1[1].HeicUploadConversionExperiment;
              experiment2 = originalContentType1[2].JxrUploadConversionExperiment;
              closure_7 = originalContentType1[3].default;
              if ("heic" === closure_1) {
                obj9 = { experiment, sourceMimeType: closure_132_0(closure_132_1[3]).heicMimeType };
                const obj8 = { experiment, sourceMimeType: closure_132_0(closure_132_1[3]).heicMimeType };
              } else {
                obj9 = { experiment: experiment2, sourceMimeType: closure_132_0(closure_132_1[3]).jxrMimeType };
                originalContentType1 = closure_132_0;
              }
              experiment = obj9.experiment;
              sourceMimeType = obj9.sourceMimeType;
              file = value.file;
              const compressionMetadata = value.compressionMetadata;
              originalContentType1 = compressionMetadata == null;
              let originalContentType;
              if (!originalContentType1) {
                originalContentType = compressionMetadata.originalContentType;
              }
              if (null != originalContentType) {
                if ("" !== value.compressionMetadata.originalContentType) {
                  originalContentType1 = value.compressionMetadata.originalContentType;
                }
                obj10 = { originalContentType: originalContentType1, preCompressionSize: size };
                originalContentType1 = value.compressionMetadata;
                let preCompressionSize;
                if (originalContentType1 != null) {
                  preCompressionSize = originalContentType1.preCompressionSize;
                }
                size = preCompressionSize;
                if (preCompressionSize == null) {
                  size = file.size;
                }
                originalContentType1 = experiment.getConfig;
                const _HermesInternal = HermesInternal;
                const obj11 = { location: "imagePreConvert.maybePreConvertImageItem." + closure_1 };
                closure_13 = originalContentType1(obj11);
                if (closure_13.enabled) {
                  c6 = 3;
                  c7 = 1;
                  const obj12 = {
                    value: convertFileToJpeg(file, closure_1, closure_13.quality, closure_13.maxFileSizeBytes),
                    done: false,
                  };
                  return obj12;
                } else {
                  originalContentType1 = { compressionMetadata: obj10, imageConversionEvaluated: true };
                  const merged = Object.assign(value);
                  c5 = 0;
                  c7 = 3;
                  return { value: originalContentType1, done: true };
                }
              }
              originalContentType1 = sourceMimeType(file);
            }
          } else if (3 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              c7 = 3;
              return { value, done: true };
            } else {
              closure_14 = value;
              if (null != closure_14) {
                if (null != closure_14.convertedFile) {
                  originalContentType1 = closure_7.fromBlob(file);
                  c6 = 4;
                  c7 = 1;
                  const obj15 = { value: originalContentType1.catch(() => null), done: false };
                  return obj15;
                }
              }
              const obj16 = {
                compressionMetadata: obj10,
                imageConversionEvaluated: true,
                imageConversionAnalytics: analytics,
              };
              const merged1 = Object.assign(value);
              originalContentType1 = closure_14;
              analytics = undefined;
              if (closure_14 != null) {
                analytics = originalContentType1.analytics;
              }
              c5 = 0;
              c7 = 3;
              return { value: obj16, done: true };
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            return { value, done: true };
          } else {
            c2 = value;
            if (value == null) {
              c2 = undefined;
            }
            originalMd5 = c2;
            value = {
              file: closure_14.convertedFile,
              compressionMetadata: obj10,
              originalMd5,
              imageConversionEvaluated: true,
              imageConversionAnalytics: closure_14.analytics,
            };
            const merged2 = Object.assign(value);
            originalContentType1 = originalMd5;
            c5 = 0;
            c7 = 3;
            return { value, done: true };
          }
        } catch (tmp67) {
          if (0 === c5) {
            c7 = 3;
            throw tmp67;
          } else {
            c6 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
let size = size_mod;
const result = size.fileFinishedImporting("lib/uploader/imagePreConvert.tsx");

export const itemNeedsImagePreConversion = function itemNeedsImagePreConversion(file) {
  let tmp3 = null;
  if (file.platform === UploadPlatform.UploadPlatform.WEB) {
    tmp3 = null;
    if (true !== file.imageConversionEvaluated) {
      tmp3 = null;
      if (null != file.file) {
        let str = "heic";
        const tmpResult = imageFilename;
        if (!tmpResult.isHeicFile(file.file)) {
          let str2 = null;
          const tmpResult2 = imageFilename;
          if (tmpResult2.isJxrFile(file.file)) {
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
  return obj(...arguments);
};
