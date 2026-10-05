// discord_app/lib/uploader/imageConversion.tsx
import LoggerDefault from "../../modules/debug/Logger.tsx";
import MediaTypes from "../../modules/media/MediaTypes.tsx";
import imageFilename from "imageFilename.tsx";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import size from "../../../_runtime/metro/00002__.js";

let UNKNOWN_ERROR, c10, c9, closure_12, closure_7;

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
  return obj(...arguments);
}
let obj = function _convertViaSysimg() {
  obj = _asyncToGenerator(async function (arg0, arg1, arg2, arg3) {
    let c1;
    let c2;
    let c3;
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let closure_3 = arg3;
    if (c10 === 2) {
      c10 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        obj = { value, done: true };
        return obj;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c8;
      try {
        let closure_5;
        let sysimg;
        let closure_10;
        let quality;
        let closure_13;
        let blob;
        let compressTimeMs;
        let closure_16;
        let elapsed;
        let fail;
        c10 = 2;
        if (0 === c9) {
          if (arg0 === 1) {
            c10 = 3;
            throw value;
          } else if (arg0 === 2) {
            c10 = 3;
            obj2 = { value, done: true };
            return obj2;
          } else {
            c1 = undefined;
            c2 = undefined;
            c3 = undefined;
            ({ label: c1, matches: c2, canConvert: c3 } = closure_1);
            closure_4 = closure_2;
            closure_5 = closure_3;
            let closure_6;
            sysimg = undefined;
            closure_10 = undefined;
            quality = undefined;
            closure_12 = undefined;
            closure_13 = undefined;
            blob = undefined;
            compressTimeMs = undefined;
            closure_16 = undefined;
            elapsed = function elapsed() {
              return Math.round(performance.now() - closure_6);
            };
            fail = function fail(CONVERSION_FAILED) {
              obj = {
                success: false,
                sizeBefore: closure_0.size,
                sizeAfter: closure_0.size,
                reason: CONVERSION_FAILED,
                compressTimeMs: Math.round(performance.now() - closure_6),
              };
              return obj;
            };
            c9 = 1;
            c10 = 1;
            return { value: "Set", done: true };
          }
        } else if (1 === c9) {
          if (arg0 === 1) {
            c10 = 3;
            throw value;
          } else if (arg0 === 2) {
            c10 = 3;
            obj3 = { value, done: true };
            return obj3;
          } else {
            sysimg = c2;
            if (c2(closure_0)) {
              const _performance = performance;
              closure_6 = performance.now();
              const tmp50 = closure_134_1(closure_134_2[4]);
              sysimg = undefined;
              if (tmp50 != null) {
                sysimg = tmp50.sysimg;
              }
              if (null == sysimg) {
                closure_134_4.verbose("sysimg not available (not Electron)");
                sysimg = fail(closure_134_6.NATIVE_MODULE_UNAVAILABLE);
                c10 = 3;
                const obj4 = { value: sysimg, done: true };
                return obj4;
              } else {
                c8 = 1;
                sysimg = c3(sysimg);
                c9 = 3;
                c10 = 1;
                const obj5 = { value: sysimg, done: false };
                return obj5;
              }
            } else {
              c10 = 3;
              return { value: null, done: true };
            }
          }
        } else if (2 === c9) {
          c8 = 0;
          let closure_17 = closure_7;
          const _HermesInternal3 = HermesInternal;
          closure_134_4.warn("" + c1 + " conversion failed for " + closure_0.name + ":", closure_17);
          sysimg = fail(closure_134_6.CONVERSION_FAILED);
          c10 = 3;
          const obj6 = { value: sysimg, done: true };
          return obj6;
        } else if (3 === c9) {
          if (arg0 === 1) {
            c10 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 0;
            c10 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else if (value) {
            if (null != closure_5) {
              sysimg = closure_0.size;
              if (sysimg > closure_5) {
                const _HermesInternal2 = HermesInternal;
                closure_134_4.verbose("file too large: " + closure_0.size + " > " + closure_5);
                sysimg = fail(closure_134_6.SIZE_LIMIT_EXCEEDED);
                c8 = 0;
                c10 = 3;
                const obj8 = { value: sysimg, done: true };
                return obj8;
              }
            }
            sysimg = closure_0.arrayBuffer();
            c9 = 4;
            c10 = 1;
            const obj9 = { value: sysimg, done: false };
            return obj9;
          } else {
            const _HermesInternal = HermesInternal;
            closure_134_4.verbose("platform does not support " + c1 + " conversion");
            c8 = 0;
            c10 = 3;
            const obj10 = { value: fail(closure_134_6.PLATFORM_UNSUPPORTED), done: true };
            return obj10;
          }
        } else if (4 === c9) {
          if (arg0 === 1) {
            c10 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 0;
            c10 = 3;
            const obj11 = { value, done: true };
            return obj11;
          } else {
            closure_10 = value;
            const _Math = Math;
            const _Math2 = Math;
            quality = Math.min(100, Math.max(1, closure_4));
            const _JSON = JSON;
            const obj12 = { format: "jpeg", quality };
            closure_12 = JSON.stringify(obj12);
            c9 = 5;
            c10 = 1;
            const obj13 = { value: sysimg.convertBytes(closure_10, closure_12), done: false };
            return obj13;
          }
        } else if (5 === c9) {
          if (arg0 === 1) {
            c10 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 0;
            c10 = 3;
            const obj14 = { value, done: true };
            return obj14;
          } else {
            closure_13 = value;
            const _Blob = Blob;
            const items = [closure_13];
            const self = this;
            const self2 = this;
            blob = new Blob(items, { type: "image/jpeg" });
            compressTimeMs = elapsed();
            const _HermesInternal4 = HermesInternal;
            closure_134_4.log(
              "converted " +
                closure_0.name +
                ": " +
                closure_0.size +
                " -> " +
                blob.size +
                " bytes in " +
                compressTimeMs +
                "ms",
            );
            closure_16 = null;
            c8 = 2;
            const getBackendName = sysimg.getBackendName;
            sysimg = undefined;
            if (getBackendName != null) {
              sysimg = getBackendName();
            }
            c9 = 7;
            c10 = 1;
            const obj15 = { value: sysimg, done: false };
            return obj15;
          }
        } else {
          if (6 === c9) {
            c8 = 1;
            closure_16 = null;
          } else if (arg0 === 1) {
            c10 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 0;
            c10 = 3;
            const obj16 = { value, done: true };
            return obj16;
          } else {
            let c4 = value;
            if (value == null) {
              c4 = null;
            }
            sysimg = c4;
            closure_16 = c4;
            c8 = 1;
          }
          sysimg = {
            success: true,
            convertedBlob: blob,
            sizeBefore: closure_0.size,
            sizeAfter: blob.size,
            compressTimeMs,
            imageCompressionQuality: quality / 100,
            imageEncoderType: closure_134_5(closure_16),
          };
          c8 = 0;
          c10 = 3;
          const obj17 = { value: sysimg, done: true };
          return obj17;
        }
      } catch (tmp62) {
        closure_7 = tmp62;
        if (0 === c8) {
          c10 = 3;
          throw tmp62;
        } else if (1 === tmp64) {
          c9 = 2;
        } else {
          c9 = 6;
        }
      }
    }
  });
  return obj(...arguments);
};
function maybeConvertHeicToJpeg(user, arg1, arg2) {
  let num = arg1;
  if (arg1 === undefined) {
    num = 85;
  }
  return convertViaSysimg(user, obj2, num, arg2);
}
function maybeConvertJxrToJpeg(user, arg1, arg2) {
  let num = arg1;
  if (arg1 === undefined) {
    num = 85;
  }
  return convertViaSysimg(user, obj3, num, arg2);
}
obj = function _convertFileToJpeg() {
  obj = _asyncToGenerator(async (arg0, arg1, arg2, arg3) => {
    let closure_5;
    let closure_6;
    const user = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let closure_3 = arg3;
    let c7 = 0;
    let c8 = 0;
    return (async function (arg0, value, arg2, arg3) {
      let file;
      let obj10;
      let obj9;
      let tmp43;
      if ("heic" === closure_1) {
        tmp43 = maybeConvertHeicToJpeg(user, tmp40, closure_3);
      } else {
        tmp43 = maybeConvertJxrToJpeg(user, tmp40, closure_3);
      }
      await tmp43;
      closure_2 = value;
      let tmp37 = null;
      if (null != closure_2) {
        if (closure_2.success) {
          if (null != closure_2.convertedBlob) {
            const _HermesInternal = HermesInternal;
            closure_134_4.log(
              "" +
                closure_1 +
                " conversion worked for " +
                user.name +
                ": " +
                closure_2.sizeBefore +
                " -> " +
                closure_2.sizeAfter +
                " bytes",
            );
            const _File = File;
            const items = [closure_2.convertedBlob];
            const self = this;
            const self2 = this;
            const obj7 = { convertedFile: file, analytics: obj9 };
            const obj8 = { type: "image/jpeg", lastModified: user.lastModified };
            const obj4 = closure_134_0(closure_134_2[3]);
            file = new File(items, obj4.renameToJpegExtension(user.name), obj8);
            obj = obj7;
            obj9 = {
              convertedMimeType: "image/jpeg",
              compressTimeMs: closure_2.compressTimeMs,
              imageCompressionQuality: closure_2.imageCompressionQuality,
              imageEncoderType: closure_2.imageEncoderType,
            };
          }
          tmp37 = obj;
        }
        const reason = closure_2.reason;
        UNKNOWN_ERROR = reason;
        if (reason == null) {
          UNKNOWN_ERROR = closure_134_6.UNKNOWN_ERROR;
        }
        obj = { convertedFile: null, analytics: obj10 };
        obj10 = {
          convertedMimeType: null,
          conversionFailureReason: UNKNOWN_ERROR,
          compressTimeMs: closure_2.compressTimeMs,
        };
      }
      return tmp37;
    })();
  });
  return obj(...arguments);
};
let closure_4 = new LoggerDefault("ImageConversion");
obj = {
  NATIVE_MODULE_UNAVAILABLE: "native_module_unavailable",
  PLATFORM_UNSUPPORTED: "platform_unsupported",
  SIZE_LIMIT_EXCEEDED: "size_limit_exceeded",
  CONVERSION_FAILED: "conversion_failed",
  UNKNOWN_ERROR: "unknown_error",
};
new LoggerDefault("ImageConversion");
let obj2 = {
  label: "heic",
  matches: imageFilename.isHeicFile,
  canConvert(canConvertHeic) {
    return canConvertHeic.canConvertHeic();
  },
};
let obj3 = {
  label: "jxr",
  matches: imageFilename.isJxrFile,
  canConvert(canConvertJxr) {
    return canConvertJxr.canConvertJxr();
  },
};
const result = size.fileFinishedImporting("lib/uploader/imageConversion.tsx");

export const ImageConversionFailureReason = obj;
export const renameToJpegExtension = imageFilename.renameToJpegExtension;
export { maybeConvertHeicToJpeg };
export { maybeConvertJxrToJpeg };
export const convertFileToJpeg = function convertFileToJpeg() {
  return obj(...arguments);
};
