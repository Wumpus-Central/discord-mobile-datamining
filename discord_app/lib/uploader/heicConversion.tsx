// discord_app/lib/uploader/heicConversion.tsx
import timestampDefault from "../../modules/debug/Logger.tsx";
import closure_3 from "../../../_runtime/00005_asyncGeneratorStep.js";

const require = arg1;
function _preConvertHeicForUpload() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c5 = 0;
    c6 = 0;
    return (function*(arg0, arg1, arg2) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_4 = tmp5;
              closure_3 = tmp2;
              closure_1 = undefined;
              if (obj8.isHeicFile(lib)) {
                c5 = 1;
                c6 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = closure_1_7(tmp35, tmp36, tmp37);
                return obj1;
              } else {
                c6 = 3;
                const obj2 = { value: null, done: true };
                obj2[0] = tmp35;
                return obj2;
              }
              obj8 = lib(4996);
              tmp36 = closure_1;
              tmp37 = dependencyMap;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          } else {
            closure_1 = arg1;
            if (null != closure_1) {
              if (closure_1.success) {
                c6 = 3;
              }
              const _File = File;
              const items = [closure_1.convertedBlob];
              obj = lib(4996);
              const obj4 = { type: "image/jpeg", lastModified: null };
              obj4[1] = lib.lastModified;
              const file = new File(items, obj.renameToJpegExtension(lib.name), obj4);
            }
          }
        } catch (tmp26) {
          c6 = tmp;
          throw tmp26;
        }
      }
    })();
  });
  closure_6 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function maybeConvertHeicToJpeg(UNKNOWN_ERROR, closure_3, c4) {
  const self = this;
  const apply = _maybeConvertHeicToJpeg.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _maybeConvertHeicToJpeg() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c7 = 0;
    c8 = 0;
    c6 = 0;
    const iter = (function*(arg0) {
      if (c8 === 2) {
        c8 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c8 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let elapsed = tmp2;
              closure_3 = tmp4;
              let num17;
              dependencyMap = undefined;
              if (num17 === undefined) {
                num17 = 85;
              }
              closure_3 = undefined;
              c6 = undefined;
              c7 = undefined;
              c8 = undefined;
              closure_9 = undefined;
              let blob;
              elapsed = function elapsed() {
                return Math.round(performance.now() - closure_3);
              };
              function fail(reason) {
                return { success: false, originalFile: closure_0, sizeBefore: closure_0.size, sizeAfter: closure_0.size, reason, compressTimeMs: Math.round(performance.now() - closure_3) };
              }
              c7 = 1;
              c8 = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp7) {
            if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c8 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              if (obj17.isHeicFile(lib)) {
                const _performance = performance;
                closure_3 = performance.now();
                const tmp41 = num17(4008);
                let sysimg;
                if (tmp41 != null) {
                  sysimg = tmp41.sysimg;
                }
                c6 = sysimg;
                if (null == c6) {
                  elapsed.verbose("sysimg not available (not Electron)");
                  c8 = 3;
                  const obj2 = { value: null, done: true };
                  obj2[0] = fail(fail.NATIVE_MODULE_UNAVAILABLE);
                  return obj2;
                } else {
                  c7 = 2;
                  c8 = 1;
                  const obj3 = { value: null, done: false };
                  obj3[0] = c6.canConvertHeic();
                  return obj3;
                }
              } else {
                c8 = 3;
                return { value: null, done: true };
              }
              obj17 = lib(4996);
            }
          } else if (2 === tmp7) {
            if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c8 = 3;
              const obj4 = { value: null, done: true };
              obj4[0] = arg1;
              return obj4;
            } else if (arg1) {
              if (null != dependencyMap) {
                if (lib.size > dependencyMap) {
                  const _HermesInternal2 = HermesInternal;
                  elapsed.verbose("file too large: " + lib.size + " > " + dependencyMap);
                  c8 = 3;
                  const obj5 = { value: null, done: true };
                  obj5[0] = fail(fail.SIZE_LIMIT_EXCEEDED);
                  return obj5;
                }
              }
              c6 = 1;
              c7 = 4;
              c8 = 1;
              const obj6 = { value: null, done: false };
              obj6[0] = lib.arrayBuffer();
              return obj6;
            } else {
              elapsed.verbose("platform does not support HEIC conversion");
              c8 = 3;
              const obj7 = { value: null, done: true };
              obj7[0] = fail(fail.PLATFORM_UNSUPPORTED);
              return obj7;
            }
          } else if (3 === tmp7) {
            c6 = 0;
            closure_11 = fail;
            const _HermesInternal = HermesInternal;
            elapsed.warn("conversion failed for " + lib.name + ":", closure_11);
            c8 = 3;
            const obj8 = { value: null, done: true };
            obj8[0] = fail(fail.CONVERSION_FAILED);
            return obj8;
          } else if (4 === tmp7) {
            if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 0;
              c8 = 3;
              const obj9 = { value: null, done: true };
              obj9[0] = arg1;
              return obj9;
            } else {
              c7 = arg1;
              const _JSON = JSON;
              const obj10 = { format: "jpeg", quality: null };
              const _Math = Math;
              const _Math2 = Math;
              obj10[1] = Math.min(100, Math.max(1, num17));
              c8 = JSON.stringify(obj10);
              c7 = 5;
              c8 = 1;
              const obj11 = { value: null, done: false };
              obj11[0] = c6.convertBytes(c7, c8);
              return obj11;
            }
          } else if (arg0 === 1) {
            c8 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            const obj12 = { value: null, done: true };
            obj12[0] = arg1;
            return obj12;
          } else {
            closure_9 = arg1;
            const _Blob = Blob;
            const items = [closure_9];
            blob = new Blob(items, { type: "image/jpeg" });
            ({ name, size } = lib);
            const _HermesInternal3 = HermesInternal;
            elapsed.log("converted " + name + ": " + size + " -> " + blob.size + " bytes in " + elapsed() + "ms");
            const obj13 = { success: true, originalFile: null, convertedBlob: null, sizeBefore: null, sizeAfter: null, compressTimeMs: null };
            obj13[1] = lib;
            obj13[2] = blob;
            obj13[3] = lib.size;
            obj13[4] = blob.size;
            obj13[5] = elapsed();
            c6 = 0;
            c8 = 3;
            obj = { value: null, done: true };
            obj[0] = obj13;
            return obj;
          }
        } catch (tmp54) {
          fail = tmp54;
          if (tmp3 === c6) {
            c8 = tmp;
            throw tmp54;
          } else {
            c7 = tmp;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_8 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_4 = new timestampDefault("HEIC");
let obj = { NATIVE_MODULE_UNAVAILABLE: "native_module_unavailable", PLATFORM_UNSUPPORTED: "platform_unsupported", SIZE_LIMIT_EXCEEDED: "size_limit_exceeded", CONVERSION_FAILED: "conversion_failed", UNKNOWN_ERROR: "unknown_error" };
const tmp2 = new timestampDefault("HEIC");
const result = require("set").fileFinishedImporting("lib/uploader/heicConversion.tsx");

export const HeicConversionFailureReason = obj;
export const isHeicFile = require("set").isHeicFile;
export const renameToJpegExtension = require("set").renameToJpegExtension;
export const preConvertHeicForUpload = function preConvertHeicForUpload(c7, quality, maxFileSizeBytes) {
  const self = this;
  const apply = _preConvertHeicForUpload.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export { maybeConvertHeicToJpeg };