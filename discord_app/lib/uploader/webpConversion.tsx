// discord_app/lib/uploader/webpConversion.tsx
import LoggerDefault from "../../modules/debug/Logger.tsx";
import _modDef1251 from "../../../_runtime/metro/01251__.js";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import size_mod from "../../../_runtime/metro/00002__.js";

let UNKNOWN_ERROR, closure_12, closure_3, errorResult;

function _shouldConvertToWebP() {
  return obj(...arguments);
}
let obj = function _shouldConvertToWebP2() {
  obj = _asyncToGenerator(async (arg0) => {
    const type = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (async function (arg0) {
      if (c6 === 2) {
        c6 = 3;
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
        try {
          let obj14;
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              closure_2 = tmp;
              closure_1 = undefined;
              obj14 = undefined;
              if ("image/webp" === type.type) {
                closure_2_4.verbose("[WebP] File already WebP format");
                c6 = 3;
                return { value: constants.ALREADY_WEBP, done: true };
              } else {
                const items = ["image/png"];
                if (items.includes(type.type)) {
                  c4 = 1;
                  if (typeof type.arrayBuffer === "function") {
                    c5 = 4;
                    c6 = 1;
                    const obj5 = { value: type.arrayBuffer(), done: false };
                    return obj5;
                  } else {
                    const self3 = this;
                    const self4 = this;
                    c5 = 3;
                    c6 = 1;
                    const obj6 = {
                      value: new Promise((data, arg1) => {
                        closure_0 = data;
                        closure_1 = arg1;
                        const fileReader = new FileReader();
                        fileReader.onload = () => closure_0(fileReader.result);
                        fileReader.onerror = () => {
                          const error = new Error("Failed to read file as ArrayBuffer");
                          return closure_1(error);
                        };
                        const asArrayBuffer = fileReader.readAsArrayBuffer(closure_0);
                      }),
                      done: false,
                    };
                    return obj6;
                  }
                } else {
                  const _HermesInternal = HermesInternal;
                  closure_2_4.verbose("[WebP] Unsupported format: " + type.type);
                  c6 = 3;
                  return { value: constants.UNSUPPORTED_FORMAT, done: true };
                }
              }
            }
          } else if (1 === c5) {
            c4 = 0;
            closure_130_4.warn("[WebP] Failed to read file data:", closure_3);
            c6 = 3;
            return { value: closure_130_5.CONVERSION_FAILED, done: true };
          } else if (2 === c5) {
            c4 = 0;
            closure_4 = closure_3;
            closure_130_4.warn("[WebP] PNG analysis failed:", closure_4);
            c6 = 3;
            return { value: closure_130_5.CORRUPTED_FILE, done: true };
          } else {
            if (3 === c5) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 0;
                c6 = 3;
                return { value, done: true };
              }
            } else if (4 === c5) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 0;
                c6 = 3;
                return { value, done: true };
              }
            } else if (5 === c5) {
              c4 = 0;
              let closure_5 = closure_3;
              closure_130_4.warn("[WebP] ICC profile detection failed:", closure_5);
              c6 = 3;
              return { value: closure_130_5.ICC_DETECTION_FAILED, done: true };
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              return { value, done: true };
            } else if (value) {
              c4 = 0;
              c6 = 3;
              return { value: null, done: true };
            } else {
              c4 = 0;
              c6 = 3;
              return { value: closure_130_5.ICC_NON_SRGB_PROFILE, done: true };
            }
            closure_1 = value;
            c4 = 2;
            const DiscordImageFactory = closure_130_0(closure_130_2[2]).DiscordImageFactory;
            obj14 = DiscordImageFactory.create(closure_1);
            if (null == obj14) {
              const _Error = Error;
              const self = this;
              const self2 = this;
              let error = new Error("DiscordImage.create returned null");
              throw error;
            } else if (obj14.hasTransparency()) {
              closure_130_4.verbose("[webp] png uses actual transparency - skipping conversion");
              c4 = 0;
              c6 = 3;
              return { value: closure_130_5.HAS_TRANSPARENCY, done: true };
            } else if (obj14.isAnimated()) {
              closure_130_4.verbose("[webp] png is animated (apng) - skipping conversion");
              c4 = 0;
              c6 = 3;
              return { value: closure_130_5.ANIMATED_IMAGE, done: true };
            } else if (obj14.isPng8()) {
              closure_130_4.verbose("[webp] png is PNG8 format (indexed color) - skipping conversion");
              c4 = 0;
              c6 = 3;
              return { value: closure_130_5.PNG8_FORMAT, done: true };
            } else {
              c4 = 3;
              c5 = 6;
              c6 = 1;
              const obj35 = { value: obj14.hasSrgbIccProfile(), done: false };
              return obj35;
            }
          }
        } catch (tmp64) {
          closure_3 = tmp64;
          if (0 === c4) {
            c6 = 3;
            throw tmp64;
          } else if (1 === c4) {
            c5 = 1;
          } else if (2 === c4) {
            c5 = 2;
          } else {
            c5 = 5;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
function hashImageData(data) {
  const uint8Array = new Uint8Array(data.data.buffer);
  const str = _modDef1251(uint8Array);
  return str.toString(16);
}
obj = function _performWebPConversion() {
  obj = _asyncToGenerator(async function (arg0) {
    let height;
    let width;
    let closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c4;
      try {
        let image;
        let webpBlob;
        let closure_6;
        let closure_7;
        let image1;
        let src;
        let closure_10;
        let closure_11;
        let closure_13;
        let pixelHashTimeMs;
        let element;
        let context;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp;
            let closure_1 = tmp4;
            image = undefined;
            closure_4 = undefined;
            webpBlob = undefined;
            closure_6 = undefined;
            closure_7 = undefined;
            image1 = undefined;
            src = undefined;
            closure_10 = undefined;
            closure_11 = undefined;
            closure_12 = undefined;
            closure_13 = undefined;
            pixelHashTimeMs = undefined;
            const _document = document;
            element = <canvas />;
            context = element.getContext("2d");
            if (null == context) {
              const _Error2 = Error;
              const self7 = this;
              const self8 = this;
              let error = new Error("could not get canvas context");
              throw error;
            } else {
              const self3 = this;
              const self4 = this;
              image = new globalThis.Image();
              const _URL5 = URL;
              closure_4 = URL.createObjectURL(closure_0);
              c4 = 1;
              const self5 = this;
              const self6 = this;
              const promise = new Promise((arg0, arg1) => {
                closure_0 = arg0;
                closure_1 = arg1;
                image.onload = () => closure_0();
                image.onerror = () => {
                  const error = new Error("failed to load image");
                  return closure_1(error);
                };
                image.src = src;
              });
              c5 = 3;
              c6 = 1;
              const obj4 = { value: promise, done: false };
              return obj4;
            }
          }
        } else if (1 === c5) {
          c4 = 0;
          const _URL4 = URL;
          URL.revokeObjectURL(closure_4);
          throw closure_3;
        } else if (2 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            webpBlob = value;
            if (null == webpBlob) {
              const _Error = Error;
              const self = this;
              const self2 = this;
              const error1 = new Error("failed to convert to webp");
              throw error1;
            } else {
              const _performance = performance;
              closure_6 = performance.now();
              c5 = 4;
              c6 = 1;
              const obj6 = { value: context.getImageData(0, 0, element.width, element.height), done: false };
              return obj6;
            }
          }
        } else if (3 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            const _URL3 = URL;
            URL.revokeObjectURL(closure_4);
            c6 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            element.width = image.width;
            element.height = image.height;
            context.drawImage(image, 0, 0);
            c4 = 0;
            const _URL8 = URL;
            URL.revokeObjectURL(closure_4);
            const self13 = this;
            const self14 = this;
            const promise3 = new Promise((arg0) => {
              closure_1_1.toBlob(arg0, "image/webp", 1);
            });
            c5 = 2;
            c6 = 1;
            const obj8 = { value: promise3, done: false };
            return obj8;
          }
        } else if (4 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj9 = { value, done: true };
            return obj9;
          } else {
            closure_7 = value;
            context.clearRect(0, 0, element.width, element.height);
            const Image2 = globalThis.Image;
            const self9 = this;
            const self10 = this;
            image1 = new globalThis.Image();
            const _URL7 = URL;
            src = URL.createObjectURL(webpBlob);
            c4 = 2;
            const self11 = this;
            const self12 = this;
            const promise4 = new Promise((arg0, arg1) => {
              closure_0 = arg0;
              closure_1 = arg1;
              closure_1_8.onload = () => closure_0();
              closure_1_8.onerror = () => {
                const error = new Error("failed to load image");
                return closure_1(error);
              };
              closure_1_8.src = src;
            });
            c5 = 7;
            c6 = 1;
            const obj10 = { value: promise4, done: false };
            return obj10;
          }
        } else if (5 === c5) {
          c4 = 0;
          const _URL2 = URL;
          URL.revokeObjectURL(src);
          throw closure_3;
        } else if (6 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj11 = { value, done: true };
            return obj11;
          } else {
            let obj13;
            closure_10 = value;
            closure_11 = closure_130_8(closure_7);
            closure_12 = closure_130_8(closure_10);
            closure_13 = closure_11 === closure_12;
            const _performance2 = performance;
            pixelHashTimeMs = performance.now() - closure_6;
            const name = closure_0.name;
            const _Math = Math;
            ({ width, height } = image1);
            const _HermesInternal = HermesInternal;
            closure_130_4.verbose(
              "[WebP] Pixel hash results: fileName=" +
                name +
                " fileLength={" +
                closure_0.size +
                "} width=" +
                width +
                " height=" +
                height +
                " pixelHash=" +
                closure_11 +
                " mezzanineFileLength={" +
                webpBlob.size +
                "} mezzaninePixelHash=" +
                closure_12 +
                " match=" +
                closure_13 +
                " elapsed_ms=" +
                Math.round(pixelHashTimeMs),
            );
            if (closure_13) {
              const obj12 = { success: true, webpBlob, pixelHashTimeMs };
              obj13 = obj12;
            } else {
              obj13 = { success: false, reason: closure_130_5.PIXEL_HASH_MISMATCH, pixelHashTimeMs };
            }
            c6 = 3;
            const obj14 = { value: obj13, done: true };
            return obj14;
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          const _URL = URL;
          URL.revokeObjectURL(src);
          c6 = 3;
          const obj15 = { value, done: true };
          return obj15;
        } else {
          context.drawImage(image1, 0, 0);
          c4 = 0;
          const _URL6 = URL;
          URL.revokeObjectURL(src);
          c5 = 6;
          c6 = 1;
          obj = { value: context.getImageData(0, 0, element.width, element.height), done: false };
          return obj;
        }
      } catch (tmp41) {
        closure_3 = tmp41;
        if (0 === c4) {
          c6 = 3;
          throw tmp41;
        } else if (1 === tmp43) {
          c5 = 1;
        } else {
          c5 = 5;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _maybeConvertToWebP() {
  obj = _asyncToGenerator(async (originalFile) => {
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (async function (arg0) {
      function performWebPConversion() {
        return closure_1_9(...arguments);
      }
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
        try {
          let closure_1;
          let closure_2;
          let closure_5;
          let webpBlob;
          let num2;
          let closure_8;
          let createFailedResult;
          let num = 2;
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp;
              closure_1 = undefined;
              closure_2 = undefined;
              closure_4 = undefined;
              closure_5 = undefined;
              webpBlob = undefined;
              num2 = undefined;
              closure_8 = undefined;
              createFailedResult = function createFailedResult(CONVERSION_FAILED) {
                let num;
                if (size === undefined) {
                  size = originalFile.size;
                }
                obj = {
                  success: false,
                  originalFile,
                  sizeBefore: originalFile.size,
                  sizeAfter: size,
                  compressionRatio: num,
                  reason: CONVERSION_FAILED,
                  compressTimeMs: Math.round(performance.now() - closure_2),
                };
                num = 1;
                if (originalFile.size > 0) {
                  num = size / originalFile.size;
                }
                return obj;
              };
              if (null == originalFile) {
                const _Error = Error;
                const self = this;
                const self2 = this;
                const error = new Error("file is null or undefined");
                throw error;
              } else {
                const _HermesInternal4 = HermesInternal;
                closure_2_4.verbose("[WebP] Starting conversion for: " + originalFile.name);
                const _performance = performance;
                closure_2 = performance.now();
                c5 = 1;
                c6 = 2;
                c7 = 1;
                const obj4 = { value: _shouldConvertToWebP(originalFile), done: false };
                return obj4;
              }
            }
          } else if (1 === c6) {
            c5 = 0;
            let closure_9 = closure_4;
            const _HermesInternal3 = HermesInternal;
            errorResult = closure_131_4.error("[WebP] Conversion failed for " + originalFile.name + ":", closure_9);
            c7 = 3;
            const obj5 = { value: createFailedResult(closure_131_5.CONVERSION_FAILED), done: true };
            return obj5;
          } else if (2 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              c7 = 3;
              return { value, done: true };
            } else {
              closure_4 = value;
              if (null != closure_4) {
                const _HermesInternal2 = HermesInternal;
                closure_131_4.verbose("[WebP] Conversion rejected: " + closure_4);
                c5 = 0;
                c7 = 3;
                const obj7 = { value: createFailedResult(closure_4), done: true };
                return obj7;
              } else {
                c6 = 3;
                c7 = 1;
                const obj8 = { value: performWebPConversion(originalFile), done: false };
                return obj8;
              }
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            return { value, done: true };
          } else {
            closure_5 = value;
            if (closure_5.success) {
              if (null != closure_5.webpBlob) {
                webpBlob = closure_5.webpBlob;
                num2 = 1;
                if (originalFile.size > 0) {
                  num2 = webpBlob.size / originalFile.size;
                }
                closure_8 = 1 - num2;
                if (closure_8 < 0) {
                  const _Math = Math;
                  const _HermesInternal = HermesInternal;
                  closure_131_4.verbose(
                    "[WebP] Insufficient savings: " +
                      Math.round(100 * closure_8) +
                      "% < 0% (" +
                      originalFile.size +
                      " -> " +
                      webpBlob.size +
                      " bytes)",
                  );
                  obj = createFailedResult(closure_131_5.INSUFFICIENT_SAVINGS, webpBlob.size);
                } else {
                  const _performance2 = performance;
                  closure_1 = performance.now() - closure_2;
                  const name = originalFile.name;
                  const _Math2 = Math;
                  const _HermesInternal5 = HermesInternal;
                  closure_131_4.verbose(
                    "[WebP] Conversion successful: " + name + " to WebP in " + Math.round(closure_1) + "ms",
                  );
                  obj = {
                    success: true,
                    originalFile,
                    convertedBlob: webpBlob,
                    sizeBefore: originalFile.size,
                    sizeAfter: webpBlob.size,
                    compressionRatio: num2,
                    hashTimeMs: closure_5.pixelHashTimeMs,
                    compressTimeMs: errorResult,
                  };
                  const _Math3 = Math;
                  errorResult = Math.round(closure_1);
                }
                c5 = 0;
                c7 = 3;
                return { value: obj, done: true };
              }
            }
            const reason = closure_5.reason;
            UNKNOWN_ERROR = reason;
            const tmp24 = createFailedResult;
            if (reason == null) {
              UNKNOWN_ERROR = closure_131_5.UNKNOWN_ERROR;
            }
            c5 = 0;
            c7 = 3;
            const obj11 = { value: tmp24(UNKNOWN_ERROR), done: true };
            return obj11;
          }
        } catch (tmp52) {
          closure_4 = tmp52;
          if (0 === c5) {
            c7 = 3;
            throw tmp52;
          } else {
            c6 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
let closure_4 = new LoggerDefault("WebP");
obj = {
  ALREADY_WEBP: "already_webp",
  UNSUPPORTED_FORMAT: "unsupported_format",
  ANIMATED_IMAGE: "animated_image",
  HAS_TRANSPARENCY: "has_transparency",
  PNG8_FORMAT: "png8_format",
  INSUFFICIENT_SAVINGS: "insufficient_savings",
  CONVERSION_FAILED: "conversion_failed",
  CORRUPTED_FILE: "corrupted_file",
  PIXEL_HASH_MISMATCH: "pixel_hash_mismatch",
  ICC_NON_SRGB_PROFILE: "icc_non_srgb_profile",
  ICC_DETECTION_FAILED: "icc_detection_failed",
  UNKNOWN_ERROR: "unknown_error",
};
new LoggerDefault("WebP");
let size = size_mod;
const result = size.fileFinishedImporting("lib/uploader/webpConversion.tsx");

export const ConversionFailureReason = obj;
export { _shouldConvertToWebP };
export const maybeConvertToWebP = function maybeConvertToWebP() {
  return obj(...arguments);
};
