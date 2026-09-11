// discord_app/lib/uploader/imageConversion.tsx
import LoggerDefault from "../../modules/debug/Logger.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";

function convertViaSysimg() {
  const self = this;
  const apply = closure_8.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_8 = async function _convertViaSysimg(arg0) {
  if (c9 === 2) {
    c9 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
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
      c9 = 2;
      if (0 === c8) {
        if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else if (arg0 === 2) {
          c9 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_5 = tmp2;
          closure_4 = tmp4;
          closure_132_1 = undefined;
          closure_132_2 = undefined;
          closure_132_3 = undefined;
          closure_132_4 = undefined;
          closure_132_5 = undefined;
          closure_132_0 = originalFile;
          ({ label: closure_132_1, matches: closure_132_2, canConvert: closure_132_3 } = closure_1);
          closure_132_4 = closure_2;
          closure_132_5 = closure_3;
          closure_132_6 = undefined;
          closure_132_9 = undefined;
          closure_132_10 = undefined;
          closure_132_11 = undefined;
          closure_132_12 = undefined;
          closure_132_13 = undefined;
          closure_132_7 = function elapsed() {
            return Math.round(performance.now() - closure_1_6);
          };
          closure_132_8 = function fail(reason) {
            return {
              success: false,
              originalFile,
              sizeBefore: originalFile.size,
              sizeAfter: originalFile.size,
              reason,
              compressTimeMs: Math.round(performance.now() - closure_1_6),
            };
          };
          c8 = 1;
          c9 = 1;
          return { value: "PX_16", done: null };
        }
      } else if (1 === tmp7) {
        if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else if (arg0 === 2) {
          c9 = 3;
          const obj1 = { value, done: true };
          return obj1;
        } else if (closure_132_2(closure_132_0)) {
          const _performance = performance;
          closure_132_6 = performance.now();
          const tmp43 = closure_133_0(closure_133_1[3]);
          let sysimg;
          if (tmp43 != null) {
            sysimg = tmp43.sysimg;
          }
          closure_132_9 = sysimg;
          if (null == closure_132_9) {
            closure_133_3.verbose("sysimg not available (not Electron)");
            c9 = 3;
            const obj2 = { value: closure_132_8(closure_133_4.NATIVE_MODULE_UNAVAILABLE), done: true };
            return obj2;
          } else {
            c8 = 2;
            c9 = 1;
            const obj3 = { value: closure_132_3(closure_132_9), done: false };
            return obj3;
          }
        } else {
          c9 = 3;
          return { value: null, done: true };
        }
      } else if (2 === tmp7) {
        if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else if (arg0 === 2) {
          c9 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else if (value) {
          if (null != closure_132_5) {
            if (closure_132_0.size > closure_132_5) {
              const _HermesInternal3 = HermesInternal;
              closure_133_3.verbose("file too large: " + closure_132_0.size + " > " + closure_132_5);
              c9 = 3;
              const obj5 = { value: closure_132_8(closure_133_4.SIZE_LIMIT_EXCEEDED), done: true };
              return obj5;
            }
          }
          c7 = 1;
          c8 = 4;
          c9 = 1;
          const obj6 = { value: closure_132_0.arrayBuffer(), done: false };
          return obj6;
        } else {
          const _HermesInternal2 = HermesInternal;
          closure_133_3.verbose("platform does not support " + closure_132_1 + " conversion");
          c9 = 3;
          const obj7 = { value: closure_132_8(closure_133_4.PLATFORM_UNSUPPORTED), done: true };
          return obj7;
        }
      } else if (3 === tmp7) {
        c7 = 0;
        closure_132_14 = closure_6;
        const _HermesInternal = HermesInternal;
        closure_133_3.warn("" + closure_132_1 + " conversion failed for " + closure_132_0.name + ":", closure_132_14);
        c9 = 3;
        const obj8 = { value: closure_132_8(closure_133_4.CONVERSION_FAILED), done: true };
        return obj8;
      } else if (4 === tmp7) {
        if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 0;
          c9 = 3;
          const obj9 = { value, done: true };
          return obj9;
        } else {
          closure_132_10 = value;
          const _JSON = JSON;
          const obj10 = { format: "jpeg", quality: null };
          const _Math = Math;
          const _Math2 = Math;
          obj10.quality = Math.min(100, Math.max(1, closure_132_4));
          closure_132_11 = JSON.stringify(obj10);
          c8 = 5;
          c9 = 1;
          const obj11 = { value: closure_132_9.convertBytes(closure_132_10, closure_132_11), done: false };
          return obj11;
        }
      } else if (arg0 === 1) {
        c9 = 3;
        throw value;
      } else if (arg0 === 2) {
        c7 = 0;
        c9 = 3;
        const obj12 = { value, done: true };
        return obj12;
      } else {
        closure_132_12 = value;
        const _Blob = Blob;
        const items = [closure_132_12];
        const blob = new Blob(items, { type: "image/jpeg" });
        closure_132_13 = blob;
        ({ name, size } = closure_132_0);
        const _HermesInternal4 = HermesInternal;
        closure_133_3.log(
          "converted " + name + ": " + size + " -> " + closure_132_13.size + " bytes in " + closure_132_7() + "ms",
        );
        const obj13 = {
          success: true,
          originalFile: closure_132_0,
          convertedBlob: closure_132_13,
          sizeBefore: closure_132_0.size,
          sizeAfter: closure_132_13.size,
          compressTimeMs: closure_132_7(),
        };
        c7 = 0;
        c9 = 3;
        obj = { value: obj13, done: true };
        return obj;
      }
    } catch (tmp56) {
      closure_6 = tmp56;
      if (tmp3 === c7) {
        c9 = tmp;
        throw tmp56;
      } else {
        c8 = tmp;
      }
    }
  }
};
let closure_3 = new LoggerDefault("ImageConversion");
let obj = {
  NATIVE_MODULE_UNAVAILABLE: "native_module_unavailable",
  PLATFORM_UNSUPPORTED: "platform_unsupported",
  SIZE_LIMIT_EXCEEDED: "size_limit_exceeded",
  CONVERSION_FAILED: "conversion_failed",
  UNKNOWN_ERROR: "unknown_error",
};
obj = {
  label: "heic",
  matches: fn(5222).isHeicFile,
  canConvert(canConvertHeic) {
    return canConvertHeic.canConvertHeic();
  },
};
obj = {
  label: "jxr",
  matches: fn(5222).isJxrFile,
  canConvert(canConvertJxr) {
    return canConvertJxr.canConvertJxr();
  },
};
const size = fn(2);
const result = size.fileFinishedImporting("lib/uploader/imageConversion.tsx");

export const ImageConversionFailureReason = obj;
export const HeicConversionFailureReason = obj;
export const isHeicFile = fn(5222).isHeicFile;
export const isJxrFile = fn(5222).isJxrFile;
export const renameToJpegExtension = fn(5222).renameToJpegExtension;
export const maybeConvertHeicToJpeg = function maybeConvertHeicToJpeg(arg0) {
  let num = arg1;
  if (arg1 === undefined) {
    num = 85;
  }
  return convertViaSysimg(arg0, obj, num, arg2);
};
export const maybeConvertJxrToJpeg = function maybeConvertJxrToJpeg(arg0) {
  let num = arg1;
  if (arg1 === undefined) {
    num = 85;
  }
  return convertViaSysimg(arg0, obj, num, arg2);
};
