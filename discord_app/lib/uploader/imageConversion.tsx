// === Module 7862: imageConversion ===

// Module 7862 (imageConversion)
import LoggerDefault from "Logger" /* 3 */;
import MediaTypes from "MediaTypes" /* 5441 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

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
  if (c8 === 2) {
    c8 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp9 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: null };
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
          obj3 = { value, done: true };
          return obj3;
        } else {
          closure_4 = tmp4;
          closure_3 = tmp7;
          closure_131_1 = undefined;
          closure_131_2 = undefined;
          closure_131_3 = undefined;
          closure_131_4 = undefined;
          closure_131_5 = undefined;
          closure_131_0 = closure_0;
          ({ label: closure_131_1, matches: closure_131_2, canConvert: closure_131_3, quality: closure_131_4, maxFileSizeBytes: closure_131_5 } = closure_1);
          closure_131_6 = undefined;
          closure_131_9 = undefined;
          closure_131_10 = undefined;
          closure_131_11 = undefined;
          closure_131_12 = undefined;
          closure_131_13 = undefined;
          closure_131_14 = undefined;
          closure_131_15 = undefined;
          closure_131_7 = function elapsed() {
            return Math.round(performance.now() - closure_1_6);
          };
          closure_131_8 = function fail(reason) {
            return { success: false, sizeBefore: closure_1_0.size, sizeAfter: closure_1_0.size, reason, compressTimeMs: Math.round(performance.now() - closure_1_6) };
          };
          c7 = 1;
          c8 = 1;
          return { value: "Set", done: true };
        }
      } else if (1 === tmp10) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else if (closure_131_2(closure_131_0)) {
          const _performance = performance;
          closure_131_6 = performance.now();
          const tmp62 = closure_132_1(closure_132_2[4]);
          let sysimg;
          if (tmp62 != null) {
            sysimg = tmp62.sysimg;
          }
          closure_131_9 = sysimg;
          if (null == closure_131_9) {
            closure_132_4.verbose("sysimg not available (not Electron)");
            c8 = 3;
            const obj5 = { value: closure_131_8(closure_132_6.NATIVE_MODULE_UNAVAILABLE), done: true };
            return obj5;
          } else {
            c6 = 1;
            c7 = 3;
            c8 = 1;
            const obj6 = { value: closure_131_3(closure_131_9), done: false };
            return obj6;
          }
        } else {
          c8 = 3;
          return { value: null, done: true };
        }
      } else if (2 === tmp10) {
        c6 = 0;
        closure_131_16 = closure_5;
        const _HermesInternal3 = HermesInternal;
        closure_132_4.warn("" + closure_131_1 + " conversion failed for " + closure_131_0.name + ":", closure_131_16);
        c8 = 3;
        const obj7 = { value: closure_131_8(closure_132_6.CONVERSION_FAILED), done: true };
        return obj7;
      } else if (3 === tmp10) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 0;
          c8 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else if (value) {
          if (closure_131_0.size > closure_131_5) {
            const _HermesInternal2 = HermesInternal;
            closure_132_4.verbose("file too large: " + closure_131_0.size + " > " + closure_131_5);
            c6 = 0;
            c8 = 3;
            const obj9 = { value: closure_131_8(closure_132_6.SIZE_LIMIT_EXCEEDED), done: true };
            return obj9;
          } else {
            c7 = 4;
            c8 = 1;
            const obj10 = { value: closure_131_0.arrayBuffer(), done: false };
            return obj10;
          }
        } else {
          const _HermesInternal = HermesInternal;
          closure_132_4.verbose("platform does not support " + closure_131_1 + " conversion");
          c6 = 0;
          c8 = 3;
          const obj11 = { value: closure_131_8(closure_132_6.PLATFORM_UNSUPPORTED), done: true };
          return obj11;
        }
      } else if (4 === tmp10) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 0;
          c8 = 3;
          const obj12 = { value, done: true };
          return obj12;
        } else {
          closure_131_10 = value;
          const _JSON = JSON;
          const obj13 = { format: "jpeg", quality: closure_131_4 };
          closure_131_11 = JSON.stringify(obj13);
          c7 = 5;
          c8 = 1;
          const obj14 = { value: closure_131_9.convertBytes(closure_131_10, closure_131_11), done: false };
          return obj14;
        }
      } else if (5 === tmp10) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 0;
          c8 = 3;
          const obj15 = { value, done: true };
          return obj15;
        } else {
          closure_131_12 = value;
          const _Blob = Blob;
          const items = [closure_131_12];
          const blob = new Blob(items, { type: "image/jpeg" });
          closure_131_13 = blob;
          closure_131_14 = closure_131_7();
          const _HermesInternal4 = HermesInternal;
          closure_132_4.log("converted " + closure_131_0.name + ": " + closure_131_0.size + " -> " + closure_131_13.size + " bytes in " + closure_131_14 + "ms");
          closure_131_15 = null;
          c6 = 2;
          const getBackendName = closure_131_9.getBackendName;
          let backendName;
          if (getBackendName != null) {
            backendName = getBackendName();
          }
          c7 = 7;
          c8 = 1;
          const obj16 = { value: backendName, done: false };
          return obj16;
        }
      } else {
        if (6 === tmp10) {
          c6 = 1;
          closure_131_15 = null;
          const obj17 = { success: true, convertedBlob: closure_131_13, sizeBefore: closure_131_0.size, sizeAfter: closure_131_13.size, compressTimeMs: closure_131_14, imageCompressionQuality: closure_131_4 / 100, imageEncoderType: closure_132_5(closure_131_15) };
          c6 = 0;
          c8 = 3;
        } else if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 !== 2) {
          c2 = value;
          if (value == null) {
            c2 = null;
          }
          closure_131_15 = c2;
          c6 = 1;
        }
        c6 = 0;
        c8 = 3;
        const obj = { value, done: true };
        return obj;
      }
    } catch (tmp75) {
      closure_5 = tmp75;
      if (tmp5 === c6) {
        c8 = tmp3;
        throw tmp75;
      } else if (tmp2 === tmp77) {
        c7 = tmp;
      } else {
        c7 = tmp6;
      }
    }
  }
};
function maybeConvertHeicToJpeg(arg0) {
  return convertViaSysimg(arg0, obj2);
}
function maybeConvertJxrToJpeg(arg0) {
  return convertViaSysimg(arg0, obj3);
}
let closure_13 = async function _convertFileToJpeg(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: null };
    }
  } else {
    try {
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          obj3 = { value, done: true };
          return obj3;
        } else {
          closure_4 = tmp2;
          closure_3 = tmp5;
          closure_131_0 = closure_0;
          closure_131_1 = closure_1;
          closure_131_2 = undefined;
          if ("heic" === closure_1) {
            maybeConvertHeicToJpeg(closure_0);
          } else {
            maybeConvertJxrToJpeg(closure_0);
          }
          c5 = 1;
          c6 = 1;
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 3;
        const obj5 = { value, done: true };
        return obj5;
      } else {
        closure_131_2 = value;
        if (null == closure_131_2) {
          c6 = 3;
          const obj6 = { value: null, done: true };
          return obj6;
        } else {
          if (!closure_131_2.success) {
            const reason = closure_131_2.reason;
            let UNKNOWN_ERROR = reason;
            if (reason == null) {
              UNKNOWN_ERROR = closure_132_6.UNKNOWN_ERROR;
            }
            let obj = { convertedFile: null, analytics: null };
            const obj7 = { convertedMimeType: null, conversionFailureReason: UNKNOWN_ERROR, compressTimeMs: closure_131_2.compressTimeMs };
            obj.analytics = obj7;
          }
          const _HermesInternal = HermesInternal;
          closure_132_4.log("" + closure_131_1 + " conversion worked for " + closure_131_0.name + ": " + closure_131_2.sizeBefore + " -> " + closure_131_2.sizeAfter + " bytes");
          const obj8 = { convertedFile: null, analytics: null };
          const _File = File;
          const items = [closure_131_2.convertedBlob];
          const obj9 = { type: "image/jpeg", lastModified: closure_131_0.lastModified };
          const file = new File(items, closure_132_0(closure_132_2[3]).renameToJpegExtension(closure_131_0.name), obj9);
          obj8.convertedFile = file;
          const obj10 = { convertedMimeType: "image/jpeg", compressTimeMs: closure_131_2.compressTimeMs, imageCompressionQuality: closure_131_2.imageCompressionQuality, imageEncoderType: closure_131_2.imageEncoderType };
          obj8.analytics = obj10;
          obj = obj8;
          const obj4 = closure_132_0(closure_132_2[3]);
        }
      }
    } catch (tmp47) {
      c6 = tmp;
      throw tmp47;
    }
  }
};
let closure_4 = new LoggerDefault("ImageConversion");
const ImageConversionFailureReason = { NATIVE_MODULE_UNAVAILABLE: "native_module_unavailable", PLATFORM_UNSUPPORTED: "platform_unsupported", SIZE_LIMIT_EXCEEDED: "size_limit_exceeded", CONVERSION_FAILED: "conversion_failed", UNKNOWN_ERROR: "unknown_error" };
let obj2 = {
  label: "heic",
  matches: fn(7769).isHeicFile,
  canConvert(canConvertHeic) {
    return canConvertHeic.canConvertHeic();
  },
  quality: 80,
  maxFileSizeBytes: 20971520
};
let obj3 = {
  label: "jxr",
  matches: fn(7769).isJxrFile,
  canConvert(canConvertJxr) {
    return canConvertJxr.canConvertJxr();
  },
  quality: 85,
  maxFileSizeBytes: 52428800
};
const size = fn(2);
const result = size.fileFinishedImporting("lib/uploader/imageConversion.tsx");

export { ImageConversionFailureReason };
export const renameToJpegExtension = fn(7769).renameToJpegExtension;
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