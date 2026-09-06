// === Module 5181: webpConversion ===

// Module 5181 (webpConversion)
import LoggerDefault from "Logger" /* 3 */;
import MurmurHashV3Default from "MurmurHashV3" /* 1241 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = fn;
function _shouldConvertToWebP() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_7 = async function _shouldConvertToWebP2(arg0) {
  let type = arg0;
  c5 = 0;
  c6 = 0;
  c4 = 0;
  return (async (arg0, value) => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp8 === 3) {
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
            closure_2 = tmp4;
            closure_1 = tmp9;
            closure_129_0 = type;
            closure_129_1 = undefined;
            closure_129_2 = undefined;
            if ("image/webp" === type.type) {
              closure_2_4.verbose("[WebP] File already WebP format");
              c6 = 3;
              const obj1 = { value: constants.ALREADY_WEBP, done: true };
              return obj1;
            } else {
              const items = ["image/png"];
              if (items.includes(obj18.type)) {
                c4 = 1;
                if (typeof obj18.arrayBuffer === "function") {
                  c5 = 4;
                  c6 = 1;
                  const obj2 = { value: obj18.arrayBuffer(), done: false };
                  return obj2;
                } else {
                  const promise = new Promise((arg0, arg1) => {
                    closure_0 = arg0;
                    closure_1 = arg1;
                    const fileReader = new FileReader();
                    fileReader.onload = () => closure_0(fileReader.result);
                    fileReader.onerror = () => {
                      const error = new Error("Failed to read file as ArrayBuffer");
                      return closure_1(error);
                    };
                    const asArrayBuffer = fileReader.readAsArrayBuffer(type);
                  });
                  c5 = 3;
                  c6 = 1;
                  const obj3 = { value: promise, done: false };
                  return obj3;
                }
              } else {
                const _HermesInternal = HermesInternal;
                closure_2_4.verbose("[WebP] Unsupported format: " + obj18.type);
                c6 = 3;
                const obj4 = { value: constants.UNSUPPORTED_FORMAT, done: true };
                return obj4;
              }
            }
          }
        } else if (1 === tmp9) {
          c4 = 0;
          closure_129_3 = closure_3;
          closure_130_4.warn("[WebP] Failed to read file data:", closure_129_3);
          c6 = 3;
          const obj5 = { value: closure_130_5.CONVERSION_FAILED, done: true };
          return obj5;
        } else if (2 === tmp9) {
          c4 = 0;
          closure_129_4 = closure_3;
          closure_130_4.warn("[WebP] PNG analysis failed:", closure_129_4);
          c6 = 3;
          const obj6 = { value: closure_130_5.CORRUPTED_FILE, done: true };
          return obj6;
        } else {
          if (3 === tmp9) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              const obj7 = { value, done: true };
              return obj7;
            }
          } else if (4 === tmp9) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              const obj8 = { value, done: true };
              return obj8;
            }
          } else if (5 === tmp9) {
            c4 = 0;
            closure_129_5 = closure_3;
            closure_130_4.warn("[WebP] ICC profile detection failed:", closure_129_5);
            c6 = 3;
            const obj9 = { value: closure_130_5.ICC_DETECTION_FAILED, done: true };
            return obj9;
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            const obj10 = { value, done: true };
            return obj10;
          } else if (value) {
            c4 = 0;
            c6 = 3;
            return { value: null, done: true };
          } else {
            c4 = 0;
            c6 = 3;
            obj = { value: closure_130_5.ICC_NON_SRGB_PROFILE, done: true };
            return obj;
          }
          closure_129_1 = value;
          c4 = 2;
          const DiscordImageFactory = closure_130_0(closure_130_2[2]).DiscordImageFactory;
          const obj11 = DiscordImageFactory.create(closure_129_1);
          closure_129_2 = obj11;
          if (null == obj11) {
            const _Error = Error;
            let error = new Error("DiscordImage.create returned null");
            throw error;
          } else if (closure_129_2.hasTransparency()) {
            closure_130_4.verbose("[webp] png uses actual transparency - skipping conversion");
            c4 = 0;
            c6 = 3;
            const obj12 = { value: closure_130_5.HAS_TRANSPARENCY, done: true };
            return obj12;
          } else if (closure_129_2.isAnimated()) {
            closure_130_4.verbose("[webp] png is animated (apng) - skipping conversion");
            c4 = 0;
            c6 = 3;
            const obj13 = { value: closure_130_5.ANIMATED_IMAGE, done: true };
            return obj13;
          } else if (closure_129_2.isPng8()) {
            closure_130_4.verbose("[webp] png is PNG8 format (indexed color) - skipping conversion");
            c4 = 0;
            c6 = 3;
            const obj14 = { value: closure_130_5.PNG8_FORMAT, done: true };
            return obj14;
          } else {
            c4 = 3;
            c5 = 6;
            c6 = 1;
            const obj15 = { value: closure_129_2.hasSrgbIccProfile(), done: false };
            return obj15;
          }
        }
      } catch (tmp71) {
        closure_3 = tmp71;
        if (tmp5 === c4) {
          c6 = tmp3;
          throw tmp71;
        } else if (tmp2 === tmp73) {
          c5 = tmp2;
        } else if (tmp === tmp73) {
          c5 = tmp;
        } else {
          c5 = tmp6;
        }
      }
    }
  })();
};
function hashImageData(data) {
  const uint8Array = new Uint8Array(data.data.buffer);
  return MurmurHashV3Default(uint8Array).toString(16);
}
let closure_9 = async function _performWebPConversion(arg0, value) {
  if (c6 === 2) {
    c6 = 3;
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
          closure_2 = tmp3;
          closure_1 = tmp8;
          closure_129_0 = closure_0;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          closure_129_3 = undefined;
          closure_129_4 = undefined;
          closure_129_5 = undefined;
          closure_129_6 = undefined;
          closure_129_7 = undefined;
          closure_129_8 = undefined;
          closure_129_9 = undefined;
          closure_129_10 = undefined;
          closure_129_11 = undefined;
          closure_129_12 = undefined;
          closure_129_13 = undefined;
          closure_129_14 = undefined;
          const _document = document;
          const element = <canvas />;
          closure_129_1 = element;
          const context = element.getContext("2d");
          closure_129_2 = context;
          if (null == context) {
            const _Error2 = Error;
            let error = new Error("could not get canvas context");
            throw error;
          } else {
            const image = new globalThis.Image();
            closure_129_3 = image;
            const _URL5 = URL;
            closure_129_4 = URL.createObjectURL(tmp129);
            c4 = 1;
            let promise = new Promise((arg0, arg1) => {
              closure_0 = arg0;
              closure_1 = arg1;
              closure_1_3.onload = () => closure_0();
              closure_1_3.onerror = () => {
                const error = new Error("failed to load image");
                return closure_1(error);
              };
              closure_1_3.src = src;
            });
            c5 = 3;
            c6 = 1;
            const obj1 = { value: promise, done: false };
            return obj1;
          }
          tmp129 = closure_0;
        }
      } else if (1 === tmp8) {
        c4 = 0;
        const _URL4 = URL;
        URL.revokeObjectURL(closure_129_4);
        throw closure_3;
      } else if (2 === tmp8) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj2 = { value, done: true };
          return obj2;
        } else {
          closure_129_5 = value;
          if (null == closure_129_5) {
            const _Error = Error;
            const error1 = new Error("failed to convert to webp");
            throw error1;
          } else {
            const _performance = performance;
            closure_129_6 = performance.now();
            c5 = 4;
            c6 = 1;
            const obj3 = { value: closure_129_2.getImageData(0, 0, closure_129_1.width, closure_129_1.height), done: false };
            return obj3;
          }
        }
      } else if (3 === tmp8) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          const _URL3 = URL;
          URL.revokeObjectURL(closure_129_4);
          c6 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_129_1.width = closure_129_3.width;
          closure_129_1.height = closure_129_3.height;
          closure_129_2.drawImage(closure_129_3, 0, 0);
          c4 = 0;
          const _URL8 = URL;
          URL.revokeObjectURL(closure_129_4);
          promise = new Promise((arg0) => {
            closure_1_1.toBlob(arg0, "image/webp", 1);
          });
          c5 = 2;
          c6 = 1;
          const obj5 = { value: promise, done: false };
          return obj5;
        }
      } else if (4 === tmp8) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          closure_129_7 = value;
          closure_129_2.clearRect(0, 0, closure_129_1.width, closure_129_1.height);
          const image1 = new globalThis.Image();
          closure_129_8 = image1;
          const _URL7 = URL;
          closure_129_9 = URL.createObjectURL(closure_129_5);
          c4 = 2;
          const promise1 = new Promise((arg0, arg1) => {
            closure_0 = arg0;
            closure_1 = arg1;
            closure_1_8.onload = () => closure_0();
            closure_1_8.onerror = () => {
              const error = new Error("failed to load image");
              return closure_1(error);
            };
            closure_1_8.src = src2;
          });
          c5 = 7;
          c6 = 1;
          const obj7 = { value: promise1, done: false };
          return obj7;
        }
      } else if (5 === tmp8) {
        c4 = 0;
        const _URL2 = URL;
        URL.revokeObjectURL(closure_129_9);
        throw closure_3;
      } else if (6 === tmp8) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          closure_129_10 = value;
          closure_129_11 = closure_130_8(closure_129_7);
          closure_129_12 = closure_130_8(closure_129_10);
          closure_129_13 = closure_129_11 === closure_129_12;
          const _performance2 = performance;
          closure_129_14 = performance.now() - closure_129_6;
          const name = closure_129_0.name;
          const _Math = Math;
          ({ width, height } = closure_129_8);
          const _HermesInternal = HermesInternal;
          closure_130_4.verbose("[WebP] Pixel hash results: fileName=" + name + " fileLength={" + closure_129_0.size + "} width=" + width + " height=" + height + " pixelHash=" + closure_129_11 + " mezzanineFileLength={" + closure_129_5.size + "} mezzaninePixelHash=" + closure_129_12 + " match=" + closure_129_13 + " elapsed_ms=" + Math.round(closure_129_14));
          if (closure_129_13) {
            const obj9 = { success: true, webpBlob: closure_129_5, pixelHashTimeMs: closure_129_14 };
          } else {
            const obj10 = { success: false, reason: closure_130_5.PIXEL_HASH_MISMATCH, pixelHashTimeMs: closure_129_14 };
          }
          c6 = 3;
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        const _URL = URL;
        URL.revokeObjectURL(closure_129_9);
        c6 = 3;
        const obj11 = { value, done: true };
        return obj11;
      } else {
        closure_129_2.drawImage(closure_129_8, 0, 0);
        c4 = 0;
        const _URL6 = URL;
        URL.revokeObjectURL(closure_129_9);
        c5 = 6;
        c6 = 1;
        obj = { value: closure_129_2.getImageData(0, 0, closure_129_1.width, closure_129_1.height), done: false };
        return obj;
      }
    } catch (tmp54) {
      closure_3 = tmp54;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp54;
      } else if (tmp === tmp56) {
        c5 = tmp;
      } else {
        c5 = tmp5;
      }
    }
  }
};
let closure_10 = async function _maybeConvertToWebP(arg0, value) {
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
          closure_3 = tmp3;
          closure_2 = tmp5;
          closure_130_0 = originalFile;
          closure_130_1 = undefined;
          closure_130_2 = undefined;
          closure_130_4 = undefined;
          closure_130_5 = undefined;
          let webpBlob;
          closure_130_7 = undefined;
          closure_130_8 = undefined;
          closure_130_3 = function createFailedResult(reason) {
            let size = arg1;
            if (arg1 === undefined) {
              size = originalFile.size;
            }
            const obj = { success: false, originalFile, sizeBefore: originalFile.size, sizeAfter: size, compressionRatio: null, reason: null, compressTimeMs: null };
            let num = 1;
            if (originalFile.size > 0) {
              num = size / originalFile.size;
            }
            obj.compressionRatio = num;
            obj.reason = reason;
            obj.compressTimeMs = Math.round(performance.now() - closure_1_2);
            return obj;
          };
          if (null == originalFile) {
            const _Error = Error;
            const error = new Error("file is null or undefined");
            throw error;
          } else {
            const _HermesInternal4 = HermesInternal;
            React4.verbose("[WebP] Starting conversion for: " + tmp89.name);
            const _performance = performance;
            closure_130_2 = performance.now();
            c5 = 1;
            c6 = 2;
            c7 = 1;
            const obj1 = { value: _shouldConvertToWebP(tmp89), done: false };
            return obj1;
          }
        }
      } else if (1 === tmp8) {
        c5 = 0;
        closure_130_9 = closure_4;
        const _HermesInternal3 = HermesInternal;
        closure_131_4.error("[WebP] Conversion failed for " + closure_130_0.name + ":", closure_130_9);
        c7 = 3;
        const obj2 = { value: closure_130_3(closure_131_5.CONVERSION_FAILED), done: true };
        return obj2;
      } else if (2 === tmp8) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c7 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_130_4 = value;
          if (null != closure_130_4) {
            const _HermesInternal2 = HermesInternal;
            closure_131_4.verbose("[WebP] Conversion rejected: " + closure_130_4);
            c5 = 0;
            c7 = 3;
            const obj4 = { value: closure_130_3(closure_130_4), done: true };
            return obj4;
          } else {
            c6 = 3;
            c7 = 1;
            const obj5 = {
              value: (function performWebPConversion() {
                          const self = this;
                          const apply = closure_1_9.apply;
                          if (typeof apply === "unknown") {
                            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                          } else {
                            applyArgumentsResult = apply(self, arguments);
                          }
                          return applyArgumentsResult;
                        })(closure_130_0),
              done: false
            };
            return obj5;
          }
        }
      } else if (arg0 === 1) {
        c7 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 0;
        c7 = 3;
        const obj6 = { value, done: true };
        return obj6;
      } else {
        closure_130_5 = value;
        if (closure_130_5.success) {
          if (null != closure_130_5.webpBlob) {
            webpBlob = closure_130_5.webpBlob;
            let num2 = 1;
            if (closure_130_0.size > 0) {
              num2 = webpBlob.size / closure_130_0.size;
            }
            closure_130_7 = num2;
            closure_130_8 = 1 - closure_130_7;
            if (closure_130_8 < 0) {
              const _Math = Math;
              const _HermesInternal = HermesInternal;
              closure_131_4.verbose("[WebP] Insufficient savings: " + Math.round(100 * closure_130_8) + "% < 0% (" + closure_130_0.size + " -> " + webpBlob.size + " bytes)");
              closure_130_3(closure_131_5.INSUFFICIENT_SAVINGS, webpBlob.size);
            } else {
              const _performance2 = performance;
              closure_130_1 = performance.now() - closure_130_2;
              const name = closure_130_0.name;
              const _Math2 = Math;
              const _HermesInternal5 = HermesInternal;
              closure_131_4.verbose("[WebP] Conversion successful: " + name + " to WebP in " + Math.round(closure_130_1) + "ms");
              const obj7 = { success: true, originalFile: closure_130_0, convertedBlob: webpBlob, sizeBefore: closure_130_0.size, sizeAfter: webpBlob.size, compressionRatio: closure_130_7, hashTimeMs: closure_130_5.pixelHashTimeMs, compressTimeMs: null };
              const _Math3 = Math;
              obj7.compressTimeMs = Math.round(closure_130_1);
            }
            c5 = 0;
            c7 = 3;
          }
        }
        const reason = closure_130_5.reason;
        let UNKNOWN_ERROR = reason;
        if (reason == null) {
          UNKNOWN_ERROR = closure_131_5.UNKNOWN_ERROR;
        }
        c5 = 0;
        c7 = 3;
        obj = { value: closure_130_3(UNKNOWN_ERROR), done: true };
        return obj;
      }
    } catch (tmp59) {
      closure_4 = tmp59;
      if (tmp4 === c5) {
        c7 = tmp2;
        throw tmp59;
      } else {
        c6 = tmp;
      }
    }
  }
};
let closure_4 = new LoggerDefault("WebP");
const ConversionFailureReason = { ALREADY_WEBP: "already_webp", UNSUPPORTED_FORMAT: "unsupported_format", ANIMATED_IMAGE: "animated_image", HAS_TRANSPARENCY: "has_transparency", PNG8_FORMAT: "png8_format", INSUFFICIENT_SAVINGS: "insufficient_savings", CONVERSION_FAILED: "conversion_failed", CORRUPTED_FILE: "corrupted_file", PIXEL_HASH_MISMATCH: "pixel_hash_mismatch", ICC_NON_SRGB_PROFILE: "icc_non_srgb_profile", ICC_DETECTION_FAILED: "icc_detection_failed", UNKNOWN_ERROR: "unknown_error" };
let size = fn(2);
const result = size.fileFinishedImporting("lib/uploader/webpConversion.tsx");

export { ConversionFailureReason };
export { _shouldConvertToWebP };
export const maybeConvertToWebP = function maybeConvertToWebP() {
  const self = this;
  const apply = closure_10.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};