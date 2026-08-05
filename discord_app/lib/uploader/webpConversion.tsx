// discord_app/lib/uploader/webpConversion.tsx
import asyncGeneratorStep from "asyncGeneratorStep";
import { MurmurHashV3 } from "../../../_runtime/01217_MurmurHashV3.js";

const require = arg1;
function _shouldConvertToWebP() {
  const self = this;
  const apply = _shouldConvertToWebP2.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _shouldConvertToWebP2() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp8 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let obj11 = tmp4;
              let closure_1 = tmp9;
              closure_1 = undefined;
              obj11 = undefined;
              if ("image/webp" === lib.type) {
                c4.verbose("[WebP] File already WebP format");
                c6 = 3;
                const obj1 = { value: null, done: true };
                obj1[0] = c5.ALREADY_WEBP;
                return obj1;
              } else {
                const items = ["image/png"];
                if (items.includes(obj18.type)) {
                  c4 = 1;
                  if (typeof obj18.arrayBuffer === "function") {
                    c5 = 4;
                    c6 = 1;
                    const obj2 = { value: null, done: false };
                    obj2[0] = obj18.arrayBuffer();
                    return obj2;
                  } else {
                    const promise = new Promise((closure_0) => {
                      let closure_1 = arg1;
                      const fileReader = new FileReader();
                      fileReader.onload = () => callback(fileReader.result);
                      fileReader.onerror = () => {
                        const error = new Error("Failed to read file as ArrayBuffer");
                        return callback2(error);
                      };
                      const asArrayBuffer = fileReader.readAsArrayBuffer(closure_0);
                    });
                    c5 = 3;
                    c6 = 1;
                    const obj3 = { value: null, done: false };
                    obj3[0] = promise;
                    return obj3;
                  }
                } else {
                  const _HermesInternal = HermesInternal;
                  c4.verbose("[WebP] Unsupported format: " + obj18.type);
                  c6 = 3;
                  const obj4 = { value: null, done: true };
                  obj4[0] = c5.UNSUPPORTED_FORMAT;
                  return obj4;
                }
              }
            }
          } else if (1 === tmp9) {
            c4 = 0;
            c4.warn("[WebP] Failed to read file data:", asyncGeneratorStep);
            c6 = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = c5.CONVERSION_FAILED;
            return obj5;
          } else if (2 === tmp9) {
            c4 = 0;
            c4 = asyncGeneratorStep;
            c4.warn("[WebP] PNG analysis failed:", c4);
            c6 = 3;
            const obj6 = { value: null, done: true };
            obj6[0] = c5.CORRUPTED_FILE;
            return obj6;
          } else {
            if (3 === tmp9) {
              if (arg0 === 1) {
                c6 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c4 = 0;
                c6 = 3;
                const obj7 = { value: null, done: true };
                obj7[0] = arg1;
                return obj7;
              }
            } else if (4 === tmp9) {
              if (arg0 === 1) {
                c6 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c4 = 0;
                c6 = 3;
                const obj8 = { value: null, done: true };
                obj8[0] = arg1;
                return obj8;
              }
            } else if (5 === tmp9) {
              c4 = 0;
              c5 = asyncGeneratorStep;
              c4.warn("[WebP] ICC profile detection failed:", c5);
              c6 = 3;
              const obj9 = { value: null, done: true };
              obj9[0] = c5.ICC_DETECTION_FAILED;
              return obj9;
            } else if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              const obj10 = { value: null, done: true };
              obj10[0] = arg1;
              return obj10;
            } else if (arg1) {
              c4 = 0;
              c6 = 3;
              return { value: null, done: true };
            } else {
              c4 = 0;
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = c5.ICC_NON_SRGB_PROFILE;
              return obj;
            }
            closure_1 = arg1;
            c4 = 2;
            const DiscordImageFactory = lib(obj11[2]).DiscordImageFactory;
            obj11 = DiscordImageFactory.create(closure_1);
            if (null == obj11) {
              const _Error = Error;
              let error = new Error("DiscordImage.create returned null");
              throw error;
            } else if (obj11.hasTransparency()) {
              c4.verbose("[webp] png uses actual transparency - skipping conversion");
              c4 = 0;
              c6 = 3;
              const obj12 = { value: null, done: true };
              obj12[0] = c5.HAS_TRANSPARENCY;
              return obj12;
            } else if (obj11.isAnimated()) {
              c4.verbose("[webp] png is animated (apng) - skipping conversion");
              c4 = 0;
              c6 = 3;
              const obj13 = { value: null, done: true };
              obj13[0] = c5.ANIMATED_IMAGE;
              return obj13;
            } else if (obj11.isPng8()) {
              c4.verbose("[webp] png is PNG8 format (indexed color) - skipping conversion");
              c4 = 0;
              c6 = 3;
              const obj14 = { value: null, done: true };
              obj14[0] = c5.PNG8_FORMAT;
              return obj14;
            } else {
              c4 = 3;
              c5 = 6;
              c6 = 1;
              const obj15 = { value: null, done: false };
              obj15[0] = obj11.hasSrgbIccProfile();
              return obj15;
            }
          }
        } catch (tmp71) {
          asyncGeneratorStep = tmp71;
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
  });
  const _shouldConvertToWebP2 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function hashImageData(data) {
  const uint8Array = new Uint8Array(data.data.buffer);
  return MurmurHashV3(uint8Array).toString(16);
}
function _performWebPConversion() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (function*(arg0) {
      let height;
      let width;
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c6 = 2;
          if (0 === context) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              context = tmp3;
              let element = tmp8;
              element = undefined;
              context = undefined;
              let image;
              let c4;
              context = undefined;
              c6 = undefined;
              let closure_7;
              context = undefined;
              let closure_9;
              let closure_10;
              let closure_11;
              let closure_12;
              let closure_13;
              let closure_14;
              const _document = document;
              context = closure_0;
              element = <canvas />;
              context = element.getContext("2d");
              if (null == context) {
                const _Error2 = Error;
                let error = new Error("could not get canvas context");
                throw error;
              } else {
                image = new globalThis.Image();
                const _URL5 = URL;
                c4 = URL.createObjectURL(context);
                c4 = 1;
                const promise = new Promise((arg0, arg1) => {
                  let closure_0 = arg0;
                  let closure_1 = arg1;
                  image.onload = () => callback();
                  image.onerror = () => {
                    const error = new Error("failed to load image");
                    return callback2(error);
                  };
                  image.src = c4;
                });
                context = 3;
                c6 = 1;
                const obj1 = { value: null, done: false };
                obj1[0] = promise;
                return obj1;
              }
            }
          } else if (1 === tmp8) {
            c4 = 0;
            const _URL4 = URL;
            URL.revokeObjectURL(c4);
            throw image;
          } else if (2 === tmp8) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            } else {
              context = element;
              context = arg1;
              if (null == context) {
                const _Error = Error;
                const error1 = new Error("failed to convert to webp");
                throw error1;
              } else {
                const _performance = performance;
                c6 = performance.now();
                context = 4;
                c6 = 1;
                const obj3 = { value: null, done: false };
                obj3[0] = context.getImageData(0, 0, element.width, element.height);
                return obj3;
              }
            }
          } else if (3 === tmp8) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 0;
              const _URL3 = URL;
              URL.revokeObjectURL(c4);
              c6 = 3;
              const obj4 = { value: null, done: true };
              obj4[0] = arg1;
              return obj4;
            } else {
              context = element;
              context = element;
              context = image;
              element.width = image.width;
              context = element;
              context = image;
              element.height = image.height;
              context = image;
              context = context.drawImage(image, 0, 0);
              c4 = 0;
              context = element;
              const _URL8 = URL;
              context = c4;
              context = URL.revokeObjectURL(c4);
              context = element;
              context = new.target;
              context = new.target;
              context = new Promise((arg0) => {
                element.toBlob(arg0, "image/webp", 1);
              });
              context = 2;
              c6 = 1;
              const obj5 = { value: null, done: false };
              obj5[0] = context;
              return obj5;
            }
          } else if (4 === tmp8) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj6 = { value: null, done: true };
              obj6[0] = arg1;
              return obj6;
            } else {
              closure_7 = arg1;
              context = element;
              context = element;
              context = context.clearRect(0, 0, element.width, element.height);
              context = new.target;
              context = new.target;
              context = new globalThis.Image();
              const _URL7 = URL;
              closure_9 = URL.createObjectURL(context);
              context = element;
              c4 = 2;
              context = new.target;
              context = new.target;
              context = new Promise((arg0, arg1) => {
                let closure_0 = arg0;
                let closure_1 = arg1;
                context.onload = () => callback();
                context.onerror = () => {
                  const error = new Error("failed to load image");
                  return callback2(error);
                };
                context.src = closure_9;
              });
              context = 7;
              c6 = 1;
              const obj7 = { value: null, done: false };
              obj7[0] = context;
              return obj7;
            }
          } else if (5 === tmp8) {
            c4 = 0;
            const _URL2 = URL;
            URL.revokeObjectURL(closure_9);
            throw image;
          } else if (6 === tmp8) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj8 = { value: null, done: true };
              obj8[0] = arg1;
              return obj8;
            } else {
              closure_10 = arg1;
              closure_11 = context(closure_7);
              closure_12 = context(closure_10);
              closure_13 = closure_11 === closure_12;
              const _performance2 = performance;
              closure_14 = performance.now() - c6;
              const name = closure_0.name;
              const _Math = Math;
              ({ width, height } = context);
              const _HermesInternal = HermesInternal;
              c4.verbose("[WebP] Pixel hash results: fileName=" + name + " fileLength={" + closure_0.size + "} width=" + width + " height=" + height + " pixelHash=" + closure_11 + " mezzanineFileLength={" + context.size + "} mezzaninePixelHash=" + closure_12 + " match=" + closure_13 + " elapsed_ms=" + Math.round(closure_14));
              if (closure_13) {
                const obj9 = { success: true, webpBlob: null, pixelHashTimeMs: null };
                obj9[1] = context;
                obj9[2] = closure_14;
              } else {
                const obj10 = { success: false, reason: null, pixelHashTimeMs: null };
                obj10[1] = context.PIXEL_HASH_MISMATCH;
                obj10[2] = closure_14;
              }
              c6 = 3;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 0;
            const _URL = URL;
            URL.revokeObjectURL(closure_9);
            c6 = 3;
            const obj11 = { value: null, done: true };
            obj11[0] = arg1;
            return obj11;
          } else {
            context.drawImage(context, 0, 0);
            c4 = 0;
            const _URL6 = URL;
            URL.revokeObjectURL(closure_9);
            context = 6;
            c6 = 1;
            obj = { value: null, done: false };
            obj[0] = context.getImageData(0, 0, element.width, element.height);
            return obj;
          }
        } catch (tmp54) {
          image = tmp54;
          if (tmp4 === c4) {
            c6 = tmp2;
            throw tmp54;
          } else if (context !== tmp56) {
            context = tmp5;
          }
        }
      }
    })();
  });
  const _performWebPConversion = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _maybeConvertToWebP() {
  let self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (function*(arg0) {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c7 = 2;
          if (0 === webpBlob) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let createFailedResult = tmp3;
              let closure_2 = tmp5;
              let UNKNOWN_ERROR;
              closure_2 = undefined;
              let closure_4;
              let c5;
              webpBlob = undefined;
              c7 = undefined;
              let closure_8;
              createFailedResult = function createFailedResult(CONVERSION_FAILED, size) {
                if (size === undefined) {
                  size = closure_0.size;
                }
                const obj = { success: false, originalFile: closure_0, sizeBefore: closure_0.size, sizeAfter: size, compressionRatio: null, reason: null, compressTimeMs: null };
                let num = 1;
                if (closure_0.size > 0) {
                  num = size / closure_0.size;
                }
                obj[4] = num;
                obj[5] = CONVERSION_FAILED;
                obj[6] = Math.round(performance.now() - closure_2);
                return obj;
              };
              if (null == user) {
                const _Error = Error;
                const error = new Error("file is null or undefined");
                throw error;
              } else {
                const _HermesInternal4 = HermesInternal;
                outer1_4.verbose("[WebP] Starting conversion for: " + tmp90.name);
                const _performance = performance;
                closure_2 = performance.now();
                c5 = 1;
                webpBlob = 2;
                c7 = 1;
                const obj1 = { value: null, done: false };
                obj1[0] = v0(tmp90);
                return obj1;
              }
            }
          } else if (1 === tmp8) {
            c5 = 0;
            let closure_9 = closure_4;
            const _HermesInternal3 = HermesInternal;
            outer1_4.error("[WebP] Conversion failed for " + user.name + ":", closure_9);
            c7 = 3;
            const obj2 = { value: null, done: true };
            obj2[0] = createFailedResult(c5.CONVERSION_FAILED);
            return obj2;
          } else if (2 === tmp8) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 0;
              c7 = 3;
              const obj3 = { value: null, done: true };
              obj3[0] = arg1;
              return obj3;
            } else {
              closure_4 = arg1;
              if (null != closure_4) {
                const _HermesInternal2 = HermesInternal;
                closure_4.verbose("[WebP] Conversion rejected: " + outer1_4);
                c5 = 0;
                c7 = 3;
                const obj4 = { value: null, done: true };
                obj4[0] = outer1_3(outer1_4);
                return obj4;
              } else {
                webpBlob = 3;
                c7 = 1;
                const obj5 = { value: null, done: false };
                obj5[0] = (function performWebPConversion(closure_0) {
                  const self = this;
                  const apply = closure_9.apply;
                  if (typeof apply === "unknown") {
                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                  } else {
                    applyArgumentsResult = apply(self, arguments);
                  }
                  return applyArgumentsResult;
                })(user);
                return obj5;
              }
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            const obj6 = { value: null, done: true };
            obj6[0] = arg1;
            return obj6;
          } else {
            c5 = arg1;
            if (c5.success) {
              if (null != c5.webpBlob) {
                webpBlob = c5.webpBlob;
                let num2 = 1;
                if (user.size > 0) {
                  num2 = webpBlob.size / user.size;
                }
                c7 = num2;
                closure_8 = 1 - c7;
                if (closure_8 < 0) {
                  const _Math = Math;
                  const _HermesInternal = HermesInternal;
                  closure_4.verbose("[WebP] Insufficient savings: " + Math.round(100 * closure_8) + "% < 0% (" + user.size + " -> " + webpBlob.size + " bytes)");
                  createFailedResult(c5.INSUFFICIENT_SAVINGS, webpBlob.size);
                } else {
                  const _performance2 = performance;
                  UNKNOWN_ERROR = performance.now() - closure_2;
                  const name = user.name;
                  const _Math2 = Math;
                  const _HermesInternal5 = HermesInternal;
                  closure_4.verbose("[WebP] Conversion successful: " + name + " to WebP in " + Math.round(UNKNOWN_ERROR) + "ms");
                  const obj7 = { success: true, originalFile: null, convertedBlob: null, sizeBefore: null, sizeAfter: null, compressionRatio: null, hashTimeMs: null, compressTimeMs: null };
                  obj7[1] = user;
                  obj7[2] = webpBlob;
                  obj7[3] = user.size;
                  obj7[4] = webpBlob.size;
                  obj7[5] = c7;
                  obj7[6] = c5.pixelHashTimeMs;
                  const _Math3 = Math;
                  obj7[7] = Math.round(UNKNOWN_ERROR);
                }
                c5 = 0;
                c7 = 3;
              }
            }
            const reason = c5.reason;
            UNKNOWN_ERROR = reason;
            if (reason == null) {
              UNKNOWN_ERROR = c5.UNKNOWN_ERROR;
            }
            c5 = 0;
            c7 = 3;
            obj = { value: null, done: true };
            obj[0] = createFailedResult(UNKNOWN_ERROR);
            return obj;
          }
        } catch (tmp59) {
          closure_4 = tmp59;
          if (tmp4 === c5) {
            c7 = tmp2;
            throw tmp59;
          } else {
            webpBlob = tmp;
          }
        }
      }
    })();
  });
  const _maybeConvertToWebP = tmp;
  let apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let c4 = new require("MurmurHashV3")("WebP");
let obj = { ALREADY_WEBP: "already_webp", UNSUPPORTED_FORMAT: "unsupported_format", ANIMATED_IMAGE: "animated_image", HAS_TRANSPARENCY: "has_transparency", PNG8_FORMAT: "png8_format", INSUFFICIENT_SAVINGS: "insufficient_savings", CONVERSION_FAILED: "conversion_failed", CORRUPTED_FILE: "corrupted_file", PIXEL_HASH_MISMATCH: "pixel_hash_mismatch", ICC_NON_SRGB_PROFILE: "icc_non_srgb_profile", ICC_DETECTION_FAILED: "icc_detection_failed", UNKNOWN_ERROR: "unknown_error" };
const tmp2 = new require("MurmurHashV3")("WebP");
const result = require("create").fileFinishedImporting("lib/uploader/webpConversion.tsx");

export const ConversionFailureReason = obj;
export { _shouldConvertToWebP };
export const maybeConvertToWebP = function maybeConvertToWebP(closure_0) {
  const self = this;
  const apply = _maybeConvertToWebP.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};