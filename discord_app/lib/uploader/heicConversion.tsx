// === Module 5266: heicConversion ===

// Module 5266 (heicConversion)
import LoggerDefault from "Logger" /* 3 */;
import heicFilename from "heicFilename" /* 5171 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
let closure_6 = async function _preConvertHeicForUpload() {
  closure_1 = arg1;
  closure_2 = arg2;
  c5 = 0;
  c6 = 0;
  return (async (arg0, value, arg2) => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
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
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_4 = tmp5;
            closure_3 = tmp2;
            closure_131_0 = value;
            closure_131_1 = undefined;
            if (obj8.isHeicFile(value)) {
              c5 = 1;
              c6 = 1;
              const obj1 = { value: maybeConvertHeicToJpeg(value, closure_1, closure_2), done: false };
              return obj1;
            } else {
              c6 = 3;
              const obj2 = { value, done: true };
              return obj2;
            }
            obj8 = heicFilename;
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_131_1 = value;
          if (null != closure_131_1) {
            if (closure_131_1.success) {
              c6 = 3;
            }
            const _File = File;
            const items = [closure_131_1.convertedBlob];
            obj = closure_132_0(closure_132_2[2]);
            const obj4 = { type: "image/jpeg", lastModified: closure_131_0.lastModified };
            const file = new File(items, obj.renameToJpegExtension(closure_131_0.name), obj4);
          }
        }
      } catch (tmp26) {
        c6 = tmp;
        throw tmp26;
      }
    }
  })();
};
function maybeConvertHeicToJpeg() {
  const self = this;
  const apply = closure_8.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_8 = async function _maybeConvertHeicToJpeg(arg0) {
  if (c8 === 2) {
    c8 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
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
          closure_4 = tmp2;
          closure_3 = tmp4;
          closure_131_1 = undefined;
          closure_131_2 = undefined;
          closure_131_0 = originalFile;
          let num17 = closure_1;
          if (closure_1 === undefined) {
            num17 = 85;
          }
          closure_131_1 = num17;
          closure_131_2 = closure_2;
          closure_131_3 = undefined;
          closure_131_6 = undefined;
          closure_131_7 = undefined;
          closure_131_8 = undefined;
          closure_131_9 = undefined;
          closure_131_10 = undefined;
          closure_131_4 = function elapsed() {
            return Math.round(performance.now() - closure_1_3);
          };
          closure_131_5 = function fail(reason) {
            return { success: false, originalFile, sizeBefore: originalFile.size, sizeAfter: originalFile.size, reason, compressTimeMs: Math.round(performance.now() - closure_1_3) };
          };
          c7 = 1;
          c8 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          const obj1 = { value, done: true };
          return obj1;
        } else {
          if (obj17.isHeicFile(closure_131_0)) {
            const _performance = performance;
            closure_131_3 = performance.now();
            const tmp41 = closure_132_1(closure_132_2[3]);
            let sysimg;
            if (tmp41 != null) {
              sysimg = tmp41.sysimg;
            }
            closure_131_6 = sysimg;
            if (null == closure_131_6) {
              closure_132_4.verbose("sysimg not available (not Electron)");
              c8 = 3;
              const obj2 = { value: closure_131_5(closure_132_5.NATIVE_MODULE_UNAVAILABLE), done: true };
              return obj2;
            } else {
              c7 = 2;
              c8 = 1;
              const obj3 = { value: closure_131_6.canConvertHeic(), done: false };
              return obj3;
            }
          } else {
            c8 = 3;
            return { value: null, done: true };
          }
          obj17 = closure_132_0(closure_132_2[2]);
        }
      } else if (2 === tmp7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else if (value) {
          if (null != closure_131_2) {
            if (closure_131_0.size > closure_131_2) {
              const _HermesInternal2 = HermesInternal;
              closure_132_4.verbose("file too large: " + closure_131_0.size + " > " + closure_131_2);
              c8 = 3;
              const obj5 = { value: closure_131_5(closure_132_5.SIZE_LIMIT_EXCEEDED), done: true };
              return obj5;
            }
          }
          c6 = 1;
          c7 = 4;
          c8 = 1;
          const obj6 = { value: closure_131_0.arrayBuffer(), done: false };
          return obj6;
        } else {
          closure_132_4.verbose("platform does not support HEIC conversion");
          c8 = 3;
          const obj7 = { value: closure_131_5(closure_132_5.PLATFORM_UNSUPPORTED), done: true };
          return obj7;
        }
      } else if (3 === tmp7) {
        c6 = 0;
        closure_131_11 = closure_5;
        const _HermesInternal = HermesInternal;
        closure_132_4.warn("conversion failed for " + closure_131_0.name + ":", closure_131_11);
        c8 = 3;
        const obj8 = { value: closure_131_5(closure_132_5.CONVERSION_FAILED), done: true };
        return obj8;
      } else if (4 === tmp7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 0;
          c8 = 3;
          const obj9 = { value, done: true };
          return obj9;
        } else {
          closure_131_7 = value;
          const _JSON = JSON;
          const obj10 = { format: "jpeg", quality: null };
          const _Math = Math;
          const _Math2 = Math;
          obj10.quality = Math.min(100, Math.max(1, closure_131_1));
          closure_131_8 = JSON.stringify(obj10);
          c7 = 5;
          c8 = 1;
          const obj11 = { value: closure_131_6.convertBytes(closure_131_7, closure_131_8), done: false };
          return obj11;
        }
      } else if (arg0 === 1) {
        c8 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 0;
        c8 = 3;
        const obj12 = { value, done: true };
        return obj12;
      } else {
        closure_131_9 = value;
        const _Blob = Blob;
        const items = [closure_131_9];
        const blob = new Blob(items, { type: "image/jpeg" });
        closure_131_10 = blob;
        ({ name, size } = closure_131_0);
        const _HermesInternal3 = HermesInternal;
        closure_132_4.log("converted " + name + ": " + size + " -> " + closure_131_10.size + " bytes in " + closure_131_4() + "ms");
        const obj13 = { success: true, originalFile: closure_131_0, convertedBlob: closure_131_10, sizeBefore: closure_131_0.size, sizeAfter: closure_131_10.size, compressTimeMs: closure_131_4() };
        c6 = 0;
        c8 = 3;
        obj = { value: obj13, done: true };
        return obj;
      }
    } catch (tmp54) {
      closure_5 = tmp54;
      if (tmp3 === c6) {
        c8 = tmp;
        throw tmp54;
      } else {
        c7 = tmp;
      }
    }
  }
};
let closure_4 = new LoggerDefault("HEIC");
const HeicConversionFailureReason = { NATIVE_MODULE_UNAVAILABLE: "native_module_unavailable", PLATFORM_UNSUPPORTED: "platform_unsupported", SIZE_LIMIT_EXCEEDED: "size_limit_exceeded", CONVERSION_FAILED: "conversion_failed", UNKNOWN_ERROR: "unknown_error" };
const size = fn(2);
const result = size.fileFinishedImporting("lib/uploader/heicConversion.tsx");

export { HeicConversionFailureReason };
export const isHeicFile = fn(5171).isHeicFile;
export const renameToJpegExtension = fn(5171).renameToJpegExtension;
export const preConvertHeicForUpload = function preConvertHeicForUpload() {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export { maybeConvertHeicToJpeg };