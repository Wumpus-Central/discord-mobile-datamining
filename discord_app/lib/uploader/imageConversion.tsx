// discord_app/lib/uploader/imageConversion.tsx
import LoggerDefault from "../../modules/debug/Logger.tsx";
import MediaTypes from "../../modules/media/MediaTypes.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
function toImageEncoder(arg0) {
  if ("WIC" === arg0) {
    return MediaTypes.ImageEncoder.WIC;
  } else if ("ImageIO" === arg0) {
    return MediaTypes.ImageEncoder.IMAGEIO;
  } else if ("stub" === arg0) {
    return MediaTypes.ImageEncoder.SYSIMG_STUB;
  } else {
    return MediaTypes.ImageEncoder.SYSIMG_UNKNOWN;
  }
}
function convertViaSysimg() {
  const self = this;
  const apply = closure_10.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_10 = async function _convertViaSysimg(arg0) {
  if (c10 === 2) {
    c10 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp9 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c10 = 2;
      if (0 === c9) {
        if (arg0 === 1) {
          c10 = 3;
          throw value;
        } else if (arg0 === 2) {
          c10 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_6 = tmp4;
          closure_5 = tmp7;
          closure_133_1 = undefined;
          closure_133_2 = undefined;
          closure_133_3 = undefined;
          closure_133_4 = undefined;
          closure_133_5 = undefined;
          closure_133_0 = closure_0;
          ({ label: closure_133_1, matches: closure_133_2, canConvert: closure_133_3 } = closure_1);
          closure_133_4 = closure_2;
          closure_133_5 = closure_3;
          closure_133_6 = undefined;
          closure_133_9 = undefined;
          closure_133_10 = undefined;
          closure_133_11 = undefined;
          closure_133_12 = undefined;
          closure_133_13 = undefined;
          closure_133_14 = undefined;
          closure_133_15 = undefined;
          closure_133_16 = undefined;
          closure_133_7 = function elapsed() {
            return Math.round(performance.now() - closure_1_6);
          };
          closure_133_8 = function fail(reason) {
            return {
              success: false,
              sizeBefore: closure_1_0.size,
              sizeAfter: closure_1_0.size,
              reason,
              compressTimeMs: Math.round(performance.now() - closure_1_6),
            };
          };
          c9 = 1;
          c10 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp10) {
        if (arg0 === 1) {
          c10 = 3;
          throw value;
        } else if (arg0 === 2) {
          c10 = 3;
          const obj1 = { value, done: true };
          return obj1;
        } else if (closure_133_2(closure_133_0)) {
          const _performance = performance;
          closure_133_6 = performance.now();
          const tmp59 = closure_134_1(closure_134_2[4]);
          let sysimg;
          if (tmp59 != null) {
            sysimg = tmp59.sysimg;
          }
          closure_133_9 = sysimg;
          if (null == closure_133_9) {
            closure_134_4.verbose("sysimg not available (not Electron)");
            c10 = 3;
            const obj2 = { value: closure_133_8(closure_134_6.NATIVE_MODULE_UNAVAILABLE), done: true };
            return obj2;
          } else {
            c8 = 1;
            c9 = 3;
            c10 = 1;
            const obj3 = { value: closure_133_3(closure_133_9), done: false };
            return obj3;
          }
        } else {
          c10 = 3;
          return { value: null, done: true };
        }
      } else if (2 === tmp10) {
        c8 = 0;
        closure_133_17 = closure_7;
        const _HermesInternal3 = HermesInternal;
        closure_134_4.warn("" + closure_133_1 + " conversion failed for " + closure_133_0.name + ":", closure_133_17);
        c10 = 3;
        const obj4 = { value: closure_133_8(closure_134_6.CONVERSION_FAILED), done: true };
        return obj4;
      } else if (3 === tmp10) {
        if (arg0 === 1) {
          c10 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 0;
          c10 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else if (value) {
          if (null != closure_133_5) {
            if (closure_133_0.size > closure_133_5) {
              const _HermesInternal2 = HermesInternal;
              closure_134_4.verbose("file too large: " + closure_133_0.size + " > " + closure_133_5);
              c8 = 0;
              c10 = 3;
              const obj6 = { value: closure_133_8(closure_134_6.SIZE_LIMIT_EXCEEDED), done: true };
              return obj6;
            }
          }
          c9 = 4;
          c10 = 1;
          const obj7 = { value: closure_133_0.arrayBuffer(), done: false };
          return obj7;
        } else {
          const _HermesInternal = HermesInternal;
          closure_134_4.verbose("platform does not support " + closure_133_1 + " conversion");
          c8 = 0;
          c10 = 3;
          const obj8 = { value: closure_133_8(closure_134_6.PLATFORM_UNSUPPORTED), done: true };
          return obj8;
        }
      } else if (4 === tmp10) {
        if (arg0 === 1) {
          c10 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 0;
          c10 = 3;
          const obj9 = { value, done: true };
          return obj9;
        } else {
          closure_133_10 = value;
          const _Math = Math;
          const _Math2 = Math;
          closure_133_11 = Math.min(100, Math.max(1, closure_133_4));
          const _JSON = JSON;
          const obj10 = { format: "jpeg", quality: closure_133_11 };
          closure_133_12 = JSON.stringify(obj10);
          c9 = 5;
          c10 = 1;
          const obj11 = { value: closure_133_9.convertBytes(closure_133_10, closure_133_12), done: false };
          return obj11;
        }
      } else if (5 === tmp10) {
        if (arg0 === 1) {
          c10 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 0;
          c10 = 3;
          const obj12 = { value, done: true };
          return obj12;
        } else {
          closure_133_13 = value;
          const _Blob = Blob;
          const items = [closure_133_13];
          const blob = new Blob(items, { type: "image/jpeg" });
          closure_133_14 = blob;
          closure_133_15 = closure_133_7();
          const _HermesInternal4 = HermesInternal;
          closure_134_4.log(
            "converted " +
              closure_133_0.name +
              ": " +
              closure_133_0.size +
              " -> " +
              closure_133_14.size +
              " bytes in " +
              closure_133_15 +
              "ms",
          );
          closure_133_16 = null;
          c8 = 2;
          const getBackendName = closure_133_9.getBackendName;
          let backendName;
          if (getBackendName != null) {
            backendName = getBackendName();
          }
          c9 = 7;
          c10 = 1;
          const obj13 = { value: backendName, done: false };
          return obj13;
        }
      } else {
        if (6 === tmp10) {
          c8 = 1;
          closure_133_16 = null;
          const obj14 = {
            success: true,
            convertedBlob: closure_133_14,
            sizeBefore: closure_133_0.size,
            sizeAfter: closure_133_14.size,
            compressTimeMs: closure_133_15,
            imageCompressionQuality: closure_133_11 / 100,
            imageEncoderType: closure_134_5(closure_133_16),
          };
          c8 = 0;
          c10 = 3;
        } else if (arg0 === 1) {
          c10 = 3;
          throw value;
        } else if (arg0 !== 2) {
          c4 = value;
          if (value == null) {
            c4 = null;
          }
          closure_133_16 = c4;
          c8 = 1;
        }
        c8 = 0;
        c10 = 3;
        obj = { value, done: true };
        return obj;
      }
    } catch (tmp72) {
      closure_7 = tmp72;
      if (tmp5 === c8) {
        c10 = tmp3;
        throw tmp72;
      } else if (tmp2 === tmp74) {
        c9 = tmp;
      } else {
        c9 = tmp6;
      }
    }
  }
};
function maybeConvertHeicToJpeg(arg0, arg1, arg2) {
  let num = arg1;
  if (arg1 === undefined) {
    num = 85;
  }
  return convertViaSysimg(arg0, obj, num, arg2);
}
function maybeConvertJxrToJpeg(arg0, arg1, arg2) {
  let num = arg1;
  if (arg1 === undefined) {
    num = 85;
  }
  return convertViaSysimg(arg0, obj, num, arg2);
}
let closure_13 = async function _convertFileToJpeg(arg0) {
  if (c8 === 2) {
    c8 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      obj = { value, done: true };
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
          closure_6 = tmp2;
          closure_5 = tmp5;
          closure_133_0 = closure_0;
          closure_133_1 = closure_1;
          closure_133_2 = undefined;
          if ("heic" === closure_1) {
            maybeConvertHeicToJpeg(closure_0, closure_2, closure_3);
          } else {
            maybeConvertJxrToJpeg(closure_0, closure_2, closure_3);
          }
          c7 = 1;
          c8 = 1;
        }
      } else if (arg0 === 1) {
        c8 = 3;
        throw value;
      } else if (arg0 === 2) {
        c8 = 3;
        const obj1 = { value, done: true };
        return obj1;
      } else {
        closure_133_2 = value;
        if (null == closure_133_2) {
          c8 = 3;
          const obj2 = { value: null, done: true };
          return obj2;
        } else {
          if (!closure_133_2.success) {
            const reason = closure_133_2.reason;
            let UNKNOWN_ERROR = reason;
            if (reason == null) {
              UNKNOWN_ERROR = closure_134_6.UNKNOWN_ERROR;
            }
            obj = { convertedFile: null, analytics: null };
            let obj3 = {
              convertedMimeType: null,
              conversionFailureReason: UNKNOWN_ERROR,
              compressTimeMs: closure_133_2.compressTimeMs,
            };
            obj.analytics = obj3;
          }
          const _HermesInternal = HermesInternal;
          closure_134_4.log(
            "" +
              closure_133_1 +
              " conversion worked for " +
              closure_133_0.name +
              ": " +
              closure_133_2.sizeBefore +
              " -> " +
              closure_133_2.sizeAfter +
              " bytes",
          );
          const obj4 = { convertedFile: null, analytics: null };
          const _File = File;
          const items = [closure_133_2.convertedBlob];
          obj3 = closure_134_0(closure_134_2[3]);
          const obj5 = { type: "image/jpeg", lastModified: closure_133_0.lastModified };
          const file = new File(items, obj3.renameToJpegExtension(closure_133_0.name), obj5);
          obj4.convertedFile = file;
          const obj6 = {
            convertedMimeType: "image/jpeg",
            compressTimeMs: closure_133_2.compressTimeMs,
            imageCompressionQuality: closure_133_2.imageCompressionQuality,
            imageEncoderType: closure_133_2.imageEncoderType,
          };
          obj4.analytics = obj6;
          obj = obj4;
        }
      }
    } catch (tmp49) {
      c8 = tmp;
      throw tmp49;
    }
  }
};
let closure_4 = new LoggerDefault("ImageConversion");
let obj = {
  NATIVE_MODULE_UNAVAILABLE: "native_module_unavailable",
  PLATFORM_UNSUPPORTED: "platform_unsupported",
  SIZE_LIMIT_EXCEEDED: "size_limit_exceeded",
  CONVERSION_FAILED: "conversion_failed",
  UNKNOWN_ERROR: "unknown_error",
};
obj = {
  label: "heic",
  matches: fn(5252).isHeicFile,
  canConvert(canConvertHeic) {
    return canConvertHeic.canConvertHeic();
  },
};
obj = {
  label: "jxr",
  matches: fn(5252).isJxrFile,
  canConvert(canConvertJxr) {
    return canConvertJxr.canConvertJxr();
  },
};
const size = fn(2);
const result = size.fileFinishedImporting("lib/uploader/imageConversion.tsx");

export const ImageConversionFailureReason = obj;
export const renameToJpegExtension = fn(5252).renameToJpegExtension;
export { maybeConvertHeicToJpeg };
export { maybeConvertJxrToJpeg };
export const convertFileToJpeg = function convertFileToJpeg() {
  const self = this;
  const apply = closure_13.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
