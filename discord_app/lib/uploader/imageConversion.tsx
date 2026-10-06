// === Module 7409: imageConversion ===

// Module 7409 (imageConversion)
import LoggerDefault from "Logger" /* 3 */;
import MediaTypes from "MediaTypes" /* 5128 */;
import imageFilename from "imageFilename" /* 7316 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let UNKNOWN_ERROR, c7, c8, closure_12, closure_5;

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
  obj = _asyncToGenerator(async function(arg0, arg1) {
    let c1;
    let c2;
    let c3;
    let c4;
    let c5;
    let closure_0 = arg0;
    let closure_1 = arg1;
    if (c8 === 2) {
      c8 = 3;
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
      let c6;
      try {
        let _null;
        let quality;
        let sysimg;
        let closure_10;
        let closure_11;
        let blob;
        let compressTimeMs;
        let closure_15;
        let elapsed;
        let fail;
        c8 = 2;
        if (0 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            obj2 = { value, done: true };
            return obj2;
          } else {
            closure_4 = tmp;
            c1 = undefined;
            _null = undefined;
            quality = undefined;
            c5 = undefined;
            ({ label: c1, matches: c2, canConvert: c3, quality: c4, maxFileSizeBytes: c5 } = closure_1);
            let closure_6;
            sysimg = undefined;
            closure_10 = undefined;
            closure_11 = undefined;
            closure_12 = undefined;
            blob = undefined;
            compressTimeMs = undefined;
            closure_15 = undefined;
            elapsed = function elapsed() {
              return Math.round(performance.now() - closure_6);
            };
            fail = function fail(CONVERSION_FAILED) {
              obj = { success: false, sizeBefore: closure_0.size, sizeAfter: closure_0.size, reason: CONVERSION_FAILED, compressTimeMs: Math.round(performance.now() - closure_6) };
              return obj;
            };
            c7 = 1;
            c8 = 1;
            return { value: "Reflect", done: true };
          }
        } else if (1 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            obj3 = { value, done: true };
            return obj3;
          } else {
            sysimg = _null;
            if (_null(closure_0)) {
              const _performance = performance;
              closure_6 = performance.now();
              const tmp53 = closure_132_1(closure_132_2[4]);
              sysimg = undefined;
              if (tmp53 != null) {
                sysimg = tmp53.sysimg;
              }
              if (null == sysimg) {
                closure_132_4.verbose("sysimg not available (not Electron)");
                sysimg = fail(closure_132_6.NATIVE_MODULE_UNAVAILABLE);
                c8 = 3;
                const obj4 = { value: sysimg, done: true };
                return obj4;
              } else {
                c6 = 1;
                sysimg = sysimg(sysimg);
                c7 = 3;
                c8 = 1;
                const obj5 = { value: sysimg, done: false };
                return obj5;
              }
            } else {
              c8 = 3;
              return { value: null, done: true };
            }
          }
        } else if (2 === c7) {
          c6 = 0;
          let closure_16 = closure_5;
          const _HermesInternal3 = HermesInternal;
          closure_132_4.warn("" + c1 + " conversion failed for " + closure_0.name + ":", closure_16);
          sysimg = fail(closure_132_6.CONVERSION_FAILED);
          c8 = 3;
          const obj6 = { value: sysimg, done: true };
          return obj6;
        } else if (3 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else if (value) {
            sysimg = closure_0.size;
            if (sysimg > c5) {
              const _HermesInternal2 = HermesInternal;
              closure_132_4.verbose("file too large: " + closure_0.size + " > " + c5);
              sysimg = fail(closure_132_6.SIZE_LIMIT_EXCEEDED);
              c6 = 0;
              c8 = 3;
              const obj8 = { value: sysimg, done: true };
              return obj8;
            } else {
              sysimg = closure_0.arrayBuffer();
              c7 = 4;
              c8 = 1;
              const obj9 = { value: sysimg, done: false };
              return obj9;
            }
          } else {
            const _HermesInternal = HermesInternal;
            closure_132_4.verbose("platform does not support " + c1 + " conversion");
            c6 = 0;
            c8 = 3;
            const obj10 = { value: fail(closure_132_6.PLATFORM_UNSUPPORTED), done: true };
            return obj10;
          }
        } else if (4 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            const obj11 = { value, done: true };
            return obj11;
          } else {
            closure_10 = value;
            const _JSON = JSON;
            const obj12 = { format: "jpeg", quality };
            closure_11 = JSON.stringify(obj12);
            sysimg = sysimg.convertBytes(closure_10, closure_11);
            c7 = 5;
            c8 = 1;
            const obj13 = { value: sysimg, done: false };
            return obj13;
          }
        } else if (5 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            const obj14 = { value, done: true };
            return obj14;
          } else {
            closure_12 = value;
            const _Blob = Blob;
            const items = [closure_12];
            const self = this;
            const self2 = this;
            blob = new Blob(items, { type: "image/jpeg" });
            compressTimeMs = elapsed();
            const _HermesInternal4 = HermesInternal;
            closure_132_4.log("converted " + closure_0.name + ": " + closure_0.size + " -> " + blob.size + " bytes in " + compressTimeMs + "ms");
            closure_15 = null;
            c6 = 2;
            const getBackendName = sysimg.getBackendName;
            sysimg = undefined;
            if (getBackendName != null) {
              sysimg = getBackendName();
            }
            c7 = 7;
            c8 = 1;
            const obj15 = { value: sysimg, done: false };
            return obj15;
          }
        } else {
          if (6 === c7) {
            c6 = 1;
            closure_15 = null;
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            const obj16 = { value, done: true };
            return obj16;
          } else {
            _null = value;
            if (value == null) {
              _null = null;
            }
            sysimg = _null;
            closure_15 = _null;
            c6 = 1;
          }
          sysimg = { success: true, convertedBlob: blob, sizeBefore: closure_0.size, sizeAfter: blob.size, compressTimeMs, imageCompressionQuality: quality / 100, imageEncoderType: closure_132_5(closure_15) };
          c6 = 0;
          c8 = 3;
          const obj17 = { value: sysimg, done: true };
          return obj17;
        }
      } catch (tmp65) {
        closure_5 = tmp65;
        if (0 === c6) {
          c8 = 3;
          throw tmp65;
        } else if (1 === tmp67) {
          c7 = 2;
        } else {
          c7 = 6;
        }
      }
    }
  });
  return obj(...arguments);
};
function maybeConvertHeicToJpeg(user) {
  return convertViaSysimg(user, obj2);
}
function maybeConvertJxrToJpeg(user) {
  return convertViaSysimg(user, obj3);
}
obj = function _convertFileToJpeg() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    let closure_3;
    const user = arg0;
    let closure_1 = arg1;
    let c5 = 0;
    let c6 = 0;
    return (async function(arg0, value) {
      let file;
      let obj10;
      let obj9;
      let tmp41;
      if ("heic" === closure_1) {
        tmp41 = maybeConvertHeicToJpeg(user);
      } else {
        tmp41 = maybeConvertJxrToJpeg(user);
      }
      await tmp41;
      UNKNOWN_ERROR = value;
      let tmp37 = null;
      if (null != UNKNOWN_ERROR) {
        if (UNKNOWN_ERROR.success) {
          if (null != UNKNOWN_ERROR.convertedBlob) {
            const _HermesInternal = HermesInternal;
            closure_132_4.log("" + closure_1 + " conversion worked for " + user.name + ": " + UNKNOWN_ERROR.sizeBefore + " -> " + UNKNOWN_ERROR.sizeAfter + " bytes");
            const _File = File;
            const items = [UNKNOWN_ERROR.convertedBlob];
            const self = this;
            const self2 = this;
            const obj7 = { convertedFile: file, analytics: obj9 };
            const obj8 = { type: "image/jpeg", lastModified: user.lastModified };
            const obj4 = closure_132_0(closure_132_2[3]);
            file = new File(items, obj4.renameToJpegExtension(user.name), obj8);
            obj = obj7;
            obj9 = { convertedMimeType: "image/jpeg", compressTimeMs: UNKNOWN_ERROR.compressTimeMs, imageCompressionQuality: UNKNOWN_ERROR.imageCompressionQuality, imageEncoderType: UNKNOWN_ERROR.imageEncoderType };
          }
          tmp37 = obj;
        }
        const reason = UNKNOWN_ERROR.reason;
        UNKNOWN_ERROR = reason;
        if (reason == null) {
          UNKNOWN_ERROR = closure_132_6.UNKNOWN_ERROR;
        }
        obj = { convertedFile: null, analytics: obj10 };
        obj10 = { convertedMimeType: null, conversionFailureReason: UNKNOWN_ERROR, compressTimeMs: UNKNOWN_ERROR.compressTimeMs };
      }
      return tmp37;
    })();
  });
  return obj(...arguments);
};
let closure_4 = new LoggerDefault("ImageConversion");
obj = { NATIVE_MODULE_UNAVAILABLE: "native_module_unavailable", PLATFORM_UNSUPPORTED: "platform_unsupported", SIZE_LIMIT_EXCEEDED: "size_limit_exceeded", CONVERSION_FAILED: "conversion_failed", UNKNOWN_ERROR: "unknown_error" };
new LoggerDefault("ImageConversion");
let obj2 = {
  label: "heic",
  matches: imageFilename.isHeicFile,
  canConvert(canConvertHeic) {
    return canConvertHeic.canConvertHeic();
  },
  quality: 80,
  maxFileSizeBytes: 20971520
};
let obj3 = {
  label: "jxr",
  matches: imageFilename.isJxrFile,
  canConvert(canConvertJxr) {
    return canConvertJxr.canConvertJxr();
  },
  quality: 85,
  maxFileSizeBytes: 52428800
};
const result = size.fileFinishedImporting("lib/uploader/imageConversion.tsx");

export const ImageConversionFailureReason = obj;
export const renameToJpegExtension = imageFilename.renameToJpegExtension;
export { maybeConvertHeicToJpeg };
export { maybeConvertJxrToJpeg };
export const convertFileToJpeg = function convertFileToJpeg() {
  return obj(...arguments);
};